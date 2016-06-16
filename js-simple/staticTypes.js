"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_staticTypes() {
  setModuleName("staticTypes");
  this.definitionModule = "staticTypes";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_staticTypes_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_staticTypes_outer0;
  setLineNumber(3);    // compilenode dialect
  // Dialect import of dialect
  var_prelude = do_import("dialect", gracecode_dialect);
  this.outer = var_prelude;
  setLineNumber(5);    // compilenode import
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
    setModuleName("staticTypes");
    // ast is a simple accessor - elide try ... catch
    return var_ast;
  };
  func1.paramCounts = [0];
  this.methods["ast"] = func1;
  func1.definitionLine = 5;
  func1.definitionModule = "staticTypes";
  func1.debug = "import";
  func1.confidential = true;
  setModuleName("staticTypes");
  setLineNumber(6);    // compilenode import
  // Import of util as util
  if (typeof gracecode_util == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module util'));
  var var_util = do_import("util", gracecode_util);
  var func2 = function(argcv) {    // method util
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for util"));
    setModuleName("staticTypes");
    // util is a simple accessor - elide try ... catch
    return var_util;
  };
  func2.paramCounts = [0];
  this.methods["util"] = func2;
  func2.definitionLine = 6;
  func2.definitionModule = "staticTypes";
  func2.debug = "import";
  func2.confidential = true;
  setModuleName("staticTypes");
  setLineNumber(8);    // compilenode identifier
  var call3 = callmethodChecked(var_prelude, "methods()object", [0, 1], this);
  this.superobj = call3;
  if (call3.data) this.data = call3.data;
  if (call3.hasOwnProperty('_value'))
      this._value = call3._value;
  setLineNumber(45);    // compilenode method
  var func4 = function(argcv) {    // method mixPartNamed(1)parameters(1)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_name__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for mixPartNamed (arg list 1) of mixPartNamed(1)parameters(1)"));
    var var_parameters__39__ = arguments[curarg];
    curarg++;
    if (argcv[1] !== 1)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for parameters (arg list 2) of mixPartNamed(1)parameters(1)"));
    setModuleName("staticTypes");
    var obj5 = Grace_allocObject(GraceObject, "staticTypes.mixPartNamed()parameters");
    obj5.definitionModule = "staticTypes";
    obj5.definitionLine = 45;
    obj5.outer = this;
    var reader_staticTypes_outer6 = function() {
      return this.outer;
    };
    obj5.methods["outer"] = reader_staticTypes_outer6;
    var obj_init_5 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj5;
      setLineNumber(47);    // compilenode identifier
      obj5.data["name"] = var_name__39__;
      var reader_staticTypes_name7 = function() {
        return this.data["name"];
      };
      reader_staticTypes_name7.def = true;
      obj5.methods["name"] = reader_staticTypes_name7;
      setLineNumber(48);    // compilenode identifier
      obj5.data["parameters"] = var_parameters__39__;
      var reader_staticTypes_parameters8 = function() {
        return this.data["parameters"];
      };
      reader_staticTypes_parameters8.def = true;
      obj5.methods["parameters"] = reader_staticTypes_parameters8;
      superDepth = origSuperDepth;
    };
    obj_init_5.apply(obj5, []);
    return obj5;
  };
  func4.paramTypes = [];
  func4.paramTypes.push([type_String, "name'"]);
  func4.paramTypes.push([]);
  func4.paramCounts = [1, 1];
  this.methods["mixPartNamed()parameters"] = func4;
  func4.definitionLine = 45;
  func4.definitionModule = "staticTypes";
    var func9 = function(argcv) {    // method mixPartNamed(1     )parameters(1     )()object
      var curarg = 1;
      var var_name__39__ = arguments[curarg];
      curarg++;
      var var_parameters__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      // Start argument processing
      curarg = 1;
      curarg++;
      curarg++;
      // End argument processing
      setModuleName("staticTypes");
      var returnTarget = invocationCount;
      invocationCount++;
      var obj10 = Grace_allocObject(GraceObject, "mixPartNamed()parameters");
      obj10.definitionModule = "staticTypes";
      obj10.definitionLine = 45;
      var inho10 = inheritingObject;
      while (inho10.superobj) inho10 = inho10.superobj;
      inho10.superobj = obj10;
      obj10.data = inheritingObject.data;
      if (inheritingObject.hasOwnProperty('_value'))
        obj10._value = inheritingObject._value;
      obj10.outer = this;
      var reader_staticTypes_outer11 = function() {
        return this.outer;
      };
      obj10.methods["outer"] = reader_staticTypes_outer11;
      var obj_init_10 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj10;
        setLineNumber(47);    // compilenode identifier
        obj10.data["name"] = var_name__39__;
        var reader_staticTypes_name12 = function() {
          return this.data["name"];
        };
        reader_staticTypes_name12.def = true;
        obj10.methods["name"] = reader_staticTypes_name12;
        setLineNumber(48);    // compilenode identifier
        obj10.data["parameters"] = var_parameters__39__;
        var reader_staticTypes_parameters13 = function() {
          return this.data["parameters"];
        };
        reader_staticTypes_parameters13.def = true;
        obj10.methods["parameters"] = reader_staticTypes_parameters13;
        superDepth = origSuperDepth;
      };
      obj_init_10.apply(inheritingObject, []);
      return obj10;
      };
      func9.paramTypes = [];
      func9.paramTypes.push([type_String, "name'"]);
      func9.paramTypes.push([]);
      this.methods["mixPartNamed()parameters()object"] = func9;
    setLineNumber(586);    // compilenode method
    var func14 = function(argcv) {    // method addVar(1)ofType(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_name = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addVar (arg list 1) of addVar(1)ofType(1)"));
      var var_oType = arguments[curarg];
      curarg++;
      if (argcv[1] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ofType (arg list 2) of addVar(1)ofType(1)"));
      setModuleName("staticTypes");
      setLineNumber(587);    // compilenode call
      var call15 = callmethodChecked(var_prelude, "scope", [0]);
      var call16 = callmethodChecked(call15, "variables", [0]);
      var call17 = callmethodChecked(call16, "at()put", [1, 1], var_name, var_oType);
      setLineNumber(588);    // compilenode identifier
      var call18 = callmethodChecked(var_aMethodType, "member()ofType", [1, 1], var_name, var_oType);
      var call19 = callmethodChecked(var_prelude, "scope", [0]);
      var call20 = callmethodChecked(call19, "methods", [0]);
      var call21 = callmethodChecked(call20, "at()put", [1, 1], var_name, call18);
      return call21;
    };
    func14.paramTypes = [];
    func14.paramTypes.push([type_String, "name"]);
    func14.paramTypes.push([]);
    func14.confidential = true;
    func14.paramCounts = [1, 1];
    this.methods["addVar()ofType"] = func14;
    func14.definitionLine = 586;
    func14.definitionModule = "staticTypes";
    setLineNumber(649);    // compilenode method
    var func22 = function(argcv) {    // method check(1)against(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_req = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for check (arg list 1) of check(1)against(1)"));
      var var_meth = arguments[curarg];
      curarg++;
      if (argcv[1] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for against (arg list 2) of check(1)against(1)"));
      setModuleName("staticTypes");
      setLineNumber(651);    // compilenode identifier
      var call23 = callmethodChecked(var_meth, "name", [0]);
      var var_name = call23;
      setLineNumber(653);    // compilenode identifier
      var call24 = callmethodChecked(var_meth, "signature", [0]);
      var call25 = callmethodChecked(var_req, "with", [0]);
      var block26 = new GraceBlock(this, 653, 2);
      setLineNumber(1);    // compilenode identifier
      block26.real = function(var_part, var_args__39__) {
        setLineNumber(654);    // compilenode identifier
        var call27 = callmethodChecked(var_part, "parameters", [0]);
        var var_params = call27;
        setLineNumber(655);    // compilenode identifier
        var call28 = callmethodChecked(var_args__39__, "args", [0]);
        var var_args = call28;
        setLineNumber(657);    // compilenode identifier
        var call29 = callmethodChecked(var_params, "size", [0]);
        var var_pSize = call29;
        setLineNumber(658);    // compilenode identifier
        var call30 = callmethodChecked(var_args, "size", [0]);
        var var_aSize = call30;
        var if31 = GraceDone;
        setLineNumber(660);    // compilenode identifier
        var opresult34 = callmethodChecked(var_aSize, "\u2260", [1], var_pSize);
        if (Grace_isTrue(opresult34)) {
          var if35 = GraceDone;
          setLineNumber(661);    // compilenode identifier
          var opresult38 = callmethodChecked(var_aSize, ">", [1], var_pSize);
          if (Grace_isTrue(opresult38)) {
            var string39 = new GraceString("many");
            if35 = string39;
          } else {
            var string40 = new GraceString("few");
            if35 = string40;
          }
          var var_which = if35;
          var if41 = GraceDone;
          setLineNumber(662);    // compilenode identifier
          var opresult44 = callmethodChecked(var_aSize, ">", [1], var_pSize);
          if (Grace_isTrue(opresult44)) {
            setLineNumber(663);    // compilenode identifier
            var opresult47 = callmethodChecked(var_pSize, "+", [1], new GraceNum(1));
            var call48 = callmethodChecked(var_args, "at", [1], opresult47);
            if41 = call48;
          } else {
            setLineNumber(666);    // compilenode identifier
            var call49 = callmethodChecked(var_req, "value", [0]);
            if41 = call49;
          }
          var var_where = if41;
          setLineNumber(671);    // compilenode string
          var string50 = new GraceString("");
          var string53 = new GraceString(" but got ");
          var string56 = new GraceString("', expected ");
          var call58 = callmethodChecked(var_part, "name", [0]);
          var string60 = new GraceString("'");
          var opresult62 = callmethodChecked(string60, "++", [1], call58);
          var opresult64 = callmethodChecked(opresult62, "++", [1], string56);
          var opresult66 = callmethodChecked(opresult64, "++", [1], var_pSize);
          var opresult68 = callmethodChecked(opresult66, "++", [1], string53);
          var opresult70 = callmethodChecked(opresult68, "++", [1], var_aSize);
          var opresult72 = callmethodChecked(opresult70, "++", [1], string50);
          setLineNumber(670);    // compilenode string
          var string74 = new GraceString(" arguments to method part ");
          var string77 = new GraceString("too ");
          var opresult79 = callmethodChecked(string77, "++", [1], var_which);
          var opresult81 = callmethodChecked(opresult79, "++", [1], string74);
          var opresult83 = callmethodChecked(opresult81, "++", [1], opresult72);
          setLineNumber(669);    // compilenode identifier
          var call84 = callmethodChecked(var_RequestError, "raise()with", [1, 1], opresult83, var_where);
          if31 = call84;
        }
        setLineNumber(675);    // compilenode block
        var block85 = new GraceBlock(this, 675, 2);
        setLineNumber(1);    // compilenode identifier
        block85.real = function(var_param, var_arg) {
          setLineNumber(676);    // compilenode identifier
          var call86 = callmethodChecked(var_param, "typeAnnotation", [0]);
          var var_pType = call86;
          setLineNumber(677);    // compilenode identifier
          var call87 = callmethodChecked(var_prelude, "typeOf", [1], var_arg);
          var var_aType = call87;
          var if88 = GraceDone;
          setLineNumber(679);    // compilenode identifier
          var call89 = callmethodChecked(var_prelude, "typeOf", [1], var_arg);
          var call90 = callmethodChecked(call89, "isSubtypeOf", [1], var_pType);
          var call91 = callmethodChecked(call90, "not", [0]);
          if (Grace_isTrue(call91)) {
            setLineNumber(683);    // compilenode string
            var string92 = new GraceString("'");
            var string95 = new GraceString("method '");
            var opresult97 = callmethodChecked(string95, "++", [1], var_name);
            var opresult99 = callmethodChecked(opresult97, "++", [1], string92);
            setLineNumber(682);    // compilenode string
            var string101 = new GraceString("' in the ");
            var string104 = new GraceString("satisfy the type of parameter '");
            var opresult106 = callmethodChecked(string104, "++", [1], var_param);
            var opresult108 = callmethodChecked(opresult106, "++", [1], string101);
            setLineNumber(681);    // compilenode string
            var string110 = new GraceString("' does not ");
            var string113 = new GraceString("` of type '");
            var call115 = callmethodChecked(var_arg, "toGrace", [1], new GraceNum(0));
            var string117 = new GraceString("`");
            var opresult119 = callmethodChecked(string117, "++", [1], call115);
            var opresult121 = callmethodChecked(opresult119, "++", [1], string113);
            var opresult123 = callmethodChecked(opresult121, "++", [1], var_aType);
            var opresult125 = callmethodChecked(opresult123, "++", [1], string110);
            setLineNumber(680);    // compilenode string
            var string127 = new GraceString("the expression ");
            var opresult129 = callmethodChecked(string127, "++", [1], opresult125);
            var opresult131 = callmethodChecked(opresult129, "++", [1], opresult108);
            var opresult133 = callmethodChecked(opresult131, "++", [1], opresult99);
            var call134 = callmethodChecked(var_RequestError, "raise()with", [1, 1], opresult133, var_arg);
            if88 = call134;
          }
          return if88;
        };
        var call135 = callmethodChecked(var_prelude, "for()and()do", [1, 1, 1], var_params, var_args, block85);
        return call135;
      };
      var call136 = callmethodChecked(var_prelude, "for()and()do", [1, 1, 1], call24, call25, block26);
      setLineNumber(688);    // compilenode identifier
      var call137 = callmethodChecked(var_meth, "returnType", [0]);
      return call137;
    };
    func22.paramTypes = [];
    func22.paramTypes.push([]);
    func22.paramTypes.push([]);
    func22.confidential = true;
    func22.paramCounts = [1, 1];
    this.methods["check()against"] = func22;
    func22.definitionLine = 649;
    func22.definitionModule = "staticTypes";
    setLineNumber(691);    // compilenode method
    var func138 = function(argcv) {    // method find(1)atScope(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_req = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for find (arg list 1) of find(1)atScope(1)"));
      var var_i = arguments[curarg];
      curarg++;
      if (argcv[1] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for atScope (arg list 2) of find(1)atScope(1)"));
      setModuleName("staticTypes");
      var if139 = GraceDone;
      setLineNumber(692);    // compilenode identifier
      var opresult142 = callmethodChecked(var_i, "==", [1], new GraceNum(0));
      if (Grace_isTrue(opresult142)) {
        setLineNumber(693);    // compilenode identifier
        var call143 = callmethodChecked(var_objectType, "unknown", [0]);
        return call143;
      }
      setLineNumber(696);    // compilenode call
      var call144 = callmethodChecked(var_prelude, "scope", [0]);
      var call145 = callmethodChecked(call144, "methods", [0]);
      var call146 = callmethodChecked(call145, "stack", [0]);
      var call147 = callmethodChecked(call146, "at", [1], var_i);
      var call148 = callmethodChecked(call147, "values", [0]);
      var call149 = callmethodChecked(var_objectType, "fromMethods", [1], call148);
      var var_sType = call149;
      setLineNumber(698);    // compilenode identifier
      var call151 = callmethodChecked(var_req, "value", [0]);
      var call152 = callmethodChecked(call151, "value", [0]);
      var call153 = callmethodChecked(var_sType, "getMethod", [1], call152);
      var cases150 = [];
      var block154 = new GraceBlock(this, 698, 0);
      block154.pattern = var_noSuchMethod;
      block154.real = function() {
        setLineNumber(699);    // compilenode identifier
        var diff157 = callmethodChecked(var_i, "-", [1], new GraceNum(1));
        onSelf = true;
        var call158 = callmethodChecked(this, "find()atScope", [1, 1], var_req, diff157);
        return call158;
      };
      cases150.push(block154);
      setLineNumber(700);    // compilenode block
      var block159 = new GraceBlock(this, 700, 1);
      setLineNumber(0);    // compilenode string
      var string160 = new GraceString("meth");
      var call161 = callmethodChecked(var_prelude, "VariablePattern", [0]);
      var call162 = callmethodChecked(call161, "new", [1], string160);
      var call163 = callmethodChecked(var_prelude, "AndPattern", [0]);
      var call164 = callmethodChecked(call163, "new", [2], call162, var_MethodType);
      block159.pattern = call164;
      setLineNumber(700);    // compilenode identifier
      block159.real = function(var_meth) {
        setLineNumber(701);    // compilenode identifier
        onSelf = true;
        var call165 = callmethodChecked(this, "check()against", [1, 1], var_req, var_meth);
        return call165;
      };
      cases150.push(block159);
      setLineNumber(702);    // compilenode block
      var block166 = new GraceBlock(this, 702, 1);
      setLineNumber(1);    // compilenode identifier
      block166.real = function(var___95____95__16) {
        return GraceDone;
      };
      cases150.push(block166);
      setLineNumber(698);    // compilematchcase
      var matchres150 = matchCase(call153,cases150,false);
      setModuleName("staticTypes");
      return matchres150;
    };
    func138.paramTypes = [];
    func138.paramTypes.push([]);
    func138.paramTypes.push([type_Number, "i"]);
    func138.confidential = true;
    func138.paramCounts = [1, 1];
    this.methods["find()atScope"] = func138;
    func138.definitionLine = 691;
    func138.definitionModule = "staticTypes";
    setLineNumber(873);    // compilenode method
    var func167 = function(argcv) {    // method check(1)matches(1)inMethod(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_node = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for check (arg list 1) of check(1)matches(1)inMethod(1)"));
      var var_eType = arguments[curarg];
      curarg++;
      if (argcv[1] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for matches (arg list 2) of check(1)matches(1)inMethod(1)"));
      var var_name = arguments[curarg];
      curarg++;
      if (argcv[2] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for inMethod (arg list 3) of check(1)matches(1)inMethod(1)"));
      setModuleName("staticTypes");
      setLineNumber(875);    // compilenode identifier
      var call168 = callmethodChecked(var_prelude, "typeOf", [1], var_node);
      var var_aType = call168;
      var if169 = GraceDone;
      setLineNumber(876);    // compilenode identifier
      var call170 = callmethodChecked(var_aType, "isSubtypeOf", [1], var_eType);
      var call171 = callmethodChecked(call170, "not", [0]);
      if (Grace_isTrue(call171)) {
        setLineNumber(879);    // compilenode string
        var string172 = new GraceString("`");
        var string175 = new GraceString("`");
        var opresult177 = callmethodChecked(string175, "++", [1], var_aType);
        var opresult179 = callmethodChecked(opresult177, "++", [1], string172);
        setLineNumber(878);    // compilenode string
        var string181 = new GraceString("`, but returns an expression of type ");
        var string184 = new GraceString("type `");
        var opresult186 = callmethodChecked(string184, "++", [1], var_eType);
        var opresult188 = callmethodChecked(opresult186, "++", [1], string181);
        setLineNumber(877);    // compilenode string
        var string190 = new GraceString("` declares a result of ");
        var string193 = new GraceString("method `");
        var opresult195 = callmethodChecked(string193, "++", [1], var_name);
        var opresult197 = callmethodChecked(opresult195, "++", [1], string190);
        var opresult199 = callmethodChecked(opresult197, "++", [1], opresult188);
        var opresult201 = callmethodChecked(opresult199, "++", [1], opresult179);
        var call202 = callmethodChecked(var_MethodError, "raise()with", [1, 1], opresult201, var_node);
        if169 = call202;
      }
      return if169;
    };
    func167.paramTypes = [];
    func167.paramTypes.push([]);
    func167.paramTypes.push([]);
    func167.paramTypes.push([type_String, "name"]);
    func167.confidential = true;
    func167.paramCounts = [1, 1, 1];
    this.methods["check()matches()inMethod"] = func167;
    func167.definitionLine = 873;
    func167.definitionModule = "staticTypes";
    setLineNumber(1030);    // compilenode method
    var func203 = function(argcv) {    // method outerAt(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_i = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for outerAt(1)"));
      setModuleName("staticTypes");
      var if204 = GraceDone;
      setLineNumber(1032);    // compilenode identifier
      var opresult207 = callmethodChecked(var_i, "\u2264", [1], new GraceNum(1));
      if (Grace_isTrue(opresult207)) {
        setLineNumber(1033);    // compilenode identifier
        var call208 = callmethodChecked(var_objectType, "unknown", [0]);
        return call208;
      }
      setLineNumber(1036);    // compilenode call
      var call209 = callmethodChecked(var_prelude, "scope", [0]);
      var call210 = callmethodChecked(call209, "variables", [0]);
      var call211 = callmethodChecked(call210, "stack", [0]);
      var var_vStack = call211;
      setLineNumber(1037);    // compilenode identifier
      var call212 = callmethodChecked(var_vStack, "at", [1], var_i);
      var var_curr = call212;
      setLineNumber(1039);    // compilenode string
      var string213 = new GraceString("outer");
      var block214 = new GraceBlock(this, 1039, 1);
      setLineNumber(1);    // compilenode identifier
      block214.real = function(var_t) {
        setLineNumber(1039);    // compilenode identifier
        return var_t;
      };
      var block215 = new GraceBlock(this, 1039, 0);
      block215.real = function() {
        setLineNumber(1040);    // compilenode identifier
        var diff218 = callmethodChecked(var_i, "-", [1], new GraceNum(1));
        onSelf = true;
        var call219 = callmethodChecked(this, "outerAt", [1], diff218);
        var var_prev = call219;
        setLineNumber(1042);    // compilenode call
        var call220 = callmethodChecked(var_prelude, "scope", [0]);
        var call221 = callmethodChecked(call220, "methods", [0]);
        var call222 = callmethodChecked(call221, "stack", [0]);
        var var_mStack = call222;
        setLineNumber(1044);    // compilenode identifier
        var diff225 = callmethodChecked(var_i, "-", [1], new GraceNum(1));
        var call226 = callmethodChecked(var_vStack, "at", [1], diff225);
        var var_vars = call226;
        setLineNumber(1045);    // compilenode identifier
        var diff229 = callmethodChecked(var_i, "-", [1], new GraceNum(1));
        var call230 = callmethodChecked(var_mStack, "at", [1], diff229);
        var call231 = callmethodChecked(call230, "values", [0]);
        var var_meths = call231;
        setLineNumber(1047);    // compilenode identifier
        var call232 = callmethodChecked(var_objectType, "fromMethods", [1], var_meths);
        var var_oType = call232;
        setLineNumber(1048);    // compilenode string
        var string233 = new GraceString("outer");
        var call234 = callmethodChecked(var_aMethodType, "member()ofType", [1, 1], string233, var_oType);
        var var_mType = call234;
        setLineNumber(1050);    // compilenode string
        var string235 = new GraceString("outer");
        var call236 = callmethodChecked(var_curr, "at()put", [1, 1], string235, var_oType);
        setLineNumber(1051);    // compilenode string
        var string237 = new GraceString("outer");
        var call238 = callmethodChecked(var_mStack, "at", [1], var_i);
        var call239 = callmethodChecked(call238, "at()put", [1, 1], string237, var_mType);
        setLineNumber(1053);    // compilenode identifier
        return var_oType;
      };
      setLineNumber(1039);    // compilenode identifier
      var call240 = callmethodChecked(var_curr, "atKey()do()else", [1, 1, 1], string213, block214, block215);
      return call240;
    };
    func203.paramTypes = [];
    func203.paramTypes.push([type_Number, "i"]);
    func203.confidential = true;
    func203.paramCounts = [1];
    this.methods["outerAt"] = func203;
    func203.definitionLine = 1030;
    func203.definitionModule = "staticTypes";
    setLineNumber(1060);    // compilenode method
    var func241 = function(argcv) {    // method processBody(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_body = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for processBody(1)"));
      setModuleName("staticTypes");
      setLineNumber(1062);    // compilenode identifier
      onSelf = true;
      var call242 = callmethodChecked(this, "collectTypes", [1], var_body);
      setLineNumber(1065);    // compilenode block
      var block243 = new GraceBlock(this, 1065, 0);
      block243.real = function() {
        var call244 = callmethodChecked(var_body, "first", [0]);
        var call245 = callmethodChecked(var_prelude, "Inherits", [0]);
        var call246 = callmethodChecked(call245, "match", [1], call244);
        return call246;
      };
      var call249 = callmethodChecked(var_body, "size", [0]);
      var opresult251 = callmethodChecked(call249, ">", [1], new GraceNum(0));
      var opresult253 = callmethodChecked(opresult251, "&&", [1], block243);
      var var_hasInherits = opresult253;
      var if254 = GraceDone;
      setLineNumber(1066);    // compilenode identifier
      if (Grace_isTrue(var_hasInherits)) {
        setLineNumber(1067);    // compilenode identifier
        var call255 = callmethodChecked(var_body, "first", [0]);
        var call256 = callmethodChecked(call255, "value", [0]);
        var var_inheriting = call256;
        setLineNumber(1068);    // compilenode object
        var obj257 = Grace_allocObject(null, "object");
        obj257.definitionModule = "staticTypes";
        obj257.definitionLine = 1068;
        obj257.outer = this;
        var reader_staticTypes_outer258 = function() {
          return this.outer;
        };
        obj257.methods["outer"] = reader_staticTypes_outer258;
        var obj_init_257 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj257;
          var func259 = function(argcv) {    // method visitIdentifier(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_ident = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitIdentifier(1)"));
            setModuleName("staticTypes");
            var if260 = GraceDone;
            setLineNumber(1074);    // compilenode identifier
            var call261 = callmethodChecked(var_ident, "value", [0]);
            onSelf = true;
            var call262 = callmethodChecked(this, "illegal", [0]);
            var call263 = callmethodChecked(call262, "contains", [1], call261);
            if (Grace_isTrue(call263)) {
              setLineNumber(1076);    // compilenode string
              var string264 = new GraceString("in inheritance clause");
              setLineNumber(1075);    // compilenode string
              var string266 = new GraceString("` ");
              var call268 = callmethodChecked(var_ident, "value", [0]);
              var string270 = new GraceString("reference to `");
              var opresult272 = callmethodChecked(string270, "++", [1], call268);
              var opresult274 = callmethodChecked(opresult272, "++", [1], string266);
              var opresult276 = callmethodChecked(opresult274, "++", [1], string264);
              var call277 = callmethodChecked(var_ObjectError, "raise()with", [1, 1], opresult276, var_ident);
              if260 = call277;
            }
            return if260;
          };
          func259.paramCounts = [1];
          obj257.methods["visitIdentifier"] = func259;
          func259.definitionLine = 1073;
          func259.definitionModule = "staticTypes";
          setLineNumber(1069);    // compilenode identifier
          var call278 = callmethodChecked(var_ast, "baseVisitor()object", [0, 1], this);
          obj257.superobj = call278;
          if (call278.data) obj257.data = call278.data;
          if (call278.hasOwnProperty('_value'))
              obj257._value = call278._value;
          setLineNumber(1071);    // compilenode string
          var string280 = new GraceString("self");
          var string281 = new GraceString("super");
          var array279 = new PrimitiveGraceList([string280, string281]);
          obj257.data["illegal"] = array279;
          var reader_staticTypes_illegal282 = function() {
            return this.data["illegal"];
          };
          reader_staticTypes_illegal282.def = true;
          reader_staticTypes_illegal282.confidential = true;
          obj257.methods["illegal"] = reader_staticTypes_illegal282;
          superDepth = origSuperDepth;
        };
        obj_init_257.apply(obj257, []);
        setLineNumber(1068);    // compilenode identifier
        var call283 = callmethodChecked(var_inheriting, "accept", [1], obj257);
        setLineNumber(1081);    // compilenode identifier
        var call284 = callmethodChecked(var_prelude, "typeOf", [1], var_inheriting);
        if254 = call284;
      } else {
        setLineNumber(1083);    // compilenode identifier
        var call285 = callmethodChecked(var_objectType, "base", [0]);
        if254 = call285;
      }
      var var_superType = if254;
      setLineNumber(1086);    // compilenode string
      var string286 = new GraceString("super");
      var call287 = callmethodChecked(var_prelude, "scope", [0]);
      var call288 = callmethodChecked(call287, "variables", [0]);
      var call289 = callmethodChecked(call288, "at()put", [1, 1], string286, var_superType);
      var if290 = GraceDone;
      setLineNumber(1091);    // compilenode identifier
      var call291 = callmethodChecked(var_superType, "isUnknown", [0]);
      if (Grace_isTrue(call291)) {
        setLineNumber(1092);    // compilenode string
        var string292 = new GraceString("Self");
        var call293 = callmethodChecked(var_prelude, "scope", [0]);
        var call294 = callmethodChecked(call293, "types", [0]);
        var call295 = callmethodChecked(call294, "at()put", [1, 1], string292, var_superType);
        setLineNumber(1093);    // compilenode identifier
        if290 = var_superType;
      } else {
        setLineNumber(1096);    // compilenode array
        var array296 = new PrimitiveGraceList([]);
        var var_publicMethods = array296;
        setLineNumber(1097);    // compilenode array
        var array297 = new PrimitiveGraceList([]);
        var var_allMethods = array297;
        setLineNumber(1099);    // compilenode block
        var block298 = new GraceBlock(this, 1099, 1);
        setLineNumber(1);    // compilenode identifier
        block298.real = function(var_stmt) {
          setLineNumber(1100);    // compilenode identifier
          var cases299 = [];
          var block300 = new GraceBlock(this, 1100, 1);
          setLineNumber(1023);    // compilenode string
          var string301 = new GraceString("meth");
          var call302 = callmethodChecked(var_prelude, "VariablePattern", [0]);
          var call303 = callmethodChecked(call302, "new", [1], string301);
          setLineNumber(1100);    // compilenode call
          var call304 = callmethodChecked(var_prelude, "Method", [0]);
          setLineNumber(1023);    // compilenode call
          var call305 = callmethodChecked(var_prelude, "AndPattern", [0]);
          var call306 = callmethodChecked(call305, "new", [2], call303, call304);
          block300.pattern = call306;
          setLineNumber(1100);    // compilenode call
          var call307 = callmethodChecked(var_prelude, "Method", [0]);
          block300.real = function(var_meth) {
            setLineNumber(1101);    // compilenode identifier
            var call308 = callmethodChecked(var_aMethodType, "fromNode", [1], var_meth);
            var var_mType = call308;
            setLineNumber(1102);    // compilenode identifier
            var call309 = callmethodChecked(var_allMethods, "push", [1], var_mType);
            var if310 = GraceDone;
            setLineNumber(1103);    // compilenode identifier
            onSelf = true;
            var call311 = callmethodChecked(this, "isPublic", [1], var_meth);
            if (Grace_isTrue(call311)) {
              setLineNumber(1104);    // compilenode identifier
              var call312 = callmethodChecked(var_publicMethods, "push", [1], var_mType);
              if310 = call312;
            }
            setLineNumber(1107);    // compilenode identifier
            var call313 = callmethodChecked(var_mType, "name", [0]);
            var call314 = callmethodChecked(var_prelude, "scope", [0]);
            var call315 = callmethodChecked(call314, "methods", [0]);
            var call316 = callmethodChecked(call315, "at()put", [1, 1], call313, var_mType);
            var if317 = GraceDone;
            setLineNumber(1108);    // compilenode identifier
            onSelf = true;
            var call318 = callmethodChecked(this, "isMember", [1], var_mType);
            if (Grace_isTrue(call318)) {
              setLineNumber(1109);    // compilenode identifier
              var call319 = callmethodChecked(var_mType, "name", [0]);
              var call320 = callmethodChecked(var_mType, "returnType", [0]);
              var call321 = callmethodChecked(var_prelude, "scope", [0]);
              var call322 = callmethodChecked(call321, "variables", [0]);
              var call323 = callmethodChecked(call322, "at()put", [1, 1], call319, call320);
              if317 = call323;
            }
            return if317;
          };
          cases299.push(block300);
          setLineNumber(1111);    // compilenode block
          var block324 = new GraceBlock(this, 1111, 1);
          setLineNumber(1023);    // compilenode string
          var string325 = new GraceString("defd");
          var call326 = callmethodChecked(var_prelude, "VariablePattern", [0]);
          var call327 = callmethodChecked(call326, "new", [1], string325);
          setLineNumber(1111);    // compilenode call
          var call328 = callmethodChecked(var_prelude, "Var", [0]);
          var call330 = callmethodChecked(var_prelude, "Def", [0]);
          var opresult332 = callmethodChecked(call330, "|", [1], call328);
          setLineNumber(1023);    // compilenode call
          var call333 = callmethodChecked(var_prelude, "AndPattern", [0]);
          var call334 = callmethodChecked(call333, "new", [2], call327, opresult332);
          block324.pattern = call334;
          setLineNumber(1111);    // compilenode call
          var call335 = callmethodChecked(var_prelude, "Var", [0]);
          var call337 = callmethodChecked(var_prelude, "Def", [0]);
          var opresult339 = callmethodChecked(call337, "|", [1], call335);
          block324.real = function(var_defd) {
            var if340 = GraceDone;
            setLineNumber(1112);    // compilenode identifier
            onSelf = true;
            var call341 = callmethodChecked(this, "isPublic", [1], var_defd);
            if (Grace_isTrue(call341)) {
              setLineNumber(1113);    // compilenode identifier
              var call342 = callmethodChecked(var_aMethodType, "fromNode", [1], var_defd);
              var var_mType = call342;
              setLineNumber(1114);    // compilenode identifier
              var call343 = callmethodChecked(var_allMethods, "push", [1], var_mType);
              setLineNumber(1115);    // compilenode identifier
              var call344 = callmethodChecked(var_publicMethods, "push", [1], var_mType);
              if340 = call344;
            }
            return if340;
          };
          cases299.push(block324);
          setLineNumber(1117);    // compilenode block
          var block345 = new GraceBlock(this, 1117, 1);
          setLineNumber(1);    // compilenode identifier
          block345.real = function(var___95____95__22) {
            return GraceDone;
          };
          cases299.push(block345);
          setLineNumber(1100);    // compilematchcase
          var matchres299 = matchCase(var_stmt,cases299,false);
          setModuleName("staticTypes");
          return matchres299;
        };
        var call346 = callmethodChecked(var_prelude, "for()do", [1, 1], var_body, block298);
        setLineNumber(1120);    // compilenode string
        var string347 = new GraceString("Self");
        var call348 = callmethodChecked(var_objectType, "fromMethods", [1], var_allMethods);
        var call349 = callmethodChecked(var_prelude, "scope", [0]);
        var call350 = callmethodChecked(call349, "types", [0]);
        var call351 = callmethodChecked(call350, "at()put", [1, 1], string347, call348);
        setLineNumber(1121);    // compilenode identifier
        var call352 = callmethodChecked(var_objectType, "fromMethods", [1], var_publicMethods);
        if290 = call352;
      }
      var var_publicType = if290;
      setLineNumber(1124);    // compilenode string
      var string353 = new GraceString("self");
      var call354 = callmethodChecked(var_prelude, "scope", [0]);
      var call355 = callmethodChecked(call354, "variables", [0]);
      var call356 = callmethodChecked(call355, "at()put", [1, 1], string353, var_publicType);
      var if357 = GraceDone;
      setLineNumber(1127);    // compilenode identifier
      if (Grace_isTrue(var_hasInherits)) {
        setLineNumber(1128);    // compilenode identifier
        var call358 = callmethodChecked(var_body, "size", [0]);
        var opresult361 = callmethodChecked(new GraceNum(2), "..", [1], call358);
        if357 = opresult361;
      } else {
        setLineNumber(1130);    // compilenode identifier
        var call362 = callmethodChecked(var_body, "indices", [0]);
        if357 = call362;
      }
      var var_indices = if357;
      setLineNumber(1133);    // compilenode block
      var block363 = new GraceBlock(this, 1133, 1);
      setLineNumber(1);    // compilenode identifier
      block363.real = function(var_i) {
        setLineNumber(1134);    // compilenode identifier
        var call364 = callmethodChecked(var_body, "at", [1], var_i);
        var call365 = callmethodChecked(var_prelude, "checkTypes", [1], call364);
        return call365;
      };
      var call366 = callmethodChecked(var_prelude, "for()do", [1, 1], var_indices, block363);
      setLineNumber(1137);    // compilenode identifier
      return var_publicType;
    };
    func241.confidential = true;
    func241.paramCounts = [1];
    this.methods["processBody"] = func241;
    func241.definitionLine = 1060;
    func241.definitionModule = "staticTypes";
    setLineNumber(1145);    // compilenode method
    var func367 = function(argcv) {    // method collectTypes(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_nodes = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for collectTypes(1)"));
      setModuleName("staticTypes");
      setLineNumber(1146);    // compilenode array
      var array368 = new PrimitiveGraceList([]);
      var var_names = array368;
      setLineNumber(1147);    // compilenode array
      var array369 = new PrimitiveGraceList([]);
      var var_types = array369;
      setLineNumber(1148);    // compilenode array
      var array370 = new PrimitiveGraceList([]);
      var var_placeholders = array370;
      setLineNumber(1150);    // compilenode block
      var block371 = new GraceBlock(this, 1150, 1);
      setLineNumber(1);    // compilenode identifier
      block371.real = function(var_node) {
        setLineNumber(1151);    // compilenode identifier
        var cases372 = [];
        var block373 = new GraceBlock(this, 1151, 1);
        setLineNumber(1023);    // compilenode string
        var string374 = new GraceString("td");
        var call375 = callmethodChecked(var_prelude, "VariablePattern", [0]);
        var call376 = callmethodChecked(call375, "new", [1], string374);
        setLineNumber(1151);    // compilenode call
        var call377 = callmethodChecked(var_prelude, "TypeDeclaration", [0]);
        setLineNumber(1023);    // compilenode call
        var call378 = callmethodChecked(var_prelude, "AndPattern", [0]);
        var call379 = callmethodChecked(call378, "new", [2], call376, call377);
        block373.pattern = call379;
        setLineNumber(1151);    // compilenode call
        var call380 = callmethodChecked(var_prelude, "TypeDeclaration", [0]);
        block373.real = function(var_td) {
          var if381 = GraceDone;
          setLineNumber(1152);    // compilenode identifier
          var call382 = callmethodChecked(var_td, "nameString", [0]);
          var call383 = callmethodChecked(var_names, "contains", [1], call382);
          if (Grace_isTrue(call383)) {
            setLineNumber(1154);    // compilenode string
            var string384 = new GraceString("the same name as another type in the same scope");
            setLineNumber(1153);    // compilenode string
            var string386 = new GraceString(" uses ");
            var call388 = callmethodChecked(var_td, "nameString", [0]);
            var string390 = new GraceString("the type ");
            var opresult392 = callmethodChecked(string390, "++", [1], call388);
            var opresult394 = callmethodChecked(opresult392, "++", [1], string386);
            var opresult396 = callmethodChecked(opresult394, "++", [1], string384);
            var call397 = callmethodChecked(var_TypeDeclarationError, "raise()with", [1, 1], opresult396, var_td);
            if381 = call397;
          }
          setLineNumber(1157);    // compilenode identifier
          var call398 = callmethodChecked(var_td, "value", [0]);
          var call399 = callmethodChecked(var_names, "push", [1], call398);
          setLineNumber(1161);    // compilenode identifier
          var call400 = callmethodChecked(var_objectType, "unknown", [0]);
          var var_placeholder = call400;
          setLineNumber(1162);    // compilenode identifier
          var call401 = callmethodChecked(var_types, "push", [1], var_td);
          setLineNumber(1163);    // compilenode identifier
          var call402 = callmethodChecked(var_placeholders, "push", [1], var_placeholder);
          setLineNumber(1164);    // compilenode identifier
          var call403 = callmethodChecked(var_td, "nameString", [0]);
          var call404 = callmethodChecked(var_prelude, "scope", [0]);
          var call405 = callmethodChecked(call404, "types", [0]);
          var call406 = callmethodChecked(call405, "at()put", [1, 1], call403, var_placeholder);
          return call406;
        };
        cases372.push(block373);
        setLineNumber(1165);    // compilenode block
        var block407 = new GraceBlock(this, 1165, 1);
        setLineNumber(1);    // compilenode identifier
        block407.real = function(var___95____95__23) {
          return GraceDone;
        };
        cases372.push(block407);
        setLineNumber(1151);    // compilematchcase
        var matchres372 = matchCase(var_node,cases372,false);
        setModuleName("staticTypes");
        return matchres372;
      };
      var call408 = callmethodChecked(var_prelude, "for()do", [1, 1], var_nodes, block371);
      setLineNumber(1168);    // compilenode block
      var block409 = new GraceBlock(this, 1168, 2);
      setLineNumber(1);    // compilenode identifier
      block409.real = function(var_td, var_ph) {
        setLineNumber(1169);    // compilenode identifier
        var call410 = callmethodChecked(var_objectType, "fromDType", [1], var_td);
        var var_oType = call410;
        setLineNumber(1170);    // compilenode identifier
        var call411 = callmethodChecked(var_prelude, "become", [2], var_ph, var_oType);
        return call411;
      };
      var call412 = callmethodChecked(var_prelude, "for()and()do", [1, 1, 1], var_types, var_placeholders, block409);
      return call412;
    };
    func367.confidential = true;
    func367.paramCounts = [1];
    this.methods["collectTypes"] = func367;
    func367.definitionLine = 1145;
    func367.definitionModule = "staticTypes";
    setLineNumber(1176);    // compilenode method
    var func413 = function(argcv) {    // method isPublic(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_node = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isPublic(1)"));
      setModuleName("staticTypes");
      setLineNumber(1177);    // compilenode identifier
      var cases414 = [];
      var block415 = new GraceBlock(this, 1177, 1);
      setLineNumber(1023);    // compilenode string
      var string416 = new GraceString("__24");
      var call417 = callmethodChecked(var_prelude, "VariablePattern", [0]);
      var call418 = callmethodChecked(call417, "new", [1], string416);
      setLineNumber(1177);    // compilenode call
      var call419 = callmethodChecked(var_prelude, "Method", [0]);
      setLineNumber(1023);    // compilenode call
      var call420 = callmethodChecked(var_prelude, "AndPattern", [0]);
      var call421 = callmethodChecked(call420, "new", [2], call418, call419);
      block415.pattern = call421;
      setLineNumber(1177);    // compilenode call
      var call422 = callmethodChecked(var_prelude, "Method", [0]);
      block415.real = function(var___95____95__24) {
        setLineNumber(1178);    // compilenode identifier
        var call423 = callmethodChecked(var_node, "annotations", [0]);
        var block424 = new GraceBlock(this, 1178, 1);
        setLineNumber(1);    // compilenode identifier
        block424.real = function(var_ann) {
          var if425 = GraceDone;
          setLineNumber(1179);    // compilenode string
          var string426 = new GraceString("confidential");
          var call428 = callmethodChecked(var_ann, "value", [0]);
          var opresult430 = callmethodChecked(call428, "==", [1], string426);
          if (Grace_isTrue(opresult430)) {
            setLineNumber(1180);    // compilenode identifier
            throw new ReturnException(GraceFalse, returnTarget);
          }
          return if425;
        };
        var call431 = callmethodChecked(var_prelude, "for()do", [1, 1], call423, block424);
        setLineNumber(1184);    // compilenode identifier
        return GraceTrue;
      };
      cases414.push(block415);
      setLineNumber(1185);    // compilenode block
      var block432 = new GraceBlock(this, 1185, 1);
      setLineNumber(1);    // compilenode identifier
      block432.real = function(var___95____95__25) {
        setLineNumber(1186);    // compilenode identifier
        var call433 = callmethodChecked(var_node, "annotations", [0]);
        var block434 = new GraceBlock(this, 1186, 1);
        setLineNumber(1);    // compilenode identifier
        block434.real = function(var_ann) {
          var if435 = GraceDone;
          setLineNumber(1187);    // compilenode string
          var string436 = new GraceString("readable");
          var call438 = callmethodChecked(var_ann, "value", [0]);
          var opresult440 = callmethodChecked(call438, "==", [1], string436);
          var string442 = new GraceString("public");
          var call444 = callmethodChecked(var_ann, "value", [0]);
          var opresult446 = callmethodChecked(call444, "==", [1], string442);
          var opresult448 = callmethodChecked(opresult446, "||", [1], opresult440);
          if (Grace_isTrue(opresult448)) {
            setLineNumber(1188);    // compilenode identifier
            throw new ReturnException(GraceTrue, returnTarget);
          }
          return if435;
        };
        var call449 = callmethodChecked(var_prelude, "for()do", [1, 1], call433, block434);
        setLineNumber(1192);    // compilenode identifier
        return GraceFalse;
      };
      cases414.push(block432);
      setLineNumber(1177);    // compilematchcase
      var matchres414 = matchCase(var_node,cases414,false);
      setModuleName("staticTypes");
      return matchres414;
    };
    func413.confidential = true;
    func413.paramCounts = [1];
    this.methods["isPublic"] = func413;
    func413.definitionLine = 1176;
    func413.definitionModule = "staticTypes";
    setLineNumber(1198);    // compilenode method
    var func450 = function(argcv) {    // method isMember(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_mType = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isMember(1)"));
      setModuleName("staticTypes");
      setLineNumber(1199);    // compilenode block
      var block451 = new GraceBlock(this, 1199, 0);
      block451.real = function() {
        setLineNumber(1200);    // compilenode identifier
        var call453 = callmethodChecked(var_mType, "signature", [0]);
        var call454 = callmethodChecked(call453, "first", [0]);
        var call455 = callmethodChecked(call454, "parameters", [0]);
        var call456 = callmethodChecked(call455, "size", [0]);
        var opresult458 = callmethodChecked(call456, "==", [1], new GraceNum(0));
        return opresult458;
      };
      setLineNumber(1199);    // compilenode identifier
      var call461 = callmethodChecked(var_mType, "signature", [0]);
      var call462 = callmethodChecked(call461, "size", [0]);
      var opresult464 = callmethodChecked(call462, "==", [1], new GraceNum(1));
      var opresult466 = callmethodChecked(opresult464, "&&", [1], block451);
      return opresult466;
    };
    func450.paramTypes = [];
    func450.paramTypes.push([]);
    func450.confidential = true;
    func450.paramCounts = [1];
    this.methods["isMember"] = func450;
    func450.definitionLine = 1198;
    func450.definitionModule = "staticTypes";
    setLineNumber(1209);    // compilenode method
    var func467 = function(argcv) {    // method for(1)doWithBreak(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_a = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for for (arg list 1) of for(1)doWithBreak(1)"));
      var var_bl = arguments[curarg];
      curarg++;
      if (argcv[1] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for doWithBreak (arg list 2) of for(1)doWithBreak(1)"));
      setModuleName("staticTypes");
      setLineNumber(1210);    // compilenode block
      var block468 = new GraceBlock(this, 1210, 1);
      setLineNumber(1);    // compilenode identifier
      block468.real = function(var_e) {
        setLineNumber(1211);    // compilenode block
        var block469 = new GraceBlock(this, 1211, 0);
        block469.real = function() {
          setLineNumber(1213);    // compilenode identifier
          throw new ReturnException(var_done, returnTarget);
          return undefined;
        };
        setLineNumber(1211);    // compilenode identifier
        var call470 = callmethodChecked(var_bl, "apply", [2], var_e, block469);
        return call470;
      };
      var call471 = callmethodChecked(var_prelude, "for()do", [1, 1], var_a, block468);
      return call471;
    };
    func467.paramCounts = [1, 1];
    this.methods["for()doWithBreak"] = func467;
    func467.definitionLine = 1209;
    func467.definitionModule = "staticTypes";
    setLineNumber(1218);    // compilenode method
    var func472 = function(argcv) {    // method for(1)doWithContinue(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_a = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for for (arg list 1) of for(1)doWithContinue(1)"));
      var var_bl = arguments[curarg];
      curarg++;
      if (argcv[1] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for doWithContinue (arg list 2) of for(1)doWithContinue(1)"));
      setModuleName("staticTypes");
      setLineNumber(1219);    // compilenode block
      var block473 = new GraceBlock(this, 1219, 1);
      setLineNumber(1);    // compilenode identifier
      block473.real = function(var_e) {
        setLineNumber(1220);    // compilenode identifier
        onSelf = true;
        var call474 = callmethodChecked(this, "continue'", [2], var_e, var_bl);
        return call474;
      };
      var call475 = callmethodChecked(var_prelude, "for()do", [1, 1], var_a, block473);
      return call475;
    };
    func472.paramCounts = [1, 1];
    this.methods["for()doWithContinue"] = func472;
    func472.definitionLine = 1218;
    func472.definitionModule = "staticTypes";
    setLineNumber(1224);    // compilenode method
    var func476 = function(argcv) {    // method continue'(2)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_e = arguments[curarg];
      curarg++;
      var var_bl = arguments[curarg];
      curarg++;
      if (argcv[0] !== 2)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for continue'(2)"));
      setModuleName("staticTypes");
      setLineNumber(1225);    // compilenode block
      var block477 = new GraceBlock(this, 1225, 0);
      block477.real = function() {
        setLineNumber(1227);    // compilenode identifier
        throw new ReturnException(var_done, returnTarget);
        return undefined;
      };
      setLineNumber(1225);    // compilenode identifier
      var call478 = callmethodChecked(var_bl, "apply", [2], var_e, block477);
      return call478;
    };
    func476.confidential = true;
    func476.paramCounts = [2];
    this.methods["continue'"] = func476;
    func476.definitionLine = 1224;
    func476.definitionModule = "staticTypes";
    setLineNumber(1232);    // compilenode method
    var func479 = function(argcv) {    // method checker(1)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_nodes = arguments[curarg];
      curarg++;
      if (argcv[0] !== 1)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for checker(1)"));
      setModuleName("staticTypes");
      setLineNumber(1233);    // compilenode identifier
      var call480 = callmethodChecked(var_prelude, "check", [1], var_nodes);
      return call480;
    };
    func479.paramCounts = [1];
    this.methods["checker"] = func479;
    func479.definitionLine = 1232;
    func479.definitionModule = "staticTypes";
    setLineNumber(12);    // compilenode string
    var string481 = new GraceString("TypeError");
    var call482 = callmethodChecked(var_prelude, "CheckerFailure", [0]);
    var call483 = callmethodChecked(call482, "refine", [1], string481);
    var var_TypeError = call483;
    var func484 = function(argcv) {    // method TypeError
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for TypeError"));
      setModuleName("staticTypes");
      // TypeError is a simple accessor - elide try ... catch
      return var_TypeError;
    };
    func484.paramCounts = [0];
    this.methods["TypeError"] = func484;
    func484.definitionLine = 12;
    func484.definitionModule = "staticTypes";
    this.methods["TypeError"].debug = "def";
    setLineNumber(16);    // compilenode typedec
    // Type decl MethodType
    //   Type literal 
    var type486 = new GraceType("MethodType");
    type486.typeMethods.push("name");
    type486.typeMethods.push("signature");
    type486.typeMethods.push("returnType");
    type486.typeMethods.push("isSpecialisationOf");
    var var_MethodType = type486;
    setLineNumber(12);    // compilenode method
    var func487 = function(argcv) {    // method MethodType
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for MethodType"));
      setModuleName("staticTypes");
      // MethodType is a simple accessor - elide try ... catch
      setLineNumber(16);    // compilenode identifier
      return var_MethodType;
    };
    func487.paramCounts = [0];
    this.methods["MethodType"] = func487;
    func487.definitionLine = 12;
    func487.definitionModule = "staticTypes";
    setLineNumber(23);    // compilenode typedec
    // Type decl Param
    //   Type literal 
    var type489 = new GraceType("Param");
    type489.typeMethods.push("name");
    type489.typeMethods.push("typeAnnotation");
    var var_Param = type489;
    setLineNumber(12);    // compilenode method
    var func490 = function(argcv) {    // method Param
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      if (argcv[0] !== 0)
        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for Param"));
      setModuleName("staticTypes");
      // Param is a simple accessor - elide try ... catch
      setLineNumber(23);    // compilenode identifier
      return var_Param;
    };
    func490.paramCounts = [0];
    this.methods["Param"] = func490;
    func490.definitionLine = 12;
    func490.definitionModule = "staticTypes";
    setLineNumber(28);    // compilenode object
    var obj491 = Grace_allocObject(GraceObject, "aParam");
    obj491.definitionModule = "staticTypes";
    obj491.definitionLine = 28;
    obj491.outer = this;
    var reader_staticTypes_outer492 = function() {
      return this.outer;
    };
    obj491.methods["outer"] = reader_staticTypes_outer492;
    var obj_init_491 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj491;
      var func493 = function(argcv) {    // method withName(1)ofType(1)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_name__39__ = arguments[curarg];
        curarg++;
        if (argcv[0] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for withName (arg list 1) of withName(1)ofType(1)"));
        var var_type__39__ = arguments[curarg];
        curarg++;
        if (argcv[1] !== 1)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ofType (arg list 2) of withName(1)ofType(1)"));
        setModuleName("staticTypes");
        setLineNumber(29);    // compilenode object
        var obj494 = Grace_allocObject(GraceObject, "aParam.withName()ofType");
        obj494.definitionModule = "staticTypes";
        obj494.definitionLine = 29;
        obj494.outer = this;
        var reader_staticTypes_outer495 = function() {
          return this.outer;
        };
        obj494.methods["outer"] = reader_staticTypes_outer495;
        var obj_init_494 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj494;
          var func496 = function(argcv) {    // method asString
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            if (argcv[0] !== 0)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
            setModuleName("staticTypes");
            setLineNumber(32);    // compilenode string
            var string497 = new GraceString("");
            onSelf = true;
            var call499 = callmethodChecked(this, "typeAnnotation", [0]);
            var string501 = new GraceString(":");
            onSelf = true;
            var call503 = callmethodChecked(this, "name", [0]);
            var string505 = new GraceString("");
            var opresult507 = callmethodChecked(string505, "++", [1], call503);
            var opresult509 = callmethodChecked(opresult507, "++", [1], string501);
            var opresult511 = callmethodChecked(opresult509, "++", [1], call499);
            var opresult513 = callmethodChecked(opresult511, "++", [1], string497);
            return opresult513;
          };
          func496.paramCounts = [0];
          obj494.methods["asString"] = func496;
          func496.definitionLine = 32;
          func496.definitionModule = "staticTypes";
          setLineNumber(30);    // compilenode identifier
          obj494.data["name"] = var_name__39__;
          var reader_staticTypes_name514 = function() {
            return this.data["name"];
          };
          reader_staticTypes_name514.def = true;
          obj494.methods["name"] = reader_staticTypes_name514;
          setLineNumber(31);    // compilenode identifier
          obj494.data["typeAnnotation"] = var_type__39__;
          var reader_staticTypes_typeAnnotation515 = function() {
            return this.data["typeAnnotation"];
          };
          reader_staticTypes_typeAnnotation515.def = true;
          obj494.methods["typeAnnotation"] = reader_staticTypes_typeAnnotation515;
          superDepth = origSuperDepth;
        };
        obj_init_494.apply(obj494, []);
        return obj494;
      };
      func493.paramTypes = [];
      func493.paramTypes.push([type_String, "name'"]);
      func493.paramTypes.push([]);
      func493.paramCounts = [1, 1];
      obj491.methods["withName()ofType"] = func493;
      func493.definitionLine = 29;
      func493.definitionModule = "staticTypes";
        var func516 = function(argcv) {    // method withName(1     )ofType(1     )()object
          var curarg = 1;
          var var_name__39__ = arguments[curarg];
          curarg++;
          var var_type__39__ = arguments[curarg];
          curarg++;
          var inheritingObject = arguments[curarg++];
          // Start argument processing
          curarg = 1;
          curarg++;
          curarg++;
          // End argument processing
          setModuleName("staticTypes");
          var returnTarget = invocationCount;
          invocationCount++;
          var obj517 = Grace_allocObject(GraceObject, "withName()ofType");
          obj517.definitionModule = "staticTypes";
          obj517.definitionLine = 29;
          var inho517 = inheritingObject;
          while (inho517.superobj) inho517 = inho517.superobj;
          inho517.superobj = obj517;
          obj517.data = inheritingObject.data;
          if (inheritingObject.hasOwnProperty('_value'))
            obj517._value = inheritingObject._value;
          obj517.outer = this;
          var reader_staticTypes_outer518 = function() {
            return this.outer;
          };
          obj517.methods["outer"] = reader_staticTypes_outer518;
          var obj_init_517 = function() {
            var origSuperDepth = superDepth;
            superDepth = obj517;
            var func519 = function(argcv) {    // method asString
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              if (argcv[0] !== 0)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
              setModuleName("staticTypes");
              setLineNumber(32);    // compilenode string
              var string520 = new GraceString("");
              onSelf = true;
              var call522 = callmethodChecked(this, "typeAnnotation", [0]);
              var string524 = new GraceString(":");
              onSelf = true;
              var call526 = callmethodChecked(this, "name", [0]);
              var string528 = new GraceString("");
              var opresult530 = callmethodChecked(string528, "++", [1], call526);
              var opresult532 = callmethodChecked(opresult530, "++", [1], string524);
              var opresult534 = callmethodChecked(opresult532, "++", [1], call522);
              var opresult536 = callmethodChecked(opresult534, "++", [1], string520);
              return opresult536;
            };
            func519.paramCounts = [0];
            obj517.methods["asString"] = func519;
            func519.definitionLine = 32;
            func519.definitionModule = "staticTypes";
            setLineNumber(30);    // compilenode identifier
            obj517.data["name"] = var_name__39__;
            var reader_staticTypes_name537 = function() {
              return this.data["name"];
            };
            reader_staticTypes_name537.def = true;
            obj517.methods["name"] = reader_staticTypes_name537;
            setLineNumber(31);    // compilenode identifier
            obj517.data["typeAnnotation"] = var_type__39__;
            var reader_staticTypes_typeAnnotation538 = function() {
              return this.data["typeAnnotation"];
            };
            reader_staticTypes_typeAnnotation538.def = true;
            obj517.methods["typeAnnotation"] = reader_staticTypes_typeAnnotation538;
            superDepth = origSuperDepth;
          };
          obj_init_517.apply(inheritingObject, []);
          return obj517;
          };
          func516.paramTypes = [];
          func516.paramTypes.push([type_String, "name'"]);
          func516.paramTypes.push([]);
          obj491.methods["withName()ofType()object"] = func516;
        var func539 = function(argcv) {    // method ofType(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_type__39__ = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ofType(1)"));
          setModuleName("staticTypes");
          setLineNumber(36);    // compilenode string
          var string540 = new GraceString("_");
          onSelf = true;
          var call541 = callmethodChecked(this, "withName()ofType", [1, 1], string540, var_type__39__);
          return call541;
        };
        func539.paramTypes = [];
        func539.paramTypes.push([type_Object, "type'"]);
        func539.paramCounts = [1];
        obj491.methods["ofType"] = func539;
        func539.definitionLine = 35;
        func539.definitionModule = "staticTypes";
        superDepth = origSuperDepth;
      };
      obj_init_491.apply(obj491, []);
      var var_aParam = obj491;
      setLineNumber(32);    // compilenode method
      var func542 = function(argcv) {    // method aParam
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for aParam"));
        setModuleName("staticTypes");
        // aParam is a simple accessor - elide try ... catch
        setLineNumber(28);    // compilenode identifier
        return var_aParam;
      };
      func542.paramCounts = [0];
      this.methods["aParam"] = func542;
      func542.definitionLine = 32;
      func542.definitionModule = "staticTypes";
      this.methods["aParam"].debug = "def";
      setLineNumber(40);    // compilenode typedec
      // Type decl MixPart
      //   Type literal 
      var type544 = new GraceType("MixPart");
      type544.typeMethods.push("name");
      type544.typeMethods.push("parameters");
      var var_MixPart = type544;
      setLineNumber(32);    // compilenode method
      var func545 = function(argcv) {    // method MixPart
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        if (argcv[0] !== 0)
          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for MixPart"));
        setModuleName("staticTypes");
        // MixPart is a simple accessor - elide try ... catch
        setLineNumber(40);    // compilenode identifier
        return var_MixPart;
      };
      func545.paramCounts = [0];
      this.methods["MixPart"] = func545;
      func545.definitionLine = 32;
      func545.definitionModule = "staticTypes";
      setLineNumber(51);    // compilenode object
      var obj546 = Grace_allocObject(GraceObject, "aMethodType");
      obj546.definitionModule = "staticTypes";
      obj546.definitionLine = 51;
      obj546.outer = this;
      var reader_staticTypes_outer547 = function() {
        return this.outer;
      };
      obj546.methods["outer"] = reader_staticTypes_outer547;
      var obj_init_546 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj546;
        var func548 = function(argcv) {    // method signature(1)returnType(1)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_signature__39__ = arguments[curarg];
          curarg++;
          if (argcv[0] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for signature (arg list 1) of signature(1)returnType(1)"));
          var var_rType = arguments[curarg];
          curarg++;
          if (argcv[1] !== 1)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for returnType (arg list 2) of signature(1)returnType(1)"));
          setModuleName("staticTypes");
          setLineNumber(52);    // compilenode object
          var obj549 = Grace_allocObject(GraceObject, "aMethodType.signature()returnType");
          obj549.definitionModule = "staticTypes";
          obj549.definitionLine = 52;
          obj549.outer = this;
          var reader_staticTypes_outer550 = function() {
            return this.outer;
          };
          obj549.methods["outer"] = reader_staticTypes_outer550;
          var obj_init_549 = function() {
            var origSuperDepth = superDepth;
            superDepth = obj549;
            var func551 = function(argcv) {    // method isSpecialisationOf(1)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_other = arguments[curarg];
              curarg++;
              if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isSpecialisationOf(1)"));
              setModuleName("staticTypes");
              var if552 = GraceDone;
              setLineNumber(87);    // compilenode identifier
              var opresult555 = callmethodChecked(this, "==", [1], var_other);
              if (Grace_isTrue(opresult555)) {
                setLineNumber(88);    // compilenode identifier
                return GraceTrue;
              }
              var if556 = GraceDone;
              setLineNumber(91);    // compilenode identifier
              var call557 = callmethodChecked(var_other, "name", [0]);
              onSelf = true;
              var call559 = callmethodChecked(this, "name", [0]);
              var opresult561 = callmethodChecked(call559, "\u2260", [1], call557);
              if (Grace_isTrue(opresult561)) {
                setLineNumber(92);    // compilenode identifier
                return GraceFalse;
              }
              var if562 = GraceDone;
              setLineNumber(95);    // compilenode call
              onSelf = true;
              var call563 = callmethodChecked(this, "signature", [0]);
              var call564 = callmethodChecked(call563, "size", [0]);
              var call566 = callmethodChecked(var_other, "signature", [0]);
              var call567 = callmethodChecked(call566, "size", [0]);
              var opresult569 = callmethodChecked(call567, "\u2260", [1], call564);
              if (Grace_isTrue(opresult569)) {
                setLineNumber(96);    // compilenode identifier
                return GraceFalse;
              }
              setLineNumber(99);    // compilenode call
              onSelf = true;
              var call570 = callmethodChecked(this, "signature", [0]);
              var call571 = callmethodChecked(var_other, "signature", [0]);
              var block572 = new GraceBlock(this, 99, 2);
              setLineNumber(1);    // compilenode identifier
              block572.real = function(var_part, var_part__39__) {
                var if573 = GraceDone;
                setLineNumber(100);    // compilenode identifier
                var call574 = callmethodChecked(var_part__39__, "name", [0]);
                var call576 = callmethodChecked(var_part, "name", [0]);
                var opresult578 = callmethodChecked(call576, "\u2260", [1], call574);
                if (Grace_isTrue(opresult578)) {
                  setLineNumber(101);    // compilenode identifier
                  throw new ReturnException(GraceFalse, returnTarget);
                }
                setLineNumber(104);    // compilenode identifier
                var call579 = callmethodChecked(var_part, "parameters", [0]);
                var call580 = callmethodChecked(var_part__39__, "parameters", [0]);
                var block581 = new GraceBlock(this, 104, 2);
                setLineNumber(1);    // compilenode identifier
                block581.real = function(var_p, var_p__39__) {
                  setLineNumber(105);    // compilenode identifier
                  var call582 = callmethodChecked(var_p, "typeAnnotation", [0]);
                  var var_pt = call582;
                  setLineNumber(106);    // compilenode identifier
                  var call583 = callmethodChecked(var_p__39__, "typeAnnotation", [0]);
                  var var_pt__39__ = call583;
                  var if584 = GraceDone;
                  setLineNumber(109);    // compilenode identifier
                  var call585 = callmethodChecked(var_pt__39__, "isSubtypeOf", [1], var_pt);
                  var call586 = callmethodChecked(call585, "not", [0]);
                  if (Grace_isTrue(call586)) {
                    setLineNumber(110);    // compilenode identifier
                    throw new ReturnException(GraceFalse, returnTarget);
                  }
                  return if584;
                };
                var call587 = callmethodChecked(var_prelude, "for()and()do", [1, 1, 1], call579, call580, block581);
                return call587;
              };
              var call588 = callmethodChecked(var_prelude, "for()and()do", [1, 1, 1], call570, call571, block572);
              setLineNumber(115);    // compilenode identifier
              var call589 = callmethodChecked(var_other, "returnType", [0]);
              onSelf = true;
              var call590 = callmethodChecked(this, "returnType", [0]);
              var call591 = callmethodChecked(call590, "isSubtypeOf", [1], call589);
              return call591;
            };
            func551.paramTypes = [];
            func551.paramTypes.push([]);
            func551.paramCounts = [1];
            obj549.methods["isSpecialisationOf"] = func551;
            func551.definitionLine = 86;
            func551.definitionModule = "staticTypes";
            setLineNumber(54);    // compilenode identifier
            obj549.data["signature"] = var_signature__39__;
            var reader_staticTypes_signature592 = function() {
              return this.data["signature"];
            };
            reader_staticTypes_signature592.def = true;
            obj549.methods["signature"] = reader_staticTypes_signature592;
            setLineNumber(55);    // compilenode identifier
            obj549.data["returnType"] = var_rType;
            var reader_staticTypes_returnType593 = function() {
              return this.data["returnType"];
            };
            reader_staticTypes_returnType593.def = true;
            obj549.methods["returnType"] = reader_staticTypes_returnType593;
            setLineNumber(57);    // compilenode string
            var string594 = new GraceString("");
            obj549.data["name"] = string594;
            var reader_staticTypes_name595 = function() {
              return this.data["name"];
            };
            obj549.methods["name"] = reader_staticTypes_name595;
            obj549.data["name"] = string594;
            var writer_staticTypes_name595 = function(argcv, o) {
              this.data["name"] = o;
              return GraceDone;
            };
            obj549.methods["name:="] = writer_staticTypes_name595;
            writer_staticTypes_name595.confidential = true;
            obj549.mutable = true;
            setLineNumber(58);    // compilenode string
            var string596 = new GraceString("");
            obj549.data["show"] = string596;
            var reader_staticTypes_show597 = function() {
              return this.data["show"];
            };
            obj549.methods["show"] = reader_staticTypes_show597;
            obj549.data["show"] = string596;
            var writer_staticTypes_show597 = function(argcv, o) {
              this.data["show"] = o;
              return GraceDone;
            };
            obj549.methods["show:="] = writer_staticTypes_show597;
            reader_staticTypes_show597.confidential = true;
            writer_staticTypes_show597.confidential = true;
            obj549.mutable = true;
            setLineNumber(60);    // compilenode call
            onSelf = true;
            var call598 = callmethodChecked(this, "signature", [0]);
            var call599 = callmethodChecked(call598, "at", [1], new GraceNum(1));
            obj549.data["fst"] = call599;
            var reader_staticTypes_fst600 = function() {
              return this.data["fst"];
            };
            reader_staticTypes_fst600.def = true;
            reader_staticTypes_fst600.confidential = true;
            obj549.methods["fst"] = reader_staticTypes_fst600;
            var if601 = GraceDone;
            setLineNumber(62);    // compilenode call
            onSelf = true;
            var call603 = callmethodChecked(this, "fst", [0]);
            var call604 = callmethodChecked(call603, "parameters", [0]);
            var call605 = callmethodChecked(call604, "size", [0]);
            var opresult607 = callmethodChecked(call605, "==", [1], new GraceNum(0));
            if (Grace_isTrue(opresult607)) {
              setLineNumber(63);    // compilenode call
              onSelf = true;
              var call608 = callmethodChecked(this, "fst", [0]);
              var call609 = callmethodChecked(call608, "name", [0]);
              onSelf = true;
              var call610 = callmethodChecked(this, "name:=", [1], call609);
              setLineNumber(64);    // compilenode call
              onSelf = true;
              var call611 = callmethodChecked(this, "name", [0]);
              onSelf = true;
              var call612 = callmethodChecked(this, "show:=", [1], call611);
              if601 = call612;
            } else {
              setLineNumber(66);    // compilenode call
              onSelf = true;
              var call613 = callmethodChecked(this, "signature", [0]);
              var block614 = new GraceBlock(this, 66, 1);
              setLineNumber(1);    // compilenode identifier
              block614.real = function(var_part) {
                setLineNumber(67);    // compilenode string
                var string615 = new GraceString("()");
                var call617 = callmethodChecked(var_part, "name", [0]);
                var string619 = new GraceString("");
                onSelf = true;
                var call621 = callmethodChecked(this, "name", [0]);
                var string623 = new GraceString("");
                var opresult625 = callmethodChecked(string623, "++", [1], call621);
                var opresult627 = callmethodChecked(opresult625, "++", [1], string619);
                var opresult629 = callmethodChecked(opresult627, "++", [1], call617);
                var opresult631 = callmethodChecked(opresult629, "++", [1], string615);
                onSelf = true;
                var call632 = callmethodChecked(this, "name:=", [1], opresult631);
                setLineNumber(68);    // compilenode string
                var string633 = new GraceString("(");
                var call635 = callmethodChecked(var_part, "name", [0]);
                var string637 = new GraceString("");
                onSelf = true;
                var call639 = callmethodChecked(this, "show", [0]);
                var string641 = new GraceString("");
                var opresult643 = callmethodChecked(string641, "++", [1], call639);
                var opresult645 = callmethodChecked(opresult643, "++", [1], string637);
                var opresult647 = callmethodChecked(opresult645, "++", [1], call635);
                var opresult649 = callmethodChecked(opresult647, "++", [1], string633);
                onSelf = true;
                var call650 = callmethodChecked(this, "show:=", [1], opresult649);
                setLineNumber(69);    // compilenode identifier
                var var_once = GraceFalse;
                setLineNumber(70);    // compilenode identifier
                var call651 = callmethodChecked(var_part, "parameters", [0]);
                var block652 = new GraceBlock(this, 70, 1);
                setLineNumber(1);    // compilenode identifier
                block652.real = function(var_param) {
                  var if653 = GraceDone;
                  setLineNumber(71);    // compilenode identifier
                  if (Grace_isTrue(var_once)) {
                    setLineNumber(72);    // compilenode string
                    var string654 = new GraceString(", ");
                    onSelf = true;
                    var call656 = callmethodChecked(this, "show", [0]);
                    var string658 = new GraceString("");
                    var opresult660 = callmethodChecked(string658, "++", [1], call656);
                    var opresult662 = callmethodChecked(opresult660, "++", [1], string654);
                    onSelf = true;
                    var call663 = callmethodChecked(this, "show:=", [1], opresult662);
                    if653 = call663;
                  }
                  setLineNumber(74);    // compilenode string
                  var string664 = new GraceString("");
                  var string667 = new GraceString("");
                  onSelf = true;
                  var call669 = callmethodChecked(this, "show", [0]);
                  var string671 = new GraceString("");
                  var opresult673 = callmethodChecked(string671, "++", [1], call669);
                  var opresult675 = callmethodChecked(opresult673, "++", [1], string667);
                  var opresult677 = callmethodChecked(opresult675, "++", [1], var_param);
                  var opresult679 = callmethodChecked(opresult677, "++", [1], string664);
                  onSelf = true;
                  var call680 = callmethodChecked(this, "show:=", [1], opresult679);
                  setLineNumber(75);    // compilenode identifier
                  var_once = GraceTrue;
                  return GraceDone;
                };
                var call681 = callmethodChecked(var_prelude, "for()do", [1, 1], call651, block652);
                setLineNumber(77);    // compilenode string
                var string682 = new GraceString(")");
                onSelf = true;
                var call684 = callmethodChecked(this, "show", [0]);
                var string686 = new GraceString("");
                var opresult688 = callmethodChecked(string686, "++", [1], call684);
                var opresult690 = callmethodChecked(opresult688, "++", [1], string682);
                onSelf = true;
                var call691 = callmethodChecked(this, "show:=", [1], opresult690);
                return call691;
              };
              var call692 = callmethodChecked(var_prelude, "for()do", [1, 1], call613, block614);
              setLineNumber(80);    // compilenode call
              onSelf = true;
              var call694 = callmethodChecked(this, "name", [0]);
              var call695 = callmethodChecked(call694, "size", [0]);
              var diff697 = callmethodChecked(call695, "-", [1], new GraceNum(2));
              onSelf = true;
              var call698 = callmethodChecked(this, "name", [0]);
              var call699 = callmethodChecked(call698, "substringFrom()to", [1, 1], new GraceNum(1), diff697);
              onSelf = true;
              var call700 = callmethodChecked(this, "name:=", [1], call699);
              if601 = call700;
            }
            setLineNumber(83);    // compilenode string
            var string701 = new GraceString("");
            onSelf = true;
            var call703 = callmethodChecked(this, "returnType", [0]);
            var string705 = new GraceString(" -> ");
            onSelf = true;
            var call707 = callmethodChecked(this, "show", [0]);
            var string709 = new GraceString("");
            var opresult711 = callmethodChecked(string709, "++", [1], call707);
            var opresult713 = callmethodChecked(opresult711, "++", [1], string705);
            var opresult715 = callmethodChecked(opresult713, "++", [1], call703);
            var opresult717 = callmethodChecked(opresult715, "++", [1], string701);
            onSelf = true;
            var call718 = callmethodChecked(this, "show:=", [1], opresult717);
            setLineNumber(118);    // compilenode call
            onSelf = true;
            var call719 = callmethodChecked(this, "show", [0]);
            obj549.data["asString"] = call719;
            var reader_staticTypes_asString720 = function() {
              return this.data["asString"];
            };
            reader_staticTypes_asString720.def = true;
            obj549.methods["asString"] = reader_staticTypes_asString720;
            superDepth = origSuperDepth;
          };
          obj_init_549.apply(obj549, []);
          return obj549;
        };
        func548.paramTypes = [];
        func548.paramTypes.push([]);
        func548.paramTypes.push([]);
        func548.paramCounts = [1, 1];
        obj546.methods["signature()returnType"] = func548;
        func548.definitionLine = 52;
        func548.definitionModule = "staticTypes";
          var func721 = function(argcv) {    // method signature(1     )returnType(1     )()object
            var curarg = 1;
            var var_signature__39__ = arguments[curarg];
            curarg++;
            var var_rType = arguments[curarg];
            curarg++;
            var inheritingObject = arguments[curarg++];
            // Start argument processing
            curarg = 1;
            curarg++;
            curarg++;
            // End argument processing
            setModuleName("staticTypes");
            var returnTarget = invocationCount;
            invocationCount++;
            var obj722 = Grace_allocObject(GraceObject, "signature()returnType");
            obj722.definitionModule = "staticTypes";
            obj722.definitionLine = 52;
            var inho722 = inheritingObject;
            while (inho722.superobj) inho722 = inho722.superobj;
            inho722.superobj = obj722;
            obj722.data = inheritingObject.data;
            if (inheritingObject.hasOwnProperty('_value'))
              obj722._value = inheritingObject._value;
            obj722.outer = this;
            var reader_staticTypes_outer723 = function() {
              return this.outer;
            };
            obj722.methods["outer"] = reader_staticTypes_outer723;
            var obj_init_722 = function() {
              var origSuperDepth = superDepth;
              superDepth = obj722;
              var func724 = function(argcv) {    // method isSpecialisationOf(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_other = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isSpecialisationOf(1)"));
                setModuleName("staticTypes");
                var if725 = GraceDone;
                setLineNumber(87);    // compilenode identifier
                var opresult728 = callmethodChecked(this, "==", [1], var_other);
                if (Grace_isTrue(opresult728)) {
                  setLineNumber(88);    // compilenode identifier
                  return GraceTrue;
                }
                var if729 = GraceDone;
                setLineNumber(91);    // compilenode identifier
                var call730 = callmethodChecked(var_other, "name", [0]);
                onSelf = true;
                var call732 = callmethodChecked(this, "name", [0]);
                var opresult734 = callmethodChecked(call732, "\u2260", [1], call730);
                if (Grace_isTrue(opresult734)) {
                  setLineNumber(92);    // compilenode identifier
                  return GraceFalse;
                }
                var if735 = GraceDone;
                setLineNumber(95);    // compilenode call
                onSelf = true;
                var call736 = callmethodChecked(this, "signature", [0]);
                var call737 = callmethodChecked(call736, "size", [0]);
                var call739 = callmethodChecked(var_other, "signature", [0]);
                var call740 = callmethodChecked(call739, "size", [0]);
                var opresult742 = callmethodChecked(call740, "\u2260", [1], call737);
                if (Grace_isTrue(opresult742)) {
                  setLineNumber(96);    // compilenode identifier
                  return GraceFalse;
                }
                setLineNumber(99);    // compilenode call
                onSelf = true;
                var call743 = callmethodChecked(this, "signature", [0]);
                var call744 = callmethodChecked(var_other, "signature", [0]);
                var block745 = new GraceBlock(this, 99, 2);
                setLineNumber(1);    // compilenode identifier
                block745.real = function(var_part, var_part__39__) {
                  var if746 = GraceDone;
                  setLineNumber(100);    // compilenode identifier
                  var call747 = callmethodChecked(var_part__39__, "name", [0]);
                  var call749 = callmethodChecked(var_part, "name", [0]);
                  var opresult751 = callmethodChecked(call749, "\u2260", [1], call747);
                  if (Grace_isTrue(opresult751)) {
                    setLineNumber(101);    // compilenode identifier
                    throw new ReturnException(GraceFalse, returnTarget);
                  }
                  setLineNumber(104);    // compilenode identifier
                  var call752 = callmethodChecked(var_part, "parameters", [0]);
                  var call753 = callmethodChecked(var_part__39__, "parameters", [0]);
                  var block754 = new GraceBlock(this, 104, 2);
                  setLineNumber(1);    // compilenode identifier
                  block754.real = function(var_p, var_p__39__) {
                    setLineNumber(105);    // compilenode identifier
                    var call755 = callmethodChecked(var_p, "typeAnnotation", [0]);
                    var var_pt = call755;
                    setLineNumber(106);    // compilenode identifier
                    var call756 = callmethodChecked(var_p__39__, "typeAnnotation", [0]);
                    var var_pt__39__ = call756;
                    var if757 = GraceDone;
                    setLineNumber(109);    // compilenode identifier
                    var call758 = callmethodChecked(var_pt__39__, "isSubtypeOf", [1], var_pt);
                    var call759 = callmethodChecked(call758, "not", [0]);
                    if (Grace_isTrue(call759)) {
                      setLineNumber(110);    // compilenode identifier
                      throw new ReturnException(GraceFalse, returnTarget);
                    }
                    return if757;
                  };
                  var call760 = callmethodChecked(var_prelude, "for()and()do", [1, 1, 1], call752, call753, block754);
                  return call760;
                };
                var call761 = callmethodChecked(var_prelude, "for()and()do", [1, 1, 1], call743, call744, block745);
                setLineNumber(115);    // compilenode identifier
                var call762 = callmethodChecked(var_other, "returnType", [0]);
                onSelf = true;
                var call763 = callmethodChecked(this, "returnType", [0]);
                var call764 = callmethodChecked(call763, "isSubtypeOf", [1], call762);
                return call764;
              };
              func724.paramTypes = [];
              func724.paramTypes.push([]);
              func724.paramCounts = [1];
              obj722.methods["isSpecialisationOf"] = func724;
              func724.definitionLine = 86;
              func724.definitionModule = "staticTypes";
              setLineNumber(54);    // compilenode identifier
              obj722.data["signature"] = var_signature__39__;
              var reader_staticTypes_signature765 = function() {
                return this.data["signature"];
              };
              reader_staticTypes_signature765.def = true;
              obj722.methods["signature"] = reader_staticTypes_signature765;
              setLineNumber(55);    // compilenode identifier
              obj722.data["returnType"] = var_rType;
              var reader_staticTypes_returnType766 = function() {
                return this.data["returnType"];
              };
              reader_staticTypes_returnType766.def = true;
              obj722.methods["returnType"] = reader_staticTypes_returnType766;
              setLineNumber(57);    // compilenode string
              var string767 = new GraceString("");
              obj722.data["name"] = string767;
              var reader_staticTypes_name768 = function() {
                return this.data["name"];
              };
              obj722.methods["name"] = reader_staticTypes_name768;
              obj722.data["name"] = string767;
              var writer_staticTypes_name768 = function(argcv, o) {
                this.data["name"] = o;
                return GraceDone;
              };
              obj722.methods["name:="] = writer_staticTypes_name768;
              writer_staticTypes_name768.confidential = true;
              obj722.mutable = true;
              setLineNumber(58);    // compilenode string
              var string769 = new GraceString("");
              obj722.data["show"] = string769;
              var reader_staticTypes_show770 = function() {
                return this.data["show"];
              };
              obj722.methods["show"] = reader_staticTypes_show770;
              obj722.data["show"] = string769;
              var writer_staticTypes_show770 = function(argcv, o) {
                this.data["show"] = o;
                return GraceDone;
              };
              obj722.methods["show:="] = writer_staticTypes_show770;
              reader_staticTypes_show770.confidential = true;
              writer_staticTypes_show770.confidential = true;
              obj722.mutable = true;
              setLineNumber(60);    // compilenode call
              onSelf = true;
              var call771 = callmethodChecked(this, "signature", [0]);
              var call772 = callmethodChecked(call771, "at", [1], new GraceNum(1));
              obj722.data["fst"] = call772;
              var reader_staticTypes_fst773 = function() {
                return this.data["fst"];
              };
              reader_staticTypes_fst773.def = true;
              reader_staticTypes_fst773.confidential = true;
              obj722.methods["fst"] = reader_staticTypes_fst773;
              var if774 = GraceDone;
              setLineNumber(62);    // compilenode call
              onSelf = true;
              var call776 = callmethodChecked(this, "fst", [0]);
              var call777 = callmethodChecked(call776, "parameters", [0]);
              var call778 = callmethodChecked(call777, "size", [0]);
              var opresult780 = callmethodChecked(call778, "==", [1], new GraceNum(0));
              if (Grace_isTrue(opresult780)) {
                setLineNumber(63);    // compilenode call
                onSelf = true;
                var call781 = callmethodChecked(this, "fst", [0]);
                var call782 = callmethodChecked(call781, "name", [0]);
                onSelf = true;
                var call783 = callmethodChecked(this, "name:=", [1], call782);
                setLineNumber(64);    // compilenode call
                onSelf = true;
                var call784 = callmethodChecked(this, "name", [0]);
                onSelf = true;
                var call785 = callmethodChecked(this, "show:=", [1], call784);
                if774 = call785;
              } else {
                setLineNumber(66);    // compilenode call
                onSelf = true;
                var call786 = callmethodChecked(this, "signature", [0]);
                var block787 = new GraceBlock(this, 66, 1);
                setLineNumber(1);    // compilenode identifier
                block787.real = function(var_part) {
                  setLineNumber(67);    // compilenode string
                  var string788 = new GraceString("()");
                  var call790 = callmethodChecked(var_part, "name", [0]);
                  var string792 = new GraceString("");
                  onSelf = true;
                  var call794 = callmethodChecked(this, "name", [0]);
                  var string796 = new GraceString("");
                  var opresult798 = callmethodChecked(string796, "++", [1], call794);
                  var opresult800 = callmethodChecked(opresult798, "++", [1], string792);
                  var opresult802 = callmethodChecked(opresult800, "++", [1], call790);
                  var opresult804 = callmethodChecked(opresult802, "++", [1], string788);
                  onSelf = true;
                  var call805 = callmethodChecked(this, "name:=", [1], opresult804);
                  setLineNumber(68);    // compilenode string
                  var string806 = new GraceString("(");
                  var call808 = callmethodChecked(var_part, "name", [0]);
                  var string810 = new GraceString("");
                  onSelf = true;
                  var call812 = callmethodChecked(this, "show", [0]);
                  var string814 = new GraceString("");
                  var opresult816 = callmethodChecked(string814, "++", [1], call812);
                  var opresult818 = callmethodChecked(opresult816, "++", [1], string810);
                  var opresult820 = callmethodChecked(opresult818, "++", [1], call808);
                  var opresult822 = callmethodChecked(opresult820, "++", [1], string806);
                  onSelf = true;
                  var call823 = callmethodChecked(this, "show:=", [1], opresult822);
                  setLineNumber(69);    // compilenode identifier
                  var var_once = GraceFalse;
                  setLineNumber(70);    // compilenode identifier
                  var call824 = callmethodChecked(var_part, "parameters", [0]);
                  var block825 = new GraceBlock(this, 70, 1);
                  setLineNumber(1);    // compilenode identifier
                  block825.real = function(var_param) {
                    var if826 = GraceDone;
                    setLineNumber(71);    // compilenode identifier
                    if (Grace_isTrue(var_once)) {
                      setLineNumber(72);    // compilenode string
                      var string827 = new GraceString(", ");
                      onSelf = true;
                      var call829 = callmethodChecked(this, "show", [0]);
                      var string831 = new GraceString("");
                      var opresult833 = callmethodChecked(string831, "++", [1], call829);
                      var opresult835 = callmethodChecked(opresult833, "++", [1], string827);
                      onSelf = true;
                      var call836 = callmethodChecked(this, "show:=", [1], opresult835);
                      if826 = call836;
                    }
                    setLineNumber(74);    // compilenode string
                    var string837 = new GraceString("");
                    var string840 = new GraceString("");
                    onSelf = true;
                    var call842 = callmethodChecked(this, "show", [0]);
                    var string844 = new GraceString("");
                    var opresult846 = callmethodChecked(string844, "++", [1], call842);
                    var opresult848 = callmethodChecked(opresult846, "++", [1], string840);
                    var opresult850 = callmethodChecked(opresult848, "++", [1], var_param);
                    var opresult852 = callmethodChecked(opresult850, "++", [1], string837);
                    onSelf = true;
                    var call853 = callmethodChecked(this, "show:=", [1], opresult852);
                    setLineNumber(75);    // compilenode identifier
                    var_once = GraceTrue;
                    return GraceDone;
                  };
                  var call854 = callmethodChecked(var_prelude, "for()do", [1, 1], call824, block825);
                  setLineNumber(77);    // compilenode string
                  var string855 = new GraceString(")");
                  onSelf = true;
                  var call857 = callmethodChecked(this, "show", [0]);
                  var string859 = new GraceString("");
                  var opresult861 = callmethodChecked(string859, "++", [1], call857);
                  var opresult863 = callmethodChecked(opresult861, "++", [1], string855);
                  onSelf = true;
                  var call864 = callmethodChecked(this, "show:=", [1], opresult863);
                  return call864;
                };
                var call865 = callmethodChecked(var_prelude, "for()do", [1, 1], call786, block787);
                setLineNumber(80);    // compilenode call
                onSelf = true;
                var call867 = callmethodChecked(this, "name", [0]);
                var call868 = callmethodChecked(call867, "size", [0]);
                var diff870 = callmethodChecked(call868, "-", [1], new GraceNum(2));
                onSelf = true;
                var call871 = callmethodChecked(this, "name", [0]);
                var call872 = callmethodChecked(call871, "substringFrom()to", [1, 1], new GraceNum(1), diff870);
                onSelf = true;
                var call873 = callmethodChecked(this, "name:=", [1], call872);
                if774 = call873;
              }
              setLineNumber(83);    // compilenode string
              var string874 = new GraceString("");
              onSelf = true;
              var call876 = callmethodChecked(this, "returnType", [0]);
              var string878 = new GraceString(" -> ");
              onSelf = true;
              var call880 = callmethodChecked(this, "show", [0]);
              var string882 = new GraceString("");
              var opresult884 = callmethodChecked(string882, "++", [1], call880);
              var opresult886 = callmethodChecked(opresult884, "++", [1], string878);
              var opresult888 = callmethodChecked(opresult886, "++", [1], call876);
              var opresult890 = callmethodChecked(opresult888, "++", [1], string874);
              onSelf = true;
              var call891 = callmethodChecked(this, "show:=", [1], opresult890);
              setLineNumber(118);    // compilenode call
              onSelf = true;
              var call892 = callmethodChecked(this, "show", [0]);
              obj722.data["asString"] = call892;
              var reader_staticTypes_asString893 = function() {
                return this.data["asString"];
              };
              reader_staticTypes_asString893.def = true;
              obj722.methods["asString"] = reader_staticTypes_asString893;
              superDepth = origSuperDepth;
            };
            obj_init_722.apply(inheritingObject, []);
            return obj722;
            };
            func721.paramTypes = [];
            func721.paramTypes.push([]);
            func721.paramTypes.push([]);
            obj546.methods["signature()returnType()object"] = func721;
          var func894 = function(argcv) {    // method member(1)ofType(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_name = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for member (arg list 1) of member(1)ofType(1)"));
            var var_rType = arguments[curarg];
            curarg++;
            if (argcv[1] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ofType (arg list 2) of member(1)ofType(1)"));
            setModuleName("staticTypes");
            setLineNumber(122);    // compilenode array
            var array896 = new PrimitiveGraceList([]);
            var call897 = callmethodChecked(superDepth, "outer", [0]);
            onOuter = true;
            onSelf = true;
            var call898 = callmethodChecked(call897, "mixPartNamed()parameters", [1, 1], var_name, array896);
            var array895 = new PrimitiveGraceList([call898]);
            onSelf = true;
            var call899 = callmethodChecked(this, "signature()returnType", [1, 1], array895, var_rType);
            return call899;
          };
          func894.paramTypes = [];
          func894.paramTypes.push([type_String, "name"]);
          func894.paramTypes.push([]);
          func894.paramCounts = [1, 1];
          obj546.methods["member()ofType"] = func894;
          func894.definitionLine = 121;
          func894.definitionModule = "staticTypes";
          var func900 = function(argcv) {    // method fromNode(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_node = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for fromNode(1)"));
            setModuleName("staticTypes");
            setLineNumber(126);    // compilenode identifier
            var cases901 = [];
            var block902 = new GraceBlock(this, 126, 1);
            setLineNumber(0);    // compilenode string
            var string903 = new GraceString("meth");
            var call904 = callmethodChecked(var_prelude, "VariablePattern", [0]);
            var call905 = callmethodChecked(call904, "new", [1], string903);
            setLineNumber(126);    // compilenode call
            var call906 = callmethodChecked(var_prelude, "MethodSignature", [0]);
            var call908 = callmethodChecked(var_prelude, "Class", [0]);
            var call910 = callmethodChecked(var_prelude, "Method", [0]);
            var opresult912 = callmethodChecked(call910, "|", [1], call908);
            var opresult914 = callmethodChecked(opresult912, "|", [1], call906);
            setLineNumber(0);    // compilenode call
            var call915 = callmethodChecked(var_prelude, "AndPattern", [0]);
            var call916 = callmethodChecked(call915, "new", [2], call905, opresult914);
            block902.pattern = call916;
            setLineNumber(126);    // compilenode call
            var call917 = callmethodChecked(var_prelude, "MethodSignature", [0]);
            var call919 = callmethodChecked(var_prelude, "Class", [0]);
            var call921 = callmethodChecked(var_prelude, "Method", [0]);
            var opresult923 = callmethodChecked(call921, "|", [1], call919);
            var opresult925 = callmethodChecked(opresult923, "|", [1], call917);
            block902.real = function(var_meth) {
              setLineNumber(127);    // compilenode array
              var array926 = new PrimitiveGraceList([]);
              var var_signature = array926;
              setLineNumber(129);    // compilenode identifier
              var call927 = callmethodChecked(var_meth, "signature", [0]);
              var block928 = new GraceBlock(this, 129, 1);
              setLineNumber(1);    // compilenode identifier
              block928.real = function(var_part) {
                setLineNumber(130);    // compilenode array
                var array929 = new PrimitiveGraceList([]);
                var var_params = array929;
                setLineNumber(132);    // compilenode identifier
                var call930 = callmethodChecked(var_part, "params", [0]);
                var block931 = new GraceBlock(this, 132, 1);
                setLineNumber(1);    // compilenode identifier
                block931.real = function(var_param) {
                  setLineNumber(133);    // compilenode identifier
                  var call932 = callmethodChecked(var_param, "value", [0]);
                  setLineNumber(134);    // compilenode identifier
                  var call933 = callmethodChecked(var_param, "dtype", [0]);
                  var call934 = callmethodChecked(var_objectType, "fromDType", [1], call933);
                  setLineNumber(133);    // compilenode identifier
                  var call935 = callmethodChecked(var_aParam, "withName()ofType", [1, 1], call932, call934);
                  var call936 = callmethodChecked(var_params, "push", [1], call935);
                  return call936;
                };
                var call937 = callmethodChecked(var_prelude, "for()do", [1, 1], call930, block931);
                setLineNumber(137);    // compilenode identifier
                var call938 = callmethodChecked(var_part, "name", [0]);
                var call939 = callmethodChecked(superDepth, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call940 = callmethodChecked(call939, "mixPartNamed()parameters", [1, 1], call938, var_params);
                var call941 = callmethodChecked(var_signature, "push", [1], call940);
                return call941;
              };
              var call942 = callmethodChecked(var_prelude, "for()do", [1, 1], call927, block928);
              setLineNumber(140);    // compilenode identifier
              var cases943 = [];
              var block944 = new GraceBlock(this, 140, 1);
              setLineNumber(0);    // compilenode string
              var string945 = new GraceString("m");
              var call946 = callmethodChecked(var_prelude, "VariablePattern", [0]);
              var call947 = callmethodChecked(call946, "new", [1], string945);
              setLineNumber(140);    // compilenode call
              var call948 = callmethodChecked(var_prelude, "Class", [0]);
              var call950 = callmethodChecked(var_prelude, "Method", [0]);
              var opresult952 = callmethodChecked(call950, "|", [1], call948);
              setLineNumber(0);    // compilenode call
              var call953 = callmethodChecked(var_prelude, "AndPattern", [0]);
              var call954 = callmethodChecked(call953, "new", [2], call947, opresult952);
              block944.pattern = call954;
              setLineNumber(140);    // compilenode call
              var call955 = callmethodChecked(var_prelude, "Class", [0]);
              var call957 = callmethodChecked(var_prelude, "Method", [0]);
              var opresult959 = callmethodChecked(call957, "|", [1], call955);
              block944.real = function(var_m) {
                setLineNumber(141);    // compilenode identifier
                var call960 = callmethodChecked(var_m, "dtype", [0]);
                return call960;
              };
              cases943.push(block944);
              setLineNumber(142);    // compilenode block
              var block961 = new GraceBlock(this, 142, 1);
              setLineNumber(0);    // compilenode string
              var string962 = new GraceString("m");
              var call963 = callmethodChecked(var_prelude, "VariablePattern", [0]);
              var call964 = callmethodChecked(call963, "new", [1], string962);
              setLineNumber(142);    // compilenode call
              var call965 = callmethodChecked(var_prelude, "MethodSignature", [0]);
              setLineNumber(0);    // compilenode call
              var call966 = callmethodChecked(var_prelude, "AndPattern", [0]);
              var call967 = callmethodChecked(call966, "new", [2], call964, call965);
              block961.pattern = call967;
              setLineNumber(142);    // compilenode call
              var call968 = callmethodChecked(var_prelude, "MethodSignature", [0]);
              block961.real = function(var_m) {
                setLineNumber(143);    // compilenode identifier
                var call969 = callmethodChecked(var_meth, "rtype", [0]);
                return call969;
              };
              cases943.push(block961);
              setLineNumber(144);    // compilenode block
              var block970 = new GraceBlock(this, 144, 1);
              setLineNumber(1);    // compilenode identifier
              block970.real = function(var___95____95__3) {
                return GraceDone;
              };
              cases943.push(block970);
              setLineNumber(140);    // compilematchcase
              var matchres943 = matchCase(var_meth,cases943,false);
              setModuleName("staticTypes");
              var var_rType = matchres943;
              setLineNumber(147);    // compilenode identifier
              var call971 = callmethodChecked(var_objectType, "fromDType", [1], var_rType);
              onSelf = true;
              var call972 = callmethodChecked(this, "signature()returnType", [1, 1], var_signature, call971);
              throw new ReturnException(call972, returnTarget);
              return undefined;
            };
            cases901.push(block902);
            setLineNumber(148);    // compilenode block
            var block973 = new GraceBlock(this, 148, 1);
            setLineNumber(0);    // compilenode string
            var string974 = new GraceString("defd");
            var call975 = callmethodChecked(var_prelude, "VariablePattern", [0]);
            var call976 = callmethodChecked(call975, "new", [1], string974);
            setLineNumber(148);    // compilenode call
            var call977 = callmethodChecked(var_prelude, "Var", [0]);
            var call979 = callmethodChecked(var_prelude, "Def", [0]);
            var opresult981 = callmethodChecked(call979, "|", [1], call977);
            setLineNumber(0);    // compilenode call
            var call982 = callmethodChecked(var_prelude, "AndPattern", [0]);
            var call983 = callmethodChecked(call982, "new", [2], call976, opresult981);
            block973.pattern = call983;
            setLineNumber(148);    // compilenode call
            var call984 = callmethodChecked(var_prelude, "Var", [0]);
            var call986 = callmethodChecked(var_prelude, "Def", [0]);
            var opresult988 = callmethodChecked(call986, "|", [1], call984);
            block973.real = function(var_defd) {
              setLineNumber(149);    // compilenode identifier
              var call990 = callmethodChecked(var_defd, "name", [0]);
              var call991 = callmethodChecked(call990, "value", [0]);
              var array992 = new PrimitiveGraceList([]);
              var call993 = callmethodChecked(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call994 = callmethodChecked(call993, "mixPartNamed()parameters", [1, 1], call991, array992);
              var array989 = new PrimitiveGraceList([call994]);
              var var_signature = array989;
              setLineNumber(150);    // compilenode identifier
              var call995 = callmethodChecked(var_defd, "dtype", [0]);
              var call996 = callmethodChecked(var_objectType, "fromDType", [1], call995);
              var var_dtype = call996;
              setLineNumber(151);    // compilenode identifier
              onSelf = true;
              var call997 = callmethodChecked(this, "signature()returnType", [1, 1], var_signature, var_dtype);
              throw new ReturnException(call997, returnTarget);
              return undefined;
            };
            cases901.push(block973);
            setLineNumber(152);    // compilenode block
            var block998 = new GraceBlock(this, 152, 1);
            setLineNumber(1);    // compilenode identifier
            block998.real = function(var___95____95__4) {
              setLineNumber(153);    // compilenode string
              var string999 = new GraceString("unrecognised method node");
              var call1000 = callmethodChecked(var_prelude, "Exception", [0]);
              var call1001 = callmethodChecked(call1000, "raise()with", [1, 1], string999, var_node);
              return call1001;
            };
            cases901.push(block998);
            setLineNumber(126);    // compilematchcase
            var matchres901 = matchCase(var_node,cases901,false);
            setModuleName("staticTypes");
            return matchres901;
          };
          func900.paramCounts = [1];
          obj546.methods["fromNode"] = func900;
          func900.definitionLine = 125;
          func900.definitionModule = "staticTypes";
          superDepth = origSuperDepth;
        };
        obj_init_546.apply(obj546, []);
        var var_aMethodType = obj546;
        setLineNumber(153);    // compilenode method
        var func1002 = function(argcv) {    // method aMethodType
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for aMethodType"));
          setModuleName("staticTypes");
          // aMethodType is a simple accessor - elide try ... catch
          setLineNumber(51);    // compilenode identifier
          return var_aMethodType;
        };
        func1002.paramCounts = [0];
        this.methods["aMethodType"] = func1002;
        func1002.definitionLine = 153;
        func1002.definitionModule = "staticTypes";
        this.methods["aMethodType"].debug = "def";
        setLineNumber(162);    // compilenode string
        var string1003 = new GraceString("noSuchMethod");
        var call1004 = callmethodChecked(var_prelude, "Singleton", [0]);
        var call1005 = callmethodChecked(call1004, "named", [1], string1003);
        var var_noSuchMethod = call1005;
        var func1006 = function(argcv) {    // method noSuchMethod
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for noSuchMethod"));
          setModuleName("staticTypes");
          // noSuchMethod is a simple accessor - elide try ... catch
          return var_noSuchMethod;
        };
        func1006.paramCounts = [0];
        this.methods["noSuchMethod"] = func1006;
        func1006.definitionLine = 162;
        func1006.definitionModule = "staticTypes";
        this.methods["noSuchMethod"].debug = "def";
        setLineNumber(164);    // compilenode typedec
        // Type decl ObjectType
        //   Type literal 
        var type1008 = new GraceType("ObjectType");
        type1008.typeMethods.push("methods");
        type1008.typeMethods.push("getMethod");
        type1008.typeMethods.push("isUnknown");
        type1008.typeMethods.push("isSubtypeOf");
        type1008.typeMethods.push("|");
        type1008.typeMethods.push("&");
        var var_ObjectType = type1008;
        setLineNumber(162);    // compilenode method
        var func1009 = function(argcv) {    // method ObjectType
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          if (argcv[0] !== 0)
            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ObjectType"));
          setModuleName("staticTypes");
          // ObjectType is a simple accessor - elide try ... catch
          setLineNumber(164);    // compilenode identifier
          return var_ObjectType;
        };
        func1009.paramCounts = [0];
        this.methods["ObjectType"] = func1009;
        func1009.definitionLine = 162;
        func1009.definitionModule = "staticTypes";
        setLineNumber(173);    // compilenode object
        var obj1010 = Grace_allocObject(GraceObject, "objectType");
        obj1010.definitionModule = "staticTypes";
        obj1010.definitionLine = 173;
        obj1010.outer = this;
        var reader_staticTypes_outer1011 = function() {
          return this.outer;
        };
        obj1010.methods["outer"] = reader_staticTypes_outer1011;
        var obj_init_1010 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj1010;
          var func1012 = function(argcv) {    // method fromMethods(1)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_methods__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !== 1)
              throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for fromMethods(1)"));
            setModuleName("staticTypes");
            setLineNumber(175);    // compilenode object
            var obj1013 = Grace_allocObject(GraceObject, "objectType.fromMethods");
            obj1013.definitionModule = "staticTypes";
            obj1013.definitionLine = 175;
            obj1013.outer = this;
            var reader_staticTypes_outer1014 = function() {
              return this.outer;
            };
            obj1013.methods["outer"] = reader_staticTypes_outer1014;
            var obj_init_1013 = function() {
              var origSuperDepth = superDepth;
              superDepth = obj1013;
              var func1015 = function(argcv) {    // method getMethod(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_name = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for getMethod(1)"));
                setModuleName("staticTypes");
                setLineNumber(180);    // compilenode call
                onSelf = true;
                var call1016 = callmethodChecked(this, "methods", [0]);
                var block1017 = new GraceBlock(this, 180, 1);
                setLineNumber(1);    // compilenode identifier
                block1017.real = function(var_meth) {
                  var if1018 = GraceDone;
                  setLineNumber(181);    // compilenode identifier
                  var call1020 = callmethodChecked(var_meth, "name", [0]);
                  var opresult1022 = callmethodChecked(call1020, "==", [1], var_name);
                  if (Grace_isTrue(opresult1022)) {
                    setLineNumber(182);    // compilenode identifier
                    throw new ReturnException(var_meth, returnTarget);
                  }
                  return if1018;
                };
                var call1023 = callmethodChecked(var_prelude, "for()do", [1, 1], call1016, block1017);
                setLineNumber(186);    // compilenode identifier
                return var_noSuchMethod;
              };
              func1015.paramTypes = [];
              func1015.paramTypes.push([type_String, "name"]);
              func1015.paramCounts = [1];
              obj1013.methods["getMethod"] = func1015;
              func1015.definitionLine = 179;
              func1015.definitionModule = "staticTypes";
              var func1024 = function(argcv) {    // method isSubtypeOf(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_other = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isSubtypeOf(1)"));
                setModuleName("staticTypes");
                var if1025 = GraceDone;
                setLineNumber(195);    // compilenode identifier
                onSelf = true;
                var call1026 = callmethodChecked(this, "isMe", [1], var_other);
                if (Grace_isTrue(call1026)) {
                  setLineNumber(196);    // compilenode identifier
                  return GraceTrue;
                }
                var if1027 = GraceDone;
                setLineNumber(199);    // compilenode identifier
                var call1028 = callmethodChecked(var_other, "isUnknown", [0]);
                if (Grace_isTrue(call1028)) {
                  setLineNumber(200);    // compilenode identifier
                  return GraceTrue;
                }
                var if1029 = GraceDone;
                setLineNumber(204);    // compilenode call
                onSelf = true;
                var call1030 = callmethodChecked(this, "currentlyTesting", [0]);
                var call1031 = callmethodChecked(call1030, "contains", [1], var_other);
                if (Grace_isTrue(call1031)) {
                  setLineNumber(205);    // compilenode identifier
                  return GraceTrue;
                }
                setLineNumber(208);    // compilenode call
                onSelf = true;
                var call1032 = callmethodChecked(this, "currentlyTesting", [0]);
                var call1033 = callmethodChecked(call1032, "push", [1], var_other);
                setLineNumber(210);    // compilenode identifier
                var call1034 = callmethodChecked(var_other, "methods", [0]);
                var block1035 = new GraceBlock(this, 210, 2);
                setLineNumber(1);    // compilenode identifier
                block1035.real = function(var_a, var_continue) {
                  setLineNumber(211);    // compilenode call
                  onSelf = true;
                  var call1036 = callmethodChecked(this, "methods", [0]);
                  var block1037 = new GraceBlock(this, 211, 1);
                  setLineNumber(1);    // compilenode identifier
                  block1037.real = function(var_b) {
                    var if1038 = GraceDone;
                    setLineNumber(212);    // compilenode identifier
                    var call1039 = callmethodChecked(var_b, "isSpecialisationOf", [1], var_a);
                    if (Grace_isTrue(call1039)) {
                      setLineNumber(213);    // compilenode identifier
                      var call1040 = callmethodChecked(var_continue, "apply", [0]);
                      if1038 = call1040;
                    }
                    return if1038;
                  };
                  var call1041 = callmethodChecked(var_prelude, "for()do", [1, 1], call1036, block1037);
                  setLineNumber(217);    // compilenode call
                  onSelf = true;
                  var call1042 = callmethodChecked(this, "currentlyTesting", [0]);
                  var call1043 = callmethodChecked(call1042, "pop", [0]);
                  setLineNumber(218);    // compilenode identifier
                  throw new ReturnException(GraceFalse, returnTarget);
                  return undefined;
                };
                setLineNumber(210);    // compilenode call
                var call1044 = callmethodChecked(superDepth, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call1045 = callmethodChecked(call1044, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call1046 = callmethodChecked(call1045, "for()doWithContinue", [1, 1], call1034, block1035);
                setLineNumber(221);    // compilenode call
                onSelf = true;
                var call1047 = callmethodChecked(this, "currentlyTesting", [0]);
                var call1048 = callmethodChecked(call1047, "pop", [0]);
                setLineNumber(222);    // compilenode identifier
                return GraceTrue;
              };
              func1024.paramTypes = [];
              func1024.paramTypes.push([]);
              func1024.paramCounts = [1];
              obj1013.methods["isSubtypeOf"] = func1024;
              func1024.definitionLine = 194;
              func1024.definitionModule = "staticTypes";
              var func1049 = function(argcv) {    // method |(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_other = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for |(1)"));
                setModuleName("staticTypes");
                var if1050 = GraceDone;
                setLineNumber(226);    // compilenode identifier
                onSelf = true;
                var call1051 = callmethodChecked(this, "isMe", [1], var_other);
                if (Grace_isTrue(call1051)) {
                  return this;
                }
                var if1052 = GraceDone;
                setLineNumber(227);    // compilenode identifier
                var call1053 = callmethodChecked(var_other, "isUnknown", [0]);
                if (Grace_isTrue(call1053)) {
                  var call1054 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call1055 = callmethodChecked(call1054, "unknown", [0]);
                  return call1055;
                }
                setLineNumber(229);    // compilenode array
                var array1056 = new PrimitiveGraceList([]);
                var var_combine = array1056;
                setLineNumber(231);    // compilenode call
                onSelf = true;
                var call1057 = callmethodChecked(this, "methods", [0]);
                var block1058 = new GraceBlock(this, 231, 2);
                setLineNumber(1);    // compilenode identifier
                block1058.real = function(var_meth, var_continue) {
                  setLineNumber(232);    // compilenode identifier
                  var call1059 = callmethodChecked(var_other, "methods", [0]);
                  var block1060 = new GraceBlock(this, 232, 1);
                  setLineNumber(1);    // compilenode identifier
                  block1060.real = function(var_meth__39__) {
                    var if1061 = GraceDone;
                    setLineNumber(233);    // compilenode identifier
                    var call1062 = callmethodChecked(var_meth__39__, "name", [0]);
                    var call1064 = callmethodChecked(var_meth, "name", [0]);
                    var opresult1066 = callmethodChecked(call1064, "==", [1], call1062);
                    if (Grace_isTrue(opresult1066)) {
                      var if1067 = GraceDone;
                      setLineNumber(234);    // compilenode identifier
                      var call1068 = callmethodChecked(var_meth, "isSpecialisationOf", [1], var_meth__39__);
                      if (Grace_isTrue(call1068)) {
                        setLineNumber(235);    // compilenode identifier
                        var call1069 = callmethodChecked(var_combine, "push", [1], var_meth);
                        if1067 = call1069;
                      } else {
                        var if1070 = GraceDone;
                        setLineNumber(236);    // compilenode identifier
                        var call1071 = callmethodChecked(var_meth__39__, "isSpecialisationOf", [1], var_meth);
                        if (Grace_isTrue(call1071)) {
                          setLineNumber(237);    // compilenode identifier
                          var call1072 = callmethodChecked(var_combine, "push", [1], var_meth__39__);
                          if1070 = call1072;
                        } else {
                          setLineNumber(240);    // compilenode string
                          var string1073 = new GraceString("'");
                          var string1076 = new GraceString("' and '");
                          var string1079 = new GraceString("incompatible types '");
                          var opresult1081 = callmethodChecked(string1079, "++", [1], this);
                          var opresult1083 = callmethodChecked(opresult1081, "++", [1], string1076);
                          var opresult1085 = callmethodChecked(opresult1083, "++", [1], var_other);
                          var opresult1087 = callmethodChecked(opresult1085, "++", [1], string1073);
                          setLineNumber(239);    // compilenode string
                          var string1089 = new GraceString("cannot produce intersection of ");
                          var opresult1091 = callmethodChecked(string1089, "++", [1], opresult1087);
                          var call1092 = callmethodChecked(var_TypeError, "raise", [1], opresult1091);
                          if1070 = call1092;
                        }
                        if1067 = if1070;
                      }
                      setLineNumber(243);    // compilenode identifier
                      var call1093 = callmethodChecked(var_continue, "apply", [0]);
                      if1061 = call1093;
                    }
                    return if1061;
                  };
                  var call1094 = callmethodChecked(var_prelude, "for()do", [1, 1], call1059, block1060);
                  return call1094;
                };
                setLineNumber(231);    // compilenode call
                var call1095 = callmethodChecked(superDepth, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call1096 = callmethodChecked(call1095, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call1097 = callmethodChecked(call1096, "for()doWithContinue", [1, 1], call1057, block1058);
                setLineNumber(248);    // compilenode identifier
                var var_hack = var_objectType;
                setLineNumber(249);    // compilenode object
                var obj1098 = Grace_allocObject(null, "object");
                obj1098.definitionModule = "staticTypes";
                obj1098.definitionLine = 249;
                obj1098.outer = this;
                var reader_staticTypes_outer1099 = function() {
                  return this.outer;
                };
                obj1098.methods["outer"] = reader_staticTypes_outer1099;
                var obj_init_1098 = function() {
                  var origSuperDepth = superDepth;
                  superDepth = obj1098;
                  var func1100 = function(argcv) {    // method asString
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    if (argcv[0] !== 0)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                    setModuleName("staticTypes");
                    setLineNumber(253);    // compilenode string
                    var string1101 = new GraceString("");
                    var string1104 = new GraceString(" | ");
                    var call1106 = callmethodChecked(superDepth, "outer", [0]);
                    var string1108 = new GraceString("");
                    var opresult1110 = callmethodChecked(string1108, "++", [1], call1106);
                    var opresult1112 = callmethodChecked(opresult1110, "++", [1], string1104);
                    var opresult1114 = callmethodChecked(opresult1112, "++", [1], var_other);
                    var opresult1116 = callmethodChecked(opresult1114, "++", [1], string1101);
                    return opresult1116;
                  };
                  func1100.paramCounts = [0];
                  obj1098.methods["asString"] = func1100;
                  func1100.definitionLine = 252;
                  func1100.definitionModule = "staticTypes";
                  setLineNumber(250);    // compilenode identifier
                  var call1117 = callmethodChecked(var_hack, "fromMethods()object", [1, 1], var_combine, this);
                  obj1098.superobj = call1117;
                  if (call1117.data) obj1098.data = call1117.data;
                  if (call1117.hasOwnProperty('_value'))
                      obj1098._value = call1117._value;
                  superDepth = origSuperDepth;
                };
                obj_init_1098.apply(obj1098, []);
                return obj1098;
              };
              func1049.paramTypes = [];
              func1049.paramTypes.push([]);
              func1049.paramCounts = [1];
              obj1013.methods["|"] = func1049;
              func1049.definitionLine = 225;
              func1049.definitionModule = "staticTypes";
              var func1118 = function(argcv) {    // method &(1)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_other = arguments[curarg];
                curarg++;
                if (argcv[0] !== 1)
                  throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for &(1)"));
                setModuleName("staticTypes");
                var if1119 = GraceDone;
                setLineNumber(259);    // compilenode identifier
                onSelf = true;
                var call1120 = callmethodChecked(this, "isMe", [1], var_other);
                if (Grace_isTrue(call1120)) {
                  return this;
                }
                var if1121 = GraceDone;
                setLineNumber(260);    // compilenode identifier
                var call1122 = callmethodChecked(var_other, "isUnknown", [0]);
                if (Grace_isTrue(call1122)) {
                  var call1123 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call1124 = callmethodChecked(call1123, "unknown", [0]);
                  return call1124;
                }
                setLineNumber(262);    // compilenode array
                var array1125 = new PrimitiveGraceList([]);
                var var_combine = array1125;
                setLineNumber(263);    // compilenode array
                var array1126 = new PrimitiveGraceList([]);
                var var_twice = array1126;
                setLineNumber(265);    // compilenode call
                onSelf = true;
                var call1127 = callmethodChecked(this, "methods", [0]);
                var block1128 = new GraceBlock(this, 265, 2);
                setLineNumber(1);    // compilenode identifier
                block1128.real = function(var_meth, var_continue) {
                  setLineNumber(266);    // compilenode identifier
                  var call1129 = callmethodChecked(var_other, "methods", [0]);
                  var block1130 = new GraceBlock(this, 266, 1);
                  setLineNumber(1);    // compilenode identifier
                  block1130.real = function(var_meth__39__) {
                    var if1131 = GraceDone;
                    setLineNumber(267);    // compilenode identifier
                    var call1132 = callmethodChecked(var_meth__39__, "name", [0]);
                    var call1134 = callmethodChecked(var_meth, "name", [0]);
                    var opresult1136 = callmethodChecked(call1134, "==", [1], call1132);
                    if (Grace_isTrue(opresult1136)) {
                      var if1137 = GraceDone;
                      setLineNumber(268);    // compilenode identifier
                      var call1138 = callmethodChecked(var_meth, "isSpecialisationOf", [1], var_meth__39__);
                      if (Grace_isTrue(call1138)) {
                        setLineNumber(269);    // compilenode identifier
                        var call1139 = callmethodChecked(var_combine, "push", [1], var_meth);
                        if1137 = call1139;
                      } else {
                        var if1140 = GraceDone;
                        setLineNumber(270);    // compilenode identifier
                        var call1141 = callmethodChecked(var_meth__39__, "isSpecialisationOf", [1], var_meth);
                        if (Grace_isTrue(call1141)) {
                          setLineNumber(271);    // compilenode identifier
                          var call1142 = callmethodChecked(var_combine, "push", [1], var_meth__39__);
                          if1140 = call1142;
                        } else {
                          setLineNumber(274);    // compilenode string
                          var string1143 = new GraceString("'");
                          var string1146 = new GraceString("' and '");
                          var string1149 = new GraceString("incompatible types '");
                          var opresult1151 = callmethodChecked(string1149, "++", [1], this);
                          var opresult1153 = callmethodChecked(opresult1151, "++", [1], string1146);
                          var opresult1155 = callmethodChecked(opresult1153, "++", [1], var_other);
                          var opresult1157 = callmethodChecked(opresult1155, "++", [1], string1143);
                          setLineNumber(273);    // compilenode string
                          var string1159 = new GraceString("cannot produce union of ");
                          var opresult1161 = callmethodChecked(string1159, "++", [1], opresult1157);
                          var call1162 = callmethodChecked(var_TypeError, "raise", [1], opresult1161);
                          if1140 = call1162;
                        }
                        if1137 = if1140;
                      }
                      setLineNumber(277);    // compilenode identifier
                      var call1163 = callmethodChecked(var_meth, "name", [0]);
                      var call1164 = callmethodChecked(var_twice, "push", [1], call1163);
                      setLineNumber(279);    // compilenode identifier
                      var call1165 = callmethodChecked(var_continue, "apply", [0]);
                      if1131 = call1165;
                    }
                    return if1131;
                  };
                  var call1166 = callmethodChecked(var_prelude, "for()do", [1, 1], call1129, block1130);
                  setLineNumber(283);    // compilenode identifier
                  var call1167 = callmethodChecked(var_combine, "push", [1], var_meth);
                  return call1167;
                };
                setLineNumber(265);    // compilenode call
                var call1168 = callmethodChecked(superDepth, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call1169 = callmethodChecked(call1168, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call1170 = callmethodChecked(call1169, "for()doWithContinue", [1, 1], call1127, block1128);
                setLineNumber(286);    // compilenode identifier
                var call1171 = callmethodChecked(var_other, "methods", [0]);
                var block1172 = new GraceBlock(this, 286, 1);
                setLineNumber(1);    // compilenode identifier
                block1172.real = function(var_meth) {
                  var if1173 = GraceDone;
                  setLineNumber(287);    // compilenode identifier
                  var call1174 = callmethodChecked(var_meth, "name", [0]);
                  var call1175 = callmethodChecked(var_twice, "contains", [1], call1174);
                  var call1176 = callmethodChecked(call1175, "not", [0]);
                  if (Grace_isTrue(call1176)) {
                    setLineNumber(288);    // compilenode identifier
                    var call1177 = callmethodChecked(var_combine, "push", [1], var_meth);
                    if1173 = call1177;
                  }
                  return if1173;
                };
                var call1178 = callmethodChecked(var_prelude, "for()do", [1, 1], call1171, block1172);
                setLineNumber(292);    // compilenode identifier
                var var_hack = var_objectType;
                setLineNumber(293);    // compilenode object
                var obj1179 = Grace_allocObject(null, "objectType.fromMethods.object");
                obj1179.definitionModule = "staticTypes";
                obj1179.definitionLine = 293;
                obj1179.outer = this;
                var reader_staticTypes_outer1180 = function() {
                  return this.outer;
                };
                obj1179.methods["outer"] = reader_staticTypes_outer1180;
                var obj_init_1179 = function() {
                  var origSuperDepth = superDepth;
                  superDepth = obj1179;
                  var func1181 = function(argcv) {    // method asString
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    if (argcv[0] !== 0)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                    setModuleName("staticTypes");
                    setLineNumber(297);    // compilenode string
                    var string1182 = new GraceString("");
                    var string1185 = new GraceString(" & ");
                    var call1187 = callmethodChecked(superDepth, "outer", [0]);
                    var string1189 = new GraceString("");
                    var opresult1191 = callmethodChecked(string1189, "++", [1], call1187);
                    var opresult1193 = callmethodChecked(opresult1191, "++", [1], string1185);
                    var opresult1195 = callmethodChecked(opresult1193, "++", [1], var_other);
                    var opresult1197 = callmethodChecked(opresult1195, "++", [1], string1182);
                    return opresult1197;
                  };
                  func1181.paramCounts = [0];
                  obj1179.methods["asString"] = func1181;
                  func1181.definitionLine = 296;
                  func1181.definitionModule = "staticTypes";
                  setLineNumber(294);    // compilenode identifier
                  var call1198 = callmethodChecked(var_hack, "fromMethods()object", [1, 1], var_combine, this);
                  obj1179.superobj = call1198;
                  if (call1198.data) obj1179.data = call1198.data;
                  if (call1198.hasOwnProperty('_value'))
                      obj1179._value = call1198._value;
                  superDepth = origSuperDepth;
                };
                obj_init_1179.apply(obj1179, []);
                return obj1179;
              };
              func1118.paramTypes = [];
              func1118.paramTypes.push([]);
              func1118.paramCounts = [1];
              obj1013.methods["&"] = func1118;
              func1118.definitionLine = 258;
              func1118.definitionModule = "staticTypes";
                var func1199 = function(argcv) {    // method &(1     )()object
                  var curarg = 1;
                  var var_other = arguments[curarg];
                  curarg++;
                  var inheritingObject = arguments[curarg++];
                  // Start argument processing
                  curarg = 1;
                  curarg++;
                  // End argument processing
                  setModuleName("staticTypes");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var if1200 = GraceDone;
                  setLineNumber(259);    // compilenode identifier
                  onSelf = true;
                  var call1201 = callmethodChecked(this, "isMe", [1], var_other);
                  if (Grace_isTrue(call1201)) {
                    return this;
                  }
                  var if1202 = GraceDone;
                  setLineNumber(260);    // compilenode identifier
                  var call1203 = callmethodChecked(var_other, "isUnknown", [0]);
                  if (Grace_isTrue(call1203)) {
                    var call1204 = callmethodChecked(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call1205 = callmethodChecked(call1204, "unknown", [0]);
                    return call1205;
                  }
                  setLineNumber(262);    // compilenode array
                  var array1206 = new PrimitiveGraceList([]);
                  var var_combine = array1206;
                  setLineNumber(263);    // compilenode array
                  var array1207 = new PrimitiveGraceList([]);
                  var var_twice = array1207;
                  setLineNumber(265);    // compilenode call
                  onSelf = true;
                  var call1208 = callmethodChecked(this, "methods", [0]);
                  var block1209 = new GraceBlock(this, 265, 2);
                  setLineNumber(1);    // compilenode identifier
                  block1209.real = function(var_meth, var_continue) {
                    setLineNumber(266);    // compilenode identifier
                    var call1210 = callmethodChecked(var_other, "methods", [0]);
                    var block1211 = new GraceBlock(this, 266, 1);
                    setLineNumber(1);    // compilenode identifier
                    block1211.real = function(var_meth__39__) {
                      var if1212 = GraceDone;
                      setLineNumber(267);    // compilenode identifier
                      var call1213 = callmethodChecked(var_meth__39__, "name", [0]);
                      var call1215 = callmethodChecked(var_meth, "name", [0]);
                      var opresult1217 = callmethodChecked(call1215, "==", [1], call1213);
                      if (Grace_isTrue(opresult1217)) {
                        var if1218 = GraceDone;
                        setLineNumber(268);    // compilenode identifier
                        var call1219 = callmethodChecked(var_meth, "isSpecialisationOf", [1], var_meth__39__);
                        if (Grace_isTrue(call1219)) {
                          setLineNumber(269);    // compilenode identifier
                          var call1220 = callmethodChecked(var_combine, "push", [1], var_meth);
                          if1218 = call1220;
                        } else {
                          var if1221 = GraceDone;
                          setLineNumber(270);    // compilenode identifier
                          var call1222 = callmethodChecked(var_meth__39__, "isSpecialisationOf", [1], var_meth);
                          if (Grace_isTrue(call1222)) {
                            setLineNumber(271);    // compilenode identifier
                            var call1223 = callmethodChecked(var_combine, "push", [1], var_meth__39__);
                            if1221 = call1223;
                          } else {
                            setLineNumber(274);    // compilenode string
                            var string1224 = new GraceString("'");
                            var string1227 = new GraceString("' and '");
                            var string1230 = new GraceString("incompatible types '");
                            var opresult1232 = callmethodChecked(string1230, "++", [1], this);
                            var opresult1234 = callmethodChecked(opresult1232, "++", [1], string1227);
                            var opresult1236 = callmethodChecked(opresult1234, "++", [1], var_other);
                            var opresult1238 = callmethodChecked(opresult1236, "++", [1], string1224);
                            setLineNumber(273);    // compilenode string
                            var string1240 = new GraceString("cannot produce union of ");
                            var opresult1242 = callmethodChecked(string1240, "++", [1], opresult1238);
                            var call1243 = callmethodChecked(var_TypeError, "raise", [1], opresult1242);
                            if1221 = call1243;
                          }
                          if1218 = if1221;
                        }
                        setLineNumber(277);    // compilenode identifier
                        var call1244 = callmethodChecked(var_meth, "name", [0]);
                        var call1245 = callmethodChecked(var_twice, "push", [1], call1244);
                        setLineNumber(279);    // compilenode identifier
                        var call1246 = callmethodChecked(var_continue, "apply", [0]);
                        if1212 = call1246;
                      }
                      return if1212;
                    };
                    var call1247 = callmethodChecked(var_prelude, "for()do", [1, 1], call1210, block1211);
                    setLineNumber(283);    // compilenode identifier
                    var call1248 = callmethodChecked(var_combine, "push", [1], var_meth);
                    return call1248;
                  };
                  setLineNumber(265);    // compilenode call
                  var call1249 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call1250 = callmethodChecked(call1249, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call1251 = callmethodChecked(call1250, "for()doWithContinue", [1, 1], call1208, block1209);
                  setLineNumber(286);    // compilenode identifier
                  var call1252 = callmethodChecked(var_other, "methods", [0]);
                  var block1253 = new GraceBlock(this, 286, 1);
                  setLineNumber(1);    // compilenode identifier
                  block1253.real = function(var_meth) {
                    var if1254 = GraceDone;
                    setLineNumber(287);    // compilenode identifier
                    var call1255 = callmethodChecked(var_meth, "name", [0]);
                    var call1256 = callmethodChecked(var_twice, "contains", [1], call1255);
                    var call1257 = callmethodChecked(call1256, "not", [0]);
                    if (Grace_isTrue(call1257)) {
                      setLineNumber(288);    // compilenode identifier
                      var call1258 = callmethodChecked(var_combine, "push", [1], var_meth);
                      if1254 = call1258;
                    }
                    return if1254;
                  };
                  var call1259 = callmethodChecked(var_prelude, "for()do", [1, 1], call1252, block1253);
                  setLineNumber(292);    // compilenode identifier
                  var var_hack = var_objectType;
                  var obj1260 = Grace_allocObject(null, "&");
                  obj1260.definitionModule = "staticTypes";
                  obj1260.definitionLine = 293;
                  var inho1260 = inheritingObject;
                  while (inho1260.superobj) inho1260 = inho1260.superobj;
                  inho1260.superobj = obj1260;
                  obj1260.data = inheritingObject.data;
                  if (inheritingObject.hasOwnProperty('_value'))
                    obj1260._value = inheritingObject._value;
                  obj1260.outer = this;
                  var reader_staticTypes_outer1261 = function() {
                    return this.outer;
                  };
                  obj1260.methods["outer"] = reader_staticTypes_outer1261;
                  var obj_init_1260 = function() {
                    var origSuperDepth = superDepth;
                    superDepth = obj1260;
                    var func1262 = function(argcv) {    // method asString
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      if (argcv[0] !== 0)
                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                      setModuleName("staticTypes");
                      setLineNumber(297);    // compilenode string
                      var string1263 = new GraceString("");
                      var string1266 = new GraceString(" & ");
                      var call1268 = callmethodChecked(superDepth, "outer", [0]);
                      var string1270 = new GraceString("");
                      var opresult1272 = callmethodChecked(string1270, "++", [1], call1268);
                      var opresult1274 = callmethodChecked(opresult1272, "++", [1], string1266);
                      var opresult1276 = callmethodChecked(opresult1274, "++", [1], var_other);
                      var opresult1278 = callmethodChecked(opresult1276, "++", [1], string1263);
                      return opresult1278;
                    };
                    func1262.paramCounts = [0];
                    obj1260.methods["asString"] = func1262;
                    func1262.definitionLine = 296;
                    func1262.definitionModule = "staticTypes";
                    setLineNumber(294);    // compilenode identifier
                    var call1279 = callmethodChecked(var_hack, "fromMethods()object", [1, 1], var_combine, this);
                    obj1260.superobj = call1279;
                    if (call1279.data) obj1260.data = call1279.data;
                    if (call1279.hasOwnProperty('_value'))
                        obj1260._value = call1279._value;
                    superDepth = origSuperDepth;
                  };
                  obj_init_1260.apply(inheritingObject, []);
                  return obj1260;
                  };
                  func1199.paramTypes = [];
                  func1199.paramTypes.push([]);
                  obj1013.methods["&()object"] = func1199;
                var func1280 = function(argcv) {    // method asString
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  if (argcv[0] !== 0)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                  setModuleName("staticTypes");
                  var if1281 = GraceDone;
                  setLineNumber(303);    // compilenode call
                  onSelf = true;
                  var call1283 = callmethodChecked(this, "methods", [0]);
                  var call1284 = callmethodChecked(call1283, "size", [0]);
                  var opresult1286 = callmethodChecked(call1284, "==", [1], new GraceNum(3));
                  if (Grace_isTrue(opresult1286)) {
                    setLineNumber(304);    // compilenode string
                    var string1287 = new GraceString("Object");
                    return string1287;
                  }
                  setLineNumber(307);    // compilenode string
                  var string1288 = new GraceString("{ ");
                  var var_out = string1288;
                  setLineNumber(309);    // compilenode call
                  onSelf = true;
                  var call1289 = callmethodChecked(this, "methods", [0]);
                  var block1290 = new GraceBlock(this, 309, 1);
                  setLineNumber(1);    // compilenode identifier
                  block1290.real = function(var_mtype) {
                    var if1291 = GraceDone;
                    setLineNumber(310);    // compilenode identifier
                    var call1292 = callmethodChecked(var_mtype, "name", [0]);
                    var string1294 = new GraceString("!=");
                    var string1295 = new GraceString("\u2260");
                    var string1296 = new GraceString("asString");
                    var string1297 = new GraceString("asDebugString");
                    var string1298 = new GraceString("::");
                    var array1293 = new PrimitiveGraceList([string1294, string1295, string1296, string1297, string1298]);
                    var call1299 = callmethodChecked(array1293, "contains", [1], call1292);
                    var call1300 = callmethodChecked(call1299, "not", [0]);
                    if (Grace_isTrue(call1300)) {
                      setLineNumber(311);    // compilenode string
                      var string1301 = new GraceString("; ");
                      var string1304 = new GraceString("");
                      var string1307 = new GraceString("");
                      var opresult1309 = callmethodChecked(string1307, "++", [1], var_out);
                      var opresult1311 = callmethodChecked(opresult1309, "++", [1], string1304);
                      var opresult1313 = callmethodChecked(opresult1311, "++", [1], var_mtype);
                      var opresult1315 = callmethodChecked(opresult1313, "++", [1], string1301);
                      var_out = opresult1315;
                      if1291 = GraceDone;
                    }
                    return if1291;
                  };
                  var call1316 = callmethodChecked(var_prelude, "for()do", [1, 1], call1289, block1290);
                  setLineNumber(315);    // compilenode string
                  var string1317 = new GraceString("}");
                  var string1320 = new GraceString("");
                  var opresult1322 = callmethodChecked(string1320, "++", [1], var_out);
                  var opresult1324 = callmethodChecked(opresult1322, "++", [1], string1317);
                  return opresult1324;
                };
                func1280.paramCounts = [0];
                obj1013.methods["asString"] = func1280;
                func1280.definitionLine = 302;
                func1280.definitionModule = "staticTypes";
                var if1326 = GraceDone;
                setLineNumber(176);    // compilenode call
                var call1327 = callmethodChecked(superDepth, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call1328 = callmethodChecked(call1327, "unknown", [0]);
                var call1330 = callmethodChecked(superDepth, "outer", [0]);
                onOuter = true;
                onSelf = true;
                var call1331 = callmethodChecked(call1330, "base", [0]);
                var opresult1333 = callmethodChecked(call1331, "==", [1], call1328);
                if (Grace_isTrue(opresult1333)) {
                  setLineNumber(177);    // compilenode array
                  var array1334 = new PrimitiveGraceList([]);
                  if1326 = array1334;
                } else {
                  var call1335 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call1336 = callmethodChecked(call1335, "base", [0]);
                  var call1337 = callmethodChecked(call1336, "methods", [0]);
                  if1326 = call1337;
                }
                var opresult1339 = callmethodChecked(if1326, "++", [1], var_methods__39__);
                obj1013.data["methods"] = opresult1339;
                var reader_staticTypes_methods1340 = function() {
                  return this.data["methods"];
                };
                reader_staticTypes_methods1340.def = true;
                obj1013.methods["methods"] = reader_staticTypes_methods1340;
                setLineNumber(189);    // compilenode identifier
                obj1013.data["isUnknown"] = GraceFalse;
                var reader_staticTypes_isUnknown1341 = function() {
                  return this.data["isUnknown"];
                };
                reader_staticTypes_isUnknown1341.def = true;
                obj1013.methods["isUnknown"] = reader_staticTypes_isUnknown1341;
                setLineNumber(192);    // compilenode array
                var array1342 = new PrimitiveGraceList([]);
                obj1013.data["currentlyTesting"] = array1342;
                var reader_staticTypes_currentlyTesting1343 = function() {
                  return this.data["currentlyTesting"];
                };
                reader_staticTypes_currentlyTesting1343.def = true;
                reader_staticTypes_currentlyTesting1343.confidential = true;
                obj1013.methods["currentlyTesting"] = reader_staticTypes_currentlyTesting1343;
                superDepth = origSuperDepth;
              };
              obj_init_1013.apply(obj1013, []);
              return obj1013;
            };
            func1012.paramCounts = [1];
            obj1010.methods["fromMethods"] = func1012;
            func1012.definitionLine = 175;
            func1012.definitionModule = "staticTypes";
              var func1344 = function(argcv) {    // method fromMethods(1     )()object
                var curarg = 1;
                var var_methods__39__ = arguments[curarg];
                curarg++;
                var inheritingObject = arguments[curarg++];
                // Start argument processing
                curarg = 1;
                curarg++;
                // End argument processing
                setModuleName("staticTypes");
                var returnTarget = invocationCount;
                invocationCount++;
                var obj1345 = Grace_allocObject(GraceObject, "fromMethods");
                obj1345.definitionModule = "staticTypes";
                obj1345.definitionLine = 175;
                var inho1345 = inheritingObject;
                while (inho1345.superobj) inho1345 = inho1345.superobj;
                inho1345.superobj = obj1345;
                obj1345.data = inheritingObject.data;
                if (inheritingObject.hasOwnProperty('_value'))
                  obj1345._value = inheritingObject._value;
                obj1345.outer = this;
                var reader_staticTypes_outer1346 = function() {
                  return this.outer;
                };
                obj1345.methods["outer"] = reader_staticTypes_outer1346;
                var obj_init_1345 = function() {
                  var origSuperDepth = superDepth;
                  superDepth = obj1345;
                  var func1347 = function(argcv) {    // method getMethod(1)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_name = arguments[curarg];
                    curarg++;
                    if (argcv[0] !== 1)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for getMethod(1)"));
                    setModuleName("staticTypes");
                    setLineNumber(180);    // compilenode call
                    onSelf = true;
                    var call1348 = callmethodChecked(this, "methods", [0]);
                    var block1349 = new GraceBlock(this, 180, 1);
                    setLineNumber(1);    // compilenode identifier
                    block1349.real = function(var_meth) {
                      var if1350 = GraceDone;
                      setLineNumber(181);    // compilenode identifier
                      var call1352 = callmethodChecked(var_meth, "name", [0]);
                      var opresult1354 = callmethodChecked(call1352, "==", [1], var_name);
                      if (Grace_isTrue(opresult1354)) {
                        setLineNumber(182);    // compilenode identifier
                        throw new ReturnException(var_meth, returnTarget);
                      }
                      return if1350;
                    };
                    var call1355 = callmethodChecked(var_prelude, "for()do", [1, 1], call1348, block1349);
                    setLineNumber(186);    // compilenode identifier
                    return var_noSuchMethod;
                  };
                  func1347.paramTypes = [];
                  func1347.paramTypes.push([type_String, "name"]);
                  func1347.paramCounts = [1];
                  obj1345.methods["getMethod"] = func1347;
                  func1347.definitionLine = 179;
                  func1347.definitionModule = "staticTypes";
                  var func1356 = function(argcv) {    // method isSubtypeOf(1)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_other = arguments[curarg];
                    curarg++;
                    if (argcv[0] !== 1)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isSubtypeOf(1)"));
                    setModuleName("staticTypes");
                    var if1357 = GraceDone;
                    setLineNumber(195);    // compilenode identifier
                    onSelf = true;
                    var call1358 = callmethodChecked(this, "isMe", [1], var_other);
                    if (Grace_isTrue(call1358)) {
                      setLineNumber(196);    // compilenode identifier
                      return GraceTrue;
                    }
                    var if1359 = GraceDone;
                    setLineNumber(199);    // compilenode identifier
                    var call1360 = callmethodChecked(var_other, "isUnknown", [0]);
                    if (Grace_isTrue(call1360)) {
                      setLineNumber(200);    // compilenode identifier
                      return GraceTrue;
                    }
                    var if1361 = GraceDone;
                    setLineNumber(204);    // compilenode call
                    onSelf = true;
                    var call1362 = callmethodChecked(this, "currentlyTesting", [0]);
                    var call1363 = callmethodChecked(call1362, "contains", [1], var_other);
                    if (Grace_isTrue(call1363)) {
                      setLineNumber(205);    // compilenode identifier
                      return GraceTrue;
                    }
                    setLineNumber(208);    // compilenode call
                    onSelf = true;
                    var call1364 = callmethodChecked(this, "currentlyTesting", [0]);
                    var call1365 = callmethodChecked(call1364, "push", [1], var_other);
                    setLineNumber(210);    // compilenode identifier
                    var call1366 = callmethodChecked(var_other, "methods", [0]);
                    var block1367 = new GraceBlock(this, 210, 2);
                    setLineNumber(1);    // compilenode identifier
                    block1367.real = function(var_a, var_continue) {
                      setLineNumber(211);    // compilenode call
                      onSelf = true;
                      var call1368 = callmethodChecked(this, "methods", [0]);
                      var block1369 = new GraceBlock(this, 211, 1);
                      setLineNumber(1);    // compilenode identifier
                      block1369.real = function(var_b) {
                        var if1370 = GraceDone;
                        setLineNumber(212);    // compilenode identifier
                        var call1371 = callmethodChecked(var_b, "isSpecialisationOf", [1], var_a);
                        if (Grace_isTrue(call1371)) {
                          setLineNumber(213);    // compilenode identifier
                          var call1372 = callmethodChecked(var_continue, "apply", [0]);
                          if1370 = call1372;
                        }
                        return if1370;
                      };
                      var call1373 = callmethodChecked(var_prelude, "for()do", [1, 1], call1368, block1369);
                      setLineNumber(217);    // compilenode call
                      onSelf = true;
                      var call1374 = callmethodChecked(this, "currentlyTesting", [0]);
                      var call1375 = callmethodChecked(call1374, "pop", [0]);
                      setLineNumber(218);    // compilenode identifier
                      throw new ReturnException(GraceFalse, returnTarget);
                      return undefined;
                    };
                    setLineNumber(210);    // compilenode call
                    var call1376 = callmethodChecked(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call1377 = callmethodChecked(call1376, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call1378 = callmethodChecked(call1377, "for()doWithContinue", [1, 1], call1366, block1367);
                    setLineNumber(221);    // compilenode call
                    onSelf = true;
                    var call1379 = callmethodChecked(this, "currentlyTesting", [0]);
                    var call1380 = callmethodChecked(call1379, "pop", [0]);
                    setLineNumber(222);    // compilenode identifier
                    return GraceTrue;
                  };
                  func1356.paramTypes = [];
                  func1356.paramTypes.push([]);
                  func1356.paramCounts = [1];
                  obj1345.methods["isSubtypeOf"] = func1356;
                  func1356.definitionLine = 194;
                  func1356.definitionModule = "staticTypes";
                  var func1381 = function(argcv) {    // method |(1)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_other = arguments[curarg];
                    curarg++;
                    if (argcv[0] !== 1)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for |(1)"));
                    setModuleName("staticTypes");
                    var if1382 = GraceDone;
                    setLineNumber(226);    // compilenode identifier
                    onSelf = true;
                    var call1383 = callmethodChecked(this, "isMe", [1], var_other);
                    if (Grace_isTrue(call1383)) {
                      return this;
                    }
                    var if1384 = GraceDone;
                    setLineNumber(227);    // compilenode identifier
                    var call1385 = callmethodChecked(var_other, "isUnknown", [0]);
                    if (Grace_isTrue(call1385)) {
                      var call1386 = callmethodChecked(superDepth, "outer", [0]);
                      onOuter = true;
                      onSelf = true;
                      var call1387 = callmethodChecked(call1386, "unknown", [0]);
                      return call1387;
                    }
                    setLineNumber(229);    // compilenode array
                    var array1388 = new PrimitiveGraceList([]);
                    var var_combine = array1388;
                    setLineNumber(231);    // compilenode call
                    onSelf = true;
                    var call1389 = callmethodChecked(this, "methods", [0]);
                    var block1390 = new GraceBlock(this, 231, 2);
                    setLineNumber(1);    // compilenode identifier
                    block1390.real = function(var_meth, var_continue) {
                      setLineNumber(232);    // compilenode identifier
                      var call1391 = callmethodChecked(var_other, "methods", [0]);
                      var block1392 = new GraceBlock(this, 232, 1);
                      setLineNumber(1);    // compilenode identifier
                      block1392.real = function(var_meth__39__) {
                        var if1393 = GraceDone;
                        setLineNumber(233);    // compilenode identifier
                        var call1394 = callmethodChecked(var_meth__39__, "name", [0]);
                        var call1396 = callmethodChecked(var_meth, "name", [0]);
                        var opresult1398 = callmethodChecked(call1396, "==", [1], call1394);
                        if (Grace_isTrue(opresult1398)) {
                          var if1399 = GraceDone;
                          setLineNumber(234);    // compilenode identifier
                          var call1400 = callmethodChecked(var_meth, "isSpecialisationOf", [1], var_meth__39__);
                          if (Grace_isTrue(call1400)) {
                            setLineNumber(235);    // compilenode identifier
                            var call1401 = callmethodChecked(var_combine, "push", [1], var_meth);
                            if1399 = call1401;
                          } else {
                            var if1402 = GraceDone;
                            setLineNumber(236);    // compilenode identifier
                            var call1403 = callmethodChecked(var_meth__39__, "isSpecialisationOf", [1], var_meth);
                            if (Grace_isTrue(call1403)) {
                              setLineNumber(237);    // compilenode identifier
                              var call1404 = callmethodChecked(var_combine, "push", [1], var_meth__39__);
                              if1402 = call1404;
                            } else {
                              setLineNumber(240);    // compilenode string
                              var string1405 = new GraceString("'");
                              var string1408 = new GraceString("' and '");
                              var string1411 = new GraceString("incompatible types '");
                              var opresult1413 = callmethodChecked(string1411, "++", [1], this);
                              var opresult1415 = callmethodChecked(opresult1413, "++", [1], string1408);
                              var opresult1417 = callmethodChecked(opresult1415, "++", [1], var_other);
                              var opresult1419 = callmethodChecked(opresult1417, "++", [1], string1405);
                              setLineNumber(239);    // compilenode string
                              var string1421 = new GraceString("cannot produce intersection of ");
                              var opresult1423 = callmethodChecked(string1421, "++", [1], opresult1419);
                              var call1424 = callmethodChecked(var_TypeError, "raise", [1], opresult1423);
                              if1402 = call1424;
                            }
                            if1399 = if1402;
                          }
                          setLineNumber(243);    // compilenode identifier
                          var call1425 = callmethodChecked(var_continue, "apply", [0]);
                          if1393 = call1425;
                        }
                        return if1393;
                      };
                      var call1426 = callmethodChecked(var_prelude, "for()do", [1, 1], call1391, block1392);
                      return call1426;
                    };
                    setLineNumber(231);    // compilenode call
                    var call1427 = callmethodChecked(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call1428 = callmethodChecked(call1427, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call1429 = callmethodChecked(call1428, "for()doWithContinue", [1, 1], call1389, block1390);
                    setLineNumber(248);    // compilenode identifier
                    var var_hack = var_objectType;
                    setLineNumber(249);    // compilenode object
                    var obj1430 = Grace_allocObject(null, "object");
                    obj1430.definitionModule = "staticTypes";
                    obj1430.definitionLine = 249;
                    obj1430.outer = this;
                    var reader_staticTypes_outer1431 = function() {
                      return this.outer;
                    };
                    obj1430.methods["outer"] = reader_staticTypes_outer1431;
                    var obj_init_1430 = function() {
                      var origSuperDepth = superDepth;
                      superDepth = obj1430;
                      var func1432 = function(argcv) {    // method asString
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var curarg = 1;
                        if (argcv[0] !== 0)
                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                        setModuleName("staticTypes");
                        setLineNumber(253);    // compilenode string
                        var string1433 = new GraceString("");
                        var string1436 = new GraceString(" | ");
                        var call1438 = callmethodChecked(superDepth, "outer", [0]);
                        var string1440 = new GraceString("");
                        var opresult1442 = callmethodChecked(string1440, "++", [1], call1438);
                        var opresult1444 = callmethodChecked(opresult1442, "++", [1], string1436);
                        var opresult1446 = callmethodChecked(opresult1444, "++", [1], var_other);
                        var opresult1448 = callmethodChecked(opresult1446, "++", [1], string1433);
                        return opresult1448;
                      };
                      func1432.paramCounts = [0];
                      obj1430.methods["asString"] = func1432;
                      func1432.definitionLine = 252;
                      func1432.definitionModule = "staticTypes";
                      setLineNumber(250);    // compilenode identifier
                      var call1449 = callmethodChecked(var_hack, "fromMethods()object", [1, 1], var_combine, this);
                      obj1430.superobj = call1449;
                      if (call1449.data) obj1430.data = call1449.data;
                      if (call1449.hasOwnProperty('_value'))
                          obj1430._value = call1449._value;
                      superDepth = origSuperDepth;
                    };
                    obj_init_1430.apply(obj1430, []);
                    return obj1430;
                  };
                  func1381.paramTypes = [];
                  func1381.paramTypes.push([]);
                  func1381.paramCounts = [1];
                  obj1345.methods["|"] = func1381;
                  func1381.definitionLine = 225;
                  func1381.definitionModule = "staticTypes";
                  var func1450 = function(argcv) {    // method &(1)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_other = arguments[curarg];
                    curarg++;
                    if (argcv[0] !== 1)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for &(1)"));
                    setModuleName("staticTypes");
                    var if1451 = GraceDone;
                    setLineNumber(259);    // compilenode identifier
                    onSelf = true;
                    var call1452 = callmethodChecked(this, "isMe", [1], var_other);
                    if (Grace_isTrue(call1452)) {
                      return this;
                    }
                    var if1453 = GraceDone;
                    setLineNumber(260);    // compilenode identifier
                    var call1454 = callmethodChecked(var_other, "isUnknown", [0]);
                    if (Grace_isTrue(call1454)) {
                      var call1455 = callmethodChecked(superDepth, "outer", [0]);
                      onOuter = true;
                      onSelf = true;
                      var call1456 = callmethodChecked(call1455, "unknown", [0]);
                      return call1456;
                    }
                    setLineNumber(262);    // compilenode array
                    var array1457 = new PrimitiveGraceList([]);
                    var var_combine = array1457;
                    setLineNumber(263);    // compilenode array
                    var array1458 = new PrimitiveGraceList([]);
                    var var_twice = array1458;
                    setLineNumber(265);    // compilenode call
                    onSelf = true;
                    var call1459 = callmethodChecked(this, "methods", [0]);
                    var block1460 = new GraceBlock(this, 265, 2);
                    setLineNumber(1);    // compilenode identifier
                    block1460.real = function(var_meth, var_continue) {
                      setLineNumber(266);    // compilenode identifier
                      var call1461 = callmethodChecked(var_other, "methods", [0]);
                      var block1462 = new GraceBlock(this, 266, 1);
                      setLineNumber(1);    // compilenode identifier
                      block1462.real = function(var_meth__39__) {
                        var if1463 = GraceDone;
                        setLineNumber(267);    // compilenode identifier
                        var call1464 = callmethodChecked(var_meth__39__, "name", [0]);
                        var call1466 = callmethodChecked(var_meth, "name", [0]);
                        var opresult1468 = callmethodChecked(call1466, "==", [1], call1464);
                        if (Grace_isTrue(opresult1468)) {
                          var if1469 = GraceDone;
                          setLineNumber(268);    // compilenode identifier
                          var call1470 = callmethodChecked(var_meth, "isSpecialisationOf", [1], var_meth__39__);
                          if (Grace_isTrue(call1470)) {
                            setLineNumber(269);    // compilenode identifier
                            var call1471 = callmethodChecked(var_combine, "push", [1], var_meth);
                            if1469 = call1471;
                          } else {
                            var if1472 = GraceDone;
                            setLineNumber(270);    // compilenode identifier
                            var call1473 = callmethodChecked(var_meth__39__, "isSpecialisationOf", [1], var_meth);
                            if (Grace_isTrue(call1473)) {
                              setLineNumber(271);    // compilenode identifier
                              var call1474 = callmethodChecked(var_combine, "push", [1], var_meth__39__);
                              if1472 = call1474;
                            } else {
                              setLineNumber(274);    // compilenode string
                              var string1475 = new GraceString("'");
                              var string1478 = new GraceString("' and '");
                              var string1481 = new GraceString("incompatible types '");
                              var opresult1483 = callmethodChecked(string1481, "++", [1], this);
                              var opresult1485 = callmethodChecked(opresult1483, "++", [1], string1478);
                              var opresult1487 = callmethodChecked(opresult1485, "++", [1], var_other);
                              var opresult1489 = callmethodChecked(opresult1487, "++", [1], string1475);
                              setLineNumber(273);    // compilenode string
                              var string1491 = new GraceString("cannot produce union of ");
                              var opresult1493 = callmethodChecked(string1491, "++", [1], opresult1489);
                              var call1494 = callmethodChecked(var_TypeError, "raise", [1], opresult1493);
                              if1472 = call1494;
                            }
                            if1469 = if1472;
                          }
                          setLineNumber(277);    // compilenode identifier
                          var call1495 = callmethodChecked(var_meth, "name", [0]);
                          var call1496 = callmethodChecked(var_twice, "push", [1], call1495);
                          setLineNumber(279);    // compilenode identifier
                          var call1497 = callmethodChecked(var_continue, "apply", [0]);
                          if1463 = call1497;
                        }
                        return if1463;
                      };
                      var call1498 = callmethodChecked(var_prelude, "for()do", [1, 1], call1461, block1462);
                      setLineNumber(283);    // compilenode identifier
                      var call1499 = callmethodChecked(var_combine, "push", [1], var_meth);
                      return call1499;
                    };
                    setLineNumber(265);    // compilenode call
                    var call1500 = callmethodChecked(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call1501 = callmethodChecked(call1500, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call1502 = callmethodChecked(call1501, "for()doWithContinue", [1, 1], call1459, block1460);
                    setLineNumber(286);    // compilenode identifier
                    var call1503 = callmethodChecked(var_other, "methods", [0]);
                    var block1504 = new GraceBlock(this, 286, 1);
                    setLineNumber(1);    // compilenode identifier
                    block1504.real = function(var_meth) {
                      var if1505 = GraceDone;
                      setLineNumber(287);    // compilenode identifier
                      var call1506 = callmethodChecked(var_meth, "name", [0]);
                      var call1507 = callmethodChecked(var_twice, "contains", [1], call1506);
                      var call1508 = callmethodChecked(call1507, "not", [0]);
                      if (Grace_isTrue(call1508)) {
                        setLineNumber(288);    // compilenode identifier
                        var call1509 = callmethodChecked(var_combine, "push", [1], var_meth);
                        if1505 = call1509;
                      }
                      return if1505;
                    };
                    var call1510 = callmethodChecked(var_prelude, "for()do", [1, 1], call1503, block1504);
                    setLineNumber(292);    // compilenode identifier
                    var var_hack = var_objectType;
                    setLineNumber(293);    // compilenode object
                    var obj1511 = Grace_allocObject(null, "&");
                    obj1511.definitionModule = "staticTypes";
                    obj1511.definitionLine = 293;
                    obj1511.outer = this;
                    var reader_staticTypes_outer1512 = function() {
                      return this.outer;
                    };
                    obj1511.methods["outer"] = reader_staticTypes_outer1512;
                    var obj_init_1511 = function() {
                      var origSuperDepth = superDepth;
                      superDepth = obj1511;
                      var func1513 = function(argcv) {    // method asString
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var curarg = 1;
                        if (argcv[0] !== 0)
                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                        setModuleName("staticTypes");
                        setLineNumber(297);    // compilenode string
                        var string1514 = new GraceString("");
                        var string1517 = new GraceString(" & ");
                        var call1519 = callmethodChecked(superDepth, "outer", [0]);
                        var string1521 = new GraceString("");
                        var opresult1523 = callmethodChecked(string1521, "++", [1], call1519);
                        var opresult1525 = callmethodChecked(opresult1523, "++", [1], string1517);
                        var opresult1527 = callmethodChecked(opresult1525, "++", [1], var_other);
                        var opresult1529 = callmethodChecked(opresult1527, "++", [1], string1514);
                        return opresult1529;
                      };
                      func1513.paramCounts = [0];
                      obj1511.methods["asString"] = func1513;
                      func1513.definitionLine = 296;
                      func1513.definitionModule = "staticTypes";
                      setLineNumber(294);    // compilenode identifier
                      var call1530 = callmethodChecked(var_hack, "fromMethods()object", [1, 1], var_combine, this);
                      obj1511.superobj = call1530;
                      if (call1530.data) obj1511.data = call1530.data;
                      if (call1530.hasOwnProperty('_value'))
                          obj1511._value = call1530._value;
                      superDepth = origSuperDepth;
                    };
                    obj_init_1511.apply(obj1511, []);
                    return obj1511;
                  };
                  func1450.paramTypes = [];
                  func1450.paramTypes.push([]);
                  func1450.paramCounts = [1];
                  obj1345.methods["&"] = func1450;
                  func1450.definitionLine = 258;
                  func1450.definitionModule = "staticTypes";
                    var func1531 = function(argcv) {    // method &(1     )()object
                      var curarg = 1;
                      var var_other = arguments[curarg];
                      curarg++;
                      var inheritingObject = arguments[curarg++];
                      // Start argument processing
                      curarg = 1;
                      curarg++;
                      // End argument processing
                      setModuleName("staticTypes");
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var if1532 = GraceDone;
                      setLineNumber(259);    // compilenode identifier
                      onSelf = true;
                      var call1533 = callmethodChecked(this, "isMe", [1], var_other);
                      if (Grace_isTrue(call1533)) {
                        return this;
                      }
                      var if1534 = GraceDone;
                      setLineNumber(260);    // compilenode identifier
                      var call1535 = callmethodChecked(var_other, "isUnknown", [0]);
                      if (Grace_isTrue(call1535)) {
                        var call1536 = callmethodChecked(superDepth, "outer", [0]);
                        onOuter = true;
                        onSelf = true;
                        var call1537 = callmethodChecked(call1536, "unknown", [0]);
                        return call1537;
                      }
                      setLineNumber(262);    // compilenode array
                      var array1538 = new PrimitiveGraceList([]);
                      var var_combine = array1538;
                      setLineNumber(263);    // compilenode array
                      var array1539 = new PrimitiveGraceList([]);
                      var var_twice = array1539;
                      setLineNumber(265);    // compilenode call
                      onSelf = true;
                      var call1540 = callmethodChecked(this, "methods", [0]);
                      var block1541 = new GraceBlock(this, 265, 2);
                      setLineNumber(1);    // compilenode identifier
                      block1541.real = function(var_meth, var_continue) {
                        setLineNumber(266);    // compilenode identifier
                        var call1542 = callmethodChecked(var_other, "methods", [0]);
                        var block1543 = new GraceBlock(this, 266, 1);
                        setLineNumber(1);    // compilenode identifier
                        block1543.real = function(var_meth__39__) {
                          var if1544 = GraceDone;
                          setLineNumber(267);    // compilenode identifier
                          var call1545 = callmethodChecked(var_meth__39__, "name", [0]);
                          var call1547 = callmethodChecked(var_meth, "name", [0]);
                          var opresult1549 = callmethodChecked(call1547, "==", [1], call1545);
                          if (Grace_isTrue(opresult1549)) {
                            var if1550 = GraceDone;
                            setLineNumber(268);    // compilenode identifier
                            var call1551 = callmethodChecked(var_meth, "isSpecialisationOf", [1], var_meth__39__);
                            if (Grace_isTrue(call1551)) {
                              setLineNumber(269);    // compilenode identifier
                              var call1552 = callmethodChecked(var_combine, "push", [1], var_meth);
                              if1550 = call1552;
                            } else {
                              var if1553 = GraceDone;
                              setLineNumber(270);    // compilenode identifier
                              var call1554 = callmethodChecked(var_meth__39__, "isSpecialisationOf", [1], var_meth);
                              if (Grace_isTrue(call1554)) {
                                setLineNumber(271);    // compilenode identifier
                                var call1555 = callmethodChecked(var_combine, "push", [1], var_meth__39__);
                                if1553 = call1555;
                              } else {
                                setLineNumber(274);    // compilenode string
                                var string1556 = new GraceString("'");
                                var string1559 = new GraceString("' and '");
                                var string1562 = new GraceString("incompatible types '");
                                var opresult1564 = callmethodChecked(string1562, "++", [1], this);
                                var opresult1566 = callmethodChecked(opresult1564, "++", [1], string1559);
                                var opresult1568 = callmethodChecked(opresult1566, "++", [1], var_other);
                                var opresult1570 = callmethodChecked(opresult1568, "++", [1], string1556);
                                setLineNumber(273);    // compilenode string
                                var string1572 = new GraceString("cannot produce union of ");
                                var opresult1574 = callmethodChecked(string1572, "++", [1], opresult1570);
                                var call1575 = callmethodChecked(var_TypeError, "raise", [1], opresult1574);
                                if1553 = call1575;
                              }
                              if1550 = if1553;
                            }
                            setLineNumber(277);    // compilenode identifier
                            var call1576 = callmethodChecked(var_meth, "name", [0]);
                            var call1577 = callmethodChecked(var_twice, "push", [1], call1576);
                            setLineNumber(279);    // compilenode identifier
                            var call1578 = callmethodChecked(var_continue, "apply", [0]);
                            if1544 = call1578;
                          }
                          return if1544;
                        };
                        var call1579 = callmethodChecked(var_prelude, "for()do", [1, 1], call1542, block1543);
                        setLineNumber(283);    // compilenode identifier
                        var call1580 = callmethodChecked(var_combine, "push", [1], var_meth);
                        return call1580;
                      };
                      setLineNumber(265);    // compilenode call
                      var call1581 = callmethodChecked(superDepth, "outer", [0]);
                      onOuter = true;
                      onSelf = true;
                      var call1582 = callmethodChecked(call1581, "outer", [0]);
                      onOuter = true;
                      onSelf = true;
                      var call1583 = callmethodChecked(call1582, "for()doWithContinue", [1, 1], call1540, block1541);
                      setLineNumber(286);    // compilenode identifier
                      var call1584 = callmethodChecked(var_other, "methods", [0]);
                      var block1585 = new GraceBlock(this, 286, 1);
                      setLineNumber(1);    // compilenode identifier
                      block1585.real = function(var_meth) {
                        var if1586 = GraceDone;
                        setLineNumber(287);    // compilenode identifier
                        var call1587 = callmethodChecked(var_meth, "name", [0]);
                        var call1588 = callmethodChecked(var_twice, "contains", [1], call1587);
                        var call1589 = callmethodChecked(call1588, "not", [0]);
                        if (Grace_isTrue(call1589)) {
                          setLineNumber(288);    // compilenode identifier
                          var call1590 = callmethodChecked(var_combine, "push", [1], var_meth);
                          if1586 = call1590;
                        }
                        return if1586;
                      };
                      var call1591 = callmethodChecked(var_prelude, "for()do", [1, 1], call1584, block1585);
                      setLineNumber(292);    // compilenode identifier
                      var var_hack = var_objectType;
                      var obj1592 = Grace_allocObject(null, "&");
                      obj1592.definitionModule = "staticTypes";
                      obj1592.definitionLine = 293;
                      var inho1592 = inheritingObject;
                      while (inho1592.superobj) inho1592 = inho1592.superobj;
                      inho1592.superobj = obj1592;
                      obj1592.data = inheritingObject.data;
                      if (inheritingObject.hasOwnProperty('_value'))
                        obj1592._value = inheritingObject._value;
                      obj1592.outer = this;
                      var reader_staticTypes_outer1593 = function() {
                        return this.outer;
                      };
                      obj1592.methods["outer"] = reader_staticTypes_outer1593;
                      var obj_init_1592 = function() {
                        var origSuperDepth = superDepth;
                        superDepth = obj1592;
                        var func1594 = function(argcv) {    // method asString
                          var returnTarget = invocationCount;
                          invocationCount++;
                          var curarg = 1;
                          if (argcv[0] !== 0)
                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                          setModuleName("staticTypes");
                          setLineNumber(297);    // compilenode string
                          var string1595 = new GraceString("");
                          var string1598 = new GraceString(" & ");
                          var call1600 = callmethodChecked(superDepth, "outer", [0]);
                          var string1602 = new GraceString("");
                          var opresult1604 = callmethodChecked(string1602, "++", [1], call1600);
                          var opresult1606 = callmethodChecked(opresult1604, "++", [1], string1598);
                          var opresult1608 = callmethodChecked(opresult1606, "++", [1], var_other);
                          var opresult1610 = callmethodChecked(opresult1608, "++", [1], string1595);
                          return opresult1610;
                        };
                        func1594.paramCounts = [0];
                        obj1592.methods["asString"] = func1594;
                        func1594.definitionLine = 296;
                        func1594.definitionModule = "staticTypes";
                        setLineNumber(294);    // compilenode identifier
                        var call1611 = callmethodChecked(var_hack, "fromMethods()object", [1, 1], var_combine, this);
                        obj1592.superobj = call1611;
                        if (call1611.data) obj1592.data = call1611.data;
                        if (call1611.hasOwnProperty('_value'))
                            obj1592._value = call1611._value;
                        superDepth = origSuperDepth;
                      };
                      obj_init_1592.apply(inheritingObject, []);
                      return obj1592;
                      };
                      func1531.paramTypes = [];
                      func1531.paramTypes.push([]);
                      obj1345.methods["&()object"] = func1531;
                    var func1612 = function(argcv) {    // method asString
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      if (argcv[0] !== 0)
                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                      setModuleName("staticTypes");
                      var if1613 = GraceDone;
                      setLineNumber(303);    // compilenode call
                      onSelf = true;
                      var call1615 = callmethodChecked(this, "methods", [0]);
                      var call1616 = callmethodChecked(call1615, "size", [0]);
                      var opresult1618 = callmethodChecked(call1616, "==", [1], new GraceNum(3));
                      if (Grace_isTrue(opresult1618)) {
                        setLineNumber(304);    // compilenode string
                        var string1619 = new GraceString("Object");
                        return string1619;
                      }
                      setLineNumber(307);    // compilenode string
                      var string1620 = new GraceString("{ ");
                      var var_out = string1620;
                      setLineNumber(309);    // compilenode call
                      onSelf = true;
                      var call1621 = callmethodChecked(this, "methods", [0]);
                      var block1622 = new GraceBlock(this, 309, 1);
                      setLineNumber(1);    // compilenode identifier
                      block1622.real = function(var_mtype) {
                        var if1623 = GraceDone;
                        setLineNumber(310);    // compilenode identifier
                        var call1624 = callmethodChecked(var_mtype, "name", [0]);
                        var string1626 = new GraceString("!=");
                        var string1627 = new GraceString("\u2260");
                        var string1628 = new GraceString("asString");
                        var string1629 = new GraceString("asDebugString");
                        var string1630 = new GraceString("::");
                        var array1625 = new PrimitiveGraceList([string1626, string1627, string1628, string1629, string1630]);
                        var call1631 = callmethodChecked(array1625, "contains", [1], call1624);
                        var call1632 = callmethodChecked(call1631, "not", [0]);
                        if (Grace_isTrue(call1632)) {
                          setLineNumber(311);    // compilenode string
                          var string1633 = new GraceString("; ");
                          var string1636 = new GraceString("");
                          var string1639 = new GraceString("");
                          var opresult1641 = callmethodChecked(string1639, "++", [1], var_out);
                          var opresult1643 = callmethodChecked(opresult1641, "++", [1], string1636);
                          var opresult1645 = callmethodChecked(opresult1643, "++", [1], var_mtype);
                          var opresult1647 = callmethodChecked(opresult1645, "++", [1], string1633);
                          var_out = opresult1647;
                          if1623 = GraceDone;
                        }
                        return if1623;
                      };
                      var call1648 = callmethodChecked(var_prelude, "for()do", [1, 1], call1621, block1622);
                      setLineNumber(315);    // compilenode string
                      var string1649 = new GraceString("}");
                      var string1652 = new GraceString("");
                      var opresult1654 = callmethodChecked(string1652, "++", [1], var_out);
                      var opresult1656 = callmethodChecked(opresult1654, "++", [1], string1649);
                      return opresult1656;
                    };
                    func1612.paramCounts = [0];
                    obj1345.methods["asString"] = func1612;
                    func1612.definitionLine = 302;
                    func1612.definitionModule = "staticTypes";
                    var if1658 = GraceDone;
                    setLineNumber(176);    // compilenode call
                    var call1659 = callmethodChecked(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call1660 = callmethodChecked(call1659, "unknown", [0]);
                    var call1662 = callmethodChecked(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call1663 = callmethodChecked(call1662, "base", [0]);
                    var opresult1665 = callmethodChecked(call1663, "==", [1], call1660);
                    if (Grace_isTrue(opresult1665)) {
                      setLineNumber(177);    // compilenode array
                      var array1666 = new PrimitiveGraceList([]);
                      if1658 = array1666;
                    } else {
                      var call1667 = callmethodChecked(superDepth, "outer", [0]);
                      onOuter = true;
                      onSelf = true;
                      var call1668 = callmethodChecked(call1667, "base", [0]);
                      var call1669 = callmethodChecked(call1668, "methods", [0]);
                      if1658 = call1669;
                    }
                    var opresult1671 = callmethodChecked(if1658, "++", [1], var_methods__39__);
                    obj1345.data["methods"] = opresult1671;
                    var reader_staticTypes_methods1672 = function() {
                      return this.data["methods"];
                    };
                    reader_staticTypes_methods1672.def = true;
                    obj1345.methods["methods"] = reader_staticTypes_methods1672;
                    setLineNumber(189);    // compilenode identifier
                    obj1345.data["isUnknown"] = GraceFalse;
                    var reader_staticTypes_isUnknown1673 = function() {
                      return this.data["isUnknown"];
                    };
                    reader_staticTypes_isUnknown1673.def = true;
                    obj1345.methods["isUnknown"] = reader_staticTypes_isUnknown1673;
                    setLineNumber(192);    // compilenode array
                    var array1674 = new PrimitiveGraceList([]);
                    obj1345.data["currentlyTesting"] = array1674;
                    var reader_staticTypes_currentlyTesting1675 = function() {
                      return this.data["currentlyTesting"];
                    };
                    reader_staticTypes_currentlyTesting1675.def = true;
                    reader_staticTypes_currentlyTesting1675.confidential = true;
                    obj1345.methods["currentlyTesting"] = reader_staticTypes_currentlyTesting1675;
                    superDepth = origSuperDepth;
                  };
                  obj_init_1345.apply(inheritingObject, []);
                  return obj1345;
                  };
                  obj1010.methods["fromMethods()object"] = func1344;
                var func1676 = function(argcv) {    // method fromMethods(1)withName(1)
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  var var_methods__39__ = arguments[curarg];
                  curarg++;
                  if (argcv[0] !== 1)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for fromMethods (arg list 1) of fromMethods(1)withName(1)"));
                  var var_name = arguments[curarg];
                  curarg++;
                  if (argcv[1] !== 1)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for withName (arg list 2) of fromMethods(1)withName(1)"));
                  setModuleName("staticTypes");
                  setLineNumber(319);    // compilenode object
                  var obj1677 = Grace_allocObject(null, "objectType.fromMethods()withName");
                  obj1677.definitionModule = "staticTypes";
                  obj1677.definitionLine = 319;
                  obj1677.outer = this;
                  var reader_staticTypes_outer1678 = function() {
                    return this.outer;
                  };
                  obj1677.methods["outer"] = reader_staticTypes_outer1678;
                  var obj_init_1677 = function() {
                    var origSuperDepth = superDepth;
                    superDepth = obj1677;
                    var func1679 = function(argcv) {    // method asString
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      if (argcv[0] !== 0)
                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                      setModuleName("staticTypes");
                      // asString is a simple accessor - elide try ... catch
                      setLineNumber(323);    // compilenode identifier
                      return var_name;
                    };
                    func1679.paramCounts = [0];
                    obj1677.methods["asString"] = func1679;
                    func1679.definitionLine = 323;
                    func1679.definitionModule = "staticTypes";
                    var func1680 = function(argcv) {    // method ==(1)
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      var var_other = arguments[curarg];
                      curarg++;
                      if (argcv[0] !== 1)
                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ==(1)"));
                      setModuleName("staticTypes");
                      setLineNumber(324);    // compilenode identifier
                      onSelf = true;
                      var call1681 = callmethodChecked(this, "isMe", [1], var_other);
                      return call1681;
                    };
                    func1680.paramCounts = [1];
                    obj1677.methods["=="] = func1680;
                    func1680.definitionLine = 324;
                    func1680.definitionModule = "staticTypes";
                    setLineNumber(321);    // compilenode call
                    var call1682 = callmethodChecked(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call1683 = callmethodChecked(call1682, "fromMethods()object", [1, 1], var_methods__39__, this);
                    obj1677.superobj = call1683;
                    if (call1683.data) obj1677.data = call1683.data;
                    if (call1683.hasOwnProperty('_value'))
                        obj1677._value = call1683._value;
                    superDepth = origSuperDepth;
                  };
                  obj_init_1677.apply(obj1677, []);
                  return obj1677;
                };
                func1676.paramTypes = [];
                func1676.paramTypes.push([]);
                func1676.paramTypes.push([type_String, "name"]);
                func1676.paramCounts = [1, 1];
                obj1010.methods["fromMethods()withName"] = func1676;
                func1676.definitionLine = 319;
                func1676.definitionModule = "staticTypes";
                  var func1684 = function(argcv) {    // method fromMethods(1     )withName(1     )()object
                    var curarg = 1;
                    var var_methods__39__ = arguments[curarg];
                    curarg++;
                    var var_name = arguments[curarg];
                    curarg++;
                    var inheritingObject = arguments[curarg++];
                    // Start argument processing
                    curarg = 1;
                    curarg++;
                    curarg++;
                    // End argument processing
                    setModuleName("staticTypes");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var obj1685 = Grace_allocObject(null, "fromMethods()withName");
                    obj1685.definitionModule = "staticTypes";
                    obj1685.definitionLine = 319;
                    var inho1685 = inheritingObject;
                    while (inho1685.superobj) inho1685 = inho1685.superobj;
                    inho1685.superobj = obj1685;
                    obj1685.data = inheritingObject.data;
                    if (inheritingObject.hasOwnProperty('_value'))
                      obj1685._value = inheritingObject._value;
                    obj1685.outer = this;
                    var reader_staticTypes_outer1686 = function() {
                      return this.outer;
                    };
                    obj1685.methods["outer"] = reader_staticTypes_outer1686;
                    var obj_init_1685 = function() {
                      var origSuperDepth = superDepth;
                      superDepth = obj1685;
                      var func1687 = function(argcv) {    // method asString
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var curarg = 1;
                        if (argcv[0] !== 0)
                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                        setModuleName("staticTypes");
                        // asString is a simple accessor - elide try ... catch
                        setLineNumber(323);    // compilenode identifier
                        return var_name;
                      };
                      func1687.paramCounts = [0];
                      obj1685.methods["asString"] = func1687;
                      func1687.definitionLine = 323;
                      func1687.definitionModule = "staticTypes";
                      var func1688 = function(argcv) {    // method ==(1)
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var curarg = 1;
                        var var_other = arguments[curarg];
                        curarg++;
                        if (argcv[0] !== 1)
                          throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ==(1)"));
                        setModuleName("staticTypes");
                        setLineNumber(324);    // compilenode identifier
                        onSelf = true;
                        var call1689 = callmethodChecked(this, "isMe", [1], var_other);
                        return call1689;
                      };
                      func1688.paramCounts = [1];
                      obj1685.methods["=="] = func1688;
                      func1688.definitionLine = 324;
                      func1688.definitionModule = "staticTypes";
                      setLineNumber(321);    // compilenode call
                      var call1690 = callmethodChecked(superDepth, "outer", [0]);
                      onOuter = true;
                      onSelf = true;
                      var call1691 = callmethodChecked(call1690, "fromMethods()object", [1, 1], var_methods__39__, this);
                      obj1685.superobj = call1691;
                      if (call1691.data) obj1685.data = call1691.data;
                      if (call1691.hasOwnProperty('_value'))
                          obj1685._value = call1691._value;
                      superDepth = origSuperDepth;
                    };
                    obj_init_1685.apply(inheritingObject, []);
                    return obj1685;
                    };
                    func1684.paramTypes = [];
                    func1684.paramTypes.push([]);
                    func1684.paramTypes.push([type_String, "name"]);
                    obj1010.methods["fromMethods()withName()object"] = func1684;
                  var func1692 = function(argcv) {    // method fromDType(1)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_dtype = arguments[curarg];
                    curarg++;
                    if (argcv[0] !== 1)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for fromDType(1)"));
                    setModuleName("staticTypes");
                    setLineNumber(328);    // compilenode identifier
                    var cases1693 = [];
                    var block1694 = new GraceBlock(this, 328, 0);
                    block1694.pattern = GraceFalse;
                    block1694.real = function() {
                      setLineNumber(329);    // compilenode call
                      onSelf = true;
                      var call1695 = callmethodChecked(this, "unknown", [0]);
                      return call1695;
                    };
                    cases1693.push(block1694);
                    setLineNumber(330);    // compilenode block
                    var block1696 = new GraceBlock(this, 330, 1);
                    setLineNumber(0);    // compilenode string
                    var string1697 = new GraceString("lit");
                    var call1698 = callmethodChecked(var_prelude, "VariablePattern", [0]);
                    var call1699 = callmethodChecked(call1698, "new", [1], string1697);
                    setLineNumber(330);    // compilenode call
                    var call1700 = callmethodChecked(var_prelude, "TypeDeclaration", [0]);
                    setLineNumber(0);    // compilenode call
                    var call1701 = callmethodChecked(var_prelude, "AndPattern", [0]);
                    var call1702 = callmethodChecked(call1701, "new", [2], call1699, call1700);
                    block1696.pattern = call1702;
                    setLineNumber(330);    // compilenode call
                    var call1703 = callmethodChecked(var_prelude, "TypeDeclaration", [0]);
                    block1696.real = function(var_lit) {
                      setLineNumber(333);    // compilenode call
                      onSelf = true;
                      var call1704 = callmethodChecked(this, "unknown", [0]);
                      throw new ReturnException(call1704, returnTarget);
                      setLineNumber(334);    // compilenode identifier
                      var call1705 = callmethodChecked(var_lit, "intersectionTypes", [0]);
                      var var_intersection = call1705;
                      var if1706 = GraceDone;
                      setLineNumber(335);    // compilenode identifier
                      var call1708 = callmethodChecked(var_intersection, "size", [0]);
                      var opresult1710 = callmethodChecked(call1708, ">", [1], new GraceNum(1));
                      if (Grace_isTrue(opresult1710)) {
                        setLineNumber(336);    // compilenode identifier
                        var call1711 = callmethodChecked(var_intersection, "first", [0]);
                        onSelf = true;
                        var call1712 = callmethodChecked(this, "fromDType", [1], call1711);
                        var var_oType = call1712;
                        setLineNumber(338);    // compilenode identifier
                        var call1714 = callmethodChecked(var_intersection, "size", [0]);
                        var diff1716 = callmethodChecked(call1714, "-", [1], new GraceNum(1));
                        var opresult1719 = callmethodChecked(new GraceNum(2), "..", [1], diff1716);
                        var block1720 = new GraceBlock(this, 338, 1);
                        setLineNumber(1);    // compilenode identifier
                        block1720.real = function(var_i) {
                          setLineNumber(339);    // compilenode identifier
                          var call1721 = callmethodChecked(var_intersection, "at", [1], var_i);
                          onSelf = true;
                          var call1722 = callmethodChecked(this, "fromDType", [1], call1721);
                          var opresult1725 = callmethodChecked(var_oType, "&", [1], call1722);
                          var_oType = opresult1725;
                          return GraceDone;
                        };
                        var call1726 = callmethodChecked(var_prelude, "for()do", [1, 1], opresult1719, block1720);
                        var if1727 = GraceDone;
                        setLineNumber(342);    // compilenode identifier
                        var call1728 = callmethodChecked(var_lit, "value", [0]);
                        var opresult1731 = callmethodChecked(GraceFalse, "\u2260", [1], call1728);
                        if (Grace_isTrue(opresult1731)) {
                          setLineNumber(343);    // compilenode object
                          var obj1732 = Grace_allocObject(null, "object");
                          obj1732.definitionModule = "staticTypes";
                          obj1732.definitionLine = 343;
                          obj1732.outer = this;
                          var reader_staticTypes_outer1733 = function() {
                            return this.outer;
                          };
                          obj1732.methods["outer"] = reader_staticTypes_outer1733;
                          var obj_init_1732 = function() {
                            var origSuperDepth = superDepth;
                            superDepth = obj1732;
                            var func1734 = function(argcv) {    // method asString
                              var returnTarget = invocationCount;
                              invocationCount++;
                              var curarg = 1;
                              if (argcv[0] !== 0)
                                throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for asString"));
                              setModuleName("staticTypes");
                              setLineNumber(347);    // compilenode identifier
                              var call1735 = callmethodChecked(var_lit, "value", [0]);
                              return call1735;
                            };
                            func1734.paramCounts = [0];
                            obj1732.methods["asString"] = func1734;
                            func1734.definitionLine = 347;
                            func1734.definitionModule = "staticTypes";
                            setLineNumber(345);    // compilenode identifier
                            var call1736 = callmethodChecked(var_intersection, "last", [0]);
                            var call1737 = callmethodChecked(superDepth, "outer", [0]);
                            onOuter = true;
                            onSelf = true;
                            var call1738 = callmethodChecked(call1737, "fromDType", [1], call1736);
                            var call1739 = callmethodChecked(var_prelude, "TypeIntersection", [0]);
                            var call1740 = callmethodChecked(call1739, "new()object", [2, 1], var_oType, call1738, this);
                            obj1732.superobj = call1740;
                            if (call1740.data) obj1732.data = call1740.data;
                            if (call1740.hasOwnProperty('_value'))
                                obj1732._value = call1740._value;
                            superDepth = origSuperDepth;
                          };
                          obj_init_1732.apply(obj1732, []);
                          if1727 = obj1732;
                        } else {
                          setLineNumber(350);    // compilenode identifier
                          var call1741 = callmethodChecked(var_intersection, "last", [0]);
                          onSelf = true;
                          var call1742 = callmethodChecked(this, "fromDType", [1], call1741);
                          var opresult1745 = callmethodChecked(var_oType, "&", [1], call1742);
                          if1727 = opresult1745;
                        }
                        throw new ReturnException(if1727, returnTarget);
                      }
                      setLineNumber(354);    // compilenode identifier
                      var call1746 = callmethodChecked(var_lit, "unionTypes", [0]);
                      var var_union = call1746;
                      var if1747 = GraceDone;
                      setLineNumber(355);    // compilenode identifier
                      var call1749 = callmethodChecked(var_union, "size", [0]);
                      var opresult1751 = callmethodChecked(call1749, ">", [1], new GraceNum(1));
                      if (Grace_isTrue(opresult1751)) {
                        setLineNumber(356);    // compilenode identifier
                        var call1752 = callmethodChecked(var_union, "first", [0]);
                        onSelf = true;
                        var call1753 = callmethodChecked(this, "fromDType", [1], call1752);
                        var var_oType = call1753;
                        setLineNumber(358);    // compilenode identifier
                        var call1755 = callmethodChecked(var_union, "size", [0]);
                        var diff1757 = callmethodChecked(call1755, "-", [1], new GraceNum(1));
                        var opresult1760 = callmethodChecked(new GraceNum(2), "..", [1], diff1757);
                        var block1761 = new GraceBlock(this, 358, 1);
                        setLineNumber(1);    // compilenode identifier
                        block1761.real = function(var_i) {
                          setLineNumber(359);    // compilenode identifier
                          var call1762 = callmethodChecked(var_union, "at", [1], var_i);
                          onSelf = true;
                          var call1763 = callmethodChecked(this, "fromDType", [1], call1762);
                          var opresult1766 = callmethodChecked(var_oType, "|", [1], call1763);
                          var_oType = opresult1766;
                          return GraceDone;
                        };
                        var call1767 = callmethodChecked(var_prelude, "for()do", [1, 1], opresult1760, block1761);
                        var if1768 = GraceDone;
                        setLineNumber(362);    // compilenode identifier
                        var call1769 = callmethodChecked(var_lit, "value", [0]);
                        var opresult1772 = callmethodChecked(GraceFalse, "\u2260", [1], call1769);
                        if (Grace_isTrue(opresult1772)) {
                          setLineNumber(363);    // compilenode object
                          var obj1773 = Grace_allocObject(null, "object");
                          obj1773.definitionModule = "staticTypes";
                          obj1773.definitionLine = 363;
                          obj1773.outer = this;
                          var reader_staticTypes_outer1774 = function() {
                            return this.outer;
                          };
                          obj1773.methods["outer"] = reader_staticTypes_outer1774;
                          var obj_init_1773 = function() {
                            var origSuperDepth = superDepth;
                            superDepth = obj1773;
                            setLineNumber(365);    // compilenode identifier
                            var call1775 = callmethodChecked(var_union, "last", [0]);
                            var call1776 = callmethodChecked(superDepth, "outer", [0]);
                            onOuter = true;
                            onSelf = true;
                            var call1777 = callmethodChecked(call1776, "fromDType", [1], call1775);
                            var call1778 = callmethodChecked(var_prelude, "TypeUnion", [0]);
                            var call1779 = callmethodChecked(call1778, "new()object", [2, 1], var_oType, call1777, this);
                            obj1773.superobj = call1779;
                            if (call1779.data) obj1773.data = call1779.data;
                            if (call1779.hasOwnProperty('_value'))
                                obj1773._value = call1779._value;
                            setLineNumber(366);    // compilenode identifier
                            var call1780 = callmethodChecked(var_lit, "value", [0]);
                            obj1773.data["asString"] = call1780;
                            var reader_staticTypes_asString1781 = function() {
                              return this.data["asString"];
                            };
                            reader_staticTypes_asString1781.def = true;
                            obj1773.methods["asString"] = reader_staticTypes_asString1781;
                            superDepth = origSuperDepth;
                          };
                          obj_init_1773.apply(obj1773, []);
                          if1768 = obj1773;
                        } else {
                          setLineNumber(369);    // compilenode identifier
                          var call1782 = callmethodChecked(var_union, "last", [0]);
                          onSelf = true;
                          var call1783 = callmethodChecked(this, "fromDType", [1], call1782);
                          var opresult1786 = callmethodChecked(var_oType, "|", [1], call1783);
                          if1768 = opresult1786;
                        }
                        throw new ReturnException(if1768, returnTarget);
                      }
                      setLineNumber(373);    // compilenode array
                      var array1787 = new PrimitiveGraceList([]);
                      var var_meths = array1787;
                      setLineNumber(375);    // compilenode identifier
                      var call1788 = callmethodChecked(var_lit, "methods", [0]);
                      var block1789 = new GraceBlock(this, 375, 1);
                      setLineNumber(1);    // compilenode identifier
                      block1789.real = function(var_mType) {
                        setLineNumber(376);    // compilenode identifier
                        var call1790 = callmethodChecked(var_aMethodType, "fromNode", [1], var_mType);
                        var call1791 = callmethodChecked(var_meths, "push", [1], call1790);
                        return call1791;
                      };
                      var call1792 = callmethodChecked(var_prelude, "for()do", [1, 1], call1788, block1789);
                      var if1793 = GraceDone;
                      setLineNumber(379);    // compilenode block
                      var block1794 = new GraceBlock(this, 379, 0);
                      block1794.real = function() {
                        var string1795 = new GraceString("<");
                        var call1797 = callmethodChecked(var_lit, "value", [0]);
                        var call1798 = callmethodChecked(call1797, "at", [1], new GraceNum(1));
                        var opresult1800 = callmethodChecked(call1798, "\u2260", [1], string1795);
                        return opresult1800;
                      };
                      var call1803 = callmethodChecked(var_lit, "value", [0]);
                      var opresult1805 = callmethodChecked(call1803, "\u2260", [1], GraceFalse);
                      var opresult1807 = callmethodChecked(opresult1805, "&&", [1], block1794);
                      if (Grace_isTrue(opresult1807)) {
                        setLineNumber(380);    // compilenode identifier
                        var call1808 = callmethodChecked(var_lit, "value", [0]);
                        var call1809 = callmethodChecked(var_objectType, "fromMethods()withName", [1, 1], var_meths, call1808);
                        if1793 = call1809;
                      } else {
                        setLineNumber(382);    // compilenode identifier
                        var call1810 = callmethodChecked(var_objectType, "fromMethods", [1], var_meths);
                        if1793 = call1810;
                      }
                      return if1793;
                    };
                    cases1693.push(block1696);
                    setLineNumber(384);    // compilenode block
                    var block1811 = new GraceBlock(this, 384, 1);
                    setLineNumber(0);    // compilenode string
                    var string1812 = new GraceString("ident");
                    var call1813 = callmethodChecked(var_prelude, "VariablePattern", [0]);
                    var call1814 = callmethodChecked(call1813, "new", [1], string1812);
                    setLineNumber(384);    // compilenode call
                    var call1815 = callmethodChecked(var_prelude, "Identifier", [0]);
                    setLineNumber(0);    // compilenode call
                    var call1816 = callmethodChecked(var_prelude, "AndPattern", [0]);
                    var call1817 = callmethodChecked(call1816, "new", [2], call1814, call1815);
                    block1811.pattern = call1817;
                    setLineNumber(384);    // compilenode call
                    var call1818 = callmethodChecked(var_prelude, "Identifier", [0]);
                    block1811.real = function(var_ident) {
                      setLineNumber(385);    // compilenode identifier
                      var call1819 = callmethodChecked(var_objectType, "fromIdentifier", [1], var_ident);
                      return call1819;
                    };
                    cases1693.push(block1811);
                    setLineNumber(386);    // compilenode block
                    var block1820 = new GraceBlock(this, 386, 1);
                    setLineNumber(0);    // compilenode string
                    var string1821 = new GraceString("generic");
                    var call1822 = callmethodChecked(var_prelude, "VariablePattern", [0]);
                    var call1823 = callmethodChecked(call1822, "new", [1], string1821);
                    setLineNumber(386);    // compilenode call
                    var call1824 = callmethodChecked(var_prelude, "Generic", [0]);
                    setLineNumber(0);    // compilenode call
                    var call1825 = callmethodChecked(var_prelude, "AndPattern", [0]);
                    var call1826 = callmethodChecked(call1825, "new", [2], call1823, call1824);
                    block1820.pattern = call1826;
                    setLineNumber(386);    // compilenode call
                    var call1827 = callmethodChecked(var_prelude, "Generic", [0]);
                    block1820.real = function(var_generic) {
                      setLineNumber(388);    // compilenode identifier
                      var call1828 = callmethodChecked(var_generic, "value", [0]);
                      var call1829 = callmethodChecked(var_objectType, "fromIdentifier", [1], call1828);
                      return call1829;
                    };
                    cases1693.push(block1820);
                    setLineNumber(389);    // compilenode block
                    var block1830 = new GraceBlock(this, 389, 1);
                    setLineNumber(1);    // compilenode identifier
                    block1830.real = function(var___95____95__6) {
                      setLineNumber(390);    // compilenode string
                      var string1831 = new GraceString("");
                      var call1833 = callmethodChecked(var_dtype, "kind", [0]);
                      var string1835 = new GraceString("No case for node of kind ");
                      var opresult1837 = callmethodChecked(string1835, "++", [1], call1833);
                      var opresult1839 = callmethodChecked(opresult1837, "++", [1], string1831);
                      var call1840 = callmethodChecked(var_prelude, "ProgrammingError", [0]);
                      var call1841 = callmethodChecked(call1840, "raise()with", [1, 1], opresult1839, var_dtype);
                      return call1841;
                    };
                    cases1693.push(block1830);
                    setLineNumber(328);    // compilematchcase
                    var matchres1693 = matchCase(var_dtype,cases1693,false);
                    setModuleName("staticTypes");
                    return matchres1693;
                  };
                  func1692.paramCounts = [1];
                  obj1010.methods["fromDType"] = func1692;
                  func1692.definitionLine = 327;
                  func1692.definitionModule = "staticTypes";
                  var func1842 = function(argcv) {    // method fromIdentifier(1)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_ident = arguments[curarg];
                    curarg++;
                    if (argcv[0] !== 1)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for fromIdentifier(1)"));
                    setModuleName("staticTypes");
                    setLineNumber(395);    // compilenode identifier
                    var call1843 = callmethodChecked(var_ident, "value", [0]);
                    var block1844 = new GraceBlock(this, 395, 0);
                    block1844.real = function() {
                      onSelf = true;
                      var call1845 = callmethodChecked(this, "unknown", [0]);
                      return call1845;
                    };
                    var call1846 = callmethodChecked(var_prelude, "scope", [0]);
                    var call1847 = callmethodChecked(call1846, "types", [0]);
                    var call1848 = callmethodChecked(call1847, "find()butIfMissing", [1, 1], call1843, block1844);
                    return call1848;
                  };
                  func1842.paramCounts = [1];
                  obj1010.methods["fromIdentifier"] = func1842;
                  func1842.definitionLine = 394;
                  func1842.definitionModule = "staticTypes";
                  var func1849 = function(argcv) {    // method fromBlock(1)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_block = arguments[curarg];
                    curarg++;
                    if (argcv[0] !== 1)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for fromBlock(1)"));
                    setModuleName("staticTypes");
                    setLineNumber(399);    // compilenode identifier
                    var call1850 = callmethodChecked(var_prelude, "typeOf", [1], var_block);
                    var var_bType = call1850;
                    var if1851 = GraceDone;
                    setLineNumber(401);    // compilenode identifier
                    var call1852 = callmethodChecked(var_bType, "isUnknown", [0]);
                    if (Grace_isTrue(call1852)) {
                      onSelf = true;
                      var call1853 = callmethodChecked(this, "unknown", [0]);
                      return call1853;
                    }
                    setLineNumber(403);    // compilenode string
                    var string1854 = new GraceString("apply");
                    var call1855 = callmethodChecked(var_bType, "getMethod", [1], string1854);
                    var var_apply = call1855;
                    setLineNumber(405);    // compilenode identifier
                    var cases1856 = [];
                    var block1857 = new GraceBlock(this, 405, 0);
                    block1857.pattern = var_noSuchMethod;
                    block1857.real = function() {
                      setLineNumber(407);    // compilenode string
                      var string1858 = new GraceString("' does not satisfy the type 'Block'");
                      var string1861 = new GraceString("type '");
                      var opresult1863 = callmethodChecked(string1861, "++", [1], var_bType);
                      var opresult1865 = callmethodChecked(opresult1863, "++", [1], string1858);
                      setLineNumber(406);    // compilenode string
                      var string1867 = new GraceString("` of ");
                      var call1869 = callmethodChecked(var_block, "toGrace", [1], new GraceNum(0));
                      var string1871 = new GraceString("the expression `");
                      var opresult1873 = callmethodChecked(string1871, "++", [1], call1869);
                      var opresult1875 = callmethodChecked(opresult1873, "++", [1], string1867);
                      var opresult1877 = callmethodChecked(opresult1875, "++", [1], opresult1865);
                      var call1878 = callmethodChecked(var_TypeError, "raise()with", [1, 1], opresult1877, var_block);
                      return call1878;
                    };
                    cases1856.push(block1857);
                    setLineNumber(408);    // compilenode block
                    var block1879 = new GraceBlock(this, 408, 1);
                    setLineNumber(0);    // compilenode string
                    var string1880 = new GraceString("meth");
                    var call1881 = callmethodChecked(var_prelude, "VariablePattern", [0]);
                    var call1882 = callmethodChecked(call1881, "new", [1], string1880);
                    var call1883 = callmethodChecked(var_prelude, "AndPattern", [0]);
                    var call1884 = callmethodChecked(call1883, "new", [2], call1882, var_MethodType);
                    block1879.pattern = call1884;
                    setLineNumber(408);    // compilenode identifier
                    block1879.real = function(var_meth) {
                      setLineNumber(409);    // compilenode identifier
                      var call1885 = callmethodChecked(var_meth, "returnType", [0]);
                      throw new ReturnException(call1885, returnTarget);
                      return undefined;
                    };
                    cases1856.push(block1879);
                    setLineNumber(410);    // compilenode block
                    var block1886 = new GraceBlock(this, 410, 1);
                    setLineNumber(1);    // compilenode identifier
                    block1886.real = function(var___95____95__7) {
                      return GraceDone;
                    };
                    cases1856.push(block1886);
                    setLineNumber(405);    // compilematchcase
                    var matchres1856 = matchCase(var_apply,cases1856,false);
                    setModuleName("staticTypes");
                    return matchres1856;
                  };
                  func1849.paramCounts = [1];
                  obj1010.methods["fromBlock"] = func1849;
                  func1849.definitionLine = 398;
                  func1849.definitionModule = "staticTypes";
                  var func1887 = function(argcv) {    // method fromBlockBody(1)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_body = arguments[curarg];
                    curarg++;
                    if (argcv[0] !== 1)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for fromBlockBody(1)"));
                    setModuleName("staticTypes");
                    var if1888 = GraceDone;
                    setLineNumber(414);    // compilenode identifier
                    var call1890 = callmethodChecked(var_body, "size", [0]);
                    var opresult1892 = callmethodChecked(call1890, "==", [1], new GraceNum(0));
                    if (Grace_isTrue(opresult1892)) {
                      setLineNumber(415);    // compilenode identifier
                      var call1893 = callmethodChecked(var_objectType, "done", [0]);
                      if1888 = call1893;
                    } else {
                      setLineNumber(417);    // compilenode identifier
                      var call1894 = callmethodChecked(var_body, "last", [0]);
                      var call1895 = callmethodChecked(var_prelude, "typeOf", [1], call1894);
                      if1888 = call1895;
                    }
                    return if1888;
                  };
                  func1887.paramCounts = [1];
                  obj1010.methods["fromBlockBody"] = func1887;
                  func1887.definitionLine = 413;
                  func1887.definitionModule = "staticTypes";
                  var func1896 = function(argcv) {    // method blockTaking(1)returning(1)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_params = arguments[curarg];
                    curarg++;
                    if (argcv[0] !== 1)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for blockTaking (arg list 1) of blockTaking(1)returning(1)"));
                    var var_rType = arguments[curarg];
                    curarg++;
                    if (argcv[1] !== 1)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for returning (arg list 2) of blockTaking(1)returning(1)"));
                    setModuleName("staticTypes");
                    setLineNumber(434);    // compilenode string
                    var string1898 = new GraceString("apply");
                    var call1899 = callmethodChecked(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call1900 = callmethodChecked(call1899, "mixPartNamed()parameters", [1, 1], string1898, var_params);
                    var array1897 = new PrimitiveGraceList([call1900]);
                    var var_signature = array1897;
                    setLineNumber(435);    // compilenode identifier
                    var call1902 = callmethodChecked(var_aMethodType, "signature()returnType", [1, 1], var_signature, var_rType);
                    var array1901 = new PrimitiveGraceList([call1902]);
                    var var_meths = array1901;
                    setLineNumber(437);    // compilenode string
                    var string1903 = new GraceString("Block");
                    onSelf = true;
                    var call1904 = callmethodChecked(this, "fromMethods()withName", [1, 1], var_meths, string1903);
                    return call1904;
                  };
                  func1896.paramTypes = [];
                  func1896.paramTypes.push([]);
                  func1896.paramTypes.push([]);
                  func1896.paramCounts = [1, 1];
                  obj1010.methods["blockTaking()returning"] = func1896;
                  func1896.definitionLine = 432;
                  func1896.definitionModule = "staticTypes";
                  var func1905 = function(argcv) {    // method blockReturning(1)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_rType = arguments[curarg];
                    curarg++;
                    if (argcv[0] !== 1)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for blockReturning(1)"));
                    setModuleName("staticTypes");
                    setLineNumber(441);    // compilenode array
                    var array1906 = new PrimitiveGraceList([]);
                    onSelf = true;
                    var call1907 = callmethodChecked(this, "blockTaking()returning", [1, 1], array1906, var_rType);
                    return call1907;
                  };
                  func1905.paramTypes = [];
                  func1905.paramTypes.push([]);
                  func1905.paramCounts = [1];
                  obj1010.methods["blockReturning"] = func1905;
                  func1905.definitionLine = 440;
                  func1905.definitionModule = "staticTypes";
                  var func1908 = function(argcv) {    // method addTo(1)name(1)returns(1)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_oType = arguments[curarg];
                    curarg++;
                    if (argcv[0] !== 1)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addTo (arg list 1) of addTo(1)name(1)returns(1)"));
                    var var_name__39__ = arguments[curarg];
                    curarg++;
                    if (argcv[1] !== 1)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for name (arg list 2) of addTo(1)name(1)returns(1)"));
                    var var_rType = arguments[curarg];
                    curarg++;
                    if (argcv[2] !== 1)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for returns (arg list 3) of addTo(1)name(1)returns(1)"));
                    setModuleName("staticTypes");
                    setLineNumber(446);    // compilenode array
                    var array1910 = new PrimitiveGraceList([]);
                    var call1911 = callmethodChecked(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call1912 = callmethodChecked(call1911, "mixPartNamed()parameters", [1, 1], var_name__39__, array1910);
                    var array1909 = new PrimitiveGraceList([call1912]);
                    var var_signature = array1909;
                    setLineNumber(447);    // compilenode identifier
                    var call1913 = callmethodChecked(var_aMethodType, "signature()returnType", [1, 1], var_signature, var_rType);
                    var call1914 = callmethodChecked(var_oType, "methods", [0]);
                    var call1915 = callmethodChecked(call1914, "push", [1], call1913);
                    return call1915;
                  };
                  func1908.paramTypes = [];
                  func1908.paramTypes.push([]);
                  func1908.paramTypes.push([type_String, "name'"]);
                  func1908.paramTypes.push([]);
                  func1908.confidential = true;
                  func1908.paramCounts = [1, 1, 1];
                  obj1010.methods["addTo()name()returns"] = func1908;
                  func1908.definitionLine = 444;
                  func1908.definitionModule = "staticTypes";
                  var func1916 = function(argcv) {    // method addTo(1)name(1)params(1)returns(1)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_oType = arguments[curarg];
                    curarg++;
                    if (argcv[0] !== 1)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for addTo (arg list 1) of addTo(1)name(1)params(1)returns(1)"));
                    var var_name__39__ = arguments[curarg];
                    curarg++;
                    if (argcv[1] !== 1)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for name (arg list 2) of addTo(1)name(1)params(1)returns(1)"));
                    var var_ptypes = arguments[curarg];
                    curarg++;
                    if (argcv[2] !== 1)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for params (arg list 3) of addTo(1)name(1)params(1)returns(1)"));
                    var var_rType = arguments[curarg];
                    curarg++;
                    if (argcv[3] !== 1)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for returns (arg list 4) of addTo(1)name(1)params(1)returns(1)"));
                    setModuleName("staticTypes");
                    setLineNumber(453);    // compilenode array
                    var array1917 = new PrimitiveGraceList([]);
                    var var_parameters = array1917;
                    setLineNumber(454);    // compilenode block
                    var block1918 = new GraceBlock(this, 454, 1);
                    setLineNumber(1);    // compilenode identifier
                    block1918.real = function(var_ptype) {
                      setLineNumber(455);    // compilenode identifier
                      var call1919 = callmethodChecked(var_aParam, "ofType", [1], var_ptype);
                      var call1920 = callmethodChecked(var_parameters, "push", [1], call1919);
                      return call1920;
                    };
                    var call1921 = callmethodChecked(var_prelude, "for()do", [1, 1], var_ptypes, block1918);
                    setLineNumber(458);    // compilenode call
                    var call1923 = callmethodChecked(superDepth, "outer", [0]);
                    onOuter = true;
                    onSelf = true;
                    var call1924 = callmethodChecked(call1923, "mixPartNamed()parameters", [1, 1], var_name__39__, var_parameters);
                    var array1922 = new PrimitiveGraceList([call1924]);
                    var var_signature = array1922;
                    setLineNumber(460);    // compilenode identifier
                    var call1925 = callmethodChecked(var_aMethodType, "signature()returnType", [1, 1], var_signature, var_rType);
                    var call1926 = callmethodChecked(var_oType, "methods", [0]);
                    var call1927 = callmethodChecked(call1926, "push", [1], call1925);
                    return call1927;
                  };
                  func1916.paramTypes = [];
                  func1916.paramTypes.push([]);
                  func1916.paramTypes.push([type_String, "name'"]);
                  func1916.paramTypes.push([]);
                  func1916.paramTypes.push([]);
                  func1916.confidential = true;
                  func1916.paramCounts = [1, 1, 1, 1];
                  obj1010.methods["addTo()name()params()returns"] = func1916;
                  func1916.definitionLine = 450;
                  func1916.definitionModule = "staticTypes";
                  var func1928 = function(argcv) {    // method extend(1)with(1)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_this = arguments[curarg];
                    curarg++;
                    if (argcv[0] !== 1)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for extend (arg list 1) of extend(1)with(1)"));
                    var var_that = arguments[curarg];
                    curarg++;
                    if (argcv[1] !== 1)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for with (arg list 2) of extend(1)with(1)"));
                    setModuleName("staticTypes");
                    setLineNumber(465);    // compilenode identifier
                    var call1929 = callmethodChecked(var_that, "methods", [0]);
                    var block1930 = new GraceBlock(this, 465, 1);
                    setLineNumber(1);    // compilenode identifier
                    block1930.real = function(var_mType) {
                      setLineNumber(466);    // compilenode identifier
                      var call1931 = callmethodChecked(var_this, "methods", [0]);
                      var call1932 = callmethodChecked(call1931, "push", [1], var_mType);
                      return call1932;
                    };
                    var call1933 = callmethodChecked(var_prelude, "for()do", [1, 1], call1929, block1930);
                    return call1933;
                  };
                  func1928.paramTypes = [];
                  func1928.paramTypes.push([]);
                  func1928.paramTypes.push([]);
                  func1928.confidential = true;
                  func1928.paramCounts = [1, 1];
                  obj1010.methods["extend()with"] = func1928;
                  func1928.definitionLine = 463;
                  func1928.definitionModule = "staticTypes";
                  var obj1934 = Grace_allocObject(GraceObject, "unknown");
                  obj1934.definitionModule = "staticTypes";
                  obj1934.definitionLine = 421;
                  obj1934.outer = obj1010;
                  var reader_staticTypes_outer1935 = function() {
                    return this.outer;
                  };
                  obj1934.methods["outer"] = reader_staticTypes_outer1935;
                  var obj_init_1934 = function() {
                    var origSuperDepth = superDepth;
                    superDepth = obj1934;
                    var func1936 = function(argcv) {    // method getMethod(1)
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      var var___95____95__8 = arguments[curarg];
                      curarg++;
                      if (argcv[0] !== 1)
                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for getMethod(1)"));
                      setModuleName("staticTypes");
                      // getMethod(1) is a simple accessor - elide try ... catch
                      setLineNumber(423);    // compilenode identifier
                      return var_noSuchMethod;
                    };
                    func1936.paramTypes = [];
                    func1936.paramTypes.push([type_String, "__8"]);
                    func1936.paramCounts = [1];
                    obj1934.methods["getMethod"] = func1936;
                    func1936.definitionLine = 423;
                    func1936.definitionModule = "staticTypes";
                    var func1937 = function(argcv) {    // method isSubtypeOf(1)
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      var var___95____95__9 = arguments[curarg];
                      curarg++;
                      if (argcv[0] !== 1)
                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for isSubtypeOf(1)"));
                      setModuleName("staticTypes");
                      // isSubtypeOf(1) is a simple accessor - elide try ... catch
                      setLineNumber(425);    // compilenode identifier
                      return GraceTrue;
                    };
                    func1937.paramTypes = [];
                    func1937.paramTypes.push([]);
                    func1937.paramCounts = [1];
                    obj1934.methods["isSubtypeOf"] = func1937;
                    func1937.definitionLine = 425;
                    func1937.definitionModule = "staticTypes";
                    var func1938 = function(argcv) {    // method |(1)
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      var var___95____95__10 = arguments[curarg];
                      curarg++;
                      if (argcv[0] !== 1)
                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for |(1)"));
                      setModuleName("staticTypes");
                      setLineNumber(426);    // compilenode call
                      var call1939 = callmethodChecked(superDepth, "outer", [0]);
                      onOuter = true;
                      onSelf = true;
                      var call1940 = callmethodChecked(call1939, "unknown", [0]);
                      return call1940;
                    };
                    func1938.paramTypes = [];
                    func1938.paramTypes.push([]);
                    func1938.paramCounts = [1];
                    obj1934.methods["|"] = func1938;
                    func1938.definitionLine = 426;
                    func1938.definitionModule = "staticTypes";
                    var func1941 = function(argcv) {    // method &(1)
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      var var___95____95__11 = arguments[curarg];
                      curarg++;
                      if (argcv[0] !== 1)
                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for &(1)"));
                      setModuleName("staticTypes");
                      setLineNumber(427);    // compilenode call
                      var call1942 = callmethodChecked(superDepth, "outer", [0]);
                      onOuter = true;
                      onSelf = true;
                      var call1943 = callmethodChecked(call1942, "unknown", [0]);
                      return call1943;
                    };
                    func1941.paramTypes = [];
                    func1941.paramTypes.push([]);
                    func1941.paramCounts = [1];
                    obj1934.methods["&"] = func1941;
                    func1941.definitionLine = 427;
                    func1941.definitionModule = "staticTypes";
                    var func1944 = function(argcv) {    // method ==(1)
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      var var_other = arguments[curarg];
                      curarg++;
                      if (argcv[0] !== 1)
                        throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ==(1)"));
                      setModuleName("staticTypes");
                      setLineNumber(429);    // compilenode identifier
                      onSelf = true;
                      var call1945 = callmethodChecked(this, "isMe", [1], var_other);
                      return call1945;
                    };
                    func1944.paramCounts = [1];
                    obj1934.methods["=="] = func1944;
                    func1944.definitionLine = 429;
                    func1944.definitionModule = "staticTypes";
                    setLineNumber(422);    // compilenode array
                    var array1946 = new PrimitiveGraceList([]);
                    obj1934.data["methods"] = array1946;
                    var reader_staticTypes_methods1947 = function() {
                      return this.data["methods"];
                    };
                    reader_staticTypes_methods1947.def = true;
                    obj1934.methods["methods"] = reader_staticTypes_methods1947;
                    setLineNumber(424);    // compilenode identifier
                    obj1934.data["isUnknown"] = GraceTrue;
                    var reader_staticTypes_isUnknown1948 = function() {
                      return this.data["isUnknown"];
                    };
                    reader_staticTypes_isUnknown1948.def = true;
                    obj1934.methods["isUnknown"] = reader_staticTypes_isUnknown1948;
                    setLineNumber(428);    // compilenode string
                    var string1949 = new GraceString("Unknown");
                    obj1934.data["asString"] = string1949;
                    var reader_staticTypes_asString1950 = function() {
                      return this.data["asString"];
                    };
                    reader_staticTypes_asString1950.def = true;
                    obj1934.methods["asString"] = reader_staticTypes_asString1950;
                    superDepth = origSuperDepth;
                  };
                  obj_init_1934.apply(obj1934, []);
                  obj1010.data["unknown"] = obj1934;
                  var reader_staticTypes_unknown1951 = function() {
                    return this.data["unknown"];
                  };
                  reader_staticTypes_unknown1951.def = true;
                  obj1010.methods["unknown"] = reader_staticTypes_unknown1951;
                  setLineNumber(470);    // compilenode call
                  onSelf = true;
                  var call1952 = callmethodChecked(this, "unknown", [0]);
                  obj1010.data["base"] = call1952;
                  var reader_staticTypes_base1953 = function() {
                    return this.data["base"];
                  };
                  obj1010.methods["base"] = reader_staticTypes_base1953;
                  obj1010.data["base"] = call1952;
                  var writer_staticTypes_base1953 = function(argcv, o) {
                    this.data["base"] = o;
                    return GraceDone;
                  };
                  obj1010.methods["base:="] = writer_staticTypes_base1953;
                  writer_staticTypes_base1953.confidential = true;
                  obj1010.mutable = true;
                  setLineNumber(471);    // compilenode array
                  var array1954 = new PrimitiveGraceList([]);
                  var string1955 = new GraceString("Done");
                  onSelf = true;
                  var call1956 = callmethodChecked(this, "fromMethods()withName", [1, 1], array1954, string1955);
                  obj1010.data["done"] = call1956;
                  var reader_staticTypes_done1957 = function() {
                    return this.data["done"];
                  };
                  reader_staticTypes_done1957.def = true;
                  obj1010.methods["done"] = reader_staticTypes_done1957;
                  setLineNumber(472);    // compilenode array
                  var array1958 = new PrimitiveGraceList([]);
                  var string1959 = new GraceString("Object");
                  onSelf = true;
                  var call1960 = callmethodChecked(this, "fromMethods()withName", [1, 1], array1958, string1959);
                  onSelf = true;
                  var call1961 = callmethodChecked(this, "base:=", [1], call1960);
                  setLineNumber(474);    // compilenode array
                  var array1962 = new PrimitiveGraceList([]);
                  var string1963 = new GraceString("Pattern");
                  onSelf = true;
                  var call1964 = callmethodChecked(this, "fromMethods()withName", [1, 1], array1962, string1963);
                  obj1010.data["pattern"] = call1964;
                  var reader_staticTypes_pattern1965 = function() {
                    return this.data["pattern"];
                  };
                  reader_staticTypes_pattern1965.def = true;
                  obj1010.methods["pattern"] = reader_staticTypes_pattern1965;
                  setLineNumber(475);    // compilenode array
                  var array1966 = new PrimitiveGraceList([]);
                  var string1967 = new GraceString("Iterator");
                  onSelf = true;
                  var call1968 = callmethodChecked(this, "fromMethods()withName", [1, 1], array1966, string1967);
                  obj1010.data["iterator"] = call1968;
                  var reader_staticTypes_iterator1969 = function() {
                    return this.data["iterator"];
                  };
                  reader_staticTypes_iterator1969.def = true;
                  obj1010.methods["iterator"] = reader_staticTypes_iterator1969;
                  setLineNumber(476);    // compilenode array
                  var array1970 = new PrimitiveGraceList([]);
                  var string1971 = new GraceString("Binding");
                  onSelf = true;
                  var call1972 = callmethodChecked(this, "fromMethods()withName", [1, 1], array1970, string1971);
                  obj1010.data["binding"] = call1972;
                  var reader_staticTypes_binding1973 = function() {
                    return this.data["binding"];
                  };
                  reader_staticTypes_binding1973.def = true;
                  obj1010.methods["binding"] = reader_staticTypes_binding1973;
                  setLineNumber(477);    // compilenode array
                  var array1974 = new PrimitiveGraceList([]);
                  var string1975 = new GraceString("Boolean");
                  onSelf = true;
                  var call1976 = callmethodChecked(this, "fromMethods()withName", [1, 1], array1974, string1975);
                  obj1010.data["boolean"] = call1976;
                  var reader_staticTypes_boolean1977 = function() {
                    return this.data["boolean"];
                  };
                  reader_staticTypes_boolean1977.def = true;
                  obj1010.methods["boolean"] = reader_staticTypes_boolean1977;
                  setLineNumber(478);    // compilenode array
                  var array1978 = new PrimitiveGraceList([]);
                  var string1979 = new GraceString("Number");
                  onSelf = true;
                  var call1980 = callmethodChecked(this, "fromMethods()withName", [1, 1], array1978, string1979);
                  obj1010.data["number"] = call1980;
                  var reader_staticTypes_number1981 = function() {
                    return this.data["number"];
                  };
                  reader_staticTypes_number1981.def = true;
                  obj1010.methods["number"] = reader_staticTypes_number1981;
                  setLineNumber(479);    // compilenode array
                  var array1982 = new PrimitiveGraceList([]);
                  var string1983 = new GraceString("String");
                  onSelf = true;
                  var call1984 = callmethodChecked(this, "fromMethods()withName", [1, 1], array1982, string1983);
                  obj1010.data["string"] = call1984;
                  var reader_staticTypes_string1985 = function() {
                    return this.data["string"];
                  };
                  reader_staticTypes_string1985.def = true;
                  obj1010.methods["string"] = reader_staticTypes_string1985;
                  setLineNumber(480);    // compilenode array
                  var array1986 = new PrimitiveGraceList([]);
                  var string1987 = new GraceString("List");
                  onSelf = true;
                  var call1988 = callmethodChecked(this, "fromMethods()withName", [1, 1], array1986, string1987);
                  obj1010.data["list"] = call1988;
                  var reader_staticTypes_list1989 = function() {
                    return this.data["list"];
                  };
                  reader_staticTypes_list1989.def = true;
                  obj1010.methods["list"] = reader_staticTypes_list1989;
                  setLineNumber(482);    // compilenode call
                  onSelf = true;
                  var call1990 = callmethodChecked(this, "binding", [0]);
                  var string1991 = new GraceString("key");
                  onSelf = true;
                  var call1992 = callmethodChecked(this, "base", [0]);
                  onSelf = true;
                  var call1993 = callmethodChecked(this, "addTo()name()returns", [1, 1, 1], call1990, string1991, call1992);
                  setLineNumber(483);    // compilenode call
                  onSelf = true;
                  var call1994 = callmethodChecked(this, "binding", [0]);
                  var string1995 = new GraceString("value");
                  onSelf = true;
                  var call1996 = callmethodChecked(this, "base", [0]);
                  onSelf = true;
                  var call1997 = callmethodChecked(this, "addTo()name()returns", [1, 1, 1], call1994, string1995, call1996);
                  setLineNumber(485);    // compilenode call
                  onSelf = true;
                  var call1998 = callmethodChecked(this, "base", [0]);
                  var string1999 = new GraceString("\u2260");
                  onSelf = true;
                  var call2001 = callmethodChecked(this, "base", [0]);
                  var array2000 = new PrimitiveGraceList([call2001]);
                  onSelf = true;
                  var call2002 = callmethodChecked(this, "boolean", [0]);
                  onSelf = true;
                  var call2003 = callmethodChecked(this, "addTo()name()params()returns", [1, 1, 1, 1], call1998, string1999, array2000, call2002);
                  setLineNumber(486);    // compilenode call
                  onSelf = true;
                  var call2004 = callmethodChecked(this, "base", [0]);
                  var string2005 = new GraceString("asDebugString");
                  onSelf = true;
                  var call2006 = callmethodChecked(this, "string", [0]);
                  onSelf = true;
                  var call2007 = callmethodChecked(this, "addTo()name()returns", [1, 1, 1], call2004, string2005, call2006);
                  setLineNumber(487);    // compilenode call
                  onSelf = true;
                  var call2008 = callmethodChecked(this, "base", [0]);
                  var string2009 = new GraceString("asString");
                  onSelf = true;
                  var call2010 = callmethodChecked(this, "string", [0]);
                  onSelf = true;
                  var call2011 = callmethodChecked(this, "addTo()name()returns", [1, 1, 1], call2008, string2009, call2010);
                  setLineNumber(488);    // compilenode call
                  onSelf = true;
                  var call2012 = callmethodChecked(this, "base", [0]);
                  var string2013 = new GraceString("::");
                  onSelf = true;
                  var call2014 = callmethodChecked(this, "binding", [0]);
                  onSelf = true;
                  var call2015 = callmethodChecked(this, "addTo()name()returns", [1, 1, 1], call2012, string2013, call2014);
                  setLineNumber(490);    // compilenode call
                  onSelf = true;
                  var call2016 = callmethodChecked(this, "pattern", [0]);
                  onSelf = true;
                  var call2017 = callmethodChecked(this, "base", [0]);
                  onSelf = true;
                  var call2018 = callmethodChecked(this, "extend()with", [1, 1], call2016, call2017);
                  setLineNumber(491);    // compilenode call
                  onSelf = true;
                  var call2019 = callmethodChecked(this, "pattern", [0]);
                  var string2020 = new GraceString("match");
                  onSelf = true;
                  var call2022 = callmethodChecked(this, "base", [0]);
                  var array2021 = new PrimitiveGraceList([call2022]);
                  onSelf = true;
                  var call2023 = callmethodChecked(this, "unknown", [0]);
                  onSelf = true;
                  var call2024 = callmethodChecked(this, "addTo()name()params()returns", [1, 1, 1, 1], call2019, string2020, array2021, call2023);
                  setLineNumber(492);    // compilenode call
                  onSelf = true;
                  var call2025 = callmethodChecked(this, "pattern", [0]);
                  var string2026 = new GraceString("|");
                  onSelf = true;
                  var call2028 = callmethodChecked(this, "pattern", [0]);
                  var array2027 = new PrimitiveGraceList([call2028]);
                  onSelf = true;
                  var call2029 = callmethodChecked(this, "pattern", [0]);
                  onSelf = true;
                  var call2030 = callmethodChecked(this, "addTo()name()params()returns", [1, 1, 1, 1], call2025, string2026, array2027, call2029);
                  setLineNumber(493);    // compilenode call
                  onSelf = true;
                  var call2031 = callmethodChecked(this, "pattern", [0]);
                  var string2032 = new GraceString("&");
                  onSelf = true;
                  var call2034 = callmethodChecked(this, "pattern", [0]);
                  var array2033 = new PrimitiveGraceList([call2034]);
                  onSelf = true;
                  var call2035 = callmethodChecked(this, "pattern", [0]);
                  onSelf = true;
                  var call2036 = callmethodChecked(this, "addTo()name()params()returns", [1, 1, 1, 1], call2031, string2032, array2033, call2035);
                  setLineNumber(495);    // compilenode call
                  onSelf = true;
                  var call2037 = callmethodChecked(this, "iterator", [0]);
                  onSelf = true;
                  var call2038 = callmethodChecked(this, "base", [0]);
                  onSelf = true;
                  var call2039 = callmethodChecked(this, "extend()with", [1, 1], call2037, call2038);
                  setLineNumber(496);    // compilenode call
                  onSelf = true;
                  var call2040 = callmethodChecked(this, "iterator", [0]);
                  var string2041 = new GraceString("hasNext");
                  onSelf = true;
                  var call2042 = callmethodChecked(this, "boolean", [0]);
                  onSelf = true;
                  var call2043 = callmethodChecked(this, "addTo()name()returns", [1, 1, 1], call2040, string2041, call2042);
                  setLineNumber(497);    // compilenode call
                  onSelf = true;
                  var call2044 = callmethodChecked(this, "iterator", [0]);
                  var string2045 = new GraceString("next");
                  onSelf = true;
                  var call2046 = callmethodChecked(this, "unknown", [0]);
                  onSelf = true;
                  var call2047 = callmethodChecked(this, "addTo()name()returns", [1, 1, 1], call2044, string2045, call2046);
                  setLineNumber(499);    // compilenode call
                  onSelf = true;
                  var call2049 = callmethodChecked(this, "unknown", [0]);
                  onSelf = true;
                  var call2050 = callmethodChecked(this, "blockReturning", [1], call2049);
                  var call2051 = callmethodChecked(var_aParam, "ofType", [1], call2050);
                  var array2048 = new PrimitiveGraceList([call2051]);
                  setLineNumber(500);    // compilenode call
                  onSelf = true;
                  var call2052 = callmethodChecked(this, "base", [0]);
                  onSelf = true;
                  var call2053 = callmethodChecked(this, "blockTaking()returning", [1, 1], array2048, call2052);
                  obj1010.data["shortCircuit"] = call2053;
                  var reader_staticTypes_shortCircuit2054 = function() {
                    return this.data["shortCircuit"];
                  };
                  reader_staticTypes_shortCircuit2054.def = true;
                  reader_staticTypes_shortCircuit2054.confidential = true;
                  obj1010.methods["shortCircuit"] = reader_staticTypes_shortCircuit2054;
                  setLineNumber(501);    // compilenode call
                  onSelf = true;
                  var call2055 = callmethodChecked(this, "boolean", [0]);
                  onSelf = true;
                  var call2056 = callmethodChecked(this, "base", [0]);
                  onSelf = true;
                  var call2057 = callmethodChecked(this, "extend()with", [1, 1], call2055, call2056);
                  setLineNumber(502);    // compilenode call
                  onSelf = true;
                  var call2058 = callmethodChecked(this, "boolean", [0]);
                  var string2059 = new GraceString("&&");
                  onSelf = true;
                  var call2061 = callmethodChecked(this, "boolean", [0]);
                  var array2060 = new PrimitiveGraceList([call2061]);
                  onSelf = true;
                  var call2062 = callmethodChecked(this, "boolean", [0]);
                  onSelf = true;
                  var call2063 = callmethodChecked(this, "addTo()name()params()returns", [1, 1, 1, 1], call2058, string2059, array2060, call2062);
                  setLineNumber(503);    // compilenode call
                  onSelf = true;
                  var call2064 = callmethodChecked(this, "boolean", [0]);
                  var string2065 = new GraceString("||");
                  onSelf = true;
                  var call2067 = callmethodChecked(this, "boolean", [0]);
                  var array2066 = new PrimitiveGraceList([call2067]);
                  onSelf = true;
                  var call2068 = callmethodChecked(this, "boolean", [0]);
                  onSelf = true;
                  var call2069 = callmethodChecked(this, "addTo()name()params()returns", [1, 1, 1, 1], call2064, string2065, array2066, call2068);
                  setLineNumber(504);    // compilenode call
                  onSelf = true;
                  var call2070 = callmethodChecked(this, "boolean", [0]);
                  var string2071 = new GraceString("prefix!");
                  onSelf = true;
                  var call2072 = callmethodChecked(this, "boolean", [0]);
                  onSelf = true;
                  var call2073 = callmethodChecked(this, "addTo()name()returns", [1, 1, 1], call2070, string2071, call2072);
                  setLineNumber(505);    // compilenode call
                  onSelf = true;
                  var call2074 = callmethodChecked(this, "boolean", [0]);
                  var string2075 = new GraceString("not");
                  onSelf = true;
                  var call2076 = callmethodChecked(this, "boolean", [0]);
                  onSelf = true;
                  var call2077 = callmethodChecked(this, "addTo()name()returns", [1, 1, 1], call2074, string2075, call2076);
                  setLineNumber(507);    // compilenode call
                  onSelf = true;
                  var call2078 = callmethodChecked(this, "number", [0]);
                  onSelf = true;
                  var call2079 = callmethodChecked(this, "base", [0]);
                  onSelf = true;
                  var call2080 = callmethodChecked(this, "extend()with", [1, 1], call2078, call2079);
                  setLineNumber(508);    // compilenode call
                  onSelf = true;
                  var call2081 = callmethodChecked(this, "number", [0]);
                  var string2082 = new GraceString("+");
                  onSelf = true;
                  var call2084 = callmethodChecked(this, "number", [0]);
                  var array2083 = new PrimitiveGraceList([call2084]);
                  onSelf = true;
                  var call2085 = callmethodChecked(this, "number", [0]);
                  onSelf = true;
                  var call2086 = callmethodChecked(this, "addTo()name()params()returns", [1, 1, 1, 1], call2081, string2082, array2083, call2085);
                  setLineNumber(509);    // compilenode call
                  onSelf = true;
                  var call2087 = callmethodChecked(this, "number", [0]);
                  var string2088 = new GraceString("*");
                  onSelf = true;
                  var call2090 = callmethodChecked(this, "number", [0]);
                  var array2089 = new PrimitiveGraceList([call2090]);
                  onSelf = true;
                  var call2091 = callmethodChecked(this, "number", [0]);
                  onSelf = true;
                  var call2092 = callmethodChecked(this, "addTo()name()params()returns", [1, 1, 1, 1], call2087, string2088, array2089, call2091);
                  setLineNumber(510);    // compilenode call
                  onSelf = true;
                  var call2093 = callmethodChecked(this, "number", [0]);
                  var string2094 = new GraceString("-");
                  onSelf = true;
                  var call2096 = callmethodChecked(this, "number", [0]);
                  var array2095 = new PrimitiveGraceList([call2096]);
                  onSelf = true;
                  var call2097 = callmethodChecked(this, "number", [0]);
                  onSelf = true;
                  var call2098 = callmethodChecked(this, "addTo()name()params()returns", [1, 1, 1, 1], call2093, string2094, array2095, call2097);
                  setLineNumber(511);    // compilenode call
                  onSelf = true;
                  var call2099 = callmethodChecked(this, "number", [0]);
                  var string2100 = new GraceString("/");
                  onSelf = true;
                  var call2102 = callmethodChecked(this, "number", [0]);
                  var array2101 = new PrimitiveGraceList([call2102]);
                  onSelf = true;
                  var call2103 = callmethodChecked(this, "number", [0]);
                  onSelf = true;
                  var call2104 = callmethodChecked(this, "addTo()name()params()returns", [1, 1, 1, 1], call2099, string2100, array2101, call2103);
                  setLineNumber(512);    // compilenode call
                  onSelf = true;
                  var call2105 = callmethodChecked(this, "number", [0]);
                  var string2106 = new GraceString("^");
                  onSelf = true;
                  var call2108 = callmethodChecked(this, "number", [0]);
                  var array2107 = new PrimitiveGraceList([call2108]);
                  onSelf = true;
                  var call2109 = callmethodChecked(this, "number", [0]);
                  onSelf = true;
                  var call2110 = callmethodChecked(this, "addTo()name()params()returns", [1, 1, 1, 1], call2105, string2106, array2107, call2109);
                  setLineNumber(513);    // compilenode call
                  onSelf = true;
                  var call2111 = callmethodChecked(this, "number", [0]);
                  var string2112 = new GraceString("%");
                  onSelf = true;
                  var call2114 = callmethodChecked(this, "number", [0]);
                  var array2113 = new PrimitiveGraceList([call2114]);
                  onSelf = true;
                  var call2115 = callmethodChecked(this, "number", [0]);
                  onSelf = true;
                  var call2116 = callmethodChecked(this, "addTo()name()params()returns", [1, 1, 1, 1], call2111, string2112, array2113, call2115);
                  setLineNumber(514);    // compilenode call
                  onSelf = true;
                  var call2117 = callmethodChecked(this, "number", [0]);
                  var string2118 = new GraceString("\u00f7");
                  onSelf = true;
                  var call2120 = callmethodChecked(this, "number", [0]);
                  var array2119 = new PrimitiveGraceList([call2120]);
                  onSelf = true;
                  var call2121 = callmethodChecked(this, "number", [0]);
                  onSelf = true;
                  var call2122 = callmethodChecked(this, "addTo()name()params()returns", [1, 1, 1, 1], call2117, string2118, array2119, call2121);
                  setLineNumber(515);    // compilenode call
                  onSelf = true;
                  var call2123 = callmethodChecked(this, "number", [0]);
                  var string2124 = new GraceString("hash");
                  onSelf = true;
                  var call2125 = callmethodChecked(this, "string", [0]);
                  onSelf = true;
                  var call2126 = callmethodChecked(this, "addTo()name()returns", [1, 1, 1], call2123, string2124, call2125);
                  setLineNumber(516);    // compilenode call
                  onSelf = true;
                  var call2127 = callmethodChecked(this, "number", [0]);
                  var string2128 = new GraceString("++");
                  onSelf = true;
                  var call2130 = callmethodChecked(this, "base", [0]);
                  var array2129 = new PrimitiveGraceList([call2130]);
                  onSelf = true;
                  var call2131 = callmethodChecked(this, "string", [0]);
                  onSelf = true;
                  var call2132 = callmethodChecked(this, "addTo()name()params()returns", [1, 1, 1, 1], call2127, string2128, array2129, call2131);
                  setLineNumber(517);    // compilenode call
                  onSelf = true;
                  var call2133 = callmethodChecked(this, "number", [0]);
                  var string2134 = new GraceString("<");
                  onSelf = true;
                  var call2136 = callmethodChecked(this, "number", [0]);
                  var array2135 = new PrimitiveGraceList([call2136]);
                  onSelf = true;
                  var call2137 = callmethodChecked(this, "boolean", [0]);
                  onSelf = true;
                  var call2138 = callmethodChecked(this, "addTo()name()params()returns", [1, 1, 1, 1], call2133, string2134, array2135, call2137);
                  setLineNumber(518);    // compilenode call
                  onSelf = true;
                  var call2139 = callmethodChecked(this, "number", [0]);
                  var string2140 = new GraceString(">");
                  onSelf = true;
                  var call2142 = callmethodChecked(this, "number", [0]);
                  var array2141 = new PrimitiveGraceList([call2142]);
                  onSelf = true;
                  var call2143 = callmethodChecked(this, "boolean", [0]);
                  onSelf = true;
                  var call2144 = callmethodChecked(this, "addTo()name()params()returns", [1, 1, 1, 1], call2139, string2140, array2141, call2143);
                  setLineNumber(519);    // compilenode call
                  onSelf = true;
                  var call2145 = callmethodChecked(this, "number", [0]);
                  var string2146 = new GraceString("\u2264");
                  onSelf = true;
                  var call2148 = callmethodChecked(this, "number", [0]);
                  var array2147 = new PrimitiveGraceList([call2148]);
                  onSelf = true;
                  var call2149 = callmethodChecked(this, "boolean", [0]);
                  onSelf = true;
                  var call2150 = callmethodChecked(this, "addTo()name()params()returns", [1, 1, 1, 1], call2145, string2146, array2147, call2149);
                  setLineNumber(520);    // compilenode call
                  onSelf = true;
                  var call2151 = callmethodChecked(this, "number", [0]);
                  var string2152 = new GraceString("\u2265");
                  onSelf = true;
                  var call2154 = callmethodChecked(this, "number", [0]);
                  var array2153 = new PrimitiveGraceList([call2154]);
                  onSelf = true;
                  var call2155 = callmethodChecked(this, "boolean", [0]);
                  onSelf = true;
                  var call2156 = callmethodChecked(this, "addTo()name()params()returns", [1, 1, 1, 1], call2151, string2152, array2153, call2155);
                  setLineNumber(521);    // compilenode call
                  onSelf = true;
                  var call2157 = callmethodChecked(this, "number", [0]);
                  var string2158 = new GraceString("..");
                  onSelf = true;
                  var call2160 = callmethodChecked(this, "number", [0]);
                  var array2159 = new PrimitiveGraceList([call2160]);
                  onSelf = true;
                  var call2161 = callmethodChecked(this, "list", [0]);
                  onSelf = true;
                  var call2162 = callmethodChecked(this, "addTo()name()params()returns", [1, 1, 1, 1], call2157, string2158, array2159, call2161);
                  setLineNumber(522);    // compilenode call
                  onSelf = true;
                  var call2163 = callmethodChecked(this, "number", [0]);
                  var string2164 = new GraceString("asInteger32");
                  onSelf = true;
                  var call2165 = callmethodChecked(this, "number", [0]);
                  onSelf = true;
                  var call2166 = callmethodChecked(this, "addTo()name()returns", [1, 1, 1], call2163, string2164, call2165);
                  setLineNumber(523);    // compilenode call
                  onSelf = true;
                  var call2167 = callmethodChecked(this, "number", [0]);
                  var string2168 = new GraceString("prefix-");
                  onSelf = true;
                  var call2169 = callmethodChecked(this, "number", [0]);
                  onSelf = true;
                  var call2170 = callmethodChecked(this, "addTo()name()returns", [1, 1, 1], call2167, string2168, call2169);
                  setLineNumber(524);    // compilenode call
                  onSelf = true;
                  var call2171 = callmethodChecked(this, "number", [0]);
                  var string2172 = new GraceString("inBase");
                  onSelf = true;
                  var call2174 = callmethodChecked(this, "number", [0]);
                  var array2173 = new PrimitiveGraceList([call2174]);
                  onSelf = true;
                  var call2175 = callmethodChecked(this, "number", [0]);
                  onSelf = true;
                  var call2176 = callmethodChecked(this, "addTo()name()params()returns", [1, 1, 1, 1], call2171, string2172, array2173, call2175);
                  setLineNumber(525);    // compilenode call
                  onSelf = true;
                  var call2177 = callmethodChecked(this, "number", [0]);
                  var string2178 = new GraceString("truncated");
                  onSelf = true;
                  var call2179 = callmethodChecked(this, "number", [0]);
                  onSelf = true;
                  var call2180 = callmethodChecked(this, "addTo()name()returns", [1, 1, 1], call2177, string2178, call2179);
                  setLineNumber(526);    // compilenode call
                  onSelf = true;
                  var call2181 = callmethodChecked(this, "number", [0]);
                  var string2182 = new GraceString("rounded");
                  onSelf = true;
                  var call2183 = callmethodChecked(this, "number", [0]);
                  onSelf = true;
                  var call2184 = callmethodChecked(this, "addTo()name()returns", [1, 1, 1], call2181, string2182, call2183);
                  setLineNumber(527);    // compilenode call
                  onSelf = true;
                  var call2185 = callmethodChecked(this, "number", [0]);
                  var string2186 = new GraceString("prefix<");
                  onSelf = true;
                  var call2187 = callmethodChecked(this, "pattern", [0]);
                  onSelf = true;
                  var call2188 = callmethodChecked(this, "addTo()name()returns", [1, 1, 1], call2185, string2186, call2187);
                  setLineNumber(528);    // compilenode call
                  onSelf = true;
                  var call2189 = callmethodChecked(this, "number", [0]);
                  var string2190 = new GraceString("prefix>");
                  onSelf = true;
                  var call2191 = callmethodChecked(this, "pattern", [0]);
                  onSelf = true;
                  var call2192 = callmethodChecked(this, "addTo()name()returns", [1, 1, 1], call2189, string2190, call2191);
                  setLineNumber(530);    // compilenode call
                  onSelf = true;
                  var call2193 = callmethodChecked(this, "string", [0]);
                  onSelf = true;
                  var call2194 = callmethodChecked(this, "base", [0]);
                  onSelf = true;
                  var call2195 = callmethodChecked(this, "extend()with", [1, 1], call2193, call2194);
                  setLineNumber(531);    // compilenode call
                  onSelf = true;
                  var call2196 = callmethodChecked(this, "string", [0]);
                  var string2197 = new GraceString("++");
                  onSelf = true;
                  var call2199 = callmethodChecked(this, "base", [0]);
                  var array2198 = new PrimitiveGraceList([call2199]);
                  onSelf = true;
                  var call2200 = callmethodChecked(this, "string", [0]);
                  onSelf = true;
                  var call2201 = callmethodChecked(this, "addTo()name()params()returns", [1, 1, 1, 1], call2196, string2197, array2198, call2200);
                  setLineNumber(532);    // compilenode call
                  onSelf = true;
                  var call2202 = callmethodChecked(this, "string", [0]);
                  var string2203 = new GraceString("at");
                  onSelf = true;
                  var call2205 = callmethodChecked(this, "number", [0]);
                  var array2204 = new PrimitiveGraceList([call2205]);
                  onSelf = true;
                  var call2206 = callmethodChecked(this, "string", [0]);
                  onSelf = true;
                  var call2207 = callmethodChecked(this, "addTo()name()params()returns", [1, 1, 1, 1], call2202, string2203, array2204, call2206);
                  setLineNumber(533);    // compilenode call
                  onSelf = true;
                  var call2208 = callmethodChecked(this, "string", [0]);
                  var string2209 = new GraceString("iterator");
                  onSelf = true;
                  var call2210 = callmethodChecked(this, "base", [0]);
                  onSelf = true;
                  var call2211 = callmethodChecked(this, "addTo()name()returns", [1, 1, 1], call2208, string2209, call2210);
                  setLineNumber(534);    // compilenode call
                  onSelf = true;
                  var call2212 = callmethodChecked(this, "string", [0]);
                  var string2213 = new GraceString("quoted");
                  onSelf = true;
                  var call2214 = callmethodChecked(this, "string", [0]);
                  onSelf = true;
                  var call2215 = callmethodChecked(this, "addTo()name()returns", [1, 1, 1], call2212, string2213, call2214);
                  setLineNumber(535);    // compilenode call
                  onSelf = true;
                  var call2216 = callmethodChecked(this, "string", [0]);
                  var string2217 = new GraceString("size");
                  onSelf = true;
                  var call2218 = callmethodChecked(this, "number", [0]);
                  onSelf = true;
                  var call2219 = callmethodChecked(this, "addTo()name()returns", [1, 1, 1], call2216, string2217, call2218);
                  setLineNumber(536);    // compilenode call
                  onSelf = true;
                  var call2220 = callmethodChecked(this, "string", [0]);
                  var string2221 = new GraceString("iterator");
                  onSelf = true;
                  var call2222 = callmethodChecked(this, "iterator", [0]);
                  onSelf = true;
                  var call2223 = callmethodChecked(this, "addTo()name()returns", [1, 1, 1], call2220, string2221, call2222);
                  setLineNumber(537);    // compilenode call
                  onSelf = true;
                  var call2224 = callmethodChecked(this, "string", [0]);
                  var string2225 = new GraceString("ord");
                  onSelf = true;
                  var call2226 = callmethodChecked(this, "number", [0]);
                  onSelf = true;
                  var call2227 = callmethodChecked(this, "addTo()name()returns", [1, 1, 1], call2224, string2225, call2226);
                  setLineNumber(538);    // compilenode call
                  onSelf = true;
                  var call2228 = callmethodChecked(this, "string", [0]);
                  var string2229 = new GraceString("substringFrom()to");
                  onSelf = true;
                  var call2231 = callmethodChecked(this, "number", [0]);
                  onSelf = true;
                  var call2232 = callmethodChecked(this, "number", [0]);
                  var array2230 = new PrimitiveGraceList([call2231, call2232]);
                  onSelf = true;
                  var call2233 = callmethodChecked(this, "string", [0]);
                  onSelf = true;
                  var call2234 = callmethodChecked(this, "addTo()name()params()returns", [1, 1, 1, 1], call2228, string2229, array2230, call2233);
                  setLineNumber(539);    // compilenode call
                  onSelf = true;
                  var call2235 = callmethodChecked(this, "string", [0]);
                  var string2236 = new GraceString("replace()with");
                  onSelf = true;
                  var call2238 = callmethodChecked(this, "string", [0]);
                  onSelf = true;
                  var call2239 = callmethodChecked(this, "string", [0]);
                  var array2237 = new PrimitiveGraceList([call2238, call2239]);
                  onSelf = true;
                  var call2240 = callmethodChecked(this, "string", [0]);
                  onSelf = true;
                  var call2241 = callmethodChecked(this, "addTo()name()params()returns", [1, 1, 1, 1], call2235, string2236, array2237, call2240);
                  setLineNumber(540);    // compilenode call
                  onSelf = true;
                  var call2242 = callmethodChecked(this, "string", [0]);
                  var string2243 = new GraceString("hash");
                  onSelf = true;
                  var call2244 = callmethodChecked(this, "string", [0]);
                  onSelf = true;
                  var call2245 = callmethodChecked(this, "addTo()name()returns", [1, 1, 1], call2242, string2243, call2244);
                  setLineNumber(541);    // compilenode call
                  onSelf = true;
                  var call2246 = callmethodChecked(this, "string", [0]);
                  var string2247 = new GraceString("indices");
                  onSelf = true;
                  var call2248 = callmethodChecked(this, "list", [0]);
                  onSelf = true;
                  var call2249 = callmethodChecked(this, "addTo()name()returns", [1, 1, 1], call2246, string2247, call2248);
                  setLineNumber(542);    // compilenode call
                  onSelf = true;
                  var call2250 = callmethodChecked(this, "string", [0]);
                  var string2251 = new GraceString("asNumber");
                  onSelf = true;
                  var call2252 = callmethodChecked(this, "number", [0]);
                  onSelf = true;
                  var call2253 = callmethodChecked(this, "addTo()name()returns", [1, 1, 1], call2250, string2251, call2252);
                  setLineNumber(544);    // compilenode call
                  onSelf = true;
                  var call2255 = callmethodChecked(this, "unknown", [0]);
                  var call2256 = callmethodChecked(var_aParam, "ofType", [1], call2255);
                  onSelf = true;
                  var call2257 = callmethodChecked(this, "unknown", [0]);
                  var call2258 = callmethodChecked(var_aParam, "ofType", [1], call2257);
                  var array2254 = new PrimitiveGraceList([call2256, call2258]);
                  setLineNumber(545);    // compilenode call
                  onSelf = true;
                  var call2259 = callmethodChecked(this, "unknown", [0]);
                  onSelf = true;
                  var call2260 = callmethodChecked(this, "blockTaking()returning", [1, 1], array2254, call2259);
                  obj1010.data["fold"] = call2260;
                  var reader_staticTypes_fold2261 = function() {
                    return this.data["fold"];
                  };
                  reader_staticTypes_fold2261.def = true;
                  reader_staticTypes_fold2261.confidential = true;
                  obj1010.methods["fold"] = reader_staticTypes_fold2261;
                  setLineNumber(546);    // compilenode call
                  onSelf = true;
                  var call2262 = callmethodChecked(this, "list", [0]);
                  onSelf = true;
                  var call2263 = callmethodChecked(this, "base", [0]);
                  onSelf = true;
                  var call2264 = callmethodChecked(this, "extend()with", [1, 1], call2262, call2263);
                  setLineNumber(547);    // compilenode call
                  onSelf = true;
                  var call2265 = callmethodChecked(this, "list", [0]);
                  var string2266 = new GraceString("at");
                  onSelf = true;
                  var call2268 = callmethodChecked(this, "number", [0]);
                  var array2267 = new PrimitiveGraceList([call2268]);
                  onSelf = true;
                  var call2269 = callmethodChecked(this, "unknown", [0]);
                  onSelf = true;
                  var call2270 = callmethodChecked(this, "addTo()name()params()returns", [1, 1, 1, 1], call2265, string2266, array2267, call2269);
                  setLineNumber(548);    // compilenode call
                  onSelf = true;
                  var call2271 = callmethodChecked(this, "list", [0]);
                  var string2272 = new GraceString("at ()put");
                  onSelf = true;
                  var call2274 = callmethodChecked(this, "number", [0]);
                  onSelf = true;
                  var call2275 = callmethodChecked(this, "unknown", [0]);
                  var array2273 = new PrimitiveGraceList([call2274, call2275]);
                  onSelf = true;
                  var call2276 = callmethodChecked(this, "done", [0]);
                  onSelf = true;
                  var call2277 = callmethodChecked(this, "addTo()name()params()returns", [1, 1, 1, 1], call2271, string2272, array2273, call2276);
                  setLineNumber(549);    // compilenode call
                  onSelf = true;
                  var call2278 = callmethodChecked(this, "list", [0]);
                  var string2279 = new GraceString("push");
                  onSelf = true;
                  var call2281 = callmethodChecked(this, "unknown", [0]);
                  var array2280 = new PrimitiveGraceList([call2281]);
                  onSelf = true;
                  var call2282 = callmethodChecked(this, "done", [0]);
                  onSelf = true;
                  var call2283 = callmethodChecked(this, "addTo()name()params()returns", [1, 1, 1, 1], call2278, string2279, array2280, call2282);
                  setLineNumber(550);    // compilenode call
                  onSelf = true;
                  var call2284 = callmethodChecked(this, "list", [0]);
                  var string2285 = new GraceString("pop");
                  onSelf = true;
                  var call2286 = callmethodChecked(this, "unknown", [0]);
                  onSelf = true;
                  var call2287 = callmethodChecked(this, "addTo()name()returns", [1, 1, 1], call2284, string2285, call2286);
                  setLineNumber(551);    // compilenode call
                  onSelf = true;
                  var call2288 = callmethodChecked(this, "list", [0]);
                  var string2289 = new GraceString("size");
                  onSelf = true;
                  var call2290 = callmethodChecked(this, "number", [0]);
                  onSelf = true;
                  var call2291 = callmethodChecked(this, "addTo()name()returns", [1, 1, 1], call2288, string2289, call2290);
                  setLineNumber(552);    // compilenode call
                  onSelf = true;
                  var call2292 = callmethodChecked(this, "list", [0]);
                  var string2293 = new GraceString("iterator");
                  onSelf = true;
                  var call2294 = callmethodChecked(this, "iterator", [0]);
                  onSelf = true;
                  var call2295 = callmethodChecked(this, "addTo()name()returns", [1, 1, 1], call2292, string2293, call2294);
                  setLineNumber(553);    // compilenode call
                  onSelf = true;
                  var call2296 = callmethodChecked(this, "list", [0]);
                  var string2297 = new GraceString("contains");
                  onSelf = true;
                  var call2299 = callmethodChecked(this, "unknown", [0]);
                  var array2298 = new PrimitiveGraceList([call2299]);
                  onSelf = true;
                  var call2300 = callmethodChecked(this, "boolean", [0]);
                  onSelf = true;
                  var call2301 = callmethodChecked(this, "addTo()name()params()returns", [1, 1, 1, 1], call2296, string2297, array2298, call2300);
                  setLineNumber(554);    // compilenode call
                  onSelf = true;
                  var call2302 = callmethodChecked(this, "list", [0]);
                  var string2303 = new GraceString("indices");
                  onSelf = true;
                  var call2304 = callmethodChecked(this, "list", [0]);
                  onSelf = true;
                  var call2305 = callmethodChecked(this, "addTo()name()returns", [1, 1, 1], call2302, string2303, call2304);
                  setLineNumber(555);    // compilenode call
                  onSelf = true;
                  var call2306 = callmethodChecked(this, "list", [0]);
                  var string2307 = new GraceString("first");
                  onSelf = true;
                  var call2308 = callmethodChecked(this, "unknown", [0]);
                  onSelf = true;
                  var call2309 = callmethodChecked(this, "addTo()name()returns", [1, 1, 1], call2306, string2307, call2308);
                  setLineNumber(556);    // compilenode call
                  onSelf = true;
                  var call2310 = callmethodChecked(this, "list", [0]);
                  var string2311 = new GraceString("last");
                  onSelf = true;
                  var call2312 = callmethodChecked(this, "unknown", [0]);
                  onSelf = true;
                  var call2313 = callmethodChecked(this, "addTo()name()returns", [1, 1, 1], call2310, string2311, call2312);
                  setLineNumber(557);    // compilenode call
                  onSelf = true;
                  var call2314 = callmethodChecked(this, "list", [0]);
                  var string2315 = new GraceString("addFirst");
                  onSelf = true;
                  var call2317 = callmethodChecked(this, "unknown", [0]);
                  var array2316 = new PrimitiveGraceList([call2317]);
                  onSelf = true;
                  var call2318 = callmethodChecked(this, "list", [0]);
                  onSelf = true;
                  var call2319 = callmethodChecked(this, "addTo()name()params()returns", [1, 1, 1, 1], call2314, string2315, array2316, call2318);
                  setLineNumber(558);    // compilenode call
                  onSelf = true;
                  var call2320 = callmethodChecked(this, "list", [0]);
                  var string2321 = new GraceString("addAll");
                  onSelf = true;
                  var call2323 = callmethodChecked(this, "unknown", [0]);
                  var array2322 = new PrimitiveGraceList([call2323]);
                  onSelf = true;
                  var call2324 = callmethodChecked(this, "list", [0]);
                  onSelf = true;
                  var call2325 = callmethodChecked(this, "addTo()name()params()returns", [1, 1, 1, 1], call2320, string2321, array2322, call2324);
                  setLineNumber(559);    // compilenode call
                  onSelf = true;
                  var call2326 = callmethodChecked(this, "list", [0]);
                  var string2327 = new GraceString("++");
                  onSelf = true;
                  var call2329 = callmethodChecked(this, "list", [0]);
                  var array2328 = new PrimitiveGraceList([call2329]);
                  onSelf = true;
                  var call2330 = callmethodChecked(this, "list", [0]);
                  onSelf = true;
                  var call2331 = callmethodChecked(this, "addTo()name()params()returns", [1, 1, 1, 1], call2326, string2327, array2328, call2330);
                  setLineNumber(560);    // compilenode call
                  onSelf = true;
                  var call2332 = callmethodChecked(this, "list", [0]);
                  var string2333 = new GraceString("fold()startingWith");
                  onSelf = true;
                  var call2335 = callmethodChecked(this, "fold", [0]);
                  onSelf = true;
                  var call2336 = callmethodChecked(this, "unknown", [0]);
                  var array2334 = new PrimitiveGraceList([call2335, call2336]);
                  onSelf = true;
                  var call2337 = callmethodChecked(this, "unknown", [0]);
                  onSelf = true;
                  var call2338 = callmethodChecked(this, "addTo()name()params()returns", [1, 1, 1, 1], call2332, string2333, array2334, call2337);
                  setLineNumber(562);    // compilenode string
                  var string2339 = new GraceString("Unknown");
                  onSelf = true;
                  var call2340 = callmethodChecked(this, "unknown", [0]);
                  var call2341 = callmethodChecked(var_prelude, "scope", [0]);
                  var call2342 = callmethodChecked(call2341, "types", [0]);
                  var call2343 = callmethodChecked(call2342, "at()put", [1, 1], string2339, call2340);
                  setLineNumber(563);    // compilenode string
                  var string2344 = new GraceString("Done");
                  onSelf = true;
                  var call2345 = callmethodChecked(this, "done", [0]);
                  var call2346 = callmethodChecked(var_prelude, "scope", [0]);
                  var call2347 = callmethodChecked(call2346, "types", [0]);
                  var call2348 = callmethodChecked(call2347, "at()put", [1, 1], string2344, call2345);
                  setLineNumber(564);    // compilenode string
                  var string2349 = new GraceString("Object");
                  onSelf = true;
                  var call2350 = callmethodChecked(this, "base", [0]);
                  var call2351 = callmethodChecked(var_prelude, "scope", [0]);
                  var call2352 = callmethodChecked(call2351, "types", [0]);
                  var call2353 = callmethodChecked(call2352, "at()put", [1, 1], string2349, call2350);
                  setLineNumber(565);    // compilenode string
                  var string2354 = new GraceString("Pattern");
                  onSelf = true;
                  var call2355 = callmethodChecked(this, "pattern", [0]);
                  var call2356 = callmethodChecked(var_prelude, "scope", [0]);
                  var call2357 = callmethodChecked(call2356, "types", [0]);
                  var call2358 = callmethodChecked(call2357, "at()put", [1, 1], string2354, call2355);
                  setLineNumber(566);    // compilenode string
                  var string2359 = new GraceString("Boolean");
                  onSelf = true;
                  var call2360 = callmethodChecked(this, "boolean", [0]);
                  var call2361 = callmethodChecked(var_prelude, "scope", [0]);
                  var call2362 = callmethodChecked(call2361, "types", [0]);
                  var call2363 = callmethodChecked(call2362, "at()put", [1, 1], string2359, call2360);
                  setLineNumber(567);    // compilenode string
                  var string2364 = new GraceString("Number");
                  onSelf = true;
                  var call2365 = callmethodChecked(this, "number", [0]);
                  var call2366 = callmethodChecked(var_prelude, "scope", [0]);
                  var call2367 = callmethodChecked(call2366, "types", [0]);
                  var call2368 = callmethodChecked(call2367, "at()put", [1, 1], string2364, call2365);
                  setLineNumber(568);    // compilenode string
                  var string2369 = new GraceString("String");
                  onSelf = true;
                  var call2370 = callmethodChecked(this, "string", [0]);
                  var call2371 = callmethodChecked(var_prelude, "scope", [0]);
                  var call2372 = callmethodChecked(call2371, "types", [0]);
                  var call2373 = callmethodChecked(call2372, "at()put", [1, 1], string2369, call2370);
                  setLineNumber(569);    // compilenode string
                  var string2374 = new GraceString("List");
                  onSelf = true;
                  var call2375 = callmethodChecked(this, "list", [0]);
                  var call2376 = callmethodChecked(var_prelude, "scope", [0]);
                  var call2377 = callmethodChecked(call2376, "types", [0]);
                  var call2378 = callmethodChecked(call2377, "at()put", [1, 1], string2374, call2375);
                  setLineNumber(571);    // compilenode string
                  var string2379 = new GraceString("Unknown");
                  onSelf = true;
                  var call2380 = callmethodChecked(this, "pattern", [0]);
                  var call2381 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call2382 = callmethodChecked(call2381, "addVar()ofType", [1, 1], string2379, call2380);
                  setLineNumber(572);    // compilenode string
                  var string2383 = new GraceString("Dynamic");
                  onSelf = true;
                  var call2384 = callmethodChecked(this, "pattern", [0]);
                  var call2385 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call2386 = callmethodChecked(call2385, "addVar()ofType", [1, 1], string2383, call2384);
                  setLineNumber(573);    // compilenode string
                  var string2387 = new GraceString("Done");
                  onSelf = true;
                  var call2388 = callmethodChecked(this, "pattern", [0]);
                  var call2389 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call2390 = callmethodChecked(call2389, "addVar()ofType", [1, 1], string2387, call2388);
                  setLineNumber(574);    // compilenode string
                  var string2391 = new GraceString("Object");
                  onSelf = true;
                  var call2392 = callmethodChecked(this, "pattern", [0]);
                  var call2393 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call2394 = callmethodChecked(call2393, "addVar()ofType", [1, 1], string2391, call2392);
                  setLineNumber(575);    // compilenode string
                  var string2395 = new GraceString("Pattern");
                  onSelf = true;
                  var call2396 = callmethodChecked(this, "pattern", [0]);
                  var call2397 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call2398 = callmethodChecked(call2397, "addVar()ofType", [1, 1], string2395, call2396);
                  setLineNumber(576);    // compilenode string
                  var string2399 = new GraceString("Boolean");
                  onSelf = true;
                  var call2400 = callmethodChecked(this, "pattern", [0]);
                  var call2401 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call2402 = callmethodChecked(call2401, "addVar()ofType", [1, 1], string2399, call2400);
                  setLineNumber(577);    // compilenode string
                  var string2403 = new GraceString("Number");
                  onSelf = true;
                  var call2404 = callmethodChecked(this, "pattern", [0]);
                  var call2405 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call2406 = callmethodChecked(call2405, "addVar()ofType", [1, 1], string2403, call2404);
                  setLineNumber(578);    // compilenode string
                  var string2407 = new GraceString("String");
                  onSelf = true;
                  var call2408 = callmethodChecked(this, "pattern", [0]);
                  var call2409 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call2410 = callmethodChecked(call2409, "addVar()ofType", [1, 1], string2407, call2408);
                  setLineNumber(579);    // compilenode string
                  var string2411 = new GraceString("List");
                  onSelf = true;
                  var call2412 = callmethodChecked(this, "pattern", [0]);
                  var call2413 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call2414 = callmethodChecked(call2413, "addVar()ofType", [1, 1], string2411, call2412);
                  setLineNumber(581);    // compilenode string
                  var string2415 = new GraceString("done");
                  onSelf = true;
                  var call2416 = callmethodChecked(this, "done", [0]);
                  var call2417 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call2418 = callmethodChecked(call2417, "addVar()ofType", [1, 1], string2415, call2416);
                  setLineNumber(582);    // compilenode string
                  var string2419 = new GraceString("true");
                  onSelf = true;
                  var call2420 = callmethodChecked(this, "boolean", [0]);
                  var call2421 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call2422 = callmethodChecked(call2421, "addVar()ofType", [1, 1], string2419, call2420);
                  setLineNumber(583);    // compilenode string
                  var string2423 = new GraceString("false");
                  onSelf = true;
                  var call2424 = callmethodChecked(this, "boolean", [0]);
                  var call2425 = callmethodChecked(superDepth, "outer", [0]);
                  onOuter = true;
                  onSelf = true;
                  var call2426 = callmethodChecked(call2425, "addVar()ofType", [1, 1], string2423, call2424);
                  superDepth = origSuperDepth;
                };
                obj_init_1010.apply(obj1010, []);
                var var_objectType = obj1010;
                var func2427 = function(argcv) {    // method objectType
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  if (argcv[0] !== 0)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for objectType"));
                  setModuleName("staticTypes");
                  // objectType is a simple accessor - elide try ... catch
                  setLineNumber(173);    // compilenode identifier
                  return var_objectType;
                };
                func2427.paramCounts = [0];
                this.methods["objectType"] = func2427;
                func2427.definitionLine = 583;
                func2427.definitionModule = "staticTypes";
                this.methods["objectType"].debug = "def";
                setLineNumber(594);    // compilenode string
                var string2428 = new GraceString("ObjectError");
                var call2429 = callmethodChecked(var_TypeError, "refine", [1], string2428);
                var var_ObjectError = call2429;
                setLineNumber(583);    // compilenode method
                var func2430 = function(argcv) {    // method ObjectError
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  if (argcv[0] !== 0)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ObjectError"));
                  setModuleName("staticTypes");
                  // ObjectError is a simple accessor - elide try ... catch
                  setLineNumber(594);    // compilenode identifier
                  return var_ObjectError;
                };
                func2430.paramCounts = [0];
                this.methods["ObjectError"] = func2430;
                func2430.definitionLine = 583;
                func2430.definitionModule = "staticTypes";
                this.methods["ObjectError"].debug = "def";
                setLineNumber(596);    // compilenode block
                var block2431 = new GraceBlock(this, 596, 1);
                setLineNumber(0);    // compilenode string
                var string2432 = new GraceString("obj");
                var call2433 = callmethodChecked(var_prelude, "VariablePattern", [0]);
                var call2434 = callmethodChecked(call2433, "new", [1], string2432);
                setLineNumber(596);    // compilenode call
                var call2435 = callmethodChecked(var_prelude, "ObjectLiteral", [0]);
                setLineNumber(0);    // compilenode call
                var call2436 = callmethodChecked(var_prelude, "AndPattern", [0]);
                var call2437 = callmethodChecked(call2436, "new", [2], call2434, call2435);
                block2431.pattern = call2437;
                setLineNumber(596);    // compilenode call
                var call2438 = callmethodChecked(var_prelude, "ObjectLiteral", [0]);
                block2431.real = function(var_obj) {
                  setLineNumber(597);    // compilenode block
                  var block2439 = new GraceBlock(this, 597, 0);
                  block2439.real = function() {
                    var call2440 = callmethodChecked(var_obj, "value", [0]);
                    onSelf = true;
                    var call2441 = callmethodChecked(this, "processBody", [1], call2440);
                    return call2441;
                  };
                  var call2442 = callmethodChecked(var_prelude, "scope", [0]);
                  var call2443 = callmethodChecked(call2442, "enter", [1], block2439);
                  return call2443;
                };
                var call2444 = callmethodChecked(var_prelude, "rule", [1], block2431);
                setLineNumber(603);    // compilenode block
                var block2445 = new GraceBlock(this, 603, 1);
                setLineNumber(0);    // compilenode string
                var string2446 = new GraceString("__12");
                var call2447 = callmethodChecked(var_prelude, "VariablePattern", [0]);
                var call2448 = callmethodChecked(call2447, "new", [1], string2446);
                setLineNumber(603);    // compilenode call
                var call2449 = callmethodChecked(var_prelude, "OctetsLiteral", [0]);
                var call2451 = callmethodChecked(var_prelude, "NumberLiteral", [0]);
                var opresult2453 = callmethodChecked(call2451, "|", [1], call2449);
                setLineNumber(0);    // compilenode call
                var call2454 = callmethodChecked(var_prelude, "AndPattern", [0]);
                var call2455 = callmethodChecked(call2454, "new", [2], call2448, opresult2453);
                block2445.pattern = call2455;
                setLineNumber(603);    // compilenode call
                var call2456 = callmethodChecked(var_prelude, "OctetsLiteral", [0]);
                var call2458 = callmethodChecked(var_prelude, "NumberLiteral", [0]);
                var opresult2460 = callmethodChecked(call2458, "|", [1], call2456);
                block2445.real = function(var___95____95__12) {
                  setLineNumber(604);    // compilenode identifier
                  var call2461 = callmethodChecked(var_objectType, "number", [0]);
                  return call2461;
                };
                var call2462 = callmethodChecked(var_prelude, "rule", [1], block2445);
                setLineNumber(607);    // compilenode block
                var block2463 = new GraceBlock(this, 607, 1);
                setLineNumber(0);    // compilenode string
                var string2464 = new GraceString("__13");
                var call2465 = callmethodChecked(var_prelude, "VariablePattern", [0]);
                var call2466 = callmethodChecked(call2465, "new", [1], string2464);
                setLineNumber(607);    // compilenode call
                var call2467 = callmethodChecked(var_prelude, "StringLiteral", [0]);
                setLineNumber(0);    // compilenode call
                var call2468 = callmethodChecked(var_prelude, "AndPattern", [0]);
                var call2469 = callmethodChecked(call2468, "new", [2], call2466, call2467);
                block2463.pattern = call2469;
                setLineNumber(607);    // compilenode call
                var call2470 = callmethodChecked(var_prelude, "StringLiteral", [0]);
                block2463.real = function(var___95____95__13) {
                  setLineNumber(608);    // compilenode identifier
                  var call2471 = callmethodChecked(var_objectType, "string", [0]);
                  return call2471;
                };
                var call2472 = callmethodChecked(var_prelude, "rule", [1], block2463);
                setLineNumber(611);    // compilenode block
                var block2473 = new GraceBlock(this, 611, 1);
                setLineNumber(0);    // compilenode string
                var string2474 = new GraceString("__14");
                var call2475 = callmethodChecked(var_prelude, "VariablePattern", [0]);
                var call2476 = callmethodChecked(call2475, "new", [1], string2474);
                setLineNumber(611);    // compilenode call
                var call2477 = callmethodChecked(var_prelude, "ArrayLiteral", [0]);
                setLineNumber(0);    // compilenode call
                var call2478 = callmethodChecked(var_prelude, "AndPattern", [0]);
                var call2479 = callmethodChecked(call2478, "new", [2], call2476, call2477);
                block2473.pattern = call2479;
                setLineNumber(611);    // compilenode call
                var call2480 = callmethodChecked(var_prelude, "ArrayLiteral", [0]);
                block2473.real = function(var___95____95__14) {
                  setLineNumber(612);    // compilenode identifier
                  var call2481 = callmethodChecked(var_objectType, "list", [0]);
                  return call2481;
                };
                var call2482 = callmethodChecked(var_prelude, "rule", [1], block2473);
                setLineNumber(618);    // compilenode string
                var string2483 = new GraceString("RequestError");
                var call2484 = callmethodChecked(var_TypeError, "refine", [1], string2483);
                var var_RequestError = call2484;
                setLineNumber(612);    // compilenode method
                var func2485 = function(argcv) {    // method RequestError
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  if (argcv[0] !== 0)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for RequestError"));
                  setModuleName("staticTypes");
                  // RequestError is a simple accessor - elide try ... catch
                  setLineNumber(618);    // compilenode identifier
                  return var_RequestError;
                };
                func2485.paramCounts = [0];
                this.methods["RequestError"] = func2485;
                func2485.definitionLine = 612;
                func2485.definitionModule = "staticTypes";
                this.methods["RequestError"].debug = "def";
                setLineNumber(620);    // compilenode block
                var block2486 = new GraceBlock(this, 620, 1);
                setLineNumber(0);    // compilenode string
                var string2487 = new GraceString("req");
                var call2488 = callmethodChecked(var_prelude, "VariablePattern", [0]);
                var call2489 = callmethodChecked(call2488, "new", [1], string2487);
                setLineNumber(620);    // compilenode call
                var call2490 = callmethodChecked(var_prelude, "Request", [0]);
                setLineNumber(0);    // compilenode call
                var call2491 = callmethodChecked(var_prelude, "AndPattern", [0]);
                var call2492 = callmethodChecked(call2491, "new", [2], call2489, call2490);
                block2486.pattern = call2492;
                setLineNumber(620);    // compilenode call
                var call2493 = callmethodChecked(var_prelude, "Request", [0]);
                block2486.real = function(var_req) {
                  setLineNumber(621);    // compilenode identifier
                  var call2495 = callmethodChecked(var_req, "value", [0]);
                  var cases2494 = [];
                  var block2496 = new GraceBlock(this, 621, 1);
                  setLineNumber(0);    // compilenode string
                  var string2497 = new GraceString("memb");
                  var call2498 = callmethodChecked(var_prelude, "VariablePattern", [0]);
                  var call2499 = callmethodChecked(call2498, "new", [1], string2497);
                  setLineNumber(621);    // compilenode call
                  var call2500 = callmethodChecked(var_prelude, "Member", [0]);
                  setLineNumber(0);    // compilenode call
                  var call2501 = callmethodChecked(var_prelude, "AndPattern", [0]);
                  var call2502 = callmethodChecked(call2501, "new", [2], call2499, call2500);
                  block2496.pattern = call2502;
                  setLineNumber(621);    // compilenode call
                  var call2503 = callmethodChecked(var_prelude, "Member", [0]);
                  block2496.real = function(var_memb) {
                    setLineNumber(622);    // compilenode identifier
                    var call2504 = callmethodChecked(var_memb, "in", [0]);
                    var var_rec = call2504;
                    var if2505 = GraceDone;
                    setLineNumber(623);    // compilenode string
                    var string2506 = new GraceString("self");
                    var call2508 = callmethodChecked(var_rec, "value", [0]);
                    var opresult2510 = callmethodChecked(call2508, "==", [1], string2506);
                    var call2512 = callmethodChecked(var_prelude, "Identifier", [0]);
                    var call2513 = callmethodChecked(call2512, "match", [1], var_rec);
                    var opresult2515 = callmethodChecked(call2513, "&&", [1], opresult2510);
                    if (Grace_isTrue(opresult2515)) {
                      setLineNumber(624);    // compilenode string
                      var string2516 = new GraceString("Self");
                      var block2517 = new GraceBlock(this, 624, 0);
                      block2517.real = function() {
                        setLineNumber(625);    // compilenode string
                        var string2518 = new GraceString("type of self missing");
                        var call2519 = callmethodChecked(var_prelude, "Exception", [0]);
                        var call2520 = callmethodChecked(call2519, "raise()with", [1, 1], string2518, var_rec);
                        return call2520;
                      };
                      setLineNumber(624);    // compilenode call
                      var call2521 = callmethodChecked(var_prelude, "scope", [0]);
                      var call2522 = callmethodChecked(call2521, "types", [0]);
                      var call2523 = callmethodChecked(call2522, "find()butIfMissing", [1, 1], string2516, block2517);
                      if2505 = call2523;
                    } else {
                      setLineNumber(628);    // compilenode identifier
                      var call2524 = callmethodChecked(var_prelude, "typeOf", [1], var_rec);
                      if2505 = call2524;
                    }
                    var var_rType = if2505;
                    var if2525 = GraceDone;
                    setLineNumber(631);    // compilenode identifier
                    var call2526 = callmethodChecked(var_rType, "isUnknown", [0]);
                    if (Grace_isTrue(call2526)) {
                      setLineNumber(632);    // compilenode identifier
                      var call2527 = callmethodChecked(var_objectType, "unknown", [0]);
                      if2525 = call2527;
                    } else {
                      setLineNumber(634);    // compilenode identifier
                      var call2528 = callmethodChecked(var_memb, "value", [0]);
                      var var_name = call2528;
                      setLineNumber(636);    // compilenode identifier
                      var call2530 = callmethodChecked(var_rType, "getMethod", [1], var_name);
                      var cases2529 = [];
                      setLineNumber(637);    // compilenode block
                      var block2531 = new GraceBlock(this, 637, 0);
                      block2531.pattern = var_noSuchMethod;
                      block2531.real = function() {
                        setLineNumber(639);    // compilenode string
                        var string2532 = new GraceString("`");
                        var string2535 = new GraceString("` of type `");
                        var call2537 = callmethodChecked(var_rec, "toGrace", [1], new GraceNum(0));
                        var string2539 = new GraceString("`");
                        var opresult2541 = callmethodChecked(string2539, "++", [1], call2537);
                        var opresult2543 = callmethodChecked(opresult2541, "++", [1], string2535);
                        var opresult2545 = callmethodChecked(opresult2543, "++", [1], var_rType);
                        var opresult2547 = callmethodChecked(opresult2545, "++", [1], string2532);
                        setLineNumber(638);    // compilenode string
                        var string2549 = new GraceString("` in ");
                        var string2552 = new GraceString("no method `");
                        var opresult2554 = callmethodChecked(string2552, "++", [1], var_name);
                        var opresult2556 = callmethodChecked(opresult2554, "++", [1], string2549);
                        var opresult2558 = callmethodChecked(opresult2556, "++", [1], opresult2547);
                        var call2559 = callmethodChecked(var_RequestError, "raise()with", [1, 1], opresult2558, var_memb);
                        return call2559;
                      };
                      cases2529.push(block2531);
                      setLineNumber(640);    // compilenode block
                      var block2560 = new GraceBlock(this, 640, 1);
                      setLineNumber(0);    // compilenode string
                      var string2561 = new GraceString("meth");
                      var call2562 = callmethodChecked(var_prelude, "VariablePattern", [0]);
                      var call2563 = callmethodChecked(call2562, "new", [1], string2561);
                      var call2564 = callmethodChecked(var_prelude, "AndPattern", [0]);
                      var call2565 = callmethodChecked(call2564, "new", [2], call2563, var_MethodType);
                      block2560.pattern = call2565;
                      setLineNumber(640);    // compilenode identifier
                      block2560.real = function(var_meth) {
                        setLineNumber(641);    // compilenode identifier
                        onSelf = true;
                        var call2566 = callmethodChecked(this, "check()against", [1, 1], var_req, var_meth);
                        return call2566;
                      };
                      cases2529.push(block2560);
                      setLineNumber(636);    // compilematchcase
                      var matchres2529 = matchCase(call2530,cases2529,false);
                      setModuleName("staticTypes");
                      if2525 = matchres2529;
                    }
                    return if2525;
                  };
                  cases2494.push(block2496);
                  setLineNumber(644);    // compilenode block
                  var block2567 = new GraceBlock(this, 644, 1);
                  setLineNumber(0);    // compilenode string
                  var string2568 = new GraceString("ident");
                  var call2569 = callmethodChecked(var_prelude, "VariablePattern", [0]);
                  var call2570 = callmethodChecked(call2569, "new", [1], string2568);
                  setLineNumber(644);    // compilenode call
                  var call2571 = callmethodChecked(var_prelude, "Identifier", [0]);
                  setLineNumber(0);    // compilenode call
                  var call2572 = callmethodChecked(var_prelude, "AndPattern", [0]);
                  var call2573 = callmethodChecked(call2572, "new", [2], call2570, call2571);
                  block2567.pattern = call2573;
                  setLineNumber(644);    // compilenode call
                  var call2574 = callmethodChecked(var_prelude, "Identifier", [0]);
                  block2567.real = function(var_ident) {
                    setLineNumber(645);    // compilenode call
                    var call2575 = callmethodChecked(var_prelude, "scope", [0]);
                    var call2576 = callmethodChecked(call2575, "methods", [0]);
                    var call2577 = callmethodChecked(call2576, "stack", [0]);
                    var call2578 = callmethodChecked(call2577, "size", [0]);
                    onSelf = true;
                    var call2579 = callmethodChecked(this, "find()atScope", [1, 1], var_req, call2578);
                    return call2579;
                  };
                  cases2494.push(block2567);
                  setLineNumber(646);    // compilenode block
                  var block2580 = new GraceBlock(this, 646, 1);
                  setLineNumber(1);    // compilenode identifier
                  block2580.real = function(var___95____95__15) {
                    return GraceDone;
                  };
                  cases2494.push(block2580);
                  setLineNumber(621);    // compilematchcase
                  var matchres2494 = matchCase(call2495,cases2494,false);
                  setModuleName("staticTypes");
                  return matchres2494;
                };
                var call2581 = callmethodChecked(var_prelude, "rule", [1], block2486);
                setLineNumber(705);    // compilenode block
                var block2582 = new GraceBlock(this, 705, 1);
                setLineNumber(0);    // compilenode string
                var string2583 = new GraceString("memb");
                var call2584 = callmethodChecked(var_prelude, "VariablePattern", [0]);
                var call2585 = callmethodChecked(call2584, "new", [1], string2583);
                setLineNumber(705);    // compilenode call
                var call2586 = callmethodChecked(var_prelude, "Member", [0]);
                setLineNumber(0);    // compilenode call
                var call2587 = callmethodChecked(var_prelude, "AndPattern", [0]);
                var call2588 = callmethodChecked(call2587, "new", [2], call2585, call2586);
                block2582.pattern = call2588;
                setLineNumber(705);    // compilenode call
                var call2589 = callmethodChecked(var_prelude, "Member", [0]);
                block2582.real = function(var_memb) {
                  setLineNumber(706);    // compilenode object
                  var obj2591 = Grace_allocObject(GraceObject, "object");
                  obj2591.definitionModule = "staticTypes";
                  obj2591.definitionLine = 706;
                  obj2591.outer = this;
                  var reader_staticTypes_outer2592 = function() {
                    return this.outer;
                  };
                  obj2591.methods["outer"] = reader_staticTypes_outer2592;
                  var obj_init_2591 = function() {
                    var origSuperDepth = superDepth;
                    superDepth = obj2591;
                    setLineNumber(707);    // compilenode identifier
                    var call2593 = callmethodChecked(var_memb, "value", [0]);
                    obj2591.data["name"] = call2593;
                    var reader_staticTypes_name2594 = function() {
                      return this.data["name"];
                    };
                    reader_staticTypes_name2594.def = true;
                    obj2591.methods["name"] = reader_staticTypes_name2594;
                    setLineNumber(708);    // compilenode array
                    var array2595 = new PrimitiveGraceList([]);
                    obj2591.data["args"] = array2595;
                    var reader_staticTypes_args2596 = function() {
                      return this.data["args"];
                    };
                    reader_staticTypes_args2596.def = true;
                    obj2591.methods["args"] = reader_staticTypes_args2596;
                    superDepth = origSuperDepth;
                  };
                  obj_init_2591.apply(obj2591, []);
                  var array2590 = new PrimitiveGraceList([obj2591]);
                  setLineNumber(706);    // compilenode identifier
                  var call2597 = callmethodChecked(var_ast, "callNode", [0]);
                  var call2598 = callmethodChecked(call2597, "new", [2], var_memb, array2590);
                  var call2599 = callmethodChecked(var_prelude, "typeOf", [1], call2598);
                  return call2599;
                };
                var call2600 = callmethodChecked(var_prelude, "rule", [1], block2582);
                setLineNumber(712);    // compilenode block
                var block2601 = new GraceBlock(this, 712, 1);
                setLineNumber(0);    // compilenode string
                var string2602 = new GraceString("op");
                var call2603 = callmethodChecked(var_prelude, "VariablePattern", [0]);
                var call2604 = callmethodChecked(call2603, "new", [1], string2602);
                setLineNumber(712);    // compilenode call
                var call2605 = callmethodChecked(var_prelude, "Operator", [0]);
                setLineNumber(0);    // compilenode call
                var call2606 = callmethodChecked(var_prelude, "AndPattern", [0]);
                var call2607 = callmethodChecked(call2606, "new", [2], call2604, call2605);
                block2601.pattern = call2607;
                setLineNumber(712);    // compilenode call
                var call2608 = callmethodChecked(var_prelude, "Operator", [0]);
                block2601.real = function(var_op) {
                  setLineNumber(713);    // compilenode identifier
                  var call2609 = callmethodChecked(var_op, "left", [0]);
                  var var_rec = call2609;
                  setLineNumber(714);    // compilenode identifier
                  var call2610 = callmethodChecked(var_prelude, "typeOf", [1], var_rec);
                  var var_rType = call2610;
                  var if2611 = GraceDone;
                  setLineNumber(716);    // compilenode identifier
                  var call2612 = callmethodChecked(var_rType, "isUnknown", [0]);
                  if (Grace_isTrue(call2612)) {
                    setLineNumber(717);    // compilenode identifier
                    var call2613 = callmethodChecked(var_objectType, "unknown", [0]);
                    if2611 = call2613;
                  } else {
                    setLineNumber(719);    // compilenode identifier
                    var call2614 = callmethodChecked(var_op, "value", [0]);
                    var var_name = call2614;
                    setLineNumber(721);    // compilenode identifier
                    var call2616 = callmethodChecked(var_rType, "getMethod", [1], var_name);
                    var cases2615 = [];
                    var block2617 = new GraceBlock(this, 721, 0);
                    block2617.pattern = var_noSuchMethod;
                    block2617.real = function() {
                      setLineNumber(723);    // compilenode string
                      var string2618 = new GraceString("'");
                      var string2621 = new GraceString("` of type '");
                      var call2623 = callmethodChecked(var_rec, "toGrace", [1], new GraceNum(0));
                      var string2625 = new GraceString("`");
                      var opresult2627 = callmethodChecked(string2625, "++", [1], call2623);
                      var opresult2629 = callmethodChecked(opresult2627, "++", [1], string2621);
                      var opresult2631 = callmethodChecked(opresult2629, "++", [1], var_rType);
                      var opresult2633 = callmethodChecked(opresult2631, "++", [1], string2618);
                      setLineNumber(722);    // compilenode string
                      var string2635 = new GraceString("' in ");
                      var string2638 = new GraceString("no method '");
                      var opresult2640 = callmethodChecked(string2638, "++", [1], var_name);
                      var opresult2642 = callmethodChecked(opresult2640, "++", [1], string2635);
                      var opresult2644 = callmethodChecked(opresult2642, "++", [1], opresult2633);
                      var call2645 = callmethodChecked(var_RequestError, "raise()with", [1, 1], opresult2644, var_op);
                      return call2645;
                    };
                    cases2615.push(block2617);
                    setLineNumber(724);    // compilenode block
                    var block2646 = new GraceBlock(this, 724, 1);
                    setLineNumber(0);    // compilenode string
                    var string2647 = new GraceString("meth");
                    var call2648 = callmethodChecked(var_prelude, "VariablePattern", [0]);
                    var call2649 = callmethodChecked(call2648, "new", [1], string2647);
                    var call2650 = callmethodChecked(var_prelude, "AndPattern", [0]);
                    var call2651 = callmethodChecked(call2650, "new", [2], call2649, var_MethodType);
                    block2646.pattern = call2651;
                    setLineNumber(724);    // compilenode identifier
                    block2646.real = function(var_meth) {
                      setLineNumber(725);    // compilenode identifier
                      var call2652 = callmethodChecked(var_op, "right", [0]);
                      var var_arg = call2652;
                      setLineNumber(726);    // compilenode identifier
                      var call2653 = callmethodChecked(var_meth, "signature", [0]);
                      var call2654 = callmethodChecked(call2653, "first", [0]);
                      var call2655 = callmethodChecked(call2654, "parameters", [0]);
                      var var_params = call2655;
                      var if2656 = GraceDone;
                      setLineNumber(728);    // compilenode identifier
                      var call2658 = callmethodChecked(var_params, "size", [0]);
                      var opresult2660 = callmethodChecked(call2658, "==", [1], new GraceNum(0));
                      if (Grace_isTrue(opresult2660)) {
                        setLineNumber(730);    // compilenode string
                        var string2661 = new GraceString("` is missing its parameter");
                        var string2664 = new GraceString("`");
                        var opresult2666 = callmethodChecked(string2664, "++", [1], var_name);
                        var opresult2668 = callmethodChecked(opresult2666, "++", [1], string2661);
                        setLineNumber(729);    // compilenode string
                        var string2670 = new GraceString("the definition of operator ");
                        var opresult2672 = callmethodChecked(string2670, "++", [1], opresult2668);
                        var call2673 = callmethodChecked(var_RequestError, "raise()with", [1, 1], opresult2672, var_op);
                        if2656 = call2673;
                      }
                      setLineNumber(733);    // compilenode identifier
                      var call2674 = callmethodChecked(var_params, "first", [0]);
                      var var_param = call2674;
                      setLineNumber(734);    // compilenode identifier
                      var call2675 = callmethodChecked(var_param, "typeAnnotation", [0]);
                      var var_pType = call2675;
                      var if2676 = GraceDone;
                      setLineNumber(736);    // compilenode identifier
                      var call2677 = callmethodChecked(var_prelude, "typeOf", [1], var_arg);
                      var call2678 = callmethodChecked(call2677, "isSubtypeOf", [1], var_pType);
                      var call2679 = callmethodChecked(call2678, "not", [0]);
                      if (Grace_isTrue(call2679)) {
                        setLineNumber(739);    // compilenode string
                        var string2680 = new GraceString("`");
                        var string2683 = new GraceString("` in the method `");
                        var string2686 = new GraceString("parameter `");
                        var opresult2688 = callmethodChecked(string2686, "++", [1], var_param);
                        var opresult2690 = callmethodChecked(opresult2688, "++", [1], string2683);
                        var opresult2692 = callmethodChecked(opresult2690, "++", [1], var_name);
                        var opresult2694 = callmethodChecked(opresult2692, "++", [1], string2680);
                        setLineNumber(738);    // compilenode string
                        var string2696 = new GraceString("` does not satisfy the type of ");
                        var call2698 = callmethodChecked(var_arg, "toGrace", [1], new GraceNum(0));
                        var string2700 = new GraceString("`");
                        var opresult2702 = callmethodChecked(string2700, "++", [1], call2698);
                        var opresult2704 = callmethodChecked(opresult2702, "++", [1], string2696);
                        setLineNumber(737);    // compilenode string
                        var string2706 = new GraceString("the expression ");
                        var opresult2708 = callmethodChecked(string2706, "++", [1], opresult2704);
                        var opresult2710 = callmethodChecked(opresult2708, "++", [1], opresult2694);
                        var call2711 = callmethodChecked(var_RequestError, "raise()with", [1, 1], opresult2710, var_arg);
                        if2676 = call2711;
                      }
                      setLineNumber(742);    // compilenode identifier
                      var call2712 = callmethodChecked(var_meth, "returnType", [0]);
                      return call2712;
                    };
                    cases2615.push(block2646);
                    setLineNumber(743);    // compilenode block
                    var block2713 = new GraceBlock(this, 743, 1);
                    setLineNumber(1);    // compilenode identifier
                    block2713.real = function(var___95____95__17) {
                      return GraceDone;
                    };
                    cases2615.push(block2713);
                    setLineNumber(721);    // compilematchcase
                    var matchres2615 = matchCase(call2616,cases2615,false);
                    setModuleName("staticTypes");
                    if2611 = matchres2615;
                  }
                  return if2611;
                };
                var call2714 = callmethodChecked(var_prelude, "rule", [1], block2601);
                setLineNumber(750);    // compilenode block
                var block2715 = new GraceBlock(this, 750, 1);
                setLineNumber(0);    // compilenode string
                var string2716 = new GraceString("req");
                var call2717 = callmethodChecked(var_prelude, "VariablePattern", [0]);
                var call2718 = callmethodChecked(call2717, "new", [1], string2716);
                setLineNumber(750);    // compilenode call
                var call2719 = callmethodChecked(var_prelude, "If", [0]);
                setLineNumber(0);    // compilenode call
                var call2720 = callmethodChecked(var_prelude, "AndPattern", [0]);
                var call2721 = callmethodChecked(call2720, "new", [2], call2718, call2719);
                block2715.pattern = call2721;
                setLineNumber(750);    // compilenode call
                var call2722 = callmethodChecked(var_prelude, "If", [0]);
                block2715.real = function(var_req) {
                  setLineNumber(751);    // compilenode identifier
                  var call2723 = callmethodChecked(var_req, "value", [0]);
                  var var_cond = call2723;
                  var if2724 = GraceDone;
                  setLineNumber(752);    // compilenode identifier
                  var call2725 = callmethodChecked(var_objectType, "boolean", [0]);
                  var call2726 = callmethodChecked(var_prelude, "typeOf", [1], var_cond);
                  var call2727 = callmethodChecked(call2726, "isSubtypeOf", [1], call2725);
                  var call2728 = callmethodChecked(call2727, "not", [0]);
                  if (Grace_isTrue(call2728)) {
                    setLineNumber(754);    // compilenode string
                    var string2729 = new GraceString("conform to type `Boolean`.");
                    setLineNumber(753);    // compilenode string
                    var string2731 = new GraceString("` does not ");
                    var call2733 = callmethodChecked(var_cond, "toGrace", [1], new GraceNum(0));
                    var string2735 = new GraceString("the condition `");
                    var opresult2737 = callmethodChecked(string2735, "++", [1], call2733);
                    var opresult2739 = callmethodChecked(opresult2737, "++", [1], string2731);
                    var opresult2741 = callmethodChecked(opresult2739, "++", [1], string2729);
                    var call2742 = callmethodChecked(var_RequestError, "raise()with", [1, 1], opresult2741, var_cond);
                    if2724 = call2742;
                  }
                  setLineNumber(757);    // compilenode identifier
                  var call2743 = callmethodChecked(var_req, "thenblock", [0]);
                  var call2744 = callmethodChecked(var_objectType, "fromBlock", [1], call2743);
                  var var_then = call2744;
                  setLineNumber(759);    // compilenode identifier
                  var call2745 = callmethodChecked(var_req, "elseblock", [0]);
                  var call2746 = callmethodChecked(var_objectType, "fromBlock", [1], call2745);
                  var var_else = call2746;
                  setLineNumber(761);    // compilenode identifier
                  var opresult2749 = callmethodChecked(var_then, "|", [1], var_else);
                  return opresult2749;
                };
                var call2750 = callmethodChecked(var_prelude, "rule", [1], block2715);
                setLineNumber(764);    // compilenode block
                var block2751 = new GraceBlock(this, 764, 1);
                setLineNumber(0);    // compilenode string
                var string2752 = new GraceString("req");
                var call2753 = callmethodChecked(var_prelude, "VariablePattern", [0]);
                var call2754 = callmethodChecked(call2753, "new", [1], string2752);
                setLineNumber(764);    // compilenode call
                var call2755 = callmethodChecked(var_prelude, "MatchCase", [0]);
                setLineNumber(0);    // compilenode call
                var call2756 = callmethodChecked(var_prelude, "AndPattern", [0]);
                var call2757 = callmethodChecked(call2756, "new", [2], call2754, call2755);
                block2751.pattern = call2757;
                setLineNumber(764);    // compilenode call
                var call2758 = callmethodChecked(var_prelude, "MatchCase", [0]);
                block2751.real = function(var_req) {
                  setLineNumber(765);    // compilenode identifier
                  var call2759 = callmethodChecked(var_req, "cases", [0]);
                  var var_cases = call2759;
                  setLineNumber(766);    // compilenode identifier
                  var var_union = var_done;
                  setLineNumber(768);    // compilenode block
                  var block2760 = new GraceBlock(this, 768, 1);
                  setLineNumber(1);    // compilenode identifier
                  block2760.real = function(var_case) {
                    setLineNumber(769);    // compilenode identifier
                    var call2761 = callmethodChecked(var_objectType, "fromBlock", [1], var_case);
                    var var_cType = call2761;
                    var if2762 = GraceDone;
                    setLineNumber(770);    // compilenode identifier
                    var opresult2765 = callmethodChecked(var_done, "==", [1], var_union);
                    if (Grace_isTrue(opresult2765)) {
                      setLineNumber(771);    // compilenode identifier
                      if2762 = var_cType;
                    } else {
                      setLineNumber(773);    // compilenode identifier
                      var opresult2768 = callmethodChecked(var_union, "|", [1], var_cType);
                      if2762 = opresult2768;
                    }
                    var_union = if2762;
                    return GraceDone;
                  };
                  var call2769 = callmethodChecked(var_prelude, "for()do", [1, 1], var_cases, block2760);
                  setLineNumber(776);    // compilenode identifier
                  return var_union;
                };
                var call2770 = callmethodChecked(var_prelude, "rule", [1], block2751);
                setLineNumber(779);    // compilenode block
                var block2771 = new GraceBlock(this, 779, 1);
                setLineNumber(0);    // compilenode string
                var string2772 = new GraceString("req");
                var call2773 = callmethodChecked(var_prelude, "VariablePattern", [0]);
                var call2774 = callmethodChecked(call2773, "new", [1], string2772);
                setLineNumber(779);    // compilenode call
                var call2775 = callmethodChecked(var_prelude, "TryCatch", [0]);
                setLineNumber(0);    // compilenode call
                var call2776 = callmethodChecked(var_prelude, "AndPattern", [0]);
                var call2777 = callmethodChecked(call2776, "new", [2], call2774, call2775);
                block2771.pattern = call2777;
                setLineNumber(779);    // compilenode call
                var call2778 = callmethodChecked(var_prelude, "TryCatch", [0]);
                block2771.real = function(var_req) {
                  setLineNumber(780);    // compilenode identifier
                  var call2780 = callmethodChecked(var_req, "value", [0]);
                  var cases2779 = [];
                  var block2781 = new GraceBlock(this, 780, 1);
                  setLineNumber(0);    // compilenode string
                  var string2782 = new GraceString("bl");
                  var call2783 = callmethodChecked(var_prelude, "VariablePattern", [0]);
                  var call2784 = callmethodChecked(call2783, "new", [1], string2782);
                  setLineNumber(780);    // compilenode call
                  var call2785 = callmethodChecked(var_prelude, "BlockLiteral", [0]);
                  setLineNumber(0);    // compilenode call
                  var call2786 = callmethodChecked(var_prelude, "AndPattern", [0]);
                  var call2787 = callmethodChecked(call2786, "new", [2], call2784, call2785);
                  block2781.pattern = call2787;
                  setLineNumber(780);    // compilenode call
                  var call2788 = callmethodChecked(var_prelude, "BlockLiteral", [0]);
                  block2781.real = function(var_bl) {
                    setLineNumber(781);    // compilenode identifier
                    var call2789 = callmethodChecked(var_bl, "params", [0]);
                    var var_params = call2789;
                    var if2790 = GraceDone;
                    setLineNumber(782);    // compilenode identifier
                    var call2792 = callmethodChecked(var_params, "size", [0]);
                    var opresult2794 = callmethodChecked(call2792, ">", [1], new GraceNum(0));
                    if (Grace_isTrue(opresult2794)) {
                      setLineNumber(783);    // compilenode string
                      var string2795 = new GraceString("too many parameters for try block");
                      var call2796 = callmethodChecked(var_RequestError, "raise()with", [1, 1], string2795, var_bl);
                      if2790 = call2796;
                    }
                    return if2790;
                  };
                  cases2779.push(block2781);
                  setLineNumber(785);    // compilenode block
                  var block2797 = new GraceBlock(this, 785, 1);
                  setLineNumber(1);    // compilenode identifier
                  block2797.real = function(var___95____95__18) {
                    return GraceDone;
                  };
                  cases2779.push(block2797);
                  setLineNumber(780);    // compilematchcase
                  var matchres2779 = matchCase(call2780,cases2779,false);
                  setModuleName("staticTypes");
                  setLineNumber(787);    // compilenode identifier
                  var call2798 = callmethodChecked(var_req, "cases", [0]);
                  var block2799 = new GraceBlock(this, 787, 1);
                  setLineNumber(1);    // compilenode identifier
                  block2799.real = function(var_eachCase) {
                    setLineNumber(788);    // compilenode identifier
                    var cases2800 = [];
                    var block2801 = new GraceBlock(this, 788, 1);
                    setLineNumber(0);    // compilenode string
                    var string2802 = new GraceString("bl");
                    var call2803 = callmethodChecked(var_prelude, "VariablePattern", [0]);
                    var call2804 = callmethodChecked(call2803, "new", [1], string2802);
                    setLineNumber(788);    // compilenode call
                    var call2805 = callmethodChecked(var_prelude, "BlockLiteral", [0]);
                    setLineNumber(0);    // compilenode call
                    var call2806 = callmethodChecked(var_prelude, "AndPattern", [0]);
                    var call2807 = callmethodChecked(call2806, "new", [2], call2804, call2805);
                    block2801.pattern = call2807;
                    setLineNumber(788);    // compilenode call
                    var call2808 = callmethodChecked(var_prelude, "BlockLiteral", [0]);
                    block2801.real = function(var_bl) {
                      setLineNumber(789);    // compilenode identifier
                      var call2809 = callmethodChecked(var_bl, "params", [0]);
                      var var_params = call2809;
                      var if2810 = GraceDone;
                      setLineNumber(790);    // compilenode identifier
                      var call2812 = callmethodChecked(var_params, "size", [0]);
                      var opresult2814 = callmethodChecked(call2812, "\u2260", [1], new GraceNum(1));
                      if (Grace_isTrue(opresult2814)) {
                        var if2815 = GraceDone;
                        setLineNumber(791);    // compilenode identifier
                        var call2817 = callmethodChecked(var_params, "size", [0]);
                        var opresult2819 = callmethodChecked(call2817, "==", [1], new GraceNum(0));
                        if (Grace_isTrue(opresult2819)) {
                          setLineNumber(792);    // compilenode string
                          var string2820 = new GraceString("not enough");
                          if2815 = string2820;
                        } else {
                          var string2821 = new GraceString("too many");
                          if2815 = string2821;
                        }
                        var var_which = if2815;
                        setLineNumber(794);    // compilenode string
                        var string2822 = new GraceString(" parameters for catch block");
                        var string2825 = new GraceString("");
                        var opresult2827 = callmethodChecked(string2825, "++", [1], var_which);
                        var opresult2829 = callmethodChecked(opresult2827, "++", [1], string2822);
                        var call2830 = callmethodChecked(var_RequestError, "raise()with", [1, 1], opresult2829, var_bl);
                        if2810 = call2830;
                      }
                      return if2810;
                    };
                    cases2800.push(block2801);
                    setLineNumber(796);    // compilenode block
                    var block2831 = new GraceBlock(this, 796, 1);
                    setLineNumber(1);    // compilenode identifier
                    block2831.real = function(var___95____95__19) {
                      return GraceDone;
                    };
                    cases2800.push(block2831);
                    setLineNumber(788);    // compilematchcase
                    var matchres2800 = matchCase(var_eachCase,cases2800,false);
                    setModuleName("staticTypes");
                    return matchres2800;
                  };
                  var call2832 = callmethodChecked(var_prelude, "for()do", [1, 1], call2798, block2799);
                  var if2833 = GraceDone;
                  setLineNumber(799);    // compilenode identifier
                  var call2834 = callmethodChecked(var_req, "finally", [0]);
                  var opresult2837 = callmethodChecked(GraceFalse, "\u2260", [1], call2834);
                  if (Grace_isTrue(opresult2837)) {
                    setLineNumber(800);    // compilenode identifier
                    var call2839 = callmethodChecked(var_req, "finally", [0]);
                    var cases2838 = [];
                    var block2840 = new GraceBlock(this, 800, 1);
                    setLineNumber(0);    // compilenode string
                    var string2841 = new GraceString("bl");
                    var call2842 = callmethodChecked(var_prelude, "VariablePattern", [0]);
                    var call2843 = callmethodChecked(call2842, "new", [1], string2841);
                    setLineNumber(800);    // compilenode call
                    var call2844 = callmethodChecked(var_prelude, "BlockLiteral", [0]);
                    setLineNumber(0);    // compilenode call
                    var call2845 = callmethodChecked(var_prelude, "AndPattern", [0]);
                    var call2846 = callmethodChecked(call2845, "new", [2], call2843, call2844);
                    block2840.pattern = call2846;
                    setLineNumber(800);    // compilenode call
                    var call2847 = callmethodChecked(var_prelude, "BlockLiteral", [0]);
                    block2840.real = function(var_bl) {
                      setLineNumber(801);    // compilenode identifier
                      var call2848 = callmethodChecked(var_bl, "params", [0]);
                      var var_params = call2848;
                      var if2849 = GraceDone;
                      setLineNumber(802);    // compilenode identifier
                      var call2851 = callmethodChecked(var_params, "size", [0]);
                      var opresult2853 = callmethodChecked(call2851, ">", [1], new GraceNum(0));
                      if (Grace_isTrue(opresult2853)) {
                        setLineNumber(803);    // compilenode string
                        var string2854 = new GraceString("too many parameters to finally");
                        var call2855 = callmethodChecked(var_RequestError, "raise()with", [1, 1], string2854, var_bl);
                        if2849 = call2855;
                      }
                      return if2849;
                    };
                    cases2838.push(block2840);
                    setLineNumber(805);    // compilenode block
                    var block2856 = new GraceBlock(this, 805, 1);
                    setLineNumber(1);    // compilenode identifier
                    block2856.real = function(var___95____95__20) {
                      return GraceDone;
                    };
                    cases2838.push(block2856);
                    setLineNumber(800);    // compilematchcase
                    var matchres2838 = matchCase(call2839,cases2838,false);
                    setModuleName("staticTypes");
                    if2833 = matchres2838;
                  }
                  setLineNumber(808);    // compilenode identifier
                  var call2857 = callmethodChecked(var_objectType, "done", [0]);
                  return call2857;
                };
                var call2858 = callmethodChecked(var_prelude, "rule", [1], block2771);
                setLineNumber(814);    // compilenode string
                var string2859 = new GraceString("MethodError");
                var call2860 = callmethodChecked(var_TypeError, "refine", [1], string2859);
                var var_MethodError = call2860;
                setLineNumber(808);    // compilenode method
                var func2861 = function(argcv) {    // method MethodError
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  if (argcv[0] !== 0)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for MethodError"));
                  setModuleName("staticTypes");
                  // MethodError is a simple accessor - elide try ... catch
                  setLineNumber(814);    // compilenode identifier
                  return var_MethodError;
                };
                func2861.paramCounts = [0];
                this.methods["MethodError"] = func2861;
                func2861.definitionLine = 808;
                func2861.definitionModule = "staticTypes";
                this.methods["MethodError"].debug = "def";
                setLineNumber(816);    // compilenode block
                var block2862 = new GraceBlock(this, 816, 1);
                setLineNumber(0);    // compilenode string
                var string2863 = new GraceString("meth");
                var call2864 = callmethodChecked(var_prelude, "VariablePattern", [0]);
                var call2865 = callmethodChecked(call2864, "new", [1], string2863);
                setLineNumber(816);    // compilenode call
                var call2866 = callmethodChecked(var_prelude, "Method", [0]);
                setLineNumber(0);    // compilenode call
                var call2867 = callmethodChecked(var_prelude, "AndPattern", [0]);
                var call2868 = callmethodChecked(call2867, "new", [2], call2865, call2866);
                block2862.pattern = call2868;
                setLineNumber(816);    // compilenode call
                var call2869 = callmethodChecked(var_prelude, "Method", [0]);
                block2862.real = function(var_meth) {
                  setLineNumber(817);    // compilenode identifier
                  var call2870 = callmethodChecked(var_meth, "value", [0]);
                  var call2871 = callmethodChecked(call2870, "value", [0]);
                  var var_name = call2871;
                  setLineNumber(818);    // compilenode identifier
                  var call2872 = callmethodChecked(var_aMethodType, "fromNode", [1], var_meth);
                  var var_mType = call2872;
                  setLineNumber(819);    // compilenode identifier
                  var call2873 = callmethodChecked(var_mType, "returnType", [0]);
                  var var_returnType = call2873;
                  setLineNumber(821);    // compilenode block
                  var block2874 = new GraceBlock(this, 821, 0);
                  block2874.real = function() {
                    setLineNumber(822);    // compilenode identifier
                    var call2875 = callmethodChecked(var_meth, "signature", [0]);
                    var block2876 = new GraceBlock(this, 822, 1);
                    setLineNumber(1);    // compilenode identifier
                    block2876.real = function(var_part) {
                      setLineNumber(823);    // compilenode identifier
                      var call2877 = callmethodChecked(var_part, "params", [0]);
                      var block2878 = new GraceBlock(this, 823, 1);
                      setLineNumber(1);    // compilenode identifier
                      block2878.real = function(var_param) {
                        setLineNumber(824);    // compilenode identifier
                        var call2879 = callmethodChecked(var_param, "value", [0]);
                        setLineNumber(825);    // compilenode identifier
                        var call2880 = callmethodChecked(var_param, "dtype", [0]);
                        var call2881 = callmethodChecked(var_objectType, "fromDType", [1], call2880);
                        setLineNumber(824);    // compilenode call
                        var call2882 = callmethodChecked(var_prelude, "scope", [0]);
                        var call2883 = callmethodChecked(call2882, "variables", [0]);
                        var call2884 = callmethodChecked(call2883, "at()put", [1, 1], call2879, call2881);
                        return call2884;
                      };
                      var call2885 = callmethodChecked(var_prelude, "for()do", [1, 1], call2877, block2878);
                      return call2885;
                    };
                    var call2886 = callmethodChecked(var_prelude, "for()do", [1, 1], call2875, block2876);
                    setLineNumber(829);    // compilenode identifier
                    var call2887 = callmethodChecked(var_meth, "body", [0]);
                    onSelf = true;
                    var call2888 = callmethodChecked(this, "collectTypes", [1], call2887);
                    setLineNumber(831);    // compilenode identifier
                    var call2889 = callmethodChecked(var_meth, "body", [0]);
                    var block2890 = new GraceBlock(this, 831, 1);
                    setLineNumber(1);    // compilenode identifier
                    block2890.real = function(var_stmt) {
                      setLineNumber(832);    // compilenode identifier
                      var call2891 = callmethodChecked(var_prelude, "checkTypes", [1], var_stmt);
                      setLineNumber(834);    // compilenode object
                      var obj2892 = Grace_allocObject(null, "object");
                      obj2892.definitionModule = "staticTypes";
                      obj2892.definitionLine = 834;
                      obj2892.outer = this;
                      var reader_staticTypes_outer2893 = function() {
                        return this.outer;
                      };
                      obj2892.methods["outer"] = reader_staticTypes_outer2893;
                      var obj_init_2892 = function() {
                        var origSuperDepth = superDepth;
                        superDepth = obj2892;
                        var func2894 = function(argcv) {    // method visitReturn(1)
                          var returnTarget = invocationCount;
                          invocationCount++;
                          var curarg = 1;
                          var var_ret = arguments[curarg];
                          curarg++;
                          if (argcv[0] !== 1)
                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitReturn(1)"));
                          setModuleName("staticTypes");
                          setLineNumber(838);    // compilenode identifier
                          var call2895 = callmethodChecked(var_ret, "value", [0]);
                          var call2896 = callmethodChecked(superDepth, "outer", [0]);
                          onOuter = true;
                          onSelf = true;
                          var call2897 = callmethodChecked(call2896, "check()matches()inMethod", [1, 1, 1], call2895, var_returnType, var_name);
                          setLineNumber(839);    // compilenode identifier
                          return GraceFalse;
                        };
                        func2894.paramCounts = [1];
                        obj2892.methods["visitReturn"] = func2894;
                        func2894.definitionLine = 837;
                        func2894.definitionModule = "staticTypes";
                        var func2898 = function(argcv) {    // method visitMethod(1)
                          var returnTarget = invocationCount;
                          invocationCount++;
                          var curarg = 1;
                          var var_node = arguments[curarg];
                          curarg++;
                          if (argcv[0] !== 1)
                            throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for visitMethod(1)"));
                          setModuleName("staticTypes");
                          // visitMethod(1) is a simple accessor - elide try ... catch
                          setLineNumber(843);    // compilenode identifier
                          return GraceFalse;
                        };
                        func2898.paramCounts = [1];
                        obj2892.methods["visitMethod"] = func2898;
                        func2898.definitionLine = 842;
                        func2898.definitionModule = "staticTypes";
                        setLineNumber(835);    // compilenode identifier
                        var call2899 = callmethodChecked(var_ast, "baseVisitor()object", [0, 1], this);
                        obj2892.superobj = call2899;
                        if (call2899.data) obj2892.data = call2899.data;
                        if (call2899.hasOwnProperty('_value'))
                            obj2892._value = call2899._value;
                        superDepth = origSuperDepth;
                      };
                      obj_init_2892.apply(obj2892, []);
                      setLineNumber(834);    // compilenode identifier
                      var call2900 = callmethodChecked(var_stmt, "accept", [1], obj2892);
                      return call2900;
                    };
                    var call2901 = callmethodChecked(var_prelude, "for()do", [1, 1], call2889, block2890);
                    var if2902 = GraceDone;
                    setLineNumber(848);    // compilenode identifier
                    var call2904 = callmethodChecked(var_meth, "body", [0]);
                    var call2905 = callmethodChecked(call2904, "size", [0]);
                    var opresult2907 = callmethodChecked(call2905, "==", [1], new GraceNum(0));
                    if (Grace_isTrue(opresult2907)) {
                      var if2908 = GraceDone;
                      setLineNumber(849);    // compilenode identifier
                      var call2909 = callmethodChecked(var_objectType, "done", [0]);
                      var call2910 = callmethodChecked(call2909, "isSubtypeOf", [1], var_returnType);
                      var call2911 = callmethodChecked(call2910, "not", [0]);
                      if (Grace_isTrue(call2911)) {
                        setLineNumber(851);    // compilenode string
                        var string2912 = new GraceString("', but has no body");
                        var string2915 = new GraceString("result of type '");
                        var opresult2917 = callmethodChecked(string2915, "++", [1], var_returnType);
                        var opresult2919 = callmethodChecked(opresult2917, "++", [1], string2912);
                        setLineNumber(850);    // compilenode string
                        var string2921 = new GraceString("` declares a ");
                        var string2924 = new GraceString("method `");
                        var opresult2926 = callmethodChecked(string2924, "++", [1], var_name);
                        var opresult2928 = callmethodChecked(opresult2926, "++", [1], string2921);
                        var opresult2930 = callmethodChecked(opresult2928, "++", [1], opresult2919);
                        var call2931 = callmethodChecked(var_MethodError, "raise()with", [1, 1], opresult2930, var_meth);
                        if2908 = call2931;
                      }
                      if2902 = if2908;
                    } else {
                      setLineNumber(854);    // compilenode identifier
                      var call2932 = callmethodChecked(var_meth, "body", [0]);
                      var call2933 = callmethodChecked(call2932, "last", [0]);
                      var var_lastNode = call2933;
                      var if2934 = GraceDone;
                      setLineNumber(855);    // compilenode call
                      var call2935 = callmethodChecked(var_prelude, "Return", [0]);
                      var call2936 = callmethodChecked(call2935, "match", [1], var_lastNode);
                      var call2937 = callmethodChecked(call2936, "not", [0]);
                      if (Grace_isTrue(call2937)) {
                        setLineNumber(856);    // compilenode identifier
                        var call2938 = callmethodChecked(var_prelude, "typeOf", [1], var_lastNode);
                        var var_lastType = call2938;
                        var if2939 = GraceDone;
                        setLineNumber(857);    // compilenode identifier
                        var call2940 = callmethodChecked(var_lastType, "isSubtypeOf", [1], var_returnType);
                        var call2941 = callmethodChecked(call2940, "not", [0]);
                        if (Grace_isTrue(call2941)) {
                          setLineNumber(860);    // compilenode string
                          var string2942 = new GraceString("`");
                          var string2945 = new GraceString("expression of type `");
                          var opresult2947 = callmethodChecked(string2945, "++", [1], var_lastType);
                          var opresult2949 = callmethodChecked(opresult2947, "++", [1], string2942);
                          setLineNumber(859);    // compilenode string
                          var string2951 = new GraceString("`, but returns an ");
                          var string2954 = new GraceString("result of type `");
                          var opresult2956 = callmethodChecked(string2954, "++", [1], var_returnType);
                          var opresult2958 = callmethodChecked(opresult2956, "++", [1], string2951);
                          setLineNumber(858);    // compilenode string
                          var string2960 = new GraceString("` declares a ");
                          var string2963 = new GraceString("method `");
                          var opresult2965 = callmethodChecked(string2963, "++", [1], var_name);
                          var opresult2967 = callmethodChecked(opresult2965, "++", [1], string2960);
                          var opresult2969 = callmethodChecked(opresult2967, "++", [1], opresult2958);
                          var opresult2971 = callmethodChecked(opresult2969, "++", [1], opresult2949);
                          var call2972 = callmethodChecked(var_MethodError, "raise()with", [1, 1], opresult2971, var_lastNode);
                          if2939 = call2972;
                        }
                        if2934 = if2939;
                      }
                      if2902 = if2934;
                    }
                    return if2902;
                  };
                  setLineNumber(821);    // compilenode call
                  var call2973 = callmethodChecked(var_prelude, "scope", [0]);
                  var call2974 = callmethodChecked(call2973, "enter", [1], block2874);
                  var if2975 = GraceDone;
                  setLineNumber(866);    // compilenode identifier
                  onSelf = true;
                  var call2976 = callmethodChecked(this, "isMember", [1], var_mType);
                  if (Grace_isTrue(call2976)) {
                    setLineNumber(867);    // compilenode call
                    var call2977 = callmethodChecked(var_prelude, "scope", [0]);
                    var call2978 = callmethodChecked(call2977, "variables", [0]);
                    var call2979 = callmethodChecked(call2978, "at()put", [1, 1], var_name, var_returnType);
                    if2975 = call2979;
                  }
                  setLineNumber(870);    // compilenode call
                  var call2980 = callmethodChecked(var_prelude, "scope", [0]);
                  var call2981 = callmethodChecked(call2980, "methods", [0]);
                  var call2982 = callmethodChecked(call2981, "at()put", [1, 1], var_name, var_mType);
                  return call2982;
                };
                var call2983 = callmethodChecked(var_prelude, "rule", [1], block2862);
                setLineNumber(886);    // compilenode string
                var string2984 = new GraceString("ClassError");
                var call2985 = callmethodChecked(var_TypeError, "refine", [1], string2984);
                var var_ClassError = call2985;
                setLineNumber(870);    // compilenode method
                var func2986 = function(argcv) {    // method ClassError
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  if (argcv[0] !== 0)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for ClassError"));
                  setModuleName("staticTypes");
                  // ClassError is a simple accessor - elide try ... catch
                  setLineNumber(886);    // compilenode identifier
                  return var_ClassError;
                };
                func2986.paramCounts = [0];
                this.methods["ClassError"] = func2986;
                func2986.definitionLine = 870;
                func2986.definitionModule = "staticTypes";
                this.methods["ClassError"].debug = "def";
                setLineNumber(888);    // compilenode block
                var block2987 = new GraceBlock(this, 888, 1);
                setLineNumber(0);    // compilenode string
                var string2988 = new GraceString("cls");
                var call2989 = callmethodChecked(var_prelude, "VariablePattern", [0]);
                var call2990 = callmethodChecked(call2989, "new", [1], string2988);
                setLineNumber(888);    // compilenode call
                var call2991 = callmethodChecked(var_prelude, "Class", [0]);
                setLineNumber(0);    // compilenode call
                var call2992 = callmethodChecked(var_prelude, "AndPattern", [0]);
                var call2993 = callmethodChecked(call2992, "new", [2], call2990, call2991);
                block2987.pattern = call2993;
                setLineNumber(888);    // compilenode call
                var call2994 = callmethodChecked(var_prelude, "Class", [0]);
                block2987.real = function(var_cls) {
                  setLineNumber(889);    // compilenode identifier
                  var call2995 = callmethodChecked(var_cls, "name", [0]);
                  var call2996 = callmethodChecked(call2995, "value", [0]);
                  var var_name = call2996;
                  setLineNumber(890);    // compilenode identifier
                  var call2997 = callmethodChecked(var_cls, "dtype", [0]);
                  var call2998 = callmethodChecked(var_objectType, "fromDType", [1], call2997);
                  var var_dType = call2998;
                  setLineNumber(891);    // compilenode block
                  var block2999 = new GraceBlock(this, 891, 0);
                  block2999.real = function() {
                    setLineNumber(892);    // compilenode identifier
                    var call3000 = callmethodChecked(var_cls, "signature", [0]);
                    var block3001 = new GraceBlock(this, 892, 1);
                    setLineNumber(1);    // compilenode identifier
                    block3001.real = function(var_part) {
                      setLineNumber(893);    // compilenode identifier
                      var call3002 = callmethodChecked(var_part, "params", [0]);
                      var block3003 = new GraceBlock(this, 893, 1);
                      setLineNumber(1);    // compilenode identifier
                      block3003.real = function(var_param) {
                        setLineNumber(894);    // compilenode identifier
                        var call3004 = callmethodChecked(var_param, "value", [0]);
                        setLineNumber(895);    // compilenode identifier
                        var call3005 = callmethodChecked(var_param, "dtype", [0]);
                        var call3006 = callmethodChecked(var_objectType, "fromDType", [1], call3005);
                        setLineNumber(894);    // compilenode call
                        var call3007 = callmethodChecked(var_prelude, "scope", [0]);
                        var call3008 = callmethodChecked(call3007, "variables", [0]);
                        var call3009 = callmethodChecked(call3008, "at()put", [1, 1], call3004, call3006);
                        return call3009;
                      };
                      var call3010 = callmethodChecked(var_prelude, "for()do", [1, 1], call3002, block3003);
                      return call3010;
                    };
                    var call3011 = callmethodChecked(var_prelude, "for()do", [1, 1], call3000, block3001);
                    setLineNumber(899);    // compilenode identifier
                    var call3012 = callmethodChecked(var_cls, "value", [0]);
                    onSelf = true;
                    var call3013 = callmethodChecked(this, "processBody", [1], call3012);
                    var var_aType = call3013;
                    var if3014 = GraceDone;
                    setLineNumber(900);    // compilenode identifier
                    var call3015 = callmethodChecked(var_aType, "isUnknown", [0]);
                    if (Grace_isTrue(call3015)) {
                      setLineNumber(901);    // compilenode identifier
                      var call3016 = callmethodChecked(var_objectType, "unknown", [0]);
                      if3014 = call3016;
                    } else {
                      var if3017 = GraceDone;
                      setLineNumber(903);    // compilenode identifier
                      var call3018 = callmethodChecked(var_aType, "isSubtypeOf", [1], var_dType);
                      var call3019 = callmethodChecked(call3018, "not", [0]);
                      if (Grace_isTrue(call3019)) {
                        setLineNumber(906);    // compilenode string
                        var string3020 = new GraceString("`");
                        var string3023 = new GraceString("`");
                        var opresult3025 = callmethodChecked(string3023, "++", [1], var_aType);
                        var opresult3027 = callmethodChecked(opresult3025, "++", [1], string3020);
                        setLineNumber(905);    // compilenode string
                        var string3029 = new GraceString("`, but constructs an object of type ");
                        var string3032 = new GraceString("of type `");
                        var opresult3034 = callmethodChecked(string3032, "++", [1], var_dType);
                        var opresult3036 = callmethodChecked(opresult3034, "++", [1], string3029);
                        setLineNumber(904);    // compilenode string
                        var string3038 = new GraceString("` declares a result ");
                        var string3041 = new GraceString("class `");
                        var opresult3043 = callmethodChecked(string3041, "++", [1], var_name);
                        var opresult3045 = callmethodChecked(opresult3043, "++", [1], string3038);
                        var opresult3047 = callmethodChecked(opresult3045, "++", [1], opresult3036);
                        var opresult3049 = callmethodChecked(opresult3047, "++", [1], opresult3027);
                        var call3050 = callmethodChecked(var_ClassError, "raise()with", [1, 1], opresult3049, var_cls);
                        if3017 = call3050;
                      }
                      setLineNumber(909);    // compilenode identifier
                      if3014 = var_aType;
                    }
                    return if3014;
                  };
                  setLineNumber(891);    // compilenode call
                  var call3051 = callmethodChecked(var_prelude, "scope", [0]);
                  var call3052 = callmethodChecked(call3051, "enter", [1], block2999);
                  var var_cType = call3052;
                  setLineNumber(914);    // compilenode identifier
                  var call3054 = callmethodChecked(var_aMethodType, "fromNode", [1], var_cls);
                  var array3053 = new PrimitiveGraceList([call3054]);
                  var call3055 = callmethodChecked(var_objectType, "fromMethods", [1], array3053);
                  setLineNumber(913);    // compilenode call
                  var call3056 = callmethodChecked(var_prelude, "scope", [0]);
                  var call3057 = callmethodChecked(call3056, "variables", [0]);
                  var call3058 = callmethodChecked(call3057, "at()put", [1, 1], var_name, call3055);
                  var if3059 = GraceDone;
                  setLineNumber(916);    // compilenode identifier
                  var call3060 = callmethodChecked(var_dType, "isUnknown", [0]);
                  if (Grace_isTrue(call3060)) {
                    setLineNumber(918);    // compilenode identifier
                    if3059 = var_cType;
                  } else {
                    setLineNumber(920);    // compilenode identifier
                    if3059 = var_dType;
                  }
                  return if3059;
                };
                var call3061 = callmethodChecked(var_prelude, "rule", [1], block2987);
                setLineNumber(927);    // compilenode string
                var string3062 = new GraceString("DefError");
                var call3063 = callmethodChecked(var_TypeError, "refine", [1], string3062);
                var var_DefError = call3063;
                setLineNumber(916);    // compilenode method
                var func3064 = function(argcv) {    // method DefError
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  if (argcv[0] !== 0)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for DefError"));
                  setModuleName("staticTypes");
                  // DefError is a simple accessor - elide try ... catch
                  setLineNumber(927);    // compilenode identifier
                  return var_DefError;
                };
                func3064.paramCounts = [0];
                this.methods["DefError"] = func3064;
                func3064.definitionLine = 916;
                func3064.definitionModule = "staticTypes";
                this.methods["DefError"].debug = "def";
                setLineNumber(929);    // compilenode block
                var block3065 = new GraceBlock(this, 929, 1);
                setLineNumber(0);    // compilenode string
                var string3066 = new GraceString("defd");
                var call3067 = callmethodChecked(var_prelude, "VariablePattern", [0]);
                var call3068 = callmethodChecked(call3067, "new", [1], string3066);
                setLineNumber(929);    // compilenode call
                var call3069 = callmethodChecked(var_prelude, "Var", [0]);
                var call3071 = callmethodChecked(var_prelude, "Def", [0]);
                var opresult3073 = callmethodChecked(call3071, "|", [1], call3069);
                setLineNumber(0);    // compilenode call
                var call3074 = callmethodChecked(var_prelude, "AndPattern", [0]);
                var call3075 = callmethodChecked(call3074, "new", [2], call3068, opresult3073);
                block3065.pattern = call3075;
                setLineNumber(929);    // compilenode call
                var call3076 = callmethodChecked(var_prelude, "Var", [0]);
                var call3078 = callmethodChecked(var_prelude, "Def", [0]);
                var opresult3080 = callmethodChecked(call3078, "|", [1], call3076);
                block3065.real = function(var_defd) {
                  setLineNumber(930);    // compilenode identifier
                  var call3081 = callmethodChecked(var_defd, "dtype", [0]);
                  var call3082 = callmethodChecked(var_objectType, "fromDType", [1], call3081);
                  var var_defType = call3082;
                  setLineNumber(932);    // compilenode identifier
                  var call3083 = callmethodChecked(var_defd, "value", [0]);
                  var var_value = call3083;
                  var if3084 = GraceDone;
                  setLineNumber(934);    // compilenode identifier
                  var opresult3087 = callmethodChecked(var_value, "\u2260", [1], GraceFalse);
                  if (Grace_isTrue(opresult3087)) {
                    setLineNumber(935);    // compilenode identifier
                    var call3088 = callmethodChecked(var_prelude, "typeOf", [1], var_value);
                    var var_vType = call3088;
                    var if3089 = GraceDone;
                    setLineNumber(937);    // compilenode string
                    var string3090 = new GraceString("defdec");
                    var call3092 = callmethodChecked(var_defd, "kind", [0]);
                    var opresult3094 = callmethodChecked(call3092, "==", [1], string3090);
                    var call3096 = callmethodChecked(var_defType, "isUnknown", [0]);
                    var opresult3098 = callmethodChecked(call3096, "&&", [1], opresult3094);
                    if (Grace_isTrue(opresult3098)) {
                      setLineNumber(938);    // compilenode identifier
                      var_defType = var_vType;
                      if3089 = GraceDone;
                    }
                    var if3099 = GraceDone;
                    setLineNumber(941);    // compilenode identifier
                    var call3100 = callmethodChecked(var_vType, "isSubtypeOf", [1], var_defType);
                    var call3101 = callmethodChecked(call3100, "not", [0]);
                    if (Grace_isTrue(call3101)) {
                      setLineNumber(944);    // compilenode string
                      var string3102 = new GraceString("`");
                      var string3105 = new GraceString("annotation `");
                      var opresult3107 = callmethodChecked(string3105, "++", [1], var_defType);
                      var opresult3109 = callmethodChecked(opresult3107, "++", [1], string3102);
                      setLineNumber(943);    // compilenode string
                      var string3111 = new GraceString(" ");
                      var call3113 = callmethodChecked(var_defd, "kind", [0]);
                      var string3115 = new GraceString("` does not satisfy the type of ");
                      var string3118 = new GraceString("`");
                      var opresult3120 = callmethodChecked(string3118, "++", [1], var_vType);
                      var opresult3122 = callmethodChecked(opresult3120, "++", [1], string3115);
                      var opresult3124 = callmethodChecked(opresult3122, "++", [1], call3113);
                      var opresult3126 = callmethodChecked(opresult3124, "++", [1], string3111);
                      setLineNumber(942);    // compilenode string
                      var string3128 = new GraceString("` of type ");
                      var call3130 = callmethodChecked(var_value, "toGrace", [1], new GraceNum(0));
                      var string3132 = new GraceString("the expression `");
                      var opresult3134 = callmethodChecked(string3132, "++", [1], call3130);
                      var opresult3136 = callmethodChecked(opresult3134, "++", [1], string3128);
                      var opresult3138 = callmethodChecked(opresult3136, "++", [1], opresult3126);
                      var opresult3140 = callmethodChecked(opresult3138, "++", [1], opresult3109);
                      var call3141 = callmethodChecked(var_DefError, "raise()with", [1, 1], opresult3140, var_value);
                      if3099 = call3141;
                    }
                    if3084 = if3099;
                  }
                  setLineNumber(948);    // compilenode identifier
                  var call3142 = callmethodChecked(var_defd, "name", [0]);
                  var call3143 = callmethodChecked(call3142, "value", [0]);
                  var var_name = call3143;
                  setLineNumber(949);    // compilenode call
                  var call3144 = callmethodChecked(var_prelude, "scope", [0]);
                  var call3145 = callmethodChecked(call3144, "variables", [0]);
                  var call3146 = callmethodChecked(call3145, "at()put", [1, 1], var_name, var_defType);
                  setLineNumber(951);    // compilenode identifier
                  var call3147 = callmethodChecked(var_defd, "annotations", [0]);
                  var block3148 = new GraceBlock(this, 951, 1);
                  setLineNumber(1);    // compilenode identifier
                  block3148.real = function(var_ann) {
                    var if3149 = GraceDone;
                    setLineNumber(952);    // compilenode string
                    var string3150 = new GraceString("public");
                    var call3152 = callmethodChecked(var_ann, "value", [0]);
                    var opresult3154 = callmethodChecked(call3152, "==", [1], string3150);
                    if (Grace_isTrue(opresult3154)) {
                      setLineNumber(953);    // compilenode identifier
                      var call3155 = callmethodChecked(var_aMethodType, "member()ofType", [1, 1], var_name, var_defType);
                      var call3156 = callmethodChecked(var_prelude, "scope", [0]);
                      var call3157 = callmethodChecked(call3156, "methods", [0]);
                      var call3158 = callmethodChecked(call3157, "at()put", [1, 1], var_name, call3155);
                      var if3159 = GraceDone;
                      setLineNumber(955);    // compilenode string
                      var string3160 = new GraceString("vardec");
                      var call3162 = callmethodChecked(var_defd, "kind", [0]);
                      var opresult3164 = callmethodChecked(call3162, "==", [1], string3160);
                      if (Grace_isTrue(opresult3164)) {
                        setLineNumber(956);    // compilenode string
                        var string3165 = new GraceString(":=");
                        var opresult3168 = callmethodChecked(var_name, "++", [1], string3165);
                        var var_name__39__ = opresult3168;
                        setLineNumber(957);    // compilenode identifier
                        var call3169 = callmethodChecked(var_aParam, "withName()ofType", [1, 1], var_name, var_defType);
                        var var_param = call3169;
                        setLineNumber(958);    // compilenode identifier
                        var array3171 = new PrimitiveGraceList([var_param]);
                        onSelf = true;
                        var call3172 = callmethodChecked(this, "mixPartNamed()parameters", [1, 1], var_name__39__, array3171);
                        var array3170 = new PrimitiveGraceList([call3172]);
                        var var_sig = array3170;
                        setLineNumber(961);    // compilenode identifier
                        var call3173 = callmethodChecked(var_objectType, "done", [0]);
                        var call3174 = callmethodChecked(var_aMethodType, "signature()returnType", [1, 1], var_sig, call3173);
                        setLineNumber(960);    // compilenode call
                        var call3175 = callmethodChecked(var_prelude, "scope", [0]);
                        var call3176 = callmethodChecked(call3175, "methods", [0]);
                        var call3177 = callmethodChecked(call3176, "at()put", [1, 1], var_name__39__, call3174);
                        if3159 = call3177;
                      }
                      setLineNumber(965);    // compilenode identifier
                      throw new ReturnException(var_done, returnTarget);
                    }
                    return if3149;
                  };
                  var call3178 = callmethodChecked(var_prelude, "for()do", [1, 1], call3147, block3148);
                  return call3178;
                };
                var call3179 = callmethodChecked(var_prelude, "rule", [1], block3065);
                setLineNumber(969);    // compilenode block
                var block3180 = new GraceBlock(this, 969, 1);
                setLineNumber(0);    // compilenode string
                var string3181 = new GraceString("bind");
                var call3182 = callmethodChecked(var_prelude, "VariablePattern", [0]);
                var call3183 = callmethodChecked(call3182, "new", [1], string3181);
                setLineNumber(969);    // compilenode call
                var call3184 = callmethodChecked(var_prelude, "Bind", [0]);
                setLineNumber(0);    // compilenode call
                var call3185 = callmethodChecked(var_prelude, "AndPattern", [0]);
                var call3186 = callmethodChecked(call3185, "new", [2], call3183, call3184);
                block3180.pattern = call3186;
                setLineNumber(969);    // compilenode call
                var call3187 = callmethodChecked(var_prelude, "Bind", [0]);
                block3180.real = function(var_bind) {
                  setLineNumber(970);    // compilenode identifier
                  var call3188 = callmethodChecked(var_bind, "dest", [0]);
                  var var_dest = call3188;
                  setLineNumber(971);    // compilenode identifier
                  var call3189 = callmethodChecked(var_prelude, "typeOf", [1], var_dest);
                  var var_dType = call3189;
                  setLineNumber(973);    // compilenode identifier
                  var call3190 = callmethodChecked(var_bind, "value", [0]);
                  var var_value = call3190;
                  setLineNumber(974);    // compilenode identifier
                  var call3191 = callmethodChecked(var_prelude, "typeOf", [1], var_value);
                  var var_vType = call3191;
                  var if3192 = GraceDone;
                  setLineNumber(976);    // compilenode identifier
                  var call3193 = callmethodChecked(var_vType, "isSubtypeOf", [1], var_dType);
                  var call3194 = callmethodChecked(call3193, "not", [0]);
                  if (Grace_isTrue(call3194)) {
                    setLineNumber(979);    // compilenode string
                    var string3195 = new GraceString("`");
                    var call3197 = callmethodChecked(var_dest, "toGrace", [1], new GraceNum(0));
                    var string3199 = new GraceString("`");
                    var opresult3201 = callmethodChecked(string3199, "++", [1], call3197);
                    var opresult3203 = callmethodChecked(opresult3201, "++", [1], string3195);
                    setLineNumber(978);    // compilenode string
                    var string3205 = new GraceString("` of ");
                    var string3208 = new GraceString("` does not satisfy the type `");
                    var string3211 = new GraceString("`");
                    var opresult3213 = callmethodChecked(string3211, "++", [1], var_vType);
                    var opresult3215 = callmethodChecked(opresult3213, "++", [1], string3208);
                    var opresult3217 = callmethodChecked(opresult3215, "++", [1], var_dType);
                    var opresult3219 = callmethodChecked(opresult3217, "++", [1], string3205);
                    setLineNumber(977);    // compilenode string
                    var string3221 = new GraceString("` of type ");
                    var call3223 = callmethodChecked(var_value, "toGrace", [1], new GraceNum(0));
                    var string3225 = new GraceString("the expression `");
                    var opresult3227 = callmethodChecked(string3225, "++", [1], call3223);
                    var opresult3229 = callmethodChecked(opresult3227, "++", [1], string3221);
                    var opresult3231 = callmethodChecked(opresult3229, "++", [1], opresult3219);
                    var opresult3233 = callmethodChecked(opresult3231, "++", [1], opresult3203);
                    var call3234 = callmethodChecked(var_DefError, "raise()with", [1, 1], opresult3233, var_value);
                    if3192 = call3234;
                  }
                  return if3192;
                };
                var call3235 = callmethodChecked(var_prelude, "rule", [1], block3180);
                setLineNumber(986);    // compilenode block
                var block3236 = new GraceBlock(this, 986, 1);
                setLineNumber(0);    // compilenode string
                var string3237 = new GraceString("imp");
                var call3238 = callmethodChecked(var_prelude, "VariablePattern", [0]);
                var call3239 = callmethodChecked(call3238, "new", [1], string3237);
                setLineNumber(986);    // compilenode call
                var call3240 = callmethodChecked(var_prelude, "Import", [0]);
                setLineNumber(0);    // compilenode call
                var call3241 = callmethodChecked(var_prelude, "AndPattern", [0]);
                var call3242 = callmethodChecked(call3241, "new", [2], call3239, call3240);
                block3236.pattern = call3242;
                setLineNumber(986);    // compilenode call
                var call3243 = callmethodChecked(var_prelude, "Import", [0]);
                block3236.real = function(var_imp) {
                  setLineNumber(987);    // compilenode identifier
                  var call3244 = callmethodChecked(var_imp, "nameString", [0]);
                  var call3245 = callmethodChecked(var_objectType, "unknown", [0]);
                  var call3246 = callmethodChecked(var_prelude, "scope", [0]);
                  var call3247 = callmethodChecked(call3246, "variables", [0]);
                  var call3248 = callmethodChecked(call3247, "at()put", [1, 1], call3244, call3245);
                  return call3248;
                };
                var call3249 = callmethodChecked(var_prelude, "rule", [1], block3236);
                setLineNumber(993);    // compilenode block
                var block3250 = new GraceBlock(this, 993, 1);
                setLineNumber(0);    // compilenode string
                var string3251 = new GraceString("block");
                var call3252 = callmethodChecked(var_prelude, "VariablePattern", [0]);
                var call3253 = callmethodChecked(call3252, "new", [1], string3251);
                setLineNumber(993);    // compilenode call
                var call3254 = callmethodChecked(var_prelude, "BlockLiteral", [0]);
                setLineNumber(0);    // compilenode call
                var call3255 = callmethodChecked(var_prelude, "AndPattern", [0]);
                var call3256 = callmethodChecked(call3255, "new", [2], call3253, call3254);
                block3250.pattern = call3256;
                setLineNumber(993);    // compilenode call
                var call3257 = callmethodChecked(var_prelude, "BlockLiteral", [0]);
                block3250.real = function(var_block) {
                  setLineNumber(994);    // compilenode identifier
                  var call3258 = callmethodChecked(var_block, "body", [0]);
                  var var_body = call3258;
                  setLineNumber(996);    // compilenode block
                  var block3259 = new GraceBlock(this, 996, 0);
                  block3259.real = function() {
                    setLineNumber(997);    // compilenode identifier
                    var call3260 = callmethodChecked(var_block, "params", [0]);
                    var block3261 = new GraceBlock(this, 997, 1);
                    setLineNumber(1);    // compilenode identifier
                    block3261.real = function(var_param) {
                      setLineNumber(998);    // compilenode identifier
                      var call3262 = callmethodChecked(var_param, "value", [0]);
                      setLineNumber(999);    // compilenode identifier
                      var call3263 = callmethodChecked(var_param, "dtype", [0]);
                      var call3264 = callmethodChecked(var_objectType, "fromDType", [1], call3263);
                      setLineNumber(998);    // compilenode call
                      var call3265 = callmethodChecked(var_prelude, "scope", [0]);
                      var call3266 = callmethodChecked(call3265, "variables", [0]);
                      var call3267 = callmethodChecked(call3266, "at()put", [1, 1], call3262, call3264);
                      return call3267;
                    };
                    var call3268 = callmethodChecked(var_prelude, "for()do", [1, 1], call3260, block3261);
                    setLineNumber(1002);    // compilenode identifier
                    onSelf = true;
                    var call3269 = callmethodChecked(this, "collectTypes", [1], var_body);
                    setLineNumber(1004);    // compilenode block
                    var block3270 = new GraceBlock(this, 1004, 1);
                    setLineNumber(1);    // compilenode identifier
                    block3270.real = function(var_stmt) {
                      setLineNumber(1005);    // compilenode identifier
                      var call3271 = callmethodChecked(var_prelude, "checkTypes", [1], var_stmt);
                      return call3271;
                    };
                    var call3272 = callmethodChecked(var_prelude, "for()do", [1, 1], var_body, block3270);
                    return call3272;
                  };
                  setLineNumber(996);    // compilenode call
                  var call3273 = callmethodChecked(var_prelude, "scope", [0]);
                  var call3274 = callmethodChecked(call3273, "enter", [1], block3259);
                  setLineNumber(1009);    // compilenode array
                  var array3275 = new PrimitiveGraceList([]);
                  var var_parameters = array3275;
                  setLineNumber(1010);    // compilenode identifier
                  var call3276 = callmethodChecked(var_block, "params", [0]);
                  var block3277 = new GraceBlock(this, 1010, 1);
                  setLineNumber(1);    // compilenode identifier
                  block3277.real = function(var_param) {
                    setLineNumber(1011);    // compilenode identifier
                    var call3278 = callmethodChecked(var_param, "value", [0]);
                    setLineNumber(1012);    // compilenode identifier
                    var call3279 = callmethodChecked(var_param, "dtype", [0]);
                    var call3280 = callmethodChecked(var_objectType, "fromDType", [1], call3279);
                    setLineNumber(1011);    // compilenode identifier
                    var call3281 = callmethodChecked(var_aParam, "withName()ofType", [1, 1], call3278, call3280);
                    var call3282 = callmethodChecked(var_parameters, "push", [1], call3281);
                    return call3282;
                  };
                  var call3283 = callmethodChecked(var_prelude, "for()do", [1, 1], call3276, block3277);
                  setLineNumber(1016);    // compilenode identifier
                  var call3284 = callmethodChecked(var_objectType, "fromBlockBody", [1], var_body);
                  setLineNumber(1015);    // compilenode identifier
                  var call3285 = callmethodChecked(var_objectType, "blockTaking()returning", [1, 1], var_parameters, call3284);
                  return call3285;
                };
                var call3286 = callmethodChecked(var_prelude, "rule", [1], block3250);
                setLineNumber(1022);    // compilenode block
                var block3287 = new GraceBlock(this, 1022, 1);
                setLineNumber(1023);    // compilenode string
                var string3288 = new GraceString("ident");
                var call3289 = callmethodChecked(var_prelude, "VariablePattern", [0]);
                var call3290 = callmethodChecked(call3289, "new", [1], string3288);
                setLineNumber(1022);    // compilenode call
                var call3291 = callmethodChecked(var_prelude, "Identifier", [0]);
                setLineNumber(1023);    // compilenode call
                var call3292 = callmethodChecked(var_prelude, "AndPattern", [0]);
                var call3293 = callmethodChecked(call3292, "new", [2], call3290, call3291);
                block3287.pattern = call3293;
                setLineNumber(1022);    // compilenode call
                var call3294 = callmethodChecked(var_prelude, "Identifier", [0]);
                block3287.real = function(var_ident) {
                  setLineNumber(1023);    // compilenode identifier
                  var call3296 = callmethodChecked(var_ident, "value", [0]);
                  var cases3295 = [];
                  var block3297 = new GraceBlock(this, 1023, 0);
                  var string3298 = new GraceString("outer");
                  block3297.pattern = string3298;
                  block3297.real = function() {
                    setLineNumber(1024);    // compilenode call
                    var call3299 = callmethodChecked(var_prelude, "scope", [0]);
                    var call3300 = callmethodChecked(call3299, "size", [0]);
                    onSelf = true;
                    var call3301 = callmethodChecked(this, "outerAt", [1], call3300);
                    return call3301;
                  };
                  cases3295.push(block3297);
                  setLineNumber(1025);    // compilenode block
                  var block3302 = new GraceBlock(this, 1025, 1);
                  setLineNumber(1);    // compilenode identifier
                  block3302.real = function(var___95____95__21) {
                    setLineNumber(1026);    // compilenode identifier
                    var call3303 = callmethodChecked(var_ident, "value", [0]);
                    var block3304 = new GraceBlock(this, 1026, 0);
                    block3304.real = function() {
                      var call3305 = callmethodChecked(var_objectType, "unknown", [0]);
                      return call3305;
                    };
                    var call3306 = callmethodChecked(var_prelude, "scope", [0]);
                    var call3307 = callmethodChecked(call3306, "variables", [0]);
                    var call3308 = callmethodChecked(call3307, "find()butIfMissing", [1, 1], call3303, block3304);
                    return call3308;
                  };
                  cases3295.push(block3302);
                  setLineNumber(1023);    // compilematchcase
                  var matchres3295 = matchCase(call3296,cases3295,false);
                  setModuleName("staticTypes");
                  return matchres3295;
                };
                var call3309 = callmethodChecked(var_prelude, "rule", [1], block3287);
                setLineNumber(1141);    // compilenode string
                var string3310 = new GraceString("TypeDeclarationError");
                var call3311 = callmethodChecked(var_TypeError, "refine", [1], string3310);
                var var_TypeDeclarationError = call3311;
                setLineNumber(1026);    // compilenode method
                var func3312 = function(argcv) {    // method TypeDeclarationError
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  if (argcv[0] !== 0)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for TypeDeclarationError"));
                  setModuleName("staticTypes");
                  // TypeDeclarationError is a simple accessor - elide try ... catch
                  setLineNumber(1141);    // compilenode identifier
                  return var_TypeDeclarationError;
                };
                func3312.paramCounts = [0];
                this.methods["TypeDeclarationError"] = func3312;
                func3312.definitionLine = 1026;
                func3312.definitionModule = "staticTypes";
                this.methods["TypeDeclarationError"].debug = "def";
                setLineNumber(1236);    // compilenode object
                var obj3313 = Grace_allocObject(GraceObject, "thisDialect");
                obj3313.definitionModule = "staticTypes";
                obj3313.definitionLine = 1236;
                obj3313.outer = this;
                var reader_staticTypes_outer3314 = function() {
                  return this.outer;
                };
                obj3313.methods["outer"] = reader_staticTypes_outer3314;
                var obj_init_3313 = function() {
                  var origSuperDepth = superDepth;
                  superDepth = obj3313;
                  var func3315 = function(argcv) {    // method parseChecker(1)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_moduleObj = arguments[curarg];
                    curarg++;
                    if (argcv[0] !== 1)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for parseChecker(1)"));
                    setModuleName("staticTypes");
                    setLineNumber(1237);    // compilenode identifier
                    var call3316 = callmethodChecked(var_prelude, "check", [1], var_moduleObj);
                    return call3316;
                  };
                  func3315.paramCounts = [1];
                  obj3313.methods["parseChecker"] = func3315;
                  func3315.definitionLine = 1237;
                  func3315.definitionModule = "staticTypes";
                  var func3317 = function(argcv) {    // method astChecker(1)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_moduleObj = arguments[curarg];
                    curarg++;
                    if (argcv[0] !== 1)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for astChecker(1)"));
                    setModuleName("staticTypes");
                    setLineNumber(1238);    // compilenode identifier
                    var call3318 = callmethodChecked(var_prelude, "check", [1], var_moduleObj);
                    return call3318;
                  };
                  func3317.paramCounts = [1];
                  obj3313.methods["astChecker"] = func3317;
                  func3317.definitionLine = 1238;
                  func3317.definitionModule = "staticTypes";
                  var func3319 = function(argcv) {    // method atStart
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    if (argcv[0] !== 0)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for atStart"));
                    setModuleName("staticTypes");
                    setLineNumber(1239);    // compilenode string
                    var string3320 = new GraceString("module start");
                    var call3321 = Grace_print(string3320);
                    return call3321;
                  };
                  func3319.paramCounts = [0];
                  obj3313.methods["atStart"] = func3319;
                  func3319.definitionLine = 1239;
                  func3319.definitionModule = "staticTypes";
                  var func3322 = function(argcv) {    // method atEnd
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    if (argcv[0] !== 0)
                      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for atEnd"));
                    setModuleName("staticTypes");
                    setLineNumber(1240);    // compilenode string
                    var string3323 = new GraceString("module end");
                    var call3324 = Grace_print(string3323);
                    return call3324;
                  };
                  func3322.paramCounts = [0];
                  obj3313.methods["atEnd"] = func3322;
                  func3322.definitionLine = 1240;
                  func3322.definitionModule = "staticTypes";
                  superDepth = origSuperDepth;
                };
                obj_init_3313.apply(obj3313, []);
                var var_thisDialect = obj3313;
                setLineNumber(1026);    // compilenode method
                var func3325 = function(argcv) {    // method thisDialect
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  if (argcv[0] !== 0)
                    throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for thisDialect"));
                  setModuleName("staticTypes");
                  // thisDialect is a simple accessor - elide try ... catch
                  setLineNumber(1236);    // compilenode identifier
                  return var_thisDialect;
                };
                func3325.paramCounts = [0];
                this.methods["thisDialect"] = func3325;
                func3325.definitionLine = 1026;
                func3325.definitionModule = "staticTypes";
                this.methods["thisDialect"].debug = "def";
                return this;
              }
              gracecode_staticTypes.imports = ['ast', 'dialect', 'util'];
              if (typeof gctCache !== "undefined")
                gctCache['staticTypes'] = "classes:\n aMethodType\n aParam\n objectType\nconfidential:\n addVar()ofType\n check()against\n check()matches()inMethod\n collectTypes\n continue'\n find()atScope\n isMember\n isPublic\n outerAt\n processBody\nconstructors-of:aMethodType:\n signature()returnType\nconstructors-of:aParam:\n withName()ofType\nconstructors-of:objectType:\n fromMethods\n fromMethods()withName\ndialect:\n dialect\nfresh-methods:\n mixPartNamed()parameters\nfresh:mixPartNamed()parameters:\n name\n parameters\nmethods-of:aMethodType.signature()returnType:\n asString\n fst\n isSpecialisationOf\n name\n returnType\n show\n signature\nmethods-of:aParam.withName()ofType:\n asString\n name\n typeAnnotation\nmethods-of:objectType.fromMethods:\n &\n asString\n currentlyTesting\n getMethod\n isSubtypeOf\n isUnknown\n methods\n |\nmethods-of:objectType.fromMethods()withName:\n !=\n &\n ::\n ==\n asDebugString\n asString\n basicAsString\n currentlyTesting\n getMethod\n isMe\n isSubtypeOf\n isUnknown\n methods\n |\n \u2260\nmethodtypes-of:MethodType:\n 1 isSpecialisationOf(other : MethodType) -> Boolean\n 1 name -> String\n 1 returnType -> ObjectType\n 1 signature -> List<MixPart>\nmethodtypes-of:MixPart:\n 1 name -> String\n 1 parameters -> List<Param>\nmethodtypes-of:ObjectType:\n 1 &(other : ObjectType) -> ObjectType\n 1 getMethod(name : String) -> MethodType | noSuchMethod\n 1 isSubtypeOf(other : ObjectType) -> Boolean\n 1 isUnknown -> Boolean\n 1 methods -> List<MethodType>\n 1 |(other : ObjectType) -> ObjectType\nmethodtypes-of:Param:\n 1 name -> String\n 1 typeAnnotation -> ObjectType\nmodules:\n ast\n dialect\n errormessages\n identifierKinds\n io\n stringMap\n sys\n unixFilePath\n util\npath:\n staticTypes\npublic:\n MethodType\n MixPart\n ObjectType\n Param\n TypeError\n checker\n for()doWithBreak\n for()doWithContinue\n mixPartNamed()parameters\n thisDialect\ntypes:\n MethodType\n MixPart\n ObjectType\n Param\n";
              if (typeof originalSourceLines !== "undefined") {
                originalSourceLines["staticTypes"] = [
                  "#pragma noTypeChecks",
                  "#pragma ExtendedLineups",
                  "dialect \"dialect\"",
                  "",
                  "import \"ast\" as ast",
                  "import \"util\" as util",
                  "",
                  "inherits prelude.methods",
                  "",
                  "// Type error.",
                  "",
                  "def TypeError is public = CheckerFailure.refine \"TypeError\"",
                  "",
                  "// Method signature information.",
                  "",
                  "type MethodType = {",
                  "    name -> String",
                  "    signature -> List<MixPart>",
                  "    returnType -> ObjectType",
                  "    isSpecialisationOf (other: MethodType) -> Boolean",
                  "}",
                  "",
                  "type Param = {",
                  "    name -> String",
                  "    typeAnnotation -> ObjectType",
                  "}",
                  "",
                  "def aParam = object {",
                  "    class withName (name': String) ofType (type': ObjectType) -> Param {",
                  "        def name: String is public = name'",
                  "        def typeAnnotation: ObjectType is public = type'",
                  "        method asString is override { \"{name}:{typeAnnotation}\" }",
                  "    }",
                  "",
                  "    method ofType (type': Object) -> Param {",
                  "        withName \"_\" ofType (type')",
                  "    }",
                  "}",
                  "",
                  "type MixPart = {",
                  "    name -> String",
                  "    parameters -> List<Param>",
                  "}",
                  "",
                  "class mixPartNamed (name': String)",
                  "        parameters (parameters': List<Param>) -> MixPart {",
                  "    def name: String is public = name'",
                  "    def parameters: List<Param> is public = parameters'",
                  "}",
                  "",
                  "def aMethodType = object {",
                  "    class signature (signature': List<MixPart>)",
                  "          returnType (rType: ObjectType)-> MethodType {",
                  "        def signature: List<MixPart> is public = signature'",
                  "        def returnType: ObjectType is public = rType",
                  "",
                  "        var name: String is readable:= \"\"",
                  "        var show: String:= \"\"",
                  "",
                  "        def fst = signature.at (1)",
                  "",
                  "        if (fst.parameters.size == 0) then {",
                  "            name:= fst.name",
                  "            show:= name",
                  "        } else {",
                  "            for (signature) do { part ->",
                  "                name:= \"{name}{part.name}()\"",
                  "                show:= \"{show}{part.name}(\"",
                  "                var once:= false",
                  "                for (part.parameters) do { param ->",
                  "                    if (once) then {",
                  "                        show:= \"{show}, \"",
                  "                    }",
                  "                    show:= \"{show}{param}\"",
                  "                    once:= true",
                  "                }",
                  "                show:= \"{show})\"",
                  "            }",
                  "",
                  "            name:= name.substringFrom (1) to (name.size - 2)",
                  "        }",
                  "",
                  "        show:= \"{show} -> {returnType}\"",
                  "",
                  "        // Determines if this method is a specialisation of the given one.",
                  "        method isSpecialisationOf (other: MethodType) -> Boolean {",
                  "            if (self == other) then {",
                  "                return true",
                  "            }",
                  "",
                  "            if (name != other.name) then {",
                  "                return false",
                  "            }",
                  "",
                  "            if (other.signature.size != signature.size) then {",
                  "                return false",
                  "            }",
                  "",
                  "            for (signature) and (other.signature) do { part, part' ->",
                  "                if (part.name != part'.name) then {",
                  "                    return false",
                  "                }",
                  "",
                  "                for (part.parameters) and (part'.parameters) do { p, p' ->",
                  "                    def pt = p.typeAnnotation",
                  "                    def pt' = p'.typeAnnotation",
                  "",
                  "                    // Contravariant in parameter types.",
                  "                    if (pt'.isSubtypeOf (pt).not) then {",
                  "                        return false",
                  "                    }",
                  "                }",
                  "            }",
                  "",
                  "            return returnType.isSubtypeOf (other.returnType)",
                  "        }",
                  "",
                  "        def asString: String is public, override = show",
                  "    }",
                  "",
                  "    method member (name: String) ofType (rType: ObjectType) -> MethodType {",
                  "        signature ([mixPartNamed (name) parameters [ ] ]) returnType (rType)",
                  "    }",
                  "",
                  "    method fromNode (node) -> MethodType {",
                  "        match (node) case { meth: Method | Class | MethodSignature ->",
                  "            def signature = []",
                  "",
                  "            for (meth.signature) do { part ->",
                  "                def params = []",
                  "",
                  "                for (part.params) do { param ->",
                  "                    params.push (aParam.withName (param.value)",
                  "                        ofType (objectType.fromDType (param.dtype)))",
                  "                }",
                  "",
                  "                signature.push (mixPartNamed (part.name) parameters (params))",
                  "            }",
                  "",
                  "            def rType = match (meth) case { m: Method | Class ->",
                  "                            m.dtype",
                  "                        } case { m: MethodSignature ->",
                  "                            meth.rtype",
                  "                        } case { _ -> }",
                  "",
                  "            return signature (signature)",
                  "                returnType (objectType.fromDType (rType))",
                  "        } case { defd: Def | Var ->",
                  "            def signature = [mixPartNamed (defd.name.value) parameters [ ] ]",
                  "            def dtype = objectType.fromDType (defd.dtype)",
                  "            return signature (signature) returnType (dtype)",
                  "        } case { _ ->",
                  "            prelude.Exception.raise \"unrecognised method node\" with (node)",
                  "        }",
                  "    }",
                  "",
                  "}",
                  "",
                  "",
                  "// Object type information.",
                  "",
                  "def noSuchMethod = Singleton.named \"noSuchMethod\"",
                  "",
                  "type ObjectType = {",
                  "    methods -> List<MethodType>",
                  "    getMethod (name: String) -> MethodType | noSuchMethod",
                  "    isUnknown -> Boolean",
                  "    isSubtypeOf (other: ObjectType) -> Boolean",
                  "    |(other: ObjectType) -> ObjectType",
                  "    &(other: ObjectType) -> ObjectType",
                  "}",
                  "",
                  "def objectType = object {",
                  "",
                  "    class fromMethods (methods': List<MethodType>) -> ObjectType {",
                  "        def methods: List<MethodType> is public = if (base == unknown)",
                  "            then { [] } else { base.methods } ++ methods'",
                  "",
                  "        method getMethod (name: String) -> MethodType | noSuchMethod {",
                  "            for (methods) do { meth ->",
                  "                if (meth.name == name) then {",
                  "                    return meth",
                  "                }",
                  "            }",
                  "",
                  "            return noSuchMethod",
                  "        }",
                  "",
                  "        def isUnknown: Boolean is public = false",
                  "",
                  "        // Necessary to prevent infinite loops of subtype testing.",
                  "        def currentlyTesting = []",
                  "",
                  "        method isSubtypeOf (other: ObjectType) -> Boolean {",
                  "            if (self.isMe(other)) then {",
                  "                return true",
                  "            }",
                  "",
                  "            if (other.isUnknown) then {",
                  "                return true",
                  "            }",
                  "",
                  "            // If this test is already being performed, assume it succeeds.",
                  "            if (currentlyTesting.contains (other)) then {",
                  "                return true",
                  "            }",
                  "",
                  "            currentlyTesting.push (other)",
                  "",
                  "            for (other.methods) doWithContinue { a, continue ->",
                  "                for (methods) do { b ->",
                  "                    if (b.isSpecialisationOf (a)) then {",
                  "                        continue.apply",
                  "                    }",
                  "                }",
                  "",
                  "                currentlyTesting.pop",
                  "                return false",
                  "            }",
                  "",
                  "            currentlyTesting.pop",
                  "            return true",
                  "        }",
                  "",
                  "        method |(other: ObjectType) -> ObjectType {",
                  "            if (self.isMe(other)) then { return self }",
                  "            if (other.isUnknown) then { return unknown }",
                  "",
                  "            def combine = []",
                  "",
                  "            for (methods) doWithContinue { meth, continue ->",
                  "                for (other.methods) do { meth'->",
                  "                    if (meth.name == meth'.name) then {",
                  "                        if (meth.isSpecialisationOf (meth')) then {",
                  "                            combine.push (meth)",
                  "                        } elseif { meth'.isSpecialisationOf (meth) } then {",
                  "                            combine.push (meth')",
                  "                        } else {",
                  "                            TypeError.raise (\"cannot produce intersection of \" ++",
                  "                                \"incompatible types '{self}' and '{other}'\")",
                  "                        }",
                  "",
                  "                        continue.apply",
                  "                    }",
                  "                }",
                  "            }",
                  "",
                  "            def hack = objectType",
                  "            return object {",
                  "                inherits hack.fromMethods (combine)",
                  "",
                  "                method asString -> String is override {",
                  "                    \"{outer} | {other}\"",
                  "                }",
                  "            }",
                  "        }",
                  "",
                  "        method &(other: ObjectType) -> ObjectType {",
                  "            if (self.isMe(other)) then { return self }",
                  "            if (other.isUnknown) then { return unknown }",
                  "",
                  "            def combine = []",
                  "            def twice = []",
                  "",
                  "            for (methods) doWithContinue { meth, continue ->",
                  "                for (other.methods) do { meth' ->",
                  "                    if (meth.name == meth'.name) then {",
                  "                        if (meth.isSpecialisationOf (meth')) then {",
                  "                            combine.push (meth)",
                  "                        } elseif { meth'.isSpecialisationOf (meth) } then {",
                  "                            combine.push (meth')",
                  "                        } else {",
                  "                            TypeError.raise (\"cannot produce union of \" ++",
                  "                                \"incompatible types '{self}' and '{other}'\")",
                  "                        }",
                  "",
                  "                        twice.push (meth.name)",
                  "",
                  "                        continue.apply",
                  "                    }",
                  "                }",
                  "",
                  "                combine.push (meth)",
                  "            }",
                  "",
                  "            for (other.methods) do { meth ->",
                  "                if (twice.contains (meth.name).not) then {",
                  "                    combine.push (meth)",
                  "                }",
                  "            }",
                  "",
                  "            def hack = objectType",
                  "            object {",
                  "                inherits hack.fromMethods (combine)",
                  "",
                  "                method asString -> String is override {",
                  "                    \"{outer} & {other}\"",
                  "                }",
                  "            }",
                  "        }",
                  "",
                  "        method asString -> String is override {",
                  "            if (methods.size == 3) then {",
                  "                return \"Object\"",
                  "            }",
                  "",
                  "            var out:= \"\\{ \"",
                  "",
                  "            for (methods) do { mtype ->",
                  "                if ([\"!=\", \"≠\", \"asString\", \"asDebugString\", \"::\"].contains (mtype.name).not) then {",
                  "                    out:= \"{out}{mtype}; \"",
                  "                }",
                  "            }",
                  "",
                  "            return \"{out}\\}\"",
                  "        }",
                  "    }",
                  "",
                  "    class fromMethods (methods': List<MethodType>)",
                  "            withName (name: String) -> ObjectType {",
                  "        inherits fromMethods (methods')",
                  "",
                  "        method asString is override { name }",
                  "        method ==(other) { self.isMe(other) }",
                  "    }",
                  "",
                  "    method fromDType (dtype) -> ObjectType {",
                  "        match (dtype) case { (false) ->",
                  "            unknown",
                  "        } case { lit: TypeDeclaration ->",
                  "//        TODO: re-write this code to understand the syntax of type expressions",
                  "//          and type declarations, which are not the same!",
                  "            return unknown",
                  "            def intersection = lit.intersectionTypes",
                  "            if (intersection.size > 1) then {",
                  "                var oType:= fromDType (intersection.first)",
                  "",
                  "                for (2..(intersection.size - 1)) do { i ->",
                  "                    oType:= oType & fromDType (intersection.at (i))",
                  "                }",
                  "",
                  "                return if (false ≠ lit.value) then {",
                  "                    object {",
                  "//                        inherits oType & fromDType (intersection.last)",
                  "                        inherits TypeIntersection.new (oType, fromDType (intersection.last))",
                  "",
                  "                        method asString is override { lit.value }",
                  "                    }",
                  "                } else {",
                  "                    oType & fromDType (intersection.last)",
                  "                }",
                  "            }",
                  "",
                  "            def union = lit.unionTypes",
                  "            if (union.size > 1) then {",
                  "                var oType:= fromDType (union.first)",
                  "",
                  "                for (2..(union.size - 1)) do { i ->",
                  "                    oType:= oType | fromDType (union.at (i))",
                  "                }",
                  "",
                  "                return if (false ≠ lit.value) then {",
                  "                    object {",
                  "//                        inherits oType | fromDType (union.last)",
                  "                        inherits TypeUnion.new (oType, fromDType (union.last))",
                  "                        def asString: String is public, override = lit.value",
                  "                    }",
                  "                } else {",
                  "                    oType | fromDType (union.last)",
                  "                }",
                  "            }",
                  "",
                  "            def meths = []",
                  "",
                  "            for (lit.methods) do { mType ->",
                  "                meths.push (aMethodType.fromNode (mType))",
                  "            }",
                  "",
                  "            if ((lit.value != false) && { lit.value.at (1) != \"<\" }) then {",
                  "                objectType.fromMethods (meths) withName (lit.value)",
                  "            } else {",
                  "                objectType.fromMethods (meths)",
                  "            }",
                  "        } case { ident: Identifier ->",
                  "            objectType.fromIdentifier (ident)",
                  "        } case { generic: Generic ->",
                  "//            TODO: figure out what to do here!",
                  "            objectType.fromIdentifier (generic.value)",
                  "        } case { _ ->",
                  "            ProgrammingError.raise \"No case for node of kind {dtype.kind}\" with (dtype)",
                  "        }",
                  "    }",
                  "",
                  "    method fromIdentifier (ident: Identifier) -> ObjectType {",
                  "        scope.types.find (ident.value) butIfMissing { unknown }",
                  "    }",
                  "",
                  "    method fromBlock (block) -> ObjectType {",
                  "        def bType = typeOf (block)",
                  "",
                  "        if (bType.isUnknown) then { return unknown }",
                  "",
                  "        def apply = bType.getMethod \"apply\"",
                  "",
                  "        match (apply) case { (noSuchMethod) ->",
                  "            TypeError.raise (\"the expression `{block.toGrace (0)}` of \" ++",
                  "                \"type '{bType}' does not satisfy the type 'Block'\") with (block)",
                  "        } case { meth: MethodType ->",
                  "            return meth.returnType",
                  "        } case { _ -> }",
                  "    }",
                  "",
                  "    method fromBlockBody (body) -> ObjectType {",
                  "        if (body.size == 0) then {",
                  "            objectType.done",
                  "        } else {",
                  "            typeOf (body.last)",
                  "        }",
                  "    }",
                  "",
                  "    def unknown:ObjectType is public = object {",
                  "        def methods is public = []",
                  "        method getMethod (_: String) -> noSuchMethod { noSuchMethod }",
                  "        def isUnknown: Boolean is public = true",
                  "        method isSubtypeOf (_: ObjectType) -> Boolean { true }",
                  "        method |(_: ObjectType) -> unknown { unknown }",
                  "        method &(_: ObjectType) -> unknown { unknown }",
                  "        def asString: String is public, override = \"Unknown\"",
                  "        method ==(other) { self.isMe(other) }",
                  "    }",
                  "",
                  "    method blockTaking (params: List<Parameter>)",
                  "            returning (rType: ObjectType) -> ObjectType {",
                  "        def signature = [mixPartNamed \"apply\" parameters (params)]",
                  "        def meths = [aMethodType.signature (signature) returnType (rType)]",
                  "",
                  "        fromMethods (meths) withName \"Block\"",
                  "    }",
                  "",
                  "    method blockReturning (rType: ObjectType) -> ObjectType {",
                  "        blockTaking [ ] returning (rType)",
                  "    }",
                  "",
                  "    method addTo (oType: ObjectType) name (name': String)",
                  "            returns (rType: ObjectType) -> Done is confidential {",
                  "        def signature = [mixPartNamed (name') parameters [ ] ]",
                  "        oType.methods.push (aMethodType.signature (signature) returnType (rType))",
                  "    }",
                  "",
                  "    method addTo (oType: ObjectType) name (name': String)",
                  "            params (ptypes: Iterable<ObjectType>) returns (rType: ObjectType)",
                  "            -> Done is confidential {",
                  "        def parameters = []",
                  "        for (ptypes) do { ptype ->",
                  "            parameters.push (aParam.ofType (ptype))",
                  "        }",
                  "",
                  "        def signature = [mixPartNamed (name') parameters (parameters)]",
                  "",
                  "        oType.methods.push (aMethodType.signature (signature) returnType (rType))",
                  "    }",
                  "",
                  "    method extend (this: ObjectType) with (that: ObjectType)",
                  "            -> Done is confidential {",
                  "        for (that.methods) do { mType ->",
                  "            this.methods.push (mType)",
                  "        }",
                  "    }",
                  "",
                  "    var base: ObjectType is readable := unknown     // to avoid a circularity",
                  "    def done: ObjectType is public = fromMethods [ ] withName \"Done\"",
                  "    base := fromMethods [ ] withName \"Object\"",
                  "",
                  "    def pattern: ObjectType is public = fromMethods [ ] withName \"Pattern\"",
                  "    def iterator: ObjectType is public = fromMethods [ ] withName \"Iterator\"",
                  "    def binding: ObjectType is public = fromMethods [ ] withName \"Binding\"",
                  "    def boolean: ObjectType is public = fromMethods [ ] withName \"Boolean\"",
                  "    def number: ObjectType is public = fromMethods [ ] withName \"Number\"",
                  "    def string: ObjectType is public = fromMethods [ ] withName \"String\"",
                  "    def list: ObjectType is public = fromMethods [ ] withName \"List\"",
                  "",
                  "    addTo (binding) name \"key\" returns (base)",
                  "    addTo (binding) name \"value\" returns (base)",
                  "",
                  "    addTo (base) name \"≠\" params [base] returns (boolean)",
                  "    addTo (base) name \"asDebugString\" returns (string)",
                  "    addTo (base) name \"asString\" returns (string)",
                  "    addTo (base) name \"::\" returns (binding)",
                  "",
                  "    extend (pattern) with (base)",
                  "    addTo (pattern) name \"match\" params [base] returns (unknown)",
                  "    addTo (pattern) name \"|\" params [pattern] returns (pattern)",
                  "    addTo (pattern) name \"&\" params [pattern] returns (pattern)",
                  "",
                  "    extend (iterator) with (base)",
                  "    addTo (iterator) name \"hasNext\" returns (boolean)",
                  "    addTo (iterator) name \"next\" returns (unknown)",
                  "",
                  "    def shortCircuit = blockTaking ([aParam.ofType (blockReturning (unknown))])",
                  "        returning (base)",
                  "    extend (boolean) with (base)",
                  "    addTo (boolean) name \"&&\" params [boolean] returns (boolean)",
                  "    addTo (boolean) name \"||\" params [boolean] returns (boolean)",
                  "    addTo (boolean) name \"prefix!\" returns (boolean)",
                  "    addTo (boolean) name \"not\" returns (boolean)",
                  "",
                  "    extend (number) with (base)",
                  "    addTo (number) name \"+\" params [number] returns (number)",
                  "    addTo (number) name \"*\" params [number] returns (number)",
                  "    addTo (number) name \"-\" params [number] returns (number)",
                  "    addTo (number) name \"/\" params [number] returns (number)",
                  "    addTo (number) name \"^\" params [number] returns (number)",
                  "    addTo (number) name \"%\" params [number] returns (number)",
                  "    addTo (number) name \"÷\" params [number] returns (number)",
                  "    addTo (number) name \"hash\" returns (string)",
                  "    addTo (number) name \"++\" params [base] returns (string)",
                  "    addTo (number) name \"<\" params [number] returns (boolean)",
                  "    addTo (number) name \">\" params [number] returns (boolean)",
                  "    addTo (number) name \"≤\" params [number] returns (boolean)",
                  "    addTo (number) name \"≥\" params [number] returns (boolean)",
                  "    addTo (number) name \"..\" params [number] returns (list)",
                  "    addTo (number) name \"asInteger32\" returns (number)",
                  "    addTo (number) name \"prefix-\" returns (number)",
                  "    addTo (number) name \"inBase\" params [number] returns (number)",
                  "    addTo (number) name \"truncated\" returns (number)",
                  "    addTo (number) name \"rounded\" returns (number)",
                  "    addTo (number) name \"prefix<\" returns (pattern)",
                  "    addTo (number) name \"prefix>\" returns (pattern)",
                  "",
                  "    extend (string) with (base)",
                  "    addTo (string) name \"++\" params [base] returns (string)",
                  "    addTo (string) name \"at\" params [number] returns (string)",
                  "    addTo (string) name \"iterator\" returns (base)",
                  "    addTo (string) name \"quoted\" returns (string)",
                  "    addTo (string) name \"size\" returns (number)",
                  "    addTo (string) name \"iterator\" returns (iterator)",
                  "    addTo (string) name \"ord\" returns (number)",
                  "    addTo (string) name \"substringFrom()to\" params [number, number] returns (string)",
                  "    addTo (string) name \"replace()with\" params [string, string] returns (string)",
                  "    addTo (string) name \"hash\" returns (string)",
                  "    addTo (string) name \"indices\" returns (list)",
                  "    addTo (string) name \"asNumber\" returns (number)",
                  "",
                  "    def fold = blockTaking ([aParam.ofType (unknown), aParam.ofType (unknown)])",
                  "        returning (unknown)",
                  "    extend (list) with (base)",
                  "    addTo (list) name \"at\" params [number] returns (unknown)",
                  "    addTo (list) name \"at ()put\" params [number, unknown] returns (done)",
                  "    addTo (list) name \"push\" params [unknown] returns (done)",
                  "    addTo (list) name \"pop\" returns (unknown)",
                  "    addTo (list) name \"size\" returns (number)",
                  "    addTo (list) name \"iterator\" returns (iterator)",
                  "    addTo (list) name \"contains\" params [unknown] returns (boolean)",
                  "    addTo (list) name \"indices\" returns (list)",
                  "    addTo (list) name \"first\" returns (unknown)",
                  "    addTo (list) name \"last\" returns (unknown)",
                  "    addTo (list) name \"addFirst\" params [unknown] returns (list)",
                  "    addTo (list) name \"addAll\" params [unknown] returns (list)",
                  "    addTo (list) name \"++\" params [list] returns (list)",
                  "    addTo (list) name \"fold()startingWith\" params [fold, unknown] returns (unknown)",
                  "",
                  "    scope.types.at \"Unknown\" put (unknown)",
                  "    scope.types.at \"Done\" put (done)",
                  "    scope.types.at \"Object\" put (base)",
                  "    scope.types.at \"Pattern\" put (pattern)",
                  "    scope.types.at \"Boolean\" put (boolean)",
                  "    scope.types.at \"Number\" put (number)",
                  "    scope.types.at \"String\" put (string)",
                  "    scope.types.at \"List\" put (list)",
                  "",
                  "    addVar \"Unknown\" ofType (pattern)",
                  "    addVar \"Dynamic\" ofType (pattern)",
                  "    addVar \"Done\" ofType (pattern)",
                  "    addVar \"Object\" ofType (pattern)",
                  "    addVar \"Pattern\" ofType (pattern)",
                  "    addVar \"Boolean\" ofType (pattern)",
                  "    addVar \"Number\" ofType (pattern)",
                  "    addVar \"String\" ofType (pattern)",
                  "    addVar \"List\" ofType (pattern)",
                  "",
                  "    addVar \"done\" ofType (self.done)",
                  "    addVar \"true\" ofType (boolean)",
                  "    addVar \"false\" ofType (boolean)",
                  "}",
                  "",
                  "method addVar (name: String) ofType (oType: ObjectType) is confidential {",
                  "    scope.variables.at (name) put (oType)",
                  "    scope.methods.at (name) put (aMethodType.member (name) ofType (oType))",
                  "}",
                  "",
                  "",
                  "// Object literals.",
                  "",
                  "def ObjectError = TypeError.refine \"ObjectError\"",
                  "",
                  "rule { obj: ObjectLiteral ->",
                  "    scope.enter { processBody (obj.value) }",
                  "}",
                  "",
                  "",
                  "// Simple literals.",
                  "",
                  "rule { _: NumberLiteral | OctetsLiteral ->",
                  "    objectType.number",
                  "}",
                  "",
                  "rule { _: StringLiteral ->",
                  "    objectType.string",
                  "}",
                  "",
                  "rule { _: ArrayLiteral ->",
                  "    objectType.list",
                  "}",
                  "",
                  "",
                  "// Method requests.",
                  "",
                  "def RequestError = TypeError.refine \"RequestError\"",
                  "",
                  "rule { req: Request ->",
                  "    match (req.value) case { memb: Member ->",
                  "        def rec = memb.in",
                  "        def rType = if (Identifier.match (rec) && (rec.value == \"self\")) then {",
                  "            scope.types.find \"Self\" butIfMissing {",
                  "                prelude.Exception.raise \"type of self missing\" with (rec)",
                  "            }",
                  "        } else {",
                  "            typeOf (rec)",
                  "        }",
                  "",
                  "        if (rType.isUnknown) then {",
                  "            objectType.unknown",
                  "        } else {",
                  "            def name = memb.value",
                  "",
                  "            match (rType.getMethod (name))",
                  "                case { (noSuchMethod) ->",
                  "                    RequestError.raise (\"no method `{name}` in \" ++",
                  "                        \"`{rec.toGrace (0)}` of type `{rType}`\") with (memb)",
                  "                } case { meth: MethodType ->",
                  "                    check (req) against (meth)",
                  "                }",
                  "        }",
                  "    } case { ident: Identifier ->",
                  "        find (req) atScope (scope.methods.stack.size)",
                  "    } case { _ -> }",
                  "}",
                  "",
                  "method check (req: Request)",
                  "        against (meth: MethodType) -> ObjectType is confidential {",
                  "    def name = meth.name",
                  "",
                  "    for (meth.signature) and (req.with) do { part, args' ->",
                  "        def params = part.parameters",
                  "        def args   = args'.args",
                  "",
                  "        def pSize = params.size",
                  "        def aSize = args.size",
                  "",
                  "        if (aSize != pSize) then {",
                  "            def which = if (aSize > pSize) then { \"many\" } else { \"few\" }",
                  "            def where = if (aSize > pSize) then {",
                  "                args.at (pSize + 1)",
                  "            } else {",
                  "                // Can we get beyond the final argument?",
                  "                req.value",
                  "            }",
                  "",
                  "            RequestError",
                  "                .raise (\"too {which} arguments to method part \" ++",
                  "                    \"'{part.name}', expected {pSize} but got {aSize}\")",
                  "                    with (where)",
                  "        }",
                  "",
                  "        for (params) and (args) do { param, arg ->",
                  "            def pType = param.typeAnnotation",
                  "            def aType = typeOf (arg)",
                  "",
                  "            if (typeOf (arg).isSubtypeOf (pType).not) then {",
                  "                RequestError.raise (\"the expression \" ++",
                  "                    \"`{arg.toGrace (0)}` of type '{aType}' does not \" ++",
                  "                    \"satisfy the type of parameter '{param}' in the \" ++",
                  "                    \"method '{name}'\") with (arg)",
                  "            }",
                  "        }",
                  "    }",
                  "",
                  "    return meth.returnType",
                  "}",
                  "",
                  "method find (req: Request) atScope (i: Number) -> ObjectType is confidential {",
                  "    if (i == 0) then {",
                  "        return objectType.unknown",
                  "    }",
                  "",
                  "    def sType = objectType.fromMethods (scope.methods.stack.at (i).values)",
                  "",
                  "    return match (sType.getMethod (req.value.value)) case { (noSuchMethod) ->",
                  "        find (req) atScope (i - 1)",
                  "    } case { meth: MethodType ->",
                  "        check (req) against (meth)",
                  "    } case { _ -> }",
                  "}",
                  "",
                  "rule { memb: Member ->",
                  "    typeOf (ast.callNode.new (memb, [object {",
                  "        def name is public = memb.value",
                  "        def args is public = []",
                  "    }]))",
                  "}",
                  "",
                  "rule { op: Operator ->",
                  "    def rec = op.left",
                  "    def rType = typeOf (rec)",
                  "",
                  "    if (rType.isUnknown) then {",
                  "        objectType.unknown",
                  "    } else {",
                  "        def name = op.value",
                  "",
                  "        match (rType.getMethod (name)) case { (noSuchMethod) ->",
                  "            RequestError.raise (\"no method '{name}' in \" ++",
                  "                \"`{rec.toGrace (0)}` of type '{rType}'\") with (op)",
                  "        } case { meth: MethodType ->",
                  "            def arg = op.right",
                  "            def params = meth.signature.first.parameters",
                  "",
                  "            if (params.size == 0) then {",
                  "                RequestError.raise (\"the definition of operator \" ++",
                  "                    \"`{name}` is missing its parameter\") with (op)",
                  "            }",
                  "",
                  "            def param = params.first",
                  "            def pType = param.typeAnnotation",
                  "",
                  "            if (typeOf (arg).isSubtypeOf (pType).not) then {",
                  "                RequestError.raise (\"the expression \" ++",
                  "                    \"`{arg.toGrace 0}` does not satisfy the type of \" ++",
                  "                    \"parameter `{param}` in the method `{name}`\") with (arg)",
                  "            }",
                  "",
                  "            meth.returnType",
                  "        } case { _ -> }",
                  "    }",
                  "}",
                  "",
                  "",
                  "// Special cases.",
                  "",
                  "rule { req: If ->",
                  "    def cond = req.value",
                  "    if (typeOf (cond).isSubtypeOf (objectType.boolean).not) then {",
                  "        RequestError.raise (\"the condition `{cond.toGrace 0}` does not \" ++",
                  "            \"conform to type `Boolean`.\") with (cond)",
                  "    }",
                  "",
                  "    def then = objectType.fromBlock (req.thenblock)",
                  "",
                  "    def else = objectType.fromBlock (req.elseblock)",
                  "",
                  "    then | else",
                  "}",
                  "",
                  "rule { req: MatchCase ->",
                  "    def cases = req.cases",
                  "    var union := done",
                  "",
                  "    for (cases) do { case ->",
                  "        def cType = objectType.fromBlock (case)",
                  "        union := if (done == union) then {",
                  "            cType",
                  "        } else {",
                  "            union | cType",
                  "        }",
                  "    }",
                  "    union",
                  "}",
                  "",
                  "rule { req: TryCatch ->",
                  "    match (req.value) case { bl: BlockLiteral ->",
                  "        def params = bl.params",
                  "        if (params.size > 0) then {",
                  "            RequestError.raise \"too many parameters for try block\" with (bl)",
                  "        }",
                  "    } case { _ -> }",
                  "",
                  "    for (req.cases) do { eachCase ->",
                  "        match (eachCase) case { bl: BlockLiteral ->",
                  "            def params = bl.params",
                  "            if (params.size != 1) then {",
                  "                def which = if (params.size == 0)",
                  "                    then { \"not enough\" } else { \"too many\" }",
                  "",
                  "                RequestError.raise \"{which} parameters for catch block\" with (bl)",
                  "            }",
                  "        } case { _ -> }",
                  "    }",
                  "",
                  "    if (false ≠ req.finally) then {",
                  "        match (req.finally) case { bl: BlockLiteral ->",
                  "            def params = bl.params",
                  "            if (params.size > 0) then {",
                  "                RequestError.raise \"too many parameters to finally\" with (bl)",
                  "            }",
                  "        } case { _ -> }",
                  "    }",
                  "",
                  "    objectType.done",
                  "}",
                  "",
                  "",
                  "// Method declaration.",
                  "",
                  "def MethodError = TypeError.refine \"MethodError\"",
                  "",
                  "rule { meth: Method ->",
                  "    def name = meth.value.value",
                  "    def mType = aMethodType.fromNode (meth)",
                  "    def returnType = mType.returnType",
                  "",
                  "    scope.enter {",
                  "        for (meth.signature) do { part ->",
                  "            for (part.params) do { param ->",
                  "                scope.variables.at (param.value)",
                  "                    put (objectType.fromDType (param.dtype))",
                  "            }",
                  "        }",
                  "",
                  "        collectTypes (meth.body)",
                  "",
                  "        for (meth.body) do { stmt ->",
                  "            checkTypes (stmt)",
                  "",
                  "            stmt.accept (object {",
                  "                inherits ast.baseVisitor",
                  "",
                  "                method visitReturn (ret) is override {",
                  "                    check (ret.value) matches (returnType) inMethod (name)",
                  "                    return false",
                  "                }",
                  "",
                  "                method visitMethod (node) is override {",
                  "                    false",
                  "                }",
                  "            })",
                  "        }",
                  "",
                  "        if (meth.body.size == 0) then {",
                  "            if (objectType.done.isSubtypeOf (returnType).not) then {",
                  "                MethodError.raise (\"method `{name}` declares a \" ++",
                  "                    \"result of type '{returnType}', but has no body\") with (meth)",
                  "            }",
                  "        } else {",
                  "            def lastNode = meth.body.last",
                  "            if (Return.match (lastNode).not) then {",
                  "                def lastType = typeOf (lastNode)",
                  "                if (lastType.isSubtypeOf (returnType).not) then {",
                  "                    MethodError.raise (\"method `{name}` declares a \" ++",
                  "                        \"result of type `{returnType}`, but returns an \" ++",
                  "                        \"expression of type `{lastType}`\") with (lastNode)",
                  "                }",
                  "            }",
                  "        }",
                  "    }",
                  "",
                  "    if (isMember (mType)) then {",
                  "        scope.variables.at (name) put (returnType)",
                  "    }",
                  "",
                  "    scope.methods.at (name) put (mType)",
                  "}",
                  "",
                  "method check (node) matches (eType: ObjectType)",
                  "        inMethod (name: String) -> Done is confidential {",
                  "    def aType = typeOf (node)",
                  "    if (aType.isSubtypeOf (eType).not) then {",
                  "        MethodError.raise (\"method `{name}` declares a result of \" ++",
                  "            \"type `{eType}`, but returns an expression of type \" ++",
                  "            \"`{aType}`\") with (node)",
                  "    }",
                  "}",
                  "",
                  "",
                  "// Class declaration.",
                  "",
                  "def ClassError = TypeError.refine \"ClassError\"",
                  "",
                  "rule { cls: Class ->",
                  "    def name = cls.name.value",
                  "    def dType = objectType.fromDType (cls.dtype)",
                  "    def cType = scope.enter {",
                  "        for (cls.signature) do { part ->",
                  "            for (part.params) do { param ->",
                  "                scope.variables.at (param.value)",
                  "                    put (objectType.fromDType (param.dtype))",
                  "            }",
                  "        }",
                  "",
                  "        def aType = processBody (cls.value)",
                  "        if (aType.isUnknown) then {",
                  "            objectType.unknown",
                  "        } else {",
                  "            if (aType.isSubtypeOf (dType).not) then {",
                  "                ClassError.raise (\"class `{name}` declares a result \" ++",
                  "                    \"of type `{dType}`, but constructs an object of type \" ++",
                  "                    \"`{aType}`\") with (cls)",
                  "            }",
                  "",
                  "            aType",
                  "        }",
                  "    }",
                  "",
                  "    scope.variables.at (name)",
                  "        put (objectType.fromMethods ([aMethodType.fromNode (cls)]))",
                  "",
                  "    if (dType.isUnknown) then {",
                  "        // Class type inference.",
                  "        cType",
                  "    } else {",
                  "        dType",
                  "    }",
                  "}",
                  "",
                  "",
                  "// Def and var declarations.",
                  "",
                  "def DefError = TypeError.refine \"DefError\"",
                  "",
                  "rule { defd: Def | Var ->",
                  "    var defType:= objectType.fromDType (defd.dtype)",
                  "",
                  "    def value = defd.value",
                  "",
                  "    if (value != false) then {",
                  "        def vType = typeOf (value)",
                  "",
                  "        if (defType.isUnknown && (defd.kind == \"defdec\")) then {",
                  "            defType:= vType",
                  "        }",
                  "",
                  "        if (vType.isSubtypeOf (defType).not) then {",
                  "            DefError.raise (\"the expression `{value.toGrace 0}` of type \" ++",
                  "                \"`{vType}` does not satisfy the type of {defd.kind} \" ++",
                  "                \"annotation `{defType}`\") with (value)",
                  "        }",
                  "    }",
                  "",
                  "    def name = defd.name.value",
                  "    scope.variables.at (name) put (defType)",
                  "",
                  "    for (defd.annotations) do { ann ->",
                  "        if (ann.value == \"public\") then {",
                  "            scope.methods.at (name) put (aMethodType.member (name) ofType (defType))",
                  "",
                  "            if (defd.kind == \"vardec\") then {",
                  "                def name' = name ++ \":=\"",
                  "                def param = aParam.withName (name) ofType (defType)",
                  "                def sig = [mixPartNamed (name') parameters ([param])]",
                  "",
                  "                scope.methods.at (name')",
                  "                    put (aMethodType.signature (sig) returnType (objectType.done))",
                  "            }",
                  "",
                  "            return",
                  "        }",
                  "    }",
                  "}",
                  "",
                  "rule { bind: Bind ->",
                  "    def dest = bind.dest",
                  "    def dType = typeOf (dest)",
                  "",
                  "    def value = bind.value",
                  "    def vType = typeOf (value)",
                  "",
                  "    if (vType.isSubtypeOf (dType).not) then {",
                  "        DefError.raise (\"the expression `{value.toGrace 0}` of type \" ++",
                  "            \"`{vType}` does not satisfy the type `{dType}` of \" ++",
                  "            \"`{dest.toGrace 0}`\") with (value)",
                  "    }",
                  "}",
                  "",
                  "",
                  "// Import declarations.",
                  "",
                  "rule { imp: Import ->",
                  "    scope.variables.at (imp.nameString) put (objectType.unknown)",
                  "}",
                  "",
                  "",
                  "// Block expressions.",
                  "",
                  "rule { block: BlockLiteral ->",
                  "    def body = block.body",
                  "",
                  "    scope.enter {",
                  "        for (block.params) do { param ->",
                  "            scope.variables.at (param.value)",
                  "                put (objectType.fromDType (param.dtype))",
                  "        }",
                  "",
                  "        collectTypes (body)",
                  "",
                  "        for (body) do { stmt ->",
                  "            checkTypes (stmt)",
                  "        }",
                  "    }",
                  "",
                  "    def parameters = []",
                  "    for (block.params) do { param ->",
                  "        parameters.push (aParam.withName (param.value)",
                  "            ofType (objectType.fromDType (param.dtype)))",
                  "    }",
                  "",
                  "    objectType.blockTaking (parameters)",
                  "        returning (objectType.fromBlockBody (body))",
                  "}",
                  "",
                  "",
                  "// Identifier references.",
                  "",
                  "rule { ident: Identifier ->",
                  "    match (ident.value) case { \"outer\" ->",
                  "        outerAt (scope.size)",
                  "    } case { _ ->",
                  "        scope.variables.find (ident.value) butIfMissing { objectType.unknown }",
                  "    }",
                  "}",
                  "",
                  "method outerAt (i: Number) -> ObjectType is confidential {",
                  "    // Required to cope with not knowing the prelude.",
                  "    if (i <= 1) then {",
                  "        return objectType.unknown",
                  "    }",
                  "",
                  "    def vStack = scope.variables.stack",
                  "    def curr = vStack.at (i)",
                  "",
                  "    return curr.atKey \"outer\" do { t -> t } else {",
                  "        def prev = outerAt (i - 1)",
                  "",
                  "        def mStack = scope.methods.stack",
                  "",
                  "        def vars = vStack.at (i - 1)",
                  "        def meths = mStack.at (i - 1).values",
                  "",
                  "        def oType = objectType.fromMethods (meths)",
                  "        def mType = aMethodType.member \"outer\" ofType (oType)",
                  "",
                  "        curr.at \"outer\" put (oType)",
                  "        mStack.at (i).at \"outer\" put (mType)",
                  "",
                  "        oType",
                  "    }",
                  "}",
                  "",
                  "",
                  "// Typing methods.",
                  "",
                  "method processBody (body: List) -> ObjectType is confidential {",
                  "    // Collect the declarative types directly in the object body.",
                  "    collectTypes (body)",
                  "",
                  "    // Inheritance typing.",
                  "    def hasInherits = (body.size > 0) && { Inherits.match (body.first) }",
                  "    def superType = if (hasInherits) then {",
                  "        def inheriting = body.first.value",
                  "        inheriting.accept (object {",
                  "            inherits ast.baseVisitor",
                  "",
                  "            def illegal = [\"self\", \"super\"]",
                  "",
                  "            method visitIdentifier (ident) {",
                  "                if (illegal.contains (ident.value)) then {",
                  "                    ObjectError.raise (\"reference to `{ident.value}` \" ++",
                  "                        \"in inheritance clause\") with (ident)",
                  "                }",
                  "            }",
                  "        })",
                  "",
                  "        typeOf (inheriting)",
                  "    } else {",
                  "        objectType.base",
                  "    }",
                  "",
                  "    scope.variables.at \"super\" put (superType)",
                  "",
                  "    // If the super type is unknown, then we can't know anything about the",
                  "    // self type.  TODO We actually can, because an object cannot have two",
                  "    // methods with the same name.",
                  "    def publicType = if (superType.isUnknown) then {",
                  "        scope.types.at \"Self\" put (superType)",
                  "        superType",
                  "    } else {",
                  "        // Collect the method types to add the two self types.",
                  "        def publicMethods = []",
                  "        def allMethods = []",
                  "",
                  "        for (body) do { stmt ->",
                  "            match (stmt) case { meth: Method ->",
                  "                def mType = aMethodType.fromNode (meth)",
                  "                allMethods.push (mType)",
                  "                if (isPublic (meth)) then {",
                  "                    publicMethods.push (mType)",
                  "                }",
                  "",
                  "                scope.methods.at (mType.name) put (mType)",
                  "                if (isMember (mType)) then {",
                  "                    scope.variables.at (mType.name) put (mType.returnType)",
                  "                }",
                  "            } case { defd: Def | Var ->",
                  "                if (isPublic (defd)) then {",
                  "                    def mType = aMethodType.fromNode (defd)",
                  "                    allMethods.push (mType)",
                  "                    publicMethods.push (mType)",
                  "                }",
                  "            } case { _ -> }",
                  "        }",
                  "",
                  "        scope.types.at \"Self\" put (objectType.fromMethods (allMethods))",
                  "        objectType.fromMethods (publicMethods)",
                  "    }",
                  "",
                  "    scope.variables.at \"self\" put (publicType)",
                  "",
                  "    // Type-check the object body.",
                  "    def indices = if (hasInherits) then {",
                  "        2..body.size",
                  "    } else {",
                  "        body.indices",
                  "    }",
                  "",
                  "    for (indices) do { i ->",
                  "        checkTypes (body.at (i))",
                  "    }",
                  "",
                  "    return publicType",
                  "}",
                  "",
                  "",
                  "def TypeDeclarationError = TypeError.refine \"TypeDeclarationError\"",
                  "",
                  "// The first pass over a body, collecting all type declarations so that they can",
                  "// reference one another declaratively.",
                  "method collectTypes (nodes: List) -> Done is confidential {",
                  "    def names = []",
                  "    def types = []",
                  "    def placeholders = []",
                  "",
                  "    for (nodes) do { node ->",
                  "        match (node) case { td: TypeDeclaration ->",
                  "            if (names.contains (td.nameString)) then {",
                  "                TypeDeclarationError.raise (\"the type {td.nameString} uses \" ++",
                  "                    \"the same name as another type in the same scope\") with (td)",
                  "            }",
                  "",
                  "            names.push (td.value)",
                  "",
                  "            // In order to allow the types to be declarative, the scope needs",
                  "            // to be populated by placeholder types first.",
                  "            def placeholder = objectType.unknown",
                  "            types.push (td)",
                  "            placeholders.push (placeholder)",
                  "            scope.types.at (td.nameString) put (placeholder)",
                  "        } case { _ -> }",
                  "    }",
                  "",
                  "    for (types) and (placeholders) do { td, ph ->",
                  "        def oType = objectType.fromDType (td)",
                  "        prelude.become (ph, oType)",
                  "    }",
                  "}",
                  "",
                  "",
                  "// Determines if a node is publicly available.",
                  "method isPublic (node: Method | Def | Var) -> Boolean is confidential {",
                  "    match (node) case { _: Method ->",
                  "        for (node.annotations) do { ann ->",
                  "            if (ann.value == \"confidential\") then {",
                  "                return false",
                  "            }",
                  "        }",
                  "",
                  "        true",
                  "    } case { _ ->",
                  "        for (node.annotations) do { ann ->",
                  "            if ((ann.value == \"public\") || (ann.value == \"readable\")) then {",
                  "                return true",
                  "            }",
                  "        }",
                  "",
                  "        false",
                  "    }",
                  "}",
                  "",
                  "",
                  "// Determines if a method will be accessed as a member.",
                  "method isMember (mType: MethodType) -> Boolean is confidential {",
                  "    (mType.signature.size == 1) && {",
                  "        mType.signature.first.parameters.size == 0",
                  "    }",
                  "}",
                  "",
                  "",
                  "// Helper methods.",
                  "",
                  "",
                  "// For loop with break.",
                  "method for (a) doWithBreak (bl) -> Done {",
                  "    for (a) do { e ->",
                  "        bl.apply (e, {",
                  "            return",
                  "        })",
                  "    }",
                  "}",
                  "",
                  "// For loop with continue.",
                  "method for (a) doWithContinue (bl) -> Done {",
                  "    for (a) do { e ->",
                  "        continue'(e, bl)",
                  "    }",
                  "}",
                  "",
                  "method continue'(e, bl) -> Done is confidential {",
                  "    bl.apply (e, {",
                  "        return",
                  "    })",
                  "}",
                  "",
                  "",
                  "// Run the type rules.",
                  "method checker (nodes) {",
                  "    check (nodes)",
                  "}",
                  "",
                  "def thisDialect is public = object {",
                  "    method parseChecker (moduleObj) { check (moduleObj) }",
                  "    method astChecker (moduleObj) { check (moduleObj) }",
                  "    method atStart { print \"module start\" }",
                  "    method atEnd { print \"module end\" }",
                  "}" ];
              }
              if (typeof global !== "undefined")
                global.gracecode_staticTypes = gracecode_staticTypes;
              if (typeof window !== "undefined")
                window.gracecode_staticTypes = gracecode_staticTypes;
