function gracecode_twoThreeTree() {
    importedModules["twoThreeTree"] = this;
    var module$twoThreeTree = this;
    this.definitionModule = "twoThreeTree";
    this.definitionLine = 1;
    var var_prelude = var___95__prelude;
    var myframe = new StackFrame("twoThreeTree module");
    stackFrames.push(myframe);
    this.closureKeys = this.closureKeys || [];
    this.closureKeys.push("outer_twoThreeTree_1");
    this.outer_twoThreeTree_1 = var_prelude;
        // Dialect "standardGrace"
    var_prelude = do_import("standardGrace", gracecode_standardGrace);
    this.outer = var_prelude;
    var func0 = function(argcv, var_K, var_V) {    // method empty, line 8
        var returnTarget = invocationCount;
        invocationCount++;
        var myframe = new StackFrame("empty");
            // Start type parameters
        if (! var_K) var_K = var_Unknown;
        if (! var_V) var_V = var_Unknown;
        var numArgs = arguments.length - 1;
        if ((numArgs > 0) && (numArgs !== 2)) {
            throw new GraceExceptionPacket(RequestErrorObject,
                                           new GraceString("empty requires 2 type arguments, but was given " + (numArgs - 0)));
        }
            // End type parameters
        stackFrames.push(myframe);
        try {
            var ouc = emptyGraceObject("empty", "twoThreeTree", 8);
            var ouc_init = this.methods["empty$build(3)"].call(this, null, ouc, [], [], var_K, var_V);
            ouc_init.call(ouc);
            return ouc;
        } finally {
            stackFrames.pop();
        }
    };    // end of method empty
    this.methods["empty"] = func0;
    func0.methodName = "empty";
    func0.paramCounts = [0];
    func0.paramNames = [];
    func0.typeParamNames = ["K", "V"];
    func0.definitionLine = 8;
    func0.definitionModule = "twoThreeTree";
    var func1 = function(argcv, inheritingObject, aliases, exclusions, var_K, var_V) {    // method empty$build(_,_,_), line 8
        var returnTarget = invocationCount;
        invocationCount++;
            // Start type parameters
        if (! var_K) var_K = var_Unknown;
        if (! var_V) var_V = var_Unknown;
        var numArgs = arguments.length - 1 - 3;
        if ((numArgs > 0) && (numArgs !== 2)) {
            throw new GraceExceptionPacket(RequestErrorObject,
                                           new GraceString("empty requires 2 type arguments, but was given " + (numArgs - 0)));
        }
            // End type parameters
        var obj2_build = function(ignore, outerObj, aliases, exclusions, var_K, var_V) {
            this.closureKeys = this.closureKeys || [];
            this.closureKeys.push("outer_twoThreeTree_8");
            this.outer_twoThreeTree_8 = outerObj;
            const inheritedExclusions = { };
            for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
                const exMeth = exclusions[eix];
                inheritedExclusions[exMeth] = this.methods[exMeth]; };
            setLineNumber(11);    // compilenode member
                                  // call case 2: outer request
            var call3 = selfRequest(var_prelude, "collections", [0]);
            var initFun4 = request(call3, "collection$build(3)", [null], this, [], []);  // compileReuseCall
            this.data.root = undefined;
            var reader5_root = function() {  // reader method root
                if (this.data.root === undefined) raiseUninitializedVariable("root");
                return this.data.root;
            };
            reader5_root.isVar = true;
            reader5_root.confidential = true;
            this.methods["root"] = reader5_root;
            var writer6_root = function(argcv, n) {   // writer method root:=(_)
                this.data.root = n;
                return GraceDone;
            };
            writer6_root.confidential = true;
            this.methods["root:=(1)"] = writer6_root;
            this.data.mods = undefined;
            var reader7_mods = function() {  // reader method mods
                if (this.data.mods === undefined) raiseUninitializedVariable("mods");
                return this.data.mods;
            };
            reader7_mods.isVar = true;
            reader7_mods.confidential = true;
            this.methods["mods"] = reader7_mods;
            var writer8_mods = function(argcv, n) {   // writer method mods:=(_)
                this.data.mods = n;
                return GraceDone;
            };
            writer8_mods.confidential = true;
            this.methods["mods:=(1)"] = writer8_mods;
            this.data.size = undefined;
            var reader9_size = function() {  // reader method size
                if (this.data.size === undefined) raiseUninitializedVariable("size");
                return this.data.size;
            };
            reader9_size.isVar = true;
            this.methods["size"] = reader9_size;
            var writer10_size = function(argcv, n) {   // writer method size:=(_)
                this.data.size = n;
                return GraceDone;
            };
            writer10_size.confidential = true;
            this.methods["size:=(1)"] = writer10_size;
            this.data.deletedCount = undefined;
            var reader11_deletedCount = function() {  // reader method deletedCount
                if (this.data.deletedCount === undefined) raiseUninitializedVariable("deletedCount");
                return this.data.deletedCount;
            };
            reader11_deletedCount.isVar = true;
            reader11_deletedCount.confidential = true;
            this.methods["deletedCount"] = reader11_deletedCount;
            var writer12_deletedCount = function(argcv, n) {   // writer method deletedCount:=(_)
                this.data.deletedCount = n;
                return GraceDone;
            };
            writer12_deletedCount.confidential = true;
            this.methods["deletedCount:=(1)"] = writer12_deletedCount;
            this.data.Deleted = undefined;
            var reader13_Deleted = function() {  // reader method Deleted
                if (this.data.Deleted === undefined) raiseUninitializedVariable("Deleted");
                return this.data.Deleted;
            };
            reader13_Deleted.isDef = true;
            reader13_Deleted.confidential = true;
            this.methods["Deleted"] = reader13_Deleted;
            var func14 = function(argcv) {    // method asDebugString, line 19
                var returnTarget = invocationCount;
                invocationCount++;
                var myframe = new StackFrame("asDebugString");
                stackFrames.push(myframe);
                try {
                    setLineNumber(19);    // compilenode member
                                          // call case 6: other requests
                                          // call case 4: self request with 0 args and 0 typeArgs
                    var call16 = selfRequest(this, "root", [0]);
                    var call15 = request(call16, "asDebugString", [0]);
                    return call15;
                } finally {
                    stackFrames.pop();
                }
            };    // end of method asDebugString
            this.methods["asDebugString"] = func14;
            func14.methodName = "asDebugString";
            func14.paramCounts = [0];
            func14.paramNames = [];
            func14.definitionLine = 19;
            func14.definitionModule = "twoThreeTree";
            var func17 = function(argcv) {    // method asString, line 20
                var returnTarget = invocationCount;
                invocationCount++;
                var myframe = new StackFrame("asString");
                stackFrames.push(myframe);
                try {
                    setLineNumber(20);    // compilenode string
                    var string18 = new GraceString("a two-three tree of size ");
                        // call case 4: self request with 0 args and 0 typeArgs
                    var call19 = selfRequest(this, "size", [0]);
                    var opresult20 = request(string18, "++(1)", [1], call19);
                    var string21 = new GraceString("");
                    var opresult22 = request(opresult20, "++(1)", [1], string21);
                    return opresult22;
                } finally {
                    stackFrames.pop();
                }
            };    // end of method asString
            this.methods["asString"] = func17;
            func17.methodName = "asString";
            func17.paramCounts = [0];
            func17.paramNames = [];
            func17.definitionLine = 20;
            func17.definitionModule = "twoThreeTree";
            var func23 = function(argcv, var_action) {    // method do(_), line 22
                var returnTarget = invocationCount;
                invocationCount++;
                var myframe = new StackFrame("do(1)");
                myframe.addVar("action",
                               function() {return var_action;});
                setLineNumber(22);    // compilenode member
                                      // call case 2: outer request
                var call24 = selfRequest(var_prelude, "Function1", [0]);
                assertTypeOrMsg(var_action, call24, "argument to request of `do(_)`", "Function1");
                stackFrames.push(myframe);
                try {
                    setLineNumber(23);    // compilenode call
                                          // call case 6: other requests
                                          // call case 4: self request with 0 args and 0 typeArgs
                    var call26 = selfRequest(this, "root", [0]);
                    var call25 = request(call26, "do(1)", [1], var_action);
                    return call25;
                } finally {
                    stackFrames.pop();
                }
            };    // end of method do(_)
            this.methods["do(1)"] = func23;
            func23.methodName = "do(1)";
            func23.paramCounts = [1];
            func23.paramNames = ["action"];
            func23.definitionLine = 22;
            func23.definitionModule = "twoThreeTree";
            var func27 = function(argcv) {    // method iterator, line 25
                var returnTarget = invocationCount;
                invocationCount++;
                var myframe = new StackFrame("iterator");
                stackFrames.push(myframe);
                try {
                    var ouc = emptyGraceObject("empty.iterator", "twoThreeTree", 25);
                    var ouc_init = this.methods["iterator$build(3)"].call(this, null, ouc, [], []);
                    ouc_init.call(ouc);
                    return ouc;
                } finally {
                    stackFrames.pop();
                }
            };    // end of method iterator
            this.methods["iterator"] = func27;
            func27.methodName = "iterator";
            func27.paramCounts = [0];
            func27.paramNames = [];
            func27.definitionLine = 25;
            func27.definitionModule = "twoThreeTree";
            var func28 = function(argcv, inheritingObject, aliases, exclusions) {    // method iterator$build(_,_,_), line 25
                var returnTarget = invocationCount;
                invocationCount++;
                var obj29_build = function(ignore, outerObj, aliases, exclusions) {
                    this.closureKeys = this.closureKeys || [];
                    this.closureKeys.push("outer_twoThreeTree_25");
                    this.outer_twoThreeTree_25 = outerObj;
                    const inheritedExclusions = { };
                    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
                        const exMeth = exclusions[eix];
                        inheritedExclusions[exMeth] = this.methods[exMeth]; };
                    this.data.zipper = undefined;
                    var reader30_zipper = function() {  // reader method zipper
                        if (this.data.zipper === undefined) raiseUninitializedVariable("zipper");
                        return this.data.zipper;
                    };
                    reader30_zipper.isDef = true;
                    reader30_zipper.confidential = true;
                    this.methods["zipper"] = reader30_zipper;
                    this.data.initialMods = undefined;
                    var reader31_initialMods = function() {  // reader method initialMods
                        if (this.data.initialMods === undefined) raiseUninitializedVariable("initialMods");
                        return this.data.initialMods;
                    };
                    reader31_initialMods.isDef = true;
                    reader31_initialMods.confidential = true;
                    this.methods["initialMods"] = reader31_initialMods;
                    var func32 = function(argcv, var_aTooth) {    // method remember(_), line 31
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("remember(1)");
                        myframe.addVar("aTooth",
                                       function() {return var_aTooth;});
                        stackFrames.push(myframe);
                        try {
                            setLineNumber(32);    // compilenode call
                                                  // call case 6: other requests
                                                  // call case 4: self request with 0 args and 0 typeArgs
                            var call34 = selfRequest(this, "zipper", [0]);
                            var call33 = request(call34, "addLast(1)", [1], var_aTooth);
                            return call33;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method remember(_)
                    this.methods["remember(1)"] = func32;
                    func32.methodName = "remember(1)";
                    func32.paramCounts = [1];
                    func32.paramNames = ["aTooth"];
                    func32.definitionLine = 31;
                    func32.definitionModule = "twoThreeTree";
                    var func35 = function(argcv) {    // method hasNext, line 35
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("hasNext");
                        stackFrames.push(myframe);
                        try {
                            setLineNumber(35);    // compilenode member
                                                  // call case 6: other requests
                                                  // call case 6: other requests
                                                  // call case 4: self request with 0 args and 0 typeArgs
                            var call38 = selfRequest(this, "zipper", [0]);
                            var call37 = request(call38, "isEmpty", [0]);
                            var call36 = request(call37, "not", [0]);
                            return call36;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method hasNext
                    this.methods["hasNext"] = func35;
                    func35.methodName = "hasNext";
                    func35.paramCounts = [0];
                    func35.paramNames = [];
                    func35.definitionLine = 35;
                    func35.definitionModule = "twoThreeTree";
                    var func39 = function(argcv) {    // method next, line 37
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("next");
                        stackFrames.push(myframe);
                        try {
                            var if40 = GraceDone;
                            setLineNumber(38);    // compilenode member
                                                  // call case 2: outer request
                            var call41 = selfRequest(this.outer_twoThreeTree_25, "mods", [0]);
                                // call case 4: self request with 0 args and 0 typeArgs
                            var call42 = selfRequest(this, "initialMods", [0]);
                            var opresult43 = request(call41, "\u2260(1)", [1], call42);
                            if (Grace_isTrue(opresult43)) {
                                setLineNumber(39);    // compilenode string
                                var string45 = new GraceString("on dictionary");
                                    // call case 6: other requests
                                    // call case 2: outer request
                                var call46 = selfRequest(var_prelude, "ConcurrentModification", [0]);
                                var call44 = request(call46, "raise(1)", [1], string45);
                                if40 = call44;
                            }
                            var if47 = GraceDone;
                            setLineNumber(41);    // compilenode member
                                                  // call case 6: other requests
                                                  // call case 4: self request with 0 args and 0 typeArgs
                            var call49 = selfRequest(this, "hasNext", [0]);
                            var call48 = request(call49, "not", [0]);
                            if (Grace_isTrue(call48)) {
                                setLineNumber(42);    // compilenode string
                                var string51 = new GraceString("on dictionary");
                                    // call case 6: other requests
                                    // call case 2: outer request
                                var call52 = selfRequest(var_prelude, "IteratorExhausted", [0]);
                                var call50 = request(call52, "raise(1)", [1], string51);
                                if47 = call50;
                            }
                            setLineNumber(44);    // compilenode defdec
                            myframe.addVar("thisTooth", function() {return var_thisTooth});
                                // call case 6: other requests
                                // call case 4: self request with 0 args and 0 typeArgs
                            var call54 = selfRequest(this, "zipper", [0]);
                            var call53 = request(call54, "removeLast", [0]);
                            var var_thisTooth = call53;
                            setLineNumber(45);    // compilenode call
                                                  // call case 6: other requests
                            var call55 = request(var_thisTooth, "visit(1)", [1], this);
                            return call55;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method next
                    this.methods["next"] = func39;
                    func39.methodName = "next";
                    func39.paramCounts = [0];
                    func39.paramNames = [];
                    func39.definitionLine = 37;
                    func39.definitionModule = "twoThreeTree";
                    const overridenByAliases = { };
                    for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
                        const a = aliases[aix];
                        const newNm = a.newName;
                        const oldNm = a.oldName;
                        overridenByAliases[newNm] = this.methods[newNm];
                        const m = confidentialVersion(inheritedExclusions[oldNm] || overridenByAliases[oldNm] || this.methods[oldNm], newNm);
                        m.definitionLine = 25;
                        m.definitionModule = "twoThreeTree";
                        this.methods[newNm] = m;
                    }
                    for (let exName in inheritedExclusions) {
                        if (inheritedExclusions.hasOwnProperty(exName)) {
                            if (inheritedExclusions[exName]) {
                                this.methods[exName] = inheritedExclusions[exName];
                            } else {
                                delete this.methods[exName];
                            }
                        }
                    }
                    var obj29_init = function() {    // init of object on line 25
                        setLineNumber(26);    // compilenode array
                        var array57 = new GraceSequence([]);
                            // call case 2: outer request
                        var call56 = selfRequest(var_prelude, "list(1)", [1], array57);
                        this.data.zipper = call56;
                        setLineNumber(27);    // compilenode member
                                              // call case 2: outer request
                        var call58 = selfRequest(this.outer_twoThreeTree_25, "mods", [0]);
                        this.data.initialMods = call58;
                        setLineNumber(29);    // compilenode call
                                              // call case 6: other requests
                                              // call case 2: outer request
                        var call60 = selfRequest(this.outer_twoThreeTree_25, "root", [0]);
                        var call59 = request(call60, "buildZipperFor(1)", [1], this);
                    };
                    return obj29_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
                };
                var obj29_init = obj29_build.call(inheritingObject, null, this, aliases, exclusions);
                return obj29_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
            };    // end of method iterator$build(_,_,_)
            this.methods["iterator$build(3)"] = func28;
            func28.methodName = "iterator$build(3)";
            func28.paramCounts = [0];
            func28.paramNames = [];
            func28.definitionLine = 25;
            func28.definitionModule = "twoThreeTree";
            var func61 = function(argcv) {    // method isEmpty, line 48
                var returnTarget = invocationCount;
                invocationCount++;
                var myframe = new StackFrame("isEmpty");
                stackFrames.push(myframe);
                try {
                    setLineNumber(48);    // compilenode member
                                          // call case 4: self request with 0 args and 0 typeArgs
                    var call62 = selfRequest(this, "size", [0]);
                    var opresult63 = request(call62, "==(1)", [1], new GraceNum(0));
                    return opresult63;
                } finally {
                    stackFrames.pop();
                }
            };    // end of method isEmpty
            this.methods["isEmpty"] = func61;
            func61.methodName = "isEmpty";
            func61.paramCounts = [0];
            func61.paramNames = [];
            func61.definitionLine = 48;
            func61.definitionModule = "twoThreeTree";
            var func64 = function(argcv, var_key, var_value) {    // method at(_)put(_), line 49
                var returnTarget = invocationCount;
                invocationCount++;
                var myframe = new StackFrame("at(1)put(1)");
                myframe.addVar("key",
                               function() {return var_key;});
                myframe.addVar("value",
                               function() {return var_value;});
                stackFrames.push(myframe);
                try {
                    setLineNumber(50);    // compilenode member
                                          // call case 4: self request with 0 args and 0 typeArgs
                    var call66 = selfRequest(this, "mods", [0]);
                    var sum67 = request(call66, "+(1)", [1], new GraceNum(1));
                        // call case 4: self request with 1 args and 0 typeArgs
                    var call65 = selfRequest(this, "mods:=(1)", [1], sum67);
                    setLineNumber(51);    // compilenode op
                    var opresult69 = request(var_key, "::(1)", [1], var_value);
                    setLineNumber(52);    // compilenode block
                    var block70 = new GraceBlock(this, 52, 1);
                    block70.guard = jsTrue;
                    block70.real = function block70(var_nu) {
                        setLineNumber(52);    // compilenode call
                                              // call case 4: self request with 1 args and 0 typeArgs
                        var call71 = selfRequest(this, "root:=(1)", [1], var_nu);
                        return call71;
                    };
                    let applyMeth70 = function apply_1 (argcv, ...args) {
                        if (this.guard.apply(this.receiver, args))
                        return this.real.apply(this.receiver, args);
                        badBlockArgs.apply(this, args);
                    };
                    applyMeth70.methodName = "apply(1)";
                    applyMeth70.paramCounts = [1];
                    applyMeth70.paramNames = ["nu"];
                    applyMeth70.definitionLine = 52;
                    applyMeth70.definitionModule = "twoThreeTree";
                    block70.methods["apply(1)"] = applyMeth70;
                    let matchesMeth70 = function matches_1 (argcv, ...args) {
                        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
                    };
                    matchesMeth70.methodName = "matches(1)";
                    matchesMeth70.paramCounts = [1];
                    matchesMeth70.paramNames = ["nu"];
                    matchesMeth70.definitionLine = 52;
                    matchesMeth70.definitionModule = "twoThreeTree";
                    block70.methods["matches(1)"] = matchesMeth70;
                    setLineNumber(53);    // compilenode block
                    var block72 = new GraceBlock(this, 53, 1);
                    block72.guard = jsTrue;
                    block72.real = function block72(var_tba) {
                        setLineNumber(53);    // compilenode call
                                              // call case 4: self request with 1 args and 0 typeArgs
                        var call73 = selfRequest(this, "root:=(1)", [1], var_tba);
                        return call73;
                    };
                    let applyMeth72 = function apply_1 (argcv, ...args) {
                        if (this.guard.apply(this.receiver, args))
                        return this.real.apply(this.receiver, args);
                        badBlockArgs.apply(this, args);
                    };
                    applyMeth72.methodName = "apply(1)";
                    applyMeth72.paramCounts = [1];
                    applyMeth72.paramNames = ["tba"];
                    applyMeth72.definitionLine = 53;
                    applyMeth72.definitionModule = "twoThreeTree";
                    block72.methods["apply(1)"] = applyMeth72;
                    let matchesMeth72 = function matches_1 (argcv, ...args) {
                        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
                    };
                    matchesMeth72.methodName = "matches(1)";
                    matchesMeth72.paramCounts = [1];
                    matchesMeth72.paramNames = ["tba"];
                    matchesMeth72.definitionLine = 53;
                    matchesMeth72.definitionModule = "twoThreeTree";
                    block72.methods["matches(1)"] = matchesMeth72;
                        // call case 6: other requests
                    setLineNumber(51);    // compilenode member
                                          // call case 4: self request with 0 args and 0 typeArgs
                    var call74 = selfRequest(this, "root", [0]);
                    var call68 = request(call74, "add(1)setParent(1)absorb(1)", [1, 1, 1], opresult69, block70, block72);
                    return this;
                } finally {
                    stackFrames.pop();
                }
            };    // end of method at(_)put(_)
            this.methods["at(1)put(1)"] = func64;
            func64.methodName = "at(1)put(1)";
            func64.paramCounts = [1, 1];
            func64.paramNames = ["key", "value"];
            func64.definitionLine = 49;
            func64.definitionModule = "twoThreeTree";
            var func75 = function(argcv, var_k, var_action) {    // method at(_)ifAbsent(_), line 56
                var returnTarget = invocationCount;
                invocationCount++;
                var myframe = new StackFrame("at(1)ifAbsent(1)");
                myframe.addVar("k",
                               function() {return var_k;});
                myframe.addVar("action",
                               function() {return var_action;});
                stackFrames.push(myframe);
                try {
                    setLineNumber(57);    // compilenode call
                                          // call case 6: other requests
                                          // call case 4: self request with 0 args and 0 typeArgs
                    var call77 = selfRequest(this, "root", [0]);
                    var call76 = request(call77, "at(1)ifAbsent(1)", [1, 1], var_k, var_action);
                    return call76;
                } finally {
                    stackFrames.pop();
                }
            };    // end of method at(_)ifAbsent(_)
            this.methods["at(1)ifAbsent(1)"] = func75;
            func75.methodName = "at(1)ifAbsent(1)";
            func75.paramCounts = [1, 1];
            func75.paramNames = ["k", "action"];
            func75.definitionLine = 56;
            func75.definitionModule = "twoThreeTree";
            var func78 = function(argcv, var_k) {    // method at(_), line 59
                var returnTarget = invocationCount;
                invocationCount++;
                var myframe = new StackFrame("at(1)");
                myframe.addVar("k",
                               function() {return var_k;});
                stackFrames.push(myframe);
                try {
                    setLineNumber(60);    // compilenode block
                    var block80 = new GraceBlock(this, 60, 0);
                    block80.guard = jsTrue;
                    block80.real = function block80() {
                        setLineNumber(60);    // compilenode string
                        var string82 = new GraceString("the 2-3 tree does not contain the key ");
                        var opresult83 = request(string82, "++(1)", [1], var_k);
                        var string84 = new GraceString("");
                        var opresult85 = request(opresult83, "++(1)", [1], string84);
                            // call case 6: other requests
                            // call case 2: outer request
                        var call86 = selfRequest(var_prelude, "NoSuchObject", [0]);
                        var call81 = request(call86, "raise(1)", [1], opresult85);
                        return call81;
                    };
                    let applyMeth80 = function apply (argcv) {
                        return this.real.apply(this.receiver);
                    };
                    applyMeth80.methodName = "apply";
                    applyMeth80.paramCounts = [0];
                    applyMeth80.paramNames = [];
                    applyMeth80.definitionLine = 60;
                    applyMeth80.definitionModule = "twoThreeTree";
                    block80.methods["apply"] = applyMeth80;
                        // call case 6: other requests
                        // call case 4: self request with 0 args and 0 typeArgs
                    var call87 = selfRequest(this, "root", [0]);
                    var call79 = request(call87, "at(1)ifAbsent(1)", [1, 1], var_k, block80);
                    return call79;
                } finally {
                    stackFrames.pop();
                }
            };    // end of method at(_)
            this.methods["at(1)"] = func78;
            func78.methodName = "at(1)";
            func78.paramCounts = [1];
            func78.paramNames = ["k"];
            func78.definitionLine = 59;
            func78.definitionModule = "twoThreeTree";
            var func88 = function(argcv, var_k, var_action) {    // method removeKey(_)ifAbsent(_), line 62
                var returnTarget = invocationCount;
                invocationCount++;
                var myframe = new StackFrame("removeKey(1)ifAbsent(1)");
                myframe.addVar("k",
                               function() {return var_k;});
                myframe.addVar("action",
                               function() {return var_action;});
                stackFrames.push(myframe);
                try {
                    setLineNumber(63);    // compilenode member
                                          // call case 4: self request with 0 args and 0 typeArgs
                    var call90 = selfRequest(this, "mods", [0]);
                    var sum91 = request(call90, "+(1)", [1], new GraceNum(1));
                        // call case 4: self request with 1 args and 0 typeArgs
                    var call89 = selfRequest(this, "mods:=(1)", [1], sum91);
                    setLineNumber(64);    // compilenode call
                                          // call case 6: other requests
                                          // call case 4: self request with 0 args and 0 typeArgs
                    var call93 = selfRequest(this, "root", [0]);
                    var call92 = request(call93, "removeKey(1)ifAbsent(1)", [1, 1], var_k, var_action);
                    setLineNumber(65);    // compilenode member
                                          // call case 4: self request with 0 args and 0 typeArgs
                    var call94 = selfRequest(this, "rebuildIfSparse", [0]);
                    return this;
                } finally {
                    stackFrames.pop();
                }
            };    // end of method removeKey(_)ifAbsent(_)
            this.methods["removeKey(1)ifAbsent(1)"] = func88;
            func88.methodName = "removeKey(1)ifAbsent(1)";
            func88.paramCounts = [1, 1];
            func88.paramNames = ["k", "action"];
            func88.definitionLine = 62;
            func88.definitionModule = "twoThreeTree";
            var func95 = function(argcv, var_v, var_action) {    // method removeValue(_)ifAbsent(_), line 68
                var returnTarget = invocationCount;
                invocationCount++;
                var myframe = new StackFrame("removeValue(1)ifAbsent(1)");
                myframe.addVar("v",
                               function() {return var_v;});
                myframe.addVar("action",
                               function() {return var_action;});
                stackFrames.push(myframe);
                try {
                    setLineNumber(69);    // compilenode member
                                          // call case 4: self request with 0 args and 0 typeArgs
                    var call97 = selfRequest(this, "mods", [0]);
                    var sum98 = request(call97, "+(1)", [1], new GraceNum(1));
                        // call case 4: self request with 1 args and 0 typeArgs
                    var call96 = selfRequest(this, "mods:=(1)", [1], sum98);
                    setLineNumber(70);    // compilenode member
                                          // call case 4: self request with 0 args and 0 typeArgs
                    var call99 = selfRequest(this, "size", [0]);
                    var var_prevSize = call99;
                    myframe.addVar("prevSize", function() {return var_prevSize});
                    setLineNumber(71);    // compilenode call
                                          // call case 6: other requests
                                          // call case 4: self request with 0 args and 0 typeArgs
                    var call101 = selfRequest(this, "root", [0]);
                    var call100 = request(call101, "removeValue(1)", [1], var_v);
                    var if102 = GraceDone;
                    setLineNumber(72);    // compilenode member
                                          // call case 4: self request with 0 args and 0 typeArgs
                    var call103 = selfRequest(this, "size", [0]);
                    var opresult104 = request(call103, "==(1)", [1], var_prevSize);
                    if (Grace_isTrue(opresult104)) {
                        setLineNumber(73);    // compilenode member
                                              // call case 6: other requests
                        var call105 = request(var_action, "apply", [0]);
                        if102 = call105;
                    }
                    setLineNumber(75);    // compilenode member
                                          // call case 4: self request with 0 args and 0 typeArgs
                    var call106 = selfRequest(this, "rebuildIfSparse", [0]);
                    return this;
                } finally {
                    stackFrames.pop();
                }
            };    // end of method removeValue(_)ifAbsent(_)
            this.methods["removeValue(1)ifAbsent(1)"] = func95;
            func95.methodName = "removeValue(1)ifAbsent(1)";
            func95.paramCounts = [1, 1];
            func95.paramNames = ["v", "action"];
            func95.definitionLine = 68;
            func95.definitionModule = "twoThreeTree";
            var func107 = function(argcv, var_k) {    // method removeKey(_), line 78
                var returnTarget = invocationCount;
                invocationCount++;
                var myframe = new StackFrame("removeKey(1)");
                myframe.addVar("k",
                               function() {return var_k;});
                stackFrames.push(myframe);
                try {
                    setLineNumber(79);    // compilenode member
                                          // call case 4: self request with 0 args and 0 typeArgs
                    var call109 = selfRequest(this, "mods", [0]);
                    var sum110 = request(call109, "+(1)", [1], new GraceNum(1));
                        // call case 4: self request with 1 args and 0 typeArgs
                    var call108 = selfRequest(this, "mods:=(1)", [1], sum110);
                    setLineNumber(80);    // compilenode block
                    var block112 = new GraceBlock(this, 80, 0);
                    block112.guard = jsTrue;
                    block112.real = function block112() {
                        setLineNumber(80);    // compileBlock
                        return GraceDone;
                    };
                    let applyMeth112 = function apply (argcv) {
                        return this.real.apply(this.receiver);
                    };
                    applyMeth112.methodName = "apply";
                    applyMeth112.paramCounts = [0];
                    applyMeth112.paramNames = [];
                    applyMeth112.definitionLine = 80;
                    applyMeth112.definitionModule = "twoThreeTree";
                    block112.methods["apply"] = applyMeth112;
                        // call case 6: other requests
                        // call case 4: self request with 0 args and 0 typeArgs
                    var call113 = selfRequest(this, "root", [0]);
                    var call111 = request(call113, "removeKey(1)ifAbsent(1)", [1, 1], var_k, block112);
                    setLineNumber(81);    // compilenode member
                                          // call case 4: self request with 0 args and 0 typeArgs
                    var call114 = selfRequest(this, "rebuildIfSparse", [0]);
                    return this;
                } finally {
                    stackFrames.pop();
                }
            };    // end of method removeKey(_)
            this.methods["removeKey(1)"] = func107;
            func107.methodName = "removeKey(1)";
            func107.paramCounts = [1];
            func107.paramNames = ["k"];
            func107.definitionLine = 78;
            func107.definitionModule = "twoThreeTree";
            var func115 = function(argcv, var_v) {    // method removeValue(_), line 84
                var returnTarget = invocationCount;
                invocationCount++;
                var myframe = new StackFrame("removeValue(1)");
                myframe.addVar("v",
                               function() {return var_v;});
                stackFrames.push(myframe);
                try {
                    setLineNumber(85);    // compilenode member
                                          // call case 4: self request with 0 args and 0 typeArgs
                    var call117 = selfRequest(this, "mods", [0]);
                    var sum118 = request(call117, "+(1)", [1], new GraceNum(1));
                        // call case 4: self request with 1 args and 0 typeArgs
                    var call116 = selfRequest(this, "mods:=(1)", [1], sum118);
                    setLineNumber(86);    // compilenode call
                                          // call case 6: other requests
                                          // call case 4: self request with 0 args and 0 typeArgs
                    var call120 = selfRequest(this, "root", [0]);
                    var call119 = request(call120, "removeValue(1)", [1], var_v);
                    setLineNumber(87);    // compilenode member
                                          // call case 4: self request with 0 args and 0 typeArgs
                    var call121 = selfRequest(this, "rebuildIfSparse", [0]);
                    return this;
                } finally {
                    stackFrames.pop();
                }
            };    // end of method removeValue(_)
            this.methods["removeValue(1)"] = func115;
            func115.methodName = "removeValue(1)";
            func115.paramCounts = [1];
            func115.paramNames = ["v"];
            func115.definitionLine = 84;
            func115.definitionModule = "twoThreeTree";
            var func122 = function(argcv) {    // method rebuildIfSparse, line 90
                var returnTarget = invocationCount;
                invocationCount++;
                var myframe = new StackFrame("rebuildIfSparse");
                stackFrames.push(myframe);
                try {
                    var if123 = GraceDone;
                    setLineNumber(92);    // compilenode member
                                          // call case 4: self request with 0 args and 0 typeArgs
                    var call124 = selfRequest(this, "deletedCount", [0]);
                        // call case 4: self request with 0 args and 0 typeArgs
                    var call125 = selfRequest(this, "size", [0]);
                    var prod126 = request(call125, "*(1)", [1], new GraceNum(3));
                    var opresult127 = request(call124, ">(1)", [1], prod126);
                    if (Grace_isTrue(opresult127)) {
                        setLineNumber(93);    // compilenode defdec
                        myframe.addVar("oldRoot", function() {return var_oldRoot});
                            // call case 4: self request with 0 args and 0 typeArgs
                        var call128 = selfRequest(this, "root", [0]);
                        var var_oldRoot = call128;
                        setLineNumber(94);    // compilenode member
                                              // call case 4: self request with 0 args and 0 typeArgs
                        var call130 = selfRequest(this, "emptyNode", [0]);
                            // call case 4: self request with 1 args and 0 typeArgs
                        var call129 = selfRequest(this, "root:=(1)", [1], call130);
                        setLineNumber(95);    // compilenode num
                                              // call case 4: self request with 1 args and 0 typeArgs
                        var call131 = selfRequest(this, "size:=(1)", [1], new GraceNum(0));
                        setLineNumber(96);    // compilenode num
                                              // call case 4: self request with 1 args and 0 typeArgs
                        var call132 = selfRequest(this, "deletedCount:=(1)", [1], new GraceNum(0));
                        setLineNumber(97);    // compilenode block
                        var block134 = new GraceBlock(this, 97, 1);
                        block134.guard = jsTrue;
                        block134.real = function block134(var_each) {
                            setLineNumber(99);    // compilenode block
                            var block136 = new GraceBlock(this, 99, 1);
                            block136.guard = jsTrue;
                            block136.real = function block136(var_nu) {
                                setLineNumber(99);    // compilenode call
                                                      // call case 4: self request with 1 args and 0 typeArgs
                                var call137 = selfRequest(this, "root:=(1)", [1], var_nu);
                                return call137;
                            };
                            let applyMeth136 = function apply_1 (argcv, ...args) {
                                if (this.guard.apply(this.receiver, args))
                                return this.real.apply(this.receiver, args);
                                badBlockArgs.apply(this, args);
                            };
                            applyMeth136.methodName = "apply(1)";
                            applyMeth136.paramCounts = [1];
                            applyMeth136.paramNames = ["nu"];
                            applyMeth136.definitionLine = 99;
                            applyMeth136.definitionModule = "twoThreeTree";
                            block136.methods["apply(1)"] = applyMeth136;
                            let matchesMeth136 = function matches_1 (argcv, ...args) {
                                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
                            };
                            matchesMeth136.methodName = "matches(1)";
                            matchesMeth136.paramCounts = [1];
                            matchesMeth136.paramNames = ["nu"];
                            matchesMeth136.definitionLine = 99;
                            matchesMeth136.definitionModule = "twoThreeTree";
                            block136.methods["matches(1)"] = matchesMeth136;
                            setLineNumber(100);    // compilenode block
                            var block138 = new GraceBlock(this, 100, 1);
                            block138.guard = jsTrue;
                            block138.real = function block138(var_tba) {
                                setLineNumber(100);    // compilenode call
                                                       // call case 4: self request with 1 args and 0 typeArgs
                                var call139 = selfRequest(this, "root:=(1)", [1], var_tba);
                                return call139;
                            };
                            let applyMeth138 = function apply_1 (argcv, ...args) {
                                if (this.guard.apply(this.receiver, args))
                                return this.real.apply(this.receiver, args);
                                badBlockArgs.apply(this, args);
                            };
                            applyMeth138.methodName = "apply(1)";
                            applyMeth138.paramCounts = [1];
                            applyMeth138.paramNames = ["tba"];
                            applyMeth138.definitionLine = 100;
                            applyMeth138.definitionModule = "twoThreeTree";
                            block138.methods["apply(1)"] = applyMeth138;
                            let matchesMeth138 = function matches_1 (argcv, ...args) {
                                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
                            };
                            matchesMeth138.methodName = "matches(1)";
                            matchesMeth138.paramCounts = [1];
                            matchesMeth138.paramNames = ["tba"];
                            matchesMeth138.definitionLine = 100;
                            matchesMeth138.definitionModule = "twoThreeTree";
                            block138.methods["matches(1)"] = matchesMeth138;
                                // call case 6: other requests
                            setLineNumber(98);    // compilenode member
                                                  // call case 4: self request with 0 args and 0 typeArgs
                            var call140 = selfRequest(this, "root", [0]);
                            var call135 = request(call140, "add(1)setParent(1)absorb(1)", [1, 1, 1], var_each, block136, block138);
                            return call135;
                        };
                        let applyMeth134 = function apply_1 (argcv, ...args) {
                            if (this.guard.apply(this.receiver, args))
                            return this.real.apply(this.receiver, args);
                            badBlockArgs.apply(this, args);
                        };
                        applyMeth134.methodName = "apply(1)";
                        applyMeth134.paramCounts = [1];
                        applyMeth134.paramNames = ["each"];
                        applyMeth134.definitionLine = 97;
                        applyMeth134.definitionModule = "twoThreeTree";
                        block134.methods["apply(1)"] = applyMeth134;
                        let matchesMeth134 = function matches_1 (argcv, ...args) {
                            return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
                        };
                        matchesMeth134.methodName = "matches(1)";
                        matchesMeth134.paramCounts = [1];
                        matchesMeth134.paramNames = ["each"];
                        matchesMeth134.definitionLine = 97;
                        matchesMeth134.definitionModule = "twoThreeTree";
                        block134.methods["matches(1)"] = matchesMeth134;
                            // call case 6: other requests
                        if (var_oldRoot === undefined) raiseUninitializedVariable("oldRoot");
                        var call133 = request(var_oldRoot, "do(1)", [1], block134);
                        if123 = call133;
                    }
                    return if123;
                } finally {
                    stackFrames.pop();
                }
            };    // end of method rebuildIfSparse
            func122.confidential = true;
            this.methods["rebuildIfSparse"] = func122;
            func122.methodName = "rebuildIfSparse";
            func122.paramCounts = [0];
            func122.paramNames = [];
            func122.definitionLine = 90;
            func122.definitionModule = "twoThreeTree";
            var func141 = function(argcv) {    // method clear, line 103
                var returnTarget = invocationCount;
                invocationCount++;
                var myframe = new StackFrame("clear");
                stackFrames.push(myframe);
                try {
                    setLineNumber(104);    // compilenode member
                                           // call case 4: self request with 0 args and 0 typeArgs
                    var call143 = selfRequest(this, "mods", [0]);
                    var sum144 = request(call143, "+(1)", [1], new GraceNum(1));
                        // call case 4: self request with 1 args and 0 typeArgs
                    var call142 = selfRequest(this, "mods:=(1)", [1], sum144);
                    setLineNumber(105);    // compilenode member
                                           // call case 4: self request with 0 args and 0 typeArgs
                    var call146 = selfRequest(this, "emptyNode", [0]);
                        // call case 4: self request with 1 args and 0 typeArgs
                    var call145 = selfRequest(this, "root:=(1)", [1], call146);
                    setLineNumber(106);    // compilenode num
                                           // call case 4: self request with 1 args and 0 typeArgs
                    var call147 = selfRequest(this, "size:=(1)", [1], new GraceNum(0));
                    setLineNumber(107);    // compilenode num
                                           // call case 4: self request with 1 args and 0 typeArgs
                    var call148 = selfRequest(this, "deletedCount:=(1)", [1], new GraceNum(0));
                    return call148;
                } finally {
                    stackFrames.pop();
                }
            };    // end of method clear
            this.methods["clear"] = func141;
            func141.methodName = "clear";
            func141.paramCounts = [0];
            func141.paramNames = [];
            func141.definitionLine = 103;
            func141.definitionModule = "twoThreeTree";
            this.data.Node = undefined;
            var reader149_Node = function() {  // reader method Node
                if (this.data.Node === undefined) raiseUninitializedVariable("Node");
                return this.data.Node;
            };
            reader149_Node.isType = true;
            this.methods["Node"] = reader149_Node;
            this.data.TreeIterator = undefined;
            var reader150_TreeIterator = function() {  // reader method TreeIterator
                if (this.data.TreeIterator === undefined) raiseUninitializedVariable("TreeIterator");
                return this.data.TreeIterator;
            };
            reader150_TreeIterator.isType = true;
            this.methods["TreeIterator"] = reader150_TreeIterator;
            var func151 = function(argcv, var_l, var_b, var_r) {    // method twoNode(_,_,_), line 130
                var returnTarget = invocationCount;
                invocationCount++;
                var myframe = new StackFrame("twoNode(3)");
                myframe.addVar("l",
                               function() {return var_l;});
                myframe.addVar("b",
                               function() {return var_b;});
                myframe.addVar("r",
                               function() {return var_r;});
                setLineNumber(130);    // compilenode member
                                       // call case 4: self request with 0 args and 0 typeArgs
                var call152 = selfRequest(this, "Node", [0]);
                assertTypeOrMsg(var_l, call152, "argument 1 in request of `twoNode(_,_,_)`", "Node");
                    // call case 2: outer request
                var call153 = selfRequest(var_prelude, "Binding", [0]);
                assertTypeOrMsg(var_b, call153, "argument 2 in request of `twoNode(_,_,_)`", "Binding");
                    // call case 4: self request with 0 args and 0 typeArgs
                var call154 = selfRequest(this, "Node", [0]);
                assertTypeOrMsg(var_r, call154, "argument 3 in request of `twoNode(_,_,_)`", "Node");
                stackFrames.push(myframe);
                try {
                    var ouc = emptyGraceObject("empty.twoNode(_,_,_)", "twoThreeTree", 130);
                    var ouc_init = this.methods["twoNode(3)$build(3)"].call(this, null, var_l, var_b, var_r, ouc, [], []);
                    ouc_init.call(ouc);
                        // call case 4: self request with 0 args and 0 typeArgs
                    var call155 = selfRequest(this, "Node", [0]);
                    setLineNumber(364);    // typecheck
                    assertTypeOrMsg(ouc, call155, "object returned from twoNode(_,_,_)", "Node");
                    return ouc;
                } finally {
                    stackFrames.pop();
                }
            };    // end of method twoNode(_,_,_)
            func151.confidential = true;
            this.methods["twoNode(3)"] = func151;
            func151.methodName = "twoNode(3)";
            func151.paramCounts = [3];
            func151.paramNames = ["l", "b", "r"];
            func151.definitionLine = 130;
            func151.definitionModule = "twoThreeTree";
            var func156 = function(argcv, var_l, var_b, var_r, inheritingObject, aliases, exclusions) {    // method twoNode(_,_,_)$build(_,_,_), line 130
                var returnTarget = invocationCount;
                invocationCount++;
                setLineNumber(130);    // compilenode member
                                       // call case 4: self request with 0 args and 0 typeArgs
                var call157 = selfRequest(this, "Node", [0]);
                assertTypeOrMsg(var_l, call157, "argument 1 in request of `twoNode(_,_,_)`", "Node");
                    // call case 2: outer request
                var call158 = selfRequest(var_prelude, "Binding", [0]);
                assertTypeOrMsg(var_b, call158, "argument 2 in request of `twoNode(_,_,_)`", "Binding");
                    // call case 4: self request with 0 args and 0 typeArgs
                var call159 = selfRequest(this, "Node", [0]);
                assertTypeOrMsg(var_r, call159, "argument 3 in request of `twoNode(_,_,_)`", "Node");
                var obj160_build = function(ignore, var_l, var_b, var_r, outerObj, aliases, exclusions) {
                    this.closureKeys = this.closureKeys || [];
                    this.closureKeys.push("outer_twoThreeTree_130");
                    this.outer_twoThreeTree_130 = outerObj;
                    const inheritedExclusions = { };
                    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
                        const exMeth = exclusions[eix];
                        inheritedExclusions[exMeth] = this.methods[exMeth]; };
                    this.data.contents = undefined;
                    var reader161_contents = function() {  // reader method contents
                        if (this.data.contents === undefined) raiseUninitializedVariable("contents");
                        return this.data.contents;
                    };
                    reader161_contents.isVar = true;
                    this.methods["contents"] = reader161_contents;
                    var writer162_contents = function(argcv, n) {   // writer method contents:=(_)
                        this.data.contents = n;
                        return GraceDone;
                    };
                    writer162_contents.confidential = true;
                    this.methods["contents:=(1)"] = writer162_contents;
                    this.data.left = undefined;
                    var reader163_left = function() {  // reader method left
                        if (this.data.left === undefined) raiseUninitializedVariable("left");
                        return this.data.left;
                    };
                    reader163_left.isVar = true;
                    this.methods["left"] = reader163_left;
                    var writer164_left = function(argcv, n) {   // writer method left:=(_)
                        this.data.left = n;
                        return GraceDone;
                    };
                    this.methods["left:=(1)"] = writer164_left;
                    this.data.right = undefined;
                    var reader165_right = function() {  // reader method right
                        if (this.data.right === undefined) raiseUninitializedVariable("right");
                        return this.data.right;
                    };
                    reader165_right.isVar = true;
                    this.methods["right"] = reader165_right;
                    var writer166_right = function(argcv, n) {   // writer method right:=(_)
                        this.data.right = n;
                        return GraceDone;
                    };
                    this.methods["right:=(1)"] = writer166_right;
                    var func167 = function(argcv) {    // method key, line 134
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("key");
                        stackFrames.push(myframe);
                        try {
                            setLineNumber(134);    // compilenode member
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call169 = selfRequest(this, "contents", [0]);
                            var call168 = request(call169, "key", [0]);
                            return call168;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method key
                    this.methods["key"] = func167;
                    func167.methodName = "key";
                    func167.paramCounts = [0];
                    func167.paramNames = [];
                    func167.definitionLine = 134;
                    func167.definitionModule = "twoThreeTree";
                    var func170 = function(argcv) {    // method value, line 135
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("value");
                        stackFrames.push(myframe);
                        try {
                            setLineNumber(135);    // compilenode member
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call172 = selfRequest(this, "contents", [0]);
                            var call171 = request(call172, "value", [0]);
                            return call171;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method value
                    this.methods["value"] = func170;
                    func170.methodName = "value";
                    func170.paramCounts = [0];
                    func170.paramNames = [];
                    func170.definitionLine = 135;
                    func170.definitionModule = "twoThreeTree";
                    var func173 = function(argcv) {    // method asDebugString, line 136
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("asDebugString");
                        stackFrames.push(myframe);
                        try {
                            setLineNumber(137);    // compilenode string
                            var string174 = new GraceString("(2.1: ");
                                // call case 6: other requests
                                // call case 4: self request with 0 args and 0 typeArgs
                            var call176 = selfRequest(this, "left", [0]);
                            var call175 = request(call176, "asDebugString", [0]);
                            var opresult177 = request(string174, "++(1)", [1], call175);
                            var string178 = new GraceString(", 2.C ");
                            var opresult179 = request(opresult177, "++(1)", [1], string178);
                                // call case 4: self request with 0 args and 0 typeArgs
                            var call180 = selfRequest(this, "contents", [0]);
                            var opresult181 = request(opresult179, "++(1)", [1], call180);
                            var string182 = new GraceString(", 2.2: ");
                            var opresult183 = request(opresult181, "++(1)", [1], string182);
                                // call case 6: other requests
                                // call case 4: self request with 0 args and 0 typeArgs
                            var call185 = selfRequest(this, "right", [0]);
                            var call184 = request(call185, "asDebugString", [0]);
                            var opresult186 = request(opresult183, "++(1)", [1], call184);
                            var string187 = new GraceString(")");
                            var opresult188 = request(opresult186, "++(1)", [1], string187);
                            return opresult188;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method asDebugString
                    this.methods["asDebugString"] = func173;
                    func173.methodName = "asDebugString";
                    func173.paramCounts = [0];
                    func173.paramNames = [];
                    func173.definitionLine = 136;
                    func173.definitionModule = "twoThreeTree";
                    var func189 = function(argcv, var_action) {    // method do(_), line 139
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("do(1)");
                        myframe.addVar("action",
                                       function() {return var_action;});
                        stackFrames.push(myframe);
                        try {
                            setLineNumber(140);    // compilenode call
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call191 = selfRequest(this, "left", [0]);
                            var call190 = request(call191, "do(1)", [1], var_action);
                            var if192 = GraceDone;
                            setLineNumber(141);    // compilenode member
                                                   // call case 2: outer request
                            var call193 = selfRequest(this.outer_twoThreeTree_130, "Deleted", [0]);
                                // call case 6: other requests
                                // call case 4: self request with 0 args and 0 typeArgs
                            var call195 = selfRequest(this, "contents", [0]);
                            var call194 = request(call195, "value", [0]);
                            var opresult196 = request(call193, "\u2260(1)", [1], call194);
                            if (Grace_isTrue(opresult196)) {
                                setLineNumber(142);    // compilenode member
                                                       // call case 4: self request with 0 args and 0 typeArgs
                                var call198 = selfRequest(this, "contents", [0]);
                                    // call case 6: other requests
                                var call197 = request(var_action, "apply(1)", [1], call198);
                                if192 = call197;
                            }
                            setLineNumber(144);    // compilenode call
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call200 = selfRequest(this, "right", [0]);
                            var call199 = request(call200, "do(1)", [1], var_action);
                            return call199;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method do(_)
                    this.methods["do(1)"] = func189;
                    func189.methodName = "do(1)";
                    func189.paramCounts = [1];
                    func189.paramNames = ["action"];
                    func189.definitionLine = 139;
                    func189.definitionModule = "twoThreeTree";
                    var func201 = function(argcv, var_new, var_replaceMeBy, var_absorb) {    // method add(_)setParent(_)absorb(_), line 146
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("add(1)setParent(1)absorb(1)");
                        myframe.addVar("new",
                                       function() {return var_new;});
                        myframe.addVar("replaceMeBy",
                                       function() {return var_replaceMeBy;});
                        myframe.addVar("absorb",
                                       function() {return var_absorb;});
                        setLineNumber(146);    // compilenode member
                                               // call case 2: outer request
                        var call202 = selfRequest(var_prelude, "Binding", [0]);
                        assertTypeOrMsg(var_new, call202, "argument 1 in request of `add(_)setParent(_)absorb(_)`", "Binding");
                        stackFrames.push(myframe);
                        try {
                            var if203 = GraceDone;
                            setLineNumber(147);    // compilenode member
                                                   // call case 6: other requests
                            var call204 = request(var_new, "key", [0]);
                                // call case 6: other requests
                                // call case 4: self request with 0 args and 0 typeArgs
                            var call206 = selfRequest(this, "contents", [0]);
                            var call205 = request(call206, "key", [0]);
                            var opresult207 = request(call204, "==(1)", [1], call205);
                            if (Grace_isTrue(opresult207)) {
                                setLineNumber(148);    // compilenode call
                                                       // call case 4: self request with 1 args and 0 typeArgs
                                var call208 = selfRequest(this, "contents:=(1)", [1], var_new);
                                setLineNumber(149);    // compilenode return
                                return var_done;
                            }
                            var if209 = GraceDone;
                            setLineNumber(151);    // compilenode member
                                                   // call case 6: other requests
                            var call210 = request(var_new, "key", [0]);
                                // call case 6: other requests
                                // call case 4: self request with 0 args and 0 typeArgs
                            var call212 = selfRequest(this, "contents", [0]);
                            var call211 = request(call212, "key", [0]);
                            var opresult213 = request(call210, "<(1)", [1], call211);
                            if (Grace_isTrue(opresult213)) {
                                setLineNumber(152);    // compilenode block
                                var block215 = new GraceBlock(this, 152, 1);
                                block215.guard = jsTrue;
                                block215.real = function block215(var_nu) {
                                    setLineNumber(152);    // compilenode call
                                                           // call case 4: self request with 1 args and 0 typeArgs
                                    var call216 = selfRequest(this, "left:=(1)", [1], var_nu);
                                    return call216;
                                };
                                let applyMeth215 = function apply_1 (argcv, ...args) {
                                    if (this.guard.apply(this.receiver, args))
                                    return this.real.apply(this.receiver, args);
                                    badBlockArgs.apply(this, args);
                                };
                                applyMeth215.methodName = "apply(1)";
                                applyMeth215.paramCounts = [1];
                                applyMeth215.paramNames = ["nu"];
                                applyMeth215.definitionLine = 152;
                                applyMeth215.definitionModule = "twoThreeTree";
                                block215.methods["apply(1)"] = applyMeth215;
                                let matchesMeth215 = function matches_1 (argcv, ...args) {
                                    return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
                                };
                                matchesMeth215.methodName = "matches(1)";
                                matchesMeth215.paramCounts = [1];
                                matchesMeth215.paramNames = ["nu"];
                                matchesMeth215.definitionLine = 152;
                                matchesMeth215.definitionModule = "twoThreeTree";
                                block215.methods["matches(1)"] = matchesMeth215;
                                var block217 = new GraceBlock(this, 152, 1);
                                block217.guard = jsTrue;
                                block217.real = function block217(var_ex) {
                                    setLineNumber(153);    // compilenode defdec
                                    myframe.addVar("newNode", function() {return var_newNode});
                                        // call case 6: other requests
                                    var call219 = request(var_ex, "left", [0]);
                                        // call case 6: other requests
                                    var call220 = request(var_ex, "contents", [0]);
                                        // call case 6: other requests
                                    var call221 = request(var_ex, "right", [0]);
                                        // call case 4: self request with 0 args and 0 typeArgs
                                    var call222 = selfRequest(this, "contents", [0]);
                                        // call case 4: self request with 0 args and 0 typeArgs
                                    var call223 = selfRequest(this, "right", [0]);
                                        // call case 2: outer request
                                    var call218 = selfRequest(this.outer_twoThreeTree_130, "threeNode(5)", [5], call219, call220, call221, call222, call223);
                                    var var_newNode = call218;
                                    setLineNumber(154);    // compilenode call
                                    if (var_newNode === undefined) raiseUninitializedVariable("newNode");
                                        // call case 6: other requests
                                    var call224 = request(var_replaceMeBy, "apply(1)", [1], var_newNode);
                                    return call224;
                                };
                                let applyMeth217 = function apply_1 (argcv, ...args) {
                                    if (this.guard.apply(this.receiver, args))
                                    return this.real.apply(this.receiver, args);
                                    badBlockArgs.apply(this, args);
                                };
                                applyMeth217.methodName = "apply(1)";
                                applyMeth217.paramCounts = [1];
                                applyMeth217.paramNames = ["ex"];
                                applyMeth217.definitionLine = 152;
                                applyMeth217.definitionModule = "twoThreeTree";
                                block217.methods["apply(1)"] = applyMeth217;
                                let matchesMeth217 = function matches_1 (argcv, ...args) {
                                    return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
                                };
                                matchesMeth217.methodName = "matches(1)";
                                matchesMeth217.paramCounts = [1];
                                matchesMeth217.paramNames = ["ex"];
                                matchesMeth217.definitionLine = 152;
                                matchesMeth217.definitionModule = "twoThreeTree";
                                block217.methods["matches(1)"] = matchesMeth217;
                                    // call case 6: other requests
                                setLineNumber(152);    // compilenode member
                                                       // call case 4: self request with 0 args and 0 typeArgs
                                var call225 = selfRequest(this, "left", [0]);
                                var call214 = request(call225, "add(1)setParent(1)absorb(1)", [1, 1, 1], var_new, block215, block217);
                                if209 = call214;
                            } else {
                                setLineNumber(157);    // compilenode block
                                var block227 = new GraceBlock(this, 157, 1);
                                block227.guard = jsTrue;
                                block227.real = function block227(var_nu) {
                                    setLineNumber(157);    // compilenode call
                                                           // call case 4: self request with 1 args and 0 typeArgs
                                    var call228 = selfRequest(this, "right:=(1)", [1], var_nu);
                                    return call228;
                                };
                                let applyMeth227 = function apply_1 (argcv, ...args) {
                                    if (this.guard.apply(this.receiver, args))
                                    return this.real.apply(this.receiver, args);
                                    badBlockArgs.apply(this, args);
                                };
                                applyMeth227.methodName = "apply(1)";
                                applyMeth227.paramCounts = [1];
                                applyMeth227.paramNames = ["nu"];
                                applyMeth227.definitionLine = 157;
                                applyMeth227.definitionModule = "twoThreeTree";
                                block227.methods["apply(1)"] = applyMeth227;
                                let matchesMeth227 = function matches_1 (argcv, ...args) {
                                    return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
                                };
                                matchesMeth227.methodName = "matches(1)";
                                matchesMeth227.paramCounts = [1];
                                matchesMeth227.paramNames = ["nu"];
                                matchesMeth227.definitionLine = 157;
                                matchesMeth227.definitionModule = "twoThreeTree";
                                block227.methods["matches(1)"] = matchesMeth227;
                                var block229 = new GraceBlock(this, 157, 1);
                                block229.guard = jsTrue;
                                block229.real = function block229(var_ex) {
                                    setLineNumber(158);    // compilenode defdec
                                    myframe.addVar("newNode", function() {return var_newNode});
                                        // call case 4: self request with 0 args and 0 typeArgs
                                    var call231 = selfRequest(this, "left", [0]);
                                        // call case 4: self request with 0 args and 0 typeArgs
                                    var call232 = selfRequest(this, "contents", [0]);
                                        // call case 6: other requests
                                    var call233 = request(var_ex, "left", [0]);
                                        // call case 6: other requests
                                    var call234 = request(var_ex, "contents", [0]);
                                        // call case 6: other requests
                                    var call235 = request(var_ex, "right", [0]);
                                        // call case 2: outer request
                                    var call230 = selfRequest(this.outer_twoThreeTree_130, "threeNode(5)", [5], call231, call232, call233, call234, call235);
                                    var var_newNode = call230;
                                    setLineNumber(159);    // compilenode call
                                    if (var_newNode === undefined) raiseUninitializedVariable("newNode");
                                        // call case 6: other requests
                                    var call236 = request(var_replaceMeBy, "apply(1)", [1], var_newNode);
                                    return call236;
                                };
                                let applyMeth229 = function apply_1 (argcv, ...args) {
                                    if (this.guard.apply(this.receiver, args))
                                    return this.real.apply(this.receiver, args);
                                    badBlockArgs.apply(this, args);
                                };
                                applyMeth229.methodName = "apply(1)";
                                applyMeth229.paramCounts = [1];
                                applyMeth229.paramNames = ["ex"];
                                applyMeth229.definitionLine = 157;
                                applyMeth229.definitionModule = "twoThreeTree";
                                block229.methods["apply(1)"] = applyMeth229;
                                let matchesMeth229 = function matches_1 (argcv, ...args) {
                                    return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
                                };
                                matchesMeth229.methodName = "matches(1)";
                                matchesMeth229.paramCounts = [1];
                                matchesMeth229.paramNames = ["ex"];
                                matchesMeth229.definitionLine = 157;
                                matchesMeth229.definitionModule = "twoThreeTree";
                                block229.methods["matches(1)"] = matchesMeth229;
                                    // call case 6: other requests
                                setLineNumber(157);    // compilenode member
                                                       // call case 4: self request with 0 args and 0 typeArgs
                                var call237 = selfRequest(this, "right", [0]);
                                var call226 = request(call237, "add(1)setParent(1)absorb(1)", [1, 1, 1], var_new, block227, block229);
                                if209 = call226;
                            }
                            return if209;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method add(_)setParent(_)absorb(_)
                    this.methods["add(1)setParent(1)absorb(1)"] = func201;
                    func201.methodName = "add(1)setParent(1)absorb(1)";
                    func201.paramCounts = [1, 1, 1];
                    func201.paramNames = ["new", "replaceMeBy", "absorb"];
                    func201.definitionLine = 146;
                    func201.definitionModule = "twoThreeTree";
                    var func238 = function(argcv, var_k, var_action) {    // method at(_)ifAbsent(_), line 163
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("at(1)ifAbsent(1)");
                        myframe.addVar("k",
                                       function() {return var_k;});
                        myframe.addVar("action",
                                       function() {return var_action;});
                        stackFrames.push(myframe);
                        try {
                            var if239 = GraceDone;
                            setLineNumber(164);    // compilenode member
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call241 = selfRequest(this, "contents", [0]);
                            var call240 = request(call241, "key", [0]);
                            var opresult242 = request(var_k, "==(1)", [1], call240);
                            if (Grace_isTrue(opresult242)) {
                                var if243 = GraceDone;
                                setLineNumber(165);    // compilenode member
                                                       // call case 2: outer request
                                var call244 = selfRequest(this.outer_twoThreeTree_130, "Deleted", [0]);
                                    // call case 6: other requests
                                    // call case 4: self request with 0 args and 0 typeArgs
                                var call246 = selfRequest(this, "contents", [0]);
                                var call245 = request(call246, "value", [0]);
                                var opresult247 = request(call244, "==(1)", [1], call245);
                                if (Grace_isTrue(opresult247)) {
                                    setLineNumber(166);    // compilenode member
                                                           // call case 6: other requests
                                    var call248 = request(var_action, "apply", [0]);
                                    if243 = call248;
                                } else {
                                    setLineNumber(168);    // compilenode member
                                                           // call case 6: other requests
                                                           // call case 4: self request with 0 args and 0 typeArgs
                                    var call250 = selfRequest(this, "contents", [0]);
                                    var call249 = request(call250, "value", [0]);
                                    if243 = call249;
                                }
                                if239 = if243;
                            } else {
                                var if251 = GraceDone;
                                setLineNumber(170);    // compilenode member
                                                       // call case 6: other requests
                                                       // call case 4: self request with 0 args and 0 typeArgs
                                var call253 = selfRequest(this, "contents", [0]);
                                var call252 = request(call253, "key", [0]);
                                var opresult254 = request(var_k, "<(1)", [1], call252);
                                if (Grace_isTrue(opresult254)) {
                                    setLineNumber(171);    // compilenode call
                                                           // call case 6: other requests
                                                           // call case 4: self request with 0 args and 0 typeArgs
                                    var call256 = selfRequest(this, "left", [0]);
                                    var call255 = request(call256, "at(1)ifAbsent(1)", [1, 1], var_k, var_action);
                                    if251 = call255;
                                } else {
                                    setLineNumber(173);    // compilenode call
                                                           // call case 6: other requests
                                                           // call case 4: self request with 0 args and 0 typeArgs
                                    var call258 = selfRequest(this, "right", [0]);
                                    var call257 = request(call258, "at(1)ifAbsent(1)", [1, 1], var_k, var_action);
                                    if251 = call257;
                                }
                                if239 = if251;
                            }
                            return if239;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method at(_)ifAbsent(_)
                    this.methods["at(1)ifAbsent(1)"] = func238;
                    func238.methodName = "at(1)ifAbsent(1)";
                    func238.paramCounts = [1, 1];
                    func238.paramNames = ["k", "action"];
                    func238.definitionLine = 163;
                    func238.definitionModule = "twoThreeTree";
                    var func259 = function(argcv, var_k, var_action) {    // method removeKey(_)ifAbsent(_), line 176
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("removeKey(1)ifAbsent(1)");
                        myframe.addVar("k",
                                       function() {return var_k;});
                        myframe.addVar("action",
                                       function() {return var_action;});
                        stackFrames.push(myframe);
                        try {
                            var if260 = GraceDone;
                            setLineNumber(177);    // compilenode member
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call262 = selfRequest(this, "contents", [0]);
                            var call261 = request(call262, "key", [0]);
                            var opresult263 = request(var_k, "==(1)", [1], call261);
                            if (Grace_isTrue(opresult263)) {
                                var if264 = GraceDone;
                                setLineNumber(178);    // compilenode member
                                                       // call case 2: outer request
                                var call265 = selfRequest(this.outer_twoThreeTree_130, "Deleted", [0]);
                                    // call case 6: other requests
                                    // call case 4: self request with 0 args and 0 typeArgs
                                var call267 = selfRequest(this, "contents", [0]);
                                var call266 = request(call267, "value", [0]);
                                var opresult268 = request(call265, "==(1)", [1], call266);
                                if (Grace_isTrue(opresult268)) {
                                    setLineNumber(179);    // compilenode member
                                                           // call case 6: other requests
                                    var call269 = request(var_action, "apply", [0]);
                                    if264 = call269;
                                } else {
                                    setLineNumber(181);    // compilenode member
                                                           // call case 2: outer request
                                    var call271 = selfRequest(this.outer_twoThreeTree_130, "Deleted", [0]);
                                    var opresult272 = request(var_k, "::(1)", [1], call271);
                                        // call case 4: self request with 1 args and 0 typeArgs
                                    var call270 = selfRequest(this, "contents:=(1)", [1], opresult272);
                                    setLineNumber(182);    // compilenode member
                                                           // call case 2: outer request
                                    var call274 = selfRequest(this.outer_twoThreeTree_130, "size", [0]);
                                    var diff275 = request(call274, "-(1)", [1], new GraceNum(1));
                                        // call case 2: outer request
                                    var call273 = selfRequest(this.outer_twoThreeTree_130, "size:=(1)", [1], diff275);
                                    setLineNumber(183);    // compilenode member
                                                           // call case 2: outer request
                                    var call277 = selfRequest(this.outer_twoThreeTree_130, "deletedCount", [0]);
                                    var sum278 = request(call277, "+(1)", [1], new GraceNum(1));
                                        // call case 2: outer request
                                    var call276 = selfRequest(this.outer_twoThreeTree_130, "deletedCount:=(1)", [1], sum278);
                                    if264 = call276;
                                }
                                if260 = if264;
                            } else {
                                var if279 = GraceDone;
                                setLineNumber(185);    // compilenode member
                                                       // call case 6: other requests
                                                       // call case 4: self request with 0 args and 0 typeArgs
                                var call281 = selfRequest(this, "contents", [0]);
                                var call280 = request(call281, "key", [0]);
                                var opresult282 = request(var_k, "<(1)", [1], call280);
                                if (Grace_isTrue(opresult282)) {
                                    setLineNumber(186);    // compilenode call
                                                           // call case 6: other requests
                                                           // call case 4: self request with 0 args and 0 typeArgs
                                    var call284 = selfRequest(this, "left", [0]);
                                    var call283 = request(call284, "removeKey(1)ifAbsent(1)", [1, 1], var_k, var_action);
                                    if279 = call283;
                                } else {
                                    setLineNumber(188);    // compilenode call
                                                           // call case 6: other requests
                                                           // call case 4: self request with 0 args and 0 typeArgs
                                    var call286 = selfRequest(this, "right", [0]);
                                    var call285 = request(call286, "removeKey(1)ifAbsent(1)", [1, 1], var_k, var_action);
                                    if279 = call285;
                                }
                                if260 = if279;
                            }
                            return if260;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method removeKey(_)ifAbsent(_)
                    this.methods["removeKey(1)ifAbsent(1)"] = func259;
                    func259.methodName = "removeKey(1)ifAbsent(1)";
                    func259.paramCounts = [1, 1];
                    func259.paramNames = ["k", "action"];
                    func259.definitionLine = 176;
                    func259.definitionModule = "twoThreeTree";
                    var func287 = function(argcv, var_v) {    // method removeValue(_), line 191
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("removeValue(1)");
                        myframe.addVar("v",
                                       function() {return var_v;});
                        stackFrames.push(myframe);
                        try {
                            setLineNumber(192);    // compilenode call
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call289 = selfRequest(this, "left", [0]);
                            var call288 = request(call289, "removeValue(1)", [1], var_v);
                            setLineNumber(193);    // compilenode call
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call291 = selfRequest(this, "right", [0]);
                            var call290 = request(call291, "removeValue(1)", [1], var_v);
                            var if292 = GraceDone;
                            setLineNumber(194);    // compilenode member
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call294 = selfRequest(this, "contents", [0]);
                            var call293 = request(call294, "value", [0]);
                            var opresult295 = request(var_v, "==(1)", [1], call293);
                            if (Grace_isTrue(opresult295)) {
                                setLineNumber(195);    // compilenode member
                                                       // call case 6: other requests
                                                       // call case 4: self request with 0 args and 0 typeArgs
                                var call298 = selfRequest(this, "contents", [0]);
                                var call297 = request(call298, "key", [0]);
                                    // call case 2: outer request
                                var call299 = selfRequest(this.outer_twoThreeTree_130, "Deleted", [0]);
                                var opresult300 = request(call297, "::(1)", [1], call299);
                                    // call case 4: self request with 1 args and 0 typeArgs
                                var call296 = selfRequest(this, "contents:=(1)", [1], opresult300);
                                setLineNumber(196);    // compilenode member
                                                       // call case 2: outer request
                                var call302 = selfRequest(this.outer_twoThreeTree_130, "size", [0]);
                                var diff303 = request(call302, "-(1)", [1], new GraceNum(1));
                                    // call case 2: outer request
                                var call301 = selfRequest(this.outer_twoThreeTree_130, "size:=(1)", [1], diff303);
                                setLineNumber(197);    // compilenode member
                                                       // call case 2: outer request
                                var call305 = selfRequest(this.outer_twoThreeTree_130, "deletedCount", [0]);
                                var sum306 = request(call305, "+(1)", [1], new GraceNum(1));
                                    // call case 2: outer request
                                var call304 = selfRequest(this.outer_twoThreeTree_130, "deletedCount:=(1)", [1], sum306);
                                if292 = call304;
                            }
                            return if292;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method removeValue(_)
                    this.methods["removeValue(1)"] = func287;
                    func287.methodName = "removeValue(1)";
                    func287.paramCounts = [1];
                    func287.paramNames = ["v"];
                    func287.definitionLine = 191;
                    func287.definitionModule = "twoThreeTree";
                    var func307 = function(argcv, var_anIterator) {    // method buildZipperFor(_), line 202
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("buildZipperFor(1)");
                        myframe.addVar("anIterator",
                                       function() {return var_anIterator;});
                        stackFrames.push(myframe);
                        try {
                            setLineNumber(203);    // compilenode member
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call309 = selfRequest(this, "tooth", [0]);
                                // call case 6: other requests
                            var call308 = request(var_anIterator, "remember(1)", [1], call309);
                            setLineNumber(204);    // compilenode call
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call311 = selfRequest(this, "left", [0]);
                            var call310 = request(call311, "buildZipperFor(1)", [1], var_anIterator);
                            return call310;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method buildZipperFor(_)
                    this.methods["buildZipperFor(1)"] = func307;
                    func307.methodName = "buildZipperFor(1)";
                    func307.paramCounts = [1];
                    func307.paramNames = ["anIterator"];
                    func307.definitionLine = 202;
                    func307.definitionModule = "twoThreeTree";
                    var func312 = function(argcv) {    // method tooth, line 207
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("tooth");
                        stackFrames.push(myframe);
                        try {
                            var ouc = emptyGraceObject("empty.twoNode(_,_,_).tooth", "twoThreeTree", 207);
                            var ouc_init = this.methods["tooth$build(3)"].call(this, null, ouc, [], []);
                            ouc_init.call(ouc);
                            return ouc;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method tooth
                    this.methods["tooth"] = func312;
                    func312.methodName = "tooth";
                    func312.paramCounts = [0];
                    func312.paramNames = [];
                    func312.definitionLine = 207;
                    func312.definitionModule = "twoThreeTree";
                    var func313 = function(argcv, inheritingObject, aliases, exclusions) {    // method tooth$build(_,_,_), line 207
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var obj314_build = function(ignore, outerObj, aliases, exclusions) {
                            this.closureKeys = this.closureKeys || [];
                            this.closureKeys.push("outer_twoThreeTree_207");
                            this.outer_twoThreeTree_207 = outerObj;
                            const inheritedExclusions = { };
                            for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
                                const exMeth = exclusions[eix];
                                inheritedExclusions[exMeth] = this.methods[exMeth]; };
                            var func315 = function(argcv, var_anIterator) {    // method visit(_), line 208
                                var returnTarget = invocationCount;
                                invocationCount++;
                                var myframe = new StackFrame("visit(1)");
                                myframe.addVar("anIterator",
                                               function() {return var_anIterator;});
                                stackFrames.push(myframe);
                                try {
                                    setLineNumber(209);    // compilenode call
                                                           // call case 6: other requests
                                                           // call case 2: outer request
                                    var call317 = selfRequest(this.outer_twoThreeTree_207, "right", [0]);
                                    var call316 = request(call317, "buildZipperFor(1)", [1], var_anIterator);
                                    setLineNumber(210);    // compilenode member
                                                           // call case 2: outer request
                                    var call318 = selfRequest(this.outer_twoThreeTree_207, "contents", [0]);
                                    return call318;
                                } finally {
                                    stackFrames.pop();
                                }
                            };    // end of method visit(_)
                            this.methods["visit(1)"] = func315;
                            func315.methodName = "visit(1)";
                            func315.paramCounts = [1];
                            func315.paramNames = ["anIterator"];
                            func315.definitionLine = 208;
                            func315.definitionModule = "twoThreeTree";
                            const overridenByAliases = { };
                            for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
                                const a = aliases[aix];
                                const newNm = a.newName;
                                const oldNm = a.oldName;
                                overridenByAliases[newNm] = this.methods[newNm];
                                const m = confidentialVersion(inheritedExclusions[oldNm] || overridenByAliases[oldNm] || this.methods[oldNm], newNm);
                                m.definitionLine = 207;
                                m.definitionModule = "twoThreeTree";
                                this.methods[newNm] = m;
                            }
                            for (let exName in inheritedExclusions) {
                                if (inheritedExclusions.hasOwnProperty(exName)) {
                                    if (inheritedExclusions[exName]) {
                                        this.methods[exName] = inheritedExclusions[exName];
                                    } else {
                                        delete this.methods[exName];
                                    }
                                }
                            }
                            var obj314_init = function() {    // init of object on line 207
                            };
                            return obj314_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
                        };
                        var obj314_init = obj314_build.call(inheritingObject, null, this, aliases, exclusions);
                        return obj314_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
                    };    // end of method tooth$build(_,_,_)
                    this.methods["tooth$build(3)"] = func313;
                    func313.methodName = "tooth$build(3)";
                    func313.paramCounts = [0];
                    func313.paramNames = [];
                    func313.definitionLine = 207;
                    func313.definitionModule = "twoThreeTree";
                    this.mutable = true;
                    const overridenByAliases = { };
                    for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
                        const a = aliases[aix];
                        const newNm = a.newName;
                        const oldNm = a.oldName;
                        overridenByAliases[newNm] = this.methods[newNm];
                        const m = confidentialVersion(inheritedExclusions[oldNm] || overridenByAliases[oldNm] || this.methods[oldNm], newNm);
                        m.definitionLine = 130;
                        m.definitionModule = "twoThreeTree";
                        this.methods[newNm] = m;
                    }
                    for (let exName in inheritedExclusions) {
                        if (inheritedExclusions.hasOwnProperty(exName)) {
                            if (inheritedExclusions[exName]) {
                                this.methods[exName] = inheritedExclusions[exName];
                            } else {
                                delete this.methods[exName];
                            }
                        }
                    }
                    var obj160_init = function() {    // init of object on line 130
                        this.data.contents = var_b;
                        this.data.left = var_l;
                        this.data.right = var_r;
                    };
                    return obj160_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
                };
                var obj160_init = obj160_build.call(inheritingObject, null, var_l, var_b, var_r, this, aliases, exclusions);
                return obj160_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
            };    // end of method twoNode(_,_,_)$build(_,_,_)
            func156.confidential = true;
            this.methods["twoNode(3)$build(3)"] = func156;
            func156.methodName = "twoNode(3)$build(3)";
            func156.paramCounts = [3];
            func156.paramNames = ["l", "b", "r"];
            func156.definitionLine = 130;
            func156.definitionModule = "twoThreeTree";
            var func319 = function(argcv, var_l, var_lb, var_m, var_rb, var_r) {    // method threeNode(_,_,_,_,_), line 215
                var returnTarget = invocationCount;
                invocationCount++;
                var myframe = new StackFrame("threeNode(5)");
                myframe.addVar("l",
                               function() {return var_l;});
                myframe.addVar("lb",
                               function() {return var_lb;});
                myframe.addVar("m",
                               function() {return var_m;});
                myframe.addVar("rb",
                               function() {return var_rb;});
                myframe.addVar("r",
                               function() {return var_r;});
                setLineNumber(215);    // compilenode member
                                       // call case 2: outer request
                var call320 = selfRequest(var_prelude, "Binding", [0]);
                assertTypeOrMsg(var_lb, call320, "argument 2 in request of `threeNode(_,_,_,_,_)`", "Binding");
                    // call case 2: outer request
                var call321 = selfRequest(var_prelude, "Binding", [0]);
                assertTypeOrMsg(var_rb, call321, "argument 4 in request of `threeNode(_,_,_,_,_)`", "Binding");
                stackFrames.push(myframe);
                try {
                    var ouc = emptyGraceObject("empty.threeNode(_,_,_,_,_)", "twoThreeTree", 215);
                    var ouc_init = this.methods["threeNode(5)$build(3)"].call(this, null, var_l, var_lb, var_m, var_rb, var_r, ouc, [], []);
                    ouc_init.call(ouc);
                        // call case 4: self request with 0 args and 0 typeArgs
                    var call322 = selfRequest(this, "Node", [0]);
                    setLineNumber(429);    // typecheck
                    assertTypeOrMsg(ouc, call322, "object returned from threeNode(_,_,_,_,_)", "Node");
                    return ouc;
                } finally {
                    stackFrames.pop();
                }
            };    // end of method threeNode(_,_,_,_,_)
            func319.confidential = true;
            this.methods["threeNode(5)"] = func319;
            func319.methodName = "threeNode(5)";
            func319.paramCounts = [5];
            func319.paramNames = ["l", "lb", "m", "rb", "r"];
            func319.definitionLine = 215;
            func319.definitionModule = "twoThreeTree";
            var func323 = function(argcv, var_l, var_lb, var_m, var_rb, var_r, inheritingObject, aliases, exclusions) {    // method threeNode(_,_,_,_,_)$build(_,_,_), line 215
                var returnTarget = invocationCount;
                invocationCount++;
                setLineNumber(215);    // compilenode member
                                       // call case 2: outer request
                var call324 = selfRequest(var_prelude, "Binding", [0]);
                assertTypeOrMsg(var_lb, call324, "argument 2 in request of `threeNode(_,_,_,_,_)`", "Binding");
                    // call case 2: outer request
                var call325 = selfRequest(var_prelude, "Binding", [0]);
                assertTypeOrMsg(var_rb, call325, "argument 4 in request of `threeNode(_,_,_,_,_)`", "Binding");
                var obj326_build = function(ignore, var_l, var_lb, var_m, var_rb, var_r, outerObj, aliases, exclusions) {
                    this.closureKeys = this.closureKeys || [];
                    this.closureKeys.push("outer_twoThreeTree_215");
                    this.outer_twoThreeTree_215 = outerObj;
                    const inheritedExclusions = { };
                    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
                        const exMeth = exclusions[eix];
                        inheritedExclusions[exMeth] = this.methods[exMeth]; };
                    this.data.leftContents = undefined;
                    var reader327_leftContents = function() {  // reader method leftContents
                        if (this.data.leftContents === undefined) raiseUninitializedVariable("leftContents");
                        return this.data.leftContents;
                    };
                    reader327_leftContents.isVar = true;
                    reader327_leftContents.confidential = true;
                    this.methods["leftContents"] = reader327_leftContents;
                    var writer328_leftContents = function(argcv, n) {   // writer method leftContents:=(_)
                        this.data.leftContents = n;
                        return GraceDone;
                    };
                    writer328_leftContents.confidential = true;
                    this.methods["leftContents:=(1)"] = writer328_leftContents;
                    this.data.rightContents = undefined;
                    var reader329_rightContents = function() {  // reader method rightContents
                        if (this.data.rightContents === undefined) raiseUninitializedVariable("rightContents");
                        return this.data.rightContents;
                    };
                    reader329_rightContents.isVar = true;
                    reader329_rightContents.confidential = true;
                    this.methods["rightContents"] = reader329_rightContents;
                    var writer330_rightContents = function(argcv, n) {   // writer method rightContents:=(_)
                        this.data.rightContents = n;
                        return GraceDone;
                    };
                    writer330_rightContents.confidential = true;
                    this.methods["rightContents:=(1)"] = writer330_rightContents;
                    this.data.left = undefined;
                    var reader331_left = function() {  // reader method left
                        if (this.data.left === undefined) raiseUninitializedVariable("left");
                        return this.data.left;
                    };
                    reader331_left.isVar = true;
                    this.methods["left"] = reader331_left;
                    var writer332_left = function(argcv, n) {   // writer method left:=(_)
                        this.data.left = n;
                        return GraceDone;
                    };
                    writer332_left.confidential = true;
                    this.methods["left:=(1)"] = writer332_left;
                    this.data.middle = undefined;
                    var reader333_middle = function() {  // reader method middle
                        if (this.data.middle === undefined) raiseUninitializedVariable("middle");
                        return this.data.middle;
                    };
                    reader333_middle.isVar = true;
                    this.methods["middle"] = reader333_middle;
                    var writer334_middle = function(argcv, n) {   // writer method middle:=(_)
                        this.data.middle = n;
                        return GraceDone;
                    };
                    writer334_middle.confidential = true;
                    this.methods["middle:=(1)"] = writer334_middle;
                    this.data.right = undefined;
                    var reader335_right = function() {  // reader method right
                        if (this.data.right === undefined) raiseUninitializedVariable("right");
                        return this.data.right;
                    };
                    reader335_right.isVar = true;
                    this.methods["right"] = reader335_right;
                    var writer336_right = function(argcv, n) {   // writer method right:=(_)
                        this.data.right = n;
                        return GraceDone;
                    };
                    writer336_right.confidential = true;
                    this.methods["right:=(1)"] = writer336_right;
                    var func337 = function(argcv) {    // method leftKey, line 222
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("leftKey");
                        stackFrames.push(myframe);
                        try {
                            setLineNumber(222);    // compilenode member
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call339 = selfRequest(this, "leftContents", [0]);
                            var call338 = request(call339, "key", [0]);
                            return call338;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method leftKey
                    this.methods["leftKey"] = func337;
                    func337.methodName = "leftKey";
                    func337.paramCounts = [0];
                    func337.paramNames = [];
                    func337.definitionLine = 222;
                    func337.definitionModule = "twoThreeTree";
                    var func340 = function(argcv) {    // method leftValue, line 223
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("leftValue");
                        stackFrames.push(myframe);
                        try {
                            setLineNumber(223);    // compilenode member
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call342 = selfRequest(this, "leftContents", [0]);
                            var call341 = request(call342, "value", [0]);
                            return call341;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method leftValue
                    this.methods["leftValue"] = func340;
                    func340.methodName = "leftValue";
                    func340.paramCounts = [0];
                    func340.paramNames = [];
                    func340.definitionLine = 223;
                    func340.definitionModule = "twoThreeTree";
                    var func343 = function(argcv) {    // method rightKey, line 224
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("rightKey");
                        stackFrames.push(myframe);
                        try {
                            setLineNumber(224);    // compilenode member
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call345 = selfRequest(this, "rightContents", [0]);
                            var call344 = request(call345, "key", [0]);
                            return call344;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method rightKey
                    this.methods["rightKey"] = func343;
                    func343.methodName = "rightKey";
                    func343.paramCounts = [0];
                    func343.paramNames = [];
                    func343.definitionLine = 224;
                    func343.definitionModule = "twoThreeTree";
                    var func346 = function(argcv) {    // method rightValue, line 225
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("rightValue");
                        stackFrames.push(myframe);
                        try {
                            setLineNumber(225);    // compilenode member
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call348 = selfRequest(this, "rightContents", [0]);
                            var call347 = request(call348, "value", [0]);
                            return call347;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method rightValue
                    this.methods["rightValue"] = func346;
                    func346.methodName = "rightValue";
                    func346.paramCounts = [0];
                    func346.paramNames = [];
                    func346.definitionLine = 225;
                    func346.definitionModule = "twoThreeTree";
                    var func349 = function(argcv) {    // method asDebugString, line 226
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("asDebugString");
                        stackFrames.push(myframe);
                        try {
                            setLineNumber(227);    // compilenode string
                            var string350 = new GraceString("(3.1: ");
                                // call case 6: other requests
                                // call case 4: self request with 0 args and 0 typeArgs
                            var call352 = selfRequest(this, "left", [0]);
                            var call351 = request(call352, "asDebugString", [0]);
                            var opresult353 = request(string350, "++(1)", [1], call351);
                            var string354 = new GraceString(", 3.L: ");
                            var opresult355 = request(opresult353, "++(1)", [1], string354);
                                // call case 4: self request with 0 args and 0 typeArgs
                            var call356 = selfRequest(this, "leftContents", [0]);
                            var opresult357 = request(opresult355, "++(1)", [1], call356);
                            var string358 = new GraceString(", 3.2");
                            var opresult359 = request(opresult357, "++(1)", [1], string358);
                                // call case 6: other requests
                                // call case 4: self request with 0 args and 0 typeArgs
                            var call361 = selfRequest(this, "middle", [0]);
                            var call360 = request(call361, "asDebugString", [0]);
                            var opresult362 = request(opresult359, "++(1)", [1], call360);
                            var string363 = new GraceString(", ");
                            var opresult364 = request(opresult362, "++(1)", [1], string363);
                            setLineNumber(228);    // compilenode string
                            var string365 = new GraceString("3.R: ");
                                // call case 4: self request with 0 args and 0 typeArgs
                            var call366 = selfRequest(this, "rightContents", [0]);
                            var opresult367 = request(string365, "++(1)", [1], call366);
                            var string368 = new GraceString(", 3.3");
                            var opresult369 = request(opresult367, "++(1)", [1], string368);
                                // call case 6: other requests
                                // call case 4: self request with 0 args and 0 typeArgs
                            var call371 = selfRequest(this, "right", [0]);
                            var call370 = request(call371, "asDebugString", [0]);
                            var opresult372 = request(opresult369, "++(1)", [1], call370);
                            var string373 = new GraceString(")");
                            var opresult374 = request(opresult372, "++(1)", [1], string373);
                            var opresult375 = request(opresult364, "++(1)", [1], opresult374);
                            return opresult375;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method asDebugString
                    this.methods["asDebugString"] = func349;
                    func349.methodName = "asDebugString";
                    func349.paramCounts = [0];
                    func349.paramNames = [];
                    func349.definitionLine = 226;
                    func349.definitionModule = "twoThreeTree";
                    var func376 = function(argcv, var_action) {    // method do(_), line 230
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("do(1)");
                        myframe.addVar("action",
                                       function() {return var_action;});
                        stackFrames.push(myframe);
                        try {
                            setLineNumber(231);    // compilenode call
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call378 = selfRequest(this, "left", [0]);
                            var call377 = request(call378, "do(1)", [1], var_action);
                            var if379 = GraceDone;
                            setLineNumber(232);    // compilenode member
                                                   // call case 2: outer request
                            var call380 = selfRequest(this.outer_twoThreeTree_215, "Deleted", [0]);
                                // call case 6: other requests
                                // call case 4: self request with 0 args and 0 typeArgs
                            var call382 = selfRequest(this, "leftContents", [0]);
                            var call381 = request(call382, "value", [0]);
                            var opresult383 = request(call380, "\u2260(1)", [1], call381);
                            if (Grace_isTrue(opresult383)) {
                                setLineNumber(233);    // compilenode member
                                                       // call case 4: self request with 0 args and 0 typeArgs
                                var call385 = selfRequest(this, "leftContents", [0]);
                                    // call case 6: other requests
                                var call384 = request(var_action, "apply(1)", [1], call385);
                                if379 = call384;
                            }
                            setLineNumber(235);    // compilenode call
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call387 = selfRequest(this, "middle", [0]);
                            var call386 = request(call387, "do(1)", [1], var_action);
                            var if388 = GraceDone;
                            setLineNumber(236);    // compilenode member
                                                   // call case 2: outer request
                            var call389 = selfRequest(this.outer_twoThreeTree_215, "Deleted", [0]);
                                // call case 6: other requests
                                // call case 4: self request with 0 args and 0 typeArgs
                            var call391 = selfRequest(this, "rightContents", [0]);
                            var call390 = request(call391, "value", [0]);
                            var opresult392 = request(call389, "\u2260(1)", [1], call390);
                            if (Grace_isTrue(opresult392)) {
                                setLineNumber(237);    // compilenode member
                                                       // call case 4: self request with 0 args and 0 typeArgs
                                var call394 = selfRequest(this, "rightContents", [0]);
                                    // call case 6: other requests
                                var call393 = request(var_action, "apply(1)", [1], call394);
                                if388 = call393;
                            }
                            setLineNumber(239);    // compilenode call
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call396 = selfRequest(this, "right", [0]);
                            var call395 = request(call396, "do(1)", [1], var_action);
                            return call395;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method do(_)
                    this.methods["do(1)"] = func376;
                    func376.methodName = "do(1)";
                    func376.paramCounts = [1];
                    func376.paramNames = ["action"];
                    func376.definitionLine = 230;
                    func376.definitionModule = "twoThreeTree";
                    var func397 = function(argcv, var_new, var_replaceMeBy, var_absorb) {    // method add(_)setParent(_)absorb(_), line 241
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("add(1)setParent(1)absorb(1)");
                        myframe.addVar("new",
                                       function() {return var_new;});
                        myframe.addVar("replaceMeBy",
                                       function() {return var_replaceMeBy;});
                        myframe.addVar("absorb",
                                       function() {return var_absorb;});
                        setLineNumber(241);    // compilenode member
                                               // call case 2: outer request
                        var call398 = selfRequest(var_prelude, "Binding", [0]);
                        assertTypeOrMsg(var_new, call398, "argument 1 in request of `add(_)setParent(_)absorb(_)`", "Binding");
                        stackFrames.push(myframe);
                        try {
                            setLineNumber(242);    // compilenode defdec
                            myframe.addVar("newKey", function() {return var_newKey});
                                // call case 6: other requests
                            var call399 = request(var_new, "key", [0]);
                            var var_newKey = call399;
                            var if400 = GraceDone;
                            setLineNumber(243);    // compilenode member
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call401 = selfRequest(this, "leftKey", [0]);
                            var opresult402 = request(var_newKey, "==(1)", [1], call401);
                            if (Grace_isTrue(opresult402)) {
                                setLineNumber(244);    // compilenode call
                                                       // call case 4: self request with 1 args and 0 typeArgs
                                var call403 = selfRequest(this, "leftContents:=(1)", [1], var_new);
                                setLineNumber(245);    // compilenode return
                                return var_done;
                            } else {
                                var if404 = GraceDone;
                                setLineNumber(246);    // compilenode op
                                if (var_newKey === undefined) raiseUninitializedVariable("newKey");
                                    // call case 4: self request with 0 args and 0 typeArgs
                                var call405 = selfRequest(this, "rightKey", [0]);
                                var opresult406 = request(var_newKey, "==(1)", [1], call405);
                                if (Grace_isTrue(opresult406)) {
                                    setLineNumber(247);    // compilenode call
                                                           // call case 4: self request with 1 args and 0 typeArgs
                                    var call407 = selfRequest(this, "rightContents:=(1)", [1], var_new);
                                    setLineNumber(248);    // compilenode return
                                    return var_done;
                                }
                                if400 = if404;
                            }
                            var if408 = GraceDone;
                            setLineNumber(250);    // compilenode member
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call409 = selfRequest(this, "leftKey", [0]);
                            var opresult410 = request(var_newKey, "<(1)", [1], call409);
                            if (Grace_isTrue(opresult410)) {
                                setLineNumber(251);    // compilenode block
                                var block412 = new GraceBlock(this, 251, 1);
                                block412.guard = jsTrue;
                                block412.real = function block412(var_nu) {
                                    setLineNumber(251);    // compilenode call
                                                           // call case 4: self request with 1 args and 0 typeArgs
                                    var call413 = selfRequest(this, "left:=(1)", [1], var_nu);
                                    return call413;
                                };
                                let applyMeth412 = function apply_1 (argcv, ...args) {
                                    if (this.guard.apply(this.receiver, args))
                                    return this.real.apply(this.receiver, args);
                                    badBlockArgs.apply(this, args);
                                };
                                applyMeth412.methodName = "apply(1)";
                                applyMeth412.paramCounts = [1];
                                applyMeth412.paramNames = ["nu"];
                                applyMeth412.definitionLine = 251;
                                applyMeth412.definitionModule = "twoThreeTree";
                                block412.methods["apply(1)"] = applyMeth412;
                                let matchesMeth412 = function matches_1 (argcv, ...args) {
                                    return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
                                };
                                matchesMeth412.methodName = "matches(1)";
                                matchesMeth412.paramCounts = [1];
                                matchesMeth412.paramNames = ["nu"];
                                matchesMeth412.definitionLine = 251;
                                matchesMeth412.definitionModule = "twoThreeTree";
                                block412.methods["matches(1)"] = matchesMeth412;
                                var block414 = new GraceBlock(this, 251, 1);
                                block414.guard = jsTrue;
                                block414.real = function block414(var_ex) {
                                    setLineNumber(252);    // compilenode defdec
                                    myframe.addVar("newRight", function() {return var_newRight});
                                        // call case 4: self request with 0 args and 0 typeArgs
                                    var call416 = selfRequest(this, "middle", [0]);
                                        // call case 4: self request with 0 args and 0 typeArgs
                                    var call417 = selfRequest(this, "rightContents", [0]);
                                        // call case 4: self request with 0 args and 0 typeArgs
                                    var call418 = selfRequest(this, "right", [0]);
                                        // call case 2: outer request
                                    var call415 = selfRequest(this.outer_twoThreeTree_215, "twoNode(3)", [3], call416, call417, call418);
                                    var var_newRight = call415;
                                    setLineNumber(253);    // compilenode defdec
                                    myframe.addVar("newParent", function() {return var_newParent});
                                        // call case 4: self request with 0 args and 0 typeArgs
                                    var call420 = selfRequest(this, "leftContents", [0]);
                                    if (var_newRight === undefined) raiseUninitializedVariable("newRight");
                                        // call case 2: outer request
                                    var call419 = selfRequest(this.outer_twoThreeTree_215, "twoNode(3)", [3], var_ex, call420, var_newRight);
                                    var var_newParent = call419;
                                    setLineNumber(254);    // compilenode call
                                    if (var_newParent === undefined) raiseUninitializedVariable("newParent");
                                        // call case 6: other requests
                                    var call421 = request(var_absorb, "apply(1)", [1], var_newParent);
                                    return call421;
                                };
                                let applyMeth414 = function apply_1 (argcv, ...args) {
                                    if (this.guard.apply(this.receiver, args))
                                    return this.real.apply(this.receiver, args);
                                    badBlockArgs.apply(this, args);
                                };
                                applyMeth414.methodName = "apply(1)";
                                applyMeth414.paramCounts = [1];
                                applyMeth414.paramNames = ["ex"];
                                applyMeth414.definitionLine = 251;
                                applyMeth414.definitionModule = "twoThreeTree";
                                block414.methods["apply(1)"] = applyMeth414;
                                let matchesMeth414 = function matches_1 (argcv, ...args) {
                                    return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
                                };
                                matchesMeth414.methodName = "matches(1)";
                                matchesMeth414.paramCounts = [1];
                                matchesMeth414.paramNames = ["ex"];
                                matchesMeth414.definitionLine = 251;
                                matchesMeth414.definitionModule = "twoThreeTree";
                                block414.methods["matches(1)"] = matchesMeth414;
                                    // call case 6: other requests
                                setLineNumber(251);    // compilenode member
                                                       // call case 4: self request with 0 args and 0 typeArgs
                                var call422 = selfRequest(this, "left", [0]);
                                var call411 = request(call422, "add(1)setParent(1)absorb(1)", [1, 1, 1], var_new, block412, block414);
                                if408 = call411;
                            } else {
                                var if423 = GraceDone;
                                setLineNumber(256);    // compilenode op
                                if (var_newKey === undefined) raiseUninitializedVariable("newKey");
                                    // call case 4: self request with 0 args and 0 typeArgs
                                var call424 = selfRequest(this, "rightKey", [0]);
                                var opresult425 = request(var_newKey, ">(1)", [1], call424);
                                if (Grace_isTrue(opresult425)) {
                                    setLineNumber(257);    // compilenode block
                                    var block427 = new GraceBlock(this, 257, 1);
                                    block427.guard = jsTrue;
                                    block427.real = function block427(var_nu) {
                                        setLineNumber(257);    // compilenode call
                                                               // call case 4: self request with 1 args and 0 typeArgs
                                        var call428 = selfRequest(this, "right:=(1)", [1], var_nu);
                                        return call428;
                                    };
                                    let applyMeth427 = function apply_1 (argcv, ...args) {
                                        if (this.guard.apply(this.receiver, args))
                                        return this.real.apply(this.receiver, args);
                                        badBlockArgs.apply(this, args);
                                    };
                                    applyMeth427.methodName = "apply(1)";
                                    applyMeth427.paramCounts = [1];
                                    applyMeth427.paramNames = ["nu"];
                                    applyMeth427.definitionLine = 257;
                                    applyMeth427.definitionModule = "twoThreeTree";
                                    block427.methods["apply(1)"] = applyMeth427;
                                    let matchesMeth427 = function matches_1 (argcv, ...args) {
                                        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
                                    };
                                    matchesMeth427.methodName = "matches(1)";
                                    matchesMeth427.paramCounts = [1];
                                    matchesMeth427.paramNames = ["nu"];
                                    matchesMeth427.definitionLine = 257;
                                    matchesMeth427.definitionModule = "twoThreeTree";
                                    block427.methods["matches(1)"] = matchesMeth427;
                                    var block429 = new GraceBlock(this, 257, 1);
                                    block429.guard = jsTrue;
                                    block429.real = function block429(var_ex) {
                                        setLineNumber(258);    // compilenode defdec
                                        myframe.addVar("newLeft", function() {return var_newLeft});
                                            // call case 4: self request with 0 args and 0 typeArgs
                                        var call431 = selfRequest(this, "left", [0]);
                                            // call case 4: self request with 0 args and 0 typeArgs
                                        var call432 = selfRequest(this, "leftContents", [0]);
                                            // call case 4: self request with 0 args and 0 typeArgs
                                        var call433 = selfRequest(this, "middle", [0]);
                                            // call case 2: outer request
                                        var call430 = selfRequest(this.outer_twoThreeTree_215, "twoNode(3)", [3], call431, call432, call433);
                                        var var_newLeft = call430;
                                        setLineNumber(259);    // compilenode defdec
                                        myframe.addVar("newParent", function() {return var_newParent});
                                        if (var_newLeft === undefined) raiseUninitializedVariable("newLeft");
                                            // call case 4: self request with 0 args and 0 typeArgs
                                        var call435 = selfRequest(this, "rightContents", [0]);
                                            // call case 2: outer request
                                        var call434 = selfRequest(this.outer_twoThreeTree_215, "twoNode(3)", [3], var_newLeft, call435, var_ex);
                                        var var_newParent = call434;
                                        setLineNumber(260);    // compilenode call
                                        if (var_newParent === undefined) raiseUninitializedVariable("newParent");
                                            // call case 6: other requests
                                        var call436 = request(var_absorb, "apply(1)", [1], var_newParent);
                                        return call436;
                                    };
                                    let applyMeth429 = function apply_1 (argcv, ...args) {
                                        if (this.guard.apply(this.receiver, args))
                                        return this.real.apply(this.receiver, args);
                                        badBlockArgs.apply(this, args);
                                    };
                                    applyMeth429.methodName = "apply(1)";
                                    applyMeth429.paramCounts = [1];
                                    applyMeth429.paramNames = ["ex"];
                                    applyMeth429.definitionLine = 257;
                                    applyMeth429.definitionModule = "twoThreeTree";
                                    block429.methods["apply(1)"] = applyMeth429;
                                    let matchesMeth429 = function matches_1 (argcv, ...args) {
                                        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
                                    };
                                    matchesMeth429.methodName = "matches(1)";
                                    matchesMeth429.paramCounts = [1];
                                    matchesMeth429.paramNames = ["ex"];
                                    matchesMeth429.definitionLine = 257;
                                    matchesMeth429.definitionModule = "twoThreeTree";
                                    block429.methods["matches(1)"] = matchesMeth429;
                                        // call case 6: other requests
                                    setLineNumber(257);    // compilenode member
                                                           // call case 4: self request with 0 args and 0 typeArgs
                                    var call437 = selfRequest(this, "right", [0]);
                                    var call426 = request(call437, "add(1)setParent(1)absorb(1)", [1, 1, 1], var_new, block427, block429);
                                    if423 = call426;
                                } else {
                                    setLineNumber(263);    // compilenode block
                                    var block439 = new GraceBlock(this, 263, 1);
                                    block439.guard = jsTrue;
                                    block439.real = function block439(var_nu) {
                                        setLineNumber(263);    // compilenode call
                                                               // call case 4: self request with 1 args and 0 typeArgs
                                        var call440 = selfRequest(this, "middle:=(1)", [1], var_nu);
                                        return call440;
                                    };
                                    let applyMeth439 = function apply_1 (argcv, ...args) {
                                        if (this.guard.apply(this.receiver, args))
                                        return this.real.apply(this.receiver, args);
                                        badBlockArgs.apply(this, args);
                                    };
                                    applyMeth439.methodName = "apply(1)";
                                    applyMeth439.paramCounts = [1];
                                    applyMeth439.paramNames = ["nu"];
                                    applyMeth439.definitionLine = 263;
                                    applyMeth439.definitionModule = "twoThreeTree";
                                    block439.methods["apply(1)"] = applyMeth439;
                                    let matchesMeth439 = function matches_1 (argcv, ...args) {
                                        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
                                    };
                                    matchesMeth439.methodName = "matches(1)";
                                    matchesMeth439.paramCounts = [1];
                                    matchesMeth439.paramNames = ["nu"];
                                    matchesMeth439.definitionLine = 263;
                                    matchesMeth439.definitionModule = "twoThreeTree";
                                    block439.methods["matches(1)"] = matchesMeth439;
                                    var block441 = new GraceBlock(this, 263, 1);
                                    block441.guard = jsTrue;
                                    block441.real = function block441(var_ex) {
                                        setLineNumber(264);    // compilenode defdec
                                        myframe.addVar("newLeft", function() {return var_newLeft});
                                            // call case 4: self request with 0 args and 0 typeArgs
                                        var call443 = selfRequest(this, "left", [0]);
                                            // call case 4: self request with 0 args and 0 typeArgs
                                        var call444 = selfRequest(this, "leftContents", [0]);
                                            // call case 6: other requests
                                        var call445 = request(var_ex, "left", [0]);
                                            // call case 2: outer request
                                        var call442 = selfRequest(this.outer_twoThreeTree_215, "twoNode(3)", [3], call443, call444, call445);
                                        var var_newLeft = call442;
                                        setLineNumber(265);    // compilenode defdec
                                        myframe.addVar("newRight", function() {return var_newRight});
                                            // call case 6: other requests
                                        var call447 = request(var_ex, "right", [0]);
                                            // call case 4: self request with 0 args and 0 typeArgs
                                        var call448 = selfRequest(this, "rightContents", [0]);
                                            // call case 4: self request with 0 args and 0 typeArgs
                                        var call449 = selfRequest(this, "right", [0]);
                                            // call case 2: outer request
                                        var call446 = selfRequest(this.outer_twoThreeTree_215, "twoNode(3)", [3], call447, call448, call449);
                                        var var_newRight = call446;
                                        setLineNumber(266);    // compilenode call
                                        if (var_newLeft === undefined) raiseUninitializedVariable("newLeft");
                                            // call case 6: other requests
                                        var call450 = request(var_ex, "left:=(1)", [1], var_newLeft);
                                        setLineNumber(267);    // compilenode call
                                        if (var_newRight === undefined) raiseUninitializedVariable("newRight");
                                            // call case 6: other requests
                                        var call451 = request(var_ex, "right:=(1)", [1], var_newRight);
                                        setLineNumber(268);    // compilenode call
                                                               // call case 6: other requests
                                        var call452 = request(var_absorb, "apply(1)", [1], var_ex);
                                        return call452;
                                    };
                                    let applyMeth441 = function apply_1 (argcv, ...args) {
                                        if (this.guard.apply(this.receiver, args))
                                        return this.real.apply(this.receiver, args);
                                        badBlockArgs.apply(this, args);
                                    };
                                    applyMeth441.methodName = "apply(1)";
                                    applyMeth441.paramCounts = [1];
                                    applyMeth441.paramNames = ["ex"];
                                    applyMeth441.definitionLine = 263;
                                    applyMeth441.definitionModule = "twoThreeTree";
                                    block441.methods["apply(1)"] = applyMeth441;
                                    let matchesMeth441 = function matches_1 (argcv, ...args) {
                                        return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
                                    };
                                    matchesMeth441.methodName = "matches(1)";
                                    matchesMeth441.paramCounts = [1];
                                    matchesMeth441.paramNames = ["ex"];
                                    matchesMeth441.definitionLine = 263;
                                    matchesMeth441.definitionModule = "twoThreeTree";
                                    block441.methods["matches(1)"] = matchesMeth441;
                                        // call case 6: other requests
                                    setLineNumber(263);    // compilenode member
                                                           // call case 4: self request with 0 args and 0 typeArgs
                                    var call453 = selfRequest(this, "middle", [0]);
                                    var call438 = request(call453, "add(1)setParent(1)absorb(1)", [1, 1, 1], var_new, block439, block441);
                                    if423 = call438;
                                }
                                if408 = if423;
                            }
                            return if408;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method add(_)setParent(_)absorb(_)
                    this.methods["add(1)setParent(1)absorb(1)"] = func397;
                    func397.methodName = "add(1)setParent(1)absorb(1)";
                    func397.paramCounts = [1, 1, 1];
                    func397.paramNames = ["new", "replaceMeBy", "absorb"];
                    func397.definitionLine = 241;
                    func397.definitionModule = "twoThreeTree";
                    var func454 = function(argcv, var_k, var_action) {    // method at(_)ifAbsent(_), line 273
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("at(1)ifAbsent(1)");
                        myframe.addVar("k",
                                       function() {return var_k;});
                        myframe.addVar("action",
                                       function() {return var_action;});
                        stackFrames.push(myframe);
                        try {
                            var if455 = GraceDone;
                            setLineNumber(274);    // compilenode member
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call457 = selfRequest(this, "leftContents", [0]);
                            var call456 = request(call457, "key", [0]);
                            var opresult458 = request(var_k, "==(1)", [1], call456);
                            if (Grace_isTrue(opresult458)) {
                                var if459 = GraceDone;
                                setLineNumber(275);    // compilenode member
                                                       // call case 2: outer request
                                var call460 = selfRequest(this.outer_twoThreeTree_215, "Deleted", [0]);
                                    // call case 6: other requests
                                    // call case 4: self request with 0 args and 0 typeArgs
                                var call462 = selfRequest(this, "leftContents", [0]);
                                var call461 = request(call462, "value", [0]);
                                var opresult463 = request(call460, "==(1)", [1], call461);
                                if (Grace_isTrue(opresult463)) {
                                    setLineNumber(276);    // compilenode member
                                                           // call case 6: other requests
                                    var call464 = request(var_action, "apply", [0]);
                                    if459 = call464;
                                } else {
                                    setLineNumber(278);    // compilenode member
                                                           // call case 6: other requests
                                                           // call case 4: self request with 0 args and 0 typeArgs
                                    var call466 = selfRequest(this, "leftContents", [0]);
                                    var call465 = request(call466, "value", [0]);
                                    if459 = call465;
                                }
                                if455 = if459;
                            } else {
                                var if467 = GraceDone;
                                setLineNumber(280);    // compilenode member
                                                       // call case 6: other requests
                                                       // call case 4: self request with 0 args and 0 typeArgs
                                var call469 = selfRequest(this, "leftContents", [0]);
                                var call468 = request(call469, "key", [0]);
                                var opresult470 = request(var_k, "<(1)", [1], call468);
                                if (Grace_isTrue(opresult470)) {
                                    setLineNumber(281);    // compilenode call
                                                           // call case 6: other requests
                                                           // call case 4: self request with 0 args and 0 typeArgs
                                    var call472 = selfRequest(this, "left", [0]);
                                    var call471 = request(call472, "at(1)ifAbsent(1)", [1, 1], var_k, var_action);
                                    if467 = call471;
                                } else {
                                    var if473 = GraceDone;
                                    setLineNumber(282);    // compilenode member
                                                           // call case 6: other requests
                                                           // call case 4: self request with 0 args and 0 typeArgs
                                    var call475 = selfRequest(this, "rightContents", [0]);
                                    var call474 = request(call475, "key", [0]);
                                    var opresult476 = request(var_k, ">(1)", [1], call474);
                                    if (Grace_isTrue(opresult476)) {
                                        setLineNumber(283);    // compilenode call
                                                               // call case 6: other requests
                                                               // call case 4: self request with 0 args and 0 typeArgs
                                        var call478 = selfRequest(this, "right", [0]);
                                        var call477 = request(call478, "at(1)ifAbsent(1)", [1, 1], var_k, var_action);
                                        if473 = call477;
                                    } else {
                                        var if479 = GraceDone;
                                        setLineNumber(284);    // compilenode member
                                                               // call case 6: other requests
                                                               // call case 4: self request with 0 args and 0 typeArgs
                                        var call481 = selfRequest(this, "rightContents", [0]);
                                        var call480 = request(call481, "key", [0]);
                                        var opresult482 = request(var_k, "==(1)", [1], call480);
                                        if (Grace_isTrue(opresult482)) {
                                            var if483 = GraceDone;
                                            setLineNumber(285);    // compilenode member
                                                                   // call case 2: outer request
                                            var call484 = selfRequest(this.outer_twoThreeTree_215, "Deleted", [0]);
                                                // call case 6: other requests
                                                // call case 4: self request with 0 args and 0 typeArgs
                                            var call486 = selfRequest(this, "rightContents", [0]);
                                            var call485 = request(call486, "value", [0]);
                                            var opresult487 = request(call484, "==(1)", [1], call485);
                                            if (Grace_isTrue(opresult487)) {
                                                setLineNumber(286);    // compilenode member
                                                                       // call case 6: other requests
                                                var call488 = request(var_action, "apply", [0]);
                                                if483 = call488;
                                            } else {
                                                setLineNumber(288);    // compilenode member
                                                                       // call case 6: other requests
                                                                       // call case 4: self request with 0 args and 0 typeArgs
                                                var call490 = selfRequest(this, "rightContents", [0]);
                                                var call489 = request(call490, "value", [0]);
                                                if483 = call489;
                                            }
                                            if479 = if483;
                                        } else {
                                            setLineNumber(291);    // compilenode call
                                                                   // call case 6: other requests
                                                                   // call case 4: self request with 0 args and 0 typeArgs
                                            var call492 = selfRequest(this, "middle", [0]);
                                            var call491 = request(call492, "at(1)ifAbsent(1)", [1, 1], var_k, var_action);
                                            if479 = call491;
                                        }
                                        if473 = if479;
                                    }
                                    if467 = if473;
                                }
                                if455 = if467;
                            }
                            return if455;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method at(_)ifAbsent(_)
                    this.methods["at(1)ifAbsent(1)"] = func454;
                    func454.methodName = "at(1)ifAbsent(1)";
                    func454.paramCounts = [1, 1];
                    func454.paramNames = ["k", "action"];
                    func454.definitionLine = 273;
                    func454.definitionModule = "twoThreeTree";
                    var func493 = function(argcv, var_k, var_action) {    // method removeKey(_)ifAbsent(_), line 294
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("removeKey(1)ifAbsent(1)");
                        myframe.addVar("k",
                                       function() {return var_k;});
                        myframe.addVar("action",
                                       function() {return var_action;});
                        stackFrames.push(myframe);
                        try {
                            var if494 = GraceDone;
                            setLineNumber(295);    // compilenode member
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call496 = selfRequest(this, "leftContents", [0]);
                            var call495 = request(call496, "key", [0]);
                            var opresult497 = request(var_k, "==(1)", [1], call495);
                            if (Grace_isTrue(opresult497)) {
                                var if498 = GraceDone;
                                setLineNumber(296);    // compilenode member
                                                       // call case 2: outer request
                                var call499 = selfRequest(this.outer_twoThreeTree_215, "Deleted", [0]);
                                    // call case 6: other requests
                                    // call case 4: self request with 0 args and 0 typeArgs
                                var call501 = selfRequest(this, "leftContents", [0]);
                                var call500 = request(call501, "value", [0]);
                                var opresult502 = request(call499, "==(1)", [1], call500);
                                if (Grace_isTrue(opresult502)) {
                                    setLineNumber(297);    // compilenode member
                                                           // call case 6: other requests
                                    var call503 = request(var_action, "apply", [0]);
                                    if498 = call503;
                                } else {
                                    setLineNumber(299);    // compilenode member
                                                           // call case 2: outer request
                                    var call505 = selfRequest(this.outer_twoThreeTree_215, "Deleted", [0]);
                                    var opresult506 = request(var_k, "::(1)", [1], call505);
                                        // call case 4: self request with 1 args and 0 typeArgs
                                    var call504 = selfRequest(this, "leftContents:=(1)", [1], opresult506);
                                    setLineNumber(300);    // compilenode member
                                                           // call case 2: outer request
                                    var call508 = selfRequest(this.outer_twoThreeTree_215, "size", [0]);
                                    var diff509 = request(call508, "-(1)", [1], new GraceNum(1));
                                        // call case 2: outer request
                                    var call507 = selfRequest(this.outer_twoThreeTree_215, "size:=(1)", [1], diff509);
                                    setLineNumber(301);    // compilenode member
                                                           // call case 2: outer request
                                    var call511 = selfRequest(this.outer_twoThreeTree_215, "deletedCount", [0]);
                                    var sum512 = request(call511, "+(1)", [1], new GraceNum(1));
                                        // call case 2: outer request
                                    var call510 = selfRequest(this.outer_twoThreeTree_215, "deletedCount:=(1)", [1], sum512);
                                    if498 = call510;
                                }
                                if494 = if498;
                            } else {
                                var if513 = GraceDone;
                                setLineNumber(303);    // compilenode member
                                                       // call case 6: other requests
                                                       // call case 4: self request with 0 args and 0 typeArgs
                                var call515 = selfRequest(this, "leftContents", [0]);
                                var call514 = request(call515, "key", [0]);
                                var opresult516 = request(var_k, "<(1)", [1], call514);
                                if (Grace_isTrue(opresult516)) {
                                    setLineNumber(304);    // compilenode call
                                                           // call case 6: other requests
                                                           // call case 4: self request with 0 args and 0 typeArgs
                                    var call518 = selfRequest(this, "left", [0]);
                                    var call517 = request(call518, "removeKey(1)ifAbsent(1)", [1, 1], var_k, var_action);
                                    if513 = call517;
                                } else {
                                    var if519 = GraceDone;
                                    setLineNumber(305);    // compilenode member
                                                           // call case 6: other requests
                                                           // call case 4: self request with 0 args and 0 typeArgs
                                    var call521 = selfRequest(this, "rightContents", [0]);
                                    var call520 = request(call521, "key", [0]);
                                    var opresult522 = request(var_k, ">(1)", [1], call520);
                                    if (Grace_isTrue(opresult522)) {
                                        setLineNumber(306);    // compilenode call
                                                               // call case 6: other requests
                                                               // call case 4: self request with 0 args and 0 typeArgs
                                        var call524 = selfRequest(this, "right", [0]);
                                        var call523 = request(call524, "removeKey(1)ifAbsent(1)", [1, 1], var_k, var_action);
                                        if519 = call523;
                                    } else {
                                        var if525 = GraceDone;
                                        setLineNumber(307);    // compilenode member
                                                               // call case 6: other requests
                                                               // call case 4: self request with 0 args and 0 typeArgs
                                        var call527 = selfRequest(this, "rightContents", [0]);
                                        var call526 = request(call527, "key", [0]);
                                        var opresult528 = request(var_k, "==(1)", [1], call526);
                                        if (Grace_isTrue(opresult528)) {
                                            var if529 = GraceDone;
                                            setLineNumber(308);    // compilenode member
                                                                   // call case 2: outer request
                                            var call530 = selfRequest(this.outer_twoThreeTree_215, "Deleted", [0]);
                                                // call case 6: other requests
                                                // call case 4: self request with 0 args and 0 typeArgs
                                            var call532 = selfRequest(this, "rightContents", [0]);
                                            var call531 = request(call532, "value", [0]);
                                            var opresult533 = request(call530, "==(1)", [1], call531);
                                            if (Grace_isTrue(opresult533)) {
                                                setLineNumber(309);    // compilenode member
                                                                       // call case 6: other requests
                                                var call534 = request(var_action, "apply", [0]);
                                                if529 = call534;
                                            } else {
                                                setLineNumber(311);    // compilenode member
                                                                       // call case 2: outer request
                                                var call536 = selfRequest(this.outer_twoThreeTree_215, "Deleted", [0]);
                                                var opresult537 = request(var_k, "::(1)", [1], call536);
                                                    // call case 4: self request with 1 args and 0 typeArgs
                                                var call535 = selfRequest(this, "rightContents:=(1)", [1], opresult537);
                                                setLineNumber(312);    // compilenode member
                                                                       // call case 2: outer request
                                                var call539 = selfRequest(this.outer_twoThreeTree_215, "size", [0]);
                                                var diff540 = request(call539, "-(1)", [1], new GraceNum(1));
                                                    // call case 2: outer request
                                                var call538 = selfRequest(this.outer_twoThreeTree_215, "size:=(1)", [1], diff540);
                                                setLineNumber(313);    // compilenode member
                                                                       // call case 2: outer request
                                                var call542 = selfRequest(this.outer_twoThreeTree_215, "deletedCount", [0]);
                                                var sum543 = request(call542, "+(1)", [1], new GraceNum(1));
                                                    // call case 2: outer request
                                                var call541 = selfRequest(this.outer_twoThreeTree_215, "deletedCount:=(1)", [1], sum543);
                                                if529 = call541;
                                            }
                                            if525 = if529;
                                        } else {
                                            setLineNumber(316);    // compilenode call
                                                                   // call case 6: other requests
                                                                   // call case 4: self request with 0 args and 0 typeArgs
                                            var call545 = selfRequest(this, "middle", [0]);
                                            var call544 = request(call545, "removeKey(1)ifAbsent(1)", [1, 1], var_k, var_action);
                                            if525 = call544;
                                        }
                                        if519 = if525;
                                    }
                                    if513 = if519;
                                }
                                if494 = if513;
                            }
                            return if494;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method removeKey(_)ifAbsent(_)
                    this.methods["removeKey(1)ifAbsent(1)"] = func493;
                    func493.methodName = "removeKey(1)ifAbsent(1)";
                    func493.paramCounts = [1, 1];
                    func493.paramNames = ["k", "action"];
                    func493.definitionLine = 294;
                    func493.definitionModule = "twoThreeTree";
                    var func546 = function(argcv, var_v) {    // method removeValue(_), line 319
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("removeValue(1)");
                        myframe.addVar("v",
                                       function() {return var_v;});
                        stackFrames.push(myframe);
                        try {
                            setLineNumber(320);    // compilenode call
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call548 = selfRequest(this, "left", [0]);
                            var call547 = request(call548, "removeValue(1)", [1], var_v);
                            setLineNumber(321);    // compilenode call
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call550 = selfRequest(this, "middle", [0]);
                            var call549 = request(call550, "removeValue(1)", [1], var_v);
                            setLineNumber(322);    // compilenode call
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call552 = selfRequest(this, "right", [0]);
                            var call551 = request(call552, "removeValue(1)", [1], var_v);
                            var if553 = GraceDone;
                            setLineNumber(323);    // compilenode member
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call555 = selfRequest(this, "leftContents", [0]);
                            var call554 = request(call555, "value", [0]);
                            var opresult556 = request(var_v, "==(1)", [1], call554);
                            if (Grace_isTrue(opresult556)) {
                                setLineNumber(324);    // compilenode member
                                                       // call case 6: other requests
                                                       // call case 4: self request with 0 args and 0 typeArgs
                                var call559 = selfRequest(this, "leftContents", [0]);
                                var call558 = request(call559, "key", [0]);
                                    // call case 2: outer request
                                var call560 = selfRequest(this.outer_twoThreeTree_215, "Deleted", [0]);
                                var opresult561 = request(call558, "::(1)", [1], call560);
                                    // call case 4: self request with 1 args and 0 typeArgs
                                var call557 = selfRequest(this, "leftContents:=(1)", [1], opresult561);
                                setLineNumber(325);    // compilenode member
                                                       // call case 2: outer request
                                var call563 = selfRequest(this.outer_twoThreeTree_215, "size", [0]);
                                var diff564 = request(call563, "-(1)", [1], new GraceNum(1));
                                    // call case 2: outer request
                                var call562 = selfRequest(this.outer_twoThreeTree_215, "size:=(1)", [1], diff564);
                                setLineNumber(326);    // compilenode member
                                                       // call case 2: outer request
                                var call566 = selfRequest(this.outer_twoThreeTree_215, "deletedCount", [0]);
                                var sum567 = request(call566, "+(1)", [1], new GraceNum(1));
                                    // call case 2: outer request
                                var call565 = selfRequest(this.outer_twoThreeTree_215, "deletedCount:=(1)", [1], sum567);
                                if553 = call565;
                            }
                            var if568 = GraceDone;
                            setLineNumber(328);    // compilenode member
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call570 = selfRequest(this, "rightContents", [0]);
                            var call569 = request(call570, "value", [0]);
                            var opresult571 = request(var_v, "==(1)", [1], call569);
                            if (Grace_isTrue(opresult571)) {
                                setLineNumber(329);    // compilenode member
                                                       // call case 6: other requests
                                                       // call case 4: self request with 0 args and 0 typeArgs
                                var call574 = selfRequest(this, "rightContents", [0]);
                                var call573 = request(call574, "key", [0]);
                                    // call case 2: outer request
                                var call575 = selfRequest(this.outer_twoThreeTree_215, "Deleted", [0]);
                                var opresult576 = request(call573, "::(1)", [1], call575);
                                    // call case 4: self request with 1 args and 0 typeArgs
                                var call572 = selfRequest(this, "rightContents:=(1)", [1], opresult576);
                                setLineNumber(330);    // compilenode member
                                                       // call case 2: outer request
                                var call578 = selfRequest(this.outer_twoThreeTree_215, "size", [0]);
                                var diff579 = request(call578, "-(1)", [1], new GraceNum(1));
                                    // call case 2: outer request
                                var call577 = selfRequest(this.outer_twoThreeTree_215, "size:=(1)", [1], diff579);
                                setLineNumber(331);    // compilenode member
                                                       // call case 2: outer request
                                var call581 = selfRequest(this.outer_twoThreeTree_215, "deletedCount", [0]);
                                var sum582 = request(call581, "+(1)", [1], new GraceNum(1));
                                    // call case 2: outer request
                                var call580 = selfRequest(this.outer_twoThreeTree_215, "deletedCount:=(1)", [1], sum582);
                                if568 = call580;
                            }
                            return if568;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method removeValue(_)
                    this.methods["removeValue(1)"] = func546;
                    func546.methodName = "removeValue(1)";
                    func546.paramCounts = [1];
                    func546.paramNames = ["v"];
                    func546.definitionLine = 319;
                    func546.definitionModule = "twoThreeTree";
                    var func583 = function(argcv, var_anIterator) {    // method buildZipperFor(_), line 336
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("buildZipperFor(1)");
                        myframe.addVar("anIterator",
                                       function() {return var_anIterator;});
                        stackFrames.push(myframe);
                        try {
                            setLineNumber(337);    // compilenode member
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call585 = selfRequest(this, "firstTooth", [0]);
                                // call case 6: other requests
                            var call584 = request(var_anIterator, "remember(1)", [1], call585);
                            setLineNumber(338);    // compilenode call
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call587 = selfRequest(this, "left", [0]);
                            var call586 = request(call587, "buildZipperFor(1)", [1], var_anIterator);
                            return call586;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method buildZipperFor(_)
                    this.methods["buildZipperFor(1)"] = func583;
                    func583.methodName = "buildZipperFor(1)";
                    func583.paramCounts = [1];
                    func583.paramNames = ["anIterator"];
                    func583.definitionLine = 336;
                    func583.definitionModule = "twoThreeTree";
                    var func588 = function(argcv) {    // method firstTooth, line 341
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("firstTooth");
                        stackFrames.push(myframe);
                        try {
                            var ouc = emptyGraceObject("empty.threeNode(_,_,_,_,_).firstTooth", "twoThreeTree", 341);
                            var ouc_init = this.methods["firstTooth$build(3)"].call(this, null, ouc, [], []);
                            ouc_init.call(ouc);
                            return ouc;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method firstTooth
                    this.methods["firstTooth"] = func588;
                    func588.methodName = "firstTooth";
                    func588.paramCounts = [0];
                    func588.paramNames = [];
                    func588.definitionLine = 341;
                    func588.definitionModule = "twoThreeTree";
                    var func589 = function(argcv, inheritingObject, aliases, exclusions) {    // method firstTooth$build(_,_,_), line 341
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var obj590_build = function(ignore, outerObj, aliases, exclusions) {
                            this.closureKeys = this.closureKeys || [];
                            this.closureKeys.push("outer_twoThreeTree_341");
                            this.outer_twoThreeTree_341 = outerObj;
                            const inheritedExclusions = { };
                            for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
                                const exMeth = exclusions[eix];
                                inheritedExclusions[exMeth] = this.methods[exMeth]; };
                            var func591 = function(argcv, var_anIterator) {    // method visit(_), line 342
                                var returnTarget = invocationCount;
                                invocationCount++;
                                var myframe = new StackFrame("visit(1)");
                                myframe.addVar("anIterator",
                                               function() {return var_anIterator;});
                                stackFrames.push(myframe);
                                try {
                                    setLineNumber(343);    // compilenode member
                                                           // call case 2: outer request
                                    var call593 = selfRequest(this.outer_twoThreeTree_341, "secondTooth", [0]);
                                        // call case 6: other requests
                                    var call592 = request(var_anIterator, "remember(1)", [1], call593);
                                    setLineNumber(344);    // compilenode call
                                                           // call case 6: other requests
                                                           // call case 2: outer request
                                    var call595 = selfRequest(this.outer_twoThreeTree_341, "middle", [0]);
                                    var call594 = request(call595, "buildZipperFor(1)", [1], var_anIterator);
                                    setLineNumber(345);    // compilenode member
                                                           // call case 2: outer request
                                    var call596 = selfRequest(this.outer_twoThreeTree_341, "leftContents", [0]);
                                    return call596;
                                } finally {
                                    stackFrames.pop();
                                }
                            };    // end of method visit(_)
                            this.methods["visit(1)"] = func591;
                            func591.methodName = "visit(1)";
                            func591.paramCounts = [1];
                            func591.paramNames = ["anIterator"];
                            func591.definitionLine = 342;
                            func591.definitionModule = "twoThreeTree";
                            const overridenByAliases = { };
                            for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
                                const a = aliases[aix];
                                const newNm = a.newName;
                                const oldNm = a.oldName;
                                overridenByAliases[newNm] = this.methods[newNm];
                                const m = confidentialVersion(inheritedExclusions[oldNm] || overridenByAliases[oldNm] || this.methods[oldNm], newNm);
                                m.definitionLine = 341;
                                m.definitionModule = "twoThreeTree";
                                this.methods[newNm] = m;
                            }
                            for (let exName in inheritedExclusions) {
                                if (inheritedExclusions.hasOwnProperty(exName)) {
                                    if (inheritedExclusions[exName]) {
                                        this.methods[exName] = inheritedExclusions[exName];
                                    } else {
                                        delete this.methods[exName];
                                    }
                                }
                            }
                            var obj590_init = function() {    // init of object on line 341
                            };
                            return obj590_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
                        };
                        var obj590_init = obj590_build.call(inheritingObject, null, this, aliases, exclusions);
                        return obj590_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
                    };    // end of method firstTooth$build(_,_,_)
                    this.methods["firstTooth$build(3)"] = func589;
                    func589.methodName = "firstTooth$build(3)";
                    func589.paramCounts = [0];
                    func589.paramNames = [];
                    func589.definitionLine = 341;
                    func589.definitionModule = "twoThreeTree";
                    var func597 = function(argcv) {    // method secondTooth, line 348
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("secondTooth");
                        stackFrames.push(myframe);
                        try {
                            var ouc = emptyGraceObject("empty.threeNode(_,_,_,_,_).secondTooth", "twoThreeTree", 348);
                            var ouc_init = this.methods["secondTooth$build(3)"].call(this, null, ouc, [], []);
                            ouc_init.call(ouc);
                            return ouc;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method secondTooth
                    this.methods["secondTooth"] = func597;
                    func597.methodName = "secondTooth";
                    func597.paramCounts = [0];
                    func597.paramNames = [];
                    func597.definitionLine = 348;
                    func597.definitionModule = "twoThreeTree";
                    var func598 = function(argcv, inheritingObject, aliases, exclusions) {    // method secondTooth$build(_,_,_), line 348
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var obj599_build = function(ignore, outerObj, aliases, exclusions) {
                            this.closureKeys = this.closureKeys || [];
                            this.closureKeys.push("outer_twoThreeTree_348");
                            this.outer_twoThreeTree_348 = outerObj;
                            const inheritedExclusions = { };
                            for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
                                const exMeth = exclusions[eix];
                                inheritedExclusions[exMeth] = this.methods[exMeth]; };
                            var func600 = function(argcv, var_anIterator) {    // method visit(_), line 349
                                var returnTarget = invocationCount;
                                invocationCount++;
                                var myframe = new StackFrame("visit(1)");
                                myframe.addVar("anIterator",
                                               function() {return var_anIterator;});
                                stackFrames.push(myframe);
                                try {
                                    setLineNumber(350);    // compilenode call
                                                           // call case 6: other requests
                                                           // call case 2: outer request
                                    var call602 = selfRequest(this.outer_twoThreeTree_348, "right", [0]);
                                    var call601 = request(call602, "buildZipperFor(1)", [1], var_anIterator);
                                    setLineNumber(351);    // compilenode member
                                                           // call case 2: outer request
                                    var call603 = selfRequest(this.outer_twoThreeTree_348, "rightContents", [0]);
                                    return call603;
                                } finally {
                                    stackFrames.pop();
                                }
                            };    // end of method visit(_)
                            this.methods["visit(1)"] = func600;
                            func600.methodName = "visit(1)";
                            func600.paramCounts = [1];
                            func600.paramNames = ["anIterator"];
                            func600.definitionLine = 349;
                            func600.definitionModule = "twoThreeTree";
                            const overridenByAliases = { };
                            for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
                                const a = aliases[aix];
                                const newNm = a.newName;
                                const oldNm = a.oldName;
                                overridenByAliases[newNm] = this.methods[newNm];
                                const m = confidentialVersion(inheritedExclusions[oldNm] || overridenByAliases[oldNm] || this.methods[oldNm], newNm);
                                m.definitionLine = 348;
                                m.definitionModule = "twoThreeTree";
                                this.methods[newNm] = m;
                            }
                            for (let exName in inheritedExclusions) {
                                if (inheritedExclusions.hasOwnProperty(exName)) {
                                    if (inheritedExclusions[exName]) {
                                        this.methods[exName] = inheritedExclusions[exName];
                                    } else {
                                        delete this.methods[exName];
                                    }
                                }
                            }
                            var obj599_init = function() {    // init of object on line 348
                            };
                            return obj599_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
                        };
                        var obj599_init = obj599_build.call(inheritingObject, null, this, aliases, exclusions);
                        return obj599_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
                    };    // end of method secondTooth$build(_,_,_)
                    this.methods["secondTooth$build(3)"] = func598;
                    func598.methodName = "secondTooth$build(3)";
                    func598.paramCounts = [0];
                    func598.paramNames = [];
                    func598.definitionLine = 348;
                    func598.definitionModule = "twoThreeTree";
                    this.mutable = true;
                    const overridenByAliases = { };
                    for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
                        const a = aliases[aix];
                        const newNm = a.newName;
                        const oldNm = a.oldName;
                        overridenByAliases[newNm] = this.methods[newNm];
                        const m = confidentialVersion(inheritedExclusions[oldNm] || overridenByAliases[oldNm] || this.methods[oldNm], newNm);
                        m.definitionLine = 215;
                        m.definitionModule = "twoThreeTree";
                        this.methods[newNm] = m;
                    }
                    for (let exName in inheritedExclusions) {
                        if (inheritedExclusions.hasOwnProperty(exName)) {
                            if (inheritedExclusions[exName]) {
                                this.methods[exName] = inheritedExclusions[exName];
                            } else {
                                delete this.methods[exName];
                            }
                        }
                    }
                    var obj326_init = function() {    // init of object on line 215
                        this.data.leftContents = var_lb;
                        this.data.rightContents = var_rb;
                        this.data.left = var_l;
                        this.data.middle = var_m;
                        this.data.right = var_r;
                    };
                    return obj326_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
                };
                var obj326_init = obj326_build.call(inheritingObject, null, var_l, var_lb, var_m, var_rb, var_r, this, aliases, exclusions);
                return obj326_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
            };    // end of method threeNode(_,_,_,_,_)$build(_,_,_)
            func323.confidential = true;
            this.methods["threeNode(5)$build(3)"] = func323;
            func323.methodName = "threeNode(5)$build(3)";
            func323.paramCounts = [5];
            func323.paramNames = ["l", "lb", "m", "rb", "r"];
            func323.definitionLine = 215;
            func323.definitionModule = "twoThreeTree";
            var func604 = function(argcv, var_b) {    // method twoLeafNode(_), line 356
                var returnTarget = invocationCount;
                invocationCount++;
                var myframe = new StackFrame("twoLeafNode(1)");
                myframe.addVar("b",
                               function() {return var_b;});
                setLineNumber(356);    // compilenode member
                                       // call case 2: outer request
                var call605 = selfRequest(var_prelude, "Binding", [0]);
                assertTypeOrMsg(var_b, call605, "argument to request of `twoLeafNode(_)`", "Binding");
                stackFrames.push(myframe);
                try {
                    var ouc = emptyGraceObject("empty.twoLeafNode(_)", "twoThreeTree", 356);
                    var ouc_init = this.methods["twoLeafNode(1)$build(3)"].call(this, null, var_b, ouc, [], []);
                    ouc_init.call(ouc);
                        // call case 4: self request with 0 args and 0 typeArgs
                    var call606 = selfRequest(this, "Node", [0]);
                    assertTypeOrMsg(ouc, call606, "object returned from twoLeafNode(_)", "Node");
                    return ouc;
                } finally {
                    stackFrames.pop();
                }
            };    // end of method twoLeafNode(_)
            func604.confidential = true;
            this.methods["twoLeafNode(1)"] = func604;
            func604.methodName = "twoLeafNode(1)";
            func604.paramCounts = [1];
            func604.paramNames = ["b"];
            func604.definitionLine = 356;
            func604.definitionModule = "twoThreeTree";
            var func607 = function(argcv, var_b, inheritingObject, aliases, exclusions) {    // method twoLeafNode(_)$build(_,_,_), line 356
                var returnTarget = invocationCount;
                invocationCount++;
                    // call case 2: outer request
                var call608 = selfRequest(var_prelude, "Binding", [0]);
                assertTypeOrMsg(var_b, call608, "argument to request of `twoLeafNode(_)`", "Binding");
                var obj609_build = function(ignore, var_b, outerObj, aliases, exclusions) {
                    this.closureKeys = this.closureKeys || [];
                    this.closureKeys.push("outer_twoThreeTree_356");
                    this.outer_twoThreeTree_356 = outerObj;
                    const inheritedExclusions = { };
                    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
                        const exMeth = exclusions[eix];
                        inheritedExclusions[exMeth] = this.methods[exMeth]; };
                    this.data.contents = undefined;
                    var reader610_contents = function() {  // reader method contents
                        if (this.data.contents === undefined) raiseUninitializedVariable("contents");
                        return this.data.contents;
                    };
                    reader610_contents.isVar = true;
                    this.methods["contents"] = reader610_contents;
                    var writer611_contents = function(argcv, n) {   // writer method contents:=(_)
                        this.data.contents = n;
                        return GraceDone;
                    };
                    writer611_contents.confidential = true;
                    this.methods["contents:=(1)"] = writer611_contents;
                    var func612 = function(argcv) {    // method asDebugString, line 358
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("asDebugString");
                        stackFrames.push(myframe);
                        try {
                            setLineNumber(359);    // compilenode string
                            var string613 = new GraceString("(2L: ");
                                // call case 4: self request with 0 args and 0 typeArgs
                            var call614 = selfRequest(this, "contents", [0]);
                            var opresult615 = request(string613, "++(1)", [1], call614);
                            var string616 = new GraceString(")");
                            var opresult617 = request(opresult615, "++(1)", [1], string616);
                            return opresult617;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method asDebugString
                    this.methods["asDebugString"] = func612;
                    func612.methodName = "asDebugString";
                    func612.paramCounts = [0];
                    func612.paramNames = [];
                    func612.definitionLine = 358;
                    func612.definitionModule = "twoThreeTree";
                    var func618 = function(argcv, var_action) {    // method do(_), line 361
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("do(1)");
                        myframe.addVar("action",
                                       function() {return var_action;});
                        stackFrames.push(myframe);
                        try {
                            var if619 = GraceDone;
                            setLineNumber(362);    // compilenode member
                                                   // call case 2: outer request
                            var call620 = selfRequest(this.outer_twoThreeTree_356, "Deleted", [0]);
                                // call case 6: other requests
                                // call case 4: self request with 0 args and 0 typeArgs
                            var call622 = selfRequest(this, "contents", [0]);
                            var call621 = request(call622, "value", [0]);
                            var opresult623 = request(call620, "\u2260(1)", [1], call621);
                            if (Grace_isTrue(opresult623)) {
                                setLineNumber(363);    // compilenode member
                                                       // call case 4: self request with 0 args and 0 typeArgs
                                var call625 = selfRequest(this, "contents", [0]);
                                    // call case 6: other requests
                                var call624 = request(var_action, "apply(1)", [1], call625);
                                if619 = call624;
                            }
                            return if619;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method do(_)
                    this.methods["do(1)"] = func618;
                    func618.methodName = "do(1)";
                    func618.paramCounts = [1];
                    func618.paramNames = ["action"];
                    func618.definitionLine = 361;
                    func618.definitionModule = "twoThreeTree";
                    var func626 = function(argcv, var_new, var_replaceMeBy, var_absorb) {    // method add(_)setParent(_)absorb(_), line 366
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("add(1)setParent(1)absorb(1)");
                        myframe.addVar("new",
                                       function() {return var_new;});
                        myframe.addVar("replaceMeBy",
                                       function() {return var_replaceMeBy;});
                        myframe.addVar("absorb",
                                       function() {return var_absorb;});
                        setLineNumber(366);    // compilenode member
                                               // call case 2: outer request
                        var call627 = selfRequest(var_prelude, "Binding", [0]);
                        assertTypeOrMsg(var_new, call627, "argument 1 in request of `add(_)setParent(_)absorb(_)`", "Binding");
                        stackFrames.push(myframe);
                        try {
                            var if628 = GraceDone;
                            setLineNumber(367);    // compilenode member
                                                   // call case 6: other requests
                            var call629 = request(var_new, "key", [0]);
                                // call case 6: other requests
                                // call case 4: self request with 0 args and 0 typeArgs
                            var call631 = selfRequest(this, "contents", [0]);
                            var call630 = request(call631, "key", [0]);
                            var opresult632 = request(call629, "==(1)", [1], call630);
                            if (Grace_isTrue(opresult632)) {
                                setLineNumber(368);    // compilenode call
                                                       // call case 4: self request with 1 args and 0 typeArgs
                                var call633 = selfRequest(this, "contents:=(1)", [1], var_new);
                                setLineNumber(369);    // compilenode return
                                return var_done;
                            }
                            setLineNumber(371);    // compilenode defdec
                            myframe.addVar("newNode", function() {return var_newNode});
                            var if634 = GraceDone;
                                // call case 6: other requests
                            var call635 = request(var_new, "key", [0]);
                                // call case 6: other requests
                                // call case 4: self request with 0 args and 0 typeArgs
                            var call637 = selfRequest(this, "contents", [0]);
                            var call636 = request(call637, "key", [0]);
                            var opresult638 = request(call635, "<(1)", [1], call636);
                            if (Grace_isTrue(opresult638)) {
                                setLineNumber(372);    // compilenode member
                                                       // call case 4: self request with 0 args and 0 typeArgs
                                var call640 = selfRequest(this, "contents", [0]);
                                    // call case 2: outer request
                                var call639 = selfRequest(this.outer_twoThreeTree_356, "threeLeafNode(2)", [2], var_new, call640);
                                if634 = call639;
                            } else {
                                setLineNumber(374);    // compilenode member
                                                       // call case 4: self request with 0 args and 0 typeArgs
                                var call642 = selfRequest(this, "contents", [0]);
                                    // call case 2: outer request
                                var call641 = selfRequest(this.outer_twoThreeTree_356, "threeLeafNode(2)", [2], call642, var_new);
                                if634 = call641;
                            }
                            var var_newNode = if634;
                            setLineNumber(376);    // compilenode call
                                                   // call case 6: other requests
                            var call643 = request(var_replaceMeBy, "apply(1)", [1], var_newNode);
                            setLineNumber(377);    // compilenode member
                                                   // call case 2: outer request
                            var call645 = selfRequest(this.outer_twoThreeTree_356, "size", [0]);
                            var sum646 = request(call645, "+(1)", [1], new GraceNum(1));
                                // call case 2: outer request
                            var call644 = selfRequest(this.outer_twoThreeTree_356, "size:=(1)", [1], sum646);
                            return call644;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method add(_)setParent(_)absorb(_)
                    this.methods["add(1)setParent(1)absorb(1)"] = func626;
                    func626.methodName = "add(1)setParent(1)absorb(1)";
                    func626.paramCounts = [1, 1, 1];
                    func626.paramNames = ["new", "replaceMeBy", "absorb"];
                    func626.definitionLine = 366;
                    func626.definitionModule = "twoThreeTree";
                    var func647 = function(argcv, var_k, var_action) {    // method at(_)ifAbsent(_), line 380
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("at(1)ifAbsent(1)");
                        myframe.addVar("k",
                                       function() {return var_k;});
                        myframe.addVar("action",
                                       function() {return var_action;});
                        stackFrames.push(myframe);
                        try {
                            var if648 = GraceDone;
                            setLineNumber(381);    // compilenode member
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call650 = selfRequest(this, "contents", [0]);
                            var call649 = request(call650, "key", [0]);
                            var opresult651 = request(var_k, "==(1)", [1], call649);
                            if (Grace_isTrue(opresult651)) {
                                var if652 = GraceDone;
                                setLineNumber(382);    // compilenode member
                                                       // call case 2: outer request
                                var call653 = selfRequest(this.outer_twoThreeTree_356, "Deleted", [0]);
                                    // call case 6: other requests
                                    // call case 4: self request with 0 args and 0 typeArgs
                                var call655 = selfRequest(this, "contents", [0]);
                                var call654 = request(call655, "value", [0]);
                                var opresult656 = request(call653, "==(1)", [1], call654);
                                if (Grace_isTrue(opresult656)) {
                                    setLineNumber(383);    // compilenode member
                                                           // call case 6: other requests
                                    var call657 = request(var_action, "apply", [0]);
                                    if652 = call657;
                                } else {
                                    setLineNumber(385);    // compilenode member
                                                           // call case 6: other requests
                                                           // call case 4: self request with 0 args and 0 typeArgs
                                    var call659 = selfRequest(this, "contents", [0]);
                                    var call658 = request(call659, "value", [0]);
                                    if652 = call658;
                                }
                                if648 = if652;
                            } else {
                                setLineNumber(388);    // compilenode member
                                                       // call case 6: other requests
                                var call660 = request(var_action, "apply", [0]);
                                if648 = call660;
                            }
                            return if648;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method at(_)ifAbsent(_)
                    this.methods["at(1)ifAbsent(1)"] = func647;
                    func647.methodName = "at(1)ifAbsent(1)";
                    func647.paramCounts = [1, 1];
                    func647.paramNames = ["k", "action"];
                    func647.definitionLine = 380;
                    func647.definitionModule = "twoThreeTree";
                    var func661 = function(argcv, var_k, var_action) {    // method removeKey(_)ifAbsent(_), line 392
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("removeKey(1)ifAbsent(1)");
                        myframe.addVar("k",
                                       function() {return var_k;});
                        myframe.addVar("action",
                                       function() {return var_action;});
                        stackFrames.push(myframe);
                        try {
                            var if662 = GraceDone;
                            setLineNumber(393);    // compilenode member
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call664 = selfRequest(this, "contents", [0]);
                            var call663 = request(call664, "key", [0]);
                            var opresult665 = request(var_k, "==(1)", [1], call663);
                            if (Grace_isTrue(opresult665)) {
                                var if666 = GraceDone;
                                setLineNumber(394);    // compilenode member
                                                       // call case 2: outer request
                                var call667 = selfRequest(this.outer_twoThreeTree_356, "Deleted", [0]);
                                    // call case 6: other requests
                                    // call case 4: self request with 0 args and 0 typeArgs
                                var call669 = selfRequest(this, "contents", [0]);
                                var call668 = request(call669, "value", [0]);
                                var opresult670 = request(call667, "==(1)", [1], call668);
                                if (Grace_isTrue(opresult670)) {
                                    setLineNumber(395);    // compilenode member
                                                           // call case 6: other requests
                                    var call671 = request(var_action, "apply", [0]);
                                    if666 = call671;
                                } else {
                                    setLineNumber(397);    // compilenode member
                                                           // call case 2: outer request
                                    var call673 = selfRequest(this.outer_twoThreeTree_356, "Deleted", [0]);
                                    var opresult674 = request(var_k, "::(1)", [1], call673);
                                        // call case 4: self request with 1 args and 0 typeArgs
                                    var call672 = selfRequest(this, "contents:=(1)", [1], opresult674);
                                    setLineNumber(398);    // compilenode member
                                                           // call case 2: outer request
                                    var call676 = selfRequest(this.outer_twoThreeTree_356, "size", [0]);
                                    var diff677 = request(call676, "-(1)", [1], new GraceNum(1));
                                        // call case 2: outer request
                                    var call675 = selfRequest(this.outer_twoThreeTree_356, "size:=(1)", [1], diff677);
                                    setLineNumber(399);    // compilenode member
                                                           // call case 2: outer request
                                    var call679 = selfRequest(this.outer_twoThreeTree_356, "deletedCount", [0]);
                                    var sum680 = request(call679, "+(1)", [1], new GraceNum(1));
                                        // call case 2: outer request
                                    var call678 = selfRequest(this.outer_twoThreeTree_356, "deletedCount:=(1)", [1], sum680);
                                    if666 = call678;
                                }
                                if662 = if666;
                            } else {
                                setLineNumber(402);    // compilenode member
                                                       // call case 6: other requests
                                var call681 = request(var_action, "apply", [0]);
                                if662 = call681;
                            }
                            return if662;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method removeKey(_)ifAbsent(_)
                    this.methods["removeKey(1)ifAbsent(1)"] = func661;
                    func661.methodName = "removeKey(1)ifAbsent(1)";
                    func661.paramCounts = [1, 1];
                    func661.paramNames = ["k", "action"];
                    func661.definitionLine = 392;
                    func661.definitionModule = "twoThreeTree";
                    var func682 = function(argcv, var_v) {    // method removeValue(_), line 406
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("removeValue(1)");
                        myframe.addVar("v",
                                       function() {return var_v;});
                        stackFrames.push(myframe);
                        try {
                            var if683 = GraceDone;
                            setLineNumber(407);    // compilenode member
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call685 = selfRequest(this, "contents", [0]);
                            var call684 = request(call685, "value", [0]);
                            var opresult686 = request(var_v, "==(1)", [1], call684);
                            if (Grace_isTrue(opresult686)) {
                                setLineNumber(408);    // compilenode member
                                                       // call case 6: other requests
                                                       // call case 4: self request with 0 args and 0 typeArgs
                                var call689 = selfRequest(this, "contents", [0]);
                                var call688 = request(call689, "key", [0]);
                                    // call case 2: outer request
                                var call690 = selfRequest(this.outer_twoThreeTree_356, "Deleted", [0]);
                                var opresult691 = request(call688, "::(1)", [1], call690);
                                    // call case 4: self request with 1 args and 0 typeArgs
                                var call687 = selfRequest(this, "contents:=(1)", [1], opresult691);
                                setLineNumber(409);    // compilenode member
                                                       // call case 2: outer request
                                var call693 = selfRequest(this.outer_twoThreeTree_356, "size", [0]);
                                var diff694 = request(call693, "-(1)", [1], new GraceNum(1));
                                    // call case 2: outer request
                                var call692 = selfRequest(this.outer_twoThreeTree_356, "size:=(1)", [1], diff694);
                                setLineNumber(410);    // compilenode member
                                                       // call case 2: outer request
                                var call696 = selfRequest(this.outer_twoThreeTree_356, "deletedCount", [0]);
                                var sum697 = request(call696, "+(1)", [1], new GraceNum(1));
                                    // call case 2: outer request
                                var call695 = selfRequest(this.outer_twoThreeTree_356, "deletedCount:=(1)", [1], sum697);
                                if683 = call695;
                            }
                            return if683;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method removeValue(_)
                    this.methods["removeValue(1)"] = func682;
                    func682.methodName = "removeValue(1)";
                    func682.paramCounts = [1];
                    func682.paramNames = ["v"];
                    func682.definitionLine = 406;
                    func682.definitionModule = "twoThreeTree";
                    var func698 = function(argcv, var_anIterator) {    // method buildZipperFor(_), line 413
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("buildZipperFor(1)");
                        myframe.addVar("anIterator",
                                       function() {return var_anIterator;});
                        stackFrames.push(myframe);
                        try {
                            setLineNumber(414);    // compilenode member
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call700 = selfRequest(this, "tooth", [0]);
                                // call case 6: other requests
                            var call699 = request(var_anIterator, "remember(1)", [1], call700);
                            return call699;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method buildZipperFor(_)
                    this.methods["buildZipperFor(1)"] = func698;
                    func698.methodName = "buildZipperFor(1)";
                    func698.paramCounts = [1];
                    func698.paramNames = ["anIterator"];
                    func698.definitionLine = 413;
                    func698.definitionModule = "twoThreeTree";
                    var func701 = function(argcv) {    // method tooth, line 417
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("tooth");
                        stackFrames.push(myframe);
                        try {
                            var ouc = emptyGraceObject("empty.twoLeafNode(_).tooth", "twoThreeTree", 417);
                            var ouc_init = this.methods["tooth$build(3)"].call(this, null, ouc, [], []);
                            ouc_init.call(ouc);
                            return ouc;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method tooth
                    this.methods["tooth"] = func701;
                    func701.methodName = "tooth";
                    func701.paramCounts = [0];
                    func701.paramNames = [];
                    func701.definitionLine = 417;
                    func701.definitionModule = "twoThreeTree";
                    var func702 = function(argcv, inheritingObject, aliases, exclusions) {    // method tooth$build(_,_,_), line 417
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var obj703_build = function(ignore, outerObj, aliases, exclusions) {
                            this.closureKeys = this.closureKeys || [];
                            this.closureKeys.push("outer_twoThreeTree_417");
                            this.outer_twoThreeTree_417 = outerObj;
                            const inheritedExclusions = { };
                            for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
                                const exMeth = exclusions[eix];
                                inheritedExclusions[exMeth] = this.methods[exMeth]; };
                            var func704 = function(argcv, var_anIterator) {    // method visit(_), line 418
                                var returnTarget = invocationCount;
                                invocationCount++;
                                var myframe = new StackFrame("visit(1)");
                                myframe.addVar("anIterator",
                                               function() {return var_anIterator;});
                                stackFrames.push(myframe);
                                try {
                                    setLineNumber(419);    // compilenode member
                                                           // call case 2: outer request
                                    var call705 = selfRequest(this.outer_twoThreeTree_417, "contents", [0]);
                                    return call705;
                                } finally {
                                    stackFrames.pop();
                                }
                            };    // end of method visit(_)
                            this.methods["visit(1)"] = func704;
                            func704.methodName = "visit(1)";
                            func704.paramCounts = [1];
                            func704.paramNames = ["anIterator"];
                            func704.definitionLine = 418;
                            func704.definitionModule = "twoThreeTree";
                            const overridenByAliases = { };
                            for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
                                const a = aliases[aix];
                                const newNm = a.newName;
                                const oldNm = a.oldName;
                                overridenByAliases[newNm] = this.methods[newNm];
                                const m = confidentialVersion(inheritedExclusions[oldNm] || overridenByAliases[oldNm] || this.methods[oldNm], newNm);
                                m.definitionLine = 417;
                                m.definitionModule = "twoThreeTree";
                                this.methods[newNm] = m;
                            }
                            for (let exName in inheritedExclusions) {
                                if (inheritedExclusions.hasOwnProperty(exName)) {
                                    if (inheritedExclusions[exName]) {
                                        this.methods[exName] = inheritedExclusions[exName];
                                    } else {
                                        delete this.methods[exName];
                                    }
                                }
                            }
                            var obj703_init = function() {    // init of object on line 417
                            };
                            return obj703_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
                        };
                        var obj703_init = obj703_build.call(inheritingObject, null, this, aliases, exclusions);
                        return obj703_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
                    };    // end of method tooth$build(_,_,_)
                    this.methods["tooth$build(3)"] = func702;
                    func702.methodName = "tooth$build(3)";
                    func702.paramCounts = [0];
                    func702.paramNames = [];
                    func702.definitionLine = 417;
                    func702.definitionModule = "twoThreeTree";
                    this.mutable = true;
                    const overridenByAliases = { };
                    for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
                        const a = aliases[aix];
                        const newNm = a.newName;
                        const oldNm = a.oldName;
                        overridenByAliases[newNm] = this.methods[newNm];
                        const m = confidentialVersion(inheritedExclusions[oldNm] || overridenByAliases[oldNm] || this.methods[oldNm], newNm);
                        m.definitionLine = 356;
                        m.definitionModule = "twoThreeTree";
                        this.methods[newNm] = m;
                    }
                    for (let exName in inheritedExclusions) {
                        if (inheritedExclusions.hasOwnProperty(exName)) {
                            if (inheritedExclusions[exName]) {
                                this.methods[exName] = inheritedExclusions[exName];
                            } else {
                                delete this.methods[exName];
                            }
                        }
                    }
                    var obj609_init = function() {    // init of object on line 356
                        this.data.contents = var_b;
                    };
                    return obj609_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
                };
                var obj609_init = obj609_build.call(inheritingObject, null, var_b, this, aliases, exclusions);
                return obj609_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
            };    // end of method twoLeafNode(_)$build(_,_,_)
            func607.confidential = true;
            this.methods["twoLeafNode(1)$build(3)"] = func607;
            func607.methodName = "twoLeafNode(1)$build(3)";
            func607.paramCounts = [1];
            func607.paramNames = ["b"];
            func607.definitionLine = 356;
            func607.definitionModule = "twoThreeTree";
            var func706 = function(argcv, var_lb, var_rb) {    // method threeLeafNode(_,_), line 424
                var returnTarget = invocationCount;
                invocationCount++;
                var myframe = new StackFrame("threeLeafNode(2)");
                myframe.addVar("lb",
                               function() {return var_lb;});
                myframe.addVar("rb",
                               function() {return var_rb;});
                setLineNumber(424);    // compilenode member
                                       // call case 2: outer request
                var call707 = selfRequest(var_prelude, "Binding", [0]);
                assertTypeOrMsg(var_lb, call707, "argument 1 in request of `threeLeafNode(_,_)`", "Binding");
                    // call case 2: outer request
                var call708 = selfRequest(var_prelude, "Binding", [0]);
                assertTypeOrMsg(var_rb, call708, "argument 2 in request of `threeLeafNode(_,_)`", "Binding");
                stackFrames.push(myframe);
                try {
                    var ouc = emptyGraceObject("empty.threeLeafNode(_,_)", "twoThreeTree", 424);
                    var ouc_init = this.methods["threeLeafNode(2)$build(3)"].call(this, null, var_lb, var_rb, ouc, [], []);
                    ouc_init.call(ouc);
                        // call case 4: self request with 0 args and 0 typeArgs
                    var call709 = selfRequest(this, "Node", [0]);
                    setLineNumber(541);    // typecheck
                    assertTypeOrMsg(ouc, call709, "object returned from threeLeafNode(_,_)", "Node");
                    return ouc;
                } finally {
                    stackFrames.pop();
                }
            };    // end of method threeLeafNode(_,_)
            func706.confidential = true;
            this.methods["threeLeafNode(2)"] = func706;
            func706.methodName = "threeLeafNode(2)";
            func706.paramCounts = [2];
            func706.paramNames = ["lb", "rb"];
            func706.definitionLine = 424;
            func706.definitionModule = "twoThreeTree";
            var func710 = function(argcv, var_lb, var_rb, inheritingObject, aliases, exclusions) {    // method threeLeafNode(_,_)$build(_,_,_), line 424
                var returnTarget = invocationCount;
                invocationCount++;
                setLineNumber(424);    // compilenode member
                                       // call case 2: outer request
                var call711 = selfRequest(var_prelude, "Binding", [0]);
                assertTypeOrMsg(var_lb, call711, "argument 1 in request of `threeLeafNode(_,_)`", "Binding");
                    // call case 2: outer request
                var call712 = selfRequest(var_prelude, "Binding", [0]);
                assertTypeOrMsg(var_rb, call712, "argument 2 in request of `threeLeafNode(_,_)`", "Binding");
                var obj713_build = function(ignore, var_lb, var_rb, outerObj, aliases, exclusions) {
                    this.closureKeys = this.closureKeys || [];
                    this.closureKeys.push("outer_twoThreeTree_424");
                    this.outer_twoThreeTree_424 = outerObj;
                    const inheritedExclusions = { };
                    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
                        const exMeth = exclusions[eix];
                        inheritedExclusions[exMeth] = this.methods[exMeth]; };
                    this.data.leftContents = undefined;
                    var reader714_leftContents = function() {  // reader method leftContents
                        if (this.data.leftContents === undefined) raiseUninitializedVariable("leftContents");
                        return this.data.leftContents;
                    };
                    reader714_leftContents.isVar = true;
                    reader714_leftContents.confidential = true;
                    this.methods["leftContents"] = reader714_leftContents;
                    var writer715_leftContents = function(argcv, n) {   // writer method leftContents:=(_)
                        this.data.leftContents = n;
                        return GraceDone;
                    };
                    writer715_leftContents.confidential = true;
                    this.methods["leftContents:=(1)"] = writer715_leftContents;
                    this.data.rightContents = undefined;
                    var reader716_rightContents = function() {  // reader method rightContents
                        if (this.data.rightContents === undefined) raiseUninitializedVariable("rightContents");
                        return this.data.rightContents;
                    };
                    reader716_rightContents.isVar = true;
                    reader716_rightContents.confidential = true;
                    this.methods["rightContents"] = reader716_rightContents;
                    var writer717_rightContents = function(argcv, n) {   // writer method rightContents:=(_)
                        this.data.rightContents = n;
                        return GraceDone;
                    };
                    writer717_rightContents.confidential = true;
                    this.methods["rightContents:=(1)"] = writer717_rightContents;
                    var func718 = function(argcv) {    // method leftKey, line 427
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("leftKey");
                        stackFrames.push(myframe);
                        try {
                            setLineNumber(427);    // compilenode member
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call720 = selfRequest(this, "leftContents", [0]);
                            var call719 = request(call720, "key", [0]);
                            return call719;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method leftKey
                    this.methods["leftKey"] = func718;
                    func718.methodName = "leftKey";
                    func718.paramCounts = [0];
                    func718.paramNames = [];
                    func718.definitionLine = 427;
                    func718.definitionModule = "twoThreeTree";
                    var func721 = function(argcv) {    // method leftValue, line 428
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("leftValue");
                        stackFrames.push(myframe);
                        try {
                            setLineNumber(428);    // compilenode member
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call723 = selfRequest(this, "leftContents", [0]);
                            var call722 = request(call723, "value", [0]);
                            return call722;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method leftValue
                    this.methods["leftValue"] = func721;
                    func721.methodName = "leftValue";
                    func721.paramCounts = [0];
                    func721.paramNames = [];
                    func721.definitionLine = 428;
                    func721.definitionModule = "twoThreeTree";
                    var func724 = function(argcv) {    // method rightKey, line 429
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("rightKey");
                        stackFrames.push(myframe);
                        try {
                            setLineNumber(429);    // compilenode member
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call726 = selfRequest(this, "rightContents", [0]);
                            var call725 = request(call726, "key", [0]);
                            return call725;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method rightKey
                    this.methods["rightKey"] = func724;
                    func724.methodName = "rightKey";
                    func724.paramCounts = [0];
                    func724.paramNames = [];
                    func724.definitionLine = 429;
                    func724.definitionModule = "twoThreeTree";
                    var func727 = function(argcv) {    // method rightValue, line 430
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("rightValue");
                        stackFrames.push(myframe);
                        try {
                            setLineNumber(430);    // compilenode member
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call729 = selfRequest(this, "rightContents", [0]);
                            var call728 = request(call729, "value", [0]);
                            return call728;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method rightValue
                    this.methods["rightValue"] = func727;
                    func727.methodName = "rightValue";
                    func727.paramCounts = [0];
                    func727.paramNames = [];
                    func727.definitionLine = 430;
                    func727.definitionModule = "twoThreeTree";
                    var func730 = function(argcv) {    // method asDebugString, line 431
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("asDebugString");
                        stackFrames.push(myframe);
                        try {
                            setLineNumber(432);    // compilenode string
                            var string731 = new GraceString("(3L.1: ");
                                // call case 4: self request with 0 args and 0 typeArgs
                            var call732 = selfRequest(this, "leftContents", [0]);
                            var opresult733 = request(string731, "++(1)", [1], call732);
                            var string734 = new GraceString(", 3L.2: ");
                            var opresult735 = request(opresult733, "++(1)", [1], string734);
                                // call case 4: self request with 0 args and 0 typeArgs
                            var call736 = selfRequest(this, "rightContents", [0]);
                            var opresult737 = request(opresult735, "++(1)", [1], call736);
                            var string738 = new GraceString(")");
                            var opresult739 = request(opresult737, "++(1)", [1], string738);
                            return opresult739;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method asDebugString
                    this.methods["asDebugString"] = func730;
                    func730.methodName = "asDebugString";
                    func730.paramCounts = [0];
                    func730.paramNames = [];
                    func730.definitionLine = 431;
                    func730.definitionModule = "twoThreeTree";
                    var func740 = function(argcv, var_action) {    // method do(_), line 434
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("do(1)");
                        myframe.addVar("action",
                                       function() {return var_action;});
                        stackFrames.push(myframe);
                        try {
                            var if741 = GraceDone;
                            setLineNumber(435);    // compilenode member
                                                   // call case 2: outer request
                            var call742 = selfRequest(this.outer_twoThreeTree_424, "Deleted", [0]);
                                // call case 6: other requests
                                // call case 4: self request with 0 args and 0 typeArgs
                            var call744 = selfRequest(this, "leftContents", [0]);
                            var call743 = request(call744, "value", [0]);
                            var opresult745 = request(call742, "\u2260(1)", [1], call743);
                            if (Grace_isTrue(opresult745)) {
                                setLineNumber(436);    // compilenode member
                                                       // call case 4: self request with 0 args and 0 typeArgs
                                var call747 = selfRequest(this, "leftContents", [0]);
                                    // call case 6: other requests
                                var call746 = request(var_action, "apply(1)", [1], call747);
                                if741 = call746;
                            }
                            var if748 = GraceDone;
                            setLineNumber(438);    // compilenode member
                                                   // call case 2: outer request
                            var call749 = selfRequest(this.outer_twoThreeTree_424, "Deleted", [0]);
                                // call case 6: other requests
                                // call case 4: self request with 0 args and 0 typeArgs
                            var call751 = selfRequest(this, "rightContents", [0]);
                            var call750 = request(call751, "value", [0]);
                            var opresult752 = request(call749, "\u2260(1)", [1], call750);
                            if (Grace_isTrue(opresult752)) {
                                setLineNumber(439);    // compilenode member
                                                       // call case 4: self request with 0 args and 0 typeArgs
                                var call754 = selfRequest(this, "rightContents", [0]);
                                    // call case 6: other requests
                                var call753 = request(var_action, "apply(1)", [1], call754);
                                if748 = call753;
                            }
                            return if748;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method do(_)
                    this.methods["do(1)"] = func740;
                    func740.methodName = "do(1)";
                    func740.paramCounts = [1];
                    func740.paramNames = ["action"];
                    func740.definitionLine = 434;
                    func740.definitionModule = "twoThreeTree";
                    var func755 = function(argcv, var_new, var_replaceMeBy, var_absorb) {    // method add(_)setParent(_)absorb(_), line 442
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("add(1)setParent(1)absorb(1)");
                        myframe.addVar("new",
                                       function() {return var_new;});
                        myframe.addVar("replaceMeBy",
                                       function() {return var_replaceMeBy;});
                        myframe.addVar("absorb",
                                       function() {return var_absorb;});
                        setLineNumber(442);    // compilenode member
                                               // call case 2: outer request
                        var call756 = selfRequest(var_prelude, "Binding", [0]);
                        assertTypeOrMsg(var_new, call756, "argument 1 in request of `add(_)setParent(_)absorb(_)`", "Binding");
                        stackFrames.push(myframe);
                        try {
                            var if757 = GraceDone;
                            setLineNumber(443);    // compilenode member
                                                   // call case 6: other requests
                            var call758 = request(var_new, "key", [0]);
                                // call case 4: self request with 0 args and 0 typeArgs
                            var call759 = selfRequest(this, "leftKey", [0]);
                            var opresult760 = request(call758, "==(1)", [1], call759);
                            if (Grace_isTrue(opresult760)) {
                                setLineNumber(444);    // compilenode call
                                                       // call case 4: self request with 1 args and 0 typeArgs
                                var call761 = selfRequest(this, "leftContents:=(1)", [1], var_new);
                                setLineNumber(445);    // compilenode return
                                return var_done;
                            } else {
                                var if762 = GraceDone;
                                setLineNumber(446);    // compilenode member
                                                       // call case 6: other requests
                                var call763 = request(var_new, "key", [0]);
                                    // call case 4: self request with 0 args and 0 typeArgs
                                var call764 = selfRequest(this, "rightKey", [0]);
                                var opresult765 = request(call763, "==(1)", [1], call764);
                                if (Grace_isTrue(opresult765)) {
                                    setLineNumber(447);    // compilenode call
                                                           // call case 4: self request with 1 args and 0 typeArgs
                                    var call766 = selfRequest(this, "rightContents:=(1)", [1], var_new);
                                    setLineNumber(448);    // compilenode return
                                    return var_done;
                                }
                                if757 = if762;
                            }
                            setLineNumber(450);    // compilenode member
                                                   // call case 2: outer request
                            var call768 = selfRequest(this.outer_twoThreeTree_424, "size", [0]);
                            var sum769 = request(call768, "+(1)", [1], new GraceNum(1));
                                // call case 2: outer request
                            var call767 = selfRequest(this.outer_twoThreeTree_424, "size:=(1)", [1], sum769);
                            setLineNumber(451);    // compilenode member
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call771 = selfRequest(this, "leftContents", [0]);
                                // call case 4: self request with 0 args and 0 typeArgs
                            var call772 = selfRequest(this, "rightContents", [0]);
                            var block773 = new GraceBlock(this, 451, 3);
                            block773.guard = jsTrue;
                            block773.real = function block773(var_low, var_mid, var_high) {
                                setLineNumber(453);    // compilenode defdec
                                myframe.addVar("newLeft", function() {return var_newLeft});
                                    // call case 2: outer request
                                var call774 = selfRequest(this.outer_twoThreeTree_424, "twoLeafNode(1)", [1], var_low);
                                var var_newLeft = call774;
                                setLineNumber(454);    // compilenode defdec
                                myframe.addVar("newRight", function() {return var_newRight});
                                    // call case 2: outer request
                                var call775 = selfRequest(this.outer_twoThreeTree_424, "twoLeafNode(1)", [1], var_high);
                                var var_newRight = call775;
                                setLineNumber(455);    // compilenode defdec
                                myframe.addVar("tempParent", function() {return var_tempParent});
                                if (var_newLeft === undefined) raiseUninitializedVariable("newLeft");
                                if (var_newRight === undefined) raiseUninitializedVariable("newRight");
                                    // call case 2: outer request
                                var call776 = selfRequest(this.outer_twoThreeTree_424, "twoNode(3)", [3], var_newLeft, var_mid, var_newRight);
                                var var_tempParent = call776;
                                setLineNumber(456);    // compilenode call
                                if (var_tempParent === undefined) raiseUninitializedVariable("tempParent");
                                    // call case 6: other requests
                                var call777 = request(var_absorb, "apply(1)", [1], var_tempParent);
                                return call777;
                            };
                            let applyMeth773 = function apply_3 (argcv, ...args) {
                                if (this.guard.apply(this.receiver, args))
                                return this.real.apply(this.receiver, args);
                                badBlockArgs.apply(this, args);
                            };
                            applyMeth773.methodName = "apply(3)";
                            applyMeth773.paramCounts = [3];
                            applyMeth773.paramNames = ["low", "mid", "high"];
                            applyMeth773.definitionLine = 451;
                            applyMeth773.definitionModule = "twoThreeTree";
                            block773.methods["apply(3)"] = applyMeth773;
                            let matchesMeth773 = function matches_3 (argcv, ...args) {
                                return this.guard.apply(this.receiver, args) ? GraceTrue : GraceFalse;
                            };
                            matchesMeth773.methodName = "matches(3)";
                            matchesMeth773.paramCounts = [3];
                            matchesMeth773.paramNames = ["low", "mid", "high"];
                            matchesMeth773.definitionLine = 451;
                            matchesMeth773.definitionModule = "twoThreeTree";
                            block773.methods["matches(3)"] = matchesMeth773;
                                // call case 4: self request with 4 args and 0 typeArgs
                            var call770 = selfRequest(this, "sort3(3)in(1)", [3, 1], call771, call772, var_new, block773);
                            return call770;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method add(_)setParent(_)absorb(_)
                    this.methods["add(1)setParent(1)absorb(1)"] = func755;
                    func755.methodName = "add(1)setParent(1)absorb(1)";
                    func755.paramCounts = [1, 1, 1];
                    func755.paramNames = ["new", "replaceMeBy", "absorb"];
                    func755.definitionLine = 442;
                    func755.definitionModule = "twoThreeTree";
                    var func778 = function(argcv, var_k, var_action) {    // method at(_)ifAbsent(_), line 460
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("at(1)ifAbsent(1)");
                        myframe.addVar("k",
                                       function() {return var_k;});
                        myframe.addVar("action",
                                       function() {return var_action;});
                        stackFrames.push(myframe);
                        try {
                            var if779 = GraceDone;
                            setLineNumber(461);    // compilenode member
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call781 = selfRequest(this, "leftContents", [0]);
                            var call780 = request(call781, "key", [0]);
                            var opresult782 = request(var_k, "==(1)", [1], call780);
                            if (Grace_isTrue(opresult782)) {
                                var if783 = GraceDone;
                                setLineNumber(462);    // compilenode member
                                                       // call case 2: outer request
                                var call784 = selfRequest(this.outer_twoThreeTree_424, "Deleted", [0]);
                                    // call case 6: other requests
                                    // call case 4: self request with 0 args and 0 typeArgs
                                var call786 = selfRequest(this, "leftContents", [0]);
                                var call785 = request(call786, "value", [0]);
                                var opresult787 = request(call784, "==(1)", [1], call785);
                                if (Grace_isTrue(opresult787)) {
                                    setLineNumber(463);    // compilenode member
                                                           // call case 6: other requests
                                    var call788 = request(var_action, "apply", [0]);
                                    if783 = call788;
                                } else {
                                    setLineNumber(465);    // compilenode member
                                                           // call case 6: other requests
                                                           // call case 4: self request with 0 args and 0 typeArgs
                                    var call790 = selfRequest(this, "leftContents", [0]);
                                    var call789 = request(call790, "value", [0]);
                                    if783 = call789;
                                }
                                if779 = if783;
                            } else {
                                var if791 = GraceDone;
                                setLineNumber(467);    // compilenode member
                                                       // call case 6: other requests
                                                       // call case 4: self request with 0 args and 0 typeArgs
                                var call793 = selfRequest(this, "rightContents", [0]);
                                var call792 = request(call793, "key", [0]);
                                var opresult794 = request(var_k, "==(1)", [1], call792);
                                if (Grace_isTrue(opresult794)) {
                                    var if795 = GraceDone;
                                    setLineNumber(468);    // compilenode member
                                                           // call case 2: outer request
                                    var call796 = selfRequest(this.outer_twoThreeTree_424, "Deleted", [0]);
                                        // call case 6: other requests
                                        // call case 4: self request with 0 args and 0 typeArgs
                                    var call798 = selfRequest(this, "rightContents", [0]);
                                    var call797 = request(call798, "value", [0]);
                                    var opresult799 = request(call796, "==(1)", [1], call797);
                                    if (Grace_isTrue(opresult799)) {
                                        setLineNumber(469);    // compilenode member
                                                               // call case 6: other requests
                                        var call800 = request(var_action, "apply", [0]);
                                        if795 = call800;
                                    } else {
                                        setLineNumber(471);    // compilenode member
                                                               // call case 6: other requests
                                                               // call case 4: self request with 0 args and 0 typeArgs
                                        var call802 = selfRequest(this, "rightContents", [0]);
                                        var call801 = request(call802, "value", [0]);
                                        if795 = call801;
                                    }
                                    if791 = if795;
                                } else {
                                    setLineNumber(474);    // compilenode member
                                                           // call case 6: other requests
                                    var call803 = request(var_action, "apply", [0]);
                                    if791 = call803;
                                }
                                if779 = if791;
                            }
                            return if779;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method at(_)ifAbsent(_)
                    this.methods["at(1)ifAbsent(1)"] = func778;
                    func778.methodName = "at(1)ifAbsent(1)";
                    func778.paramCounts = [1, 1];
                    func778.paramNames = ["k", "action"];
                    func778.definitionLine = 460;
                    func778.definitionModule = "twoThreeTree";
                    var func804 = function(argcv, var_k, var_action) {    // method removeKey(_)ifAbsent(_), line 478
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("removeKey(1)ifAbsent(1)");
                        myframe.addVar("k",
                                       function() {return var_k;});
                        myframe.addVar("action",
                                       function() {return var_action;});
                        stackFrames.push(myframe);
                        try {
                            var if805 = GraceDone;
                            setLineNumber(479);    // compilenode member
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call807 = selfRequest(this, "leftContents", [0]);
                            var call806 = request(call807, "key", [0]);
                            var opresult808 = request(var_k, "==(1)", [1], call806);
                            if (Grace_isTrue(opresult808)) {
                                var if809 = GraceDone;
                                setLineNumber(480);    // compilenode member
                                                       // call case 2: outer request
                                var call810 = selfRequest(this.outer_twoThreeTree_424, "Deleted", [0]);
                                    // call case 6: other requests
                                    // call case 4: self request with 0 args and 0 typeArgs
                                var call812 = selfRequest(this, "leftContents", [0]);
                                var call811 = request(call812, "value", [0]);
                                var opresult813 = request(call810, "==(1)", [1], call811);
                                if (Grace_isTrue(opresult813)) {
                                    setLineNumber(481);    // compilenode member
                                                           // call case 6: other requests
                                    var call814 = request(var_action, "apply", [0]);
                                    if809 = call814;
                                } else {
                                    setLineNumber(483);    // compilenode member
                                                           // call case 2: outer request
                                    var call816 = selfRequest(this.outer_twoThreeTree_424, "Deleted", [0]);
                                    var opresult817 = request(var_k, "::(1)", [1], call816);
                                        // call case 4: self request with 1 args and 0 typeArgs
                                    var call815 = selfRequest(this, "leftContents:=(1)", [1], opresult817);
                                    setLineNumber(484);    // compilenode member
                                                           // call case 2: outer request
                                    var call819 = selfRequest(this.outer_twoThreeTree_424, "size", [0]);
                                    var diff820 = request(call819, "-(1)", [1], new GraceNum(1));
                                        // call case 2: outer request
                                    var call818 = selfRequest(this.outer_twoThreeTree_424, "size:=(1)", [1], diff820);
                                    setLineNumber(485);    // compilenode member
                                                           // call case 2: outer request
                                    var call822 = selfRequest(this.outer_twoThreeTree_424, "deletedCount", [0]);
                                    var sum823 = request(call822, "+(1)", [1], new GraceNum(1));
                                        // call case 2: outer request
                                    var call821 = selfRequest(this.outer_twoThreeTree_424, "deletedCount:=(1)", [1], sum823);
                                    if809 = call821;
                                }
                                if805 = if809;
                            } else {
                                var if824 = GraceDone;
                                setLineNumber(487);    // compilenode member
                                                       // call case 6: other requests
                                                       // call case 4: self request with 0 args and 0 typeArgs
                                var call826 = selfRequest(this, "rightContents", [0]);
                                var call825 = request(call826, "key", [0]);
                                var opresult827 = request(var_k, "==(1)", [1], call825);
                                if (Grace_isTrue(opresult827)) {
                                    var if828 = GraceDone;
                                    setLineNumber(488);    // compilenode member
                                                           // call case 2: outer request
                                    var call829 = selfRequest(this.outer_twoThreeTree_424, "Deleted", [0]);
                                        // call case 6: other requests
                                        // call case 4: self request with 0 args and 0 typeArgs
                                    var call831 = selfRequest(this, "rightContents", [0]);
                                    var call830 = request(call831, "value", [0]);
                                    var opresult832 = request(call829, "==(1)", [1], call830);
                                    if (Grace_isTrue(opresult832)) {
                                        setLineNumber(489);    // compilenode member
                                                               // call case 6: other requests
                                        var call833 = request(var_action, "apply", [0]);
                                        if828 = call833;
                                    } else {
                                        setLineNumber(491);    // compilenode member
                                                               // call case 2: outer request
                                        var call835 = selfRequest(this.outer_twoThreeTree_424, "Deleted", [0]);
                                        var opresult836 = request(var_k, "::(1)", [1], call835);
                                            // call case 4: self request with 1 args and 0 typeArgs
                                        var call834 = selfRequest(this, "rightContents:=(1)", [1], opresult836);
                                        setLineNumber(492);    // compilenode member
                                                               // call case 2: outer request
                                        var call838 = selfRequest(this.outer_twoThreeTree_424, "size", [0]);
                                        var diff839 = request(call838, "-(1)", [1], new GraceNum(1));
                                            // call case 2: outer request
                                        var call837 = selfRequest(this.outer_twoThreeTree_424, "size:=(1)", [1], diff839);
                                        setLineNumber(493);    // compilenode member
                                                               // call case 2: outer request
                                        var call841 = selfRequest(this.outer_twoThreeTree_424, "deletedCount", [0]);
                                        var sum842 = request(call841, "+(1)", [1], new GraceNum(1));
                                            // call case 2: outer request
                                        var call840 = selfRequest(this.outer_twoThreeTree_424, "deletedCount:=(1)", [1], sum842);
                                        if828 = call840;
                                    }
                                    if824 = if828;
                                } else {
                                    setLineNumber(496);    // compilenode member
                                                           // call case 6: other requests
                                    var call843 = request(var_action, "apply", [0]);
                                    if824 = call843;
                                }
                                if805 = if824;
                            }
                            return if805;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method removeKey(_)ifAbsent(_)
                    this.methods["removeKey(1)ifAbsent(1)"] = func804;
                    func804.methodName = "removeKey(1)ifAbsent(1)";
                    func804.paramCounts = [1, 1];
                    func804.paramNames = ["k", "action"];
                    func804.definitionLine = 478;
                    func804.definitionModule = "twoThreeTree";
                    var func844 = function(argcv, var_v) {    // method removeValue(_), line 499
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("removeValue(1)");
                        myframe.addVar("v",
                                       function() {return var_v;});
                        stackFrames.push(myframe);
                        try {
                            var if845 = GraceDone;
                            setLineNumber(500);    // compilenode member
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call847 = selfRequest(this, "leftContents", [0]);
                            var call846 = request(call847, "value", [0]);
                            var opresult848 = request(var_v, "==(1)", [1], call846);
                            if (Grace_isTrue(opresult848)) {
                                setLineNumber(501);    // compilenode member
                                                       // call case 6: other requests
                                                       // call case 4: self request with 0 args and 0 typeArgs
                                var call851 = selfRequest(this, "leftContents", [0]);
                                var call850 = request(call851, "key", [0]);
                                    // call case 2: outer request
                                var call852 = selfRequest(this.outer_twoThreeTree_424, "Deleted", [0]);
                                var opresult853 = request(call850, "::(1)", [1], call852);
                                    // call case 4: self request with 1 args and 0 typeArgs
                                var call849 = selfRequest(this, "leftContents:=(1)", [1], opresult853);
                                setLineNumber(502);    // compilenode member
                                                       // call case 2: outer request
                                var call855 = selfRequest(this.outer_twoThreeTree_424, "size", [0]);
                                var diff856 = request(call855, "-(1)", [1], new GraceNum(1));
                                    // call case 2: outer request
                                var call854 = selfRequest(this.outer_twoThreeTree_424, "size:=(1)", [1], diff856);
                                setLineNumber(503);    // compilenode member
                                                       // call case 2: outer request
                                var call858 = selfRequest(this.outer_twoThreeTree_424, "deletedCount", [0]);
                                var sum859 = request(call858, "+(1)", [1], new GraceNum(1));
                                    // call case 2: outer request
                                var call857 = selfRequest(this.outer_twoThreeTree_424, "deletedCount:=(1)", [1], sum859);
                                if845 = call857;
                            }
                            var if860 = GraceDone;
                            setLineNumber(505);    // compilenode member
                                                   // call case 6: other requests
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call862 = selfRequest(this, "rightContents", [0]);
                            var call861 = request(call862, "value", [0]);
                            var opresult863 = request(var_v, "==(1)", [1], call861);
                            if (Grace_isTrue(opresult863)) {
                                setLineNumber(506);    // compilenode member
                                                       // call case 6: other requests
                                                       // call case 4: self request with 0 args and 0 typeArgs
                                var call866 = selfRequest(this, "rightContents", [0]);
                                var call865 = request(call866, "key", [0]);
                                    // call case 2: outer request
                                var call867 = selfRequest(this.outer_twoThreeTree_424, "Deleted", [0]);
                                var opresult868 = request(call865, "::(1)", [1], call867);
                                    // call case 4: self request with 1 args and 0 typeArgs
                                var call864 = selfRequest(this, "rightContents:=(1)", [1], opresult868);
                                setLineNumber(507);    // compilenode member
                                                       // call case 2: outer request
                                var call870 = selfRequest(this.outer_twoThreeTree_424, "size", [0]);
                                var diff871 = request(call870, "-(1)", [1], new GraceNum(1));
                                    // call case 2: outer request
                                var call869 = selfRequest(this.outer_twoThreeTree_424, "size:=(1)", [1], diff871);
                                setLineNumber(508);    // compilenode member
                                                       // call case 2: outer request
                                var call873 = selfRequest(this.outer_twoThreeTree_424, "deletedCount", [0]);
                                var sum874 = request(call873, "+(1)", [1], new GraceNum(1));
                                    // call case 2: outer request
                                var call872 = selfRequest(this.outer_twoThreeTree_424, "deletedCount:=(1)", [1], sum874);
                                if860 = call872;
                            }
                            return if860;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method removeValue(_)
                    this.methods["removeValue(1)"] = func844;
                    func844.methodName = "removeValue(1)";
                    func844.paramCounts = [1];
                    func844.paramNames = ["v"];
                    func844.definitionLine = 499;
                    func844.definitionModule = "twoThreeTree";
                    var func875 = function(argcv, var_anIterator) {    // method buildZipperFor(_), line 511
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("buildZipperFor(1)");
                        myframe.addVar("anIterator",
                                       function() {return var_anIterator;});
                        stackFrames.push(myframe);
                        try {
                            setLineNumber(512);    // compilenode member
                                                   // call case 4: self request with 0 args and 0 typeArgs
                            var call877 = selfRequest(this, "firstTooth", [0]);
                                // call case 6: other requests
                            var call876 = request(var_anIterator, "remember(1)", [1], call877);
                            return call876;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method buildZipperFor(_)
                    this.methods["buildZipperFor(1)"] = func875;
                    func875.methodName = "buildZipperFor(1)";
                    func875.paramCounts = [1];
                    func875.paramNames = ["anIterator"];
                    func875.definitionLine = 511;
                    func875.definitionModule = "twoThreeTree";
                    var func878 = function(argcv) {    // method firstTooth, line 515
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("firstTooth");
                        stackFrames.push(myframe);
                        try {
                            var ouc = emptyGraceObject("empty.threeLeafNode(_,_).firstTooth", "twoThreeTree", 515);
                            var ouc_init = this.methods["firstTooth$build(3)"].call(this, null, ouc, [], []);
                            ouc_init.call(ouc);
                            return ouc;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method firstTooth
                    this.methods["firstTooth"] = func878;
                    func878.methodName = "firstTooth";
                    func878.paramCounts = [0];
                    func878.paramNames = [];
                    func878.definitionLine = 515;
                    func878.definitionModule = "twoThreeTree";
                    var func879 = function(argcv, inheritingObject, aliases, exclusions) {    // method firstTooth$build(_,_,_), line 515
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var obj880_build = function(ignore, outerObj, aliases, exclusions) {
                            this.closureKeys = this.closureKeys || [];
                            this.closureKeys.push("outer_twoThreeTree_515");
                            this.outer_twoThreeTree_515 = outerObj;
                            const inheritedExclusions = { };
                            for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
                                const exMeth = exclusions[eix];
                                inheritedExclusions[exMeth] = this.methods[exMeth]; };
                            var func881 = function(argcv, var_anIterator) {    // method visit(_), line 516
                                var returnTarget = invocationCount;
                                invocationCount++;
                                var myframe = new StackFrame("visit(1)");
                                myframe.addVar("anIterator",
                                               function() {return var_anIterator;});
                                stackFrames.push(myframe);
                                try {
                                    setLineNumber(517);    // compilenode member
                                                           // call case 2: outer request
                                    var call883 = selfRequest(this.outer_twoThreeTree_515, "secondTooth", [0]);
                                        // call case 6: other requests
                                    var call882 = request(var_anIterator, "remember(1)", [1], call883);
                                    setLineNumber(518);    // compilenode member
                                                           // call case 2: outer request
                                    var call884 = selfRequest(this.outer_twoThreeTree_515, "leftContents", [0]);
                                    return call884;
                                } finally {
                                    stackFrames.pop();
                                }
                            };    // end of method visit(_)
                            this.methods["visit(1)"] = func881;
                            func881.methodName = "visit(1)";
                            func881.paramCounts = [1];
                            func881.paramNames = ["anIterator"];
                            func881.definitionLine = 516;
                            func881.definitionModule = "twoThreeTree";
                            const overridenByAliases = { };
                            for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
                                const a = aliases[aix];
                                const newNm = a.newName;
                                const oldNm = a.oldName;
                                overridenByAliases[newNm] = this.methods[newNm];
                                const m = confidentialVersion(inheritedExclusions[oldNm] || overridenByAliases[oldNm] || this.methods[oldNm], newNm);
                                m.definitionLine = 515;
                                m.definitionModule = "twoThreeTree";
                                this.methods[newNm] = m;
                            }
                            for (let exName in inheritedExclusions) {
                                if (inheritedExclusions.hasOwnProperty(exName)) {
                                    if (inheritedExclusions[exName]) {
                                        this.methods[exName] = inheritedExclusions[exName];
                                    } else {
                                        delete this.methods[exName];
                                    }
                                }
                            }
                            var obj880_init = function() {    // init of object on line 515
                            };
                            return obj880_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
                        };
                        var obj880_init = obj880_build.call(inheritingObject, null, this, aliases, exclusions);
                        return obj880_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
                    };    // end of method firstTooth$build(_,_,_)
                    this.methods["firstTooth$build(3)"] = func879;
                    func879.methodName = "firstTooth$build(3)";
                    func879.paramCounts = [0];
                    func879.paramNames = [];
                    func879.definitionLine = 515;
                    func879.definitionModule = "twoThreeTree";
                    var func885 = function(argcv) {    // method secondTooth, line 521
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("secondTooth");
                        stackFrames.push(myframe);
                        try {
                            var ouc = emptyGraceObject("empty.threeLeafNode(_,_).secondTooth", "twoThreeTree", 521);
                            var ouc_init = this.methods["secondTooth$build(3)"].call(this, null, ouc, [], []);
                            ouc_init.call(ouc);
                            return ouc;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method secondTooth
                    this.methods["secondTooth"] = func885;
                    func885.methodName = "secondTooth";
                    func885.paramCounts = [0];
                    func885.paramNames = [];
                    func885.definitionLine = 521;
                    func885.definitionModule = "twoThreeTree";
                    var func886 = function(argcv, inheritingObject, aliases, exclusions) {    // method secondTooth$build(_,_,_), line 521
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var obj887_build = function(ignore, outerObj, aliases, exclusions) {
                            this.closureKeys = this.closureKeys || [];
                            this.closureKeys.push("outer_twoThreeTree_521");
                            this.outer_twoThreeTree_521 = outerObj;
                            const inheritedExclusions = { };
                            for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
                                const exMeth = exclusions[eix];
                                inheritedExclusions[exMeth] = this.methods[exMeth]; };
                            var func888 = function(argcv, var_anIterator) {    // method visit(_), line 522
                                var returnTarget = invocationCount;
                                invocationCount++;
                                var myframe = new StackFrame("visit(1)");
                                myframe.addVar("anIterator",
                                               function() {return var_anIterator;});
                                stackFrames.push(myframe);
                                try {
                                    setLineNumber(523);    // compilenode member
                                                           // call case 2: outer request
                                    var call889 = selfRequest(this.outer_twoThreeTree_521, "rightContents", [0]);
                                    return call889;
                                } finally {
                                    stackFrames.pop();
                                }
                            };    // end of method visit(_)
                            this.methods["visit(1)"] = func888;
                            func888.methodName = "visit(1)";
                            func888.paramCounts = [1];
                            func888.paramNames = ["anIterator"];
                            func888.definitionLine = 522;
                            func888.definitionModule = "twoThreeTree";
                            const overridenByAliases = { };
                            for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
                                const a = aliases[aix];
                                const newNm = a.newName;
                                const oldNm = a.oldName;
                                overridenByAliases[newNm] = this.methods[newNm];
                                const m = confidentialVersion(inheritedExclusions[oldNm] || overridenByAliases[oldNm] || this.methods[oldNm], newNm);
                                m.definitionLine = 521;
                                m.definitionModule = "twoThreeTree";
                                this.methods[newNm] = m;
                            }
                            for (let exName in inheritedExclusions) {
                                if (inheritedExclusions.hasOwnProperty(exName)) {
                                    if (inheritedExclusions[exName]) {
                                        this.methods[exName] = inheritedExclusions[exName];
                                    } else {
                                        delete this.methods[exName];
                                    }
                                }
                            }
                            var obj887_init = function() {    // init of object on line 521
                            };
                            return obj887_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
                        };
                        var obj887_init = obj887_build.call(inheritingObject, null, this, aliases, exclusions);
                        return obj887_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
                    };    // end of method secondTooth$build(_,_,_)
                    this.methods["secondTooth$build(3)"] = func886;
                    func886.methodName = "secondTooth$build(3)";
                    func886.paramCounts = [0];
                    func886.paramNames = [];
                    func886.definitionLine = 521;
                    func886.definitionModule = "twoThreeTree";
                    var func890 = function(argcv, var_a, var_b, var_c, var_body) {    // method sort3(_,_,_)in(_), line 526
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("sort3(3)in(1)");
                        myframe.addVar("a",
                                       function() {return var_a;});
                        myframe.addVar("b",
                                       function() {return var_b;});
                        myframe.addVar("c",
                                       function() {return var_c;});
                        myframe.addVar("body",
                                       function() {return var_body;});
                        setLineNumber(526);    // compilenode member
                                               // call case 2: outer request
                        var call891 = selfRequest(var_prelude, "Function3", [0]);
                        assertTypeOrMsg(var_body, call891, "argument 4 in request of `sort3(_,_,_)in(_)`", "Function3");
                        stackFrames.push(myframe);
                        try {
                            setLineNumber(531);    // compilenode defdec
                            myframe.addVar("ak", function() {return var_ak});
                                // call case 6: other requests
                            var call892 = request(var_a, "key", [0]);
                            var var_ak = call892;
                            setLineNumber(532);    // compilenode defdec
                            myframe.addVar("bk", function() {return var_bk});
                                // call case 6: other requests
                            var call893 = request(var_b, "key", [0]);
                            var var_bk = call893;
                            setLineNumber(533);    // compilenode defdec
                            myframe.addVar("ck", function() {return var_ck});
                                // call case 6: other requests
                            var call894 = request(var_c, "key", [0]);
                            var var_ck = call894;
                            var if895 = GraceDone;
                            setLineNumber(534);    // compilenode op
                            var opresult896 = request(var_ck, "<(1)", [1], var_ak);
                            if (Grace_isTrue(opresult896)) {
                                setLineNumber(535);    // compilenode call
                                                       // call case 6: other requests
                                var call897 = request(var_body, "apply(3)", [3], var_c, var_a, var_b);
                                if895 = call897;
                            } else {
                                var if898 = GraceDone;
                                setLineNumber(536);    // compilenode op
                                if (var_ck === undefined) raiseUninitializedVariable("ck");
                                if (var_bk === undefined) raiseUninitializedVariable("bk");
                                var opresult899 = request(var_ck, "<(1)", [1], var_bk);
                                if (Grace_isTrue(opresult899)) {
                                    setLineNumber(537);    // compilenode call
                                                           // call case 6: other requests
                                    var call900 = request(var_body, "apply(3)", [3], var_a, var_c, var_b);
                                    if898 = call900;
                                } else {
                                    setLineNumber(539);    // compilenode call
                                                           // call case 6: other requests
                                    var call901 = request(var_body, "apply(3)", [3], var_a, var_b, var_c);
                                    if898 = call901;
                                }
                                if895 = if898;
                            }
                            return if895;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method sort3(_,_,_)in(_)
                    this.methods["sort3(3)in(1)"] = func890;
                    func890.methodName = "sort3(3)in(1)";
                    func890.paramCounts = [3, 1];
                    func890.paramNames = ["a", "b", "c", "body"];
                    func890.definitionLine = 526;
                    func890.definitionModule = "twoThreeTree";
                    this.mutable = true;
                    const overridenByAliases = { };
                    for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
                        const a = aliases[aix];
                        const newNm = a.newName;
                        const oldNm = a.oldName;
                        overridenByAliases[newNm] = this.methods[newNm];
                        const m = confidentialVersion(inheritedExclusions[oldNm] || overridenByAliases[oldNm] || this.methods[oldNm], newNm);
                        m.definitionLine = 424;
                        m.definitionModule = "twoThreeTree";
                        this.methods[newNm] = m;
                    }
                    for (let exName in inheritedExclusions) {
                        if (inheritedExclusions.hasOwnProperty(exName)) {
                            if (inheritedExclusions[exName]) {
                                this.methods[exName] = inheritedExclusions[exName];
                            } else {
                                delete this.methods[exName];
                            }
                        }
                    }
                    var obj713_init = function() {    // init of object on line 424
                        this.data.leftContents = var_lb;
                        this.data.rightContents = var_rb;
                    };
                    return obj713_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
                };
                var obj713_init = obj713_build.call(inheritingObject, null, var_lb, var_rb, this, aliases, exclusions);
                return obj713_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
            };    // end of method threeLeafNode(_,_)$build(_,_,_)
            func710.confidential = true;
            this.methods["threeLeafNode(2)$build(3)"] = func710;
            func710.methodName = "threeLeafNode(2)$build(3)";
            func710.paramCounts = [2];
            func710.paramNames = ["lb", "rb"];
            func710.definitionLine = 424;
            func710.definitionModule = "twoThreeTree";
            var func902 = function(argcv) {    // method emptyNode, line 544
                var returnTarget = invocationCount;
                invocationCount++;
                var myframe = new StackFrame("emptyNode");
                stackFrames.push(myframe);
                try {
                    var ouc = emptyGraceObject("empty.emptyNode", "twoThreeTree", 544);
                    var ouc_init = this.methods["emptyNode$build(3)"].call(this, null, ouc, [], []);
                    ouc_init.call(ouc);
                    setLineNumber(544);    // compilenode member
                                           // call case 4: self request with 0 args and 0 typeArgs
                    var call903 = selfRequest(this, "Node", [0]);
                    setLineNumber(561);    // typecheck
                    assertTypeOrMsg(ouc, call903, "object returned from emptyNode", "Node");
                    return ouc;
                } finally {
                    stackFrames.pop();
                }
            };    // end of method emptyNode
            func902.confidential = true;
            this.methods["emptyNode"] = func902;
            func902.methodName = "emptyNode";
            func902.paramCounts = [0];
            func902.paramNames = [];
            func902.definitionLine = 544;
            func902.definitionModule = "twoThreeTree";
            var func904 = function(argcv, inheritingObject, aliases, exclusions) {    // method emptyNode$build(_,_,_), line 544
                var returnTarget = invocationCount;
                invocationCount++;
                var obj905_build = function(ignore, outerObj, aliases, exclusions) {
                    this.closureKeys = this.closureKeys || [];
                    this.closureKeys.push("outer_twoThreeTree_544");
                    this.outer_twoThreeTree_544 = outerObj;
                    const inheritedExclusions = { };
                    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix ++) {
                        const exMeth = exclusions[eix];
                        inheritedExclusions[exMeth] = this.methods[exMeth]; };
                    var func906 = function(argcv, var_b, var_replaceMeBy, var_absorb) {    // method add(_)setParent(_)absorb(_), line 545
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("add(1)setParent(1)absorb(1)");
                        myframe.addVar("b",
                                       function() {return var_b;});
                        myframe.addVar("replaceMeBy",
                                       function() {return var_replaceMeBy;});
                        myframe.addVar("absorb",
                                       function() {return var_absorb;});
                        setLineNumber(545);    // compilenode member
                                               // call case 2: outer request
                        var call907 = selfRequest(var_prelude, "Binding", [0]);
                        assertTypeOrMsg(var_b, call907, "argument 1 in request of `add(_)setParent(_)absorb(_)`", "Binding");
                        stackFrames.push(myframe);
                        try {
                            setLineNumber(546);    // compilenode call
                                                   // call case 2: outer request
                            var call909 = selfRequest(this.outer_twoThreeTree_544, "twoLeafNode(1)", [1], var_b);
                                // call case 6: other requests
                            var call908 = request(var_replaceMeBy, "apply(1)", [1], call909);
                            setLineNumber(547);    // compilenode member
                                                   // call case 2: outer request
                            var call911 = selfRequest(this.outer_twoThreeTree_544, "size", [0]);
                            var sum912 = request(call911, "+(1)", [1], new GraceNum(1));
                                // call case 2: outer request
                            var call910 = selfRequest(this.outer_twoThreeTree_544, "size:=(1)", [1], sum912);
                            return call910;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method add(_)setParent(_)absorb(_)
                    this.methods["add(1)setParent(1)absorb(1)"] = func906;
                    func906.methodName = "add(1)setParent(1)absorb(1)";
                    func906.paramCounts = [1, 1, 1];
                    func906.paramNames = ["b", "replaceMeBy", "absorb"];
                    func906.definitionLine = 545;
                    func906.definitionModule = "twoThreeTree";
                    var func913 = function(argcv, var_k, var_action) {    // method removeKey(_)ifAbsent(_), line 549
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("removeKey(1)ifAbsent(1)");
                        myframe.addVar("k",
                                       function() {return var_k;});
                        myframe.addVar("action",
                                       function() {return var_action;});
                        stackFrames.push(myframe);
                        try {
                            setLineNumber(550);    // compilenode member
                                                   // call case 6: other requests
                            var call914 = request(var_action, "apply", [0]);
                            return call914;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method removeKey(_)ifAbsent(_)
                    this.methods["removeKey(1)ifAbsent(1)"] = func913;
                    func913.methodName = "removeKey(1)ifAbsent(1)";
                    func913.paramCounts = [1, 1];
                    func913.paramNames = ["k", "action"];
                    func913.definitionLine = 549;
                    func913.definitionModule = "twoThreeTree";
                    var func915 = function(argcv, var_v) {    // method removeValue(_), line 552
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("removeValue(1)");
                        myframe.addVar("v",
                                       function() {return var_v;});
                        stackFrames.push(myframe);
                        try {
                            return GraceDone;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method removeValue(_)
                    this.methods["removeValue(1)"] = func915;
                    func915.methodName = "removeValue(1)";
                    func915.paramCounts = [1];
                    func915.paramNames = ["v"];
                    func915.definitionLine = 552;
                    func915.definitionModule = "twoThreeTree";
                    var func916 = function(argcv) {    // method asDebugString, line 555
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("asDebugString");
                        stackFrames.push(myframe);
                        try {
                            setLineNumber(555);    // compilenode string
                            var string917 = new GraceString("(empty)");
                            return string917;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method asDebugString
                    this.methods["asDebugString"] = func916;
                    func916.methodName = "asDebugString";
                    func916.paramCounts = [0];
                    func916.paramNames = [];
                    func916.definitionLine = 555;
                    func916.definitionModule = "twoThreeTree";
                    var func918 = function(argcv, var_action) {    // method do(_), line 556
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("do(1)");
                        myframe.addVar("action",
                                       function() {return var_action;});
                        stackFrames.push(myframe);
                        try {
                            return GraceDone;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method do(_)
                    this.methods["do(1)"] = func918;
                    func918.methodName = "do(1)";
                    func918.paramCounts = [1];
                    func918.paramNames = ["action"];
                    func918.definitionLine = 556;
                    func918.definitionModule = "twoThreeTree";
                    var func919 = function(argcv, var_k, var_action) {    // method at(_)ifAbsent(_), line 557
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("at(1)ifAbsent(1)");
                        myframe.addVar("k",
                                       function() {return var_k;});
                        myframe.addVar("action",
                                       function() {return var_action;});
                        stackFrames.push(myframe);
                        try {
                            setLineNumber(557);    // compilenode member
                                                   // call case 6: other requests
                            var call920 = request(var_action, "apply", [0]);
                            return call920;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method at(_)ifAbsent(_)
                    this.methods["at(1)ifAbsent(1)"] = func919;
                    func919.methodName = "at(1)ifAbsent(1)";
                    func919.paramCounts = [1, 1];
                    func919.paramNames = ["k", "action"];
                    func919.definitionLine = 557;
                    func919.definitionModule = "twoThreeTree";
                    var func921 = function(argcv, var___95____95__1) {    // method buildZipperFor(_), line 558
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var myframe = new StackFrame("buildZipperFor(1)");
                        myframe.addVar("__1",
                                       function() {return var___95____95__1;});
                        stackFrames.push(myframe);
                        try {
                            return GraceDone;
                        } finally {
                            stackFrames.pop();
                        }
                    };    // end of method buildZipperFor(_)
                    this.methods["buildZipperFor(1)"] = func921;
                    func921.methodName = "buildZipperFor(1)";
                    func921.paramCounts = [1];
                    func921.paramNames = ["__1"];
                    func921.definitionLine = 558;
                    func921.definitionModule = "twoThreeTree";
                    const overridenByAliases = { };
                    for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
                        const a = aliases[aix];
                        const newNm = a.newName;
                        const oldNm = a.oldName;
                        overridenByAliases[newNm] = this.methods[newNm];
                        const m = confidentialVersion(inheritedExclusions[oldNm] || overridenByAliases[oldNm] || this.methods[oldNm], newNm);
                        m.definitionLine = 544;
                        m.definitionModule = "twoThreeTree";
                        this.methods[newNm] = m;
                    }
                    for (let exName in inheritedExclusions) {
                        if (inheritedExclusions.hasOwnProperty(exName)) {
                            if (inheritedExclusions[exName]) {
                                this.methods[exName] = inheritedExclusions[exName];
                            } else {
                                delete this.methods[exName];
                            }
                        }
                    }
                    var obj905_init = function() {    // init of object on line 544
                    };
                    return obj905_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
                };
                var obj905_init = obj905_build.call(inheritingObject, null, this, aliases, exclusions);
                return obj905_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
            };    // end of method emptyNode$build(_,_,_)
            func904.confidential = true;
            this.methods["emptyNode$build(3)"] = func904;
            func904.methodName = "emptyNode$build(3)";
            func904.paramCounts = [0];
            func904.paramNames = [];
            func904.definitionLine = 544;
            func904.definitionModule = "twoThreeTree";
            this.mutable = true;
            const overridenByAliases = { };
            for (let aix = 0, aLen = aliases.length; aix < aLen; aix ++) {
                const a = aliases[aix];
                const newNm = a.newName;
                const oldNm = a.oldName;
                overridenByAliases[newNm] = this.methods[newNm];
                const m = confidentialVersion(inheritedExclusions[oldNm] || overridenByAliases[oldNm] || this.methods[oldNm], newNm);
                m.definitionLine = 8;
                m.definitionModule = "twoThreeTree";
                this.methods[newNm] = m;
            }
            for (let exName in inheritedExclusions) {
                if (inheritedExclusions.hasOwnProperty(exName)) {
                    if (inheritedExclusions[exName]) {
                        this.methods[exName] = inheritedExclusions[exName];
                    } else {
                        delete this.methods[exName];
                    }
                }
            }
            var obj2_init = function() {    // init of object on line 8
                setLineNumber(12);    // compilenode member
                                      // call case 4: self request with 0 args and 0 typeArgs
                var call922 = selfRequest(this, "emptyNode", [0]);
                this.data.root = call922;
                setLineNumber(13);    // compilenode num
                this.data.mods = new GraceNum(0);
                setLineNumber(14);    // compilenode num
                this.data.size = new GraceNum(0);
                setLineNumber(16);    // compilenode num
                this.data.deletedCount = new GraceNum(0);
                setLineNumber(17);    // compilenode string
                var string924 = new GraceString("Deleted Item");
                    // call case 6: other requests
                    // call case 2: outer request
                var call925 = selfRequest(var_prelude, "Singleton", [0]);
                var call923 = request(call925, "named(1)", [1], string924);
                this.data.Deleted = call923;
                setLineNumber(112);    // compilenode typeliteral
                                       //   Type literal
                var typeLit926 = new GraceType("\u2039anon\u203a");
                typeLit926.typeMethods.push("do(1)");
                typeLit926.typeMethods.push("add(1)setParent(1)absorb(1)");
                typeLit926.typeMethods.push("at(1)ifAbsent(1)");
                typeLit926.typeMethods.push("removeKey(1)ifAbsent(1)");
                typeLit926.typeMethods.push("removeValue(1)");
                typeLit926.typeMethods.push("buildZipperFor(1)");
                var opresult927 = request(var_Object, "&(1)", [1], typeLit926);
                this.data.Node = opresult927;
                setLineNumber(124);    // compilenode typeliteral
                                       //   Type literal
                var typeLit928 = new GraceType("\u2039anon\u203a");
                typeLit928.typeMethods.push("next");
                typeLit928.typeMethods.push("hasNext");
                typeLit928.typeMethods.push("remember(1)");
                var opresult929 = request(var_Object, "&(1)", [1], typeLit928);
                this.data.TreeIterator = opresult929;
            };
            return obj2_init;   // from compileBuildAndInitFunctions(_)inMethod(_)
        };
        var obj2_init = obj2_build.call(inheritingObject, null, this, aliases, exclusions, var_K, var_V);
        return obj2_init;      // from compileBuildMethodFor(_)withObjCon(_)inside(_)
    };    // end of method empty$build(_,_,_)
    this.methods["empty$build(3)"] = func1;
    func1.methodName = "empty$build(3)";
    func1.paramCounts = [0];
    func1.paramNames = [];
    func1.typeParamNames = ["K", "V"];
    func1.definitionLine = 8;
    func1.definitionModule = "twoThreeTree";
    stackFrames.pop();
    return this;
}
