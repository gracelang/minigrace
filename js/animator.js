function gracecode_Animation() {
    lineNumber = 7
    var type0 = new GraceType("BoolBlock");
    var var_BoolBlock = type0;
    type0.typeMethods.push("apply");
    lineNumber = 1
    var func1 = function(argcv) {    // method BoolBlock
        var curarg = 1;
        if (argcv[0] !=  func1.paramCounts[0]) // != 0
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method BoolBlock is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            return var_BoolBlock
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func1.paramCounts = [
                         0,
                         ];
    func1.variableArities = [
                             false,
                             ];
    this.methods["BoolBlock"] = func1;
    var type_BoolBlock = var_BoolBlock;
    lineNumber = 10
    var type2 = new GraceType("Animated");
    var var_Animated = type2;
    type2.typeMethods.push("step");
    lineNumber = 1
    var func3 = function(argcv) {    // method Animated
        var curarg = 1;
        if (argcv[0] !=  func3.paramCounts[0]) // != 0
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method Animated is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            return var_Animated
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func3.paramCounts = [
                         0,
                         ];
    func3.variableArities = [
                             false,
                             ];
    this.methods["Animated"] = func3;
    var type_Animated = var_Animated;
    lineNumber = 37
    var type4 = new GraceType("Animator");
    var var_Animator = type4;
    type4.typeMethods.push("startAnimating");
    type4.typeMethods.push("stopAnimating");
    type4.typeMethods.push("stopAnimation");
    type4.typeMethods.push("while()do");
    type4.typeMethods.push("while()do()finally");
    type4.typeMethods.push("every()while()do");
    type4.typeMethods.push("every()while()do()finally");
    lineNumber = 1
    var func5 = function(argcv) {    // method Animator
        var curarg = 1;
        if (argcv[0] !=  func5.paramCounts[0]) // != 0
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method Animator is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            return var_Animator
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func5.paramCounts = [
                         0,
                         ];
    func5.variableArities = [
                             false,
                             ];
    this.methods["Animator"] = func5;
    var type_Animator = var_Animator;
    lineNumber = 4
    // Import of timer
    if (typeof gracecode_timer == 'undefined')
        throw new GraceExceptionPacket(RuntimeErrorObject,
                                       new GraceString('could not find module timer'));
    var var_timer = do_import("timer", gracecode_timer);
    lineNumber = 1
    var func6 = function(argcv) {    // method AnimatorClass
        var curarg = 1;
        if (argcv[0] !=  func6.paramCounts[0]) // != 0
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method AnimatorClass is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            lineNumber = 37
            return var_AnimatorClass
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func6.paramCounts = [
                         0,
                         ];
    func6.variableArities = [
                             false,
                             ];
    this.methods["AnimatorClass"] = func6;
    lineNumber = 1
    var obj7 = Grace_allocObject();
    obj7.outer = this;
    var reader_Animation_outer8 = function() {
        return this.outer;
    }
    obj7.methods["outer"] = reader_Animation_outer8;
    function obj_init_7() {
        var origSuperDepth = superDepth;
        superDepth = obj7;
        var func9 = function(argcv) {    // method new
            var curarg = 1;
            if (argcv[0] !=  func9.paramCounts[0]) // != 0
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method new is of wrong size"));
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                var obj10 = Grace_allocObject();
                obj10.outer = this;
                var reader_Animation_outer11 = function() {
                    return this.outer;
                }
                obj10.methods["outer"] = reader_Animation_outer11;
                function obj_init_10() {
                    var origSuperDepth = superDepth;
                    superDepth = obj10;
                    var func12 = function(argcv) {    // method run
                        var curarg = 1;
                        if (argcv[0] !=  func12.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method run is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 47
                            onSelf = true;
                            var call14 = callmethod(this, "isRunning", [0]);
                            if (Grace_isTrue(call14)) {
                                lineNumber = 48
                                onSelf = true;
                                var call15 = callmethod(this, "animations", [0]);
                                var block16 = Grace_allocObject();
                                block16.methods["apply"] = function() {
                                    var args = Array.prototype.slice.call(arguments, 1);
                                    return this.real.apply(this.receiver, args);
                                }
                                block16.methods["applyIndirectly"] = function(argcv, a) {
                                    return this.real.apply(this.receiver, a._value);
                                }
                                block16.methods["outer"] = function() {
                                    return callmethod(this.receiver, 'outer', [0]);
                                }
                                block16.methods["match"] = GraceBlock_match;
                                block16.receiver = this;
                                block16.className = 'block<Animation:48>';
                                block16.real = function(
                                                        var_animation
                                                        ) {
                                    sourceObject = this;
                                    lineNumber = 49
                                    var call17 = callmethod(var_animation,"step", [0]);
                                    return call17;
                                };
                                var call18 = callmethod(Grace_prelude,"for()do", [1, 1], call15, block16);
                                lineNumber = 51
                                onSelf = true;
                                var call19 = callmethod(this, "time", [0]);
                                var block20 = Grace_allocObject();
                                block20.methods["apply"] = function() {
                                    var args = Array.prototype.slice.call(arguments, 1);
                                    return this.real.apply(this.receiver, args);
                                }
                                block20.methods["applyIndirectly"] = function(argcv, a) {
                                    return this.real.apply(this.receiver, a._value);
                                }
                                block20.methods["outer"] = function() {
                                    return callmethod(this.receiver, 'outer', [0]);
                                }
                                block20.methods["match"] = GraceBlock_match;
                                block20.receiver = this;
                                block20.className = 'block<Animation:51>';
                                block20.real = function(
                                ) {
                                    sourceObject = this;
                                    onSelf = true;
                                    var call21 = callmethod(this, "run", [0]);
                                    return call21;
                                };
                                var call22 = callmethod(var_timer,"after()do", [1, 1], call19, block20);
                                var if13 = call22;
                            }
                            return if13
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func12.paramCounts = [
                                          0,
                                          ];
                    func12.variableArities = [
                                              false,
                                              ];
                    obj10.methods["run"] = func12;
                    var func23 = function(argcv) {    // method stopAnimating(1)
                        var curarg = 1;
                        var var_bd = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func23.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method stopAnimating(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 57
                            onSelf = true;
                            var call24 = callmethod(this, "animations", [0]);
                            onSelf = true;
                            var call25 = callmethod(this, "dropElt", [2], var_bd, call24);
                            onSelf = true;
                            var call26 = callmethod(this, "animations:=", [1], call25);
                            return call26
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func23.paramTypes = [];
                    func23.paramTypes.push([type_Animated, "bd"]);
                    func23.paramCounts = [
                                          1,
                                          ];
                    func23.variableArities = [
                                              false,
                                              ];
                    obj10.methods["stopAnimating"] = func23;
                    var func27 = function(argcv) {    // method startAnimating(1)
                        var curarg = 1;
                        var var_bd = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func27.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method startAnimating(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 62
                            onSelf = true;
                            var call28 = callmethod(this, "animations", [0]);
                            var call29 = callmethod(call28,"push", [1], var_bd);
                            return call29
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func27.paramTypes = [];
                    func27.paramTypes.push([type_Animated, "bd"]);
                    func27.paramCounts = [
                                          1,
                                          ];
                    func27.variableArities = [
                                              false,
                                              ];
                    obj10.methods["startAnimating"] = func27;
                    var func30 = function(argcv) {    // method dropElt(2)
                        var curarg = 1;
                        var var_m = arguments[curarg];
                        curarg++;
                        var var_lst = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func30.paramCounts[0]) // != 2
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method dropElt(2) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 67
                            var call32 = callmethod(var_lst,"size", [0]);
                            var opresult34 = callmethod(call32, "==", [1], new GraceNum(0));
                            if (Grace_isTrue(opresult34)) {
                                lineNumber = 68
                                var array35 = new GraceList([
                                                            ]);
                                
                                var if31 = array35;
                            } else {
                                lineNumber = 70
                                var array36 = new GraceList([
                                                            ]);
                                
                                var var_newlst = array36;
                                lineNumber = 70;
                                if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                             [1], var_newlst)))
                                    throw new GraceExceptionPacket(TypeErrorObject,
                                                                   new GraceString("expected "
                                                                                   + "initial value of var 'newlst' to be of type Dynamic"))
                                    lineNumber = 71
                                    var block37 = Grace_allocObject();
                                block37.methods["apply"] = function() {
                                    var args = Array.prototype.slice.call(arguments, 1);
                                    return this.real.apply(this.receiver, args);
                                }
                                block37.methods["applyIndirectly"] = function(argcv, a) {
                                    return this.real.apply(this.receiver, a._value);
                                }
                                block37.methods["outer"] = function() {
                                    return callmethod(this.receiver, 'outer', [0]);
                                }
                                block37.methods["match"] = GraceBlock_match;
                                block37.receiver = this;
                                block37.className = 'block<Animation:71>';
                                block37.real = function(
                                                        var_i
                                                        ) {
                                    sourceObject = this;
                                    lineNumber = 72
                                    var opresult40 = callmethod(var_i, "!=", [1], var_m);
                                    if (Grace_isTrue(opresult40)) {
                                        lineNumber = 73
                                        var call41 = callmethod(var_newlst,"push", [1], var_i);
                                        var if38 = call41;
                                    }
                                    return if38;
                                };
                                var call42 = callmethod(Grace_prelude,"for()do", [1, 1], var_lst, block37);
                                lineNumber = 76
                                return var_newlst
                                var if31 = undefined;
                            }
                            return if31
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func30.paramTypes = [];
                    func30.paramTypes.push([type_Animated, "m"]);
                    func30.paramTypes.push([]);
                    func30.paramCounts = [
                                          2,
                                          ];
                    func30.variableArities = [
                                              false,
                                              ];
                    obj10.methods["dropElt"] = func30;
                    var func43 = function(argcv) {    // method stopAnimation
                        var curarg = 1;
                        if (argcv[0] !=  func43.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method stopAnimation is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 83
                            var bool44 = new GraceBoolean(false)
                            onSelf = true;
                            var call45 = callmethod(this, "isRunning:=", [1], bool44);
                            return call45
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func43.paramCounts = [
                                          0,
                                          ];
                    func43.variableArities = [
                                              false,
                                              ];
                    obj10.methods["stopAnimation"] = func43;
                    var func46 = function(argcv) {    // method while(1)do(1)
                        var curarg = 1;
                        var var_condition = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func46.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method while(1)do(1) is of wrong size"));
                        var var_block = arguments[curarg];
                        curarg++;
                        if (argcv[1] !=  func46.paramCounts[1]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 2 to method while(1)do(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 89
                            var obj47 = Grace_allocObject();
                            obj47.outer = this;
                            var reader_Animation_outer48 = function() {
                                return this.outer;
                            }
                            obj47.methods["outer"] = reader_Animation_outer48;
                            function obj_init_47() {
                                var origSuperDepth = superDepth;
                                superDepth = obj47;
                                var func49 = function(argcv) {    // method step
                                    var curarg = 1;
                                    if (argcv[0] !=  func49.paramCounts[0]) // != 0
                                        callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method step is of wrong size"));
                                    var returnTarget = invocationCount;
                                    invocationCount++;
                                    try {
                                        lineNumber = 91
                                        var call51 = callmethod(var_condition,"apply", [0]);
                                        if (Grace_isTrue(call51)) {
                                            lineNumber = 92
                                            var call52 = callmethod(var_block,"apply", [0]);
                                            var if50 = call52;
                                        } else {
                                            lineNumber = 1
                                            var call53 = callmethod(superDepth, "outer", [0]);
                                            onOuter = true;
                                            onSelf = true;
                                            var call54 = callmethod(call53, "stopAnimating", [1], var_animatedOb);
                                            var if50 = call54;
                                        }
                                        return if50
                                    } catch(e) {
                                        if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                            return e.returnvalue;
                                        } else {
                                            throw e;
                                        }
                                    }
                                }
                                func49.paramCounts = [
                                                      0,
                                                      ];
                                func49.variableArities = [
                                                          false,
                                                          ];
                                obj47.methods["step"] = func49;
                                sourceObject = obj47;
                                superDepth = origSuperDepth;
                            }
                            obj_init_47.apply(obj47, []);
                            var var_animatedOb = obj47;
                            lineNumber = 89;
                            if (!Grace_isTrue(callmethod(var_Animated, "match",
                                                         [1], var_animatedOb)))
                                throw new GraceExceptionPacket(TypeErrorObject,
                                                               new GraceString("expected "
                                                                               + "initial value of def 'animatedOb' to be of type Animated"))
                                lineNumber = 98
                                onSelf = true;
                            var call55 = callmethod(this, "startAnimating", [1], var_animatedOb);
                            return call55
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func46.paramTypes = [];
                    func46.paramTypes.push([type_BoolBlock, "condition"]);
                    func46.paramTypes.push([type_Block, "block"]);
                    func46.paramCounts = [
                                          1,
                                          1,
                                          ];
                    func46.variableArities = [
                                              false,
                                              false,
                                              ];
                    obj10.methods["while()do"] = func46;
                    var func56 = function(argcv) {    // method while(1)do(1)finally(1)
                        var curarg = 1;
                        var var_condition = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func56.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method while(1)do(1)finally(1) is of wrong size"));
                        var var_block = arguments[curarg];
                        curarg++;
                        if (argcv[1] !=  func56.paramCounts[1]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 2 to method while(1)do(1)finally(1) is of wrong size"));
                        var var_endBlock = arguments[curarg];
                        curarg++;
                        if (argcv[2] !=  func56.paramCounts[2]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 3 to method while(1)do(1)finally(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 105
                            var obj57 = Grace_allocObject();
                            obj57.outer = this;
                            var reader_Animation_outer58 = function() {
                                return this.outer;
                            }
                            obj57.methods["outer"] = reader_Animation_outer58;
                            function obj_init_57() {
                                var origSuperDepth = superDepth;
                                superDepth = obj57;
                                var func59 = function(argcv) {    // method step
                                    var curarg = 1;
                                    if (argcv[0] !=  func59.paramCounts[0]) // != 0
                                        callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method step is of wrong size"));
                                    var returnTarget = invocationCount;
                                    invocationCount++;
                                    try {
                                        lineNumber = 107
                                        var call61 = callmethod(var_condition,"apply", [0]);
                                        if (Grace_isTrue(call61)) {
                                            lineNumber = 108
                                            var call62 = callmethod(var_block,"apply", [0]);
                                            var if60 = call62;
                                        } else {
                                            lineNumber = 110
                                            var call63 = callmethod(var_endBlock,"apply", [0]);
                                            lineNumber = 1
                                            var call64 = callmethod(superDepth, "outer", [0]);
                                            onOuter = true;
                                            onSelf = true;
                                            var call65 = callmethod(call64, "stopAnimating", [1], var_animatedOb);
                                            var if60 = call65;
                                        }
                                        return if60
                                    } catch(e) {
                                        if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                            return e.returnvalue;
                                        } else {
                                            throw e;
                                        }
                                    }
                                }
                                func59.paramCounts = [
                                                      0,
                                                      ];
                                func59.variableArities = [
                                                          false,
                                                          ];
                                obj57.methods["step"] = func59;
                                sourceObject = obj57;
                                superDepth = origSuperDepth;
                            }
                            obj_init_57.apply(obj57, []);
                            var var_animatedOb = obj57;
                            lineNumber = 105;
                            if (!Grace_isTrue(callmethod(var_Animated, "match",
                                                         [1], var_animatedOb)))
                                throw new GraceExceptionPacket(TypeErrorObject,
                                                               new GraceString("expected "
                                                                               + "initial value of def 'animatedOb' to be of type Animated"))
                                lineNumber = 115
                                onSelf = true;
                            var call66 = callmethod(this, "startAnimating", [1], var_animatedOb);
                            return call66
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func56.paramTypes = [];
                    func56.paramTypes.push([type_BoolBlock, "condition"]);
                    func56.paramTypes.push([type_Block, "block"]);
                    func56.paramTypes.push([type_Block, "endBlock"]);
                    func56.paramCounts = [
                                          1,
                                          1,
                                          1,
                                          ];
                    func56.variableArities = [
                                              false,
                                              false,
                                              false,
                                              ];
                    obj10.methods["while()do()finally"] = func56;
                    var func67 = function(argcv) {    // method while(1)do(1)pausing(1)
                        var curarg = 1;
                        var var_condition = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func67.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method while(1)do(1)pausing(1) is of wrong size"));
                        var var_block = arguments[curarg];
                        curarg++;
                        if (argcv[1] !=  func67.paramCounts[1]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 2 to method while(1)do(1)pausing(1) is of wrong size"));
                        var var_timeBlock = arguments[curarg];
                        curarg++;
                        if (argcv[2] !=  func67.paramCounts[2]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 3 to method while(1)do(1)pausing(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 119
                            var call69 = callmethod(var_condition,"apply", [0]);
                            if (Grace_isTrue(call69)) {
                                lineNumber = 120
                                var call70 = callmethod(var_block,"apply", [0]);
                                lineNumber = 121
                                var call71 = callmethod(var_timeBlock,"apply", [0]);
                                var block72 = Grace_allocObject();
                                block72.methods["apply"] = function() {
                                    var args = Array.prototype.slice.call(arguments, 1);
                                    return this.real.apply(this.receiver, args);
                                }
                                block72.methods["applyIndirectly"] = function(argcv, a) {
                                    return this.real.apply(this.receiver, a._value);
                                }
                                block72.methods["outer"] = function() {
                                    return callmethod(this.receiver, 'outer', [0]);
                                }
                                block72.methods["match"] = GraceBlock_match;
                                block72.receiver = this;
                                block72.className = 'block<Animation:121>';
                                block72.real = function(
                                ) {
                                    sourceObject = this;
                                    lineNumber = 122
                                    onSelf = true;
                                    var call73 = callmethod(this, "while()do()pausing", [1, 1, 1], var_condition, var_block, var_timeBlock);
                                    return call73;
                                };
                                lineNumber = 121
                                var call74 = callmethod(var_timer,"after()do", [1, 1], call71, block72);
                                var if68 = call74;
                            }
                            return if68
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func67.paramTypes = [];
                    func67.paramTypes.push([type_BoolBlock, "condition"]);
                    func67.paramTypes.push([type_Block, "block"]);
                    func67.paramTypes.push([]);
                    func67.paramCounts = [
                                          1,
                                          1,
                                          1,
                                          ];
                    func67.variableArities = [
                                              false,
                                              false,
                                              false,
                                              ];
                    obj10.methods["while()do()pausing"] = func67;
                    var func75 = function(argcv) {    // method every(1)while(1)do(1)
                        var curarg = 1;
                        var var_time = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func75.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method every(1)while(1)do(1) is of wrong size"));
                        var var_condition = arguments[curarg];
                        curarg++;
                        if (argcv[1] !=  func75.paramCounts[1]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 2 to method every(1)while(1)do(1) is of wrong size"));
                        var var_block = arguments[curarg];
                        curarg++;
                        if (argcv[2] !=  func75.paramCounts[2]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 3 to method every(1)while(1)do(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 128
                            var call77 = callmethod(var_condition,"apply", [0]);
                            if (Grace_isTrue(call77)) {
                                lineNumber = 129
                                var call78 = callmethod(var_block,"apply", [0]);
                                lineNumber = 130
                                var block79 = Grace_allocObject();
                                block79.methods["apply"] = function() {
                                    var args = Array.prototype.slice.call(arguments, 1);
                                    return this.real.apply(this.receiver, args);
                                }
                                block79.methods["applyIndirectly"] = function(argcv, a) {
                                    return this.real.apply(this.receiver, a._value);
                                }
                                block79.methods["outer"] = function() {
                                    return callmethod(this.receiver, 'outer', [0]);
                                }
                                block79.methods["match"] = GraceBlock_match;
                                block79.receiver = this;
                                block79.className = 'block<Animation:130>';
                                block79.real = function(
                                ) {
                                    sourceObject = this;
                                    lineNumber = 131
                                    var call81 = callmethod(var_condition,"apply", [0]);
                                    if (Grace_isTrue(call81)) {
                                        lineNumber = 132
                                        var call82 = callmethod(var_block,"apply", [0]);
                                        var if80 = call82;
                                    } else {
                                        lineNumber = 134
                                        var call83 = callmethod(var_timer,"stop", [1], var_id);
                                        var if80 = call83;
                                    }
                                    return if80;
                                };
                                lineNumber = 130
                                var call84 = callmethod(var_timer,"every()do", [1, 1], var_time, block79);
                                var var_id = call84;
                                lineNumber = 130;
                                if (!Grace_isTrue(callmethod(var_Number, "match",
                                                             [1], var_id)))
                                    throw new GraceExceptionPacket(TypeErrorObject,
                                                                   new GraceString("expected "
                                                                                   + "initial value of def 'id' to be of type Number"))
                                    var if76 = call84;
                            }
                            return if76
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func75.paramTypes = [];
                    func75.paramTypes.push([type_Number, "time"]);
                    func75.paramTypes.push([type_BoolBlock, "condition"]);
                    func75.paramTypes.push([type_Block, "block"]);
                    func75.paramCounts = [
                                          1,
                                          1,
                                          1,
                                          ];
                    func75.variableArities = [
                                              false,
                                              false,
                                              false,
                                              ];
                    obj10.methods["every()while()do"] = func75;
                    var func85 = function(argcv) {    // method every(1)while(1)do(1)finally(1)
                        var curarg = 1;
                        var var_time = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func85.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method every(1)while(1)do(1)finally(1) is of wrong size"));
                        var var_condition = arguments[curarg];
                        curarg++;
                        if (argcv[1] !=  func85.paramCounts[1]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 2 to method every(1)while(1)do(1)finally(1) is of wrong size"));
                        var var_block = arguments[curarg];
                        curarg++;
                        if (argcv[2] !=  func85.paramCounts[2]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 3 to method every(1)while(1)do(1)finally(1) is of wrong size"));
                        var var_followBlock = arguments[curarg];
                        curarg++;
                        if (argcv[3] !=  func85.paramCounts[3]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 4 to method every(1)while(1)do(1)finally(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 141
                            var call87 = callmethod(var_condition,"apply", [0]);
                            if (Grace_isTrue(call87)) {
                                lineNumber = 142
                                var call88 = callmethod(var_block,"apply", [0]);
                                lineNumber = 143
                                var block89 = Grace_allocObject();
                                block89.methods["apply"] = function() {
                                    var args = Array.prototype.slice.call(arguments, 1);
                                    return this.real.apply(this.receiver, args);
                                }
                                block89.methods["applyIndirectly"] = function(argcv, a) {
                                    return this.real.apply(this.receiver, a._value);
                                }
                                block89.methods["outer"] = function() {
                                    return callmethod(this.receiver, 'outer', [0]);
                                }
                                block89.methods["match"] = GraceBlock_match;
                                block89.receiver = this;
                                block89.className = 'block<Animation:143>';
                                block89.real = function(
                                ) {
                                    sourceObject = this;
                                    lineNumber = 144
                                    var call91 = callmethod(var_condition,"apply", [0]);
                                    if (Grace_isTrue(call91)) {
                                        lineNumber = 145
                                        var call92 = callmethod(var_block,"apply", [0]);
                                        var if90 = call92;
                                    } else {
                                        lineNumber = 147
                                        var call93 = callmethod(var_timer,"stop", [1], var_id);
                                        lineNumber = 148
                                        var call94 = callmethod(var_followBlock,"apply", [0]);
                                        var if90 = call94;
                                    }
                                    return if90;
                                };
                                lineNumber = 143
                                var call95 = callmethod(var_timer,"every()do", [1, 1], var_time, block89);
                                var var_id = call95;
                                lineNumber = 143;
                                if (!Grace_isTrue(callmethod(var_Number, "match",
                                                             [1], var_id)))
                                    throw new GraceExceptionPacket(TypeErrorObject,
                                                                   new GraceString("expected "
                                                                                   + "initial value of def 'id' to be of type Number"))
                                    var if86 = call95;
                            } else {
                                lineNumber = 152
                                var call96 = callmethod(var_followBlock,"apply", [0]);
                                var if86 = call96;
                            }
                            return if86
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func85.paramTypes = [];
                    func85.paramTypes.push([type_Number, "time"]);
                    func85.paramTypes.push([type_BoolBlock, "condition"]);
                    func85.paramTypes.push([type_Block, "block"]);
                    func85.paramTypes.push([type_Block, "followBlock"]);
                    func85.paramCounts = [
                                          1,
                                          1,
                                          1,
                                          1,
                                          ];
                    func85.variableArities = [
                                              false,
                                              false,
                                              false,
                                              false,
                                              ];
                    obj10.methods["every()while()do()finally"] = func85;
                    sourceObject = obj10;
                    lineNumber = 40
                    var bool97 = new GraceBoolean(true)
                    obj10.data["isRunning"] = bool97;
                    var reader_Animation_isRunning98 = function() {
                        return this.data["isRunning"];
                    }
                    obj10.methods["isRunning"] = reader_Animation_isRunning98;
                    obj10.data["isRunning"] = bool97;
                    var writer_Animation_isRunning98 = function(argcv, o) {
                        this.data["isRunning"] = o;
                    }
                    obj10.methods["isRunning:="] = writer_Animation_isRunning98;
                    reader_Animation_isRunning98.confidential = true;
                    writer_Animation_isRunning98.confidential = true;
                    lineNumber = 40;
                    if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                 [1], bool97)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'isRunning' to be of type Dynamic"))
                        obj10.mutable = true;
                    sourceObject = obj10;
                    lineNumber = 41
                    var quotient100 = callmethod(new GraceNum(1000), "/", [1], new GraceNum(30));
                    obj10.data["time"] = quotient100;
                    var reader_Animation_time101 = function() {
                        return this.data["time"];
                    }
                    obj10.methods["time"] = reader_Animation_time101;
                    obj10.data["time"] = quotient100;
                    var writer_Animation_time101 = function(argcv, o) {
                        this.data["time"] = o;
                    }
                    obj10.methods["time:="] = writer_Animation_time101;
                    reader_Animation_time101.confidential = true;
                    writer_Animation_time101.confidential = true;
                    lineNumber = 41;
                    if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                 [1], quotient100)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'time' to be of type Dynamic"))
                        obj10.mutable = true;
                    sourceObject = obj10;
                    lineNumber = 42
                    var array102 = new GraceList([
                                                 ]);
                    
                    obj10.data["animations"] = array102;
                    var reader_Animation_animations103 = function() {
                        return this.data["animations"];
                    }
                    obj10.methods["animations"] = reader_Animation_animations103;
                    obj10.data["animations"] = array102;
                    var writer_Animation_animations103 = function(argcv, o) {
                        this.data["animations"] = o;
                    }
                    obj10.methods["animations:="] = writer_Animation_animations103;
                    reader_Animation_animations103.confidential = true;
                    writer_Animation_animations103.confidential = true;
                    lineNumber = 42;
                    if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                 [1], array102)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'animations' to be of type Dynamic"))
                        obj10.mutable = true;
                    sourceObject = obj10;
                    sourceObject = obj10;
                    sourceObject = obj10;
                    sourceObject = obj10;
                    sourceObject = obj10;
                    sourceObject = obj10;
                    sourceObject = obj10;
                    sourceObject = obj10;
                    sourceObject = obj10;
                    sourceObject = obj10;
                    sourceObject = obj10;
                    lineNumber = 156
                    onSelf = true;
                    var call104 = callmethod(this, "run", [0]);
                    superDepth = origSuperDepth;
                }
                obj_init_10.apply(obj10, []);
                return obj10
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        func9.paramCounts = [
                             0,
                             ];
        func9.variableArities = [
                                 false,
                                 ];
        obj7.methods["new"] = func9;
        var func105 = function(argcv) {
            var curarg = 1;
            var inheritingObject = arguments[curarg++];
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                var obj106 = Grace_allocObject();
                var inho106 = inheritingObject;
                while (inho106.superobj) inho106 = inho106.superobj;
                inho106.superobj = obj106;
                obj106.data = inheritingObject.data;
                obj106.outer = this;
                var reader_Animation_outer107 = function() {
                    return this.outer;
                }
                obj106.methods["outer"] = reader_Animation_outer107;
                function obj_init_106() {
                    var origSuperDepth = superDepth;
                    superDepth = obj106;
                    var func108 = function(argcv) {    // method run
                        var curarg = 1;
                        if (argcv[0] !=  func108.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method run is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 47
                            onSelf = true;
                            var call110 = callmethod(this, "isRunning", [0]);
                            if (Grace_isTrue(call110)) {
                                lineNumber = 48
                                onSelf = true;
                                var call111 = callmethod(this, "animations", [0]);
                                var block112 = Grace_allocObject();
                                block112.methods["apply"] = function() {
                                    var args = Array.prototype.slice.call(arguments, 1);
                                    return this.real.apply(this.receiver, args);
                                }
                                block112.methods["applyIndirectly"] = function(argcv, a) {
                                    return this.real.apply(this.receiver, a._value);
                                }
                                block112.methods["outer"] = function() {
                                    return callmethod(this.receiver, 'outer', [0]);
                                }
                                block112.methods["match"] = GraceBlock_match;
                                block112.receiver = this;
                                block112.className = 'block<Animation:48>';
                                block112.real = function(
                                                         var_animation
                                                         ) {
                                    sourceObject = this;
                                    lineNumber = 49
                                    var call113 = callmethod(var_animation,"step", [0]);
                                    return call113;
                                };
                                var call114 = callmethod(Grace_prelude,"for()do", [1, 1], call111, block112);
                                lineNumber = 51
                                onSelf = true;
                                var call115 = callmethod(this, "time", [0]);
                                var block116 = Grace_allocObject();
                                block116.methods["apply"] = function() {
                                    var args = Array.prototype.slice.call(arguments, 1);
                                    return this.real.apply(this.receiver, args);
                                }
                                block116.methods["applyIndirectly"] = function(argcv, a) {
                                    return this.real.apply(this.receiver, a._value);
                                }
                                block116.methods["outer"] = function() {
                                    return callmethod(this.receiver, 'outer', [0]);
                                }
                                block116.methods["match"] = GraceBlock_match;
                                block116.receiver = this;
                                block116.className = 'block<Animation:51>';
                                block116.real = function(
                                ) {
                                    sourceObject = this;
                                    onSelf = true;
                                    var call117 = callmethod(this, "run", [0]);
                                    return call117;
                                };
                                var call118 = callmethod(var_timer,"after()do", [1, 1], call115, block116);
                                var if109 = call118;
                            }
                            return if109
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func108.paramCounts = [
                                           0,
                                           ];
                    func108.variableArities = [
                                               false,
                                               ];
                    obj106.methods["run"] = func108;
                    var func119 = function(argcv) {    // method stopAnimating(1)
                        var curarg = 1;
                        var var_bd = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func119.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method stopAnimating(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 57
                            onSelf = true;
                            var call120 = callmethod(this, "animations", [0]);
                            onSelf = true;
                            var call121 = callmethod(this, "dropElt", [2], var_bd, call120);
                            onSelf = true;
                            var call122 = callmethod(this, "animations:=", [1], call121);
                            return call122
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func119.paramTypes = [];
                    func119.paramTypes.push([type_Animated, "bd"]);
                    func119.paramCounts = [
                                           1,
                                           ];
                    func119.variableArities = [
                                               false,
                                               ];
                    obj106.methods["stopAnimating"] = func119;
                    var func123 = function(argcv) {    // method startAnimating(1)
                        var curarg = 1;
                        var var_bd = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func123.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method startAnimating(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 62
                            onSelf = true;
                            var call124 = callmethod(this, "animations", [0]);
                            var call125 = callmethod(call124,"push", [1], var_bd);
                            return call125
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func123.paramTypes = [];
                    func123.paramTypes.push([type_Animated, "bd"]);
                    func123.paramCounts = [
                                           1,
                                           ];
                    func123.variableArities = [
                                               false,
                                               ];
                    obj106.methods["startAnimating"] = func123;
                    var func126 = function(argcv) {    // method dropElt(2)
                        var curarg = 1;
                        var var_m = arguments[curarg];
                        curarg++;
                        var var_lst = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func126.paramCounts[0]) // != 2 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method dropElt(2) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 67
                            var call128 = callmethod(var_lst,"size", [0]);
                            var opresult130 = callmethod(call128, "==", [1], new GraceNum(0));
                            if (Grace_isTrue(opresult130)) {
                                lineNumber = 68
                                var array131 = new GraceList([
                                                             ]);
                                
                                var if127 = array131;
                            } else {
                                lineNumber = 70
                                var array132 = new GraceList([
                                                             ]);
                                
                                var var_newlst = array132;
                                lineNumber = 70;
                                if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                             [1], var_newlst)))
                                    throw new GraceExceptionPacket(TypeErrorObject,
                                                                   new GraceString("expected "
                                                                                   + "initial value of var 'newlst' to be of type Dynamic"))
                                    lineNumber = 71
                                    var block133 = Grace_allocObject();
                                block133.methods["apply"] = function() {
                                    var args = Array.prototype.slice.call(arguments, 1);
                                    return this.real.apply(this.receiver, args);
                                }
                                block133.methods["applyIndirectly"] = function(argcv, a) {
                                    return this.real.apply(this.receiver, a._value);
                                }
                                block133.methods["outer"] = function() {
                                    return callmethod(this.receiver, 'outer', [0]);
                                }
                                block133.methods["match"] = GraceBlock_match;
                                block133.receiver = this;
                                block133.className = 'block<Animation:71>';
                                block133.real = function(
                                                         var_i
                                                         ) {
                                    sourceObject = this;
                                    lineNumber = 72
                                    var opresult136 = callmethod(var_i, "!=", [1], var_m);
                                    if (Grace_isTrue(opresult136)) {
                                        lineNumber = 73
                                        var call137 = callmethod(var_newlst,"push", [1], var_i);
                                        var if134 = call137;
                                    }
                                    return if134;
                                };
                                var call138 = callmethod(Grace_prelude,"for()do", [1, 1], var_lst, block133);
                                lineNumber = 76
                                return var_newlst
                                var if127 = undefined;
                            }
                            return if127
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func126.paramTypes = [];
                    func126.paramTypes.push([type_Animated, "m"]);
                    func126.paramTypes.push([]);
                    func126.paramCounts = [
                                           2,
                                           ];
                    func126.variableArities = [
                                               false,
                                               ];
                    obj106.methods["dropElt"] = func126;
                    var func139 = function(argcv) {    // method stopAnimation
                        var curarg = 1;
                        if (argcv[0] !=  func139.paramCounts[0]) // != 0 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method stopAnimation is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 83
                            var bool140 = new GraceBoolean(false)
                            onSelf = true;
                            var call141 = callmethod(this, "isRunning:=", [1], bool140);
                            return call141
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func139.paramCounts = [
                                           0,
                                           ];
                    func139.variableArities = [
                                               false,
                                               ];
                    obj106.methods["stopAnimation"] = func139;
                    var func142 = function(argcv) {    // method while(1)do(1)
                        var curarg = 1;
                        var var_condition = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func142.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method while(1)do(1) is of wrong size"));
                        var var_block = arguments[curarg];
                        curarg++;
                        if (argcv[1] !=  func142.paramCounts[1]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 2 to method while(1)do(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 89
                            var obj143 = Grace_allocObject();
                            obj143.outer = this;
                            var reader_Animation_outer144 = function() {
                                return this.outer;
                            }
                            obj143.methods["outer"] = reader_Animation_outer144;
                            function obj_init_143() {
                                var origSuperDepth = superDepth;
                                superDepth = obj143;
                                var func145 = function(argcv) {    // method step
                                    var curarg = 1;
                                    if (argcv[0] !=  func145.paramCounts[0]) // != 0 
                                        callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method step is of wrong size"));
                                    var returnTarget = invocationCount;
                                    invocationCount++;
                                    try {
                                        lineNumber = 91
                                        var call147 = callmethod(var_condition,"apply", [0]);
                                        if (Grace_isTrue(call147)) {
                                            lineNumber = 92
                                            var call148 = callmethod(var_block,"apply", [0]);
                                            var if146 = call148;
                                        } else {
                                            lineNumber = 1
                                            var call149 = callmethod(superDepth, "outer", [0]);
                                            onOuter = true;
                                            onSelf = true;
                                            var call150 = callmethod(call149, "stopAnimating", [1], var_animatedOb);
                                            var if146 = call150;
                                        }
                                        return if146
                                    } catch(e) {
                                        if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                            return e.returnvalue;
                                        } else {
                                            throw e;
                                        }
                                    }
                                }
                                func145.paramCounts = [
                                                       0,
                                                       ];
                                func145.variableArities = [
                                                           false,
                                                           ];
                                obj143.methods["step"] = func145;
                                sourceObject = obj143;
                                superDepth = origSuperDepth;
                            }
                            obj_init_143.apply(obj143, []);
                            var var_animatedOb = obj143;
                            lineNumber = 89;
                            if (!Grace_isTrue(callmethod(var_Animated, "match",
                                                         [1], var_animatedOb)))
                                throw new GraceExceptionPacket(TypeErrorObject,
                                                               new GraceString("expected "
                                                                               + "initial value of def 'animatedOb' to be of type Animated"))
                                lineNumber = 98
                                onSelf = true;
                            var call151 = callmethod(this, "startAnimating", [1], var_animatedOb);
                            return call151
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func142.paramTypes = [];
                    func142.paramTypes.push([type_BoolBlock, "condition"]);
                    func142.paramTypes.push([type_Block, "block"]);
                    func142.paramCounts = [
                                           1,
                                           1,
                                           ];
                    func142.variableArities = [
                                               false,
                                               false,
                                               ];
                    obj106.methods["while()do"] = func142;
                    var func152 = function(argcv) {    // method while(1)do(1)finally(1)
                        var curarg = 1;
                        var var_condition = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func152.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method while(1)do(1)finally(1) is of wrong size"));
                        var var_block = arguments[curarg];
                        curarg++;
                        if (argcv[1] !=  func152.paramCounts[1]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 2 to method while(1)do(1)finally(1) is of wrong size"));
                        var var_endBlock = arguments[curarg];
                        curarg++;
                        if (argcv[2] !=  func152.paramCounts[2]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 3 to method while(1)do(1)finally(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 105
                            var obj153 = Grace_allocObject();
                            obj153.outer = this;
                            var reader_Animation_outer154 = function() {
                                return this.outer;
                            }
                            obj153.methods["outer"] = reader_Animation_outer154;
                            function obj_init_153() {
                                var origSuperDepth = superDepth;
                                superDepth = obj153;
                                var func155 = function(argcv) {    // method step
                                    var curarg = 1;
                                    if (argcv[0] !=  func155.paramCounts[0]) // != 0 
                                        callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method step is of wrong size"));
                                    var returnTarget = invocationCount;
                                    invocationCount++;
                                    try {
                                        lineNumber = 107
                                        var call157 = callmethod(var_condition,"apply", [0]);
                                        if (Grace_isTrue(call157)) {
                                            lineNumber = 108
                                            var call158 = callmethod(var_block,"apply", [0]);
                                            var if156 = call158;
                                        } else {
                                            lineNumber = 110
                                            var call159 = callmethod(var_endBlock,"apply", [0]);
                                            lineNumber = 1
                                            var call160 = callmethod(superDepth, "outer", [0]);
                                            onOuter = true;
                                            onSelf = true;
                                            var call161 = callmethod(call160, "stopAnimating", [1], var_animatedOb);
                                            var if156 = call161;
                                        }
                                        return if156
                                    } catch(e) {
                                        if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                            return e.returnvalue;
                                        } else {
                                            throw e;
                                        }
                                    }
                                }
                                func155.paramCounts = [
                                                       0,
                                                       ];
                                func155.variableArities = [
                                                           false,
                                                           ];
                                obj153.methods["step"] = func155;
                                sourceObject = obj153;
                                superDepth = origSuperDepth;
                            }
                            obj_init_153.apply(obj153, []);
                            var var_animatedOb = obj153;
                            lineNumber = 105;
                            if (!Grace_isTrue(callmethod(var_Animated, "match",
                                                         [1], var_animatedOb)))
                                throw new GraceExceptionPacket(TypeErrorObject,
                                                               new GraceString("expected "
                                                                               + "initial value of def 'animatedOb' to be of type Animated"))
                                lineNumber = 115
                                onSelf = true;
                            var call162 = callmethod(this, "startAnimating", [1], var_animatedOb);
                            return call162
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func152.paramTypes = [];
                    func152.paramTypes.push([type_BoolBlock, "condition"]);
                    func152.paramTypes.push([type_Block, "block"]);
                    func152.paramTypes.push([type_Block, "endBlock"]);
                    func152.paramCounts = [
                                           1,
                                           1,
                                           1,
                                           ];
                    func152.variableArities = [
                                               false,
                                               false,
                                               false,
                                               ];
                    obj106.methods["while()do()finally"] = func152;
                    var func163 = function(argcv) {    // method while(1)do(1)pausing(1)
                        var curarg = 1;
                        var var_condition = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func163.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method while(1)do(1)pausing(1) is of wrong size"));
                        var var_block = arguments[curarg];
                        curarg++;
                        if (argcv[1] !=  func163.paramCounts[1]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 2 to method while(1)do(1)pausing(1) is of wrong size"));
                        var var_timeBlock = arguments[curarg];
                        curarg++;
                        if (argcv[2] !=  func163.paramCounts[2]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 3 to method while(1)do(1)pausing(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 119
                            var call165 = callmethod(var_condition,"apply", [0]);
                            if (Grace_isTrue(call165)) {
                                lineNumber = 120
                                var call166 = callmethod(var_block,"apply", [0]);
                                lineNumber = 121
                                var call167 = callmethod(var_timeBlock,"apply", [0]);
                                var block168 = Grace_allocObject();
                                block168.methods["apply"] = function() {
                                    var args = Array.prototype.slice.call(arguments, 1);
                                    return this.real.apply(this.receiver, args);
                                }
                                block168.methods["applyIndirectly"] = function(argcv, a) {
                                    return this.real.apply(this.receiver, a._value);
                                }
                                block168.methods["outer"] = function() {
                                    return callmethod(this.receiver, 'outer', [0]);
                                }
                                block168.methods["match"] = GraceBlock_match;
                                block168.receiver = this;
                                block168.className = 'block<Animation:121>';
                                block168.real = function(
                                ) {
                                    sourceObject = this;
                                    lineNumber = 122
                                    onSelf = true;
                                    var call169 = callmethod(this, "while()do()pausing", [1, 1, 1], var_condition, var_block, var_timeBlock);
                                    return call169;
                                };
                                lineNumber = 121
                                var call170 = callmethod(var_timer,"after()do", [1, 1], call167, block168);
                                var if164 = call170;
                            }
                            return if164
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func163.paramTypes = [];
                    func163.paramTypes.push([type_BoolBlock, "condition"]);
                    func163.paramTypes.push([type_Block, "block"]);
                    func163.paramTypes.push([]);
                    func163.paramCounts = [
                                           1,
                                           1,
                                           1,
                                           ];
                    func163.variableArities = [
                                               false,
                                               false,
                                               false,
                                               ];
                    obj106.methods["while()do()pausing"] = func163;
                    var func171 = function(argcv) {    // method every(1)while(1)do(1)
                        var curarg = 1;
                        var var_time = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func171.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method every(1)while(1)do(1) is of wrong size"));
                        var var_condition = arguments[curarg];
                        curarg++;
                        if (argcv[1] !=  func171.paramCounts[1]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 2 to method every(1)while(1)do(1) is of wrong size"));
                        var var_block = arguments[curarg];
                        curarg++;
                        if (argcv[2] !=  func171.paramCounts[2]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 3 to method every(1)while(1)do(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 128
                            var call173 = callmethod(var_condition,"apply", [0]);
                            if (Grace_isTrue(call173)) {
                                lineNumber = 129
                                var call174 = callmethod(var_block,"apply", [0]);
                                lineNumber = 130
                                var block175 = Grace_allocObject();
                                block175.methods["apply"] = function() {
                                    var args = Array.prototype.slice.call(arguments, 1);
                                    return this.real.apply(this.receiver, args);
                                }
                                block175.methods["applyIndirectly"] = function(argcv, a) {
                                    return this.real.apply(this.receiver, a._value);
                                }
                                block175.methods["outer"] = function() {
                                    return callmethod(this.receiver, 'outer', [0]);
                                }
                                block175.methods["match"] = GraceBlock_match;
                                block175.receiver = this;
                                block175.className = 'block<Animation:130>';
                                block175.real = function(
                                ) {
                                    sourceObject = this;
                                    lineNumber = 131
                                    var call177 = callmethod(var_condition,"apply", [0]);
                                    if (Grace_isTrue(call177)) {
                                        lineNumber = 132
                                        var call178 = callmethod(var_block,"apply", [0]);
                                        var if176 = call178;
                                    } else {
                                        lineNumber = 134
                                        var call179 = callmethod(var_timer,"stop", [1], var_id);
                                        var if176 = call179;
                                    }
                                    return if176;
                                };
                                lineNumber = 130
                                var call180 = callmethod(var_timer,"every()do", [1, 1], var_time, block175);
                                var var_id = call180;
                                lineNumber = 130;
                                if (!Grace_isTrue(callmethod(var_Number, "match",
                                                             [1], var_id)))
                                    throw new GraceExceptionPacket(TypeErrorObject,
                                                                   new GraceString("expected "
                                                                                   + "initial value of def 'id' to be of type Number"))
                                    var if172 = call180;
                            }
                            return if172
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func171.paramTypes = [];
                    func171.paramTypes.push([type_Number, "time"]);
                    func171.paramTypes.push([type_BoolBlock, "condition"]);
                    func171.paramTypes.push([type_Block, "block"]);
                    func171.paramCounts = [
                                           1,
                                           1,
                                           1,
                                           ];
                    func171.variableArities = [
                                               false,
                                               false,
                                               false,
                                               ];
                    obj106.methods["every()while()do"] = func171;
                    var func181 = function(argcv) {    // method every(1)while(1)do(1)finally(1)
                        var curarg = 1;
                        var var_time = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func181.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method every(1)while(1)do(1)finally(1) is of wrong size"));
                        var var_condition = arguments[curarg];
                        curarg++;
                        if (argcv[1] !=  func181.paramCounts[1]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 2 to method every(1)while(1)do(1)finally(1) is of wrong size"));
                        var var_block = arguments[curarg];
                        curarg++;
                        if (argcv[2] !=  func181.paramCounts[2]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 3 to method every(1)while(1)do(1)finally(1) is of wrong size"));
                        var var_followBlock = arguments[curarg];
                        curarg++;
                        if (argcv[3] !=  func181.paramCounts[3]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 4 to method every(1)while(1)do(1)finally(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 141
                            var call183 = callmethod(var_condition,"apply", [0]);
                            if (Grace_isTrue(call183)) {
                                lineNumber = 142
                                var call184 = callmethod(var_block,"apply", [0]);
                                lineNumber = 143
                                var block185 = Grace_allocObject();
                                block185.methods["apply"] = function() {
                                    var args = Array.prototype.slice.call(arguments, 1);
                                    return this.real.apply(this.receiver, args);
                                }
                                block185.methods["applyIndirectly"] = function(argcv, a) {
                                    return this.real.apply(this.receiver, a._value);
                                }
                                block185.methods["outer"] = function() {
                                    return callmethod(this.receiver, 'outer', [0]);
                                }
                                block185.methods["match"] = GraceBlock_match;
                                block185.receiver = this;
                                block185.className = 'block<Animation:143>';
                                block185.real = function(
                                ) {
                                    sourceObject = this;
                                    lineNumber = 144
                                    var call187 = callmethod(var_condition,"apply", [0]);
                                    if (Grace_isTrue(call187)) {
                                        lineNumber = 145
                                        var call188 = callmethod(var_block,"apply", [0]);
                                        var if186 = call188;
                                    } else {
                                        lineNumber = 147
                                        var call189 = callmethod(var_timer,"stop", [1], var_id);
                                        lineNumber = 148
                                        var call190 = callmethod(var_followBlock,"apply", [0]);
                                        var if186 = call190;
                                    }
                                    return if186;
                                };
                                lineNumber = 143
                                var call191 = callmethod(var_timer,"every()do", [1, 1], var_time, block185);
                                var var_id = call191;
                                lineNumber = 143;
                                if (!Grace_isTrue(callmethod(var_Number, "match",
                                                             [1], var_id)))
                                    throw new GraceExceptionPacket(TypeErrorObject,
                                                                   new GraceString("expected "
                                                                                   + "initial value of def 'id' to be of type Number"))
                                    var if182 = call191;
                            } else {
                                lineNumber = 152
                                var call192 = callmethod(var_followBlock,"apply", [0]);
                                var if182 = call192;
                            }
                            return if182
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func181.paramTypes = [];
                    func181.paramTypes.push([type_Number, "time"]);
                    func181.paramTypes.push([type_BoolBlock, "condition"]);
                    func181.paramTypes.push([type_Block, "block"]);
                    func181.paramTypes.push([type_Block, "followBlock"]);
                    func181.paramCounts = [
                                           1,
                                           1,
                                           1,
                                           1,
                                           ];
                    func181.variableArities = [
                                               false,
                                               false,
                                               false,
                                               false,
                                               ];
                    obj106.methods["every()while()do()finally"] = func181;
                    sourceObject = obj106;
                    lineNumber = 40
                    var bool193 = new GraceBoolean(true)
                    obj106.data["isRunning"] = bool193;
                    var reader_Animation_isRunning194 = function() {
                        return this.data["isRunning"];
                    }
                    obj106.methods["isRunning"] = reader_Animation_isRunning194;
                    obj106.data["isRunning"] = bool193;
                    var writer_Animation_isRunning194 = function(argcv, o) {
                        this.data["isRunning"] = o;
                    }
                    obj106.methods["isRunning:="] = writer_Animation_isRunning194;
                    reader_Animation_isRunning194.confidential = true;
                    writer_Animation_isRunning194.confidential = true;
                    lineNumber = 40;
                    if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                 [1], bool193)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'isRunning' to be of type Dynamic"))
                        obj106.mutable = true;
                    sourceObject = obj106;
                    lineNumber = 41
                    var quotient196 = callmethod(new GraceNum(1000), "/", [1], new GraceNum(30));
                    obj106.data["time"] = quotient196;
                    var reader_Animation_time197 = function() {
                        return this.data["time"];
                    }
                    obj106.methods["time"] = reader_Animation_time197;
                    obj106.data["time"] = quotient196;
                    var writer_Animation_time197 = function(argcv, o) {
                        this.data["time"] = o;
                    }
                    obj106.methods["time:="] = writer_Animation_time197;
                    reader_Animation_time197.confidential = true;
                    writer_Animation_time197.confidential = true;
                    lineNumber = 41;
                    if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                 [1], quotient196)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'time' to be of type Dynamic"))
                        obj106.mutable = true;
                    sourceObject = obj106;
                    lineNumber = 42
                    var array198 = new GraceList([
                                                 ]);
                    
                    obj106.data["animations"] = array198;
                    var reader_Animation_animations199 = function() {
                        return this.data["animations"];
                    }
                    obj106.methods["animations"] = reader_Animation_animations199;
                    obj106.data["animations"] = array198;
                    var writer_Animation_animations199 = function(argcv, o) {
                        this.data["animations"] = o;
                    }
                    obj106.methods["animations:="] = writer_Animation_animations199;
                    reader_Animation_animations199.confidential = true;
                    writer_Animation_animations199.confidential = true;
                    lineNumber = 42;
                    if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                 [1], array198)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'animations' to be of type Dynamic"))
                        obj106.mutable = true;
                    sourceObject = obj106;
                    sourceObject = obj106;
                    sourceObject = obj106;
                    sourceObject = obj106;
                    sourceObject = obj106;
                    sourceObject = obj106;
                    sourceObject = obj106;
                    sourceObject = obj106;
                    sourceObject = obj106;
                    sourceObject = obj106;
                    sourceObject = obj106;
                    lineNumber = 156
                    onSelf = true;
                    var call200 = callmethod(this, "run", [0]);
                    superDepth = origSuperDepth;
                }
                obj_init_106.apply(inheritingObject, []);
                return obj106
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        obj7.methods["new()object"] = func105;
        sourceObject = obj7;
        superDepth = origSuperDepth;
    }
    obj_init_7.apply(obj7, []);
    var var_AnimatorClass = obj7;
    return this;
}
if (gctCache)
gctCache['Animation'] = "public:\n BoolBlock\n Animated\n Animator\n AnimatorClass\nconstructors-of:AnimatorClass:\n new\nmethods-of:AnimatorClass.new:\n time\n every()while()do\n animations:=\n run\n stopAnimating\n while()do()finally\n stopAnimation\n every()while()do()finally\n time:=\n startAnimating\n while()do()pausing\n isRunning\n isRunning:=\n while()do\n dropElt\n animations\npath:\n Animation\nclasses:\n AnimatorClass\nconfidential:\nfresh-methods:\nmodules:\n";
