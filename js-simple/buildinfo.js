"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_buildinfo() {
  setModuleName("buildinfo");
  this.definitionModule = "buildinfo";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_buildinfo_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_buildinfo_outer0;
  setLineNumber(1);    // compilenode method
  var func1 = function(argcv) {    // method gitrevision
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for gitrevision"));
    setModuleName("buildinfo");
    var string2 = new GraceString("489e01863891b40e6712de6c57d186cea4d4e383");
    return string2;
  };
  func1.paramCounts = [0];
  this.methods["gitrevision"] = func1;
  func1.definitionLine = 1;
  func1.definitionModule = "buildinfo";
  setLineNumber(2);    // compilenode method
  var func3 = function(argcv) {    // method gitgeneration
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for gitgeneration"));
    setModuleName("buildinfo");
    var string4 = new GraceString("3227");
    return string4;
  };
  func3.paramCounts = [0];
  this.methods["gitgeneration"] = func3;
  func3.definitionLine = 2;
  func3.definitionModule = "buildinfo";
  setLineNumber(3);    // compilenode method
  var func5 = function(argcv) {    // method prefix
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for prefix"));
    setModuleName("buildinfo");
    var string6 = new GraceString("/usr");
    return string6;
  };
  func5.paramCounts = [0];
  this.methods["prefix"] = func5;
  func5.definitionLine = 3;
  func5.definitionModule = "buildinfo";
  setLineNumber(4);    // compilenode method
  var func7 = function(argcv) {    // method includepath
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for includepath"));
    setModuleName("buildinfo");
    var string8 = new GraceString("/usr/include");
    return string8;
  };
  func7.paramCounts = [0];
  this.methods["includepath"] = func7;
  func7.definitionLine = 4;
  func7.definitionModule = "buildinfo";
  setLineNumber(5);    // compilenode method
  var func9 = function(argcv) {    // method modulepath
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for modulepath"));
    setModuleName("buildinfo");
    var string10 = new GraceString("/usr/lib/grace/modules");
    return string10;
  };
  func9.paramCounts = [0];
  this.methods["modulepath"] = func9;
  func9.definitionLine = 5;
  func9.definitionModule = "buildinfo";
  setLineNumber(6);    // compilenode method
  var func11 = function(argcv) {    // method objectpath
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    if (argcv[0] !== 0)
      throw new GraceExceptionPacket(ProgrammingErrorObject, new GraceString("wrong number of arguments for objectpath"));
    setModuleName("buildinfo");
    var string12 = new GraceString("/usr/lib/grace");
    return string12;
  };
  func11.paramCounts = [0];
  this.methods["objectpath"] = func11;
  func11.definitionLine = 6;
  func11.definitionModule = "buildinfo";
  return this;
}
gracecode_buildinfo.imports = [];
if (typeof gctCache !== "undefined")
  gctCache['buildinfo'] = "classes:\nconfidential:\nfresh-methods:\nmodules:\npath:\n buildinfo\npublic:\n gitgeneration\n gitrevision\n includepath\n modulepath\n objectpath\n prefix\ntypes:\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["buildinfo"] = [
    "method gitrevision { \"489e01863891b40e6712de6c57d186cea4d4e383\" }",
    "method gitgeneration { \"3227\" }",
    "method prefix { \"/usr\" }",
    "method includepath { \"/usr/include\" }",
    "method modulepath { \"/usr/lib/grace/modules\" }",
    "method objectpath { \"/usr/lib/grace\" }" ];
}
if (typeof global !== "undefined")
  global.gracecode_buildinfo = gracecode_buildinfo;
if (typeof window !== "undefined")
  window.gracecode_buildinfo = gracecode_buildinfo;
