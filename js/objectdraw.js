function gracecode_objectdraw() {
    lineNumber = 25
    var type0 = new GraceType("GColor");
    var var_GColor = type0;
    type0.typeMethods.push("red");
    type0.typeMethods.push("green");
    type0.typeMethods.push("blue");
    type0.typeMethods.push("asString");
    lineNumber = 1
    var func1 = function(argcv) {    // method GColor
        var curarg = 1;
        if (argcv[0] !=  func1.paramCounts[0]) // != 0
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method GColor is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            return var_GColor
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
    this.methods["GColor"] = func1;
    var type_GColor = var_GColor;
    lineNumber = 29
    var type2 = new GraceType("DrawingBlock");
    var var_DrawingBlock = type2;
    type2.typeMethods.push("apply");
    lineNumber = 1
    var func3 = function(argcv) {    // method DrawingBlock
        var curarg = 1;
        if (argcv[0] !=  func3.paramCounts[0]) // != 0
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method DrawingBlock is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            return var_DrawingBlock
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
    this.methods["DrawingBlock"] = func3;
    var type_DrawingBlock = var_DrawingBlock;
    lineNumber = 36
    var type4 = new GraceType("Widget");
    var var_Widget = type4;
    type4.typeMethods.push("add_events");
    type4.typeMethods.push("set_size_request");
    type4.typeMethods.push("on()do");
    lineNumber = 1
    var func5 = function(argcv) {    // method Widget
        var curarg = 1;
        if (argcv[0] !=  func5.paramCounts[0]) // != 0
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method Widget is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            return var_Widget
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
    this.methods["Widget"] = func5;
    var type_Widget = var_Widget;
    lineNumber = 55
    var type6 = new GraceType("Location");
    var var_Location = type6;
    type6.typeMethods.push("x");
    type6.typeMethods.push("y");
    type6.typeMethods.push("translate");
    type6.typeMethods.push("distanceTo");
    type6.typeMethods.push("==");
    type6.typeMethods.push("asString");
    lineNumber = 1
    var func7 = function(argcv) {    // method Location
        var curarg = 1;
        if (argcv[0] !=  func7.paramCounts[0]) // != 0
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method Location is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            return var_Location
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func7.paramCounts = [
                         0,
                         ];
    func7.variableArities = [
                             false,
                             ];
    this.methods["Location"] = func7;
    var type_Location = var_Location;
    lineNumber = 106
    var type8 = new GraceType("GraphicObject");
    var var_GraphicObject = type8;
    type8.typeMethods.push("x");
    type8.typeMethods.push("y");
    type8.typeMethods.push("location");
    type8.typeMethods.push("addToCanvas");
    type8.typeMethods.push("removeFromCanvas");
    type8.typeMethods.push("canvas");
    type8.typeMethods.push("isVisible");
    type8.typeMethods.push("isVisible:=");
    type8.typeMethods.push("moveTo");
    type8.typeMethods.push("moveBy");
    type8.typeMethods.push("color:=");
    type8.typeMethods.push("color");
    type8.typeMethods.push("sendForward");
    type8.typeMethods.push("sendBackward");
    type8.typeMethods.push("sendToFront");
    type8.typeMethods.push("sendToBack");
    type8.typeMethods.push("asString");
    lineNumber = 1
    var func9 = function(argcv) {    // method GraphicObject
        var curarg = 1;
        if (argcv[0] !=  func9.paramCounts[0]) // != 0
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method GraphicObject is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            return var_GraphicObject
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
    this.methods["GraphicObject"] = func9;
    var type_GraphicObject = var_GraphicObject;
    lineNumber = 123
    var type10 = new GraceType("Context");
    var var_Context = type10;
    type10.typeMethods.push("set_source_rgb");
    type10.typeMethods.push("rectangle");
    type10.typeMethods.push("move_to");
    type10.typeMethods.push("line_to");
    type10.typeMethods.push("fill");
    type10.typeMethods.push("stroke");
    type10.typeMethods.push("save");
    type10.typeMethods.push("restore");
    type10.typeMethods.push("translate");
    type10.typeMethods.push("scale");
    type10.typeMethods.push("arc");
    type10.typeMethods.push("font_size:=");
    type10.typeMethods.push("show_text");
    lineNumber = 1
    var func11 = function(argcv) {    // method Context
        var curarg = 1;
        if (argcv[0] !=  func11.paramCounts[0]) // != 0
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method Context is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            return var_Context
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func11.paramCounts = [
                          0,
                          ];
    func11.variableArities = [
                              false,
                              ];
    this.methods["Context"] = func11;
    var type_Context = var_Context;
    lineNumber = 160
    var type12 = new GraceType("Canvas");
    var var_Canvas = type12;
    type12.typeMethods.push("add");
    type12.typeMethods.push("remove");
    type12.typeMethods.push("setStateChanged");
    type12.typeMethods.push("clear");
    type12.typeMethods.push("doSetUp");
    type12.typeMethods.push("sendToFront");
    type12.typeMethods.push("sendToBack");
    type12.typeMethods.push("sendForward");
    type12.typeMethods.push("sendBackward");
    type12.typeMethods.push("drawingArea");
    type12.typeMethods.push("width");
    type12.typeMethods.push("height");
    lineNumber = 1
    var func13 = function(argcv) {    // method Canvas
        var curarg = 1;
        if (argcv[0] !=  func13.paramCounts[0]) // != 0
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method Canvas is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            return var_Canvas
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func13.paramCounts = [
                          0,
                          ];
    func13.variableArities = [
                              false,
                              ];
    this.methods["Canvas"] = func13;
    var type_Canvas = var_Canvas;
    lineNumber = 194
    var type14 = new GraceType("GraphicApplication");
    var var_GraphicApplication = type14;
    type14.typeMethods.push("canvas");
    type14.typeMethods.push("windowTitle:=");
    type14.typeMethods.push("onMouseClick");
    type14.typeMethods.push("onMousePress");
    type14.typeMethods.push("onMouseRelease");
    type14.typeMethods.push("onMouseMove");
    type14.typeMethods.push("onMouseDrag");
    type14.typeMethods.push("onMouseEnter");
    type14.typeMethods.push("onMouseExit");
    lineNumber = 1
    var func15 = function(argcv) {    // method GraphicApplication
        var curarg = 1;
        if (argcv[0] !=  func15.paramCounts[0]) // != 0
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method GraphicApplication is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            return var_GraphicApplication
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func15.paramCounts = [
                          0,
                          ];
    func15.variableArities = [
                              false,
                              ];
    this.methods["GraphicApplication"] = func15;
    var type_GraphicApplication = var_GraphicApplication;
    lineNumber = 203
    var func16 = function(argcv) {    // method randomColor
        var curarg = 1;
        if (argcv[0] !=  func16.paramCounts[0]) // != 0
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method randomColor is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            lineNumber = 204
            var call17 = callmethod(var_random,"random", [0]);
            var prod19 = callmethod(call17, "*", [1], new GraceNum(255));
            lineNumber = 204
            var call20 = callmethod(var_random,"random", [0]);
            var prod22 = callmethod(call20, "*", [1], new GraceNum(255));
            lineNumber = 204
            var call23 = callmethod(var_random,"random", [0]);
            var prod25 = callmethod(call23, "*", [1], new GraceNum(255));
            var call26 = callmethod(var_aColor,"r()g()b", [1, 1, 1], prod19, prod22, prod25);
            return call26
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func16.paramCounts = [
                          0,
                          ];
    func16.variableArities = [
                              false,
                              ];
    this.methods["randomColor"] = func16;
    lineNumber = 511
    var type27 = new GraceType("Graphic2DObject");
    var var_Graphic2DObject = type27;
    lineNumber = 1
    var func28 = function(argcv) {    // method Graphic2DObject
        var curarg = 1;
        if (argcv[0] !=  func28.paramCounts[0]) // != 0
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method Graphic2DObject is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            return var_Graphic2DObject
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func28.paramCounts = [
                          0,
                          ];
    func28.variableArities = [
                              false,
                              ];
    this.methods["Graphic2DObject"] = func28;
    var type_Graphic2DObject = var_Graphic2DObject;
    lineNumber = 519
    var type29 = new GraceType("Resizable2DObject");
    var var_Resizable2DObject = type29;
    lineNumber = 1
    var func30 = function(argcv) {    // method Resizable2DObject
        var curarg = 1;
        if (argcv[0] !=  func30.paramCounts[0]) // != 0
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method Resizable2DObject is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            return var_Resizable2DObject
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func30.paramCounts = [
                          0,
                          ];
    func30.variableArities = [
                              false,
                              ];
    this.methods["Resizable2DObject"] = func30;
    var type_Resizable2DObject = var_Resizable2DObject;
    lineNumber = 531
    var type31 = new GraceType("LinearObject");
    var var_LinearObject = type31;
    lineNumber = 1
    var func32 = function(argcv) {    // method LinearObject
        var curarg = 1;
        if (argcv[0] !=  func32.paramCounts[0]) // != 0
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method LinearObject is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            return var_LinearObject
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func32.paramCounts = [
                          0,
                          ];
    func32.variableArities = [
                              false,
                              ];
    this.methods["LinearObject"] = func32;
    var type_LinearObject = var_LinearObject;
    lineNumber = 968
    var type33 = new GraceType("Textual");
    var var_Textual = type33;
    lineNumber = 1
    var func34 = function(argcv) {    // method Textual
        var curarg = 1;
        if (argcv[0] !=  func34.paramCounts[0]) // != 0
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method Textual is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            return var_Textual
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func34.paramCounts = [
                          0,
                          ];
    func34.variableArities = [
                              false,
                              ];
    this.methods["Textual"] = func34;
    var type_Textual = var_Textual;
    lineNumber = 7
    // Import of gtk
    if (typeof gracecode_gtk == 'undefined')
        throw new GraceExceptionPacket(RuntimeErrorObject,
                                       new GraceString('could not find module gtk'));
    var var_gtk = do_import("gtk", gracecode_gtk);
    lineNumber = 8
    // Import of gdk
    if (typeof gracecode_gdk == 'undefined')
        throw new GraceExceptionPacket(RuntimeErrorObject,
                                       new GraceString('could not find module gdk'));
    var var_gdk = do_import("gdk", gracecode_gdk);
    lineNumber = 9
    // Import of cairo
    if (typeof gracecode_cairo == 'undefined')
        throw new GraceExceptionPacket(RuntimeErrorObject,
                                       new GraceString('could not find module cairo'));
    var var_cairo = do_import("cairo", gracecode_cairo);
    lineNumber = 10
    // Import of sys
    if (typeof gracecode_sys == 'undefined')
        throw new GraceExceptionPacket(RuntimeErrorObject,
                                       new GraceString('could not find module sys'));
    var var_sys = do_import("sys", gracecode_sys);
    lineNumber = 11
    // Import of mgcollections
    if (typeof gracecode_mgcollections == 'undefined')
        throw new GraceExceptionPacket(RuntimeErrorObject,
                                       new GraceString('could not find module mgcollections'));
    var var_collections = do_import("mgcollections", gracecode_mgcollections);
    lineNumber = 12
    // Import of math
    if (typeof gracecode_math == 'undefined')
        throw new GraceExceptionPacket(RuntimeErrorObject,
                                       new GraceString('could not find module math'));
    var var_math = do_import("math", gracecode_math);
    lineNumber = 13
    // Import of random
    if (typeof gracecode_random == 'undefined')
        throw new GraceExceptionPacket(RuntimeErrorObject,
                                       new GraceString('could not find module random'));
    var var_random = do_import("random", gracecode_random);
    lineNumber = 15
    // Import of io
    if (typeof gracecode_io == 'undefined')
        throw new GraceExceptionPacket(RuntimeErrorObject,
                                       new GraceString('could not find module io'));
    var var_io = do_import("io", gracecode_io);
    lineNumber = 1
    var func35 = function(argcv) {    // method aColor
        var curarg = 1;
        if (argcv[0] !=  func35.paramCounts[0]) // != 0
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method aColor is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            lineNumber = 194
            return var_aColor
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func35.paramCounts = [
                          0,
                          ];
    func35.variableArities = [
                              false,
                              ];
    this.methods["aColor"] = func35;
    lineNumber = 1
    var obj36 = Grace_allocObject();
    obj36.outer = this;
    var reader_objectdraw_outer37 = function() {
        return this.outer;
    }
    obj36.methods["outer"] = reader_objectdraw_outer37;
    function obj_init_36() {
        var origSuperDepth = superDepth;
        superDepth = obj36;
        var func38 = function(argcv) {    // method r(1)g(1)b(1)
            var curarg = 1;
            var var_r__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func38.paramCounts[0]) // != 1
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method r(1)g(1)b(1) is of wrong size"));
            var var_g__39__ = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func38.paramCounts[1]) // != 1
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 2 to method r(1)g(1)b(1) is of wrong size"));
            var var_b__39__ = arguments[curarg];
            curarg++;
            if (argcv[2] !=  func38.paramCounts[2]) // != 1
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 3 to method r(1)g(1)b(1) is of wrong size"));
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                var obj39 = Grace_allocObject();
                obj39.outer = this;
                var reader_objectdraw_outer40 = function() {
                    return this.outer;
                }
                obj39.methods["outer"] = reader_objectdraw_outer40;
                function obj_init_39() {
                    var origSuperDepth = superDepth;
                    superDepth = obj39;
                    var func41 = function(argcv) {    // method asString
                        var curarg = 1;
                        if (argcv[0] !=  func41.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method asString is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 199
                            var string42 = new GraceString("rgb(");
                            onSelf = true;
                            var call43 = callmethod(this, "red", [0]);
                            var prod45 = callmethod(call43, "*", [1], new GraceNum(255));
                            var opresult47 = callmethod(string42, "++", [1], prod45);
                            var string48 = new GraceString(", ");
                            var opresult50 = callmethod(opresult47, "++", [1], string48);
                            onSelf = true;
                            var call51 = callmethod(this, "green", [0]);
                            var prod53 = callmethod(call51, "*", [1], new GraceNum(255));
                            var opresult55 = callmethod(opresult50, "++", [1], prod53);
                            var string56 = new GraceString(", ");
                            var opresult58 = callmethod(opresult55, "++", [1], string56);
                            onSelf = true;
                            var call59 = callmethod(this, "blue", [0]);
                            var prod61 = callmethod(call59, "*", [1], new GraceNum(255));
                            var opresult63 = callmethod(opresult58, "++", [1], prod61);
                            var string64 = new GraceString(")");
                            var opresult66 = callmethod(opresult63, "++", [1], string64);
                            return opresult66
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func41.paramCounts = [
                                          0,
                                          ];
                    func41.variableArities = [
                                              false,
                                              ];
                    obj39.methods["asString"] = func41;
                    sourceObject = obj39;
                    lineNumber = 195
                    var quotient68 = callmethod(var_r__39__, "/", [1], new GraceNum(255));
                    obj39.data["red"] = quotient68;
                    var reader_objectdraw_red69 = function() {
                        return this.data["red"];
                    }
                    reader_objectdraw_red69.def = true;
                    obj39.methods["red"] = reader_objectdraw_red69;
                    lineNumber = 195;
                    if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                 [1], quotient68)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of def 'red' to be of type Dynamic"))
                        sourceObject = obj39;
                    lineNumber = 196
                    var quotient71 = callmethod(var_g__39__, "/", [1], new GraceNum(255));
                    obj39.data["green"] = quotient71;
                    var reader_objectdraw_green72 = function() {
                        return this.data["green"];
                    }
                    reader_objectdraw_green72.def = true;
                    obj39.methods["green"] = reader_objectdraw_green72;
                    lineNumber = 196;
                    if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                 [1], quotient71)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of def 'green' to be of type Dynamic"))
                        sourceObject = obj39;
                    lineNumber = 197
                    var quotient74 = callmethod(var_b__39__, "/", [1], new GraceNum(255));
                    obj39.data["blue"] = quotient74;
                    var reader_objectdraw_blue75 = function() {
                        return this.data["blue"];
                    }
                    reader_objectdraw_blue75.def = true;
                    obj39.methods["blue"] = reader_objectdraw_blue75;
                    lineNumber = 197;
                    if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                 [1], quotient74)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of def 'blue' to be of type Dynamic"))
                        sourceObject = obj39;
                    superDepth = origSuperDepth;
                }
                obj_init_39.apply(obj39, []);
                return obj39
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        func38.paramCounts = [
                              1,
                              1,
                              1,
                              ];
        func38.variableArities = [
                                  false,
                                  false,
                                  false,
                                  ];
        obj36.methods["r()g()b"] = func38;
        var func76 = function(argcv) {
            var curarg = 1;
            var var_r__39__ = arguments[curarg];
            curarg++;
            var var_g__39__ = arguments[curarg];
            curarg++;
            var var_b__39__ = arguments[curarg];
            curarg++;
            var inheritingObject = arguments[curarg++];
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                var obj77 = Grace_allocObject();
                var inho77 = inheritingObject;
                while (inho77.superobj) inho77 = inho77.superobj;
                inho77.superobj = obj77;
                obj77.data = inheritingObject.data;
                obj77.outer = this;
                var reader_objectdraw_outer78 = function() {
                    return this.outer;
                }
                obj77.methods["outer"] = reader_objectdraw_outer78;
                function obj_init_77() {
                    var origSuperDepth = superDepth;
                    superDepth = obj77;
                    var func79 = function(argcv) {    // method asString
                        var curarg = 1;
                        if (argcv[0] !=  func79.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method asString is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 199
                            var string80 = new GraceString("rgb(");
                            onSelf = true;
                            var call81 = callmethod(this, "red", [0]);
                            var prod83 = callmethod(call81, "*", [1], new GraceNum(255));
                            var opresult85 = callmethod(string80, "++", [1], prod83);
                            var string86 = new GraceString(", ");
                            var opresult88 = callmethod(opresult85, "++", [1], string86);
                            onSelf = true;
                            var call89 = callmethod(this, "green", [0]);
                            var prod91 = callmethod(call89, "*", [1], new GraceNum(255));
                            var opresult93 = callmethod(opresult88, "++", [1], prod91);
                            var string94 = new GraceString(", ");
                            var opresult96 = callmethod(opresult93, "++", [1], string94);
                            onSelf = true;
                            var call97 = callmethod(this, "blue", [0]);
                            var prod99 = callmethod(call97, "*", [1], new GraceNum(255));
                            var opresult101 = callmethod(opresult96, "++", [1], prod99);
                            var string102 = new GraceString(")");
                            var opresult104 = callmethod(opresult101, "++", [1], string102);
                            return opresult104
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func79.paramCounts = [
                                          0,
                                          ];
                    func79.variableArities = [
                                              false,
                                              ];
                    obj77.methods["asString"] = func79;
                    sourceObject = obj77;
                    lineNumber = 195
                    var quotient106 = callmethod(var_r__39__, "/", [1], new GraceNum(255));
                    obj77.data["red"] = quotient106;
                    var reader_objectdraw_red107 = function() {
                        return this.data["red"];
                    }
                    reader_objectdraw_red107.def = true;
                    obj77.methods["red"] = reader_objectdraw_red107;
                    lineNumber = 195;
                    if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                 [1], quotient106)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of def 'red' to be of type Dynamic"))
                        sourceObject = obj77;
                    lineNumber = 196
                    var quotient109 = callmethod(var_g__39__, "/", [1], new GraceNum(255));
                    obj77.data["green"] = quotient109;
                    var reader_objectdraw_green110 = function() {
                        return this.data["green"];
                    }
                    reader_objectdraw_green110.def = true;
                    obj77.methods["green"] = reader_objectdraw_green110;
                    lineNumber = 196;
                    if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                 [1], quotient109)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of def 'green' to be of type Dynamic"))
                        sourceObject = obj77;
                    lineNumber = 197
                    var quotient112 = callmethod(var_b__39__, "/", [1], new GraceNum(255));
                    obj77.data["blue"] = quotient112;
                    var reader_objectdraw_blue113 = function() {
                        return this.data["blue"];
                    }
                    reader_objectdraw_blue113.def = true;
                    obj77.methods["blue"] = reader_objectdraw_blue113;
                    lineNumber = 197;
                    if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                 [1], quotient112)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of def 'blue' to be of type Dynamic"))
                        sourceObject = obj77;
                    superDepth = origSuperDepth;
                }
                obj_init_77.apply(inheritingObject, []);
                return obj77
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        obj36.methods["r()g()b()object"] = func76;
        sourceObject = obj36;
        superDepth = origSuperDepth;
    }
    obj_init_36.apply(obj36, []);
    var var_aColor = obj36;
    lineNumber = 1
    var func114 = function(argcv) {    // method aLocation
        var curarg = 1;
        if (argcv[0] !=  func114.paramCounts[0]) // != 0
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method aLocation is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            lineNumber = 209
            return var_aLocation
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func114.paramCounts = [
                           0,
                           ];
    func114.variableArities = [
                               false,
                               ];
    this.methods["aLocation"] = func114;
    lineNumber = 1
    var obj115 = Grace_allocObject();
    obj115.outer = this;
    var reader_objectdraw_outer116 = function() {
        return this.outer;
    }
    obj115.methods["outer"] = reader_objectdraw_outer116;
    function obj_init_115() {
        var origSuperDepth = superDepth;
        superDepth = obj115;
        var func117 = function(argcv) {    // method at(2)
            var curarg = 1;
            var var_x__39__ = arguments[curarg];
            curarg++;
            var var_y__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func117.paramCounts[0]) // != 2
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method at(2) is of wrong size"));
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                var obj118 = Grace_allocObject();
                obj118.outer = this;
                var reader_objectdraw_outer119 = function() {
                    return this.outer;
                }
                obj118.methods["outer"] = reader_objectdraw_outer119;
                function obj_init_118() {
                    var origSuperDepth = superDepth;
                    superDepth = obj118;
                    var func120 = function(argcv) {    // method ==(1)
                        var curarg = 1;
                        var var_other = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func120.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method ==(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 214
                            var call121 = callmethod(var_other,"x", [0]);
                            onSelf = true;
                            var call122 = callmethod(this, "x", [0]);
                            var opresult124 = callmethod(call121, "==", [1], call122);
                            lineNumber = 214
                            var call125 = callmethod(var_other,"y", [0]);
                            onSelf = true;
                            var call126 = callmethod(this, "y", [0]);
                            var opresult128 = callmethod(call125, "==", [1], call126);
                            var opresult130 = callmethod(opresult124, "&&", [1], opresult128);
                            return opresult130
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func120.paramTypes = [];
                    func120.paramTypes.push([type_Location, "other"]);
                    func120.paramCounts = [
                                           1,
                                           ];
                    func120.variableArities = [
                                               false,
                                               ];
                    obj118.methods["=="] = func120;
                    var func131 = function(argcv) {    // method translate(2)
                        var curarg = 1;
                        var var_dx = arguments[curarg];
                        curarg++;
                        var var_dy = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func131.paramCounts[0]) // != 2
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method translate(2) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 218
                            onSelf = true;
                            var call132 = callmethod(this, "x", [0]);
                            var opresult134 = callmethod(call132, "+", [1], var_dx);
                            onSelf = true;
                            var call135 = callmethod(this, "y", [0]);
                            var opresult137 = callmethod(call135, "+", [1], var_dy);
                            var call138 = callmethod(var_aLocation,"at", [2], opresult134, opresult137);
                            return call138
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func131.paramTypes = [];
                    func131.paramTypes.push([type_Number, "dx"]);
                    func131.paramTypes.push([type_Number, "dy"]);
                    func131.paramCounts = [
                                           2,
                                           ];
                    func131.variableArities = [
                                               false,
                                               ];
                    obj118.methods["translate"] = func131;
                    var func139 = function(argcv) {    // method distanceTo(1)
                        var curarg = 1;
                        var var_other = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func139.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method distanceTo(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 222
                            onSelf = true;
                            var call140 = callmethod(this, "x", [0]);
                            lineNumber = 222
                            var call141 = callmethod(var_other,"x", [0]);
                            var diff143 = callmethod(call140, "-", [1], call141);
                            var call144 = callmethod(var_math,"sqr", [1], diff143);
                            onSelf = true;
                            var call145 = callmethod(this, "y", [0]);
                            lineNumber = 222
                            var call146 = callmethod(var_other,"y", [0]);
                            var diff148 = callmethod(call145, "-", [1], call146);
                            var call149 = callmethod(var_math,"sqr", [1], diff148);
                            var opresult151 = callmethod(call144, "+", [1], call149);
                            var call152 = callmethod(var_math,"sqrt", [1], opresult151);
                            return call152
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func139.paramTypes = [];
                    func139.paramTypes.push([type_Location, "other"]);
                    func139.paramCounts = [
                                           1,
                                           ];
                    func139.variableArities = [
                                               false,
                                               ];
                    obj118.methods["distanceTo"] = func139;
                    var func153 = function(argcv) {    // method asString
                        var curarg = 1;
                        if (argcv[0] !=  func153.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method asString is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 226
                            var string154 = new GraceString("(");
                            onSelf = true;
                            var call155 = callmethod(this, "x", [0]);
                            var opresult157 = callmethod(string154, "++", [1], call155);
                            var string158 = new GraceString(",");
                            var opresult160 = callmethod(opresult157, "++", [1], string158);
                            onSelf = true;
                            var call161 = callmethod(this, "y", [0]);
                            var opresult163 = callmethod(opresult160, "++", [1], call161);
                            var string164 = new GraceString(")");
                            var opresult166 = callmethod(opresult163, "++", [1], string164);
                            return opresult166
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func153.paramCounts = [
                                           0,
                                           ];
                    func153.variableArities = [
                                               false,
                                               ];
                    obj118.methods["asString"] = func153;
                    sourceObject = obj118;
                    lineNumber = 210
                    obj118.data["x"] = var_x__39__;
                    var reader_objectdraw_x167 = function() {
                        return this.data["x"];
                    }
                    reader_objectdraw_x167.def = true;
                    obj118.methods["x"] = reader_objectdraw_x167;
                    lineNumber = 210;
                    if (!Grace_isTrue(callmethod(var_Number, "match",
                                                 [1], var_x__39__)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of def 'x' to be of type Number"))
                        sourceObject = obj118;
                    lineNumber = 211
                    obj118.data["y"] = var_y__39__;
                    var reader_objectdraw_y168 = function() {
                        return this.data["y"];
                    }
                    reader_objectdraw_y168.def = true;
                    obj118.methods["y"] = reader_objectdraw_y168;
                    lineNumber = 211;
                    if (!Grace_isTrue(callmethod(var_Number, "match",
                                                 [1], var_y__39__)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of def 'y' to be of type Number"))
                        sourceObject = obj118;
                    sourceObject = obj118;
                    sourceObject = obj118;
                    sourceObject = obj118;
                    superDepth = origSuperDepth;
                }
                obj_init_118.apply(obj118, []);
                return obj118
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        func117.paramTypes = [];
        func117.paramTypes.push([type_Number, "x'"]);
        func117.paramTypes.push([type_Number, "y'"]);
        func117.paramCounts = [
                               2,
                               ];
        func117.variableArities = [
                                   false,
                                   ];
        obj115.methods["at"] = func117;
        var func169 = function(argcv) {
            var curarg = 1;
            var var_x__39__ = arguments[curarg];
            curarg++;
            var var_y__39__ = arguments[curarg];
            curarg++;
            var inheritingObject = arguments[curarg++];
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                var obj170 = Grace_allocObject();
                var inho170 = inheritingObject;
                while (inho170.superobj) inho170 = inho170.superobj;
                inho170.superobj = obj170;
                obj170.data = inheritingObject.data;
                obj170.outer = this;
                var reader_objectdraw_outer171 = function() {
                    return this.outer;
                }
                obj170.methods["outer"] = reader_objectdraw_outer171;
                function obj_init_170() {
                    var origSuperDepth = superDepth;
                    superDepth = obj170;
                    var func172 = function(argcv) {    // method ==(1)
                        var curarg = 1;
                        var var_other = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func172.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method ==(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 214
                            var call173 = callmethod(var_other,"x", [0]);
                            onSelf = true;
                            var call174 = callmethod(this, "x", [0]);
                            var opresult176 = callmethod(call173, "==", [1], call174);
                            lineNumber = 214
                            var call177 = callmethod(var_other,"y", [0]);
                            onSelf = true;
                            var call178 = callmethod(this, "y", [0]);
                            var opresult180 = callmethod(call177, "==", [1], call178);
                            var opresult182 = callmethod(opresult176, "&&", [1], opresult180);
                            return opresult182
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func172.paramTypes = [];
                    func172.paramTypes.push([type_Location, "other"]);
                    func172.paramCounts = [
                                           1,
                                           ];
                    func172.variableArities = [
                                               false,
                                               ];
                    obj170.methods["=="] = func172;
                    var func183 = function(argcv) {    // method translate(2)
                        var curarg = 1;
                        var var_dx = arguments[curarg];
                        curarg++;
                        var var_dy = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func183.paramCounts[0]) // != 2
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method translate(2) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 218
                            onSelf = true;
                            var call184 = callmethod(this, "x", [0]);
                            var opresult186 = callmethod(call184, "+", [1], var_dx);
                            onSelf = true;
                            var call187 = callmethod(this, "y", [0]);
                            var opresult189 = callmethod(call187, "+", [1], var_dy);
                            var call190 = callmethod(var_aLocation,"at", [2], opresult186, opresult189);
                            return call190
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func183.paramTypes = [];
                    func183.paramTypes.push([type_Number, "dx"]);
                    func183.paramTypes.push([type_Number, "dy"]);
                    func183.paramCounts = [
                                           2,
                                           ];
                    func183.variableArities = [
                                               false,
                                               ];
                    obj170.methods["translate"] = func183;
                    var func191 = function(argcv) {    // method distanceTo(1)
                        var curarg = 1;
                        var var_other = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func191.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method distanceTo(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 222
                            onSelf = true;
                            var call192 = callmethod(this, "x", [0]);
                            lineNumber = 222
                            var call193 = callmethod(var_other,"x", [0]);
                            var diff195 = callmethod(call192, "-", [1], call193);
                            var call196 = callmethod(var_math,"sqr", [1], diff195);
                            onSelf = true;
                            var call197 = callmethod(this, "y", [0]);
                            lineNumber = 222
                            var call198 = callmethod(var_other,"y", [0]);
                            var diff200 = callmethod(call197, "-", [1], call198);
                            var call201 = callmethod(var_math,"sqr", [1], diff200);
                            var opresult203 = callmethod(call196, "+", [1], call201);
                            var call204 = callmethod(var_math,"sqrt", [1], opresult203);
                            return call204
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func191.paramTypes = [];
                    func191.paramTypes.push([type_Location, "other"]);
                    func191.paramCounts = [
                                           1,
                                           ];
                    func191.variableArities = [
                                               false,
                                               ];
                    obj170.methods["distanceTo"] = func191;
                    var func205 = function(argcv) {    // method asString
                        var curarg = 1;
                        if (argcv[0] !=  func205.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method asString is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 226
                            var string206 = new GraceString("(");
                            onSelf = true;
                            var call207 = callmethod(this, "x", [0]);
                            var opresult209 = callmethod(string206, "++", [1], call207);
                            var string210 = new GraceString(",");
                            var opresult212 = callmethod(opresult209, "++", [1], string210);
                            onSelf = true;
                            var call213 = callmethod(this, "y", [0]);
                            var opresult215 = callmethod(opresult212, "++", [1], call213);
                            var string216 = new GraceString(")");
                            var opresult218 = callmethod(opresult215, "++", [1], string216);
                            return opresult218
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func205.paramCounts = [
                                           0,
                                           ];
                    func205.variableArities = [
                                               false,
                                               ];
                    obj170.methods["asString"] = func205;
                    sourceObject = obj170;
                    lineNumber = 210
                    obj170.data["x"] = var_x__39__;
                    var reader_objectdraw_x219 = function() {
                        return this.data["x"];
                    }
                    reader_objectdraw_x219.def = true;
                    obj170.methods["x"] = reader_objectdraw_x219;
                    lineNumber = 210;
                    if (!Grace_isTrue(callmethod(var_Number, "match",
                                                 [1], var_x__39__)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of def 'x' to be of type Number"))
                        sourceObject = obj170;
                    lineNumber = 211
                    obj170.data["y"] = var_y__39__;
                    var reader_objectdraw_y220 = function() {
                        return this.data["y"];
                    }
                    reader_objectdraw_y220.def = true;
                    obj170.methods["y"] = reader_objectdraw_y220;
                    lineNumber = 211;
                    if (!Grace_isTrue(callmethod(var_Number, "match",
                                                 [1], var_y__39__)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of def 'y' to be of type Number"))
                        sourceObject = obj170;
                    sourceObject = obj170;
                    sourceObject = obj170;
                    sourceObject = obj170;
                    superDepth = origSuperDepth;
                }
                obj_init_170.apply(inheritingObject, []);
                return obj170
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        func169.paramTypes = [];
        func169.paramTypes.push([type_Number, "x'"]);
        func169.paramTypes.push([type_Number, "y'"]);
        obj115.methods["at()object"] = func169;
        sourceObject = obj115;
        superDepth = origSuperDepth;
    }
    obj_init_115.apply(obj115, []);
    var var_aLocation = obj115;
    lineNumber = 1
    var func221 = function(argcv) {    // method aCanvas
        var curarg = 1;
        if (argcv[0] !=  func221.paramCounts[0]) // != 0
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method aCanvas is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            lineNumber = 231
            return var_aCanvas
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func221.paramCounts = [
                           0,
                           ];
    func221.variableArities = [
                               false,
                               ];
    this.methods["aCanvas"] = func221;
    lineNumber = 1
    var obj222 = Grace_allocObject();
    obj222.outer = this;
    var reader_objectdraw_outer223 = function() {
        return this.outer;
    }
    obj222.methods["outer"] = reader_objectdraw_outer223;
    function obj_init_222() {
        var origSuperDepth = superDepth;
        superDepth = obj222;
        var func224 = function(argcv) {    // method size(2)
            var curarg = 1;
            var var_width__39__ = arguments[curarg];
            curarg++;
            var var_height__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func224.paramCounts[0]) // != 2
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method size(2) is of wrong size"));
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                var obj225 = Grace_allocObject();
                obj225.outer = this;
                var reader_objectdraw_outer226 = function() {
                    return this.outer;
                }
                obj225.methods["outer"] = reader_objectdraw_outer226;
                function obj_init_225() {
                    var origSuperDepth = superDepth;
                    superDepth = obj225;
                    var func227 = function(argcv) {    // method clear
                        var curarg = 1;
                        if (argcv[0] !=  func227.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method clear is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 263
                            var call228 = callmethod(var_collections,"list", [0]);
                            var call229 = callmethod(call228,"new", [0]);
                            onSelf = true;
                            var call230 = callmethod(this, "objects:=", [1], call229);
                            return call230
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func227.paramCounts = [
                                           0,
                                           ];
                    func227.variableArities = [
                                               false,
                                               ];
                    obj225.methods["clear"] = func227;
                    var func231 = function(argcv) {    // method add(1)
                        var curarg = 1;
                        var var_d = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func231.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method add(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 268
                            onSelf = true;
                            var call232 = callmethod(this, "objects", [0]);
                            var call233 = callmethod(call232,"push", [1], var_d);
                            lineNumber = 269
                            onSelf = true;
                            var call234 = callmethod(this, "setStateChanged", [0]);
                            return call234
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func231.paramTypes = [];
                    func231.paramTypes.push([type_GraphicObject, "d"]);
                    func231.paramCounts = [
                                           1,
                                           ];
                    func231.variableArities = [
                                               false,
                                               ];
                    obj225.methods["add"] = func231;
                    var func235 = function(argcv) {    // method indexOf(2)
                        var curarg = 1;
                        var var_m = arguments[curarg];
                        curarg++;
                        var var_lst = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func235.paramCounts[0]) // != 2
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method indexOf(2) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 274
                            var call236 = callmethod(var_lst,"indices", [0]);
                            var block237 = Grace_allocObject();
                            block237.methods["apply"] = function() {
                                var args = Array.prototype.slice.call(arguments, 1);
                                return this.real.apply(this.receiver, args);
                            }
                            block237.methods["applyIndirectly"] = function(argcv, a) {
                                return this.real.apply(this.receiver, a._value);
                            }
                            block237.methods["outer"] = function() {
                                return callmethod(this.receiver, 'outer', [0]);
                            }
                            block237.methods["match"] = GraceBlock_match;
                            block237.receiver = this;
                            block237.className = 'block<objectdraw:274>';
                            block237.real = function(
                                                     var_i
                                                     ) {
                                sourceObject = this;
                                lineNumber = 275
                                var idxres239 = var_lst.methods["[]"].call(var_lst, [1], var_i);
                                var opresult241 = callmethod(idxres239, "==", [1], var_m);
                                if (Grace_isTrue(opresult241)) {
                                    throw new ReturnException(var_i, returnTarget);
                                    var if238 = undefined;
                                }
                                return if238;
                            };
                            var call242 = callmethod(Grace_prelude,"for()do", [1, 1], call236, block237);
                            lineNumber = 277
                            var call243 = callmethod(new GraceNum(1),"prefix-", [0]);
                            return call243
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func235.paramTypes = [];
                    func235.paramTypes.push([type_GraphicObject, "m"]);
                    func235.paramTypes.push([]);
                    func235.paramCounts = [
                                           2,
                                           ];
                    func235.variableArities = [
                                               false,
                                               ];
                    obj225.methods["indexOf"] = func235;
                    var func244 = function(argcv) {    // method remove(1)
                        var curarg = 1;
                        var var_m = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func244.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method remove(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 282
                            onSelf = true;
                            var call246 = callmethod(this, "objects", [0]);
                            var call247 = callmethod(call246,"last", [0]);
                            var opresult249 = callmethod(call247, "==", [1], var_m);
                            if (Grace_isTrue(opresult249)) {
                                lineNumber = 283
                                onSelf = true;
                                var call250 = callmethod(this, "objects", [0]);
                                var call251 = callmethod(call250,"pop", [0]);
                                var var_last = call251;
                                lineNumber = 283;
                                if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                             [1], var_last)))
                                    throw new GraceExceptionPacket(TypeErrorObject,
                                                                   new GraceString("expected "
                                                                                   + "initial value of def 'last' to be of type Dynamic"))
                                    var if245 = call251;
                            } else {
                                lineNumber = 285
                                onSelf = true;
                                var call252 = callmethod(this, "objects", [0]);
                                var call253 = callmethod(call252,"pop", [0]);
                                var var_last = call253;
                                lineNumber = 285;
                                if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                             [1], var_last)))
                                    throw new GraceExceptionPacket(TypeErrorObject,
                                                                   new GraceString("expected "
                                                                                   + "initial value of def 'last' to be of type Dynamic"))
                                    lineNumber = 286
                                    onSelf = true;
                                var call254 = callmethod(this, "remove", [1], var_m);
                                lineNumber = 287
                                onSelf = true;
                                var call255 = callmethod(this, "objects", [0]);
                                var call256 = callmethod(call255,"push", [1], var_last);
                                var if245 = call256;
                            }
                            return if245
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func244.paramTypes = [];
                    func244.paramTypes.push([type_GraphicObject, "m"]);
                    func244.paramCounts = [
                                           1,
                                           ];
                    func244.variableArities = [
                                               false,
                                               ];
                    obj225.methods["remove"] = func244;
                    var func257 = function(argcv) {    // method sendToFront(1)
                        var curarg = 1;
                        var var_d = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func257.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method sendToFront(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 293
                            onSelf = true;
                            var call258 = callmethod(this, "remove", [1], var_d);
                            lineNumber = 294
                            onSelf = true;
                            var call259 = callmethod(this, "objects", [0]);
                            var call260 = callmethod(call259,"push", [1], var_d);
                            lineNumber = 295
                            onSelf = true;
                            var call261 = callmethod(this, "setStateChanged", [0]);
                            return call261
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func257.paramCounts = [
                                           1,
                                           ];
                    func257.variableArities = [
                                               false,
                                               ];
                    obj225.methods["sendToFront"] = func257;
                    var func262 = function(argcv) {    // method sendToBack(1)
                        var curarg = 1;
                        var var_d = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func262.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method sendToBack(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 300
                            onSelf = true;
                            var call263 = callmethod(this, "objects", [0]);
                            onSelf = true;
                            var call264 = callmethod(this, "indexOf", [2], var_d, call263);
                            var var_index = call264;
                            lineNumber = 300;
                            if (!Grace_isTrue(callmethod(var_Number, "match",
                                                         [1], var_index)))
                                throw new GraceExceptionPacket(TypeErrorObject,
                                                               new GraceString("expected "
                                                                               + "initial value of var 'index' to be of type Number"))
                                lineNumber = 301
                                var opresult267 = callmethod(var_index, ">", [1], new GraceNum(1));
                            if (Grace_isTrue(opresult267)) {
                                lineNumber = 302
                                var block268 = Grace_allocObject();
                                block268.methods["apply"] = function() {
                                    var args = Array.prototype.slice.call(arguments, 1);
                                    return this.real.apply(this.receiver, args);
                                }
                                block268.methods["applyIndirectly"] = function(argcv, a) {
                                    return this.real.apply(this.receiver, a._value);
                                }
                                block268.methods["outer"] = function() {
                                    return callmethod(this.receiver, 'outer', [0]);
                                }
                                block268.methods["match"] = GraceBlock_match;
                                block268.receiver = this;
                                block268.className = 'block<objectdraw:302>';
                                block268.real = function(
                                ) {
                                    sourceObject = this;
                                    var opresult270 = callmethod(var_index, ">", [1], new GraceNum(1));
                                    return opresult270;
                                };
                                var block271 = Grace_allocObject();
                                block271.methods["apply"] = function() {
                                    var args = Array.prototype.slice.call(arguments, 1);
                                    return this.real.apply(this.receiver, args);
                                }
                                block271.methods["applyIndirectly"] = function(argcv, a) {
                                    return this.real.apply(this.receiver, a._value);
                                }
                                block271.methods["outer"] = function() {
                                    return callmethod(this.receiver, 'outer', [0]);
                                }
                                block271.methods["match"] = GraceBlock_match;
                                block271.receiver = this;
                                block271.className = 'block<objectdraw:302>';
                                block271.real = function(
                                ) {
                                    sourceObject = this;
                                    lineNumber = 303
                                    onSelf = true;
                                    var call272 = callmethod(this, "objects", [0]);
                                    var diff274 = callmethod(var_index, "-", [1], new GraceNum(1));
                                    var idxres275 = call272.methods["[]"].call(call272, [1], diff274);
                                    onSelf = true;
                                    var call276 = callmethod(this, "objects", [0]);
                                    var call277 = callmethod(call276,"[]:=", [2], var_index, idxres275);
                                    lineNumber = 304
                                    var diff279 = callmethod(var_index, "-", [1], new GraceNum(1));
                                    var_index = diff279;
                                    return diff279;
                                };
                                var call280 = callmethod(Grace_prelude,"while()do", [1, 1], block268, block271);
                                lineNumber = 306
                                onSelf = true;
                                var call281 = callmethod(this, "objects", [0]);
                                var call282 = callmethod(call281,"[]:=", [2], new GraceNum(1), var_d);
                                lineNumber = 307
                                onSelf = true;
                                var call283 = callmethod(this, "setStateChanged", [0]);
                                var if265 = call283;
                            }
                            return if265
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func262.paramTypes = [];
                    func262.paramTypes.push([type_GraphicObject, "d"]);
                    func262.paramCounts = [
                                           1,
                                           ];
                    func262.variableArities = [
                                               false,
                                               ];
                    obj225.methods["sendToBack"] = func262;
                    var func284 = function(argcv) {    // method sendForward(1)
                        var curarg = 1;
                        var var_d = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func284.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method sendForward(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 313
                            onSelf = true;
                            var call285 = callmethod(this, "objects", [0]);
                            onSelf = true;
                            var call286 = callmethod(this, "indexOf", [2], var_d, call285);
                            var var_index = call286;
                            lineNumber = 313;
                            if (!Grace_isTrue(callmethod(var_Number, "match",
                                                         [1], var_index)))
                                throw new GraceExceptionPacket(TypeErrorObject,
                                                               new GraceString("expected "
                                                                               + "initial value of def 'index' to be of type Number"))
                                lineNumber = 314
                                onSelf = true;
                            var call288 = callmethod(this, "objects", [0]);
                            var call289 = callmethod(call288,"size", [0]);
                            var opresult291 = callmethod(var_index, "<", [1], call289);
                            if (Grace_isTrue(opresult291)) {
                                lineNumber = 315
                                onSelf = true;
                                var call292 = callmethod(this, "objects", [0]);
                                var opresult294 = callmethod(var_index, "+", [1], new GraceNum(1));
                                var idxres295 = call292.methods["[]"].call(call292, [1], opresult294);
                                onSelf = true;
                                var call296 = callmethod(this, "objects", [0]);
                                var call297 = callmethod(call296,"[]:=", [2], var_index, idxres295);
                                lineNumber = 316
                                var opresult299 = callmethod(var_index, "+", [1], new GraceNum(1));
                                onSelf = true;
                                var call300 = callmethod(this, "objects", [0]);
                                var call301 = callmethod(call300,"[]:=", [2], opresult299, var_d);
                                lineNumber = 317
                                onSelf = true;
                                var call302 = callmethod(this, "setStateChanged", [0]);
                                var if287 = call302;
                            }
                            return if287
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func284.paramTypes = [];
                    func284.paramTypes.push([type_GraphicObject, "d"]);
                    func284.paramCounts = [
                                           1,
                                           ];
                    func284.variableArities = [
                                               false,
                                               ];
                    obj225.methods["sendForward"] = func284;
                    var func303 = function(argcv) {    // method sendBackward(1)
                        var curarg = 1;
                        var var_d = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func303.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method sendBackward(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 323
                            onSelf = true;
                            var call304 = callmethod(this, "objects", [0]);
                            onSelf = true;
                            var call305 = callmethod(this, "indexOf", [2], var_d, call304);
                            var var_index = call305;
                            lineNumber = 323;
                            if (!Grace_isTrue(callmethod(var_Number, "match",
                                                         [1], var_index)))
                                throw new GraceExceptionPacket(TypeErrorObject,
                                                               new GraceString("expected "
                                                                               + "initial value of def 'index' to be of type Number"))
                                lineNumber = 324
                                var opresult308 = callmethod(var_index, ">", [1], new GraceNum(1));
                            if (Grace_isTrue(opresult308)) {
                                lineNumber = 325
                                onSelf = true;
                                var call309 = callmethod(this, "objects", [0]);
                                var diff311 = callmethod(var_index, "-", [1], new GraceNum(1));
                                var idxres312 = call309.methods["[]"].call(call309, [1], diff311);
                                onSelf = true;
                                var call313 = callmethod(this, "objects", [0]);
                                var call314 = callmethod(call313,"[]:=", [2], var_index, idxres312);
                                lineNumber = 326
                                var diff316 = callmethod(var_index, "-", [1], new GraceNum(1));
                                onSelf = true;
                                var call317 = callmethod(this, "objects", [0]);
                                var call318 = callmethod(call317,"[]:=", [2], diff316, var_d);
                                lineNumber = 327
                                onSelf = true;
                                var call319 = callmethod(this, "setStateChanged", [0]);
                                var if306 = call319;
                            }
                            return if306
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func303.paramTypes = [];
                    func303.paramTypes.push([type_GraphicObject, "d"]);
                    func303.paramCounts = [
                                           1,
                                           ];
                    func303.variableArities = [
                                               false,
                                               ];
                    obj225.methods["sendBackward"] = func303;
                    var func320 = function(argcv) {    // method setStateChanged
                        var curarg = 1;
                        if (argcv[0] !=  func320.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method setStateChanged is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 334
                            onSelf = true;
                            var call321 = callmethod(this, "paintAll", [0]);
                            return call321
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func320.paramCounts = [
                                           0,
                                           ];
                    func320.variableArities = [
                                               false,
                                               ];
                    obj225.methods["setStateChanged"] = func320;
                    var func322 = function(argcv) {    // method paintAll
                        var curarg = 1;
                        if (argcv[0] !=  func322.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method paintAll is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 339
                            onSelf = true;
                            var call323 = callmethod(this, "drawingArea", [0]);
                            var call324 = callmethod(call323,"queue_draw", [0]);
                            return call324
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func322.paramCounts = [
                                           0,
                                           ];
                    func322.variableArities = [
                                               false,
                                               ];
                    obj225.methods["paintAll"] = func322;
                    var func325 = function(argcv) {    // method printObjects
                        var curarg = 1;
                        if (argcv[0] !=  func325.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method printObjects is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 344
                            onSelf = true;
                            var call326 = callmethod(this, "objects", [0]);
                            var block327 = Grace_allocObject();
                            block327.methods["apply"] = function() {
                                var args = Array.prototype.slice.call(arguments, 1);
                                return this.real.apply(this.receiver, args);
                            }
                            block327.methods["applyIndirectly"] = function(argcv, a) {
                                return this.real.apply(this.receiver, a._value);
                            }
                            block327.methods["outer"] = function() {
                                return callmethod(this.receiver, 'outer', [0]);
                            }
                            block327.methods["match"] = GraceBlock_match;
                            block327.receiver = this;
                            block327.className = 'block<objectdraw:344>';
                            block327.real = function(
                                                     var_obj
                                                     ) {
                                sourceObject = this;
                                lineNumber = 345
                                var call328 = Grace_print(var_obj);
                                lineNumber = 346
                                var string329 = new GraceString(" ");
                                var call330 = Grace_print(string329);
                                return call330;
                            };
                            var call331 = callmethod(Grace_prelude,"for()do", [1, 1], call326, block327);
                            return call331
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func325.paramCounts = [
                                           0,
                                           ];
                    func325.variableArities = [
                                               false,
                                               ];
                    obj225.methods["printObjects"] = func325;
                    var func332 = function(argcv) {    // method asString
                        var curarg = 1;
                        if (argcv[0] !=  func332.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method asString is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 352
                            var string333 = new GraceString("canvas: with ");
                            lineNumber = 352
                            onSelf = true;
                            var call334 = callmethod(this, "objects", [0]);
                            var call335 = callmethod(call334,"size", [0]);
                            var opresult337 = callmethod(string333, "++", [1], call335);
                            var string338 = new GraceString(" objects");
                            var opresult340 = callmethod(opresult337, "++", [1], string338);
                            return opresult340
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func332.paramCounts = [
                                           0,
                                           ];
                    func332.variableArities = [
                                               false,
                                               ];
                    obj225.methods["asString"] = func332;
                    var func341 = function(argcv) {    // method doSetUp(2)
                        var curarg = 1;
                        var var_graphicApp = arguments[curarg];
                        curarg++;
                        var var_window = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func341.paramCounts[0]) // != 2
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method doSetUp(2) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 363
                            var string342 = new GraceString("motion-notify-event");
                            var block343 = Grace_allocObject();
                            block343.methods["apply"] = function() {
                                var args = Array.prototype.slice.call(arguments, 1);
                                return this.real.apply(this.receiver, args);
                            }
                            block343.methods["applyIndirectly"] = function(argcv, a) {
                                return this.real.apply(this.receiver, a._value);
                            }
                            block343.methods["outer"] = function() {
                                return callmethod(this.receiver, 'outer', [0]);
                            }
                            block343.methods["match"] = GraceBlock_match;
                            block343.receiver = this;
                            block343.className = 'block<objectdraw:363>';
                            block343.real = function(
                                                     var_evt
                                                     ) {
                                sourceObject = this;
                                lineNumber = 364
                                onSelf = true;
                                var call345 = callmethod(this, "buttonPressed", [0]);
                                if (Grace_isTrue(call345)) {
                                    lineNumber = 365
                                    var call346 = callmethod(var_evt,"x", [0]);
                                    lineNumber = 365
                                    var call347 = callmethod(var_evt,"y", [0]);
                                    var call348 = callmethod(var_aLocation,"at", [2], call346, call347);
                                    var call349 = callmethod(var_graphicApp,"onMouseDrag", [1], call348);
                                    var if344 = call349;
                                } else {
                                    lineNumber = 367
                                    var call350 = callmethod(var_evt,"x", [0]);
                                    lineNumber = 367
                                    var call351 = callmethod(var_evt,"y", [0]);
                                    var call352 = callmethod(var_aLocation,"at", [2], call350, call351);
                                    var call353 = callmethod(var_graphicApp,"onMouseMove", [1], call352);
                                    var if344 = call353;
                                }
                                lineNumber = 369
                                var bool354 = new GraceBoolean(false)
                                onSelf = true;
                                var call355 = callmethod(this, "clickOK:=", [1], bool354);
                                return call355;
                            };
                            lineNumber = 363
                            onSelf = true;
                            var call356 = callmethod(this, "drawingArea", [0]);
                            var call357 = callmethod(call356,"on()do", [1, 1], string342, block343);
                            lineNumber = 372
                            var string358 = new GraceString("button-press-event");
                            var block359 = Grace_allocObject();
                            block359.methods["apply"] = function() {
                                var args = Array.prototype.slice.call(arguments, 1);
                                return this.real.apply(this.receiver, args);
                            }
                            block359.methods["applyIndirectly"] = function(argcv, a) {
                                return this.real.apply(this.receiver, a._value);
                            }
                            block359.methods["outer"] = function() {
                                return callmethod(this.receiver, 'outer', [0]);
                            }
                            block359.methods["match"] = GraceBlock_match;
                            block359.receiver = this;
                            block359.className = 'block<objectdraw:372>';
                            block359.real = function(
                                                     var_evt
                                                     ) {
                                sourceObject = this;
                                lineNumber = 373
                                var call360 = callmethod(var_sys,"elapsed", [0]);
                                onSelf = true;
                                var call361 = callmethod(this, "buttonPressTime:=", [1], call360);
                                lineNumber = 374
                                var call362 = callmethod(var_evt,"x", [0]);
                                lineNumber = 374
                                var call363 = callmethod(var_evt,"y", [0]);
                                var call364 = callmethod(var_aLocation,"at", [2], call362, call363);
                                var call365 = callmethod(var_graphicApp,"onMousePress", [1], call364);
                                lineNumber = 375
                                var bool366 = new GraceBoolean(true)
                                onSelf = true;
                                var call367 = callmethod(this, "buttonPressed:=", [1], bool366);
                                lineNumber = 376
                                var bool368 = new GraceBoolean(true)
                                onSelf = true;
                                var call369 = callmethod(this, "clickOK:=", [1], bool368);
                                return call369;
                            };
                            lineNumber = 372
                            onSelf = true;
                            var call370 = callmethod(this, "drawingArea", [0]);
                            var call371 = callmethod(call370,"on()do", [1, 1], string358, block359);
                            lineNumber = 381
                            var string372 = new GraceString("button-release-event");
                            var block373 = Grace_allocObject();
                            block373.methods["apply"] = function() {
                                var args = Array.prototype.slice.call(arguments, 1);
                                return this.real.apply(this.receiver, args);
                            }
                            block373.methods["applyIndirectly"] = function(argcv, a) {
                                return this.real.apply(this.receiver, a._value);
                            }
                            block373.methods["outer"] = function() {
                                return callmethod(this.receiver, 'outer', [0]);
                            }
                            block373.methods["match"] = GraceBlock_match;
                            block373.receiver = this;
                            block373.className = 'block<objectdraw:381>';
                            block373.real = function(
                                                     var_evt
                                                     ) {
                                sourceObject = this;
                                lineNumber = 382
                                var call374 = callmethod(var_evt,"x", [0]);
                                lineNumber = 382
                                var call375 = callmethod(var_evt,"y", [0]);
                                var call376 = callmethod(var_aLocation,"at", [2], call374, call375);
                                var call377 = callmethod(var_graphicApp,"onMouseRelease", [1], call376);
                                lineNumber = 383
                                var call379 = callmethod(var_sys,"elapsed", [0]);
                                onSelf = true;
                                var call380 = callmethod(this, "buttonPressTime", [0]);
                                var diff382 = callmethod(call379, "-", [1], call380);
                                onSelf = true;
                                var call383 = callmethod(this, "maxClickTime", [0]);
                                var opresult385 = callmethod(diff382, "<", [1], call383);
                                onSelf = true;
                                var call386 = callmethod(this, "clickOK", [0]);
                                var opresult388 = callmethod(opresult385, "&&", [1], call386);
                                if (Grace_isTrue(opresult388)) {
                                    lineNumber = 384
                                    var call389 = callmethod(var_evt,"x", [0]);
                                    lineNumber = 384
                                    var call390 = callmethod(var_evt,"y", [0]);
                                    var call391 = callmethod(var_aLocation,"at", [2], call389, call390);
                                    var call392 = callmethod(var_graphicApp,"onMouseClick", [1], call391);
                                    var if378 = call392;
                                }
                                lineNumber = 386
                                var bool393 = new GraceBoolean(false)
                                onSelf = true;
                                var call394 = callmethod(this, "buttonPressed:=", [1], bool393);
                                lineNumber = 387
                                var bool395 = new GraceBoolean(false)
                                onSelf = true;
                                var call396 = callmethod(this, "clickOK:=", [1], bool395);
                                return call396;
                            };
                            lineNumber = 381
                            onSelf = true;
                            var call397 = callmethod(this, "drawingArea", [0]);
                            var call398 = callmethod(call397,"on()do", [1, 1], string372, block373);
                            lineNumber = 390
                            var string399 = new GraceString("enter-notify-event");
                            var block400 = Grace_allocObject();
                            block400.methods["apply"] = function() {
                                var args = Array.prototype.slice.call(arguments, 1);
                                return this.real.apply(this.receiver, args);
                            }
                            block400.methods["applyIndirectly"] = function(argcv, a) {
                                return this.real.apply(this.receiver, a._value);
                            }
                            block400.methods["outer"] = function() {
                                return callmethod(this.receiver, 'outer', [0]);
                            }
                            block400.methods["match"] = GraceBlock_match;
                            block400.receiver = this;
                            block400.className = 'block<objectdraw:390>';
                            block400.real = function(
                                                     var_evt
                                                     ) {
                                sourceObject = this;
                                lineNumber = 391
                                var call401 = callmethod(var_evt,"x", [0]);
                                lineNumber = 391
                                var call402 = callmethod(var_evt,"y", [0]);
                                var call403 = callmethod(var_aLocation,"at", [2], call401, call402);
                                var call404 = callmethod(var_graphicApp,"onMouseEnter", [1], call403);
                                lineNumber = 392
                                var bool405 = new GraceBoolean(false)
                                onSelf = true;
                                var call406 = callmethod(this, "clickOK:=", [1], bool405);
                                return call406;
                            };
                            lineNumber = 390
                            onSelf = true;
                            var call407 = callmethod(this, "drawingArea", [0]);
                            var call408 = callmethod(call407,"on()do", [1, 1], string399, block400);
                            lineNumber = 395
                            var string409 = new GraceString("leave-notify-event");
                            var block410 = Grace_allocObject();
                            block410.methods["apply"] = function() {
                                var args = Array.prototype.slice.call(arguments, 1);
                                return this.real.apply(this.receiver, args);
                            }
                            block410.methods["applyIndirectly"] = function(argcv, a) {
                                return this.real.apply(this.receiver, a._value);
                            }
                            block410.methods["outer"] = function() {
                                return callmethod(this.receiver, 'outer', [0]);
                            }
                            block410.methods["match"] = GraceBlock_match;
                            block410.receiver = this;
                            block410.className = 'block<objectdraw:395>';
                            block410.real = function(
                                                     var_evt
                                                     ) {
                                sourceObject = this;
                                lineNumber = 396
                                var call411 = callmethod(var_evt,"x", [0]);
                                lineNumber = 396
                                var call412 = callmethod(var_evt,"y", [0]);
                                var call413 = callmethod(var_aLocation,"at", [2], call411, call412);
                                var call414 = callmethod(var_graphicApp,"onMouseExit", [1], call413);
                                lineNumber = 397
                                var bool415 = new GraceBoolean(false)
                                onSelf = true;
                                var call416 = callmethod(this, "clickOK:=", [1], bool415);
                                return call416;
                            };
                            lineNumber = 395
                            onSelf = true;
                            var call417 = callmethod(this, "drawingArea", [0]);
                            var call418 = callmethod(call417,"on()do", [1, 1], string409, block410);
                            return call418
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func341.paramTypes = [];
                    func341.paramTypes.push([type_GraphicApplication, "graphicApp"]);
                    func341.paramTypes.push([]);
                    func341.paramCounts = [
                                           2,
                                           ];
                    func341.variableArities = [
                                               false,
                                               ];
                    obj225.methods["doSetUp"] = func341;
                    sourceObject = obj225;
                    lineNumber = 234
                    obj225.data["width"] = var_width__39__;
                    var reader_objectdraw_width419 = function() {
                        return this.data["width"];
                    }
                    obj225.methods["width"] = reader_objectdraw_width419;
                    obj225.data["width"] = var_width__39__;
                    var writer_objectdraw_width419 = function(argcv, o) {
                        this.data["width"] = o;
                    }
                    obj225.methods["width:="] = writer_objectdraw_width419;
                    writer_objectdraw_width419.confidential = true;
                    lineNumber = 234;
                    if (!Grace_isTrue(callmethod(var_Number, "match",
                                                 [1], var_width__39__)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'width' to be of type Number"))
                        obj225.mutable = true;
                    sourceObject = obj225;
                    lineNumber = 235
                    obj225.data["height"] = var_height__39__;
                    var reader_objectdraw_height420 = function() {
                        return this.data["height"];
                    }
                    obj225.methods["height"] = reader_objectdraw_height420;
                    obj225.data["height"] = var_height__39__;
                    var writer_objectdraw_height420 = function(argcv, o) {
                        this.data["height"] = o;
                    }
                    obj225.methods["height:="] = writer_objectdraw_height420;
                    writer_objectdraw_height420.confidential = true;
                    lineNumber = 235;
                    if (!Grace_isTrue(callmethod(var_Number, "match",
                                                 [1], var_height__39__)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'height' to be of type Number"))
                        obj225.mutable = true;
                    sourceObject = obj225;
                    lineNumber = 238
                    var call421 = callmethod(var_collections,"list", [0]);
                    var call422 = callmethod(call421,"new", [0]);
                    obj225.data["objects"] = call422;
                    var reader_objectdraw_objects423 = function() {
                        return this.data["objects"];
                    }
                    obj225.methods["objects"] = reader_objectdraw_objects423;
                    obj225.data["objects"] = call422;
                    var writer_objectdraw_objects423 = function(argcv, o) {
                        this.data["objects"] = o;
                    }
                    obj225.methods["objects:="] = writer_objectdraw_objects423;
                    reader_objectdraw_objects423.confidential = true;
                    writer_objectdraw_objects423.confidential = true;
                    lineNumber = 238;
                    if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                 [1], call422)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'objects' to be of type Dynamic"))
                        obj225.mutable = true;
                    sourceObject = obj225;
                    lineNumber = 241
                    var call424 = callmethod(var_gtk,"drawing_area", [0]);
                    obj225.data["drawingArea"] = call424;
                    var reader_objectdraw_drawingArea425 = function() {
                        return this.data["drawingArea"];
                    }
                    reader_objectdraw_drawingArea425.def = true;
                    obj225.methods["drawingArea"] = reader_objectdraw_drawingArea425;
                    lineNumber = 241;
                    if (!Grace_isTrue(callmethod(var_Widget, "match",
                                                 [1], call424)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of def 'drawingArea' to be of type Widget"))
                        sourceObject = obj225;
                    lineNumber = 244
                    onSelf = true;
                    var call426 = callmethod(this, "drawingArea", [0]);
                    var call427 = callmethod(call426,"set_size_request", [2], var_width__39__, var_height__39__);
                    sourceObject = obj225;
                    lineNumber = 247
                    var call428 = callmethod(var_gdk,"GDK_BUTTON_PRESS_MASK", [0]);
                    onSelf = true;
                    var call429 = callmethod(this, "drawingArea", [0]);
                    var call430 = callmethod(call429,"add_events", [1], call428);
                    sourceObject = obj225;
                    lineNumber = 248
                    var call431 = callmethod(var_gdk,"GDK_BUTTON_RELEASE_MASK", [0]);
                    onSelf = true;
                    var call432 = callmethod(this, "drawingArea", [0]);
                    var call433 = callmethod(call432,"add_events", [1], call431);
                    sourceObject = obj225;
                    lineNumber = 249
                    var call434 = callmethod(var_gdk,"GDK_POINTER_MOTION_MASK", [0]);
                    onSelf = true;
                    var call435 = callmethod(this, "drawingArea", [0]);
                    var call436 = callmethod(call435,"add_events", [1], call434);
                    sourceObject = obj225;
                    lineNumber = 250
                    var call437 = callmethod(var_gdk,"GDK_ENTER_NOTIFY_MASK", [0]);
                    onSelf = true;
                    var call438 = callmethod(this, "drawingArea", [0]);
                    var call439 = callmethod(call438,"add_events", [1], call437);
                    sourceObject = obj225;
                    lineNumber = 251
                    var call440 = callmethod(var_gdk,"GDK_LEAVE_NOTIFY_MASK", [0]);
                    onSelf = true;
                    var call441 = callmethod(this, "drawingArea", [0]);
                    var call442 = callmethod(call441,"add_events", [1], call440);
                    sourceObject = obj225;
                    lineNumber = 255
                    var string443 = new GraceString("draw");
                    var block444 = Grace_allocObject();
                    block444.methods["apply"] = function() {
                        var args = Array.prototype.slice.call(arguments, 1);
                        return this.real.apply(this.receiver, args);
                    }
                    block444.methods["applyIndirectly"] = function(argcv, a) {
                        return this.real.apply(this.receiver, a._value);
                    }
                    block444.methods["outer"] = function() {
                        return callmethod(this.receiver, 'outer', [0]);
                    }
                    block444.methods["match"] = GraceBlock_match;
                    block444.receiver = this;
                    block444.className = 'block<objectdraw:255>';
                    block444.real = function(
                                             var_ctx
                                             ) {
                        sourceObject = this;
                        lineNumber = 256
                        onSelf = true;
                        var call445 = callmethod(this, "objects", [0]);
                        var block446 = Grace_allocObject();
                        block446.methods["apply"] = function() {
                            var args = Array.prototype.slice.call(arguments, 1);
                            return this.real.apply(this.receiver, args);
                        }
                        block446.methods["applyIndirectly"] = function(argcv, a) {
                            return this.real.apply(this.receiver, a._value);
                        }
                        block446.methods["outer"] = function() {
                            return callmethod(this.receiver, 'outer', [0]);
                        }
                        block446.methods["match"] = GraceBlock_match;
                        block446.receiver = this;
                        block446.className = 'block<objectdraw:256>';
                        block446.real = function(
                                                 var_obj
                                                 ) {
                            sourceObject = this;
                            lineNumber = 257
                            var call448 = callmethod(var_obj,"isVisible", [0]);
                            if (Grace_isTrue(call448)) {
                                var call449 = callmethod(var_obj,"draw", [1], var_ctx);
                                var if447 = call449;
                            }
                            return if447;
                        };
                        var call450 = callmethod(Grace_prelude,"for()do", [1, 1], call445, block446);
                        return call450;
                    };
                    lineNumber = 255
                    onSelf = true;
                    var call451 = callmethod(this, "drawingArea", [0]);
                    var call452 = callmethod(call451,"on()do", [1, 1], string443, block444);
                    sourceObject = obj225;
                    sourceObject = obj225;
                    sourceObject = obj225;
                    sourceObject = obj225;
                    sourceObject = obj225;
                    sourceObject = obj225;
                    sourceObject = obj225;
                    sourceObject = obj225;
                    sourceObject = obj225;
                    sourceObject = obj225;
                    sourceObject = obj225;
                    sourceObject = obj225;
                    sourceObject = obj225;
                    lineNumber = 356
                    var bool453 = new GraceBoolean(false)
                    obj225.data["buttonPressed"] = bool453;
                    var reader_objectdraw_buttonPressed454 = function() {
                        return this.data["buttonPressed"];
                    }
                    obj225.methods["buttonPressed"] = reader_objectdraw_buttonPressed454;
                    obj225.data["buttonPressed"] = bool453;
                    var writer_objectdraw_buttonPressed454 = function(argcv, o) {
                        this.data["buttonPressed"] = o;
                    }
                    obj225.methods["buttonPressed:="] = writer_objectdraw_buttonPressed454;
                    reader_objectdraw_buttonPressed454.confidential = true;
                    writer_objectdraw_buttonPressed454.confidential = true;
                    lineNumber = 356;
                    if (!Grace_isTrue(callmethod(var_Boolean, "match",
                                                 [1], bool453)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'buttonPressed' to be of type Boolean"))
                        obj225.mutable = true;
                    sourceObject = obj225;
                    lineNumber = 357
                    obj225.data["buttonPressTime"] = new GraceNum(0);
                    var reader_objectdraw_buttonPressTime455 = function() {
                        return this.data["buttonPressTime"];
                    }
                    obj225.methods["buttonPressTime"] = reader_objectdraw_buttonPressTime455;
                    obj225.data["buttonPressTime"] = new GraceNum(0);
                    var writer_objectdraw_buttonPressTime455 = function(argcv, o) {
                        this.data["buttonPressTime"] = o;
                    }
                    obj225.methods["buttonPressTime:="] = writer_objectdraw_buttonPressTime455;
                    reader_objectdraw_buttonPressTime455.confidential = true;
                    writer_objectdraw_buttonPressTime455.confidential = true;
                    lineNumber = 357;
                    if (!Grace_isTrue(callmethod(var_Number, "match",
                                                 [1], new GraceNum(0))))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'buttonPressTime' to be of type Number"))
                        obj225.mutable = true;
                    sourceObject = obj225;
                    lineNumber = 358
                    var bool456 = new GraceBoolean(false)
                    obj225.data["clickOK"] = bool456;
                    var reader_objectdraw_clickOK457 = function() {
                        return this.data["clickOK"];
                    }
                    obj225.methods["clickOK"] = reader_objectdraw_clickOK457;
                    obj225.data["clickOK"] = bool456;
                    var writer_objectdraw_clickOK457 = function(argcv, o) {
                        this.data["clickOK"] = o;
                    }
                    obj225.methods["clickOK:="] = writer_objectdraw_clickOK457;
                    reader_objectdraw_clickOK457.confidential = true;
                    writer_objectdraw_clickOK457.confidential = true;
                    lineNumber = 358;
                    if (!Grace_isTrue(callmethod(var_Boolean, "match",
                                                 [1], bool456)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'clickOK' to be of type Boolean"))
                        obj225.mutable = true;
                    sourceObject = obj225;
                    lineNumber = 359
                    obj225.data["maxClickTime"] = new GraceNum(0.2);
                    var reader_objectdraw_maxClickTime458 = function() {
                        return this.data["maxClickTime"];
                    }
                    reader_objectdraw_maxClickTime458.def = true;
                    reader_objectdraw_maxClickTime458.confidential = true;
                    obj225.methods["maxClickTime"] = reader_objectdraw_maxClickTime458;
                    lineNumber = 359;
                    if (!Grace_isTrue(callmethod(var_Number, "match",
                                                 [1], new GraceNum(0.2))))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of def 'maxClickTime' to be of type Number"))
                        sourceObject = obj225;
                    superDepth = origSuperDepth;
                }
                obj_init_225.apply(obj225, []);
                return obj225
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        func224.paramTypes = [];
        func224.paramTypes.push([type_Number, "width'"]);
        func224.paramTypes.push([type_Number, "height'"]);
        func224.paramCounts = [
                               2,
                               ];
        func224.variableArities = [
                                   false,
                                   ];
        obj222.methods["size"] = func224;
        var func459 = function(argcv) {
            var curarg = 1;
            var var_width__39__ = arguments[curarg];
            curarg++;
            var var_height__39__ = arguments[curarg];
            curarg++;
            var inheritingObject = arguments[curarg++];
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                var obj460 = Grace_allocObject();
                var inho460 = inheritingObject;
                while (inho460.superobj) inho460 = inho460.superobj;
                inho460.superobj = obj460;
                obj460.data = inheritingObject.data;
                obj460.outer = this;
                var reader_objectdraw_outer461 = function() {
                    return this.outer;
                }
                obj460.methods["outer"] = reader_objectdraw_outer461;
                function obj_init_460() {
                    var origSuperDepth = superDepth;
                    superDepth = obj460;
                    var func462 = function(argcv) {    // method clear
                        var curarg = 1;
                        if (argcv[0] !=  func462.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method clear is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 263
                            var call463 = callmethod(var_collections,"list", [0]);
                            var call464 = callmethod(call463,"new", [0]);
                            onSelf = true;
                            var call465 = callmethod(this, "objects:=", [1], call464);
                            return call465
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func462.paramCounts = [
                                           0,
                                           ];
                    func462.variableArities = [
                                               false,
                                               ];
                    obj460.methods["clear"] = func462;
                    var func466 = function(argcv) {    // method add(1)
                        var curarg = 1;
                        var var_d = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func466.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method add(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 268
                            onSelf = true;
                            var call467 = callmethod(this, "objects", [0]);
                            var call468 = callmethod(call467,"push", [1], var_d);
                            lineNumber = 269
                            onSelf = true;
                            var call469 = callmethod(this, "setStateChanged", [0]);
                            return call469
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func466.paramTypes = [];
                    func466.paramTypes.push([type_GraphicObject, "d"]);
                    func466.paramCounts = [
                                           1,
                                           ];
                    func466.variableArities = [
                                               false,
                                               ];
                    obj460.methods["add"] = func466;
                    var func470 = function(argcv) {    // method indexOf(2)
                        var curarg = 1;
                        var var_m = arguments[curarg];
                        curarg++;
                        var var_lst = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func470.paramCounts[0]) // != 2
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method indexOf(2) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 274
                            var call471 = callmethod(var_lst,"indices", [0]);
                            var block472 = Grace_allocObject();
                            block472.methods["apply"] = function() {
                                var args = Array.prototype.slice.call(arguments, 1);
                                return this.real.apply(this.receiver, args);
                            }
                            block472.methods["applyIndirectly"] = function(argcv, a) {
                                return this.real.apply(this.receiver, a._value);
                            }
                            block472.methods["outer"] = function() {
                                return callmethod(this.receiver, 'outer', [0]);
                            }
                            block472.methods["match"] = GraceBlock_match;
                            block472.receiver = this;
                            block472.className = 'block<objectdraw:274>';
                            block472.real = function(
                                                     var_i
                                                     ) {
                                sourceObject = this;
                                lineNumber = 275
                                var idxres474 = var_lst.methods["[]"].call(var_lst, [1], var_i);
                                var opresult476 = callmethod(idxres474, "==", [1], var_m);
                                if (Grace_isTrue(opresult476)) {
                                    throw new ReturnException(var_i, returnTarget);
                                    var if473 = undefined;
                                }
                                return if473;
                            };
                            var call477 = callmethod(Grace_prelude,"for()do", [1, 1], call471, block472);
                            lineNumber = 277
                            var call478 = callmethod(new GraceNum(1),"prefix-", [0]);
                            return call478
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func470.paramTypes = [];
                    func470.paramTypes.push([type_GraphicObject, "m"]);
                    func470.paramTypes.push([]);
                    func470.paramCounts = [
                                           2,
                                           ];
                    func470.variableArities = [
                                               false,
                                               ];
                    obj460.methods["indexOf"] = func470;
                    var func479 = function(argcv) {    // method remove(1)
                        var curarg = 1;
                        var var_m = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func479.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method remove(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 282
                            onSelf = true;
                            var call481 = callmethod(this, "objects", [0]);
                            var call482 = callmethod(call481,"last", [0]);
                            var opresult484 = callmethod(call482, "==", [1], var_m);
                            if (Grace_isTrue(opresult484)) {
                                lineNumber = 283
                                onSelf = true;
                                var call485 = callmethod(this, "objects", [0]);
                                var call486 = callmethod(call485,"pop", [0]);
                                var var_last = call486;
                                lineNumber = 283;
                                if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                             [1], var_last)))
                                    throw new GraceExceptionPacket(TypeErrorObject,
                                                                   new GraceString("expected "
                                                                                   + "initial value of def 'last' to be of type Dynamic"))
                                    var if480 = call486;
                            } else {
                                lineNumber = 285
                                onSelf = true;
                                var call487 = callmethod(this, "objects", [0]);
                                var call488 = callmethod(call487,"pop", [0]);
                                var var_last = call488;
                                lineNumber = 285;
                                if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                             [1], var_last)))
                                    throw new GraceExceptionPacket(TypeErrorObject,
                                                                   new GraceString("expected "
                                                                                   + "initial value of def 'last' to be of type Dynamic"))
                                    lineNumber = 286
                                    onSelf = true;
                                var call489 = callmethod(this, "remove", [1], var_m);
                                lineNumber = 287
                                onSelf = true;
                                var call490 = callmethod(this, "objects", [0]);
                                var call491 = callmethod(call490,"push", [1], var_last);
                                var if480 = call491;
                            }
                            return if480
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func479.paramTypes = [];
                    func479.paramTypes.push([type_GraphicObject, "m"]);
                    func479.paramCounts = [
                                           1,
                                           ];
                    func479.variableArities = [
                                               false,
                                               ];
                    obj460.methods["remove"] = func479;
                    var func492 = function(argcv) {    // method sendToFront(1)
                        var curarg = 1;
                        var var_d = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func492.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method sendToFront(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 293
                            onSelf = true;
                            var call493 = callmethod(this, "remove", [1], var_d);
                            lineNumber = 294
                            onSelf = true;
                            var call494 = callmethod(this, "objects", [0]);
                            var call495 = callmethod(call494,"push", [1], var_d);
                            lineNumber = 295
                            onSelf = true;
                            var call496 = callmethod(this, "setStateChanged", [0]);
                            return call496
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func492.paramCounts = [
                                           1,
                                           ];
                    func492.variableArities = [
                                               false,
                                               ];
                    obj460.methods["sendToFront"] = func492;
                    var func497 = function(argcv) {    // method sendToBack(1)
                        var curarg = 1;
                        var var_d = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func497.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method sendToBack(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 300
                            onSelf = true;
                            var call498 = callmethod(this, "objects", [0]);
                            onSelf = true;
                            var call499 = callmethod(this, "indexOf", [2], var_d, call498);
                            var var_index = call499;
                            lineNumber = 300;
                            if (!Grace_isTrue(callmethod(var_Number, "match",
                                                         [1], var_index)))
                                throw new GraceExceptionPacket(TypeErrorObject,
                                                               new GraceString("expected "
                                                                               + "initial value of var 'index' to be of type Number"))
                                lineNumber = 301
                                var opresult502 = callmethod(var_index, ">", [1], new GraceNum(1));
                            if (Grace_isTrue(opresult502)) {
                                lineNumber = 302
                                var block503 = Grace_allocObject();
                                block503.methods["apply"] = function() {
                                    var args = Array.prototype.slice.call(arguments, 1);
                                    return this.real.apply(this.receiver, args);
                                }
                                block503.methods["applyIndirectly"] = function(argcv, a) {
                                    return this.real.apply(this.receiver, a._value);
                                }
                                block503.methods["outer"] = function() {
                                    return callmethod(this.receiver, 'outer', [0]);
                                }
                                block503.methods["match"] = GraceBlock_match;
                                block503.receiver = this;
                                block503.className = 'block<objectdraw:302>';
                                block503.real = function(
                                ) {
                                    sourceObject = this;
                                    var opresult505 = callmethod(var_index, ">", [1], new GraceNum(1));
                                    return opresult505;
                                };
                                var block506 = Grace_allocObject();
                                block506.methods["apply"] = function() {
                                    var args = Array.prototype.slice.call(arguments, 1);
                                    return this.real.apply(this.receiver, args);
                                }
                                block506.methods["applyIndirectly"] = function(argcv, a) {
                                    return this.real.apply(this.receiver, a._value);
                                }
                                block506.methods["outer"] = function() {
                                    return callmethod(this.receiver, 'outer', [0]);
                                }
                                block506.methods["match"] = GraceBlock_match;
                                block506.receiver = this;
                                block506.className = 'block<objectdraw:302>';
                                block506.real = function(
                                ) {
                                    sourceObject = this;
                                    lineNumber = 303
                                    onSelf = true;
                                    var call507 = callmethod(this, "objects", [0]);
                                    var diff509 = callmethod(var_index, "-", [1], new GraceNum(1));
                                    var idxres510 = call507.methods["[]"].call(call507, [1], diff509);
                                    onSelf = true;
                                    var call511 = callmethod(this, "objects", [0]);
                                    var call512 = callmethod(call511,"[]:=", [2], var_index, idxres510);
                                    lineNumber = 304
                                    var diff514 = callmethod(var_index, "-", [1], new GraceNum(1));
                                    var_index = diff514;
                                    return diff514;
                                };
                                var call515 = callmethod(Grace_prelude,"while()do", [1, 1], block503, block506);
                                lineNumber = 306
                                onSelf = true;
                                var call516 = callmethod(this, "objects", [0]);
                                var call517 = callmethod(call516,"[]:=", [2], new GraceNum(1), var_d);
                                lineNumber = 307
                                onSelf = true;
                                var call518 = callmethod(this, "setStateChanged", [0]);
                                var if500 = call518;
                            }
                            return if500
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func497.paramTypes = [];
                    func497.paramTypes.push([type_GraphicObject, "d"]);
                    func497.paramCounts = [
                                           1,
                                           ];
                    func497.variableArities = [
                                               false,
                                               ];
                    obj460.methods["sendToBack"] = func497;
                    var func519 = function(argcv) {    // method sendForward(1)
                        var curarg = 1;
                        var var_d = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func519.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method sendForward(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 313
                            onSelf = true;
                            var call520 = callmethod(this, "objects", [0]);
                            onSelf = true;
                            var call521 = callmethod(this, "indexOf", [2], var_d, call520);
                            var var_index = call521;
                            lineNumber = 313;
                            if (!Grace_isTrue(callmethod(var_Number, "match",
                                                         [1], var_index)))
                                throw new GraceExceptionPacket(TypeErrorObject,
                                                               new GraceString("expected "
                                                                               + "initial value of def 'index' to be of type Number"))
                                lineNumber = 314
                                onSelf = true;
                            var call523 = callmethod(this, "objects", [0]);
                            var call524 = callmethod(call523,"size", [0]);
                            var opresult526 = callmethod(var_index, "<", [1], call524);
                            if (Grace_isTrue(opresult526)) {
                                lineNumber = 315
                                onSelf = true;
                                var call527 = callmethod(this, "objects", [0]);
                                var opresult529 = callmethod(var_index, "+", [1], new GraceNum(1));
                                var idxres530 = call527.methods["[]"].call(call527, [1], opresult529);
                                onSelf = true;
                                var call531 = callmethod(this, "objects", [0]);
                                var call532 = callmethod(call531,"[]:=", [2], var_index, idxres530);
                                lineNumber = 316
                                var opresult534 = callmethod(var_index, "+", [1], new GraceNum(1));
                                onSelf = true;
                                var call535 = callmethod(this, "objects", [0]);
                                var call536 = callmethod(call535,"[]:=", [2], opresult534, var_d);
                                lineNumber = 317
                                onSelf = true;
                                var call537 = callmethod(this, "setStateChanged", [0]);
                                var if522 = call537;
                            }
                            return if522
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func519.paramTypes = [];
                    func519.paramTypes.push([type_GraphicObject, "d"]);
                    func519.paramCounts = [
                                           1,
                                           ];
                    func519.variableArities = [
                                               false,
                                               ];
                    obj460.methods["sendForward"] = func519;
                    var func538 = function(argcv) {    // method sendBackward(1)
                        var curarg = 1;
                        var var_d = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func538.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method sendBackward(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 323
                            onSelf = true;
                            var call539 = callmethod(this, "objects", [0]);
                            onSelf = true;
                            var call540 = callmethod(this, "indexOf", [2], var_d, call539);
                            var var_index = call540;
                            lineNumber = 323;
                            if (!Grace_isTrue(callmethod(var_Number, "match",
                                                         [1], var_index)))
                                throw new GraceExceptionPacket(TypeErrorObject,
                                                               new GraceString("expected "
                                                                               + "initial value of def 'index' to be of type Number"))
                                lineNumber = 324
                                var opresult543 = callmethod(var_index, ">", [1], new GraceNum(1));
                            if (Grace_isTrue(opresult543)) {
                                lineNumber = 325
                                onSelf = true;
                                var call544 = callmethod(this, "objects", [0]);
                                var diff546 = callmethod(var_index, "-", [1], new GraceNum(1));
                                var idxres547 = call544.methods["[]"].call(call544, [1], diff546);
                                onSelf = true;
                                var call548 = callmethod(this, "objects", [0]);
                                var call549 = callmethod(call548,"[]:=", [2], var_index, idxres547);
                                lineNumber = 326
                                var diff551 = callmethod(var_index, "-", [1], new GraceNum(1));
                                onSelf = true;
                                var call552 = callmethod(this, "objects", [0]);
                                var call553 = callmethod(call552,"[]:=", [2], diff551, var_d);
                                lineNumber = 327
                                onSelf = true;
                                var call554 = callmethod(this, "setStateChanged", [0]);
                                var if541 = call554;
                            }
                            return if541
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func538.paramTypes = [];
                    func538.paramTypes.push([type_GraphicObject, "d"]);
                    func538.paramCounts = [
                                           1,
                                           ];
                    func538.variableArities = [
                                               false,
                                               ];
                    obj460.methods["sendBackward"] = func538;
                    var func555 = function(argcv) {    // method setStateChanged
                        var curarg = 1;
                        if (argcv[0] !=  func555.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method setStateChanged is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 334
                            onSelf = true;
                            var call556 = callmethod(this, "paintAll", [0]);
                            return call556
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func555.paramCounts = [
                                           0,
                                           ];
                    func555.variableArities = [
                                               false,
                                               ];
                    obj460.methods["setStateChanged"] = func555;
                    var func557 = function(argcv) {    // method paintAll
                        var curarg = 1;
                        if (argcv[0] !=  func557.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method paintAll is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 339
                            onSelf = true;
                            var call558 = callmethod(this, "drawingArea", [0]);
                            var call559 = callmethod(call558,"queue_draw", [0]);
                            return call559
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func557.paramCounts = [
                                           0,
                                           ];
                    func557.variableArities = [
                                               false,
                                               ];
                    obj460.methods["paintAll"] = func557;
                    var func560 = function(argcv) {    // method printObjects
                        var curarg = 1;
                        if (argcv[0] !=  func560.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method printObjects is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 344
                            onSelf = true;
                            var call561 = callmethod(this, "objects", [0]);
                            var block562 = Grace_allocObject();
                            block562.methods["apply"] = function() {
                                var args = Array.prototype.slice.call(arguments, 1);
                                return this.real.apply(this.receiver, args);
                            }
                            block562.methods["applyIndirectly"] = function(argcv, a) {
                                return this.real.apply(this.receiver, a._value);
                            }
                            block562.methods["outer"] = function() {
                                return callmethod(this.receiver, 'outer', [0]);
                            }
                            block562.methods["match"] = GraceBlock_match;
                            block562.receiver = this;
                            block562.className = 'block<objectdraw:344>';
                            block562.real = function(
                                                     var_obj
                                                     ) {
                                sourceObject = this;
                                lineNumber = 345
                                var call563 = Grace_print(var_obj);
                                lineNumber = 346
                                var string564 = new GraceString(" ");
                                var call565 = Grace_print(string564);
                                return call565;
                            };
                            var call566 = callmethod(Grace_prelude,"for()do", [1, 1], call561, block562);
                            return call566
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func560.paramCounts = [
                                           0,
                                           ];
                    func560.variableArities = [
                                               false,
                                               ];
                    obj460.methods["printObjects"] = func560;
                    var func567 = function(argcv) {    // method asString
                        var curarg = 1;
                        if (argcv[0] !=  func567.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method asString is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 352
                            var string568 = new GraceString("canvas: with ");
                            lineNumber = 352
                            onSelf = true;
                            var call569 = callmethod(this, "objects", [0]);
                            var call570 = callmethod(call569,"size", [0]);
                            var opresult572 = callmethod(string568, "++", [1], call570);
                            var string573 = new GraceString(" objects");
                            var opresult575 = callmethod(opresult572, "++", [1], string573);
                            return opresult575
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func567.paramCounts = [
                                           0,
                                           ];
                    func567.variableArities = [
                                               false,
                                               ];
                    obj460.methods["asString"] = func567;
                    var func576 = function(argcv) {    // method doSetUp(2)
                        var curarg = 1;
                        var var_graphicApp = arguments[curarg];
                        curarg++;
                        var var_window = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func576.paramCounts[0]) // != 2
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method doSetUp(2) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 363
                            var string577 = new GraceString("motion-notify-event");
                            var block578 = Grace_allocObject();
                            block578.methods["apply"] = function() {
                                var args = Array.prototype.slice.call(arguments, 1);
                                return this.real.apply(this.receiver, args);
                            }
                            block578.methods["applyIndirectly"] = function(argcv, a) {
                                return this.real.apply(this.receiver, a._value);
                            }
                            block578.methods["outer"] = function() {
                                return callmethod(this.receiver, 'outer', [0]);
                            }
                            block578.methods["match"] = GraceBlock_match;
                            block578.receiver = this;
                            block578.className = 'block<objectdraw:363>';
                            block578.real = function(
                                                     var_evt
                                                     ) {
                                sourceObject = this;
                                lineNumber = 364
                                onSelf = true;
                                var call580 = callmethod(this, "buttonPressed", [0]);
                                if (Grace_isTrue(call580)) {
                                    lineNumber = 365
                                    var call581 = callmethod(var_evt,"x", [0]);
                                    lineNumber = 365
                                    var call582 = callmethod(var_evt,"y", [0]);
                                    var call583 = callmethod(var_aLocation,"at", [2], call581, call582);
                                    var call584 = callmethod(var_graphicApp,"onMouseDrag", [1], call583);
                                    var if579 = call584;
                                } else {
                                    lineNumber = 367
                                    var call585 = callmethod(var_evt,"x", [0]);
                                    lineNumber = 367
                                    var call586 = callmethod(var_evt,"y", [0]);
                                    var call587 = callmethod(var_aLocation,"at", [2], call585, call586);
                                    var call588 = callmethod(var_graphicApp,"onMouseMove", [1], call587);
                                    var if579 = call588;
                                }
                                lineNumber = 369
                                var bool589 = new GraceBoolean(false)
                                onSelf = true;
                                var call590 = callmethod(this, "clickOK:=", [1], bool589);
                                return call590;
                            };
                            lineNumber = 363
                            onSelf = true;
                            var call591 = callmethod(this, "drawingArea", [0]);
                            var call592 = callmethod(call591,"on()do", [1, 1], string577, block578);
                            lineNumber = 372
                            var string593 = new GraceString("button-press-event");
                            var block594 = Grace_allocObject();
                            block594.methods["apply"] = function() {
                                var args = Array.prototype.slice.call(arguments, 1);
                                return this.real.apply(this.receiver, args);
                            }
                            block594.methods["applyIndirectly"] = function(argcv, a) {
                                return this.real.apply(this.receiver, a._value);
                            }
                            block594.methods["outer"] = function() {
                                return callmethod(this.receiver, 'outer', [0]);
                            }
                            block594.methods["match"] = GraceBlock_match;
                            block594.receiver = this;
                            block594.className = 'block<objectdraw:372>';
                            block594.real = function(
                                                     var_evt
                                                     ) {
                                sourceObject = this;
                                lineNumber = 373
                                var call595 = callmethod(var_sys,"elapsed", [0]);
                                onSelf = true;
                                var call596 = callmethod(this, "buttonPressTime:=", [1], call595);
                                lineNumber = 374
                                var call597 = callmethod(var_evt,"x", [0]);
                                lineNumber = 374
                                var call598 = callmethod(var_evt,"y", [0]);
                                var call599 = callmethod(var_aLocation,"at", [2], call597, call598);
                                var call600 = callmethod(var_graphicApp,"onMousePress", [1], call599);
                                lineNumber = 375
                                var bool601 = new GraceBoolean(true)
                                onSelf = true;
                                var call602 = callmethod(this, "buttonPressed:=", [1], bool601);
                                lineNumber = 376
                                var bool603 = new GraceBoolean(true)
                                onSelf = true;
                                var call604 = callmethod(this, "clickOK:=", [1], bool603);
                                return call604;
                            };
                            lineNumber = 372
                            onSelf = true;
                            var call605 = callmethod(this, "drawingArea", [0]);
                            var call606 = callmethod(call605,"on()do", [1, 1], string593, block594);
                            lineNumber = 381
                            var string607 = new GraceString("button-release-event");
                            var block608 = Grace_allocObject();
                            block608.methods["apply"] = function() {
                                var args = Array.prototype.slice.call(arguments, 1);
                                return this.real.apply(this.receiver, args);
                            }
                            block608.methods["applyIndirectly"] = function(argcv, a) {
                                return this.real.apply(this.receiver, a._value);
                            }
                            block608.methods["outer"] = function() {
                                return callmethod(this.receiver, 'outer', [0]);
                            }
                            block608.methods["match"] = GraceBlock_match;
                            block608.receiver = this;
                            block608.className = 'block<objectdraw:381>';
                            block608.real = function(
                                                     var_evt
                                                     ) {
                                sourceObject = this;
                                lineNumber = 382
                                var call609 = callmethod(var_evt,"x", [0]);
                                lineNumber = 382
                                var call610 = callmethod(var_evt,"y", [0]);
                                var call611 = callmethod(var_aLocation,"at", [2], call609, call610);
                                var call612 = callmethod(var_graphicApp,"onMouseRelease", [1], call611);
                                lineNumber = 383
                                var call614 = callmethod(var_sys,"elapsed", [0]);
                                onSelf = true;
                                var call615 = callmethod(this, "buttonPressTime", [0]);
                                var diff617 = callmethod(call614, "-", [1], call615);
                                onSelf = true;
                                var call618 = callmethod(this, "maxClickTime", [0]);
                                var opresult620 = callmethod(diff617, "<", [1], call618);
                                onSelf = true;
                                var call621 = callmethod(this, "clickOK", [0]);
                                var opresult623 = callmethod(opresult620, "&&", [1], call621);
                                if (Grace_isTrue(opresult623)) {
                                    lineNumber = 384
                                    var call624 = callmethod(var_evt,"x", [0]);
                                    lineNumber = 384
                                    var call625 = callmethod(var_evt,"y", [0]);
                                    var call626 = callmethod(var_aLocation,"at", [2], call624, call625);
                                    var call627 = callmethod(var_graphicApp,"onMouseClick", [1], call626);
                                    var if613 = call627;
                                }
                                lineNumber = 386
                                var bool628 = new GraceBoolean(false)
                                onSelf = true;
                                var call629 = callmethod(this, "buttonPressed:=", [1], bool628);
                                lineNumber = 387
                                var bool630 = new GraceBoolean(false)
                                onSelf = true;
                                var call631 = callmethod(this, "clickOK:=", [1], bool630);
                                return call631;
                            };
                            lineNumber = 381
                            onSelf = true;
                            var call632 = callmethod(this, "drawingArea", [0]);
                            var call633 = callmethod(call632,"on()do", [1, 1], string607, block608);
                            lineNumber = 390
                            var string634 = new GraceString("enter-notify-event");
                            var block635 = Grace_allocObject();
                            block635.methods["apply"] = function() {
                                var args = Array.prototype.slice.call(arguments, 1);
                                return this.real.apply(this.receiver, args);
                            }
                            block635.methods["applyIndirectly"] = function(argcv, a) {
                                return this.real.apply(this.receiver, a._value);
                            }
                            block635.methods["outer"] = function() {
                                return callmethod(this.receiver, 'outer', [0]);
                            }
                            block635.methods["match"] = GraceBlock_match;
                            block635.receiver = this;
                            block635.className = 'block<objectdraw:390>';
                            block635.real = function(
                                                     var_evt
                                                     ) {
                                sourceObject = this;
                                lineNumber = 391
                                var call636 = callmethod(var_evt,"x", [0]);
                                lineNumber = 391
                                var call637 = callmethod(var_evt,"y", [0]);
                                var call638 = callmethod(var_aLocation,"at", [2], call636, call637);
                                var call639 = callmethod(var_graphicApp,"onMouseEnter", [1], call638);
                                lineNumber = 392
                                var bool640 = new GraceBoolean(false)
                                onSelf = true;
                                var call641 = callmethod(this, "clickOK:=", [1], bool640);
                                return call641;
                            };
                            lineNumber = 390
                            onSelf = true;
                            var call642 = callmethod(this, "drawingArea", [0]);
                            var call643 = callmethod(call642,"on()do", [1, 1], string634, block635);
                            lineNumber = 395
                            var string644 = new GraceString("leave-notify-event");
                            var block645 = Grace_allocObject();
                            block645.methods["apply"] = function() {
                                var args = Array.prototype.slice.call(arguments, 1);
                                return this.real.apply(this.receiver, args);
                            }
                            block645.methods["applyIndirectly"] = function(argcv, a) {
                                return this.real.apply(this.receiver, a._value);
                            }
                            block645.methods["outer"] = function() {
                                return callmethod(this.receiver, 'outer', [0]);
                            }
                            block645.methods["match"] = GraceBlock_match;
                            block645.receiver = this;
                            block645.className = 'block<objectdraw:395>';
                            block645.real = function(
                                                     var_evt
                                                     ) {
                                sourceObject = this;
                                lineNumber = 396
                                var call646 = callmethod(var_evt,"x", [0]);
                                lineNumber = 396
                                var call647 = callmethod(var_evt,"y", [0]);
                                var call648 = callmethod(var_aLocation,"at", [2], call646, call647);
                                var call649 = callmethod(var_graphicApp,"onMouseExit", [1], call648);
                                lineNumber = 397
                                var bool650 = new GraceBoolean(false)
                                onSelf = true;
                                var call651 = callmethod(this, "clickOK:=", [1], bool650);
                                return call651;
                            };
                            lineNumber = 395
                            onSelf = true;
                            var call652 = callmethod(this, "drawingArea", [0]);
                            var call653 = callmethod(call652,"on()do", [1, 1], string644, block645);
                            return call653
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func576.paramTypes = [];
                    func576.paramTypes.push([type_GraphicApplication, "graphicApp"]);
                    func576.paramTypes.push([]);
                    func576.paramCounts = [
                                           2,
                                           ];
                    func576.variableArities = [
                                               false,
                                               ];
                    obj460.methods["doSetUp"] = func576;
                    sourceObject = obj460;
                    lineNumber = 234
                    obj460.data["width"] = var_width__39__;
                    var reader_objectdraw_width654 = function() {
                        return this.data["width"];
                    }
                    obj460.methods["width"] = reader_objectdraw_width654;
                    obj460.data["width"] = var_width__39__;
                    var writer_objectdraw_width654 = function(argcv, o) {
                        this.data["width"] = o;
                    }
                    obj460.methods["width:="] = writer_objectdraw_width654;
                    writer_objectdraw_width654.confidential = true;
                    lineNumber = 234;
                    if (!Grace_isTrue(callmethod(var_Number, "match",
                                                 [1], var_width__39__)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'width' to be of type Number"))
                        obj460.mutable = true;
                    sourceObject = obj460;
                    lineNumber = 235
                    obj460.data["height"] = var_height__39__;
                    var reader_objectdraw_height655 = function() {
                        return this.data["height"];
                    }
                    obj460.methods["height"] = reader_objectdraw_height655;
                    obj460.data["height"] = var_height__39__;
                    var writer_objectdraw_height655 = function(argcv, o) {
                        this.data["height"] = o;
                    }
                    obj460.methods["height:="] = writer_objectdraw_height655;
                    writer_objectdraw_height655.confidential = true;
                    lineNumber = 235;
                    if (!Grace_isTrue(callmethod(var_Number, "match",
                                                 [1], var_height__39__)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'height' to be of type Number"))
                        obj460.mutable = true;
                    sourceObject = obj460;
                    lineNumber = 238
                    var call656 = callmethod(var_collections,"list", [0]);
                    var call657 = callmethod(call656,"new", [0]);
                    obj460.data["objects"] = call657;
                    var reader_objectdraw_objects658 = function() {
                        return this.data["objects"];
                    }
                    obj460.methods["objects"] = reader_objectdraw_objects658;
                    obj460.data["objects"] = call657;
                    var writer_objectdraw_objects658 = function(argcv, o) {
                        this.data["objects"] = o;
                    }
                    obj460.methods["objects:="] = writer_objectdraw_objects658;
                    reader_objectdraw_objects658.confidential = true;
                    writer_objectdraw_objects658.confidential = true;
                    lineNumber = 238;
                    if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                 [1], call657)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'objects' to be of type Dynamic"))
                        obj460.mutable = true;
                    sourceObject = obj460;
                    lineNumber = 241
                    var call659 = callmethod(var_gtk,"drawing_area", [0]);
                    obj460.data["drawingArea"] = call659;
                    var reader_objectdraw_drawingArea660 = function() {
                        return this.data["drawingArea"];
                    }
                    reader_objectdraw_drawingArea660.def = true;
                    obj460.methods["drawingArea"] = reader_objectdraw_drawingArea660;
                    lineNumber = 241;
                    if (!Grace_isTrue(callmethod(var_Widget, "match",
                                                 [1], call659)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of def 'drawingArea' to be of type Widget"))
                        sourceObject = obj460;
                    lineNumber = 244
                    onSelf = true;
                    var call661 = callmethod(this, "drawingArea", [0]);
                    var call662 = callmethod(call661,"set_size_request", [2], var_width__39__, var_height__39__);
                    sourceObject = obj460;
                    lineNumber = 247
                    var call663 = callmethod(var_gdk,"GDK_BUTTON_PRESS_MASK", [0]);
                    onSelf = true;
                    var call664 = callmethod(this, "drawingArea", [0]);
                    var call665 = callmethod(call664,"add_events", [1], call663);
                    sourceObject = obj460;
                    lineNumber = 248
                    var call666 = callmethod(var_gdk,"GDK_BUTTON_RELEASE_MASK", [0]);
                    onSelf = true;
                    var call667 = callmethod(this, "drawingArea", [0]);
                    var call668 = callmethod(call667,"add_events", [1], call666);
                    sourceObject = obj460;
                    lineNumber = 249
                    var call669 = callmethod(var_gdk,"GDK_POINTER_MOTION_MASK", [0]);
                    onSelf = true;
                    var call670 = callmethod(this, "drawingArea", [0]);
                    var call671 = callmethod(call670,"add_events", [1], call669);
                    sourceObject = obj460;
                    lineNumber = 250
                    var call672 = callmethod(var_gdk,"GDK_ENTER_NOTIFY_MASK", [0]);
                    onSelf = true;
                    var call673 = callmethod(this, "drawingArea", [0]);
                    var call674 = callmethod(call673,"add_events", [1], call672);
                    sourceObject = obj460;
                    lineNumber = 251
                    var call675 = callmethod(var_gdk,"GDK_LEAVE_NOTIFY_MASK", [0]);
                    onSelf = true;
                    var call676 = callmethod(this, "drawingArea", [0]);
                    var call677 = callmethod(call676,"add_events", [1], call675);
                    sourceObject = obj460;
                    lineNumber = 255
                    var string678 = new GraceString("draw");
                    var block679 = Grace_allocObject();
                    block679.methods["apply"] = function() {
                        var args = Array.prototype.slice.call(arguments, 1);
                        return this.real.apply(this.receiver, args);
                    }
                    block679.methods["applyIndirectly"] = function(argcv, a) {
                        return this.real.apply(this.receiver, a._value);
                    }
                    block679.methods["outer"] = function() {
                        return callmethod(this.receiver, 'outer', [0]);
                    }
                    block679.methods["match"] = GraceBlock_match;
                    block679.receiver = this;
                    block679.className = 'block<objectdraw:255>';
                    block679.real = function(
                                             var_ctx
                                             ) {
                        sourceObject = this;
                        lineNumber = 256
                        onSelf = true;
                        var call680 = callmethod(this, "objects", [0]);
                        var block681 = Grace_allocObject();
                        block681.methods["apply"] = function() {
                            var args = Array.prototype.slice.call(arguments, 1);
                            return this.real.apply(this.receiver, args);
                        }
                        block681.methods["applyIndirectly"] = function(argcv, a) {
                            return this.real.apply(this.receiver, a._value);
                        }
                        block681.methods["outer"] = function() {
                            return callmethod(this.receiver, 'outer', [0]);
                        }
                        block681.methods["match"] = GraceBlock_match;
                        block681.receiver = this;
                        block681.className = 'block<objectdraw:256>';
                        block681.real = function(
                                                 var_obj
                                                 ) {
                            sourceObject = this;
                            lineNumber = 257
                            var call683 = callmethod(var_obj,"isVisible", [0]);
                            if (Grace_isTrue(call683)) {
                                var call684 = callmethod(var_obj,"draw", [1], var_ctx);
                                var if682 = call684;
                            }
                            return if682;
                        };
                        var call685 = callmethod(Grace_prelude,"for()do", [1, 1], call680, block681);
                        return call685;
                    };
                    lineNumber = 255
                    onSelf = true;
                    var call686 = callmethod(this, "drawingArea", [0]);
                    var call687 = callmethod(call686,"on()do", [1, 1], string678, block679);
                    sourceObject = obj460;
                    sourceObject = obj460;
                    sourceObject = obj460;
                    sourceObject = obj460;
                    sourceObject = obj460;
                    sourceObject = obj460;
                    sourceObject = obj460;
                    sourceObject = obj460;
                    sourceObject = obj460;
                    sourceObject = obj460;
                    sourceObject = obj460;
                    sourceObject = obj460;
                    sourceObject = obj460;
                    lineNumber = 356
                    var bool688 = new GraceBoolean(false)
                    obj460.data["buttonPressed"] = bool688;
                    var reader_objectdraw_buttonPressed689 = function() {
                        return this.data["buttonPressed"];
                    }
                    obj460.methods["buttonPressed"] = reader_objectdraw_buttonPressed689;
                    obj460.data["buttonPressed"] = bool688;
                    var writer_objectdraw_buttonPressed689 = function(argcv, o) {
                        this.data["buttonPressed"] = o;
                    }
                    obj460.methods["buttonPressed:="] = writer_objectdraw_buttonPressed689;
                    reader_objectdraw_buttonPressed689.confidential = true;
                    writer_objectdraw_buttonPressed689.confidential = true;
                    lineNumber = 356;
                    if (!Grace_isTrue(callmethod(var_Boolean, "match",
                                                 [1], bool688)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'buttonPressed' to be of type Boolean"))
                        obj460.mutable = true;
                    sourceObject = obj460;
                    lineNumber = 357
                    obj460.data["buttonPressTime"] = new GraceNum(0);
                    var reader_objectdraw_buttonPressTime690 = function() {
                        return this.data["buttonPressTime"];
                    }
                    obj460.methods["buttonPressTime"] = reader_objectdraw_buttonPressTime690;
                    obj460.data["buttonPressTime"] = new GraceNum(0);
                    var writer_objectdraw_buttonPressTime690 = function(argcv, o) {
                        this.data["buttonPressTime"] = o;
                    }
                    obj460.methods["buttonPressTime:="] = writer_objectdraw_buttonPressTime690;
                    reader_objectdraw_buttonPressTime690.confidential = true;
                    writer_objectdraw_buttonPressTime690.confidential = true;
                    lineNumber = 357;
                    if (!Grace_isTrue(callmethod(var_Number, "match",
                                                 [1], new GraceNum(0))))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'buttonPressTime' to be of type Number"))
                        obj460.mutable = true;
                    sourceObject = obj460;
                    lineNumber = 358
                    var bool691 = new GraceBoolean(false)
                    obj460.data["clickOK"] = bool691;
                    var reader_objectdraw_clickOK692 = function() {
                        return this.data["clickOK"];
                    }
                    obj460.methods["clickOK"] = reader_objectdraw_clickOK692;
                    obj460.data["clickOK"] = bool691;
                    var writer_objectdraw_clickOK692 = function(argcv, o) {
                        this.data["clickOK"] = o;
                    }
                    obj460.methods["clickOK:="] = writer_objectdraw_clickOK692;
                    reader_objectdraw_clickOK692.confidential = true;
                    writer_objectdraw_clickOK692.confidential = true;
                    lineNumber = 358;
                    if (!Grace_isTrue(callmethod(var_Boolean, "match",
                                                 [1], bool691)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'clickOK' to be of type Boolean"))
                        obj460.mutable = true;
                    sourceObject = obj460;
                    lineNumber = 359
                    obj460.data["maxClickTime"] = new GraceNum(0.2);
                    var reader_objectdraw_maxClickTime693 = function() {
                        return this.data["maxClickTime"];
                    }
                    reader_objectdraw_maxClickTime693.def = true;
                    reader_objectdraw_maxClickTime693.confidential = true;
                    obj460.methods["maxClickTime"] = reader_objectdraw_maxClickTime693;
                    lineNumber = 359;
                    if (!Grace_isTrue(callmethod(var_Number, "match",
                                                 [1], new GraceNum(0.2))))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of def 'maxClickTime' to be of type Number"))
                        sourceObject = obj460;
                    superDepth = origSuperDepth;
                }
                obj_init_460.apply(inheritingObject, []);
                return obj460
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        func459.paramTypes = [];
        func459.paramTypes.push([type_Number, "width'"]);
        func459.paramTypes.push([type_Number, "height'"]);
        obj222.methods["size()object"] = func459;
        sourceObject = obj222;
        superDepth = origSuperDepth;
    }
    obj_init_222.apply(obj222, []);
    var var_aCanvas = obj222;
    lineNumber = 1
    var func694 = function(argcv) {    // method aGraphicApplication
        var curarg = 1;
        if (argcv[0] !=  func694.paramCounts[0]) // != 0
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method aGraphicApplication is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            lineNumber = 407
            return var_aGraphicApplication
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func694.paramCounts = [
                           0,
                           ];
    func694.variableArities = [
                               false,
                               ];
    this.methods["aGraphicApplication"] = func694;
    lineNumber = 1
    var obj695 = Grace_allocObject();
    obj695.outer = this;
    var reader_objectdraw_outer696 = function() {
        return this.outer;
    }
    obj695.methods["outer"] = reader_objectdraw_outer696;
    function obj_init_695() {
        var origSuperDepth = superDepth;
        superDepth = obj695;
        var func697 = function(argcv) {    // method size(2)
            var curarg = 1;
            var var_width__39__ = arguments[curarg];
            curarg++;
            var var_height__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func697.paramCounts[0]) // != 2
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method size(2) is of wrong size"));
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                var obj698 = Grace_allocObject();
                obj698.outer = this;
                var reader_objectdraw_outer699 = function() {
                    return this.outer;
                }
                obj698.methods["outer"] = reader_objectdraw_outer699;
                function obj_init_698() {
                    var origSuperDepth = superDepth;
                    superDepth = obj698;
                    var func700 = function(argcv) {    // method windowTitle:=(1)
                        var curarg = 1;
                        var var_newTitle = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func700.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method windowTitle:=(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 415
                            onSelf = true;
                            var call701 = callmethod(this, "window", [0]);
                            var call702 = callmethod(call701,"title:=", [1], var_newTitle);
                            return call702
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func700.paramTypes = [];
                    func700.paramTypes.push([type_String, "newTitle"]);
                    func700.paramCounts = [
                                           1,
                                           ];
                    func700.variableArities = [
                                               false,
                                               ];
                    obj698.methods["windowTitle:="] = func700;
                    var func703 = function(argcv) {    // method addToBottom(1)
                        var curarg = 1;
                        var var_component = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func703.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method addToBottom(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 442
                            var bool704 = new GraceBoolean(true)
                            var bool705 = new GraceBoolean(true)
                            onSelf = true;
                            var call706 = callmethod(this, "bottombox", [0]);
                            var call707 = callmethod(call706,"pack_start", [4], var_component, bool704, bool705, new GraceNum(5));
                            return call707
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func703.paramCounts = [
                                           1,
                                           ];
                    func703.variableArities = [
                                               false,
                                               ];
                    obj698.methods["addToBottom"] = func703;
                    var func708 = function(argcv) {    // method addToTop(1)
                        var curarg = 1;
                        var var_component = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func708.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method addToTop(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 446
                            var bool709 = new GraceBoolean(true)
                            var bool710 = new GraceBoolean(true)
                            onSelf = true;
                            var call711 = callmethod(this, "topbox", [0]);
                            var call712 = callmethod(call711,"pack_start", [4], var_component, bool709, bool710, new GraceNum(5));
                            return call712
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func708.paramCounts = [
                                           1,
                                           ];
                    func708.variableArities = [
                                               false,
                                               ];
                    obj698.methods["addToTop"] = func708;
                    var func713 = function(argcv) {    // method addToLeft(1)
                        var curarg = 1;
                        var var_component = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func713.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method addToLeft(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 450
                            var bool714 = new GraceBoolean(true)
                            var bool715 = new GraceBoolean(true)
                            onSelf = true;
                            var call716 = callmethod(this, "leftbox", [0]);
                            var call717 = callmethod(call716,"pack_start", [4], var_component, bool714, bool715, new GraceNum(5));
                            return call717
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func713.paramCounts = [
                                           1,
                                           ];
                    func713.variableArities = [
                                               false,
                                               ];
                    obj698.methods["addToLeft"] = func713;
                    var func718 = function(argcv) {    // method addToRight(1)
                        var curarg = 1;
                        var var_component = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func718.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method addToRight(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 454
                            var bool719 = new GraceBoolean(true)
                            var bool720 = new GraceBoolean(true)
                            onSelf = true;
                            var call721 = callmethod(this, "rightbox", [0]);
                            var call722 = callmethod(call721,"pack_start", [4], var_component, bool719, bool720, new GraceNum(5));
                            return call722
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func718.paramCounts = [
                                           1,
                                           ];
                    func718.variableArities = [
                                               false,
                                               ];
                    obj698.methods["addToRight"] = func718;
                    var func723 = function(argcv) {    // method onMouseClick(1)
                        var curarg = 1;
                        var var_mousePoint = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func723.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method onMouseClick(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            return undefined
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func723.paramTypes = [];
                    func723.paramTypes.push([type_Location, "mousePoint"]);
                    func723.paramCounts = [
                                           1,
                                           ];
                    func723.variableArities = [
                                               false,
                                               ];
                    obj698.methods["onMouseClick"] = func723;
                    var func724 = function(argcv) {    // method onMousePress(1)
                        var curarg = 1;
                        var var_mousePoint = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func724.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method onMousePress(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            return undefined
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func724.paramTypes = [];
                    func724.paramTypes.push([type_Location, "mousePoint"]);
                    func724.paramCounts = [
                                           1,
                                           ];
                    func724.variableArities = [
                                               false,
                                               ];
                    obj698.methods["onMousePress"] = func724;
                    var func725 = function(argcv) {    // method onMouseRelease(1)
                        var curarg = 1;
                        var var_mousePoint = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func725.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method onMouseRelease(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            return undefined
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func725.paramTypes = [];
                    func725.paramTypes.push([type_Location, "mousePoint"]);
                    func725.paramCounts = [
                                           1,
                                           ];
                    func725.variableArities = [
                                               false,
                                               ];
                    obj698.methods["onMouseRelease"] = func725;
                    var func726 = function(argcv) {    // method onMouseMove(1)
                        var curarg = 1;
                        var var_mousePoint = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func726.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method onMouseMove(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            return undefined
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func726.paramTypes = [];
                    func726.paramTypes.push([type_Location, "mousePoint"]);
                    func726.paramCounts = [
                                           1,
                                           ];
                    func726.variableArities = [
                                               false,
                                               ];
                    obj698.methods["onMouseMove"] = func726;
                    var func727 = function(argcv) {    // method onMouseDrag(1)
                        var curarg = 1;
                        var var_mousePoint = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func727.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method onMouseDrag(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            return undefined
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func727.paramTypes = [];
                    func727.paramTypes.push([type_Location, "mousePoint"]);
                    func727.paramCounts = [
                                           1,
                                           ];
                    func727.variableArities = [
                                               false,
                                               ];
                    obj698.methods["onMouseDrag"] = func727;
                    var func728 = function(argcv) {    // method onMouseEnter(1)
                        var curarg = 1;
                        var var_mousePoint = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func728.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method onMouseEnter(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            return undefined
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func728.paramTypes = [];
                    func728.paramTypes.push([type_Location, "mousePoint"]);
                    func728.paramCounts = [
                                           1,
                                           ];
                    func728.variableArities = [
                                               false,
                                               ];
                    obj698.methods["onMouseEnter"] = func728;
                    var func729 = function(argcv) {    // method onMouseExit(1)
                        var curarg = 1;
                        var var_mousePoint = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func729.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method onMouseExit(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            return undefined
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func729.paramTypes = [];
                    func729.paramTypes.push([type_Location, "mousePoint"]);
                    func729.paramCounts = [
                                           1,
                                           ];
                    func729.variableArities = [
                                               false,
                                               ];
                    obj698.methods["onMouseExit"] = func729;
                    var func730 = function(argcv) {    // method startGraphics
                        var curarg = 1;
                        if (argcv[0] !=  func730.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method startGraphics is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 491
                            onSelf = true;
                            var call731 = callmethod(this, "window", [0]);
                            var call732 = callmethod(call731,"show_all", [0]);
                            lineNumber = 492
                            var call733 = callmethod(var_gtk,"main", [0]);
                            return call733
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func730.paramCounts = [
                                           0,
                                           ];
                    func730.variableArities = [
                                               false,
                                               ];
                    obj698.methods["startGraphics"] = func730;
                    sourceObject = obj698;
                    lineNumber = 409
                    var call734 = callmethod(var_gtk,"GTK_WINDOW_TOPLEVEL", [0]);
                    var call735 = callmethod(var_gtk,"window", [1], call734);
                    obj698.data["window"] = call735;
                    var reader_objectdraw_window736 = function() {
                        return this.data["window"];
                    }
                    reader_objectdraw_window736.def = true;
                    obj698.methods["window"] = reader_objectdraw_window736;
                    lineNumber = 409;
                    if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                 [1], call735)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of def 'window' to be of type Dynamic"))
                        sourceObject = obj698;
                    lineNumber = 410
                    var string737 = new GraceString("Simple graphics");
                    onSelf = true;
                    var call738 = callmethod(this, "window", [0]);
                    var call739 = callmethod(call738,"title:=", [1], string737);
                    sourceObject = obj698;
                    lineNumber = 411
                    var string740 = new GraceString("destroy");
                    var block741 = Grace_allocObject();
                    block741.methods["apply"] = function() {
                        var args = Array.prototype.slice.call(arguments, 1);
                        return this.real.apply(this.receiver, args);
                    }
                    block741.methods["applyIndirectly"] = function(argcv, a) {
                        return this.real.apply(this.receiver, a._value);
                    }
                    block741.methods["outer"] = function() {
                        return callmethod(this.receiver, 'outer', [0]);
                    }
                    block741.methods["match"] = GraceBlock_match;
                    block741.receiver = this;
                    block741.className = 'block<objectdraw:411>';
                    block741.real = function(
                    ) {
                        sourceObject = this;
                        lineNumber = 411
                        var call742 = callmethod(var_gtk,"main_quit", [0]);
                        return call742;
                    };
                    onSelf = true;
                    var call743 = callmethod(this, "window", [0]);
                    var call744 = callmethod(call743,"on()do", [1, 1], string740, block741);
                    sourceObject = obj698;
                    lineNumber = 412
                    onSelf = true;
                    var call745 = callmethod(this, "window", [0]);
                    var call746 = callmethod(call745,"set_default_size", [2], var_width__39__, var_height__39__);
                    sourceObject = obj698;
                    sourceObject = obj698;
                    lineNumber = 418
                    var call747 = callmethod(var_aCanvas,"size", [2], var_width__39__, var_height__39__);
                    obj698.data["canvas"] = call747;
                    var reader_objectdraw_canvas748 = function() {
                        return this.data["canvas"];
                    }
                    reader_objectdraw_canvas748.def = true;
                    obj698.methods["canvas"] = reader_objectdraw_canvas748;
                    lineNumber = 418;
                    if (!Grace_isTrue(callmethod(var_Canvas, "match",
                                                 [1], call747)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of def 'canvas' to be of type Canvas"))
                        sourceObject = obj698;
                    lineNumber = 420
                    onSelf = true;
                    var call749 = callmethod(this, "window", [0]);
                    onSelf = true;
                    var call750 = callmethod(this, "canvas", [0]);
                    var call751 = callmethod(call750,"doSetUp", [2], this, call749);
                    sourceObject = obj698;
                    lineNumber = 424
                    var call752 = callmethod(var_gtk,"grid", [0]);
                    obj698.data["gridLayout"] = call752;
                    var reader_objectdraw_gridLayout753 = function() {
                        return this.data["gridLayout"];
                    }
                    reader_objectdraw_gridLayout753.def = true;
                    obj698.methods["gridLayout"] = reader_objectdraw_gridLayout753;
                    lineNumber = 424;
                    if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                 [1], call752)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of def 'gridLayout' to be of type Dynamic"))
                        sourceObject = obj698;
                    lineNumber = 426
                    onSelf = true;
                    var call754 = callmethod(this, "gridLayout", [0]);
                    onSelf = true;
                    var call755 = callmethod(this, "window", [0]);
                    var call756 = callmethod(call755,"add", [1], call754);
                    sourceObject = obj698;
                    lineNumber = 429
                    var call757 = callmethod(var_gtk,"GTK_ORIENTATION_HORIZONTAL", [0]);
                    var call758 = callmethod(var_gtk,"box", [2], call757, new GraceNum(6));
                    obj698.data["bottombox"] = call758;
                    var reader_objectdraw_bottombox759 = function() {
                        return this.data["bottombox"];
                    }
                    reader_objectdraw_bottombox759.def = true;
                    obj698.methods["bottombox"] = reader_objectdraw_bottombox759;
                    lineNumber = 429;
                    if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                 [1], call758)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of def 'bottombox' to be of type Dynamic"))
                        sourceObject = obj698;
                    lineNumber = 430
                    var call760 = callmethod(var_gtk,"GTK_ORIENTATION_HORIZONTAL", [0]);
                    var call761 = callmethod(var_gtk,"box", [2], call760, new GraceNum(6));
                    obj698.data["topbox"] = call761;
                    var reader_objectdraw_topbox762 = function() {
                        return this.data["topbox"];
                    }
                    reader_objectdraw_topbox762.def = true;
                    obj698.methods["topbox"] = reader_objectdraw_topbox762;
                    lineNumber = 430;
                    if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                 [1], call761)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of def 'topbox' to be of type Dynamic"))
                        sourceObject = obj698;
                    lineNumber = 431
                    var call763 = callmethod(var_gtk,"GTK_ORIENTATION_VERTICAL", [0]);
                    var call764 = callmethod(var_gtk,"box", [2], call763, new GraceNum(6));
                    obj698.data["leftbox"] = call764;
                    var reader_objectdraw_leftbox765 = function() {
                        return this.data["leftbox"];
                    }
                    reader_objectdraw_leftbox765.def = true;
                    obj698.methods["leftbox"] = reader_objectdraw_leftbox765;
                    lineNumber = 431;
                    if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                 [1], call764)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of def 'leftbox' to be of type Dynamic"))
                        sourceObject = obj698;
                    lineNumber = 432
                    var call766 = callmethod(var_gtk,"GTK_ORIENTATION_VERTICAL", [0]);
                    var call767 = callmethod(var_gtk,"box", [2], call766, new GraceNum(6));
                    obj698.data["rightbox"] = call767;
                    var reader_objectdraw_rightbox768 = function() {
                        return this.data["rightbox"];
                    }
                    reader_objectdraw_rightbox768.def = true;
                    obj698.methods["rightbox"] = reader_objectdraw_rightbox768;
                    lineNumber = 432;
                    if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                 [1], call767)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of def 'rightbox' to be of type Dynamic"))
                        sourceObject = obj698;
                    lineNumber = 435
                    onSelf = true;
                    var call769 = callmethod(this, "topbox", [0]);
                    onSelf = true;
                    var call770 = callmethod(this, "gridLayout", [0]);
                    var call771 = callmethod(call770,"attach", [5], call769, new GraceNum(0), new GraceNum(0), new GraceNum(3), new GraceNum(1));
                    sourceObject = obj698;
                    lineNumber = 436
                    onSelf = true;
                    var call772 = callmethod(this, "leftbox", [0]);
                    onSelf = true;
                    var call773 = callmethod(this, "gridLayout", [0]);
                    var call774 = callmethod(call773,"attach", [5], call772, new GraceNum(0), new GraceNum(1), new GraceNum(1), new GraceNum(1));
                    sourceObject = obj698;
                    lineNumber = 437
                    onSelf = true;
                    var call775 = callmethod(this, "canvas", [0]);
                    var call776 = callmethod(call775,"drawingArea", [0]);
                    onSelf = true;
                    var call777 = callmethod(this, "gridLayout", [0]);
                    var call778 = callmethod(call777,"attach", [5], call776, new GraceNum(1), new GraceNum(1), new GraceNum(1), new GraceNum(1));
                    sourceObject = obj698;
                    lineNumber = 438
                    onSelf = true;
                    var call779 = callmethod(this, "rightbox", [0]);
                    onSelf = true;
                    var call780 = callmethod(this, "gridLayout", [0]);
                    var call781 = callmethod(call780,"attach", [5], call779, new GraceNum(2), new GraceNum(1), new GraceNum(1), new GraceNum(1));
                    sourceObject = obj698;
                    lineNumber = 439
                    onSelf = true;
                    var call782 = callmethod(this, "bottombox", [0]);
                    onSelf = true;
                    var call783 = callmethod(this, "gridLayout", [0]);
                    var call784 = callmethod(call783,"attach", [5], call782, new GraceNum(0), new GraceNum(3), new GraceNum(3), new GraceNum(1));
                    sourceObject = obj698;
                    sourceObject = obj698;
                    sourceObject = obj698;
                    sourceObject = obj698;
                    sourceObject = obj698;
                    sourceObject = obj698;
                    sourceObject = obj698;
                    sourceObject = obj698;
                    sourceObject = obj698;
                    sourceObject = obj698;
                    sourceObject = obj698;
                    sourceObject = obj698;
                    superDepth = origSuperDepth;
                }
                obj_init_698.apply(obj698, []);
                return obj698
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        func697.paramTypes = [];
        func697.paramTypes.push([type_Number, "width'"]);
        func697.paramTypes.push([type_Number, "height'"]);
        func697.paramCounts = [
                               2,
                               ];
        func697.variableArities = [
                                   false,
                                   ];
        obj695.methods["size"] = func697;
        var func785 = function(argcv) {
            var curarg = 1;
            var var_width__39__ = arguments[curarg];
            curarg++;
            var var_height__39__ = arguments[curarg];
            curarg++;
            var inheritingObject = arguments[curarg++];
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                var obj786 = Grace_allocObject();
                var inho786 = inheritingObject;
                while (inho786.superobj) inho786 = inho786.superobj;
                inho786.superobj = obj786;
                obj786.data = inheritingObject.data;
                obj786.outer = this;
                var reader_objectdraw_outer787 = function() {
                    return this.outer;
                }
                obj786.methods["outer"] = reader_objectdraw_outer787;
                function obj_init_786() {
                    var origSuperDepth = superDepth;
                    superDepth = obj786;
                    var func788 = function(argcv) {    // method windowTitle:=(1)
                        var curarg = 1;
                        var var_newTitle = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func788.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method windowTitle:=(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 415
                            onSelf = true;
                            var call789 = callmethod(this, "window", [0]);
                            var call790 = callmethod(call789,"title:=", [1], var_newTitle);
                            return call790
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func788.paramTypes = [];
                    func788.paramTypes.push([type_String, "newTitle"]);
                    func788.paramCounts = [
                                           1,
                                           ];
                    func788.variableArities = [
                                               false,
                                               ];
                    obj786.methods["windowTitle:="] = func788;
                    var func791 = function(argcv) {    // method addToBottom(1)
                        var curarg = 1;
                        var var_component = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func791.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method addToBottom(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 442
                            var bool792 = new GraceBoolean(true)
                            var bool793 = new GraceBoolean(true)
                            onSelf = true;
                            var call794 = callmethod(this, "bottombox", [0]);
                            var call795 = callmethod(call794,"pack_start", [4], var_component, bool792, bool793, new GraceNum(5));
                            return call795
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func791.paramCounts = [
                                           1,
                                           ];
                    func791.variableArities = [
                                               false,
                                               ];
                    obj786.methods["addToBottom"] = func791;
                    var func796 = function(argcv) {    // method addToTop(1)
                        var curarg = 1;
                        var var_component = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func796.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method addToTop(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 446
                            var bool797 = new GraceBoolean(true)
                            var bool798 = new GraceBoolean(true)
                            onSelf = true;
                            var call799 = callmethod(this, "topbox", [0]);
                            var call800 = callmethod(call799,"pack_start", [4], var_component, bool797, bool798, new GraceNum(5));
                            return call800
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func796.paramCounts = [
                                           1,
                                           ];
                    func796.variableArities = [
                                               false,
                                               ];
                    obj786.methods["addToTop"] = func796;
                    var func801 = function(argcv) {    // method addToLeft(1)
                        var curarg = 1;
                        var var_component = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func801.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method addToLeft(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 450
                            var bool802 = new GraceBoolean(true)
                            var bool803 = new GraceBoolean(true)
                            onSelf = true;
                            var call804 = callmethod(this, "leftbox", [0]);
                            var call805 = callmethod(call804,"pack_start", [4], var_component, bool802, bool803, new GraceNum(5));
                            return call805
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func801.paramCounts = [
                                           1,
                                           ];
                    func801.variableArities = [
                                               false,
                                               ];
                    obj786.methods["addToLeft"] = func801;
                    var func806 = function(argcv) {    // method addToRight(1)
                        var curarg = 1;
                        var var_component = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func806.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method addToRight(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 454
                            var bool807 = new GraceBoolean(true)
                            var bool808 = new GraceBoolean(true)
                            onSelf = true;
                            var call809 = callmethod(this, "rightbox", [0]);
                            var call810 = callmethod(call809,"pack_start", [4], var_component, bool807, bool808, new GraceNum(5));
                            return call810
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func806.paramCounts = [
                                           1,
                                           ];
                    func806.variableArities = [
                                               false,
                                               ];
                    obj786.methods["addToRight"] = func806;
                    var func811 = function(argcv) {    // method onMouseClick(1)
                        var curarg = 1;
                        var var_mousePoint = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func811.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method onMouseClick(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            return undefined
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func811.paramTypes = [];
                    func811.paramTypes.push([type_Location, "mousePoint"]);
                    func811.paramCounts = [
                                           1,
                                           ];
                    func811.variableArities = [
                                               false,
                                               ];
                    obj786.methods["onMouseClick"] = func811;
                    var func812 = function(argcv) {    // method onMousePress(1)
                        var curarg = 1;
                        var var_mousePoint = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func812.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method onMousePress(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            return undefined
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func812.paramTypes = [];
                    func812.paramTypes.push([type_Location, "mousePoint"]);
                    func812.paramCounts = [
                                           1,
                                           ];
                    func812.variableArities = [
                                               false,
                                               ];
                    obj786.methods["onMousePress"] = func812;
                    var func813 = function(argcv) {    // method onMouseRelease(1)
                        var curarg = 1;
                        var var_mousePoint = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func813.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method onMouseRelease(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            return undefined
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func813.paramTypes = [];
                    func813.paramTypes.push([type_Location, "mousePoint"]);
                    func813.paramCounts = [
                                           1,
                                           ];
                    func813.variableArities = [
                                               false,
                                               ];
                    obj786.methods["onMouseRelease"] = func813;
                    var func814 = function(argcv) {    // method onMouseMove(1)
                        var curarg = 1;
                        var var_mousePoint = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func814.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method onMouseMove(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            return undefined
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func814.paramTypes = [];
                    func814.paramTypes.push([type_Location, "mousePoint"]);
                    func814.paramCounts = [
                                           1,
                                           ];
                    func814.variableArities = [
                                               false,
                                               ];
                    obj786.methods["onMouseMove"] = func814;
                    var func815 = function(argcv) {    // method onMouseDrag(1)
                        var curarg = 1;
                        var var_mousePoint = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func815.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method onMouseDrag(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            return undefined
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func815.paramTypes = [];
                    func815.paramTypes.push([type_Location, "mousePoint"]);
                    func815.paramCounts = [
                                           1,
                                           ];
                    func815.variableArities = [
                                               false,
                                               ];
                    obj786.methods["onMouseDrag"] = func815;
                    var func816 = function(argcv) {    // method onMouseEnter(1)
                        var curarg = 1;
                        var var_mousePoint = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func816.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method onMouseEnter(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            return undefined
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func816.paramTypes = [];
                    func816.paramTypes.push([type_Location, "mousePoint"]);
                    func816.paramCounts = [
                                           1,
                                           ];
                    func816.variableArities = [
                                               false,
                                               ];
                    obj786.methods["onMouseEnter"] = func816;
                    var func817 = function(argcv) {    // method onMouseExit(1)
                        var curarg = 1;
                        var var_mousePoint = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func817.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method onMouseExit(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            return undefined
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func817.paramTypes = [];
                    func817.paramTypes.push([type_Location, "mousePoint"]);
                    func817.paramCounts = [
                                           1,
                                           ];
                    func817.variableArities = [
                                               false,
                                               ];
                    obj786.methods["onMouseExit"] = func817;
                    var func818 = function(argcv) {    // method startGraphics
                        var curarg = 1;
                        if (argcv[0] !=  func818.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method startGraphics is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 491
                            onSelf = true;
                            var call819 = callmethod(this, "window", [0]);
                            var call820 = callmethod(call819,"show_all", [0]);
                            lineNumber = 492
                            var call821 = callmethod(var_gtk,"main", [0]);
                            return call821
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func818.paramCounts = [
                                           0,
                                           ];
                    func818.variableArities = [
                                               false,
                                               ];
                    obj786.methods["startGraphics"] = func818;
                    sourceObject = obj786;
                    lineNumber = 409
                    var call822 = callmethod(var_gtk,"GTK_WINDOW_TOPLEVEL", [0]);
                    var call823 = callmethod(var_gtk,"window", [1], call822);
                    obj786.data["window"] = call823;
                    var reader_objectdraw_window824 = function() {
                        return this.data["window"];
                    }
                    reader_objectdraw_window824.def = true;
                    obj786.methods["window"] = reader_objectdraw_window824;
                    lineNumber = 409;
                    if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                 [1], call823)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of def 'window' to be of type Dynamic"))
                        sourceObject = obj786;
                    lineNumber = 410
                    var string825 = new GraceString("Simple graphics");
                    onSelf = true;
                    var call826 = callmethod(this, "window", [0]);
                    var call827 = callmethod(call826,"title:=", [1], string825);
                    sourceObject = obj786;
                    lineNumber = 411
                    var string828 = new GraceString("destroy");
                    var block829 = Grace_allocObject();
                    block829.methods["apply"] = function() {
                        var args = Array.prototype.slice.call(arguments, 1);
                        return this.real.apply(this.receiver, args);
                    }
                    block829.methods["applyIndirectly"] = function(argcv, a) {
                        return this.real.apply(this.receiver, a._value);
                    }
                    block829.methods["outer"] = function() {
                        return callmethod(this.receiver, 'outer', [0]);
                    }
                    block829.methods["match"] = GraceBlock_match;
                    block829.receiver = this;
                    block829.className = 'block<objectdraw:411>';
                    block829.real = function(
                    ) {
                        sourceObject = this;
                        lineNumber = 411
                        var call830 = callmethod(var_gtk,"main_quit", [0]);
                        return call830;
                    };
                    onSelf = true;
                    var call831 = callmethod(this, "window", [0]);
                    var call832 = callmethod(call831,"on()do", [1, 1], string828, block829);
                    sourceObject = obj786;
                    lineNumber = 412
                    onSelf = true;
                    var call833 = callmethod(this, "window", [0]);
                    var call834 = callmethod(call833,"set_default_size", [2], var_width__39__, var_height__39__);
                    sourceObject = obj786;
                    sourceObject = obj786;
                    lineNumber = 418
                    var call835 = callmethod(var_aCanvas,"size", [2], var_width__39__, var_height__39__);
                    obj786.data["canvas"] = call835;
                    var reader_objectdraw_canvas836 = function() {
                        return this.data["canvas"];
                    }
                    reader_objectdraw_canvas836.def = true;
                    obj786.methods["canvas"] = reader_objectdraw_canvas836;
                    lineNumber = 418;
                    if (!Grace_isTrue(callmethod(var_Canvas, "match",
                                                 [1], call835)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of def 'canvas' to be of type Canvas"))
                        sourceObject = obj786;
                    lineNumber = 420
                    onSelf = true;
                    var call837 = callmethod(this, "window", [0]);
                    onSelf = true;
                    var call838 = callmethod(this, "canvas", [0]);
                    var call839 = callmethod(call838,"doSetUp", [2], this, call837);
                    sourceObject = obj786;
                    lineNumber = 424
                    var call840 = callmethod(var_gtk,"grid", [0]);
                    obj786.data["gridLayout"] = call840;
                    var reader_objectdraw_gridLayout841 = function() {
                        return this.data["gridLayout"];
                    }
                    reader_objectdraw_gridLayout841.def = true;
                    obj786.methods["gridLayout"] = reader_objectdraw_gridLayout841;
                    lineNumber = 424;
                    if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                 [1], call840)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of def 'gridLayout' to be of type Dynamic"))
                        sourceObject = obj786;
                    lineNumber = 426
                    onSelf = true;
                    var call842 = callmethod(this, "gridLayout", [0]);
                    onSelf = true;
                    var call843 = callmethod(this, "window", [0]);
                    var call844 = callmethod(call843,"add", [1], call842);
                    sourceObject = obj786;
                    lineNumber = 429
                    var call845 = callmethod(var_gtk,"GTK_ORIENTATION_HORIZONTAL", [0]);
                    var call846 = callmethod(var_gtk,"box", [2], call845, new GraceNum(6));
                    obj786.data["bottombox"] = call846;
                    var reader_objectdraw_bottombox847 = function() {
                        return this.data["bottombox"];
                    }
                    reader_objectdraw_bottombox847.def = true;
                    obj786.methods["bottombox"] = reader_objectdraw_bottombox847;
                    lineNumber = 429;
                    if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                 [1], call846)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of def 'bottombox' to be of type Dynamic"))
                        sourceObject = obj786;
                    lineNumber = 430
                    var call848 = callmethod(var_gtk,"GTK_ORIENTATION_HORIZONTAL", [0]);
                    var call849 = callmethod(var_gtk,"box", [2], call848, new GraceNum(6));
                    obj786.data["topbox"] = call849;
                    var reader_objectdraw_topbox850 = function() {
                        return this.data["topbox"];
                    }
                    reader_objectdraw_topbox850.def = true;
                    obj786.methods["topbox"] = reader_objectdraw_topbox850;
                    lineNumber = 430;
                    if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                 [1], call849)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of def 'topbox' to be of type Dynamic"))
                        sourceObject = obj786;
                    lineNumber = 431
                    var call851 = callmethod(var_gtk,"GTK_ORIENTATION_VERTICAL", [0]);
                    var call852 = callmethod(var_gtk,"box", [2], call851, new GraceNum(6));
                    obj786.data["leftbox"] = call852;
                    var reader_objectdraw_leftbox853 = function() {
                        return this.data["leftbox"];
                    }
                    reader_objectdraw_leftbox853.def = true;
                    obj786.methods["leftbox"] = reader_objectdraw_leftbox853;
                    lineNumber = 431;
                    if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                 [1], call852)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of def 'leftbox' to be of type Dynamic"))
                        sourceObject = obj786;
                    lineNumber = 432
                    var call854 = callmethod(var_gtk,"GTK_ORIENTATION_VERTICAL", [0]);
                    var call855 = callmethod(var_gtk,"box", [2], call854, new GraceNum(6));
                    obj786.data["rightbox"] = call855;
                    var reader_objectdraw_rightbox856 = function() {
                        return this.data["rightbox"];
                    }
                    reader_objectdraw_rightbox856.def = true;
                    obj786.methods["rightbox"] = reader_objectdraw_rightbox856;
                    lineNumber = 432;
                    if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                 [1], call855)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of def 'rightbox' to be of type Dynamic"))
                        sourceObject = obj786;
                    lineNumber = 435
                    onSelf = true;
                    var call857 = callmethod(this, "topbox", [0]);
                    onSelf = true;
                    var call858 = callmethod(this, "gridLayout", [0]);
                    var call859 = callmethod(call858,"attach", [5], call857, new GraceNum(0), new GraceNum(0), new GraceNum(3), new GraceNum(1));
                    sourceObject = obj786;
                    lineNumber = 436
                    onSelf = true;
                    var call860 = callmethod(this, "leftbox", [0]);
                    onSelf = true;
                    var call861 = callmethod(this, "gridLayout", [0]);
                    var call862 = callmethod(call861,"attach", [5], call860, new GraceNum(0), new GraceNum(1), new GraceNum(1), new GraceNum(1));
                    sourceObject = obj786;
                    lineNumber = 437
                    onSelf = true;
                    var call863 = callmethod(this, "canvas", [0]);
                    var call864 = callmethod(call863,"drawingArea", [0]);
                    onSelf = true;
                    var call865 = callmethod(this, "gridLayout", [0]);
                    var call866 = callmethod(call865,"attach", [5], call864, new GraceNum(1), new GraceNum(1), new GraceNum(1), new GraceNum(1));
                    sourceObject = obj786;
                    lineNumber = 438
                    onSelf = true;
                    var call867 = callmethod(this, "rightbox", [0]);
                    onSelf = true;
                    var call868 = callmethod(this, "gridLayout", [0]);
                    var call869 = callmethod(call868,"attach", [5], call867, new GraceNum(2), new GraceNum(1), new GraceNum(1), new GraceNum(1));
                    sourceObject = obj786;
                    lineNumber = 439
                    onSelf = true;
                    var call870 = callmethod(this, "bottombox", [0]);
                    onSelf = true;
                    var call871 = callmethod(this, "gridLayout", [0]);
                    var call872 = callmethod(call871,"attach", [5], call870, new GraceNum(0), new GraceNum(3), new GraceNum(3), new GraceNum(1));
                    sourceObject = obj786;
                    sourceObject = obj786;
                    sourceObject = obj786;
                    sourceObject = obj786;
                    sourceObject = obj786;
                    sourceObject = obj786;
                    sourceObject = obj786;
                    sourceObject = obj786;
                    sourceObject = obj786;
                    sourceObject = obj786;
                    sourceObject = obj786;
                    sourceObject = obj786;
                    superDepth = origSuperDepth;
                }
                obj_init_786.apply(inheritingObject, []);
                return obj786
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        func785.paramTypes = [];
        func785.paramTypes.push([type_Number, "width'"]);
        func785.paramTypes.push([type_Number, "height'"]);
        obj695.methods["size()object"] = func785;
        sourceObject = obj695;
        superDepth = origSuperDepth;
    }
    obj_init_695.apply(obj695, []);
    var var_aGraphicApplication = obj695;
    lineNumber = 531
    var call873 = callmethod(var_aColor,"r()g()b", [1, 1, 1], new GraceNum(255), new GraceNum(255), new GraceNum(255));
    var var_white = call873;
    lineNumber = 1
    var func874 = function(argcv) {    // method white
        var curarg = 1;
        if (argcv[0] !=  func874.paramCounts[0]) // != 0
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method white is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            lineNumber = 531
            return var_white
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func874.paramCounts = [
                           0,
                           ];
    func874.variableArities = [
                               false,
                               ];
    this.methods["white"] = func874;
    this.methods["white"].debug = "def";
    lineNumber = 531;
    if (!Grace_isTrue(callmethod(var_GColor, "match",
                                 [1], var_white)))
        throw new GraceExceptionPacket(TypeErrorObject,
                                       new GraceString("expected "
                                                       + "initial value of def 'white' to be of type GColor"))
        lineNumber = 532
        var call875 = callmethod(var_aColor,"r()g()b", [1, 1, 1], new GraceNum(0), new GraceNum(0), new GraceNum(0));
    var var_black = call875;
    lineNumber = 1
    var func876 = function(argcv) {    // method black
        var curarg = 1;
        if (argcv[0] !=  func876.paramCounts[0]) // != 0
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method black is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            lineNumber = 532
            return var_black
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func876.paramCounts = [
                           0,
                           ];
    func876.variableArities = [
                               false,
                               ];
    this.methods["black"] = func876;
    this.methods["black"].debug = "def";
    lineNumber = 532;
    if (!Grace_isTrue(callmethod(var_GColor, "match",
                                 [1], var_black)))
        throw new GraceExceptionPacket(TypeErrorObject,
                                       new GraceString("expected "
                                                       + "initial value of def 'black' to be of type GColor"))
        lineNumber = 533
        var call877 = callmethod(var_aColor,"r()g()b", [1, 1, 1], new GraceNum(0), new GraceNum(255), new GraceNum(0));
    var var_green = call877;
    lineNumber = 1
    var func878 = function(argcv) {    // method green
        var curarg = 1;
        if (argcv[0] !=  func878.paramCounts[0]) // != 0
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method green is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            lineNumber = 533
            return var_green
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func878.paramCounts = [
                           0,
                           ];
    func878.variableArities = [
                               false,
                               ];
    this.methods["green"] = func878;
    this.methods["green"].debug = "def";
    lineNumber = 533;
    if (!Grace_isTrue(callmethod(var_GColor, "match",
                                 [1], var_green)))
        throw new GraceExceptionPacket(TypeErrorObject,
                                       new GraceString("expected "
                                                       + "initial value of def 'green' to be of type GColor"))
        lineNumber = 534
        var call879 = callmethod(var_aColor,"r()g()b", [1, 1, 1], new GraceNum(255), new GraceNum(0), new GraceNum(0));
    var var_red = call879;
    lineNumber = 1
    var func880 = function(argcv) {    // method red
        var curarg = 1;
        if (argcv[0] !=  func880.paramCounts[0]) // != 0
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method red is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            lineNumber = 534
            return var_red
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func880.paramCounts = [
                           0,
                           ];
    func880.variableArities = [
                               false,
                               ];
    this.methods["red"] = func880;
    this.methods["red"].debug = "def";
    lineNumber = 534;
    if (!Grace_isTrue(callmethod(var_GColor, "match",
                                 [1], var_red)))
        throw new GraceExceptionPacket(TypeErrorObject,
                                       new GraceString("expected "
                                                       + "initial value of def 'red' to be of type GColor"))
        lineNumber = 535
        var call881 = callmethod(var_aColor,"r()g()b", [1, 1, 1], new GraceNum(60), new GraceNum(60), new GraceNum(60));
    var var_gray = call881;
    lineNumber = 1
    var func882 = function(argcv) {    // method gray
        var curarg = 1;
        if (argcv[0] !=  func882.paramCounts[0]) // != 0
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method gray is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            lineNumber = 535
            return var_gray
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func882.paramCounts = [
                           0,
                           ];
    func882.variableArities = [
                               false,
                               ];
    this.methods["gray"] = func882;
    this.methods["gray"].debug = "def";
    lineNumber = 535;
    if (!Grace_isTrue(callmethod(var_GColor, "match",
                                 [1], var_gray)))
        throw new GraceExceptionPacket(TypeErrorObject,
                                       new GraceString("expected "
                                                       + "initial value of def 'gray' to be of type GColor"))
        lineNumber = 536
        var call883 = callmethod(var_aColor,"r()g()b", [1, 1, 1], new GraceNum(0), new GraceNum(0), new GraceNum(255));
    var var_blue = call883;
    lineNumber = 1
    var func884 = function(argcv) {    // method blue
        var curarg = 1;
        if (argcv[0] !=  func884.paramCounts[0]) // != 0
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method blue is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            lineNumber = 536
            return var_blue
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func884.paramCounts = [
                           0,
                           ];
    func884.variableArities = [
                               false,
                               ];
    this.methods["blue"] = func884;
    this.methods["blue"].debug = "def";
    lineNumber = 536;
    if (!Grace_isTrue(callmethod(var_GColor, "match",
                                 [1], var_blue)))
        throw new GraceExceptionPacket(TypeErrorObject,
                                       new GraceString("expected "
                                                       + "initial value of def 'blue' to be of type GColor"))
        lineNumber = 537
        var call885 = callmethod(var_aColor,"r()g()b", [1, 1, 1], new GraceNum(0), new GraceNum(255), new GraceNum(255));
    var var_cyan = call885;
    lineNumber = 1
    var func886 = function(argcv) {    // method cyan
        var curarg = 1;
        if (argcv[0] !=  func886.paramCounts[0]) // != 0
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method cyan is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            lineNumber = 537
            return var_cyan
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func886.paramCounts = [
                           0,
                           ];
    func886.variableArities = [
                               false,
                               ];
    this.methods["cyan"] = func886;
    this.methods["cyan"].debug = "def";
    lineNumber = 537;
    if (!Grace_isTrue(callmethod(var_GColor, "match",
                                 [1], var_cyan)))
        throw new GraceExceptionPacket(TypeErrorObject,
                                       new GraceString("expected "
                                                       + "initial value of def 'cyan' to be of type GColor"))
        lineNumber = 538
        var call887 = callmethod(var_aColor,"r()g()b", [1, 1, 1], new GraceNum(255), new GraceNum(0), new GraceNum(255));
    var var_magenta = call887;
    lineNumber = 1
    var func888 = function(argcv) {    // method magenta
        var curarg = 1;
        if (argcv[0] !=  func888.paramCounts[0]) // != 0
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method magenta is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            lineNumber = 538
            return var_magenta
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func888.paramCounts = [
                           0,
                           ];
    func888.variableArities = [
                               false,
                               ];
    this.methods["magenta"] = func888;
    this.methods["magenta"].debug = "def";
    lineNumber = 538;
    if (!Grace_isTrue(callmethod(var_GColor, "match",
                                 [1], var_magenta)))
        throw new GraceExceptionPacket(TypeErrorObject,
                                       new GraceString("expected "
                                                       + "initial value of def 'magenta' to be of type GColor"))
        lineNumber = 539
        var call889 = callmethod(var_aColor,"r()g()b", [1, 1, 1], new GraceNum(255), new GraceNum(255), new GraceNum(0));
    var var_yellow = call889;
    lineNumber = 1
    var func890 = function(argcv) {    // method yellow
        var curarg = 1;
        if (argcv[0] !=  func890.paramCounts[0]) // != 0
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method yellow is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            lineNumber = 539
            return var_yellow
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func890.paramCounts = [
                           0,
                           ];
    func890.variableArities = [
                               false,
                               ];
    this.methods["yellow"] = func890;
    this.methods["yellow"].debug = "def";
    lineNumber = 539;
    if (!Grace_isTrue(callmethod(var_GColor, "match",
                                 [1], var_yellow)))
        throw new GraceExceptionPacket(TypeErrorObject,
                                       new GraceString("expected "
                                                       + "initial value of def 'yellow' to be of type GColor"))
        lineNumber = 540
        var call891 = callmethod(var_aColor,"r()g()b", [1, 1, 1], new GraceNum(220), new GraceNum(220), new GraceNum(220));
    var var_neutral = call891;
    lineNumber = 1
    var func892 = function(argcv) {    // method neutral
        var curarg = 1;
        if (argcv[0] !=  func892.paramCounts[0]) // != 0
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method neutral is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            lineNumber = 540
            return var_neutral
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func892.paramCounts = [
                           0,
                           ];
    func892.variableArities = [
                               false,
                               ];
    this.methods["neutral"] = func892;
    this.methods["neutral"].debug = "def";
    lineNumber = 540;
    if (!Grace_isTrue(callmethod(var_GColor, "match",
                                 [1], var_neutral)))
        throw new GraceExceptionPacket(TypeErrorObject,
                                       new GraceString("expected "
                                                       + "initial value of def 'neutral' to be of type GColor"))
        lineNumber = 1
        var func893 = function(argcv) {    // method aDrawable
            var curarg = 1;
            if (argcv[0] !=  func893.paramCounts[0]) // != 0
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method aDrawable is of wrong size"));
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                lineNumber = 544
                return var_aDrawable
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        func893.paramCounts = [
                               0,
                               ];
    func893.variableArities = [
                               false,
                               ];
    this.methods["aDrawable"] = func893;
    lineNumber = 1
    var obj894 = Grace_allocObject();
    obj894.outer = this;
    var reader_objectdraw_outer895 = function() {
        return this.outer;
    }
    obj894.methods["outer"] = reader_objectdraw_outer895;
    function obj_init_894() {
        var origSuperDepth = superDepth;
        superDepth = obj894;
        var func896 = function(argcv) {    // method at(1)on(1)
            var curarg = 1;
            var var_location__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func896.paramCounts[0]) // != 1
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method at(1)on(1) is of wrong size"));
            var var_canvas__39__ = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func896.paramCounts[1]) // != 1
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 2 to method at(1)on(1) is of wrong size"));
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                var obj897 = Grace_allocObject();
                obj897.outer = this;
                var reader_objectdraw_outer898 = function() {
                    return this.outer;
                }
                obj897.methods["outer"] = reader_objectdraw_outer898;
                function obj_init_897() {
                    var origSuperDepth = superDepth;
                    superDepth = obj897;
                    var func899 = function(argcv) {    // method x
                        var curarg = 1;
                        if (argcv[0] !=  func899.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method x is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 551
                            onSelf = true;
                            var call900 = callmethod(this, "location", [0]);
                            var call901 = callmethod(call900,"x", [0]);
                            return call901
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func899.paramCounts = [
                                           0,
                                           ];
                    func899.variableArities = [
                                               false,
                                               ];
                    obj897.methods["x"] = func899;
                    var func902 = function(argcv) {    // method y
                        var curarg = 1;
                        if (argcv[0] !=  func902.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method y is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 556
                            onSelf = true;
                            var call903 = callmethod(this, "location", [0]);
                            var call904 = callmethod(call903,"y", [0]);
                            return call904
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func902.paramCounts = [
                                           0,
                                           ];
                    func902.variableArities = [
                                               false,
                                               ];
                    obj897.methods["y"] = func902;
                    var func905 = function(argcv) {    // method color
                        var curarg = 1;
                        if (argcv[0] !=  func905.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method color is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 565
                            onSelf = true;
                            var call906 = callmethod(this, "theColor", [0]);
                            return call906
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func905.paramCounts = [
                                           0,
                                           ];
                    func905.variableArities = [
                                               false,
                                               ];
                    obj897.methods["color"] = func905;
                    var func907 = function(argcv) {    // method color:=(1)
                        var curarg = 1;
                        var var_newColor = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func907.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method color:=(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 567
                            onSelf = true;
                            var call908 = callmethod(this, "theColor:=", [1], var_newColor);
                            lineNumber = 568
                            onSelf = true;
                            var call909 = callmethod(this, "setStateChanged", [0]);
                            return call909
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func907.paramTypes = [];
                    func907.paramTypes.push([type_GColor, "newColor"]);
                    func907.paramCounts = [
                                           1,
                                           ];
                    func907.variableArities = [
                                               false,
                                               ];
                    obj897.methods["color:="] = func907;
                    var func910 = function(argcv) {    // method frameColor
                        var curarg = 1;
                        if (argcv[0] !=  func910.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method frameColor is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 572
                            onSelf = true;
                            var call911 = callmethod(this, "theFrameColor", [0]);
                            return call911
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func910.paramCounts = [
                                           0,
                                           ];
                    func910.variableArities = [
                                               false,
                                               ];
                    obj897.methods["frameColor"] = func910;
                    var func912 = function(argcv) {    // method frameColor:=(1)
                        var curarg = 1;
                        var var_newfColor = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func912.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method frameColor:=(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 574
                            onSelf = true;
                            var call913 = callmethod(this, "theFrameColor:=", [1], var_newfColor);
                            lineNumber = 575
                            onSelf = true;
                            var call914 = callmethod(this, "setStateChanged", [0]);
                            return call914
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func912.paramTypes = [];
                    func912.paramTypes.push([type_GColor, "newfColor"]);
                    func912.paramCounts = [
                                           1,
                                           ];
                    func912.variableArities = [
                                               false,
                                               ];
                    obj897.methods["frameColor:="] = func912;
                    var func915 = function(argcv) {    // method addToCanvas(1)
                        var curarg = 1;
                        var var_c = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func915.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method addToCanvas(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 583
                            onSelf = true;
                            var call916 = callmethod(this, "canvas:=", [1], var_c);
                            lineNumber = 584
                            var call917 = callmethod(var_c,"add", [1], this);
                            return call917
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func915.paramTypes = [];
                    func915.paramTypes.push([type_Canvas, "c"]);
                    func915.paramCounts = [
                                           1,
                                           ];
                    func915.variableArities = [
                                               false,
                                               ];
                    obj897.methods["addToCanvas"] = func915;
                    var func918 = function(argcv) {    // method removeFromCanvas
                        var curarg = 1;
                        if (argcv[0] !=  func918.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method removeFromCanvas is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 589
                            onSelf = true;
                            var call919 = callmethod(this, "canvas", [0]);
                            var call920 = callmethod(call919,"remove", [1], this);
                            return call920
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func918.paramCounts = [
                                           0,
                                           ];
                    func918.variableArities = [
                                               false,
                                               ];
                    obj897.methods["removeFromCanvas"] = func918;
                    var func921 = function(argcv) {    // method moveTo(1)
                        var curarg = 1;
                        var var_newLocn = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func921.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method moveTo(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 594
                            onSelf = true;
                            var call922 = callmethod(this, "location:=", [1], var_newLocn);
                            lineNumber = 595
                            onSelf = true;
                            var call923 = callmethod(this, "setStateChanged", [0]);
                            return call923
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func921.paramTypes = [];
                    func921.paramTypes.push([type_Location, "newLocn"]);
                    func921.paramCounts = [
                                           1,
                                           ];
                    func921.variableArities = [
                                               false,
                                               ];
                    obj897.methods["moveTo"] = func921;
                    var func924 = function(argcv) {    // method moveBy(2)
                        var curarg = 1;
                        var var_dx = arguments[curarg];
                        curarg++;
                        var var_dy = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func924.paramCounts[0]) // != 2
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method moveBy(2) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 600
                            onSelf = true;
                            var call925 = callmethod(this, "location", [0]);
                            var call926 = callmethod(call925,"translate", [2], var_dx, var_dy);
                            onSelf = true;
                            var call927 = callmethod(this, "location:=", [1], call926);
                            lineNumber = 601
                            onSelf = true;
                            var call928 = callmethod(this, "setStateChanged", [0]);
                            return call928
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func924.paramTypes = [];
                    func924.paramTypes.push([type_Number, "dx"]);
                    func924.paramTypes.push([type_Number, "dy"]);
                    func924.paramCounts = [
                                           2,
                                           ];
                    func924.variableArities = [
                                               false,
                                               ];
                    obj897.methods["moveBy"] = func924;
                    var func929 = function(argcv) {    // method sendForward
                        var curarg = 1;
                        if (argcv[0] !=  func929.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method sendForward is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 606
                            onSelf = true;
                            var call930 = callmethod(this, "canvas", [0]);
                            var call931 = callmethod(call930,"sendForward", [1], this);
                            return call931
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func929.paramCounts = [
                                           0,
                                           ];
                    func929.variableArities = [
                                               false,
                                               ];
                    obj897.methods["sendForward"] = func929;
                    var func932 = function(argcv) {    // method sendBackward
                        var curarg = 1;
                        if (argcv[0] !=  func932.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method sendBackward is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 611
                            onSelf = true;
                            var call933 = callmethod(this, "canvas", [0]);
                            var call934 = callmethod(call933,"sendBackward", [1], this);
                            return call934
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func932.paramCounts = [
                                           0,
                                           ];
                    func932.variableArities = [
                                               false,
                                               ];
                    obj897.methods["sendBackward"] = func932;
                    var func935 = function(argcv) {    // method sendToFront
                        var curarg = 1;
                        if (argcv[0] !=  func935.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method sendToFront is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 616
                            onSelf = true;
                            var call936 = callmethod(this, "canvas", [0]);
                            var call937 = callmethod(call936,"sendToFront", [1], this);
                            return call937
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func935.paramCounts = [
                                           0,
                                           ];
                    func935.variableArities = [
                                               false,
                                               ];
                    obj897.methods["sendToFront"] = func935;
                    var func938 = function(argcv) {    // method sendToBack
                        var curarg = 1;
                        if (argcv[0] !=  func938.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method sendToBack is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 621
                            onSelf = true;
                            var call939 = callmethod(this, "canvas", [0]);
                            var call940 = callmethod(call939,"sendToBack", [1], this);
                            return call940
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func938.paramCounts = [
                                           0,
                                           ];
                    func938.variableArities = [
                                               false,
                                               ];
                    obj897.methods["sendToBack"] = func938;
                    var func941 = function(argcv) {    // method setStateChanged
                        var curarg = 1;
                        if (argcv[0] !=  func941.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method setStateChanged is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 626
                            onSelf = true;
                            var call942 = callmethod(this, "canvas", [0]);
                            var call943 = callmethod(call942,"setStateChanged", [0]);
                            return call943
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func941.confidential = true;
                    func941.paramCounts = [
                                           0,
                                           ];
                    func941.variableArities = [
                                               false,
                                               ];
                    obj897.methods["setStateChanged"] = func941;
                    var func944 = function(argcv) {    // method draw(1)
                        var curarg = 1;
                        var var_ctx = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func944.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method draw(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            return undefined
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func944.paramCounts = [
                                           1,
                                           ];
                    func944.variableArities = [
                                               false,
                                               ];
                    obj897.methods["draw"] = func944;
                    var func945 = function(argcv) {    // method asString
                        var curarg = 1;
                        if (argcv[0] !=  func945.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method asString is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 633
                            var string946 = new GraceString("GraphicObject object");
                            return string946
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func945.paramCounts = [
                                           0,
                                           ];
                    func945.variableArities = [
                                               false,
                                               ];
                    obj897.methods["asString"] = func945;
                    sourceObject = obj897;
                    lineNumber = 547
                    obj897.data["location"] = var_location__39__;
                    var reader_objectdraw_location947 = function() {
                        return this.data["location"];
                    }
                    obj897.methods["location"] = reader_objectdraw_location947;
                    obj897.data["location"] = var_location__39__;
                    var writer_objectdraw_location947 = function(argcv, o) {
                        this.data["location"] = o;
                    }
                    obj897.methods["location:="] = writer_objectdraw_location947;
                    writer_objectdraw_location947.confidential = true;
                    lineNumber = 547;
                    if (!Grace_isTrue(callmethod(var_Location, "match",
                                                 [1], var_location__39__)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'location' to be of type Location"))
                        obj897.mutable = true;
                    sourceObject = obj897;
                    sourceObject = obj897;
                    sourceObject = obj897;
                    lineNumber = 560
                    obj897.data["canvas"] = var_canvas__39__;
                    var reader_objectdraw_canvas948 = function() {
                        return this.data["canvas"];
                    }
                    obj897.methods["canvas"] = reader_objectdraw_canvas948;
                    obj897.data["canvas"] = var_canvas__39__;
                    var writer_objectdraw_canvas948 = function(argcv, o) {
                        this.data["canvas"] = o;
                    }
                    obj897.methods["canvas:="] = writer_objectdraw_canvas948;
                    writer_objectdraw_canvas948.confidential = true;
                    lineNumber = 560;
                    if (!Grace_isTrue(callmethod(var_Canvas, "match",
                                                 [1], var_canvas__39__)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'canvas' to be of type Canvas"))
                        obj897.mutable = true;
                    sourceObject = obj897;
                    lineNumber = 563
                    obj897.data["theColor"] = var_black;
                    var reader_objectdraw_theColor949 = function() {
                        return this.data["theColor"];
                    }
                    obj897.methods["theColor"] = reader_objectdraw_theColor949;
                    obj897.data["theColor"] = var_black;
                    var writer_objectdraw_theColor949 = function(argcv, o) {
                        this.data["theColor"] = o;
                    }
                    obj897.methods["theColor:="] = writer_objectdraw_theColor949;
                    lineNumber = 563;
                    if (!Grace_isTrue(callmethod(var_GColor, "match",
                                                 [1], var_black)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'theColor' to be of type GColor"))
                        obj897.mutable = true;
                    sourceObject = obj897;
                    sourceObject = obj897;
                    sourceObject = obj897;
                    lineNumber = 571
                    obj897.data["theFrameColor"] = var_black;
                    var reader_objectdraw_theFrameColor950 = function() {
                        return this.data["theFrameColor"];
                    }
                    obj897.methods["theFrameColor"] = reader_objectdraw_theFrameColor950;
                    obj897.data["theFrameColor"] = var_black;
                    var writer_objectdraw_theFrameColor950 = function(argcv, o) {
                        this.data["theFrameColor"] = o;
                    }
                    obj897.methods["theFrameColor:="] = writer_objectdraw_theFrameColor950;
                    reader_objectdraw_theFrameColor950.confidential = true;
                    writer_objectdraw_theFrameColor950.confidential = true;
                    lineNumber = 571;
                    if (!Grace_isTrue(callmethod(var_GColor, "match",
                                                 [1], var_black)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'theFrameColor' to be of type GColor"))
                        obj897.mutable = true;
                    sourceObject = obj897;
                    sourceObject = obj897;
                    sourceObject = obj897;
                    lineNumber = 579
                    var bool951 = new GraceBoolean(true)
                    obj897.data["isVisible"] = bool951;
                    var reader_objectdraw_isVisible952 = function() {
                        return this.data["isVisible"];
                    }
                    obj897.methods["isVisible"] = reader_objectdraw_isVisible952;
                    obj897.data["isVisible"] = bool951;
                    var writer_objectdraw_isVisible952 = function(argcv, o) {
                        this.data["isVisible"] = o;
                    }
                    obj897.methods["isVisible:="] = writer_objectdraw_isVisible952;
                    lineNumber = 579;
                    if (!Grace_isTrue(callmethod(var_Boolean, "match",
                                                 [1], bool951)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'isVisible' to be of type Boolean"))
                        obj897.mutable = true;
                    sourceObject = obj897;
                    sourceObject = obj897;
                    sourceObject = obj897;
                    sourceObject = obj897;
                    sourceObject = obj897;
                    sourceObject = obj897;
                    sourceObject = obj897;
                    sourceObject = obj897;
                    sourceObject = obj897;
                    sourceObject = obj897;
                    sourceObject = obj897;
                    superDepth = origSuperDepth;
                }
                obj_init_897.apply(obj897, []);
                return obj897
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        func896.paramTypes = [];
        func896.paramTypes.push([type_Location, "location'"]);
        func896.paramTypes.push([type_Canvas, "canvas'"]);
        func896.paramCounts = [
                               1,
                               1,
                               ];
        func896.variableArities = [
                                   false,
                                   false,
                                   ];
        obj894.methods["at()on"] = func896;
        var func953 = function(argcv) {
            var curarg = 1;
            var var_location__39__ = arguments[curarg];
            curarg++;
            var var_canvas__39__ = arguments[curarg];
            curarg++;
            var inheritingObject = arguments[curarg++];
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                var obj954 = Grace_allocObject();
                var inho954 = inheritingObject;
                while (inho954.superobj) inho954 = inho954.superobj;
                inho954.superobj = obj954;
                obj954.data = inheritingObject.data;
                obj954.outer = this;
                var reader_objectdraw_outer955 = function() {
                    return this.outer;
                }
                obj954.methods["outer"] = reader_objectdraw_outer955;
                function obj_init_954() {
                    var origSuperDepth = superDepth;
                    superDepth = obj954;
                    var func956 = function(argcv) {    // method x
                        var curarg = 1;
                        if (argcv[0] !=  func956.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method x is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 551
                            onSelf = true;
                            var call957 = callmethod(this, "location", [0]);
                            var call958 = callmethod(call957,"x", [0]);
                            return call958
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func956.paramCounts = [
                                           0,
                                           ];
                    func956.variableArities = [
                                               false,
                                               ];
                    obj954.methods["x"] = func956;
                    var func959 = function(argcv) {    // method y
                        var curarg = 1;
                        if (argcv[0] !=  func959.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method y is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 556
                            onSelf = true;
                            var call960 = callmethod(this, "location", [0]);
                            var call961 = callmethod(call960,"y", [0]);
                            return call961
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func959.paramCounts = [
                                           0,
                                           ];
                    func959.variableArities = [
                                               false,
                                               ];
                    obj954.methods["y"] = func959;
                    var func962 = function(argcv) {    // method color
                        var curarg = 1;
                        if (argcv[0] !=  func962.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method color is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 565
                            onSelf = true;
                            var call963 = callmethod(this, "theColor", [0]);
                            return call963
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func962.paramCounts = [
                                           0,
                                           ];
                    func962.variableArities = [
                                               false,
                                               ];
                    obj954.methods["color"] = func962;
                    var func964 = function(argcv) {    // method color:=(1)
                        var curarg = 1;
                        var var_newColor = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func964.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method color:=(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 567
                            onSelf = true;
                            var call965 = callmethod(this, "theColor:=", [1], var_newColor);
                            lineNumber = 568
                            onSelf = true;
                            var call966 = callmethod(this, "setStateChanged", [0]);
                            return call966
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func964.paramTypes = [];
                    func964.paramTypes.push([type_GColor, "newColor"]);
                    func964.paramCounts = [
                                           1,
                                           ];
                    func964.variableArities = [
                                               false,
                                               ];
                    obj954.methods["color:="] = func964;
                    var func967 = function(argcv) {    // method frameColor
                        var curarg = 1;
                        if (argcv[0] !=  func967.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method frameColor is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 572
                            onSelf = true;
                            var call968 = callmethod(this, "theFrameColor", [0]);
                            return call968
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func967.paramCounts = [
                                           0,
                                           ];
                    func967.variableArities = [
                                               false,
                                               ];
                    obj954.methods["frameColor"] = func967;
                    var func969 = function(argcv) {    // method frameColor:=(1)
                        var curarg = 1;
                        var var_newfColor = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func969.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method frameColor:=(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 574
                            onSelf = true;
                            var call970 = callmethod(this, "theFrameColor:=", [1], var_newfColor);
                            lineNumber = 575
                            onSelf = true;
                            var call971 = callmethod(this, "setStateChanged", [0]);
                            return call971
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func969.paramTypes = [];
                    func969.paramTypes.push([type_GColor, "newfColor"]);
                    func969.paramCounts = [
                                           1,
                                           ];
                    func969.variableArities = [
                                               false,
                                               ];
                    obj954.methods["frameColor:="] = func969;
                    var func972 = function(argcv) {    // method addToCanvas(1)
                        var curarg = 1;
                        var var_c = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func972.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method addToCanvas(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 583
                            onSelf = true;
                            var call973 = callmethod(this, "canvas:=", [1], var_c);
                            lineNumber = 584
                            var call974 = callmethod(var_c,"add", [1], this);
                            return call974
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func972.paramTypes = [];
                    func972.paramTypes.push([type_Canvas, "c"]);
                    func972.paramCounts = [
                                           1,
                                           ];
                    func972.variableArities = [
                                               false,
                                               ];
                    obj954.methods["addToCanvas"] = func972;
                    var func975 = function(argcv) {    // method removeFromCanvas
                        var curarg = 1;
                        if (argcv[0] !=  func975.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method removeFromCanvas is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 589
                            onSelf = true;
                            var call976 = callmethod(this, "canvas", [0]);
                            var call977 = callmethod(call976,"remove", [1], this);
                            return call977
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func975.paramCounts = [
                                           0,
                                           ];
                    func975.variableArities = [
                                               false,
                                               ];
                    obj954.methods["removeFromCanvas"] = func975;
                    var func978 = function(argcv) {    // method moveTo(1)
                        var curarg = 1;
                        var var_newLocn = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func978.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method moveTo(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 594
                            onSelf = true;
                            var call979 = callmethod(this, "location:=", [1], var_newLocn);
                            lineNumber = 595
                            onSelf = true;
                            var call980 = callmethod(this, "setStateChanged", [0]);
                            return call980
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func978.paramTypes = [];
                    func978.paramTypes.push([type_Location, "newLocn"]);
                    func978.paramCounts = [
                                           1,
                                           ];
                    func978.variableArities = [
                                               false,
                                               ];
                    obj954.methods["moveTo"] = func978;
                    var func981 = function(argcv) {    // method moveBy(2)
                        var curarg = 1;
                        var var_dx = arguments[curarg];
                        curarg++;
                        var var_dy = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func981.paramCounts[0]) // != 2
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method moveBy(2) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 600
                            onSelf = true;
                            var call982 = callmethod(this, "location", [0]);
                            var call983 = callmethod(call982,"translate", [2], var_dx, var_dy);
                            onSelf = true;
                            var call984 = callmethod(this, "location:=", [1], call983);
                            lineNumber = 601
                            onSelf = true;
                            var call985 = callmethod(this, "setStateChanged", [0]);
                            return call985
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func981.paramTypes = [];
                    func981.paramTypes.push([type_Number, "dx"]);
                    func981.paramTypes.push([type_Number, "dy"]);
                    func981.paramCounts = [
                                           2,
                                           ];
                    func981.variableArities = [
                                               false,
                                               ];
                    obj954.methods["moveBy"] = func981;
                    var func986 = function(argcv) {    // method sendForward
                        var curarg = 1;
                        if (argcv[0] !=  func986.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method sendForward is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 606
                            onSelf = true;
                            var call987 = callmethod(this, "canvas", [0]);
                            var call988 = callmethod(call987,"sendForward", [1], this);
                            return call988
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func986.paramCounts = [
                                           0,
                                           ];
                    func986.variableArities = [
                                               false,
                                               ];
                    obj954.methods["sendForward"] = func986;
                    var func989 = function(argcv) {    // method sendBackward
                        var curarg = 1;
                        if (argcv[0] !=  func989.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method sendBackward is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 611
                            onSelf = true;
                            var call990 = callmethod(this, "canvas", [0]);
                            var call991 = callmethod(call990,"sendBackward", [1], this);
                            return call991
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func989.paramCounts = [
                                           0,
                                           ];
                    func989.variableArities = [
                                               false,
                                               ];
                    obj954.methods["sendBackward"] = func989;
                    var func992 = function(argcv) {    // method sendToFront
                        var curarg = 1;
                        if (argcv[0] !=  func992.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method sendToFront is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 616
                            onSelf = true;
                            var call993 = callmethod(this, "canvas", [0]);
                            var call994 = callmethod(call993,"sendToFront", [1], this);
                            return call994
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func992.paramCounts = [
                                           0,
                                           ];
                    func992.variableArities = [
                                               false,
                                               ];
                    obj954.methods["sendToFront"] = func992;
                    var func995 = function(argcv) {    // method sendToBack
                        var curarg = 1;
                        if (argcv[0] !=  func995.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method sendToBack is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 621
                            onSelf = true;
                            var call996 = callmethod(this, "canvas", [0]);
                            var call997 = callmethod(call996,"sendToBack", [1], this);
                            return call997
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func995.paramCounts = [
                                           0,
                                           ];
                    func995.variableArities = [
                                               false,
                                               ];
                    obj954.methods["sendToBack"] = func995;
                    var func998 = function(argcv) {    // method setStateChanged
                        var curarg = 1;
                        if (argcv[0] !=  func998.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method setStateChanged is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 626
                            onSelf = true;
                            var call999 = callmethod(this, "canvas", [0]);
                            var call1000 = callmethod(call999,"setStateChanged", [0]);
                            return call1000
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func998.confidential = true;
                    func998.paramCounts = [
                                           0,
                                           ];
                    func998.variableArities = [
                                               false,
                                               ];
                    obj954.methods["setStateChanged"] = func998;
                    var func1001 = function(argcv) {    // method draw(1)
                        var curarg = 1;
                        var var_ctx = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func1001.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method draw(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            return undefined
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1001.paramCounts = [
                                            1,
                                            ];
                    func1001.variableArities = [
                                                false,
                                                ];
                    obj954.methods["draw"] = func1001;
                    var func1002 = function(argcv) {    // method asString
                        var curarg = 1;
                        if (argcv[0] !=  func1002.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method asString is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 633
                            var string1003 = new GraceString("GraphicObject object");
                            return string1003
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1002.paramCounts = [
                                            0,
                                            ];
                    func1002.variableArities = [
                                                false,
                                                ];
                    obj954.methods["asString"] = func1002;
                    sourceObject = obj954;
                    lineNumber = 547
                    obj954.data["location"] = var_location__39__;
                    var reader_objectdraw_location1004 = function() {
                        return this.data["location"];
                    }
                    obj954.methods["location"] = reader_objectdraw_location1004;
                    obj954.data["location"] = var_location__39__;
                    var writer_objectdraw_location1004 = function(argcv, o) {
                        this.data["location"] = o;
                    }
                    obj954.methods["location:="] = writer_objectdraw_location1004;
                    writer_objectdraw_location1004.confidential = true;
                    lineNumber = 547;
                    if (!Grace_isTrue(callmethod(var_Location, "match",
                                                 [1], var_location__39__)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'location' to be of type Location"))
                        obj954.mutable = true;
                    sourceObject = obj954;
                    sourceObject = obj954;
                    sourceObject = obj954;
                    lineNumber = 560
                    obj954.data["canvas"] = var_canvas__39__;
                    var reader_objectdraw_canvas1005 = function() {
                        return this.data["canvas"];
                    }
                    obj954.methods["canvas"] = reader_objectdraw_canvas1005;
                    obj954.data["canvas"] = var_canvas__39__;
                    var writer_objectdraw_canvas1005 = function(argcv, o) {
                        this.data["canvas"] = o;
                    }
                    obj954.methods["canvas:="] = writer_objectdraw_canvas1005;
                    writer_objectdraw_canvas1005.confidential = true;
                    lineNumber = 560;
                    if (!Grace_isTrue(callmethod(var_Canvas, "match",
                                                 [1], var_canvas__39__)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'canvas' to be of type Canvas"))
                        obj954.mutable = true;
                    sourceObject = obj954;
                    lineNumber = 563
                    obj954.data["theColor"] = var_black;
                    var reader_objectdraw_theColor1006 = function() {
                        return this.data["theColor"];
                    }
                    obj954.methods["theColor"] = reader_objectdraw_theColor1006;
                    obj954.data["theColor"] = var_black;
                    var writer_objectdraw_theColor1006 = function(argcv, o) {
                        this.data["theColor"] = o;
                    }
                    obj954.methods["theColor:="] = writer_objectdraw_theColor1006;
                    lineNumber = 563;
                    if (!Grace_isTrue(callmethod(var_GColor, "match",
                                                 [1], var_black)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'theColor' to be of type GColor"))
                        obj954.mutable = true;
                    sourceObject = obj954;
                    sourceObject = obj954;
                    sourceObject = obj954;
                    lineNumber = 571
                    obj954.data["theFrameColor"] = var_black;
                    var reader_objectdraw_theFrameColor1007 = function() {
                        return this.data["theFrameColor"];
                    }
                    obj954.methods["theFrameColor"] = reader_objectdraw_theFrameColor1007;
                    obj954.data["theFrameColor"] = var_black;
                    var writer_objectdraw_theFrameColor1007 = function(argcv, o) {
                        this.data["theFrameColor"] = o;
                    }
                    obj954.methods["theFrameColor:="] = writer_objectdraw_theFrameColor1007;
                    reader_objectdraw_theFrameColor1007.confidential = true;
                    writer_objectdraw_theFrameColor1007.confidential = true;
                    lineNumber = 571;
                    if (!Grace_isTrue(callmethod(var_GColor, "match",
                                                 [1], var_black)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'theFrameColor' to be of type GColor"))
                        obj954.mutable = true;
                    sourceObject = obj954;
                    sourceObject = obj954;
                    sourceObject = obj954;
                    lineNumber = 579
                    var bool1008 = new GraceBoolean(true)
                    obj954.data["isVisible"] = bool1008;
                    var reader_objectdraw_isVisible1009 = function() {
                        return this.data["isVisible"];
                    }
                    obj954.methods["isVisible"] = reader_objectdraw_isVisible1009;
                    obj954.data["isVisible"] = bool1008;
                    var writer_objectdraw_isVisible1009 = function(argcv, o) {
                        this.data["isVisible"] = o;
                    }
                    obj954.methods["isVisible:="] = writer_objectdraw_isVisible1009;
                    lineNumber = 579;
                    if (!Grace_isTrue(callmethod(var_Boolean, "match",
                                                 [1], bool1008)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'isVisible' to be of type Boolean"))
                        obj954.mutable = true;
                    sourceObject = obj954;
                    sourceObject = obj954;
                    sourceObject = obj954;
                    sourceObject = obj954;
                    sourceObject = obj954;
                    sourceObject = obj954;
                    sourceObject = obj954;
                    sourceObject = obj954;
                    sourceObject = obj954;
                    sourceObject = obj954;
                    sourceObject = obj954;
                    superDepth = origSuperDepth;
                }
                obj_init_954.apply(inheritingObject, []);
                return obj954
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        func953.paramTypes = [];
        func953.paramTypes.push([type_Location, "location'"]);
        func953.paramTypes.push([type_Canvas, "canvas'"]);
        obj894.methods["at()on()object"] = func953;
        sourceObject = obj894;
        superDepth = origSuperDepth;
    }
    obj_init_894.apply(obj894, []);
    var var_aDrawable = obj894;
    lineNumber = 1
    var func1010 = function(argcv) {    // method aDrawable2D
        var curarg = 1;
        if (argcv[0] !=  func1010.paramCounts[0]) // != 0
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method aDrawable2D is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            lineNumber = 638
            return var_aDrawable2D
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func1010.paramCounts = [
                            0,
                            ];
    func1010.variableArities = [
                                false,
                                ];
    this.methods["aDrawable2D"] = func1010;
    lineNumber = 1
    var obj1011 = Grace_allocObject();
    obj1011.outer = this;
    var reader_objectdraw_outer1012 = function() {
        return this.outer;
    }
    obj1011.methods["outer"] = reader_objectdraw_outer1012;
    function obj_init_1011() {
        var origSuperDepth = superDepth;
        superDepth = obj1011;
        var func1013 = function(argcv) {    // method at(1)size(2)on(1)
            var curarg = 1;
            var var_location__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1013.paramCounts[0]) // != 1
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method at(1)size(2)on(1) is of wrong size"));
            var var_width__39__ = arguments[curarg];
            curarg++;
            var var_height__39__ = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1013.paramCounts[1]) // != 2
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 2 to method at(1)size(2)on(1) is of wrong size"));
            var var_canvas__39__ = arguments[curarg];
            curarg++;
            if (argcv[2] !=  func1013.paramCounts[2]) // != 1
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 3 to method at(1)size(2)on(1) is of wrong size"));
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                var obj1014 = Grace_allocObject();
                obj1014.outer = this;
                var reader_objectdraw_outer1015 = function() {
                    return this.outer;
                }
                obj1014.methods["outer"] = reader_objectdraw_outer1015;
                function obj_init_1014() {
                    var origSuperDepth = superDepth;
                    superDepth = obj1014;
                    var func1016 = function(argcv) {    // method width
                        var curarg = 1;
                        if (argcv[0] !=  func1016.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method width is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 642
                            onSelf = true;
                            var call1017 = callmethod(this, "theWidth", [0]);
                            return call1017
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1016.paramCounts = [
                                            0,
                                            ];
                    func1016.variableArities = [
                                                false,
                                                ];
                    obj1014.methods["width"] = func1016;
                    var func1018 = function(argcv) {    // method height
                        var curarg = 1;
                        if (argcv[0] !=  func1018.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method height is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 644
                            onSelf = true;
                            var call1019 = callmethod(this, "theHeight", [0]);
                            return call1019
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1018.paramCounts = [
                                            0,
                                            ];
                    func1018.variableArities = [
                                                false,
                                                ];
                    obj1014.methods["height"] = func1018;
                    var func1020 = function(argcv) {    // method contains(1)
                        var curarg = 1;
                        var var_locn = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func1020.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method contains(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 647
                            onSelf = true;
                            var call1021 = callmethod(this, "x", [0]);
                            lineNumber = 647
                            var call1022 = callmethod(var_locn,"x", [0]);
                            var opresult1024 = callmethod(call1021, "<=", [1], call1022);
                            lineNumber = 647
                            var call1025 = callmethod(var_locn,"x", [0]);
                            onSelf = true;
                            var call1026 = callmethod(this, "x", [0]);
                            onSelf = true;
                            var call1027 = callmethod(this, "width", [0]);
                            var opresult1029 = callmethod(call1026, "+", [1], call1027);
                            var opresult1031 = callmethod(call1025, "<=", [1], opresult1029);
                            var opresult1033 = callmethod(opresult1024, "&&", [1], opresult1031);
                            lineNumber = 648
                            onSelf = true;
                            var call1034 = callmethod(this, "y", [0]);
                            lineNumber = 648
                            var call1035 = callmethod(var_locn,"y", [0]);
                            var opresult1037 = callmethod(call1034, "<=", [1], call1035);
                            var opresult1039 = callmethod(opresult1033, "&&", [1], opresult1037);
                            lineNumber = 648
                            var call1040 = callmethod(var_locn,"y", [0]);
                            onSelf = true;
                            var call1041 = callmethod(this, "y", [0]);
                            onSelf = true;
                            var call1042 = callmethod(this, "height", [0]);
                            var opresult1044 = callmethod(call1041, "+", [1], call1042);
                            var opresult1046 = callmethod(call1040, "<=", [1], opresult1044);
                            var opresult1048 = callmethod(opresult1039, "&&", [1], opresult1046);
                            return opresult1048
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1020.paramTypes = [];
                    func1020.paramTypes.push([type_Location, "locn"]);
                    func1020.paramCounts = [
                                            1,
                                            ];
                    func1020.variableArities = [
                                                false,
                                                ];
                    obj1014.methods["contains"] = func1020;
                    var func1049 = function(argcv) {    // method overlaps(1)
                        var curarg = 1;
                        var var_other = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func1049.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method overlaps(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 652
                            var call1050 = callmethod(var_other,"x", [0]);
                            var var_itemleft = call1050;
                            lineNumber = 652;
                            if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                         [1], var_itemleft)))
                                throw new GraceExceptionPacket(TypeErrorObject,
                                                               new GraceString("expected "
                                                                               + "initial value of def 'itemleft' to be of type Dynamic"))
                                lineNumber = 653
                                var call1051 = callmethod(var_other,"x", [0]);
                            lineNumber = 653
                            var call1052 = callmethod(var_other,"width", [0]);
                            var opresult1054 = callmethod(call1051, "+", [1], call1052);
                            var var_itemright = opresult1054;
                            lineNumber = 653;
                            if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                         [1], var_itemright)))
                                throw new GraceExceptionPacket(TypeErrorObject,
                                                               new GraceString("expected "
                                                                               + "initial value of def 'itemright' to be of type Dynamic"))
                                lineNumber = 654
                                var call1055 = callmethod(var_other,"y", [0]);
                            var var_itemtop = call1055;
                            lineNumber = 654;
                            if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                         [1], var_itemtop)))
                                throw new GraceExceptionPacket(TypeErrorObject,
                                                               new GraceString("expected "
                                                                               + "initial value of def 'itemtop' to be of type Dynamic"))
                                lineNumber = 655
                                var call1056 = callmethod(var_other,"y", [0]);
                            lineNumber = 655
                            var call1057 = callmethod(var_other,"height", [0]);
                            var opresult1059 = callmethod(call1056, "+", [1], call1057);
                            var var_itembottom = opresult1059;
                            lineNumber = 655;
                            if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                         [1], var_itembottom)))
                                throw new GraceExceptionPacket(TypeErrorObject,
                                                               new GraceString("expected "
                                                                               + "initial value of def 'itembottom' to be of type Dynamic"))
                                lineNumber = 656
                                onSelf = true;
                            var call1060 = callmethod(this, "x", [0]);
                            onSelf = true;
                            var call1061 = callmethod(this, "width", [0]);
                            var opresult1063 = callmethod(call1060, "+", [1], call1061);
                            var opresult1065 = callmethod(opresult1063, "<", [1], var_itemleft);
                            onSelf = true;
                            var call1066 = callmethod(this, "x", [0]);
                            var opresult1068 = callmethod(var_itemright, "<", [1], call1066);
                            var opresult1070 = callmethod(opresult1065, "||", [1], opresult1068);
                            lineNumber = 657
                            onSelf = true;
                            var call1071 = callmethod(this, "y", [0]);
                            onSelf = true;
                            var call1072 = callmethod(this, "height", [0]);
                            var opresult1074 = callmethod(call1071, "+", [1], call1072);
                            var opresult1076 = callmethod(opresult1074, "<", [1], var_itemtop);
                            var opresult1078 = callmethod(opresult1070, "||", [1], opresult1076);
                            onSelf = true;
                            var call1079 = callmethod(this, "y", [0]);
                            var opresult1081 = callmethod(var_itembottom, "<", [1], call1079);
                            var opresult1083 = callmethod(opresult1078, "||", [1], opresult1081);
                            var var_disjoint = opresult1083;
                            lineNumber = 656;
                            if (!Grace_isTrue(callmethod(var_Boolean, "match",
                                                         [1], var_disjoint)))
                                throw new GraceExceptionPacket(TypeErrorObject,
                                                               new GraceString("expected "
                                                                               + "initial value of def 'disjoint' to be of type Boolean"))
                                lineNumber = 658
                                var call1084 = callmethod(var_disjoint,"prefix!", [0]);
                            return call1084
                            return undefined
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1049.paramTypes = [];
                    func1049.paramTypes.push([type_Graphic2DObject, "other"]);
                    func1049.paramCounts = [
                                            1,
                                            ];
                    func1049.variableArities = [
                                                false,
                                                ];
                    obj1014.methods["overlaps"] = func1049;
                    var func1085 = function(argcv) {    // method asString
                        var curarg = 1;
                        if (argcv[0] !=  func1085.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method asString is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 662
                            var string1086 = new GraceString("aDrawable2D object at (");
                            onSelf = true;
                            var call1087 = callmethod(this, "x", [0]);
                            var opresult1089 = callmethod(string1086, "++", [1], call1087);
                            var string1090 = new GraceString(",");
                            var opresult1092 = callmethod(opresult1089, "++", [1], string1090);
                            onSelf = true;
                            var call1093 = callmethod(this, "y", [0]);
                            var opresult1095 = callmethod(opresult1092, "++", [1], call1093);
                            var string1096 = new GraceString(") ");
                            var opresult1098 = callmethod(opresult1095, "++", [1], string1096);
                            lineNumber = 663
                            var string1099 = new GraceString("with height ");
                            onSelf = true;
                            var call1100 = callmethod(this, "height", [0]);
                            var opresult1102 = callmethod(string1099, "++", [1], call1100);
                            var string1103 = new GraceString(", width ");
                            var opresult1105 = callmethod(opresult1102, "++", [1], string1103);
                            onSelf = true;
                            var call1106 = callmethod(this, "width", [0]);
                            var opresult1108 = callmethod(opresult1105, "++", [1], call1106);
                            var string1109 = new GraceString(", and color ");
                            var opresult1111 = callmethod(opresult1108, "++", [1], string1109);
                            onSelf = true;
                            var call1112 = callmethod(this, "color", [0]);
                            var opresult1114 = callmethod(opresult1111, "++", [1], call1112);
                            var string1115 = new GraceString("");
                            var opresult1117 = callmethod(opresult1114, "++", [1], string1115);
                            var opresult1119 = callmethod(opresult1098, "++", [1], opresult1117);
                            return opresult1119
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1085.paramCounts = [
                                            0,
                                            ];
                    func1085.variableArities = [
                                                false,
                                                ];
                    obj1014.methods["asString"] = func1085;
                    sourceObject = obj1014;
                    lineNumber = 640
                    var call1120 = callmethod(var_aDrawable,"at()on()object", [1, 1, 1], var_location__39__, var_canvas__39__, this);
                    obj1014.superobj = call1120;
                    obj1014._value = call1120._value;
                    sourceObject = obj1014;
                    lineNumber = 641
                    obj1014.data["theWidth"] = var_width__39__;
                    var reader_objectdraw_theWidth1121 = function() {
                        return this.data["theWidth"];
                    }
                    obj1014.methods["theWidth"] = reader_objectdraw_theWidth1121;
                    obj1014.data["theWidth"] = var_width__39__;
                    var writer_objectdraw_theWidth1121 = function(argcv, o) {
                        this.data["theWidth"] = o;
                    }
                    obj1014.methods["theWidth:="] = writer_objectdraw_theWidth1121;
                    lineNumber = 641;
                    if (!Grace_isTrue(callmethod(var_Number, "match",
                                                 [1], var_width__39__)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'theWidth' to be of type Number"))
                        obj1014.mutable = true;
                    sourceObject = obj1014;
                    sourceObject = obj1014;
                    lineNumber = 643
                    obj1014.data["theHeight"] = var_height__39__;
                    var reader_objectdraw_theHeight1122 = function() {
                        return this.data["theHeight"];
                    }
                    obj1014.methods["theHeight"] = reader_objectdraw_theHeight1122;
                    obj1014.data["theHeight"] = var_height__39__;
                    var writer_objectdraw_theHeight1122 = function(argcv, o) {
                        this.data["theHeight"] = o;
                    }
                    obj1014.methods["theHeight:="] = writer_objectdraw_theHeight1122;
                    lineNumber = 643;
                    if (!Grace_isTrue(callmethod(var_Number, "match",
                                                 [1], var_height__39__)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'theHeight' to be of type Number"))
                        obj1014.mutable = true;
                    sourceObject = obj1014;
                    sourceObject = obj1014;
                    sourceObject = obj1014;
                    sourceObject = obj1014;
                    superDepth = origSuperDepth;
                }
                obj_init_1014.apply(obj1014, []);
                return obj1014
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        func1013.paramTypes = [];
        func1013.paramTypes.push([type_Location, "location'"]);
        func1013.paramTypes.push([type_Number, "width'"]);
        func1013.paramTypes.push([type_Number, "height'"]);
        func1013.paramTypes.push([type_Canvas, "canvas'"]);
        func1013.paramCounts = [
                                1,
                                2,
                                1,
                                ];
        func1013.variableArities = [
                                    false,
                                    false,
                                    false,
                                    ];
        obj1011.methods["at()size()on"] = func1013;
        var func1123 = function(argcv) {
            var curarg = 1;
            var var_location__39__ = arguments[curarg];
            curarg++;
            var var_width__39__ = arguments[curarg];
            curarg++;
            var var_height__39__ = arguments[curarg];
            curarg++;
            var var_canvas__39__ = arguments[curarg];
            curarg++;
            var inheritingObject = arguments[curarg++];
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                var obj1124 = Grace_allocObject();
                var inho1124 = inheritingObject;
                while (inho1124.superobj) inho1124 = inho1124.superobj;
                inho1124.superobj = obj1124;
                obj1124.data = inheritingObject.data;
                obj1124.outer = this;
                var reader_objectdraw_outer1125 = function() {
                    return this.outer;
                }
                obj1124.methods["outer"] = reader_objectdraw_outer1125;
                function obj_init_1124() {
                    var origSuperDepth = superDepth;
                    superDepth = obj1124;
                    var func1126 = function(argcv) {    // method width
                        var curarg = 1;
                        if (argcv[0] !=  func1126.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method width is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 642
                            onSelf = true;
                            var call1127 = callmethod(this, "theWidth", [0]);
                            return call1127
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1126.paramCounts = [
                                            0,
                                            ];
                    func1126.variableArities = [
                                                false,
                                                ];
                    obj1124.methods["width"] = func1126;
                    var func1128 = function(argcv) {    // method height
                        var curarg = 1;
                        if (argcv[0] !=  func1128.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method height is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 644
                            onSelf = true;
                            var call1129 = callmethod(this, "theHeight", [0]);
                            return call1129
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1128.paramCounts = [
                                            0,
                                            ];
                    func1128.variableArities = [
                                                false,
                                                ];
                    obj1124.methods["height"] = func1128;
                    var func1130 = function(argcv) {    // method contains(1)
                        var curarg = 1;
                        var var_locn = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func1130.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method contains(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 647
                            onSelf = true;
                            var call1131 = callmethod(this, "x", [0]);
                            lineNumber = 647
                            var call1132 = callmethod(var_locn,"x", [0]);
                            var opresult1134 = callmethod(call1131, "<=", [1], call1132);
                            lineNumber = 647
                            var call1135 = callmethod(var_locn,"x", [0]);
                            onSelf = true;
                            var call1136 = callmethod(this, "x", [0]);
                            onSelf = true;
                            var call1137 = callmethod(this, "width", [0]);
                            var opresult1139 = callmethod(call1136, "+", [1], call1137);
                            var opresult1141 = callmethod(call1135, "<=", [1], opresult1139);
                            var opresult1143 = callmethod(opresult1134, "&&", [1], opresult1141);
                            lineNumber = 648
                            onSelf = true;
                            var call1144 = callmethod(this, "y", [0]);
                            lineNumber = 648
                            var call1145 = callmethod(var_locn,"y", [0]);
                            var opresult1147 = callmethod(call1144, "<=", [1], call1145);
                            var opresult1149 = callmethod(opresult1143, "&&", [1], opresult1147);
                            lineNumber = 648
                            var call1150 = callmethod(var_locn,"y", [0]);
                            onSelf = true;
                            var call1151 = callmethod(this, "y", [0]);
                            onSelf = true;
                            var call1152 = callmethod(this, "height", [0]);
                            var opresult1154 = callmethod(call1151, "+", [1], call1152);
                            var opresult1156 = callmethod(call1150, "<=", [1], opresult1154);
                            var opresult1158 = callmethod(opresult1149, "&&", [1], opresult1156);
                            return opresult1158
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1130.paramTypes = [];
                    func1130.paramTypes.push([type_Location, "locn"]);
                    func1130.paramCounts = [
                                            1,
                                            ];
                    func1130.variableArities = [
                                                false,
                                                ];
                    obj1124.methods["contains"] = func1130;
                    var func1159 = function(argcv) {    // method overlaps(1)
                        var curarg = 1;
                        var var_other = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func1159.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method overlaps(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 652
                            var call1160 = callmethod(var_other,"x", [0]);
                            var var_itemleft = call1160;
                            lineNumber = 652;
                            if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                         [1], var_itemleft)))
                                throw new GraceExceptionPacket(TypeErrorObject,
                                                               new GraceString("expected "
                                                                               + "initial value of def 'itemleft' to be of type Dynamic"))
                                lineNumber = 653
                                var call1161 = callmethod(var_other,"x", [0]);
                            lineNumber = 653
                            var call1162 = callmethod(var_other,"width", [0]);
                            var opresult1164 = callmethod(call1161, "+", [1], call1162);
                            var var_itemright = opresult1164;
                            lineNumber = 653;
                            if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                         [1], var_itemright)))
                                throw new GraceExceptionPacket(TypeErrorObject,
                                                               new GraceString("expected "
                                                                               + "initial value of def 'itemright' to be of type Dynamic"))
                                lineNumber = 654
                                var call1165 = callmethod(var_other,"y", [0]);
                            var var_itemtop = call1165;
                            lineNumber = 654;
                            if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                         [1], var_itemtop)))
                                throw new GraceExceptionPacket(TypeErrorObject,
                                                               new GraceString("expected "
                                                                               + "initial value of def 'itemtop' to be of type Dynamic"))
                                lineNumber = 655
                                var call1166 = callmethod(var_other,"y", [0]);
                            lineNumber = 655
                            var call1167 = callmethod(var_other,"height", [0]);
                            var opresult1169 = callmethod(call1166, "+", [1], call1167);
                            var var_itembottom = opresult1169;
                            lineNumber = 655;
                            if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                         [1], var_itembottom)))
                                throw new GraceExceptionPacket(TypeErrorObject,
                                                               new GraceString("expected "
                                                                               + "initial value of def 'itembottom' to be of type Dynamic"))
                                lineNumber = 656
                                onSelf = true;
                            var call1170 = callmethod(this, "x", [0]);
                            onSelf = true;
                            var call1171 = callmethod(this, "width", [0]);
                            var opresult1173 = callmethod(call1170, "+", [1], call1171);
                            var opresult1175 = callmethod(opresult1173, "<", [1], var_itemleft);
                            onSelf = true;
                            var call1176 = callmethod(this, "x", [0]);
                            var opresult1178 = callmethod(var_itemright, "<", [1], call1176);
                            var opresult1180 = callmethod(opresult1175, "||", [1], opresult1178);
                            lineNumber = 657
                            onSelf = true;
                            var call1181 = callmethod(this, "y", [0]);
                            onSelf = true;
                            var call1182 = callmethod(this, "height", [0]);
                            var opresult1184 = callmethod(call1181, "+", [1], call1182);
                            var opresult1186 = callmethod(opresult1184, "<", [1], var_itemtop);
                            var opresult1188 = callmethod(opresult1180, "||", [1], opresult1186);
                            onSelf = true;
                            var call1189 = callmethod(this, "y", [0]);
                            var opresult1191 = callmethod(var_itembottom, "<", [1], call1189);
                            var opresult1193 = callmethod(opresult1188, "||", [1], opresult1191);
                            var var_disjoint = opresult1193;
                            lineNumber = 656;
                            if (!Grace_isTrue(callmethod(var_Boolean, "match",
                                                         [1], var_disjoint)))
                                throw new GraceExceptionPacket(TypeErrorObject,
                                                               new GraceString("expected "
                                                                               + "initial value of def 'disjoint' to be of type Boolean"))
                                lineNumber = 658
                                var call1194 = callmethod(var_disjoint,"prefix!", [0]);
                            return call1194
                            return undefined
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1159.paramTypes = [];
                    func1159.paramTypes.push([type_Graphic2DObject, "other"]);
                    func1159.paramCounts = [
                                            1,
                                            ];
                    func1159.variableArities = [
                                                false,
                                                ];
                    obj1124.methods["overlaps"] = func1159;
                    var func1195 = function(argcv) {    // method asString
                        var curarg = 1;
                        if (argcv[0] !=  func1195.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method asString is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 662
                            var string1196 = new GraceString("aDrawable2D object at (");
                            onSelf = true;
                            var call1197 = callmethod(this, "x", [0]);
                            var opresult1199 = callmethod(string1196, "++", [1], call1197);
                            var string1200 = new GraceString(",");
                            var opresult1202 = callmethod(opresult1199, "++", [1], string1200);
                            onSelf = true;
                            var call1203 = callmethod(this, "y", [0]);
                            var opresult1205 = callmethod(opresult1202, "++", [1], call1203);
                            var string1206 = new GraceString(") ");
                            var opresult1208 = callmethod(opresult1205, "++", [1], string1206);
                            lineNumber = 663
                            var string1209 = new GraceString("with height ");
                            onSelf = true;
                            var call1210 = callmethod(this, "height", [0]);
                            var opresult1212 = callmethod(string1209, "++", [1], call1210);
                            var string1213 = new GraceString(", width ");
                            var opresult1215 = callmethod(opresult1212, "++", [1], string1213);
                            onSelf = true;
                            var call1216 = callmethod(this, "width", [0]);
                            var opresult1218 = callmethod(opresult1215, "++", [1], call1216);
                            var string1219 = new GraceString(", and color ");
                            var opresult1221 = callmethod(opresult1218, "++", [1], string1219);
                            onSelf = true;
                            var call1222 = callmethod(this, "color", [0]);
                            var opresult1224 = callmethod(opresult1221, "++", [1], call1222);
                            var string1225 = new GraceString("");
                            var opresult1227 = callmethod(opresult1224, "++", [1], string1225);
                            var opresult1229 = callmethod(opresult1208, "++", [1], opresult1227);
                            return opresult1229
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1195.paramCounts = [
                                            0,
                                            ];
                    func1195.variableArities = [
                                                false,
                                                ];
                    obj1124.methods["asString"] = func1195;
                    sourceObject = obj1124;
                    lineNumber = 640
                    var call1230 = callmethod(var_aDrawable,"at()on()object", [1, 1, 1], var_location__39__, var_canvas__39__, this);
                    obj1124.superobj = call1230;
                    obj1124._value = call1230._value;
                    sourceObject = obj1124;
                    lineNumber = 641
                    obj1124.data["theWidth"] = var_width__39__;
                    var reader_objectdraw_theWidth1231 = function() {
                        return this.data["theWidth"];
                    }
                    obj1124.methods["theWidth"] = reader_objectdraw_theWidth1231;
                    obj1124.data["theWidth"] = var_width__39__;
                    var writer_objectdraw_theWidth1231 = function(argcv, o) {
                        this.data["theWidth"] = o;
                    }
                    obj1124.methods["theWidth:="] = writer_objectdraw_theWidth1231;
                    lineNumber = 641;
                    if (!Grace_isTrue(callmethod(var_Number, "match",
                                                 [1], var_width__39__)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'theWidth' to be of type Number"))
                        obj1124.mutable = true;
                    sourceObject = obj1124;
                    sourceObject = obj1124;
                    lineNumber = 643
                    obj1124.data["theHeight"] = var_height__39__;
                    var reader_objectdraw_theHeight1232 = function() {
                        return this.data["theHeight"];
                    }
                    obj1124.methods["theHeight"] = reader_objectdraw_theHeight1232;
                    obj1124.data["theHeight"] = var_height__39__;
                    var writer_objectdraw_theHeight1232 = function(argcv, o) {
                        this.data["theHeight"] = o;
                    }
                    obj1124.methods["theHeight:="] = writer_objectdraw_theHeight1232;
                    lineNumber = 643;
                    if (!Grace_isTrue(callmethod(var_Number, "match",
                                                 [1], var_height__39__)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'theHeight' to be of type Number"))
                        obj1124.mutable = true;
                    sourceObject = obj1124;
                    sourceObject = obj1124;
                    sourceObject = obj1124;
                    sourceObject = obj1124;
                    superDepth = origSuperDepth;
                }
                obj_init_1124.apply(inheritingObject, []);
                return obj1124
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        func1123.paramTypes = [];
        func1123.paramTypes.push([type_Location, "location'"]);
        func1123.paramTypes.push([type_Number, "width'"]);
        func1123.paramTypes.push([type_Number, "height'"]);
        func1123.paramTypes.push([type_Canvas, "canvas'"]);
        obj1011.methods["at()size()on()object"] = func1123;
        sourceObject = obj1011;
        superDepth = origSuperDepth;
    }
    obj_init_1011.apply(obj1011, []);
    var var_aDrawable2D = obj1011;
    lineNumber = 1
    var func1233 = function(argcv) {    // method aResizable2D
        var curarg = 1;
        if (argcv[0] !=  func1233.paramCounts[0]) // != 0
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method aResizable2D is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            lineNumber = 669
            return var_aResizable2D
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func1233.paramCounts = [
                            0,
                            ];
    func1233.variableArities = [
                                false,
                                ];
    this.methods["aResizable2D"] = func1233;
    lineNumber = 1
    var obj1234 = Grace_allocObject();
    obj1234.outer = this;
    var reader_objectdraw_outer1235 = function() {
        return this.outer;
    }
    obj1234.methods["outer"] = reader_objectdraw_outer1235;
    function obj_init_1234() {
        var origSuperDepth = superDepth;
        superDepth = obj1234;
        var func1236 = function(argcv) {    // method at(1)size(2)on(1)
            var curarg = 1;
            var var_location__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1236.paramCounts[0]) // != 1
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method at(1)size(2)on(1) is of wrong size"));
            var var_width__39__ = arguments[curarg];
            curarg++;
            var var_height__39__ = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1236.paramCounts[1]) // != 2
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 2 to method at(1)size(2)on(1) is of wrong size"));
            var var_canvas__39__ = arguments[curarg];
            curarg++;
            if (argcv[2] !=  func1236.paramCounts[2]) // != 1
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 3 to method at(1)size(2)on(1) is of wrong size"));
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                var obj1237 = Grace_allocObject();
                obj1237.outer = this;
                var reader_objectdraw_outer1238 = function() {
                    return this.outer;
                }
                obj1237.methods["outer"] = reader_objectdraw_outer1238;
                function obj_init_1237() {
                    var origSuperDepth = superDepth;
                    superDepth = obj1237;
                    var func1239 = function(argcv) {    // method width:=(1)
                        var curarg = 1;
                        var var_w = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func1239.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method width:=(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 674
                            onSelf = true;
                            var call1240 = callmethod(this, "theWidth:=", [1], var_w);
                            lineNumber = 675
                            onSelf = true;
                            var call1241 = callmethod(this, "setStateChanged", [0]);
                            return call1241
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1239.paramTypes = [];
                    func1239.paramTypes.push([type_Number, "w"]);
                    func1239.paramCounts = [
                                            1,
                                            ];
                    func1239.variableArities = [
                                                false,
                                                ];
                    obj1237.methods["width:="] = func1239;
                    var func1242 = function(argcv) {    // method height:=(1)
                        var curarg = 1;
                        var var_h = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func1242.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method height:=(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 679
                            onSelf = true;
                            var call1243 = callmethod(this, "theHeight:=", [1], var_h);
                            lineNumber = 680
                            onSelf = true;
                            var call1244 = callmethod(this, "setStateChanged", [0]);
                            return call1244
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1242.paramTypes = [];
                    func1242.paramTypes.push([type_Number, "h"]);
                    func1242.paramCounts = [
                                            1,
                                            ];
                    func1242.variableArities = [
                                                false,
                                                ];
                    obj1237.methods["height:="] = func1242;
                    var func1245 = function(argcv) {    // method setSize(2)
                        var curarg = 1;
                        var var_w = arguments[curarg];
                        curarg++;
                        var var_h = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func1245.paramCounts[0]) // != 2
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method setSize(2) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 684
                            onSelf = true;
                            var call1246 = callmethod(this, "width:=", [1], var_w);
                            lineNumber = 685
                            onSelf = true;
                            var call1247 = callmethod(this, "height:=", [1], var_h);
                            return call1247
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1245.paramTypes = [];
                    func1245.paramTypes.push([type_Number, "w"]);
                    func1245.paramTypes.push([type_Number, "h"]);
                    func1245.paramCounts = [
                                            2,
                                            ];
                    func1245.variableArities = [
                                                false,
                                                ];
                    obj1237.methods["setSize"] = func1245;
                    var func1248 = function(argcv) {    // method asString
                        var curarg = 1;
                        if (argcv[0] !=  func1248.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method asString is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 689
                            var string1249 = new GraceString("Resizable2D object at (");
                            onSelf = true;
                            var call1250 = callmethod(this, "x", [0]);
                            var opresult1252 = callmethod(string1249, "++", [1], call1250);
                            var string1253 = new GraceString(",");
                            var opresult1255 = callmethod(opresult1252, "++", [1], string1253);
                            onSelf = true;
                            var call1256 = callmethod(this, "y", [0]);
                            var opresult1258 = callmethod(opresult1255, "++", [1], call1256);
                            var string1259 = new GraceString(") ");
                            var opresult1261 = callmethod(opresult1258, "++", [1], string1259);
                            lineNumber = 690
                            var string1262 = new GraceString("with height ");
                            onSelf = true;
                            var call1263 = callmethod(this, "height", [0]);
                            var opresult1265 = callmethod(string1262, "++", [1], call1263);
                            var string1266 = new GraceString(", width ");
                            var opresult1268 = callmethod(opresult1265, "++", [1], string1266);
                            onSelf = true;
                            var call1269 = callmethod(this, "width", [0]);
                            var opresult1271 = callmethod(opresult1268, "++", [1], call1269);
                            var string1272 = new GraceString(", and color ");
                            var opresult1274 = callmethod(opresult1271, "++", [1], string1272);
                            onSelf = true;
                            var call1275 = callmethod(this, "color", [0]);
                            var opresult1277 = callmethod(opresult1274, "++", [1], call1275);
                            var string1278 = new GraceString("");
                            var opresult1280 = callmethod(opresult1277, "++", [1], string1278);
                            var opresult1282 = callmethod(opresult1261, "++", [1], opresult1280);
                            return opresult1282
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1248.paramCounts = [
                                            0,
                                            ];
                    func1248.variableArities = [
                                                false,
                                                ];
                    obj1237.methods["asString"] = func1248;
                    sourceObject = obj1237;
                    lineNumber = 671
                    var call1283 = callmethod(var_aDrawable2D,"at()size()on()object", [1, 2, 1, 1], var_location__39__, var_width__39__, var_height__39__, var_canvas__39__, this);
                    obj1237.superobj = call1283;
                    obj1237._value = call1283._value;
                    sourceObject = obj1237;
                    sourceObject = obj1237;
                    sourceObject = obj1237;
                    sourceObject = obj1237;
                    superDepth = origSuperDepth;
                }
                obj_init_1237.apply(obj1237, []);
                return obj1237
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        func1236.paramTypes = [];
        func1236.paramTypes.push([type_Location, "location'"]);
        func1236.paramTypes.push([type_Number, "width'"]);
        func1236.paramTypes.push([type_Number, "height'"]);
        func1236.paramTypes.push([type_Canvas, "canvas'"]);
        func1236.paramCounts = [
                                1,
                                2,
                                1,
                                ];
        func1236.variableArities = [
                                    false,
                                    false,
                                    false,
                                    ];
        obj1234.methods["at()size()on"] = func1236;
        var func1284 = function(argcv) {
            var curarg = 1;
            var var_location__39__ = arguments[curarg];
            curarg++;
            var var_width__39__ = arguments[curarg];
            curarg++;
            var var_height__39__ = arguments[curarg];
            curarg++;
            var var_canvas__39__ = arguments[curarg];
            curarg++;
            var inheritingObject = arguments[curarg++];
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                var obj1285 = Grace_allocObject();
                var inho1285 = inheritingObject;
                while (inho1285.superobj) inho1285 = inho1285.superobj;
                inho1285.superobj = obj1285;
                obj1285.data = inheritingObject.data;
                obj1285.outer = this;
                var reader_objectdraw_outer1286 = function() {
                    return this.outer;
                }
                obj1285.methods["outer"] = reader_objectdraw_outer1286;
                function obj_init_1285() {
                    var origSuperDepth = superDepth;
                    superDepth = obj1285;
                    var func1287 = function(argcv) {    // method width:=(1)
                        var curarg = 1;
                        var var_w = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func1287.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method width:=(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 674
                            onSelf = true;
                            var call1288 = callmethod(this, "theWidth:=", [1], var_w);
                            lineNumber = 675
                            onSelf = true;
                            var call1289 = callmethod(this, "setStateChanged", [0]);
                            return call1289
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1287.paramTypes = [];
                    func1287.paramTypes.push([type_Number, "w"]);
                    func1287.paramCounts = [
                                            1,
                                            ];
                    func1287.variableArities = [
                                                false,
                                                ];
                    obj1285.methods["width:="] = func1287;
                    var func1290 = function(argcv) {    // method height:=(1)
                        var curarg = 1;
                        var var_h = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func1290.paramCounts[0]) // != 1
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method height:=(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 679
                            onSelf = true;
                            var call1291 = callmethod(this, "theHeight:=", [1], var_h);
                            lineNumber = 680
                            onSelf = true;
                            var call1292 = callmethod(this, "setStateChanged", [0]);
                            return call1292
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1290.paramTypes = [];
                    func1290.paramTypes.push([type_Number, "h"]);
                    func1290.paramCounts = [
                                            1,
                                            ];
                    func1290.variableArities = [
                                                false,
                                                ];
                    obj1285.methods["height:="] = func1290;
                    var func1293 = function(argcv) {    // method setSize(2)
                        var curarg = 1;
                        var var_w = arguments[curarg];
                        curarg++;
                        var var_h = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func1293.paramCounts[0]) // != 2
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method setSize(2) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 684
                            onSelf = true;
                            var call1294 = callmethod(this, "width:=", [1], var_w);
                            lineNumber = 685
                            onSelf = true;
                            var call1295 = callmethod(this, "height:=", [1], var_h);
                            return call1295
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1293.paramTypes = [];
                    func1293.paramTypes.push([type_Number, "w"]);
                    func1293.paramTypes.push([type_Number, "h"]);
                    func1293.paramCounts = [
                                            2,
                                            ];
                    func1293.variableArities = [
                                                false,
                                                ];
                    obj1285.methods["setSize"] = func1293;
                    var func1296 = function(argcv) {    // method asString
                        var curarg = 1;
                        if (argcv[0] !=  func1296.paramCounts[0]) // != 0
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method asString is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 689
                            var string1297 = new GraceString("Resizable2D object at (");
                            onSelf = true;
                            var call1298 = callmethod(this, "x", [0]);
                            var opresult1300 = callmethod(string1297, "++", [1], call1298);
                            var string1301 = new GraceString(",");
                            var opresult1303 = callmethod(opresult1300, "++", [1], string1301);
                            onSelf = true;
                            var call1304 = callmethod(this, "y", [0]);
                            var opresult1306 = callmethod(opresult1303, "++", [1], call1304);
                            var string1307 = new GraceString(") ");
                            var opresult1309 = callmethod(opresult1306, "++", [1], string1307);
                            lineNumber = 690
                            var string1310 = new GraceString("with height ");
                            onSelf = true;
                            var call1311 = callmethod(this, "height", [0]);
                            var opresult1313 = callmethod(string1310, "++", [1], call1311);
                            var string1314 = new GraceString(", width ");
                            var opresult1316 = callmethod(opresult1313, "++", [1], string1314);
                            onSelf = true;
                            var call1317 = callmethod(this, "width", [0]);
                            var opresult1319 = callmethod(opresult1316, "++", [1], call1317);
                            var string1320 = new GraceString(", and color ");
                            var opresult1322 = callmethod(opresult1319, "++", [1], string1320);
                            onSelf = true;
                            var call1323 = callmethod(this, "color", [0]);
                            var opresult1325 = callmethod(opresult1322, "++", [1], call1323);
                            var string1326 = new GraceString("");
                            var opresult1328 = callmethod(opresult1325, "++", [1], string1326);
                            var opresult1330 = callmethod(opresult1309, "++", [1], opresult1328);
                            return opresult1330
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1296.paramCounts = [
                                            0,
                                            ];
                    func1296.variableArities = [
                                                false,
                                                ];
                    obj1285.methods["asString"] = func1296;
                    sourceObject = obj1285;
                    lineNumber = 671
                    var call1331 = callmethod(var_aDrawable2D,"at()size()on()object", [1, 2, 1, 1], var_location__39__, var_width__39__, var_height__39__, var_canvas__39__, this);
                    obj1285.superobj = call1331;
                    obj1285._value = call1331._value;
                    sourceObject = obj1285;
                    sourceObject = obj1285;
                    sourceObject = obj1285;
                    sourceObject = obj1285;
                    superDepth = origSuperDepth;
                }
                obj_init_1285.apply(inheritingObject, []);
                return obj1285
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        func1284.paramTypes = [];
        func1284.paramTypes.push([type_Location, "location'"]);
        func1284.paramTypes.push([type_Number, "width'"]);
        func1284.paramTypes.push([type_Number, "height'"]);
        func1284.paramTypes.push([type_Canvas, "canvas'"]);
        obj1234.methods["at()size()on()object"] = func1284;
        sourceObject = obj1234;
        superDepth = origSuperDepth;
    }
    obj_init_1234.apply(obj1234, []);
    var var_aResizable2D = obj1234;
    lineNumber = 1
    var func1332 = function(argcv) {    // method aFramedRect
        var curarg = 1;
        if (argcv[0] !=  func1332.paramCounts[0]) // != 0 
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method aFramedRect is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            lineNumber = 697
            return var_aFramedRect
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func1332.paramCounts = [
                            0,
                            ];
    func1332.variableArities = [
                                false,
                                ];
    this.methods["aFramedRect"] = func1332;
    lineNumber = 1
    var obj1333 = Grace_allocObject();
    obj1333.outer = this;
    var reader_objectdraw_outer1334 = function() {
        return this.outer;
    }
    obj1333.methods["outer"] = reader_objectdraw_outer1334;
    function obj_init_1333() {
        var origSuperDepth = superDepth;
        superDepth = obj1333;
        var func1335 = function(argcv) {    // method at(1)size(2)on(1)
            var curarg = 1;
            var var_location__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1335.paramCounts[0]) // != 1 
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method at(1)size(2)on(1) is of wrong size"));
            var var_width__39__ = arguments[curarg];
            curarg++;
            var var_height__39__ = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1335.paramCounts[1]) // != 2 
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 2 to method at(1)size(2)on(1) is of wrong size"));
            var var_canvas__39__ = arguments[curarg];
            curarg++;
            if (argcv[2] !=  func1335.paramCounts[2]) // != 1 
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 3 to method at(1)size(2)on(1) is of wrong size"));
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                var obj1336 = Grace_allocObject();
                obj1336.outer = this;
                var reader_objectdraw_outer1337 = function() {
                    return this.outer;
                }
                obj1336.methods["outer"] = reader_objectdraw_outer1337;
                function obj_init_1336() {
                    var origSuperDepth = superDepth;
                    superDepth = obj1336;
                    var func1338 = function(argcv) {    // method draw(1)
                        var curarg = 1;
                        var var_ctx = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func1338.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method draw(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 703
                            onSelf = true;
                            var call1339 = callmethod(this, "color", [0]);
                            var call1340 = callmethod(call1339,"red", [0]);
                            lineNumber = 703
                            onSelf = true;
                            var call1341 = callmethod(this, "color", [0]);
                            var call1342 = callmethod(call1341,"green", [0]);
                            lineNumber = 703
                            onSelf = true;
                            var call1343 = callmethod(this, "color", [0]);
                            var call1344 = callmethod(call1343,"blue", [0]);
                            var call1345 = callmethod(var_ctx,"set_source_rgb", [3], call1340, call1342, call1344);
                            lineNumber = 704
                            onSelf = true;
                            var call1346 = callmethod(this, "x", [0]);
                            onSelf = true;
                            var call1347 = callmethod(this, "y", [0]);
                            onSelf = true;
                            var call1348 = callmethod(this, "width", [0]);
                            onSelf = true;
                            var call1349 = callmethod(this, "height", [0]);
                            var call1350 = callmethod(var_ctx,"rectangle", [4], call1346, call1347, call1348, call1349);
                            lineNumber = 705
                            var call1351 = callmethod(var_ctx,"stroke", [0]);
                            return call1351
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1338.paramCounts = [
                                            1,
                                            ];
                    func1338.variableArities = [
                                                false,
                                                ];
                    obj1336.methods["draw"] = func1338;
                    var func1352 = function(argcv) {    // method asString
                        var curarg = 1;
                        if (argcv[0] !=  func1352.paramCounts[0]) // != 0 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method asString is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 709
                            var string1353 = new GraceString("FramedRect at (");
                            onSelf = true;
                            var call1354 = callmethod(this, "x", [0]);
                            var opresult1356 = callmethod(string1353, "++", [1], call1354);
                            var string1357 = new GraceString(",");
                            var opresult1359 = callmethod(opresult1356, "++", [1], string1357);
                            onSelf = true;
                            var call1360 = callmethod(this, "y", [0]);
                            var opresult1362 = callmethod(opresult1359, "++", [1], call1360);
                            var string1363 = new GraceString(") ");
                            var opresult1365 = callmethod(opresult1362, "++", [1], string1363);
                            lineNumber = 710
                            var string1366 = new GraceString("with height ");
                            onSelf = true;
                            var call1367 = callmethod(this, "height", [0]);
                            var opresult1369 = callmethod(string1366, "++", [1], call1367);
                            var string1370 = new GraceString(", width ");
                            var opresult1372 = callmethod(opresult1369, "++", [1], string1370);
                            onSelf = true;
                            var call1373 = callmethod(this, "width", [0]);
                            var opresult1375 = callmethod(opresult1372, "++", [1], call1373);
                            var string1376 = new GraceString(", and color ");
                            var opresult1378 = callmethod(opresult1375, "++", [1], string1376);
                            onSelf = true;
                            var call1379 = callmethod(this, "color", [0]);
                            var opresult1381 = callmethod(opresult1378, "++", [1], call1379);
                            var string1382 = new GraceString("");
                            var opresult1384 = callmethod(opresult1381, "++", [1], string1382);
                            var opresult1386 = callmethod(opresult1365, "++", [1], opresult1384);
                            return opresult1386
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1352.paramCounts = [
                                            0,
                                            ];
                    func1352.variableArities = [
                                                false,
                                                ];
                    obj1336.methods["asString"] = func1352;
                    var func1387 = function(argcv) {    // method ==(1)
                        var curarg = 1;
                        var var_other = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func1387.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method ==(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 715
                            onSelf = true;
                            var call1388 = callmethod(this, "asString", [0]);
                            lineNumber = 715
                            var call1389 = callmethod(var_other,"asString", [0]);
                            var opresult1391 = callmethod(call1388, "==", [1], call1389);
                            return opresult1391
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1387.paramCounts = [
                                            1,
                                            ];
                    func1387.variableArities = [
                                                false,
                                                ];
                    obj1336.methods["=="] = func1387;
                    sourceObject = obj1336;
                    lineNumber = 699
                    var call1392 = callmethod(var_aResizable2D,"at()size()on()object", [1, 2, 1, 1], var_location__39__, var_width__39__, var_height__39__, var_canvas__39__, this);
                    obj1336.superobj = call1392;
                    obj1336._value = call1392._value;
                    sourceObject = obj1336;
                    lineNumber = 700
                    onSelf = true;
                    var call1393 = callmethod(this, "addToCanvas", [1], var_canvas__39__);
                    sourceObject = obj1336;
                    sourceObject = obj1336;
                    sourceObject = obj1336;
                    superDepth = origSuperDepth;
                }
                obj_init_1336.apply(obj1336, []);
                return obj1336
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        func1335.paramTypes = [];
        func1335.paramTypes.push([type_Location, "location'"]);
        func1335.paramTypes.push([type_Number, "width'"]);
        func1335.paramTypes.push([type_Number, "height'"]);
        func1335.paramTypes.push([type_Canvas, "canvas'"]);
        func1335.paramCounts = [
                                1,
                                2,
                                1,
                                ];
        func1335.variableArities = [
                                    false,
                                    false,
                                    false,
                                    ];
        obj1333.methods["at()size()on"] = func1335;
        var func1394 = function(argcv) {
            var curarg = 1;
            var var_location__39__ = arguments[curarg];
            curarg++;
            var var_width__39__ = arguments[curarg];
            curarg++;
            var var_height__39__ = arguments[curarg];
            curarg++;
            var var_canvas__39__ = arguments[curarg];
            curarg++;
            var inheritingObject = arguments[curarg++];
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                var obj1395 = Grace_allocObject();
                var inho1395 = inheritingObject;
                while (inho1395.superobj) inho1395 = inho1395.superobj;
                inho1395.superobj = obj1395;
                obj1395.data = inheritingObject.data;
                obj1395.outer = this;
                var reader_objectdraw_outer1396 = function() {
                    return this.outer;
                }
                obj1395.methods["outer"] = reader_objectdraw_outer1396;
                function obj_init_1395() {
                    var origSuperDepth = superDepth;
                    superDepth = obj1395;
                    var func1397 = function(argcv) {    // method draw(1)
                        var curarg = 1;
                        var var_ctx = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func1397.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method draw(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 703
                            onSelf = true;
                            var call1398 = callmethod(this, "color", [0]);
                            var call1399 = callmethod(call1398,"red", [0]);
                            lineNumber = 703
                            onSelf = true;
                            var call1400 = callmethod(this, "color", [0]);
                            var call1401 = callmethod(call1400,"green", [0]);
                            lineNumber = 703
                            onSelf = true;
                            var call1402 = callmethod(this, "color", [0]);
                            var call1403 = callmethod(call1402,"blue", [0]);
                            var call1404 = callmethod(var_ctx,"set_source_rgb", [3], call1399, call1401, call1403);
                            lineNumber = 704
                            onSelf = true;
                            var call1405 = callmethod(this, "x", [0]);
                            onSelf = true;
                            var call1406 = callmethod(this, "y", [0]);
                            onSelf = true;
                            var call1407 = callmethod(this, "width", [0]);
                            onSelf = true;
                            var call1408 = callmethod(this, "height", [0]);
                            var call1409 = callmethod(var_ctx,"rectangle", [4], call1405, call1406, call1407, call1408);
                            lineNumber = 705
                            var call1410 = callmethod(var_ctx,"stroke", [0]);
                            return call1410
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1397.paramCounts = [
                                            1,
                                            ];
                    func1397.variableArities = [
                                                false,
                                                ];
                    obj1395.methods["draw"] = func1397;
                    var func1411 = function(argcv) {    // method asString
                        var curarg = 1;
                        if (argcv[0] !=  func1411.paramCounts[0]) // != 0 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method asString is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 709
                            var string1412 = new GraceString("FramedRect at (");
                            onSelf = true;
                            var call1413 = callmethod(this, "x", [0]);
                            var opresult1415 = callmethod(string1412, "++", [1], call1413);
                            var string1416 = new GraceString(",");
                            var opresult1418 = callmethod(opresult1415, "++", [1], string1416);
                            onSelf = true;
                            var call1419 = callmethod(this, "y", [0]);
                            var opresult1421 = callmethod(opresult1418, "++", [1], call1419);
                            var string1422 = new GraceString(") ");
                            var opresult1424 = callmethod(opresult1421, "++", [1], string1422);
                            lineNumber = 710
                            var string1425 = new GraceString("with height ");
                            onSelf = true;
                            var call1426 = callmethod(this, "height", [0]);
                            var opresult1428 = callmethod(string1425, "++", [1], call1426);
                            var string1429 = new GraceString(", width ");
                            var opresult1431 = callmethod(opresult1428, "++", [1], string1429);
                            onSelf = true;
                            var call1432 = callmethod(this, "width", [0]);
                            var opresult1434 = callmethod(opresult1431, "++", [1], call1432);
                            var string1435 = new GraceString(", and color ");
                            var opresult1437 = callmethod(opresult1434, "++", [1], string1435);
                            onSelf = true;
                            var call1438 = callmethod(this, "color", [0]);
                            var opresult1440 = callmethod(opresult1437, "++", [1], call1438);
                            var string1441 = new GraceString("");
                            var opresult1443 = callmethod(opresult1440, "++", [1], string1441);
                            var opresult1445 = callmethod(opresult1424, "++", [1], opresult1443);
                            return opresult1445
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1411.paramCounts = [
                                            0,
                                            ];
                    func1411.variableArities = [
                                                false,
                                                ];
                    obj1395.methods["asString"] = func1411;
                    var func1446 = function(argcv) {    // method ==(1)
                        var curarg = 1;
                        var var_other = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func1446.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method ==(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 715
                            onSelf = true;
                            var call1447 = callmethod(this, "asString", [0]);
                            lineNumber = 715
                            var call1448 = callmethod(var_other,"asString", [0]);
                            var opresult1450 = callmethod(call1447, "==", [1], call1448);
                            return opresult1450
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1446.paramCounts = [
                                            1,
                                            ];
                    func1446.variableArities = [
                                                false,
                                                ];
                    obj1395.methods["=="] = func1446;
                    sourceObject = obj1395;
                    lineNumber = 699
                    var call1451 = callmethod(var_aResizable2D,"at()size()on()object", [1, 2, 1, 1], var_location__39__, var_width__39__, var_height__39__, var_canvas__39__, this);
                    obj1395.superobj = call1451;
                    obj1395._value = call1451._value;
                    sourceObject = obj1395;
                    lineNumber = 700
                    onSelf = true;
                    var call1452 = callmethod(this, "addToCanvas", [1], var_canvas__39__);
                    sourceObject = obj1395;
                    sourceObject = obj1395;
                    sourceObject = obj1395;
                    superDepth = origSuperDepth;
                }
                obj_init_1395.apply(inheritingObject, []);
                return obj1395
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        func1394.paramTypes = [];
        func1394.paramTypes.push([type_Location, "location'"]);
        func1394.paramTypes.push([type_Number, "width'"]);
        func1394.paramTypes.push([type_Number, "height'"]);
        func1394.paramTypes.push([type_Canvas, "canvas'"]);
        obj1333.methods["at()size()on()object"] = func1394;
        sourceObject = obj1333;
        superDepth = origSuperDepth;
    }
    obj_init_1333.apply(obj1333, []);
    var var_aFramedRect = obj1333;
    lineNumber = 1
    var func1453 = function(argcv) {    // method aFilledRect
        var curarg = 1;
        if (argcv[0] !=  func1453.paramCounts[0]) // != 0 
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method aFilledRect is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            lineNumber = 722
            return var_aFilledRect
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func1453.paramCounts = [
                            0,
                            ];
    func1453.variableArities = [
                                false,
                                ];
    this.methods["aFilledRect"] = func1453;
    lineNumber = 1
    var obj1454 = Grace_allocObject();
    obj1454.outer = this;
    var reader_objectdraw_outer1455 = function() {
        return this.outer;
    }
    obj1454.methods["outer"] = reader_objectdraw_outer1455;
    function obj_init_1454() {
        var origSuperDepth = superDepth;
        superDepth = obj1454;
        var func1456 = function(argcv) {    // method at(1)size(2)on(1)
            var curarg = 1;
            var var_location__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1456.paramCounts[0]) // != 1 
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method at(1)size(2)on(1) is of wrong size"));
            var var_width__39__ = arguments[curarg];
            curarg++;
            var var_height__39__ = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1456.paramCounts[1]) // != 2 
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 2 to method at(1)size(2)on(1) is of wrong size"));
            var var_canvas__39__ = arguments[curarg];
            curarg++;
            if (argcv[2] !=  func1456.paramCounts[2]) // != 1 
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 3 to method at(1)size(2)on(1) is of wrong size"));
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                var obj1457 = Grace_allocObject();
                obj1457.outer = this;
                var reader_objectdraw_outer1458 = function() {
                    return this.outer;
                }
                obj1457.methods["outer"] = reader_objectdraw_outer1458;
                function obj_init_1457() {
                    var origSuperDepth = superDepth;
                    superDepth = obj1457;
                    var func1459 = function(argcv) {    // method draw(1)
                        var curarg = 1;
                        var var_ctx = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func1459.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method draw(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 728
                            onSelf = true;
                            var call1460 = callmethod(this, "color", [0]);
                            var call1461 = callmethod(call1460,"red", [0]);
                            lineNumber = 728
                            onSelf = true;
                            var call1462 = callmethod(this, "color", [0]);
                            var call1463 = callmethod(call1462,"green", [0]);
                            lineNumber = 728
                            onSelf = true;
                            var call1464 = callmethod(this, "color", [0]);
                            var call1465 = callmethod(call1464,"blue", [0]);
                            var call1466 = callmethod(var_ctx,"set_source_rgb", [3], call1461, call1463, call1465);
                            lineNumber = 1
                            onSelf = true;
                            var call1467 = callmethod(this, "x", [0]);
                            lineNumber = 729
                            onSelf = true;
                            var call1468 = callmethod(this, "y", [0]);
                            onSelf = true;
                            var call1469 = callmethod(this, "width", [0]);
                            onSelf = true;
                            var call1470 = callmethod(this, "height", [0]);
                            var call1471 = callmethod(var_ctx,"rectangle", [4], call1467, call1468, call1469, call1470);
                            lineNumber = 730
                            var call1472 = callmethod(var_ctx,"fill", [0]);
                            return call1472
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1459.paramCounts = [
                                            1,
                                            ];
                    func1459.variableArities = [
                                                false,
                                                ];
                    obj1457.methods["draw"] = func1459;
                    var func1473 = function(argcv) {    // method asString
                        var curarg = 1;
                        if (argcv[0] !=  func1473.paramCounts[0]) // != 0 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method asString is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 734
                            var string1474 = new GraceString("FilledRect at (");
                            onSelf = true;
                            var call1475 = callmethod(this, "x", [0]);
                            var opresult1477 = callmethod(string1474, "++", [1], call1475);
                            var string1478 = new GraceString(",");
                            var opresult1480 = callmethod(opresult1477, "++", [1], string1478);
                            onSelf = true;
                            var call1481 = callmethod(this, "y", [0]);
                            var opresult1483 = callmethod(opresult1480, "++", [1], call1481);
                            var string1484 = new GraceString(") ");
                            var opresult1486 = callmethod(opresult1483, "++", [1], string1484);
                            lineNumber = 735
                            var string1487 = new GraceString("with height ");
                            onSelf = true;
                            var call1488 = callmethod(this, "height", [0]);
                            var opresult1490 = callmethod(string1487, "++", [1], call1488);
                            var string1491 = new GraceString(", width ");
                            var opresult1493 = callmethod(opresult1490, "++", [1], string1491);
                            onSelf = true;
                            var call1494 = callmethod(this, "width", [0]);
                            var opresult1496 = callmethod(opresult1493, "++", [1], call1494);
                            var string1497 = new GraceString(", and color ");
                            var opresult1499 = callmethod(opresult1496, "++", [1], string1497);
                            onSelf = true;
                            var call1500 = callmethod(this, "color", [0]);
                            var opresult1502 = callmethod(opresult1499, "++", [1], call1500);
                            var string1503 = new GraceString("");
                            var opresult1505 = callmethod(opresult1502, "++", [1], string1503);
                            var opresult1507 = callmethod(opresult1486, "++", [1], opresult1505);
                            return opresult1507
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1473.paramCounts = [
                                            0,
                                            ];
                    func1473.variableArities = [
                                                false,
                                                ];
                    obj1457.methods["asString"] = func1473;
                    var func1508 = function(argcv) {    // method ==(1)
                        var curarg = 1;
                        var var_other = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func1508.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method ==(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 740
                            onSelf = true;
                            var call1509 = callmethod(this, "asString", [0]);
                            lineNumber = 740
                            var call1510 = callmethod(var_other,"asString", [0]);
                            var opresult1512 = callmethod(call1509, "==", [1], call1510);
                            return opresult1512
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1508.paramCounts = [
                                            1,
                                            ];
                    func1508.variableArities = [
                                                false,
                                                ];
                    obj1457.methods["=="] = func1508;
                    sourceObject = obj1457;
                    lineNumber = 724
                    var call1513 = callmethod(var_aResizable2D,"at()size()on()object", [1, 2, 1, 1], var_location__39__, var_width__39__, var_height__39__, var_canvas__39__, this);
                    obj1457.superobj = call1513;
                    obj1457._value = call1513._value;
                    sourceObject = obj1457;
                    lineNumber = 726
                    onSelf = true;
                    var call1514 = callmethod(this, "addToCanvas", [1], var_canvas__39__);
                    sourceObject = obj1457;
                    sourceObject = obj1457;
                    sourceObject = obj1457;
                    superDepth = origSuperDepth;
                }
                obj_init_1457.apply(obj1457, []);
                return obj1457
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        func1456.paramTypes = [];
        func1456.paramTypes.push([type_Location, "location'"]);
        func1456.paramTypes.push([type_Number, "width'"]);
        func1456.paramTypes.push([type_Number, "height'"]);
        func1456.paramTypes.push([type_Canvas, "canvas'"]);
        func1456.paramCounts = [
                                1,
                                2,
                                1,
                                ];
        func1456.variableArities = [
                                    false,
                                    false,
                                    false,
                                    ];
        obj1454.methods["at()size()on"] = func1456;
        var func1515 = function(argcv) {
            var curarg = 1;
            var var_location__39__ = arguments[curarg];
            curarg++;
            var var_width__39__ = arguments[curarg];
            curarg++;
            var var_height__39__ = arguments[curarg];
            curarg++;
            var var_canvas__39__ = arguments[curarg];
            curarg++;
            var inheritingObject = arguments[curarg++];
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                var obj1516 = Grace_allocObject();
                var inho1516 = inheritingObject;
                while (inho1516.superobj) inho1516 = inho1516.superobj;
                inho1516.superobj = obj1516;
                obj1516.data = inheritingObject.data;
                obj1516.outer = this;
                var reader_objectdraw_outer1517 = function() {
                    return this.outer;
                }
                obj1516.methods["outer"] = reader_objectdraw_outer1517;
                function obj_init_1516() {
                    var origSuperDepth = superDepth;
                    superDepth = obj1516;
                    var func1518 = function(argcv) {    // method draw(1)
                        var curarg = 1;
                        var var_ctx = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func1518.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method draw(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 728
                            onSelf = true;
                            var call1519 = callmethod(this, "color", [0]);
                            var call1520 = callmethod(call1519,"red", [0]);
                            lineNumber = 728
                            onSelf = true;
                            var call1521 = callmethod(this, "color", [0]);
                            var call1522 = callmethod(call1521,"green", [0]);
                            lineNumber = 728
                            onSelf = true;
                            var call1523 = callmethod(this, "color", [0]);
                            var call1524 = callmethod(call1523,"blue", [0]);
                            var call1525 = callmethod(var_ctx,"set_source_rgb", [3], call1520, call1522, call1524);
                            lineNumber = 1
                            onSelf = true;
                            var call1526 = callmethod(this, "x", [0]);
                            lineNumber = 729
                            onSelf = true;
                            var call1527 = callmethod(this, "y", [0]);
                            onSelf = true;
                            var call1528 = callmethod(this, "width", [0]);
                            onSelf = true;
                            var call1529 = callmethod(this, "height", [0]);
                            var call1530 = callmethod(var_ctx,"rectangle", [4], call1526, call1527, call1528, call1529);
                            lineNumber = 730
                            var call1531 = callmethod(var_ctx,"fill", [0]);
                            return call1531
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1518.paramCounts = [
                                            1,
                                            ];
                    func1518.variableArities = [
                                                false,
                                                ];
                    obj1516.methods["draw"] = func1518;
                    var func1532 = function(argcv) {    // method asString
                        var curarg = 1;
                        if (argcv[0] !=  func1532.paramCounts[0]) // != 0 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method asString is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 734
                            var string1533 = new GraceString("FilledRect at (");
                            onSelf = true;
                            var call1534 = callmethod(this, "x", [0]);
                            var opresult1536 = callmethod(string1533, "++", [1], call1534);
                            var string1537 = new GraceString(",");
                            var opresult1539 = callmethod(opresult1536, "++", [1], string1537);
                            onSelf = true;
                            var call1540 = callmethod(this, "y", [0]);
                            var opresult1542 = callmethod(opresult1539, "++", [1], call1540);
                            var string1543 = new GraceString(") ");
                            var opresult1545 = callmethod(opresult1542, "++", [1], string1543);
                            lineNumber = 735
                            var string1546 = new GraceString("with height ");
                            onSelf = true;
                            var call1547 = callmethod(this, "height", [0]);
                            var opresult1549 = callmethod(string1546, "++", [1], call1547);
                            var string1550 = new GraceString(", width ");
                            var opresult1552 = callmethod(opresult1549, "++", [1], string1550);
                            onSelf = true;
                            var call1553 = callmethod(this, "width", [0]);
                            var opresult1555 = callmethod(opresult1552, "++", [1], call1553);
                            var string1556 = new GraceString(", and color ");
                            var opresult1558 = callmethod(opresult1555, "++", [1], string1556);
                            onSelf = true;
                            var call1559 = callmethod(this, "color", [0]);
                            var opresult1561 = callmethod(opresult1558, "++", [1], call1559);
                            var string1562 = new GraceString("");
                            var opresult1564 = callmethod(opresult1561, "++", [1], string1562);
                            var opresult1566 = callmethod(opresult1545, "++", [1], opresult1564);
                            return opresult1566
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1532.paramCounts = [
                                            0,
                                            ];
                    func1532.variableArities = [
                                                false,
                                                ];
                    obj1516.methods["asString"] = func1532;
                    var func1567 = function(argcv) {    // method ==(1)
                        var curarg = 1;
                        var var_other = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func1567.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method ==(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 740
                            onSelf = true;
                            var call1568 = callmethod(this, "asString", [0]);
                            lineNumber = 740
                            var call1569 = callmethod(var_other,"asString", [0]);
                            var opresult1571 = callmethod(call1568, "==", [1], call1569);
                            return opresult1571
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1567.paramCounts = [
                                            1,
                                            ];
                    func1567.variableArities = [
                                                false,
                                                ];
                    obj1516.methods["=="] = func1567;
                    sourceObject = obj1516;
                    lineNumber = 724
                    var call1572 = callmethod(var_aResizable2D,"at()size()on()object", [1, 2, 1, 1], var_location__39__, var_width__39__, var_height__39__, var_canvas__39__, this);
                    obj1516.superobj = call1572;
                    obj1516._value = call1572._value;
                    sourceObject = obj1516;
                    lineNumber = 726
                    onSelf = true;
                    var call1573 = callmethod(this, "addToCanvas", [1], var_canvas__39__);
                    sourceObject = obj1516;
                    sourceObject = obj1516;
                    sourceObject = obj1516;
                    superDepth = origSuperDepth;
                }
                obj_init_1516.apply(inheritingObject, []);
                return obj1516
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        func1515.paramTypes = [];
        func1515.paramTypes.push([type_Location, "location'"]);
        func1515.paramTypes.push([type_Number, "width'"]);
        func1515.paramTypes.push([type_Number, "height'"]);
        func1515.paramTypes.push([type_Canvas, "canvas'"]);
        obj1454.methods["at()size()on()object"] = func1515;
        sourceObject = obj1454;
        superDepth = origSuperDepth;
    }
    obj_init_1454.apply(obj1454, []);
    var var_aFilledRect = obj1454;
    lineNumber = 1
    var func1574 = function(argcv) {    // method aFramedOval
        var curarg = 1;
        if (argcv[0] !=  func1574.paramCounts[0]) // != 0 
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method aFramedOval is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            lineNumber = 746
            return var_aFramedOval
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func1574.paramCounts = [
                            0,
                            ];
    func1574.variableArities = [
                                false,
                                ];
    this.methods["aFramedOval"] = func1574;
    lineNumber = 1
    var obj1575 = Grace_allocObject();
    obj1575.outer = this;
    var reader_objectdraw_outer1576 = function() {
        return this.outer;
    }
    obj1575.methods["outer"] = reader_objectdraw_outer1576;
    function obj_init_1575() {
        var origSuperDepth = superDepth;
        superDepth = obj1575;
        var func1577 = function(argcv) {    // method at(1)size(2)on(1)
            var curarg = 1;
            var var_location__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1577.paramCounts[0]) // != 1 
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method at(1)size(2)on(1) is of wrong size"));
            var var_width__39__ = arguments[curarg];
            curarg++;
            var var_height__39__ = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1577.paramCounts[1]) // != 2 
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 2 to method at(1)size(2)on(1) is of wrong size"));
            var var_canvas__39__ = arguments[curarg];
            curarg++;
            if (argcv[2] !=  func1577.paramCounts[2]) // != 1 
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 3 to method at(1)size(2)on(1) is of wrong size"));
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                var obj1578 = Grace_allocObject();
                obj1578.outer = this;
                var reader_objectdraw_outer1579 = function() {
                    return this.outer;
                }
                obj1578.methods["outer"] = reader_objectdraw_outer1579;
                function obj_init_1578() {
                    var origSuperDepth = superDepth;
                    superDepth = obj1578;
                    var func1580 = function(argcv) {    // method draw(1)
                        var curarg = 1;
                        var var_ctx = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func1580.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method draw(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 752
                            onSelf = true;
                            var call1581 = callmethod(this, "color", [0]);
                            var call1582 = callmethod(call1581,"red", [0]);
                            lineNumber = 752
                            onSelf = true;
                            var call1583 = callmethod(this, "color", [0]);
                            var call1584 = callmethod(call1583,"green", [0]);
                            lineNumber = 752
                            onSelf = true;
                            var call1585 = callmethod(this, "color", [0]);
                            var call1586 = callmethod(call1585,"blue", [0]);
                            var call1587 = callmethod(var_ctx,"set_source_rgb", [3], call1582, call1584, call1586);
                            lineNumber = 753
                            var call1588 = callmethod(var_ctx,"save", [0]);
                            lineNumber = 754
                            onSelf = true;
                            var call1589 = callmethod(this, "x", [0]);
                            onSelf = true;
                            var call1590 = callmethod(this, "width", [0]);
                            var quotient1592 = callmethod(call1590, "/", [1], new GraceNum(2));
                            var opresult1594 = callmethod(call1589, "+", [1], quotient1592);
                            onSelf = true;
                            var call1595 = callmethod(this, "y", [0]);
                            onSelf = true;
                            var call1596 = callmethod(this, "height", [0]);
                            var quotient1598 = callmethod(call1596, "/", [1], new GraceNum(2));
                            var opresult1600 = callmethod(call1595, "+", [1], quotient1598);
                            var call1601 = callmethod(var_ctx,"translate", [2], opresult1594, opresult1600);
                            lineNumber = 755
                            onSelf = true;
                            var call1602 = callmethod(this, "width", [0]);
                            var quotient1604 = callmethod(call1602, "/", [1], new GraceNum(2));
                            onSelf = true;
                            var call1605 = callmethod(this, "height", [0]);
                            var quotient1607 = callmethod(call1605, "/", [1], new GraceNum(2));
                            var call1608 = callmethod(var_ctx,"scale", [2], quotient1604, quotient1607);
                            lineNumber = 756
                            var call1609 = callmethod(var_math,"Pi", [0]);
                            var prod1611 = callmethod(new GraceNum(2), "*", [1], call1609);
                            var call1612 = callmethod(var_ctx,"arc", [5], new GraceNum(0), new GraceNum(0), new GraceNum(1), new GraceNum(0), prod1611);
                            lineNumber = 757
                            var call1613 = callmethod(var_ctx,"restore", [0]);
                            lineNumber = 758
                            var call1614 = callmethod(var_ctx,"stroke", [0]);
                            return call1614
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1580.paramCounts = [
                                            1,
                                            ];
                    func1580.variableArities = [
                                                false,
                                                ];
                    obj1578.methods["draw"] = func1580;
                    var func1615 = function(argcv) {    // method asString
                        var curarg = 1;
                        if (argcv[0] !=  func1615.paramCounts[0]) // != 0 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method asString is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 762
                            var string1616 = new GraceString("FramedOval at (");
                            onSelf = true;
                            var call1617 = callmethod(this, "x", [0]);
                            var opresult1619 = callmethod(string1616, "++", [1], call1617);
                            var string1620 = new GraceString(",");
                            var opresult1622 = callmethod(opresult1619, "++", [1], string1620);
                            onSelf = true;
                            var call1623 = callmethod(this, "y", [0]);
                            var opresult1625 = callmethod(opresult1622, "++", [1], call1623);
                            var string1626 = new GraceString(") ");
                            var opresult1628 = callmethod(opresult1625, "++", [1], string1626);
                            lineNumber = 763
                            var string1629 = new GraceString("with height ");
                            onSelf = true;
                            var call1630 = callmethod(this, "height", [0]);
                            var opresult1632 = callmethod(string1629, "++", [1], call1630);
                            var string1633 = new GraceString(", width ");
                            var opresult1635 = callmethod(opresult1632, "++", [1], string1633);
                            onSelf = true;
                            var call1636 = callmethod(this, "width", [0]);
                            var opresult1638 = callmethod(opresult1635, "++", [1], call1636);
                            var string1639 = new GraceString(", and color ");
                            var opresult1641 = callmethod(opresult1638, "++", [1], string1639);
                            onSelf = true;
                            var call1642 = callmethod(this, "color", [0]);
                            var opresult1644 = callmethod(opresult1641, "++", [1], call1642);
                            var string1645 = new GraceString("");
                            var opresult1647 = callmethod(opresult1644, "++", [1], string1645);
                            var opresult1649 = callmethod(opresult1628, "++", [1], opresult1647);
                            return opresult1649
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1615.paramCounts = [
                                            0,
                                            ];
                    func1615.variableArities = [
                                                false,
                                                ];
                    obj1578.methods["asString"] = func1615;
                    var func1650 = function(argcv) {    // method ==(1)
                        var curarg = 1;
                        var var_other = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func1650.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method ==(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 768
                            onSelf = true;
                            var call1651 = callmethod(this, "asString", [0]);
                            lineNumber = 768
                            var call1652 = callmethod(var_other,"asString", [0]);
                            var opresult1654 = callmethod(call1651, "==", [1], call1652);
                            return opresult1654
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1650.paramCounts = [
                                            1,
                                            ];
                    func1650.variableArities = [
                                                false,
                                                ];
                    obj1578.methods["=="] = func1650;
                    sourceObject = obj1578;
                    lineNumber = 748
                    var call1655 = callmethod(var_aResizable2D,"at()size()on()object", [1, 2, 1, 1], var_location__39__, var_width__39__, var_height__39__, var_canvas__39__, this);
                    obj1578.superobj = call1655;
                    obj1578._value = call1655._value;
                    sourceObject = obj1578;
                    lineNumber = 749
                    onSelf = true;
                    var call1656 = callmethod(this, "addToCanvas", [1], var_canvas__39__);
                    sourceObject = obj1578;
                    sourceObject = obj1578;
                    sourceObject = obj1578;
                    superDepth = origSuperDepth;
                }
                obj_init_1578.apply(obj1578, []);
                return obj1578
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        func1577.paramTypes = [];
        func1577.paramTypes.push([type_Location, "location'"]);
        func1577.paramTypes.push([type_Number, "width'"]);
        func1577.paramTypes.push([type_Number, "height'"]);
        func1577.paramTypes.push([type_Canvas, "canvas'"]);
        func1577.paramCounts = [
                                1,
                                2,
                                1,
                                ];
        func1577.variableArities = [
                                    false,
                                    false,
                                    false,
                                    ];
        obj1575.methods["at()size()on"] = func1577;
        var func1657 = function(argcv) {
            var curarg = 1;
            var var_location__39__ = arguments[curarg];
            curarg++;
            var var_width__39__ = arguments[curarg];
            curarg++;
            var var_height__39__ = arguments[curarg];
            curarg++;
            var var_canvas__39__ = arguments[curarg];
            curarg++;
            var inheritingObject = arguments[curarg++];
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                var obj1658 = Grace_allocObject();
                var inho1658 = inheritingObject;
                while (inho1658.superobj) inho1658 = inho1658.superobj;
                inho1658.superobj = obj1658;
                obj1658.data = inheritingObject.data;
                obj1658.outer = this;
                var reader_objectdraw_outer1659 = function() {
                    return this.outer;
                }
                obj1658.methods["outer"] = reader_objectdraw_outer1659;
                function obj_init_1658() {
                    var origSuperDepth = superDepth;
                    superDepth = obj1658;
                    var func1660 = function(argcv) {    // method draw(1)
                        var curarg = 1;
                        var var_ctx = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func1660.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method draw(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 752
                            onSelf = true;
                            var call1661 = callmethod(this, "color", [0]);
                            var call1662 = callmethod(call1661,"red", [0]);
                            lineNumber = 752
                            onSelf = true;
                            var call1663 = callmethod(this, "color", [0]);
                            var call1664 = callmethod(call1663,"green", [0]);
                            lineNumber = 752
                            onSelf = true;
                            var call1665 = callmethod(this, "color", [0]);
                            var call1666 = callmethod(call1665,"blue", [0]);
                            var call1667 = callmethod(var_ctx,"set_source_rgb", [3], call1662, call1664, call1666);
                            lineNumber = 753
                            var call1668 = callmethod(var_ctx,"save", [0]);
                            lineNumber = 754
                            onSelf = true;
                            var call1669 = callmethod(this, "x", [0]);
                            onSelf = true;
                            var call1670 = callmethod(this, "width", [0]);
                            var quotient1672 = callmethod(call1670, "/", [1], new GraceNum(2));
                            var opresult1674 = callmethod(call1669, "+", [1], quotient1672);
                            onSelf = true;
                            var call1675 = callmethod(this, "y", [0]);
                            onSelf = true;
                            var call1676 = callmethod(this, "height", [0]);
                            var quotient1678 = callmethod(call1676, "/", [1], new GraceNum(2));
                            var opresult1680 = callmethod(call1675, "+", [1], quotient1678);
                            var call1681 = callmethod(var_ctx,"translate", [2], opresult1674, opresult1680);
                            lineNumber = 755
                            onSelf = true;
                            var call1682 = callmethod(this, "width", [0]);
                            var quotient1684 = callmethod(call1682, "/", [1], new GraceNum(2));
                            onSelf = true;
                            var call1685 = callmethod(this, "height", [0]);
                            var quotient1687 = callmethod(call1685, "/", [1], new GraceNum(2));
                            var call1688 = callmethod(var_ctx,"scale", [2], quotient1684, quotient1687);
                            lineNumber = 756
                            var call1689 = callmethod(var_math,"Pi", [0]);
                            var prod1691 = callmethod(new GraceNum(2), "*", [1], call1689);
                            var call1692 = callmethod(var_ctx,"arc", [5], new GraceNum(0), new GraceNum(0), new GraceNum(1), new GraceNum(0), prod1691);
                            lineNumber = 757
                            var call1693 = callmethod(var_ctx,"restore", [0]);
                            lineNumber = 758
                            var call1694 = callmethod(var_ctx,"stroke", [0]);
                            return call1694
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1660.paramCounts = [
                                            1,
                                            ];
                    func1660.variableArities = [
                                                false,
                                                ];
                    obj1658.methods["draw"] = func1660;
                    var func1695 = function(argcv) {    // method asString
                        var curarg = 1;
                        if (argcv[0] !=  func1695.paramCounts[0]) // != 0 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method asString is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 762
                            var string1696 = new GraceString("FramedOval at (");
                            onSelf = true;
                            var call1697 = callmethod(this, "x", [0]);
                            var opresult1699 = callmethod(string1696, "++", [1], call1697);
                            var string1700 = new GraceString(",");
                            var opresult1702 = callmethod(opresult1699, "++", [1], string1700);
                            onSelf = true;
                            var call1703 = callmethod(this, "y", [0]);
                            var opresult1705 = callmethod(opresult1702, "++", [1], call1703);
                            var string1706 = new GraceString(") ");
                            var opresult1708 = callmethod(opresult1705, "++", [1], string1706);
                            lineNumber = 763
                            var string1709 = new GraceString("with height ");
                            onSelf = true;
                            var call1710 = callmethod(this, "height", [0]);
                            var opresult1712 = callmethod(string1709, "++", [1], call1710);
                            var string1713 = new GraceString(", width ");
                            var opresult1715 = callmethod(opresult1712, "++", [1], string1713);
                            onSelf = true;
                            var call1716 = callmethod(this, "width", [0]);
                            var opresult1718 = callmethod(opresult1715, "++", [1], call1716);
                            var string1719 = new GraceString(", and color ");
                            var opresult1721 = callmethod(opresult1718, "++", [1], string1719);
                            onSelf = true;
                            var call1722 = callmethod(this, "color", [0]);
                            var opresult1724 = callmethod(opresult1721, "++", [1], call1722);
                            var string1725 = new GraceString("");
                            var opresult1727 = callmethod(opresult1724, "++", [1], string1725);
                            var opresult1729 = callmethod(opresult1708, "++", [1], opresult1727);
                            return opresult1729
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1695.paramCounts = [
                                            0,
                                            ];
                    func1695.variableArities = [
                                                false,
                                                ];
                    obj1658.methods["asString"] = func1695;
                    var func1730 = function(argcv) {    // method ==(1)
                        var curarg = 1;
                        var var_other = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func1730.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method ==(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 768
                            onSelf = true;
                            var call1731 = callmethod(this, "asString", [0]);
                            lineNumber = 768
                            var call1732 = callmethod(var_other,"asString", [0]);
                            var opresult1734 = callmethod(call1731, "==", [1], call1732);
                            return opresult1734
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1730.paramCounts = [
                                            1,
                                            ];
                    func1730.variableArities = [
                                                false,
                                                ];
                    obj1658.methods["=="] = func1730;
                    sourceObject = obj1658;
                    lineNumber = 748
                    var call1735 = callmethod(var_aResizable2D,"at()size()on()object", [1, 2, 1, 1], var_location__39__, var_width__39__, var_height__39__, var_canvas__39__, this);
                    obj1658.superobj = call1735;
                    obj1658._value = call1735._value;
                    sourceObject = obj1658;
                    lineNumber = 749
                    onSelf = true;
                    var call1736 = callmethod(this, "addToCanvas", [1], var_canvas__39__);
                    sourceObject = obj1658;
                    sourceObject = obj1658;
                    sourceObject = obj1658;
                    superDepth = origSuperDepth;
                }
                obj_init_1658.apply(inheritingObject, []);
                return obj1658
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        func1657.paramTypes = [];
        func1657.paramTypes.push([type_Location, "location'"]);
        func1657.paramTypes.push([type_Number, "width'"]);
        func1657.paramTypes.push([type_Number, "height'"]);
        func1657.paramTypes.push([type_Canvas, "canvas'"]);
        obj1575.methods["at()size()on()object"] = func1657;
        sourceObject = obj1575;
        superDepth = origSuperDepth;
    }
    obj_init_1575.apply(obj1575, []);
    var var_aFramedOval = obj1575;
    lineNumber = 1
    var func1737 = function(argcv) {    // method aFilledOval
        var curarg = 1;
        if (argcv[0] !=  func1737.paramCounts[0]) // != 0 
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method aFilledOval is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            lineNumber = 775
            return var_aFilledOval
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func1737.paramCounts = [
                            0,
                            ];
    func1737.variableArities = [
                                false,
                                ];
    this.methods["aFilledOval"] = func1737;
    lineNumber = 1
    var obj1738 = Grace_allocObject();
    obj1738.outer = this;
    var reader_objectdraw_outer1739 = function() {
        return this.outer;
    }
    obj1738.methods["outer"] = reader_objectdraw_outer1739;
    function obj_init_1738() {
        var origSuperDepth = superDepth;
        superDepth = obj1738;
        var func1740 = function(argcv) {    // method at(1)size(2)on(1)
            var curarg = 1;
            var var_location__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1740.paramCounts[0]) // != 1 
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method at(1)size(2)on(1) is of wrong size"));
            var var_width__39__ = arguments[curarg];
            curarg++;
            var var_height__39__ = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1740.paramCounts[1]) // != 2 
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 2 to method at(1)size(2)on(1) is of wrong size"));
            var var_canvas__39__ = arguments[curarg];
            curarg++;
            if (argcv[2] !=  func1740.paramCounts[2]) // != 1 
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 3 to method at(1)size(2)on(1) is of wrong size"));
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                var obj1741 = Grace_allocObject();
                obj1741.outer = this;
                var reader_objectdraw_outer1742 = function() {
                    return this.outer;
                }
                obj1741.methods["outer"] = reader_objectdraw_outer1742;
                function obj_init_1741() {
                    var origSuperDepth = superDepth;
                    superDepth = obj1741;
                    var func1743 = function(argcv) {    // method draw(1)
                        var curarg = 1;
                        var var_ctx = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func1743.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method draw(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 781
                            onSelf = true;
                            var call1744 = callmethod(this, "color", [0]);
                            var call1745 = callmethod(call1744,"red", [0]);
                            lineNumber = 781
                            onSelf = true;
                            var call1746 = callmethod(this, "color", [0]);
                            var call1747 = callmethod(call1746,"green", [0]);
                            lineNumber = 781
                            onSelf = true;
                            var call1748 = callmethod(this, "color", [0]);
                            var call1749 = callmethod(call1748,"blue", [0]);
                            var call1750 = callmethod(var_ctx,"set_source_rgb", [3], call1745, call1747, call1749);
                            lineNumber = 782
                            var call1751 = callmethod(var_ctx,"save", [0]);
                            lineNumber = 783
                            onSelf = true;
                            var call1752 = callmethod(this, "x", [0]);
                            onSelf = true;
                            var call1753 = callmethod(this, "width", [0]);
                            var quotient1755 = callmethod(call1753, "/", [1], new GraceNum(2));
                            var opresult1757 = callmethod(call1752, "+", [1], quotient1755);
                            onSelf = true;
                            var call1758 = callmethod(this, "y", [0]);
                            onSelf = true;
                            var call1759 = callmethod(this, "height", [0]);
                            var quotient1761 = callmethod(call1759, "/", [1], new GraceNum(2));
                            var opresult1763 = callmethod(call1758, "+", [1], quotient1761);
                            var call1764 = callmethod(var_ctx,"translate", [2], opresult1757, opresult1763);
                            lineNumber = 784
                            onSelf = true;
                            var call1765 = callmethod(this, "width", [0]);
                            var quotient1767 = callmethod(call1765, "/", [1], new GraceNum(2));
                            onSelf = true;
                            var call1768 = callmethod(this, "height", [0]);
                            var quotient1770 = callmethod(call1768, "/", [1], new GraceNum(2));
                            var call1771 = callmethod(var_ctx,"scale", [2], quotient1767, quotient1770);
                            lineNumber = 785
                            var call1772 = callmethod(var_math,"Pi", [0]);
                            var prod1774 = callmethod(new GraceNum(2), "*", [1], call1772);
                            var call1775 = callmethod(var_ctx,"arc", [5], new GraceNum(0), new GraceNum(0), new GraceNum(1), new GraceNum(0), prod1774);
                            lineNumber = 786
                            var call1776 = callmethod(var_ctx,"restore", [0]);
                            lineNumber = 787
                            var call1777 = callmethod(var_ctx,"fill", [0]);
                            return call1777
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1743.paramCounts = [
                                            1,
                                            ];
                    func1743.variableArities = [
                                                false,
                                                ];
                    obj1741.methods["draw"] = func1743;
                    var func1778 = function(argcv) {    // method asString
                        var curarg = 1;
                        if (argcv[0] !=  func1778.paramCounts[0]) // != 0 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method asString is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 790
                            var string1779 = new GraceString("FilledOval at (");
                            onSelf = true;
                            var call1780 = callmethod(this, "x", [0]);
                            var opresult1782 = callmethod(string1779, "++", [1], call1780);
                            var string1783 = new GraceString(",");
                            var opresult1785 = callmethod(opresult1782, "++", [1], string1783);
                            onSelf = true;
                            var call1786 = callmethod(this, "y", [0]);
                            var opresult1788 = callmethod(opresult1785, "++", [1], call1786);
                            var string1789 = new GraceString(") ");
                            var opresult1791 = callmethod(opresult1788, "++", [1], string1789);
                            lineNumber = 791
                            var string1792 = new GraceString("with height ");
                            onSelf = true;
                            var call1793 = callmethod(this, "height", [0]);
                            var opresult1795 = callmethod(string1792, "++", [1], call1793);
                            var string1796 = new GraceString(", width ");
                            var opresult1798 = callmethod(opresult1795, "++", [1], string1796);
                            onSelf = true;
                            var call1799 = callmethod(this, "width", [0]);
                            var opresult1801 = callmethod(opresult1798, "++", [1], call1799);
                            var string1802 = new GraceString(", and color ");
                            var opresult1804 = callmethod(opresult1801, "++", [1], string1802);
                            onSelf = true;
                            var call1805 = callmethod(this, "color", [0]);
                            var opresult1807 = callmethod(opresult1804, "++", [1], call1805);
                            var string1808 = new GraceString("");
                            var opresult1810 = callmethod(opresult1807, "++", [1], string1808);
                            var opresult1812 = callmethod(opresult1791, "++", [1], opresult1810);
                            return opresult1812
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1778.paramCounts = [
                                            0,
                                            ];
                    func1778.variableArities = [
                                                false,
                                                ];
                    obj1741.methods["asString"] = func1778;
                    var func1813 = function(argcv) {    // method ==(1)
                        var curarg = 1;
                        var var_other = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func1813.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method ==(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 796
                            onSelf = true;
                            var call1814 = callmethod(this, "asString", [0]);
                            lineNumber = 796
                            var call1815 = callmethod(var_other,"asString", [0]);
                            var opresult1817 = callmethod(call1814, "==", [1], call1815);
                            return opresult1817
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1813.paramCounts = [
                                            1,
                                            ];
                    func1813.variableArities = [
                                                false,
                                                ];
                    obj1741.methods["=="] = func1813;
                    sourceObject = obj1741;
                    lineNumber = 777
                    var call1818 = callmethod(var_aResizable2D,"at()size()on()object", [1, 2, 1, 1], var_location__39__, var_width__39__, var_height__39__, var_canvas__39__, this);
                    obj1741.superobj = call1818;
                    obj1741._value = call1818._value;
                    sourceObject = obj1741;
                    lineNumber = 779
                    onSelf = true;
                    var call1819 = callmethod(this, "addToCanvas", [1], var_canvas__39__);
                    sourceObject = obj1741;
                    sourceObject = obj1741;
                    sourceObject = obj1741;
                    superDepth = origSuperDepth;
                }
                obj_init_1741.apply(obj1741, []);
                return obj1741
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        func1740.paramTypes = [];
        func1740.paramTypes.push([type_Location, "location'"]);
        func1740.paramTypes.push([type_Number, "width'"]);
        func1740.paramTypes.push([type_Number, "height'"]);
        func1740.paramTypes.push([type_Canvas, "canvas'"]);
        func1740.paramCounts = [
                                1,
                                2,
                                1,
                                ];
        func1740.variableArities = [
                                    false,
                                    false,
                                    false,
                                    ];
        obj1738.methods["at()size()on"] = func1740;
        var func1820 = function(argcv) {
            var curarg = 1;
            var var_location__39__ = arguments[curarg];
            curarg++;
            var var_width__39__ = arguments[curarg];
            curarg++;
            var var_height__39__ = arguments[curarg];
            curarg++;
            var var_canvas__39__ = arguments[curarg];
            curarg++;
            var inheritingObject = arguments[curarg++];
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                var obj1821 = Grace_allocObject();
                var inho1821 = inheritingObject;
                while (inho1821.superobj) inho1821 = inho1821.superobj;
                inho1821.superobj = obj1821;
                obj1821.data = inheritingObject.data;
                obj1821.outer = this;
                var reader_objectdraw_outer1822 = function() {
                    return this.outer;
                }
                obj1821.methods["outer"] = reader_objectdraw_outer1822;
                function obj_init_1821() {
                    var origSuperDepth = superDepth;
                    superDepth = obj1821;
                    var func1823 = function(argcv) {    // method draw(1)
                        var curarg = 1;
                        var var_ctx = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func1823.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method draw(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 781
                            onSelf = true;
                            var call1824 = callmethod(this, "color", [0]);
                            var call1825 = callmethod(call1824,"red", [0]);
                            lineNumber = 781
                            onSelf = true;
                            var call1826 = callmethod(this, "color", [0]);
                            var call1827 = callmethod(call1826,"green", [0]);
                            lineNumber = 781
                            onSelf = true;
                            var call1828 = callmethod(this, "color", [0]);
                            var call1829 = callmethod(call1828,"blue", [0]);
                            var call1830 = callmethod(var_ctx,"set_source_rgb", [3], call1825, call1827, call1829);
                            lineNumber = 782
                            var call1831 = callmethod(var_ctx,"save", [0]);
                            lineNumber = 783
                            onSelf = true;
                            var call1832 = callmethod(this, "x", [0]);
                            onSelf = true;
                            var call1833 = callmethod(this, "width", [0]);
                            var quotient1835 = callmethod(call1833, "/", [1], new GraceNum(2));
                            var opresult1837 = callmethod(call1832, "+", [1], quotient1835);
                            onSelf = true;
                            var call1838 = callmethod(this, "y", [0]);
                            onSelf = true;
                            var call1839 = callmethod(this, "height", [0]);
                            var quotient1841 = callmethod(call1839, "/", [1], new GraceNum(2));
                            var opresult1843 = callmethod(call1838, "+", [1], quotient1841);
                            var call1844 = callmethod(var_ctx,"translate", [2], opresult1837, opresult1843);
                            lineNumber = 784
                            onSelf = true;
                            var call1845 = callmethod(this, "width", [0]);
                            var quotient1847 = callmethod(call1845, "/", [1], new GraceNum(2));
                            onSelf = true;
                            var call1848 = callmethod(this, "height", [0]);
                            var quotient1850 = callmethod(call1848, "/", [1], new GraceNum(2));
                            var call1851 = callmethod(var_ctx,"scale", [2], quotient1847, quotient1850);
                            lineNumber = 785
                            var call1852 = callmethod(var_math,"Pi", [0]);
                            var prod1854 = callmethod(new GraceNum(2), "*", [1], call1852);
                            var call1855 = callmethod(var_ctx,"arc", [5], new GraceNum(0), new GraceNum(0), new GraceNum(1), new GraceNum(0), prod1854);
                            lineNumber = 786
                            var call1856 = callmethod(var_ctx,"restore", [0]);
                            lineNumber = 787
                            var call1857 = callmethod(var_ctx,"fill", [0]);
                            return call1857
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1823.paramCounts = [
                                            1,
                                            ];
                    func1823.variableArities = [
                                                false,
                                                ];
                    obj1821.methods["draw"] = func1823;
                    var func1858 = function(argcv) {    // method asString
                        var curarg = 1;
                        if (argcv[0] !=  func1858.paramCounts[0]) // != 0 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method asString is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 790
                            var string1859 = new GraceString("FilledOval at (");
                            onSelf = true;
                            var call1860 = callmethod(this, "x", [0]);
                            var opresult1862 = callmethod(string1859, "++", [1], call1860);
                            var string1863 = new GraceString(",");
                            var opresult1865 = callmethod(opresult1862, "++", [1], string1863);
                            onSelf = true;
                            var call1866 = callmethod(this, "y", [0]);
                            var opresult1868 = callmethod(opresult1865, "++", [1], call1866);
                            var string1869 = new GraceString(") ");
                            var opresult1871 = callmethod(opresult1868, "++", [1], string1869);
                            lineNumber = 791
                            var string1872 = new GraceString("with height ");
                            onSelf = true;
                            var call1873 = callmethod(this, "height", [0]);
                            var opresult1875 = callmethod(string1872, "++", [1], call1873);
                            var string1876 = new GraceString(", width ");
                            var opresult1878 = callmethod(opresult1875, "++", [1], string1876);
                            onSelf = true;
                            var call1879 = callmethod(this, "width", [0]);
                            var opresult1881 = callmethod(opresult1878, "++", [1], call1879);
                            var string1882 = new GraceString(", and color ");
                            var opresult1884 = callmethod(opresult1881, "++", [1], string1882);
                            onSelf = true;
                            var call1885 = callmethod(this, "color", [0]);
                            var opresult1887 = callmethod(opresult1884, "++", [1], call1885);
                            var string1888 = new GraceString("");
                            var opresult1890 = callmethod(opresult1887, "++", [1], string1888);
                            var opresult1892 = callmethod(opresult1871, "++", [1], opresult1890);
                            return opresult1892
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1858.paramCounts = [
                                            0,
                                            ];
                    func1858.variableArities = [
                                                false,
                                                ];
                    obj1821.methods["asString"] = func1858;
                    var func1893 = function(argcv) {    // method ==(1)
                        var curarg = 1;
                        var var_other = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func1893.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method ==(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 796
                            onSelf = true;
                            var call1894 = callmethod(this, "asString", [0]);
                            lineNumber = 796
                            var call1895 = callmethod(var_other,"asString", [0]);
                            var opresult1897 = callmethod(call1894, "==", [1], call1895);
                            return opresult1897
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1893.paramCounts = [
                                            1,
                                            ];
                    func1893.variableArities = [
                                                false,
                                                ];
                    obj1821.methods["=="] = func1893;
                    sourceObject = obj1821;
                    lineNumber = 777
                    var call1898 = callmethod(var_aResizable2D,"at()size()on()object", [1, 2, 1, 1], var_location__39__, var_width__39__, var_height__39__, var_canvas__39__, this);
                    obj1821.superobj = call1898;
                    obj1821._value = call1898._value;
                    sourceObject = obj1821;
                    lineNumber = 779
                    onSelf = true;
                    var call1899 = callmethod(this, "addToCanvas", [1], var_canvas__39__);
                    sourceObject = obj1821;
                    sourceObject = obj1821;
                    sourceObject = obj1821;
                    superDepth = origSuperDepth;
                }
                obj_init_1821.apply(inheritingObject, []);
                return obj1821
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        func1820.paramTypes = [];
        func1820.paramTypes.push([type_Location, "location'"]);
        func1820.paramTypes.push([type_Number, "width'"]);
        func1820.paramTypes.push([type_Number, "height'"]);
        func1820.paramTypes.push([type_Canvas, "canvas'"]);
        obj1738.methods["at()size()on()object"] = func1820;
        sourceObject = obj1738;
        superDepth = origSuperDepth;
    }
    obj_init_1738.apply(obj1738, []);
    var var_aFilledOval = obj1738;
    lineNumber = 1
    var func1900 = function(argcv) {    // method aFramedArc
        var curarg = 1;
        if (argcv[0] !=  func1900.paramCounts[0]) // != 0 
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method aFramedArc is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            lineNumber = 805
            return var_aFramedArc
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func1900.paramCounts = [
                            0,
                            ];
    func1900.variableArities = [
                                false,
                                ];
    this.methods["aFramedArc"] = func1900;
    lineNumber = 1
    var obj1901 = Grace_allocObject();
    obj1901.outer = this;
    var reader_objectdraw_outer1902 = function() {
        return this.outer;
    }
    obj1901.methods["outer"] = reader_objectdraw_outer1902;
    function obj_init_1901() {
        var origSuperDepth = superDepth;
        superDepth = obj1901;
        var func1903 = function(argcv) {    // method at(1)size(2)from(1)to(1)on(1)
            var curarg = 1;
            var var_location__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1903.paramCounts[0]) // != 1 
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method at(1)size(2)from(1)to(1)on(1) is of wrong size"));
            var var_width__39__ = arguments[curarg];
            curarg++;
            var var_height__39__ = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1903.paramCounts[1]) // != 2 
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 2 to method at(1)size(2)from(1)to(1)on(1) is of wrong size"));
            var var_startAngle = arguments[curarg];
            curarg++;
            if (argcv[2] !=  func1903.paramCounts[2]) // != 1 
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 3 to method at(1)size(2)from(1)to(1)on(1) is of wrong size"));
            var var_endAngle = arguments[curarg];
            curarg++;
            if (argcv[3] !=  func1903.paramCounts[3]) // != 1 
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 4 to method at(1)size(2)from(1)to(1)on(1) is of wrong size"));
            var var_canvas__39__ = arguments[curarg];
            curarg++;
            if (argcv[4] !=  func1903.paramCounts[4]) // != 1 
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 5 to method at(1)size(2)from(1)to(1)on(1) is of wrong size"));
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                var obj1904 = Grace_allocObject();
                obj1904.outer = this;
                var reader_objectdraw_outer1905 = function() {
                    return this.outer;
                }
                obj1904.methods["outer"] = reader_objectdraw_outer1905;
                function obj_init_1904() {
                    var origSuperDepth = superDepth;
                    superDepth = obj1904;
                    var func1906 = function(argcv) {    // method draw(1)
                        var curarg = 1;
                        var var_ctx = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func1906.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method draw(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 811
                            onSelf = true;
                            var call1907 = callmethod(this, "color", [0]);
                            var call1908 = callmethod(call1907,"red", [0]);
                            lineNumber = 811
                            onSelf = true;
                            var call1909 = callmethod(this, "color", [0]);
                            var call1910 = callmethod(call1909,"green", [0]);
                            lineNumber = 811
                            onSelf = true;
                            var call1911 = callmethod(this, "color", [0]);
                            var call1912 = callmethod(call1911,"blue", [0]);
                            var call1913 = callmethod(var_ctx,"set_source_rgb", [3], call1908, call1910, call1912);
                            lineNumber = 812
                            var call1914 = callmethod(var_ctx,"save", [0]);
                            lineNumber = 813
                            onSelf = true;
                            var call1915 = callmethod(this, "x", [0]);
                            onSelf = true;
                            var call1916 = callmethod(this, "width", [0]);
                            var quotient1918 = callmethod(call1916, "/", [1], new GraceNum(2));
                            var opresult1920 = callmethod(call1915, "+", [1], quotient1918);
                            onSelf = true;
                            var call1921 = callmethod(this, "y", [0]);
                            onSelf = true;
                            var call1922 = callmethod(this, "height", [0]);
                            var quotient1924 = callmethod(call1922, "/", [1], new GraceNum(2));
                            var opresult1926 = callmethod(call1921, "+", [1], quotient1924);
                            var call1927 = callmethod(var_ctx,"translate", [2], opresult1920, opresult1926);
                            lineNumber = 814
                            onSelf = true;
                            var call1928 = callmethod(this, "width", [0]);
                            var quotient1930 = callmethod(call1928, "/", [1], new GraceNum(2));
                            onSelf = true;
                            var call1931 = callmethod(this, "height", [0]);
                            var quotient1933 = callmethod(call1931, "/", [1], new GraceNum(2));
                            var call1934 = callmethod(var_ctx,"scale", [2], quotient1930, quotient1933);
                            lineNumber = 815
                            var opresult1937 = callmethod(var_startAngle, "<=", [1], var_endAngle);
                            if (Grace_isTrue(opresult1937)) {
                                lineNumber = 816
                                var call1938 = callmethod(var_math,"Pi", [0]);
                                var prod1940 = callmethod(var_startAngle, "*", [1], call1938);
                                var quotient1942 = callmethod(prod1940, "/", [1], new GraceNum(180));
                                lineNumber = 816
                                var call1943 = callmethod(var_math,"Pi", [0]);
                                var prod1945 = callmethod(var_endAngle, "*", [1], call1943);
                                var quotient1947 = callmethod(prod1945, "/", [1], new GraceNum(180));
                                var call1948 = callmethod(var_ctx,"arc", [5], new GraceNum(0), new GraceNum(0), new GraceNum(1), quotient1942, quotient1947);
                                var if1935 = call1948;
                            } else {
                                lineNumber = 818
                                var call1949 = callmethod(var_math,"Pi", [0]);
                                var prod1951 = callmethod(var_endAngle, "*", [1], call1949);
                                var quotient1953 = callmethod(prod1951, "/", [1], new GraceNum(180));
                                lineNumber = 818
                                var call1954 = callmethod(var_math,"Pi", [0]);
                                var prod1956 = callmethod(var_startAngle, "*", [1], call1954);
                                var quotient1958 = callmethod(prod1956, "/", [1], new GraceNum(180));
                                var call1959 = callmethod(var_ctx,"arc", [5], new GraceNum(0), new GraceNum(0), new GraceNum(1), quotient1953, quotient1958);
                                var if1935 = call1959;
                            }
                            lineNumber = 820
                            var call1960 = callmethod(var_ctx,"restore", [0]);
                            lineNumber = 821
                            var call1961 = callmethod(var_ctx,"stroke", [0]);
                            return call1961
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1906.paramCounts = [
                                            1,
                                            ];
                    func1906.variableArities = [
                                                false,
                                                ];
                    obj1904.methods["draw"] = func1906;
                    var func1962 = function(argcv) {    // method asString
                        var curarg = 1;
                        if (argcv[0] !=  func1962.paramCounts[0]) // != 0 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method asString is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 825
                            var string1963 = new GraceString("FramedArc at (");
                            onSelf = true;
                            var call1964 = callmethod(this, "x", [0]);
                            var opresult1966 = callmethod(string1963, "++", [1], call1964);
                            var string1967 = new GraceString(",");
                            var opresult1969 = callmethod(opresult1966, "++", [1], string1967);
                            onSelf = true;
                            var call1970 = callmethod(this, "y", [0]);
                            var opresult1972 = callmethod(opresult1969, "++", [1], call1970);
                            var string1973 = new GraceString(") ");
                            var opresult1975 = callmethod(opresult1972, "++", [1], string1973);
                            lineNumber = 826
                            var string1976 = new GraceString("with height ");
                            onSelf = true;
                            var call1977 = callmethod(this, "height", [0]);
                            var opresult1979 = callmethod(string1976, "++", [1], call1977);
                            var string1980 = new GraceString(", width ");
                            var opresult1982 = callmethod(opresult1979, "++", [1], string1980);
                            onSelf = true;
                            var call1983 = callmethod(this, "width", [0]);
                            var opresult1985 = callmethod(opresult1982, "++", [1], call1983);
                            var string1986 = new GraceString(", and color ");
                            var opresult1988 = callmethod(opresult1985, "++", [1], string1986);
                            onSelf = true;
                            var call1989 = callmethod(this, "color", [0]);
                            var opresult1991 = callmethod(opresult1988, "++", [1], call1989);
                            var string1992 = new GraceString(" going ");
                            var opresult1994 = callmethod(opresult1991, "++", [1], string1992);
                            var opresult1996 = callmethod(opresult1975, "++", [1], opresult1994);
                            lineNumber = 827
                            var string1997 = new GraceString("from ");
                            var opresult1999 = callmethod(string1997, "++", [1], var_startAngle);
                            var string2000 = new GraceString(" degrees to ");
                            var opresult2002 = callmethod(opresult1999, "++", [1], string2000);
                            var opresult2004 = callmethod(opresult2002, "++", [1], var_endAngle);
                            var string2005 = new GraceString(" degrees");
                            var opresult2007 = callmethod(opresult2004, "++", [1], string2005);
                            var opresult2009 = callmethod(opresult1996, "++", [1], opresult2007);
                            return opresult2009
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func1962.paramCounts = [
                                            0,
                                            ];
                    func1962.variableArities = [
                                                false,
                                                ];
                    obj1904.methods["asString"] = func1962;
                    var func2010 = function(argcv) {    // method ==(1)
                        var curarg = 1;
                        var var_other = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func2010.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method ==(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 832
                            onSelf = true;
                            var call2011 = callmethod(this, "asString", [0]);
                            lineNumber = 832
                            var call2012 = callmethod(var_other,"asString", [0]);
                            var opresult2014 = callmethod(call2011, "==", [1], call2012);
                            return opresult2014
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2010.paramCounts = [
                                            1,
                                            ];
                    func2010.variableArities = [
                                                false,
                                                ];
                    obj1904.methods["=="] = func2010;
                    sourceObject = obj1904;
                    lineNumber = 807
                    var call2015 = callmethod(var_aResizable2D,"at()size()on()object", [1, 2, 1, 1], var_location__39__, var_width__39__, var_height__39__, var_canvas__39__, this);
                    obj1904.superobj = call2015;
                    obj1904._value = call2015._value;
                    sourceObject = obj1904;
                    lineNumber = 808
                    onSelf = true;
                    var call2016 = callmethod(this, "addToCanvas", [1], var_canvas__39__);
                    sourceObject = obj1904;
                    sourceObject = obj1904;
                    sourceObject = obj1904;
                    superDepth = origSuperDepth;
                }
                obj_init_1904.apply(obj1904, []);
                return obj1904
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        func1903.paramTypes = [];
        func1903.paramTypes.push([type_Location, "location'"]);
        func1903.paramTypes.push([type_Number, "width'"]);
        func1903.paramTypes.push([type_Number, "height'"]);
        func1903.paramTypes.push([type_Number, "startAngle"]);
        func1903.paramTypes.push([type_Number, "endAngle"]);
        func1903.paramTypes.push([type_Canvas, "canvas'"]);
        func1903.paramCounts = [
                                1,
                                2,
                                1,
                                1,
                                1,
                                ];
        func1903.variableArities = [
                                    false,
                                    false,
                                    false,
                                    false,
                                    false,
                                    ];
        obj1901.methods["at()size()from()to()on"] = func1903;
        var func2017 = function(argcv) {
            var curarg = 1;
            var var_location__39__ = arguments[curarg];
            curarg++;
            var var_width__39__ = arguments[curarg];
            curarg++;
            var var_height__39__ = arguments[curarg];
            curarg++;
            var var_startAngle = arguments[curarg];
            curarg++;
            var var_endAngle = arguments[curarg];
            curarg++;
            var var_canvas__39__ = arguments[curarg];
            curarg++;
            var inheritingObject = arguments[curarg++];
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                var obj2018 = Grace_allocObject();
                var inho2018 = inheritingObject;
                while (inho2018.superobj) inho2018 = inho2018.superobj;
                inho2018.superobj = obj2018;
                obj2018.data = inheritingObject.data;
                obj2018.outer = this;
                var reader_objectdraw_outer2019 = function() {
                    return this.outer;
                }
                obj2018.methods["outer"] = reader_objectdraw_outer2019;
                function obj_init_2018() {
                    var origSuperDepth = superDepth;
                    superDepth = obj2018;
                    var func2020 = function(argcv) {    // method draw(1)
                        var curarg = 1;
                        var var_ctx = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func2020.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method draw(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 811
                            onSelf = true;
                            var call2021 = callmethod(this, "color", [0]);
                            var call2022 = callmethod(call2021,"red", [0]);
                            lineNumber = 811
                            onSelf = true;
                            var call2023 = callmethod(this, "color", [0]);
                            var call2024 = callmethod(call2023,"green", [0]);
                            lineNumber = 811
                            onSelf = true;
                            var call2025 = callmethod(this, "color", [0]);
                            var call2026 = callmethod(call2025,"blue", [0]);
                            var call2027 = callmethod(var_ctx,"set_source_rgb", [3], call2022, call2024, call2026);
                            lineNumber = 812
                            var call2028 = callmethod(var_ctx,"save", [0]);
                            lineNumber = 813
                            onSelf = true;
                            var call2029 = callmethod(this, "x", [0]);
                            onSelf = true;
                            var call2030 = callmethod(this, "width", [0]);
                            var quotient2032 = callmethod(call2030, "/", [1], new GraceNum(2));
                            var opresult2034 = callmethod(call2029, "+", [1], quotient2032);
                            onSelf = true;
                            var call2035 = callmethod(this, "y", [0]);
                            onSelf = true;
                            var call2036 = callmethod(this, "height", [0]);
                            var quotient2038 = callmethod(call2036, "/", [1], new GraceNum(2));
                            var opresult2040 = callmethod(call2035, "+", [1], quotient2038);
                            var call2041 = callmethod(var_ctx,"translate", [2], opresult2034, opresult2040);
                            lineNumber = 814
                            onSelf = true;
                            var call2042 = callmethod(this, "width", [0]);
                            var quotient2044 = callmethod(call2042, "/", [1], new GraceNum(2));
                            onSelf = true;
                            var call2045 = callmethod(this, "height", [0]);
                            var quotient2047 = callmethod(call2045, "/", [1], new GraceNum(2));
                            var call2048 = callmethod(var_ctx,"scale", [2], quotient2044, quotient2047);
                            lineNumber = 815
                            var opresult2051 = callmethod(var_startAngle, "<=", [1], var_endAngle);
                            if (Grace_isTrue(opresult2051)) {
                                lineNumber = 816
                                var call2052 = callmethod(var_math,"Pi", [0]);
                                var prod2054 = callmethod(var_startAngle, "*", [1], call2052);
                                var quotient2056 = callmethod(prod2054, "/", [1], new GraceNum(180));
                                lineNumber = 816
                                var call2057 = callmethod(var_math,"Pi", [0]);
                                var prod2059 = callmethod(var_endAngle, "*", [1], call2057);
                                var quotient2061 = callmethod(prod2059, "/", [1], new GraceNum(180));
                                var call2062 = callmethod(var_ctx,"arc", [5], new GraceNum(0), new GraceNum(0), new GraceNum(1), quotient2056, quotient2061);
                                var if2049 = call2062;
                            } else {
                                lineNumber = 818
                                var call2063 = callmethod(var_math,"Pi", [0]);
                                var prod2065 = callmethod(var_endAngle, "*", [1], call2063);
                                var quotient2067 = callmethod(prod2065, "/", [1], new GraceNum(180));
                                lineNumber = 818
                                var call2068 = callmethod(var_math,"Pi", [0]);
                                var prod2070 = callmethod(var_startAngle, "*", [1], call2068);
                                var quotient2072 = callmethod(prod2070, "/", [1], new GraceNum(180));
                                var call2073 = callmethod(var_ctx,"arc", [5], new GraceNum(0), new GraceNum(0), new GraceNum(1), quotient2067, quotient2072);
                                var if2049 = call2073;
                            }
                            lineNumber = 820
                            var call2074 = callmethod(var_ctx,"restore", [0]);
                            lineNumber = 821
                            var call2075 = callmethod(var_ctx,"stroke", [0]);
                            return call2075
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2020.paramCounts = [
                                            1,
                                            ];
                    func2020.variableArities = [
                                                false,
                                                ];
                    obj2018.methods["draw"] = func2020;
                    var func2076 = function(argcv) {    // method asString
                        var curarg = 1;
                        if (argcv[0] !=  func2076.paramCounts[0]) // != 0 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method asString is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 825
                            var string2077 = new GraceString("FramedArc at (");
                            onSelf = true;
                            var call2078 = callmethod(this, "x", [0]);
                            var opresult2080 = callmethod(string2077, "++", [1], call2078);
                            var string2081 = new GraceString(",");
                            var opresult2083 = callmethod(opresult2080, "++", [1], string2081);
                            onSelf = true;
                            var call2084 = callmethod(this, "y", [0]);
                            var opresult2086 = callmethod(opresult2083, "++", [1], call2084);
                            var string2087 = new GraceString(") ");
                            var opresult2089 = callmethod(opresult2086, "++", [1], string2087);
                            lineNumber = 826
                            var string2090 = new GraceString("with height ");
                            onSelf = true;
                            var call2091 = callmethod(this, "height", [0]);
                            var opresult2093 = callmethod(string2090, "++", [1], call2091);
                            var string2094 = new GraceString(", width ");
                            var opresult2096 = callmethod(opresult2093, "++", [1], string2094);
                            onSelf = true;
                            var call2097 = callmethod(this, "width", [0]);
                            var opresult2099 = callmethod(opresult2096, "++", [1], call2097);
                            var string2100 = new GraceString(", and color ");
                            var opresult2102 = callmethod(opresult2099, "++", [1], string2100);
                            onSelf = true;
                            var call2103 = callmethod(this, "color", [0]);
                            var opresult2105 = callmethod(opresult2102, "++", [1], call2103);
                            var string2106 = new GraceString(" going ");
                            var opresult2108 = callmethod(opresult2105, "++", [1], string2106);
                            var opresult2110 = callmethod(opresult2089, "++", [1], opresult2108);
                            lineNumber = 827
                            var string2111 = new GraceString("from ");
                            var opresult2113 = callmethod(string2111, "++", [1], var_startAngle);
                            var string2114 = new GraceString(" degrees to ");
                            var opresult2116 = callmethod(opresult2113, "++", [1], string2114);
                            var opresult2118 = callmethod(opresult2116, "++", [1], var_endAngle);
                            var string2119 = new GraceString(" degrees");
                            var opresult2121 = callmethod(opresult2118, "++", [1], string2119);
                            var opresult2123 = callmethod(opresult2110, "++", [1], opresult2121);
                            return opresult2123
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2076.paramCounts = [
                                            0,
                                            ];
                    func2076.variableArities = [
                                                false,
                                                ];
                    obj2018.methods["asString"] = func2076;
                    var func2124 = function(argcv) {    // method ==(1)
                        var curarg = 1;
                        var var_other = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func2124.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method ==(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 832
                            onSelf = true;
                            var call2125 = callmethod(this, "asString", [0]);
                            lineNumber = 832
                            var call2126 = callmethod(var_other,"asString", [0]);
                            var opresult2128 = callmethod(call2125, "==", [1], call2126);
                            return opresult2128
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2124.paramCounts = [
                                            1,
                                            ];
                    func2124.variableArities = [
                                                false,
                                                ];
                    obj2018.methods["=="] = func2124;
                    sourceObject = obj2018;
                    lineNumber = 807
                    var call2129 = callmethod(var_aResizable2D,"at()size()on()object", [1, 2, 1, 1], var_location__39__, var_width__39__, var_height__39__, var_canvas__39__, this);
                    obj2018.superobj = call2129;
                    obj2018._value = call2129._value;
                    sourceObject = obj2018;
                    lineNumber = 808
                    onSelf = true;
                    var call2130 = callmethod(this, "addToCanvas", [1], var_canvas__39__);
                    sourceObject = obj2018;
                    sourceObject = obj2018;
                    sourceObject = obj2018;
                    superDepth = origSuperDepth;
                }
                obj_init_2018.apply(inheritingObject, []);
                return obj2018
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        func2017.paramTypes = [];
        func2017.paramTypes.push([type_Location, "location'"]);
        func2017.paramTypes.push([type_Number, "width'"]);
        func2017.paramTypes.push([type_Number, "height'"]);
        func2017.paramTypes.push([type_Number, "startAngle"]);
        func2017.paramTypes.push([type_Number, "endAngle"]);
        func2017.paramTypes.push([type_Canvas, "canvas'"]);
        obj1901.methods["at()size()from()to()on()object"] = func2017;
        sourceObject = obj1901;
        superDepth = origSuperDepth;
    }
    obj_init_1901.apply(obj1901, []);
    var var_aFramedArc = obj1901;
    lineNumber = 1
    var func2131 = function(argcv) {    // method aFilledArc
        var curarg = 1;
        if (argcv[0] !=  func2131.paramCounts[0]) // != 0 
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method aFilledArc is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            lineNumber = 841
            return var_aFilledArc
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func2131.paramCounts = [
                            0,
                            ];
    func2131.variableArities = [
                                false,
                                ];
    this.methods["aFilledArc"] = func2131;
    lineNumber = 1
    var obj2132 = Grace_allocObject();
    obj2132.outer = this;
    var reader_objectdraw_outer2133 = function() {
        return this.outer;
    }
    obj2132.methods["outer"] = reader_objectdraw_outer2133;
    function obj_init_2132() {
        var origSuperDepth = superDepth;
        superDepth = obj2132;
        var func2134 = function(argcv) {    // method at(1)size(2)from(1)to(1)on(1)
            var curarg = 1;
            var var_location__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func2134.paramCounts[0]) // != 1 
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method at(1)size(2)from(1)to(1)on(1) is of wrong size"));
            var var_width__39__ = arguments[curarg];
            curarg++;
            var var_height__39__ = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func2134.paramCounts[1]) // != 2 
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 2 to method at(1)size(2)from(1)to(1)on(1) is of wrong size"));
            var var_startAngle = arguments[curarg];
            curarg++;
            if (argcv[2] !=  func2134.paramCounts[2]) // != 1 
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 3 to method at(1)size(2)from(1)to(1)on(1) is of wrong size"));
            var var_endAngle = arguments[curarg];
            curarg++;
            if (argcv[3] !=  func2134.paramCounts[3]) // != 1 
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 4 to method at(1)size(2)from(1)to(1)on(1) is of wrong size"));
            var var_canvas__39__ = arguments[curarg];
            curarg++;
            if (argcv[4] !=  func2134.paramCounts[4]) // != 1 
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 5 to method at(1)size(2)from(1)to(1)on(1) is of wrong size"));
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                var obj2135 = Grace_allocObject();
                obj2135.outer = this;
                var reader_objectdraw_outer2136 = function() {
                    return this.outer;
                }
                obj2135.methods["outer"] = reader_objectdraw_outer2136;
                function obj_init_2135() {
                    var origSuperDepth = superDepth;
                    superDepth = obj2135;
                    var func2137 = function(argcv) {    // method draw(1)
                        var curarg = 1;
                        var var_ctx = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func2137.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method draw(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 847
                            onSelf = true;
                            var call2138 = callmethod(this, "color", [0]);
                            var call2139 = callmethod(call2138,"red", [0]);
                            lineNumber = 847
                            onSelf = true;
                            var call2140 = callmethod(this, "color", [0]);
                            var call2141 = callmethod(call2140,"green", [0]);
                            lineNumber = 847
                            onSelf = true;
                            var call2142 = callmethod(this, "color", [0]);
                            var call2143 = callmethod(call2142,"blue", [0]);
                            var call2144 = callmethod(var_ctx,"set_source_rgb", [3], call2139, call2141, call2143);
                            lineNumber = 848
                            var call2145 = callmethod(var_ctx,"save", [0]);
                            lineNumber = 849
                            onSelf = true;
                            var call2146 = callmethod(this, "x", [0]);
                            onSelf = true;
                            var call2147 = callmethod(this, "width", [0]);
                            var quotient2149 = callmethod(call2147, "/", [1], new GraceNum(2));
                            var opresult2151 = callmethod(call2146, "+", [1], quotient2149);
                            onSelf = true;
                            var call2152 = callmethod(this, "y", [0]);
                            onSelf = true;
                            var call2153 = callmethod(this, "height", [0]);
                            var quotient2155 = callmethod(call2153, "/", [1], new GraceNum(2));
                            var opresult2157 = callmethod(call2152, "+", [1], quotient2155);
                            var call2158 = callmethod(var_ctx,"translate", [2], opresult2151, opresult2157);
                            lineNumber = 850
                            onSelf = true;
                            var call2159 = callmethod(this, "width", [0]);
                            var quotient2161 = callmethod(call2159, "/", [1], new GraceNum(2));
                            onSelf = true;
                            var call2162 = callmethod(this, "height", [0]);
                            var quotient2164 = callmethod(call2162, "/", [1], new GraceNum(2));
                            var call2165 = callmethod(var_ctx,"scale", [2], quotient2161, quotient2164);
                            lineNumber = 851
                            var opresult2168 = callmethod(var_startAngle, "<=", [1], var_endAngle);
                            if (Grace_isTrue(opresult2168)) {
                                lineNumber = 852
                                var call2169 = callmethod(var_math,"Pi", [0]);
                                var prod2171 = callmethod(var_startAngle, "*", [1], call2169);
                                var quotient2173 = callmethod(prod2171, "/", [1], new GraceNum(180));
                                lineNumber = 852
                                var call2174 = callmethod(var_math,"Pi", [0]);
                                var prod2176 = callmethod(var_endAngle, "*", [1], call2174);
                                var quotient2178 = callmethod(prod2176, "/", [1], new GraceNum(180));
                                var call2179 = callmethod(var_ctx,"arc", [5], new GraceNum(0), new GraceNum(0), new GraceNum(1), quotient2173, quotient2178);
                                var if2166 = call2179;
                            } else {
                                lineNumber = 854
                                var call2180 = callmethod(var_math,"Pi", [0]);
                                var prod2182 = callmethod(var_endAngle, "*", [1], call2180);
                                var quotient2184 = callmethod(prod2182, "/", [1], new GraceNum(180));
                                lineNumber = 854
                                var call2185 = callmethod(var_math,"Pi", [0]);
                                var prod2187 = callmethod(var_startAngle, "*", [1], call2185);
                                var quotient2189 = callmethod(prod2187, "/", [1], new GraceNum(180));
                                var call2190 = callmethod(var_ctx,"arc", [5], new GraceNum(0), new GraceNum(0), new GraceNum(1), quotient2184, quotient2189);
                                var if2166 = call2190;
                            }
                            lineNumber = 856
                            var call2191 = callmethod(var_ctx,"restore", [0]);
                            lineNumber = 857
                            var call2192 = callmethod(var_ctx,"fill", [0]);
                            return call2192
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2137.paramCounts = [
                                            1,
                                            ];
                    func2137.variableArities = [
                                                false,
                                                ];
                    obj2135.methods["draw"] = func2137;
                    var func2193 = function(argcv) {    // method asString
                        var curarg = 1;
                        if (argcv[0] !=  func2193.paramCounts[0]) // != 0 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method asString is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 861
                            var string2194 = new GraceString("FilledArc at (");
                            onSelf = true;
                            var call2195 = callmethod(this, "x", [0]);
                            var opresult2197 = callmethod(string2194, "++", [1], call2195);
                            var string2198 = new GraceString(",");
                            var opresult2200 = callmethod(opresult2197, "++", [1], string2198);
                            onSelf = true;
                            var call2201 = callmethod(this, "y", [0]);
                            var opresult2203 = callmethod(opresult2200, "++", [1], call2201);
                            var string2204 = new GraceString(") ");
                            var opresult2206 = callmethod(opresult2203, "++", [1], string2204);
                            lineNumber = 862
                            var string2207 = new GraceString("with height ");
                            onSelf = true;
                            var call2208 = callmethod(this, "height", [0]);
                            var opresult2210 = callmethod(string2207, "++", [1], call2208);
                            var string2211 = new GraceString(", width ");
                            var opresult2213 = callmethod(opresult2210, "++", [1], string2211);
                            onSelf = true;
                            var call2214 = callmethod(this, "width", [0]);
                            var opresult2216 = callmethod(opresult2213, "++", [1], call2214);
                            var string2217 = new GraceString(", and color ");
                            var opresult2219 = callmethod(opresult2216, "++", [1], string2217);
                            onSelf = true;
                            var call2220 = callmethod(this, "color", [0]);
                            var opresult2222 = callmethod(opresult2219, "++", [1], call2220);
                            var string2223 = new GraceString(" going ");
                            var opresult2225 = callmethod(opresult2222, "++", [1], string2223);
                            var opresult2227 = callmethod(opresult2206, "++", [1], opresult2225);
                            lineNumber = 863
                            var string2228 = new GraceString("from ");
                            var opresult2230 = callmethod(string2228, "++", [1], var_startAngle);
                            var string2231 = new GraceString(" degrees to ");
                            var opresult2233 = callmethod(opresult2230, "++", [1], string2231);
                            var opresult2235 = callmethod(opresult2233, "++", [1], var_endAngle);
                            var string2236 = new GraceString(" degrees");
                            var opresult2238 = callmethod(opresult2235, "++", [1], string2236);
                            var opresult2240 = callmethod(opresult2227, "++", [1], opresult2238);
                            return opresult2240
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2193.paramCounts = [
                                            0,
                                            ];
                    func2193.variableArities = [
                                                false,
                                                ];
                    obj2135.methods["asString"] = func2193;
                    var func2241 = function(argcv) {    // method ==(1)
                        var curarg = 1;
                        var var_other = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func2241.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method ==(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 868
                            onSelf = true;
                            var call2242 = callmethod(this, "asString", [0]);
                            lineNumber = 868
                            var call2243 = callmethod(var_other,"asString", [0]);
                            var opresult2245 = callmethod(call2242, "==", [1], call2243);
                            return opresult2245
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2241.paramCounts = [
                                            1,
                                            ];
                    func2241.variableArities = [
                                                false,
                                                ];
                    obj2135.methods["=="] = func2241;
                    sourceObject = obj2135;
                    lineNumber = 843
                    var call2246 = callmethod(var_aResizable2D,"at()size()on()object", [1, 2, 1, 1], var_location__39__, var_width__39__, var_height__39__, var_canvas__39__, this);
                    obj2135.superobj = call2246;
                    obj2135._value = call2246._value;
                    sourceObject = obj2135;
                    lineNumber = 844
                    onSelf = true;
                    var call2247 = callmethod(this, "addToCanvas", [1], var_canvas__39__);
                    sourceObject = obj2135;
                    sourceObject = obj2135;
                    sourceObject = obj2135;
                    superDepth = origSuperDepth;
                }
                obj_init_2135.apply(obj2135, []);
                return obj2135
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        func2134.paramTypes = [];
        func2134.paramTypes.push([type_Location, "location'"]);
        func2134.paramTypes.push([type_Number, "width'"]);
        func2134.paramTypes.push([type_Number, "height'"]);
        func2134.paramTypes.push([type_Number, "startAngle"]);
        func2134.paramTypes.push([type_Number, "endAngle"]);
        func2134.paramTypes.push([type_Canvas, "canvas'"]);
        func2134.paramCounts = [
                                1,
                                2,
                                1,
                                1,
                                1,
                                ];
        func2134.variableArities = [
                                    false,
                                    false,
                                    false,
                                    false,
                                    false,
                                    ];
        obj2132.methods["at()size()from()to()on"] = func2134;
        var func2248 = function(argcv) {
            var curarg = 1;
            var var_location__39__ = arguments[curarg];
            curarg++;
            var var_width__39__ = arguments[curarg];
            curarg++;
            var var_height__39__ = arguments[curarg];
            curarg++;
            var var_startAngle = arguments[curarg];
            curarg++;
            var var_endAngle = arguments[curarg];
            curarg++;
            var var_canvas__39__ = arguments[curarg];
            curarg++;
            var inheritingObject = arguments[curarg++];
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                var obj2249 = Grace_allocObject();
                var inho2249 = inheritingObject;
                while (inho2249.superobj) inho2249 = inho2249.superobj;
                inho2249.superobj = obj2249;
                obj2249.data = inheritingObject.data;
                obj2249.outer = this;
                var reader_objectdraw_outer2250 = function() {
                    return this.outer;
                }
                obj2249.methods["outer"] = reader_objectdraw_outer2250;
                function obj_init_2249() {
                    var origSuperDepth = superDepth;
                    superDepth = obj2249;
                    var func2251 = function(argcv) {    // method draw(1)
                        var curarg = 1;
                        var var_ctx = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func2251.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method draw(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 847
                            onSelf = true;
                            var call2252 = callmethod(this, "color", [0]);
                            var call2253 = callmethod(call2252,"red", [0]);
                            lineNumber = 847
                            onSelf = true;
                            var call2254 = callmethod(this, "color", [0]);
                            var call2255 = callmethod(call2254,"green", [0]);
                            lineNumber = 847
                            onSelf = true;
                            var call2256 = callmethod(this, "color", [0]);
                            var call2257 = callmethod(call2256,"blue", [0]);
                            var call2258 = callmethod(var_ctx,"set_source_rgb", [3], call2253, call2255, call2257);
                            lineNumber = 848
                            var call2259 = callmethod(var_ctx,"save", [0]);
                            lineNumber = 849
                            onSelf = true;
                            var call2260 = callmethod(this, "x", [0]);
                            onSelf = true;
                            var call2261 = callmethod(this, "width", [0]);
                            var quotient2263 = callmethod(call2261, "/", [1], new GraceNum(2));
                            var opresult2265 = callmethod(call2260, "+", [1], quotient2263);
                            onSelf = true;
                            var call2266 = callmethod(this, "y", [0]);
                            onSelf = true;
                            var call2267 = callmethod(this, "height", [0]);
                            var quotient2269 = callmethod(call2267, "/", [1], new GraceNum(2));
                            var opresult2271 = callmethod(call2266, "+", [1], quotient2269);
                            var call2272 = callmethod(var_ctx,"translate", [2], opresult2265, opresult2271);
                            lineNumber = 850
                            onSelf = true;
                            var call2273 = callmethod(this, "width", [0]);
                            var quotient2275 = callmethod(call2273, "/", [1], new GraceNum(2));
                            onSelf = true;
                            var call2276 = callmethod(this, "height", [0]);
                            var quotient2278 = callmethod(call2276, "/", [1], new GraceNum(2));
                            var call2279 = callmethod(var_ctx,"scale", [2], quotient2275, quotient2278);
                            lineNumber = 851
                            var opresult2282 = callmethod(var_startAngle, "<=", [1], var_endAngle);
                            if (Grace_isTrue(opresult2282)) {
                                lineNumber = 852
                                var call2283 = callmethod(var_math,"Pi", [0]);
                                var prod2285 = callmethod(var_startAngle, "*", [1], call2283);
                                var quotient2287 = callmethod(prod2285, "/", [1], new GraceNum(180));
                                lineNumber = 852
                                var call2288 = callmethod(var_math,"Pi", [0]);
                                var prod2290 = callmethod(var_endAngle, "*", [1], call2288);
                                var quotient2292 = callmethod(prod2290, "/", [1], new GraceNum(180));
                                var call2293 = callmethod(var_ctx,"arc", [5], new GraceNum(0), new GraceNum(0), new GraceNum(1), quotient2287, quotient2292);
                                var if2280 = call2293;
                            } else {
                                lineNumber = 854
                                var call2294 = callmethod(var_math,"Pi", [0]);
                                var prod2296 = callmethod(var_endAngle, "*", [1], call2294);
                                var quotient2298 = callmethod(prod2296, "/", [1], new GraceNum(180));
                                lineNumber = 854
                                var call2299 = callmethod(var_math,"Pi", [0]);
                                var prod2301 = callmethod(var_startAngle, "*", [1], call2299);
                                var quotient2303 = callmethod(prod2301, "/", [1], new GraceNum(180));
                                var call2304 = callmethod(var_ctx,"arc", [5], new GraceNum(0), new GraceNum(0), new GraceNum(1), quotient2298, quotient2303);
                                var if2280 = call2304;
                            }
                            lineNumber = 856
                            var call2305 = callmethod(var_ctx,"restore", [0]);
                            lineNumber = 857
                            var call2306 = callmethod(var_ctx,"fill", [0]);
                            return call2306
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2251.paramCounts = [
                                            1,
                                            ];
                    func2251.variableArities = [
                                                false,
                                                ];
                    obj2249.methods["draw"] = func2251;
                    var func2307 = function(argcv) {    // method asString
                        var curarg = 1;
                        if (argcv[0] !=  func2307.paramCounts[0]) // != 0 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method asString is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 861
                            var string2308 = new GraceString("FilledArc at (");
                            onSelf = true;
                            var call2309 = callmethod(this, "x", [0]);
                            var opresult2311 = callmethod(string2308, "++", [1], call2309);
                            var string2312 = new GraceString(",");
                            var opresult2314 = callmethod(opresult2311, "++", [1], string2312);
                            onSelf = true;
                            var call2315 = callmethod(this, "y", [0]);
                            var opresult2317 = callmethod(opresult2314, "++", [1], call2315);
                            var string2318 = new GraceString(") ");
                            var opresult2320 = callmethod(opresult2317, "++", [1], string2318);
                            lineNumber = 862
                            var string2321 = new GraceString("with height ");
                            onSelf = true;
                            var call2322 = callmethod(this, "height", [0]);
                            var opresult2324 = callmethod(string2321, "++", [1], call2322);
                            var string2325 = new GraceString(", width ");
                            var opresult2327 = callmethod(opresult2324, "++", [1], string2325);
                            onSelf = true;
                            var call2328 = callmethod(this, "width", [0]);
                            var opresult2330 = callmethod(opresult2327, "++", [1], call2328);
                            var string2331 = new GraceString(", and color ");
                            var opresult2333 = callmethod(opresult2330, "++", [1], string2331);
                            onSelf = true;
                            var call2334 = callmethod(this, "color", [0]);
                            var opresult2336 = callmethod(opresult2333, "++", [1], call2334);
                            var string2337 = new GraceString(" going ");
                            var opresult2339 = callmethod(opresult2336, "++", [1], string2337);
                            var opresult2341 = callmethod(opresult2320, "++", [1], opresult2339);
                            lineNumber = 863
                            var string2342 = new GraceString("from ");
                            var opresult2344 = callmethod(string2342, "++", [1], var_startAngle);
                            var string2345 = new GraceString(" degrees to ");
                            var opresult2347 = callmethod(opresult2344, "++", [1], string2345);
                            var opresult2349 = callmethod(opresult2347, "++", [1], var_endAngle);
                            var string2350 = new GraceString(" degrees");
                            var opresult2352 = callmethod(opresult2349, "++", [1], string2350);
                            var opresult2354 = callmethod(opresult2341, "++", [1], opresult2352);
                            return opresult2354
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2307.paramCounts = [
                                            0,
                                            ];
                    func2307.variableArities = [
                                                false,
                                                ];
                    obj2249.methods["asString"] = func2307;
                    var func2355 = function(argcv) {    // method ==(1)
                        var curarg = 1;
                        var var_other = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func2355.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method ==(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 868
                            onSelf = true;
                            var call2356 = callmethod(this, "asString", [0]);
                            lineNumber = 868
                            var call2357 = callmethod(var_other,"asString", [0]);
                            var opresult2359 = callmethod(call2356, "==", [1], call2357);
                            return opresult2359
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2355.paramCounts = [
                                            1,
                                            ];
                    func2355.variableArities = [
                                                false,
                                                ];
                    obj2249.methods["=="] = func2355;
                    sourceObject = obj2249;
                    lineNumber = 843
                    var call2360 = callmethod(var_aResizable2D,"at()size()on()object", [1, 2, 1, 1], var_location__39__, var_width__39__, var_height__39__, var_canvas__39__, this);
                    obj2249.superobj = call2360;
                    obj2249._value = call2360._value;
                    sourceObject = obj2249;
                    lineNumber = 844
                    onSelf = true;
                    var call2361 = callmethod(this, "addToCanvas", [1], var_canvas__39__);
                    sourceObject = obj2249;
                    sourceObject = obj2249;
                    sourceObject = obj2249;
                    superDepth = origSuperDepth;
                }
                obj_init_2249.apply(inheritingObject, []);
                return obj2249
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        func2248.paramTypes = [];
        func2248.paramTypes.push([type_Location, "location'"]);
        func2248.paramTypes.push([type_Number, "width'"]);
        func2248.paramTypes.push([type_Number, "height'"]);
        func2248.paramTypes.push([type_Number, "startAngle"]);
        func2248.paramTypes.push([type_Number, "endAngle"]);
        func2248.paramTypes.push([type_Canvas, "canvas'"]);
        obj2132.methods["at()size()from()to()on()object"] = func2248;
        sourceObject = obj2132;
        superDepth = origSuperDepth;
    }
    obj_init_2132.apply(obj2132, []);
    var var_aFilledArc = obj2132;
    lineNumber = 1
    var func2362 = function(argcv) {    // method aDrawableImage
        var curarg = 1;
        if (argcv[0] !=  func2362.paramCounts[0]) // != 0 
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method aDrawableImage is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            lineNumber = 875
            return var_aDrawableImage
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func2362.paramCounts = [
                            0,
                            ];
    func2362.variableArities = [
                                false,
                                ];
    this.methods["aDrawableImage"] = func2362;
    lineNumber = 1
    var obj2363 = Grace_allocObject();
    obj2363.outer = this;
    var reader_objectdraw_outer2364 = function() {
        return this.outer;
    }
    obj2363.methods["outer"] = reader_objectdraw_outer2364;
    function obj_init_2363() {
        var origSuperDepth = superDepth;
        superDepth = obj2363;
        var func2365 = function(argcv) {    // method at(1)size(2)file(1)on(1)
            var curarg = 1;
            var var_location__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func2365.paramCounts[0]) // != 1 
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method at(1)size(2)file(1)on(1) is of wrong size"));
            var var_width__39__ = arguments[curarg];
            curarg++;
            var var_height__39__ = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func2365.paramCounts[1]) // != 2 
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 2 to method at(1)size(2)file(1)on(1) is of wrong size"));
            var var_fileName = arguments[curarg];
            curarg++;
            if (argcv[2] !=  func2365.paramCounts[2]) // != 1 
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 3 to method at(1)size(2)file(1)on(1) is of wrong size"));
            var var_canvas__39__ = arguments[curarg];
            curarg++;
            if (argcv[3] !=  func2365.paramCounts[3]) // != 1 
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 4 to method at(1)size(2)file(1)on(1) is of wrong size"));
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                var obj2366 = Grace_allocObject();
                obj2366.outer = this;
                var reader_objectdraw_outer2367 = function() {
                    return this.outer;
                }
                obj2366.methods["outer"] = reader_objectdraw_outer2367;
                function obj_init_2366() {
                    var origSuperDepth = superDepth;
                    superDepth = obj2366;
                    var func2368 = function(argcv) {    // method draw(1)
                        var curarg = 1;
                        var var_ctx = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func2368.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method draw(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 890
                            var call2369 = callmethod(var_ctx,"save", [0]);
                            lineNumber = 891
                            onSelf = true;
                            var call2370 = callmethod(this, "x", [0]);
                            onSelf = true;
                            var call2371 = callmethod(this, "y", [0]);
                            var call2372 = callmethod(var_ctx,"translate", [2], call2370, call2371);
                            lineNumber = 892
                            onSelf = true;
                            var call2373 = callmethod(this, "width", [0]);
                            onSelf = true;
                            var call2374 = callmethod(this, "imWidth", [0]);
                            var quotient2376 = callmethod(call2373, "/", [1], call2374);
                            onSelf = true;
                            var call2377 = callmethod(this, "height", [0]);
                            onSelf = true;
                            var call2378 = callmethod(this, "imHeight", [0]);
                            var quotient2380 = callmethod(call2377, "/", [1], call2378);
                            var call2381 = callmethod(var_ctx,"scale", [2], quotient2376, quotient2380);
                            lineNumber = 893
                            onSelf = true;
                            var call2382 = callmethod(this, "surface", [0]);
                            var call2383 = callmethod(var_ctx,"set_source_surface", [3], call2382, new GraceNum(0), new GraceNum(0));
                            lineNumber = 894
                            var call2384 = callmethod(var_ctx,"paint", [0]);
                            lineNumber = 895
                            var call2385 = callmethod(var_ctx,"restore", [0]);
                            return call2385
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2368.paramCounts = [
                                            1,
                                            ];
                    func2368.variableArities = [
                                                false,
                                                ];
                    obj2366.methods["draw"] = func2368;
                    var func2386 = function(argcv) {    // method asString
                        var curarg = 1;
                        if (argcv[0] !=  func2386.paramCounts[0]) // != 0 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method asString is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 899
                            var string2387 = new GraceString("DrawableImage at (");
                            onSelf = true;
                            var call2388 = callmethod(this, "x", [0]);
                            var opresult2390 = callmethod(string2387, "++", [1], call2388);
                            var string2391 = new GraceString(",");
                            var opresult2393 = callmethod(opresult2390, "++", [1], string2391);
                            onSelf = true;
                            var call2394 = callmethod(this, "y", [0]);
                            var opresult2396 = callmethod(opresult2393, "++", [1], call2394);
                            var string2397 = new GraceString(") ");
                            var opresult2399 = callmethod(opresult2396, "++", [1], string2397);
                            lineNumber = 900
                            var string2400 = new GraceString("with height ");
                            onSelf = true;
                            var call2401 = callmethod(this, "height", [0]);
                            var opresult2403 = callmethod(string2400, "++", [1], call2401);
                            var string2404 = new GraceString(", width ");
                            var opresult2406 = callmethod(opresult2403, "++", [1], string2404);
                            onSelf = true;
                            var call2407 = callmethod(this, "width", [0]);
                            var opresult2409 = callmethod(opresult2406, "++", [1], call2407);
                            var string2410 = new GraceString(", ");
                            var opresult2412 = callmethod(opresult2409, "++", [1], string2410);
                            var opresult2414 = callmethod(opresult2399, "++", [1], opresult2412);
                            lineNumber = 901
                            var string2415 = new GraceString("from file ");
                            var opresult2417 = callmethod(string2415, "++", [1], var_fileName);
                            var string2418 = new GraceString("");
                            var opresult2420 = callmethod(opresult2417, "++", [1], string2418);
                            var opresult2422 = callmethod(opresult2414, "++", [1], opresult2420);
                            return opresult2422
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2386.paramCounts = [
                                            0,
                                            ];
                    func2386.variableArities = [
                                                false,
                                                ];
                    obj2366.methods["asString"] = func2386;
                    var func2423 = function(argcv) {    // method ==(1)
                        var curarg = 1;
                        var var_other = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func2423.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method ==(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 906
                            onSelf = true;
                            var call2424 = callmethod(this, "asString", [0]);
                            lineNumber = 906
                            var call2425 = callmethod(var_other,"asString", [0]);
                            var opresult2427 = callmethod(call2424, "==", [1], call2425);
                            return opresult2427
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2423.paramCounts = [
                                            1,
                                            ];
                    func2423.variableArities = [
                                                false,
                                                ];
                    obj2366.methods["=="] = func2423;
                    sourceObject = obj2366;
                    lineNumber = 877
                    var call2428 = callmethod(var_aResizable2D,"at()size()on()object", [1, 2, 1, 1], var_location__39__, var_width__39__, var_height__39__, var_canvas__39__, this);
                    obj2366.superobj = call2428;
                    obj2366._value = call2428._value;
                    sourceObject = obj2366;
                    lineNumber = 878
                    onSelf = true;
                    var call2429 = callmethod(this, "addToCanvas", [1], var_canvas__39__);
                    sourceObject = obj2366;
                    lineNumber = 884
                    var call2430 = callmethod(var_cairo,"image_surface_create_from_png", [1], var_fileName);
                    obj2366.data["surface"] = call2430;
                    var reader_objectdraw_surface2431 = function() {
                        return this.data["surface"];
                    }
                    reader_objectdraw_surface2431.def = true;
                    reader_objectdraw_surface2431.confidential = true;
                    obj2366.methods["surface"] = reader_objectdraw_surface2431;
                    lineNumber = 884;
                    if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                 [1], call2430)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of def 'surface' to be of type Dynamic"))
                        sourceObject = obj2366;
                    lineNumber = 885
                    onSelf = true;
                    var call2432 = callmethod(this, "surface", [0]);
                    var call2433 = callmethod(call2432,"width", [0]);
                    obj2366.data["imWidth"] = call2433;
                    var reader_objectdraw_imWidth2434 = function() {
                        return this.data["imWidth"];
                    }
                    reader_objectdraw_imWidth2434.def = true;
                    reader_objectdraw_imWidth2434.confidential = true;
                    obj2366.methods["imWidth"] = reader_objectdraw_imWidth2434;
                    lineNumber = 885;
                    if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                 [1], call2433)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of def 'imWidth' to be of type Dynamic"))
                        sourceObject = obj2366;
                    lineNumber = 886
                    onSelf = true;
                    var call2435 = callmethod(this, "surface", [0]);
                    var call2436 = callmethod(call2435,"height", [0]);
                    obj2366.data["imHeight"] = call2436;
                    var reader_objectdraw_imHeight2437 = function() {
                        return this.data["imHeight"];
                    }
                    reader_objectdraw_imHeight2437.def = true;
                    reader_objectdraw_imHeight2437.confidential = true;
                    obj2366.methods["imHeight"] = reader_objectdraw_imHeight2437;
                    lineNumber = 886;
                    if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                 [1], call2436)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of def 'imHeight' to be of type Dynamic"))
                        sourceObject = obj2366;
                    sourceObject = obj2366;
                    sourceObject = obj2366;
                    superDepth = origSuperDepth;
                }
                obj_init_2366.apply(obj2366, []);
                return obj2366
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        func2365.paramTypes = [];
        func2365.paramTypes.push([type_Location, "location'"]);
        func2365.paramTypes.push([type_Number, "width'"]);
        func2365.paramTypes.push([type_Number, "height'"]);
        func2365.paramTypes.push([type_String, "fileName"]);
        func2365.paramTypes.push([type_Canvas, "canvas'"]);
        func2365.paramCounts = [
                                1,
                                2,
                                1,
                                1,
                                ];
        func2365.variableArities = [
                                    false,
                                    false,
                                    false,
                                    false,
                                    ];
        obj2363.methods["at()size()file()on"] = func2365;
        var func2438 = function(argcv) {
            var curarg = 1;
            var var_location__39__ = arguments[curarg];
            curarg++;
            var var_width__39__ = arguments[curarg];
            curarg++;
            var var_height__39__ = arguments[curarg];
            curarg++;
            var var_fileName = arguments[curarg];
            curarg++;
            var var_canvas__39__ = arguments[curarg];
            curarg++;
            var inheritingObject = arguments[curarg++];
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                var obj2439 = Grace_allocObject();
                var inho2439 = inheritingObject;
                while (inho2439.superobj) inho2439 = inho2439.superobj;
                inho2439.superobj = obj2439;
                obj2439.data = inheritingObject.data;
                obj2439.outer = this;
                var reader_objectdraw_outer2440 = function() {
                    return this.outer;
                }
                obj2439.methods["outer"] = reader_objectdraw_outer2440;
                function obj_init_2439() {
                    var origSuperDepth = superDepth;
                    superDepth = obj2439;
                    var func2441 = function(argcv) {    // method draw(1)
                        var curarg = 1;
                        var var_ctx = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func2441.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method draw(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 890
                            var call2442 = callmethod(var_ctx,"save", [0]);
                            lineNumber = 891
                            onSelf = true;
                            var call2443 = callmethod(this, "x", [0]);
                            onSelf = true;
                            var call2444 = callmethod(this, "y", [0]);
                            var call2445 = callmethod(var_ctx,"translate", [2], call2443, call2444);
                            lineNumber = 892
                            onSelf = true;
                            var call2446 = callmethod(this, "width", [0]);
                            onSelf = true;
                            var call2447 = callmethod(this, "imWidth", [0]);
                            var quotient2449 = callmethod(call2446, "/", [1], call2447);
                            onSelf = true;
                            var call2450 = callmethod(this, "height", [0]);
                            onSelf = true;
                            var call2451 = callmethod(this, "imHeight", [0]);
                            var quotient2453 = callmethod(call2450, "/", [1], call2451);
                            var call2454 = callmethod(var_ctx,"scale", [2], quotient2449, quotient2453);
                            lineNumber = 893
                            onSelf = true;
                            var call2455 = callmethod(this, "surface", [0]);
                            var call2456 = callmethod(var_ctx,"set_source_surface", [3], call2455, new GraceNum(0), new GraceNum(0));
                            lineNumber = 894
                            var call2457 = callmethod(var_ctx,"paint", [0]);
                            lineNumber = 895
                            var call2458 = callmethod(var_ctx,"restore", [0]);
                            return call2458
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2441.paramCounts = [
                                            1,
                                            ];
                    func2441.variableArities = [
                                                false,
                                                ];
                    obj2439.methods["draw"] = func2441;
                    var func2459 = function(argcv) {    // method asString
                        var curarg = 1;
                        if (argcv[0] !=  func2459.paramCounts[0]) // != 0 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method asString is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 899
                            var string2460 = new GraceString("DrawableImage at (");
                            onSelf = true;
                            var call2461 = callmethod(this, "x", [0]);
                            var opresult2463 = callmethod(string2460, "++", [1], call2461);
                            var string2464 = new GraceString(",");
                            var opresult2466 = callmethod(opresult2463, "++", [1], string2464);
                            onSelf = true;
                            var call2467 = callmethod(this, "y", [0]);
                            var opresult2469 = callmethod(opresult2466, "++", [1], call2467);
                            var string2470 = new GraceString(") ");
                            var opresult2472 = callmethod(opresult2469, "++", [1], string2470);
                            lineNumber = 900
                            var string2473 = new GraceString("with height ");
                            onSelf = true;
                            var call2474 = callmethod(this, "height", [0]);
                            var opresult2476 = callmethod(string2473, "++", [1], call2474);
                            var string2477 = new GraceString(", width ");
                            var opresult2479 = callmethod(opresult2476, "++", [1], string2477);
                            onSelf = true;
                            var call2480 = callmethod(this, "width", [0]);
                            var opresult2482 = callmethod(opresult2479, "++", [1], call2480);
                            var string2483 = new GraceString(", ");
                            var opresult2485 = callmethod(opresult2482, "++", [1], string2483);
                            var opresult2487 = callmethod(opresult2472, "++", [1], opresult2485);
                            lineNumber = 901
                            var string2488 = new GraceString("from file ");
                            var opresult2490 = callmethod(string2488, "++", [1], var_fileName);
                            var string2491 = new GraceString("");
                            var opresult2493 = callmethod(opresult2490, "++", [1], string2491);
                            var opresult2495 = callmethod(opresult2487, "++", [1], opresult2493);
                            return opresult2495
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2459.paramCounts = [
                                            0,
                                            ];
                    func2459.variableArities = [
                                                false,
                                                ];
                    obj2439.methods["asString"] = func2459;
                    var func2496 = function(argcv) {    // method ==(1)
                        var curarg = 1;
                        var var_other = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func2496.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method ==(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 906
                            onSelf = true;
                            var call2497 = callmethod(this, "asString", [0]);
                            lineNumber = 906
                            var call2498 = callmethod(var_other,"asString", [0]);
                            var opresult2500 = callmethod(call2497, "==", [1], call2498);
                            return opresult2500
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2496.paramCounts = [
                                            1,
                                            ];
                    func2496.variableArities = [
                                                false,
                                                ];
                    obj2439.methods["=="] = func2496;
                    sourceObject = obj2439;
                    lineNumber = 877
                    var call2501 = callmethod(var_aResizable2D,"at()size()on()object", [1, 2, 1, 1], var_location__39__, var_width__39__, var_height__39__, var_canvas__39__, this);
                    obj2439.superobj = call2501;
                    obj2439._value = call2501._value;
                    sourceObject = obj2439;
                    lineNumber = 878
                    onSelf = true;
                    var call2502 = callmethod(this, "addToCanvas", [1], var_canvas__39__);
                    sourceObject = obj2439;
                    lineNumber = 884
                    var call2503 = callmethod(var_cairo,"image_surface_create_from_png", [1], var_fileName);
                    obj2439.data["surface"] = call2503;
                    var reader_objectdraw_surface2504 = function() {
                        return this.data["surface"];
                    }
                    reader_objectdraw_surface2504.def = true;
                    reader_objectdraw_surface2504.confidential = true;
                    obj2439.methods["surface"] = reader_objectdraw_surface2504;
                    lineNumber = 884;
                    if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                 [1], call2503)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of def 'surface' to be of type Dynamic"))
                        sourceObject = obj2439;
                    lineNumber = 885
                    onSelf = true;
                    var call2505 = callmethod(this, "surface", [0]);
                    var call2506 = callmethod(call2505,"width", [0]);
                    obj2439.data["imWidth"] = call2506;
                    var reader_objectdraw_imWidth2507 = function() {
                        return this.data["imWidth"];
                    }
                    reader_objectdraw_imWidth2507.def = true;
                    reader_objectdraw_imWidth2507.confidential = true;
                    obj2439.methods["imWidth"] = reader_objectdraw_imWidth2507;
                    lineNumber = 885;
                    if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                 [1], call2506)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of def 'imWidth' to be of type Dynamic"))
                        sourceObject = obj2439;
                    lineNumber = 886
                    onSelf = true;
                    var call2508 = callmethod(this, "surface", [0]);
                    var call2509 = callmethod(call2508,"height", [0]);
                    obj2439.data["imHeight"] = call2509;
                    var reader_objectdraw_imHeight2510 = function() {
                        return this.data["imHeight"];
                    }
                    reader_objectdraw_imHeight2510.def = true;
                    reader_objectdraw_imHeight2510.confidential = true;
                    obj2439.methods["imHeight"] = reader_objectdraw_imHeight2510;
                    lineNumber = 886;
                    if (!Grace_isTrue(callmethod(var_Dynamic, "match",
                                                 [1], call2509)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of def 'imHeight' to be of type Dynamic"))
                        sourceObject = obj2439;
                    sourceObject = obj2439;
                    sourceObject = obj2439;
                    superDepth = origSuperDepth;
                }
                obj_init_2439.apply(inheritingObject, []);
                return obj2439
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        func2438.paramTypes = [];
        func2438.paramTypes.push([type_Location, "location'"]);
        func2438.paramTypes.push([type_Number, "width'"]);
        func2438.paramTypes.push([type_Number, "height'"]);
        func2438.paramTypes.push([type_String, "fileName"]);
        func2438.paramTypes.push([type_Canvas, "canvas'"]);
        obj2363.methods["at()size()file()on()object"] = func2438;
        sourceObject = obj2363;
        superDepth = origSuperDepth;
    }
    obj_init_2363.apply(obj2363, []);
    var var_aDrawableImage = obj2363;
    lineNumber = 1
    var func2511 = function(argcv) {    // method aLine
        var curarg = 1;
        if (argcv[0] !=  func2511.paramCounts[0]) // != 0 
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method aLine is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            lineNumber = 912
            return var_aLine
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func2511.paramCounts = [
                            0,
                            ];
    func2511.variableArities = [
                                false,
                                ];
    this.methods["aLine"] = func2511;
    lineNumber = 1
    var obj2512 = Grace_allocObject();
    obj2512.outer = this;
    var reader_objectdraw_outer2513 = function() {
        return this.outer;
    }
    obj2512.methods["outer"] = reader_objectdraw_outer2513;
    function obj_init_2512() {
        var origSuperDepth = superDepth;
        superDepth = obj2512;
        var func2514 = function(argcv) {    // method from(1)to(1)on(1)
            var curarg = 1;
            var var_start__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func2514.paramCounts[0]) // != 1 
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method from(1)to(1)on(1) is of wrong size"));
            var var_end__39__ = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func2514.paramCounts[1]) // != 1 
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 2 to method from(1)to(1)on(1) is of wrong size"));
            var var_canvas__39__ = arguments[curarg];
            curarg++;
            if (argcv[2] !=  func2514.paramCounts[2]) // != 1 
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 3 to method from(1)to(1)on(1) is of wrong size"));
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                var obj2515 = Grace_allocObject();
                obj2515.outer = this;
                var reader_objectdraw_outer2516 = function() {
                    return this.outer;
                }
                obj2515.methods["outer"] = reader_objectdraw_outer2516;
                function obj_init_2515() {
                    var origSuperDepth = superDepth;
                    superDepth = obj2515;
                    var func2517 = function(argcv) {    // method start
                        var curarg = 1;
                        if (argcv[0] !=  func2517.paramCounts[0]) // != 0 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method start is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 920
                            onSelf = true;
                            var call2518 = callmethod(this, "location", [0]);
                            return call2518
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2517.paramCounts = [
                                            0,
                                            ];
                    func2517.variableArities = [
                                                false,
                                                ];
                    obj2515.methods["start"] = func2517;
                    var func2519 = function(argcv) {    // method end
                        var curarg = 1;
                        if (argcv[0] !=  func2519.paramCounts[0]) // != 0 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method end is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 924
                            onSelf = true;
                            var call2520 = callmethod(this, "theEnd", [0]);
                            return call2520
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2519.paramCounts = [
                                            0,
                                            ];
                    func2519.variableArities = [
                                                false,
                                                ];
                    obj2515.methods["end"] = func2519;
                    var func2521 = function(argcv) {    // method start:=(1)
                        var curarg = 1;
                        var var_newStart = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func2521.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method start:=(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 930
                            onSelf = true;
                            var call2522 = callmethod(this, "location:=", [1], var_newStart);
                            lineNumber = 931
                            onSelf = true;
                            var call2523 = callmethod(this, "setStateChanged", [0]);
                            return call2523
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2521.paramTypes = [];
                    func2521.paramTypes.push([type_Location, "newStart"]);
                    func2521.paramCounts = [
                                            1,
                                            ];
                    func2521.variableArities = [
                                                false,
                                                ];
                    obj2515.methods["start:="] = func2521;
                    var func2524 = function(argcv) {    // method end:=(1)
                        var curarg = 1;
                        var var_newEnd = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func2524.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method end:=(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 934
                            onSelf = true;
                            var call2525 = callmethod(this, "theEnd:=", [1], var_newEnd);
                            lineNumber = 935
                            onSelf = true;
                            var call2526 = callmethod(this, "setStateChanged", [0]);
                            return call2526
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2524.paramTypes = [];
                    func2524.paramTypes.push([type_Location, "newEnd"]);
                    func2524.paramCounts = [
                                            1,
                                            ];
                    func2524.variableArities = [
                                                false,
                                                ];
                    obj2515.methods["end:="] = func2524;
                    var func2527 = function(argcv) {    // method setEndPoints(2)
                        var curarg = 1;
                        var var_newStart = arguments[curarg];
                        curarg++;
                        var var_newEnd = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func2527.paramCounts[0]) // != 2 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method setEndPoints(2) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 939
                            onSelf = true;
                            var call2528 = callmethod(this, "start:=", [1], var_newStart);
                            lineNumber = 940
                            onSelf = true;
                            var call2529 = callmethod(this, "end:=", [1], var_newEnd);
                            return call2529
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2527.paramTypes = [];
                    func2527.paramTypes.push([type_Location, "newStart"]);
                    func2527.paramTypes.push([type_Location, "newEnd"]);
                    func2527.paramCounts = [
                                            2,
                                            ];
                    func2527.variableArities = [
                                                false,
                                                ];
                    obj2515.methods["setEndPoints"] = func2527;
                    var func2530 = function(argcv) {    // method draw(1)
                        var curarg = 1;
                        var var_ctx = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func2530.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method draw(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 944
                            onSelf = true;
                            var call2531 = callmethod(this, "color", [0]);
                            var call2532 = callmethod(call2531,"red", [0]);
                            lineNumber = 944
                            onSelf = true;
                            var call2533 = callmethod(this, "color", [0]);
                            var call2534 = callmethod(call2533,"green", [0]);
                            lineNumber = 944
                            onSelf = true;
                            var call2535 = callmethod(this, "color", [0]);
                            var call2536 = callmethod(call2535,"blue", [0]);
                            var call2537 = callmethod(var_ctx,"set_source_rgb", [3], call2532, call2534, call2536);
                            lineNumber = 945
                            onSelf = true;
                            var call2538 = callmethod(this, "location", [0]);
                            var call2539 = callmethod(call2538,"x", [0]);
                            lineNumber = 945
                            onSelf = true;
                            var call2540 = callmethod(this, "location", [0]);
                            var call2541 = callmethod(call2540,"y", [0]);
                            var call2542 = callmethod(var_ctx,"move_to", [2], call2539, call2541);
                            lineNumber = 946
                            onSelf = true;
                            var call2543 = callmethod(this, "theEnd", [0]);
                            var call2544 = callmethod(call2543,"x", [0]);
                            lineNumber = 946
                            onSelf = true;
                            var call2545 = callmethod(this, "theEnd", [0]);
                            var call2546 = callmethod(call2545,"y", [0]);
                            var call2547 = callmethod(var_ctx,"line_to", [2], call2544, call2546);
                            lineNumber = 947
                            var call2548 = callmethod(var_ctx,"stroke", [0]);
                            return call2548
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2530.paramCounts = [
                                            1,
                                            ];
                    func2530.variableArities = [
                                                false,
                                                ];
                    obj2515.methods["draw"] = func2530;
                    var func2549 = function(argcv) {    // method moveBy(2)
                        var curarg = 1;
                        var var_dx = arguments[curarg];
                        curarg++;
                        var var_dy = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func2549.paramCounts[0]) // != 2 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method moveBy(2) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 951
                            onSelf = true;
                            var call2550 = callmethod(this, "location", [0]);
                            var call2551 = callmethod(call2550,"translate", [2], var_dx, var_dy);
                            onSelf = true;
                            var call2552 = callmethod(this, "location:=", [1], call2551);
                            lineNumber = 952
                            onSelf = true;
                            var call2553 = callmethod(this, "theEnd", [0]);
                            var call2554 = callmethod(call2553,"translate", [2], var_dx, var_dy);
                            onSelf = true;
                            var call2555 = callmethod(this, "theEnd:=", [1], call2554);
                            lineNumber = 953
                            onSelf = true;
                            var call2556 = callmethod(this, "setStateChanged", [0]);
                            return call2556
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2549.paramTypes = [];
                    func2549.paramTypes.push([type_Number, "dx"]);
                    func2549.paramTypes.push([type_Number, "dy"]);
                    func2549.paramCounts = [
                                            2,
                                            ];
                    func2549.variableArities = [
                                                false,
                                                ];
                    obj2515.methods["moveBy"] = func2549;
                    sourceObject = obj2515;
                    lineNumber = 914
                    var call2557 = callmethod(var_aDrawable,"at()on()object", [1, 1, 1], var_start__39__, var_canvas__39__, this);
                    obj2515.superobj = call2557;
                    obj2515._value = call2557._value;
                    sourceObject = obj2515;
                    lineNumber = 916
                    obj2515.data["theEnd"] = var_end__39__;
                    var reader_objectdraw_theEnd2558 = function() {
                        return this.data["theEnd"];
                    }
                    obj2515.methods["theEnd"] = reader_objectdraw_theEnd2558;
                    obj2515.data["theEnd"] = var_end__39__;
                    var writer_objectdraw_theEnd2558 = function(argcv, o) {
                        this.data["theEnd"] = o;
                    }
                    obj2515.methods["theEnd:="] = writer_objectdraw_theEnd2558;
                    reader_objectdraw_theEnd2558.confidential = true;
                    writer_objectdraw_theEnd2558.confidential = true;
                    lineNumber = 916;
                    if (!Grace_isTrue(callmethod(var_Location, "match",
                                                 [1], var_end__39__)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'theEnd' to be of type Location"))
                        obj2515.mutable = true;
                    sourceObject = obj2515;
                    sourceObject = obj2515;
                    sourceObject = obj2515;
                    lineNumber = 926
                    onSelf = true;
                    var call2559 = callmethod(this, "addToCanvas", [1], var_canvas__39__);
                    sourceObject = obj2515;
                    sourceObject = obj2515;
                    sourceObject = obj2515;
                    sourceObject = obj2515;
                    sourceObject = obj2515;
                    superDepth = origSuperDepth;
                }
                obj_init_2515.apply(obj2515, []);
                return obj2515
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        func2514.paramTypes = [];
        func2514.paramTypes.push([type_Location, "start'"]);
        func2514.paramTypes.push([type_Location, "end'"]);
        func2514.paramTypes.push([type_Canvas, "canvas'"]);
        func2514.paramCounts = [
                                1,
                                1,
                                1,
                                ];
        func2514.variableArities = [
                                    false,
                                    false,
                                    false,
                                    ];
        obj2512.methods["from()to()on"] = func2514;
        var func2560 = function(argcv) {
            var curarg = 1;
            var var_start__39__ = arguments[curarg];
            curarg++;
            var var_end__39__ = arguments[curarg];
            curarg++;
            var var_canvas__39__ = arguments[curarg];
            curarg++;
            var inheritingObject = arguments[curarg++];
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                var obj2561 = Grace_allocObject();
                var inho2561 = inheritingObject;
                while (inho2561.superobj) inho2561 = inho2561.superobj;
                inho2561.superobj = obj2561;
                obj2561.data = inheritingObject.data;
                obj2561.outer = this;
                var reader_objectdraw_outer2562 = function() {
                    return this.outer;
                }
                obj2561.methods["outer"] = reader_objectdraw_outer2562;
                function obj_init_2561() {
                    var origSuperDepth = superDepth;
                    superDepth = obj2561;
                    var func2563 = function(argcv) {    // method start
                        var curarg = 1;
                        if (argcv[0] !=  func2563.paramCounts[0]) // != 0 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method start is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 920
                            onSelf = true;
                            var call2564 = callmethod(this, "location", [0]);
                            return call2564
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2563.paramCounts = [
                                            0,
                                            ];
                    func2563.variableArities = [
                                                false,
                                                ];
                    obj2561.methods["start"] = func2563;
                    var func2565 = function(argcv) {    // method end
                        var curarg = 1;
                        if (argcv[0] !=  func2565.paramCounts[0]) // != 0 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method end is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 924
                            onSelf = true;
                            var call2566 = callmethod(this, "theEnd", [0]);
                            return call2566
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2565.paramCounts = [
                                            0,
                                            ];
                    func2565.variableArities = [
                                                false,
                                                ];
                    obj2561.methods["end"] = func2565;
                    var func2567 = function(argcv) {    // method start:=(1)
                        var curarg = 1;
                        var var_newStart = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func2567.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method start:=(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 930
                            onSelf = true;
                            var call2568 = callmethod(this, "location:=", [1], var_newStart);
                            lineNumber = 931
                            onSelf = true;
                            var call2569 = callmethod(this, "setStateChanged", [0]);
                            return call2569
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2567.paramTypes = [];
                    func2567.paramTypes.push([type_Location, "newStart"]);
                    func2567.paramCounts = [
                                            1,
                                            ];
                    func2567.variableArities = [
                                                false,
                                                ];
                    obj2561.methods["start:="] = func2567;
                    var func2570 = function(argcv) {    // method end:=(1)
                        var curarg = 1;
                        var var_newEnd = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func2570.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method end:=(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 934
                            onSelf = true;
                            var call2571 = callmethod(this, "theEnd:=", [1], var_newEnd);
                            lineNumber = 935
                            onSelf = true;
                            var call2572 = callmethod(this, "setStateChanged", [0]);
                            return call2572
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2570.paramTypes = [];
                    func2570.paramTypes.push([type_Location, "newEnd"]);
                    func2570.paramCounts = [
                                            1,
                                            ];
                    func2570.variableArities = [
                                                false,
                                                ];
                    obj2561.methods["end:="] = func2570;
                    var func2573 = function(argcv) {    // method setEndPoints(2)
                        var curarg = 1;
                        var var_newStart = arguments[curarg];
                        curarg++;
                        var var_newEnd = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func2573.paramCounts[0]) // != 2 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method setEndPoints(2) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 939
                            onSelf = true;
                            var call2574 = callmethod(this, "start:=", [1], var_newStart);
                            lineNumber = 940
                            onSelf = true;
                            var call2575 = callmethod(this, "end:=", [1], var_newEnd);
                            return call2575
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2573.paramTypes = [];
                    func2573.paramTypes.push([type_Location, "newStart"]);
                    func2573.paramTypes.push([type_Location, "newEnd"]);
                    func2573.paramCounts = [
                                            2,
                                            ];
                    func2573.variableArities = [
                                                false,
                                                ];
                    obj2561.methods["setEndPoints"] = func2573;
                    var func2576 = function(argcv) {    // method draw(1)
                        var curarg = 1;
                        var var_ctx = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func2576.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method draw(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 944
                            onSelf = true;
                            var call2577 = callmethod(this, "color", [0]);
                            var call2578 = callmethod(call2577,"red", [0]);
                            lineNumber = 944
                            onSelf = true;
                            var call2579 = callmethod(this, "color", [0]);
                            var call2580 = callmethod(call2579,"green", [0]);
                            lineNumber = 944
                            onSelf = true;
                            var call2581 = callmethod(this, "color", [0]);
                            var call2582 = callmethod(call2581,"blue", [0]);
                            var call2583 = callmethod(var_ctx,"set_source_rgb", [3], call2578, call2580, call2582);
                            lineNumber = 945
                            onSelf = true;
                            var call2584 = callmethod(this, "location", [0]);
                            var call2585 = callmethod(call2584,"x", [0]);
                            lineNumber = 945
                            onSelf = true;
                            var call2586 = callmethod(this, "location", [0]);
                            var call2587 = callmethod(call2586,"y", [0]);
                            var call2588 = callmethod(var_ctx,"move_to", [2], call2585, call2587);
                            lineNumber = 946
                            onSelf = true;
                            var call2589 = callmethod(this, "theEnd", [0]);
                            var call2590 = callmethod(call2589,"x", [0]);
                            lineNumber = 946
                            onSelf = true;
                            var call2591 = callmethod(this, "theEnd", [0]);
                            var call2592 = callmethod(call2591,"y", [0]);
                            var call2593 = callmethod(var_ctx,"line_to", [2], call2590, call2592);
                            lineNumber = 947
                            var call2594 = callmethod(var_ctx,"stroke", [0]);
                            return call2594
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2576.paramCounts = [
                                            1,
                                            ];
                    func2576.variableArities = [
                                                false,
                                                ];
                    obj2561.methods["draw"] = func2576;
                    var func2595 = function(argcv) {    // method moveBy(2)
                        var curarg = 1;
                        var var_dx = arguments[curarg];
                        curarg++;
                        var var_dy = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func2595.paramCounts[0]) // != 2 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method moveBy(2) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 951
                            onSelf = true;
                            var call2596 = callmethod(this, "location", [0]);
                            var call2597 = callmethod(call2596,"translate", [2], var_dx, var_dy);
                            onSelf = true;
                            var call2598 = callmethod(this, "location:=", [1], call2597);
                            lineNumber = 952
                            onSelf = true;
                            var call2599 = callmethod(this, "theEnd", [0]);
                            var call2600 = callmethod(call2599,"translate", [2], var_dx, var_dy);
                            onSelf = true;
                            var call2601 = callmethod(this, "theEnd:=", [1], call2600);
                            lineNumber = 953
                            onSelf = true;
                            var call2602 = callmethod(this, "setStateChanged", [0]);
                            return call2602
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2595.paramTypes = [];
                    func2595.paramTypes.push([type_Number, "dx"]);
                    func2595.paramTypes.push([type_Number, "dy"]);
                    func2595.paramCounts = [
                                            2,
                                            ];
                    func2595.variableArities = [
                                                false,
                                                ];
                    obj2561.methods["moveBy"] = func2595;
                    sourceObject = obj2561;
                    lineNumber = 914
                    var call2603 = callmethod(var_aDrawable,"at()on()object", [1, 1, 1], var_start__39__, var_canvas__39__, this);
                    obj2561.superobj = call2603;
                    obj2561._value = call2603._value;
                    sourceObject = obj2561;
                    lineNumber = 916
                    obj2561.data["theEnd"] = var_end__39__;
                    var reader_objectdraw_theEnd2604 = function() {
                        return this.data["theEnd"];
                    }
                    obj2561.methods["theEnd"] = reader_objectdraw_theEnd2604;
                    obj2561.data["theEnd"] = var_end__39__;
                    var writer_objectdraw_theEnd2604 = function(argcv, o) {
                        this.data["theEnd"] = o;
                    }
                    obj2561.methods["theEnd:="] = writer_objectdraw_theEnd2604;
                    reader_objectdraw_theEnd2604.confidential = true;
                    writer_objectdraw_theEnd2604.confidential = true;
                    lineNumber = 916;
                    if (!Grace_isTrue(callmethod(var_Location, "match",
                                                 [1], var_end__39__)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'theEnd' to be of type Location"))
                        obj2561.mutable = true;
                    sourceObject = obj2561;
                    sourceObject = obj2561;
                    sourceObject = obj2561;
                    lineNumber = 926
                    onSelf = true;
                    var call2605 = callmethod(this, "addToCanvas", [1], var_canvas__39__);
                    sourceObject = obj2561;
                    sourceObject = obj2561;
                    sourceObject = obj2561;
                    sourceObject = obj2561;
                    sourceObject = obj2561;
                    superDepth = origSuperDepth;
                }
                obj_init_2561.apply(inheritingObject, []);
                return obj2561
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        func2560.paramTypes = [];
        func2560.paramTypes.push([type_Location, "start'"]);
        func2560.paramTypes.push([type_Location, "end'"]);
        func2560.paramTypes.push([type_Canvas, "canvas'"]);
        obj2512.methods["from()to()on()object"] = func2560;
        sourceObject = obj2512;
        superDepth = origSuperDepth;
    }
    obj_init_2512.apply(obj2512, []);
    var var_aLine = obj2512;
    lineNumber = 1
    var func2606 = function(argcv) {    // method aText
        var curarg = 1;
        if (argcv[0] !=  func2606.paramCounts[0]) // != 0 
            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method aText is of wrong size"));
        var returnTarget = invocationCount;
        invocationCount++;
        try {
            lineNumber = 968
            return var_aText
        } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
            } else {
                throw e;
            }
        }
    }
    func2606.paramCounts = [
                            0,
                            ];
    func2606.variableArities = [
                                false,
                                ];
    this.methods["aText"] = func2606;
    lineNumber = 1
    var obj2607 = Grace_allocObject();
    obj2607.outer = this;
    var reader_objectdraw_outer2608 = function() {
        return this.outer;
    }
    obj2607.methods["outer"] = reader_objectdraw_outer2608;
    function obj_init_2607() {
        var origSuperDepth = superDepth;
        superDepth = obj2607;
        var func2609 = function(argcv) {    // method at(1)with(1)on(1)
            var curarg = 1;
            var var_location__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func2609.paramCounts[0]) // != 1 
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method at(1)with(1)on(1) is of wrong size"));
            var var_contents__39__ = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func2609.paramCounts[1]) // != 1 
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 2 to method at(1)with(1)on(1) is of wrong size"));
            var var_canvas__39__ = arguments[curarg];
            curarg++;
            if (argcv[2] !=  func2609.paramCounts[2]) // != 1 
                callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 3 to method at(1)with(1)on(1) is of wrong size"));
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                var obj2610 = Grace_allocObject();
                obj2610.outer = this;
                var reader_objectdraw_outer2611 = function() {
                    return this.outer;
                }
                obj2610.methods["outer"] = reader_objectdraw_outer2611;
                function obj_init_2610() {
                    var origSuperDepth = superDepth;
                    superDepth = obj2610;
                    var func2612 = function(argcv) {    // method draw(1)
                        var curarg = 1;
                        var var_ctx = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func2612.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method draw(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 976
                            onSelf = true;
                            var call2613 = callmethod(this, "fontSize", [0]);
                            var call2614 = callmethod(var_ctx,"font_size:=", [1], call2613);
                            lineNumber = 977
                            onSelf = true;
                            var call2615 = callmethod(this, "color", [0]);
                            var call2616 = callmethod(call2615,"red", [0]);
                            lineNumber = 977
                            onSelf = true;
                            var call2617 = callmethod(this, "color", [0]);
                            var call2618 = callmethod(call2617,"green", [0]);
                            lineNumber = 977
                            onSelf = true;
                            var call2619 = callmethod(this, "color", [0]);
                            var call2620 = callmethod(call2619,"blue", [0]);
                            var call2621 = callmethod(var_ctx,"set_source_rgb", [3], call2616, call2618, call2620);
                            lineNumber = 978
                            onSelf = true;
                            var call2622 = callmethod(this, "x", [0]);
                            onSelf = true;
                            var call2623 = callmethod(this, "y", [0]);
                            var call2624 = callmethod(var_ctx,"move_to", [2], call2622, call2623);
                            lineNumber = 979
                            onSelf = true;
                            var call2625 = callmethod(this, "contents", [0]);
                            var call2626 = callmethod(var_ctx,"show_text", [1], call2625);
                            lineNumber = 980
                            var call2627 = callmethod(var_ctx,"fill", [0]);
                            return call2627
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2612.paramCounts = [
                                            1,
                                            ];
                    func2612.variableArities = [
                                                false,
                                                ];
                    obj2610.methods["draw"] = func2612;
                    var func2628 = function(argcv) {    // method contents
                        var curarg = 1;
                        if (argcv[0] !=  func2628.paramCounts[0]) // != 0 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method contents is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 984
                            onSelf = true;
                            var call2629 = callmethod(this, "theContents", [0]);
                            return call2629
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2628.paramCounts = [
                                            0,
                                            ];
                    func2628.variableArities = [
                                                false,
                                                ];
                    obj2610.methods["contents"] = func2628;
                    var func2630 = function(argcv) {    // method contents:=(1)
                        var curarg = 1;
                        var var_newContents = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func2630.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method contents:=(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 988
                            onSelf = true;
                            var call2631 = callmethod(this, "theContents:=", [1], var_newContents);
                            lineNumber = 989
                            onSelf = true;
                            var call2632 = callmethod(this, "setStateChanged", [0]);
                            return call2632
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2630.paramTypes = [];
                    func2630.paramTypes.push([type_String, "newContents"]);
                    func2630.paramCounts = [
                                            1,
                                            ];
                    func2630.variableArities = [
                                                false,
                                                ];
                    obj2610.methods["contents:="] = func2630;
                    var func2633 = function(argcv) {    // method fontSize:=(1)
                        var curarg = 1;
                        var var_size__39__ = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func2633.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method fontSize:=(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 993
                            onSelf = true;
                            var call2634 = callmethod(this, "size:=", [1], var_size__39__);
                            lineNumber = 994
                            onSelf = true;
                            var call2635 = callmethod(this, "setStateChanged", [0]);
                            return call2635
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2633.paramTypes = [];
                    func2633.paramTypes.push([type_Number, "size'"]);
                    func2633.paramCounts = [
                                            1,
                                            ];
                    func2633.variableArities = [
                                                false,
                                                ];
                    obj2610.methods["fontSize:="] = func2633;
                    var func2636 = function(argcv) {    // method fontSize
                        var curarg = 1;
                        if (argcv[0] !=  func2636.paramCounts[0]) // != 0 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method fontSize is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 998
                            onSelf = true;
                            var call2637 = callmethod(this, "size", [0]);
                            return call2637
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2636.paramCounts = [
                                            0,
                                            ];
                    func2636.variableArities = [
                                                false,
                                                ];
                    obj2610.methods["fontSize"] = func2636;
                    var func2638 = function(argcv) {    // method asString
                        var curarg = 1;
                        if (argcv[0] !=  func2638.paramCounts[0]) // != 0 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method asString is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 1002
                            var string2639 = new GraceString("Text at (");
                            onSelf = true;
                            var call2640 = callmethod(this, "x", [0]);
                            var opresult2642 = callmethod(string2639, "++", [1], call2640);
                            var string2643 = new GraceString(",");
                            var opresult2645 = callmethod(opresult2642, "++", [1], string2643);
                            onSelf = true;
                            var call2646 = callmethod(this, "y", [0]);
                            var opresult2648 = callmethod(opresult2645, "++", [1], call2646);
                            var string2649 = new GraceString(") with value ");
                            var opresult2651 = callmethod(opresult2648, "++", [1], string2649);
                            onSelf = true;
                            var call2652 = callmethod(this, "contents", [0]);
                            var opresult2654 = callmethod(opresult2651, "++", [1], call2652);
                            var string2655 = new GraceString(" and color ");
                            var opresult2657 = callmethod(opresult2654, "++", [1], string2655);
                            onSelf = true;
                            var call2658 = callmethod(this, "color", [0]);
                            var opresult2660 = callmethod(opresult2657, "++", [1], call2658);
                            var string2661 = new GraceString("");
                            var opresult2663 = callmethod(opresult2660, "++", [1], string2661);
                            return opresult2663
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2638.paramCounts = [
                                            0,
                                            ];
                    func2638.variableArities = [
                                                false,
                                                ];
                    obj2610.methods["asString"] = func2638;
                    sourceObject = obj2610;
                    lineNumber = 970
                    var call2664 = callmethod(var_aDrawable,"at()on()object", [1, 1, 1], var_location__39__, var_canvas__39__, this);
                    obj2610.superobj = call2664;
                    obj2610._value = call2664._value;
                    sourceObject = obj2610;
                    lineNumber = 971
                    onSelf = true;
                    var call2665 = callmethod(this, "addToCanvas", [1], var_canvas__39__);
                    sourceObject = obj2610;
                    lineNumber = 972
                    obj2610.data["theContents"] = var_contents__39__;
                    var reader_objectdraw_theContents2666 = function() {
                        return this.data["theContents"];
                    }
                    obj2610.methods["theContents"] = reader_objectdraw_theContents2666;
                    obj2610.data["theContents"] = var_contents__39__;
                    var writer_objectdraw_theContents2666 = function(argcv, o) {
                        this.data["theContents"] = o;
                    }
                    obj2610.methods["theContents:="] = writer_objectdraw_theContents2666;
                    reader_objectdraw_theContents2666.confidential = true;
                    writer_objectdraw_theContents2666.confidential = true;
                    lineNumber = 972;
                    if (!Grace_isTrue(callmethod(var_String, "match",
                                                 [1], var_contents__39__)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'theContents' to be of type String"))
                        obj2610.mutable = true;
                    sourceObject = obj2610;
                    lineNumber = 973
                    obj2610.data["size"] = new GraceNum(12);
                    var reader_objectdraw_size2667 = function() {
                        return this.data["size"];
                    }
                    obj2610.methods["size"] = reader_objectdraw_size2667;
                    obj2610.data["size"] = new GraceNum(12);
                    var writer_objectdraw_size2667 = function(argcv, o) {
                        this.data["size"] = o;
                    }
                    obj2610.methods["size:="] = writer_objectdraw_size2667;
                    writer_objectdraw_size2667.confidential = true;
                    lineNumber = 973;
                    if (!Grace_isTrue(callmethod(var_Number, "match",
                                                 [1], new GraceNum(12))))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'size' to be of type Number"))
                        obj2610.mutable = true;
                    sourceObject = obj2610;
                    sourceObject = obj2610;
                    sourceObject = obj2610;
                    sourceObject = obj2610;
                    sourceObject = obj2610;
                    sourceObject = obj2610;
                    superDepth = origSuperDepth;
                }
                obj_init_2610.apply(obj2610, []);
                return obj2610
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        func2609.paramTypes = [];
        func2609.paramTypes.push([type_Location, "location'"]);
        func2609.paramTypes.push([type_String, "contents'"]);
        func2609.paramTypes.push([type_Canvas, "canvas'"]);
        func2609.paramCounts = [
                                1,
                                1,
                                1,
                                ];
        func2609.variableArities = [
                                    false,
                                    false,
                                    false,
                                    ];
        obj2607.methods["at()with()on"] = func2609;
        var func2668 = function(argcv) {
            var curarg = 1;
            var var_location__39__ = arguments[curarg];
            curarg++;
            var var_contents__39__ = arguments[curarg];
            curarg++;
            var var_canvas__39__ = arguments[curarg];
            curarg++;
            var inheritingObject = arguments[curarg++];
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                var obj2669 = Grace_allocObject();
                var inho2669 = inheritingObject;
                while (inho2669.superobj) inho2669 = inho2669.superobj;
                inho2669.superobj = obj2669;
                obj2669.data = inheritingObject.data;
                obj2669.outer = this;
                var reader_objectdraw_outer2670 = function() {
                    return this.outer;
                }
                obj2669.methods["outer"] = reader_objectdraw_outer2670;
                function obj_init_2669() {
                    var origSuperDepth = superDepth;
                    superDepth = obj2669;
                    var func2671 = function(argcv) {    // method draw(1)
                        var curarg = 1;
                        var var_ctx = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func2671.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method draw(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 976
                            onSelf = true;
                            var call2672 = callmethod(this, "fontSize", [0]);
                            var call2673 = callmethod(var_ctx,"font_size:=", [1], call2672);
                            lineNumber = 977
                            onSelf = true;
                            var call2674 = callmethod(this, "color", [0]);
                            var call2675 = callmethod(call2674,"red", [0]);
                            lineNumber = 977
                            onSelf = true;
                            var call2676 = callmethod(this, "color", [0]);
                            var call2677 = callmethod(call2676,"green", [0]);
                            lineNumber = 977
                            onSelf = true;
                            var call2678 = callmethod(this, "color", [0]);
                            var call2679 = callmethod(call2678,"blue", [0]);
                            var call2680 = callmethod(var_ctx,"set_source_rgb", [3], call2675, call2677, call2679);
                            lineNumber = 978
                            onSelf = true;
                            var call2681 = callmethod(this, "x", [0]);
                            onSelf = true;
                            var call2682 = callmethod(this, "y", [0]);
                            var call2683 = callmethod(var_ctx,"move_to", [2], call2681, call2682);
                            lineNumber = 979
                            onSelf = true;
                            var call2684 = callmethod(this, "contents", [0]);
                            var call2685 = callmethod(var_ctx,"show_text", [1], call2684);
                            lineNumber = 980
                            var call2686 = callmethod(var_ctx,"fill", [0]);
                            return call2686
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2671.paramCounts = [
                                            1,
                                            ];
                    func2671.variableArities = [
                                                false,
                                                ];
                    obj2669.methods["draw"] = func2671;
                    var func2687 = function(argcv) {    // method contents
                        var curarg = 1;
                        if (argcv[0] !=  func2687.paramCounts[0]) // != 0 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method contents is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 984
                            onSelf = true;
                            var call2688 = callmethod(this, "theContents", [0]);
                            return call2688
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2687.paramCounts = [
                                            0,
                                            ];
                    func2687.variableArities = [
                                                false,
                                                ];
                    obj2669.methods["contents"] = func2687;
                    var func2689 = function(argcv) {    // method contents:=(1)
                        var curarg = 1;
                        var var_newContents = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func2689.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method contents:=(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 988
                            onSelf = true;
                            var call2690 = callmethod(this, "theContents:=", [1], var_newContents);
                            lineNumber = 989
                            onSelf = true;
                            var call2691 = callmethod(this, "setStateChanged", [0]);
                            return call2691
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2689.paramTypes = [];
                    func2689.paramTypes.push([type_String, "newContents"]);
                    func2689.paramCounts = [
                                            1,
                                            ];
                    func2689.variableArities = [
                                                false,
                                                ];
                    obj2669.methods["contents:="] = func2689;
                    var func2692 = function(argcv) {    // method fontSize:=(1)
                        var curarg = 1;
                        var var_size__39__ = arguments[curarg];
                        curarg++;
                        if (argcv[0] !=  func2692.paramCounts[0]) // != 1 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method fontSize:=(1) is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 993
                            onSelf = true;
                            var call2693 = callmethod(this, "size:=", [1], var_size__39__);
                            lineNumber = 994
                            onSelf = true;
                            var call2694 = callmethod(this, "setStateChanged", [0]);
                            return call2694
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2692.paramTypes = [];
                    func2692.paramTypes.push([type_Number, "size'"]);
                    func2692.paramCounts = [
                                            1,
                                            ];
                    func2692.variableArities = [
                                                false,
                                                ];
                    obj2669.methods["fontSize:="] = func2692;
                    var func2695 = function(argcv) {    // method fontSize
                        var curarg = 1;
                        if (argcv[0] !=  func2695.paramCounts[0]) // != 0 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method fontSize is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 998
                            onSelf = true;
                            var call2696 = callmethod(this, "size", [0]);
                            return call2696
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2695.paramCounts = [
                                            0,
                                            ];
                    func2695.variableArities = [
                                                false,
                                                ];
                    obj2669.methods["fontSize"] = func2695;
                    var func2697 = function(argcv) {    // method asString
                        var curarg = 1;
                        if (argcv[0] !=  func2697.paramCounts[0]) // != 0 
                            callmethod(var_RuntimeError, "raise", [1], new GraceString("argument list 1 to method asString is of wrong size"));
                        var returnTarget = invocationCount;
                        invocationCount++;
                        try {
                            lineNumber = 1002
                            var string2698 = new GraceString("Text at (");
                            onSelf = true;
                            var call2699 = callmethod(this, "x", [0]);
                            var opresult2701 = callmethod(string2698, "++", [1], call2699);
                            var string2702 = new GraceString(",");
                            var opresult2704 = callmethod(opresult2701, "++", [1], string2702);
                            onSelf = true;
                            var call2705 = callmethod(this, "y", [0]);
                            var opresult2707 = callmethod(opresult2704, "++", [1], call2705);
                            var string2708 = new GraceString(") with value ");
                            var opresult2710 = callmethod(opresult2707, "++", [1], string2708);
                            onSelf = true;
                            var call2711 = callmethod(this, "contents", [0]);
                            var opresult2713 = callmethod(opresult2710, "++", [1], call2711);
                            var string2714 = new GraceString(" and color ");
                            var opresult2716 = callmethod(opresult2713, "++", [1], string2714);
                            onSelf = true;
                            var call2717 = callmethod(this, "color", [0]);
                            var opresult2719 = callmethod(opresult2716, "++", [1], call2717);
                            var string2720 = new GraceString("");
                            var opresult2722 = callmethod(opresult2719, "++", [1], string2720);
                            return opresult2722
                        } catch(e) {
                            if ((e.exctype == 'return') && (e.target == returnTarget)) {
                                return e.returnvalue;
                            } else {
                                throw e;
                            }
                        }
                    }
                    func2697.paramCounts = [
                                            0,
                                            ];
                    func2697.variableArities = [
                                                false,
                                                ];
                    obj2669.methods["asString"] = func2697;
                    sourceObject = obj2669;
                    lineNumber = 970
                    var call2723 = callmethod(var_aDrawable,"at()on()object", [1, 1, 1], var_location__39__, var_canvas__39__, this);
                    obj2669.superobj = call2723;
                    obj2669._value = call2723._value;
                    sourceObject = obj2669;
                    lineNumber = 971
                    onSelf = true;
                    var call2724 = callmethod(this, "addToCanvas", [1], var_canvas__39__);
                    sourceObject = obj2669;
                    lineNumber = 972
                    obj2669.data["theContents"] = var_contents__39__;
                    var reader_objectdraw_theContents2725 = function() {
                        return this.data["theContents"];
                    }
                    obj2669.methods["theContents"] = reader_objectdraw_theContents2725;
                    obj2669.data["theContents"] = var_contents__39__;
                    var writer_objectdraw_theContents2725 = function(argcv, o) {
                        this.data["theContents"] = o;
                    }
                    obj2669.methods["theContents:="] = writer_objectdraw_theContents2725;
                    reader_objectdraw_theContents2725.confidential = true;
                    writer_objectdraw_theContents2725.confidential = true;
                    lineNumber = 972;
                    if (!Grace_isTrue(callmethod(var_String, "match",
                                                 [1], var_contents__39__)))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'theContents' to be of type String"))
                        obj2669.mutable = true;
                    sourceObject = obj2669;
                    lineNumber = 973
                    obj2669.data["size"] = new GraceNum(12);
                    var reader_objectdraw_size2726 = function() {
                        return this.data["size"];
                    }
                    obj2669.methods["size"] = reader_objectdraw_size2726;
                    obj2669.data["size"] = new GraceNum(12);
                    var writer_objectdraw_size2726 = function(argcv, o) {
                        this.data["size"] = o;
                    }
                    obj2669.methods["size:="] = writer_objectdraw_size2726;
                    writer_objectdraw_size2726.confidential = true;
                    lineNumber = 973;
                    if (!Grace_isTrue(callmethod(var_Number, "match",
                                                 [1], new GraceNum(12))))
                        throw new GraceExceptionPacket(TypeErrorObject,
                                                       new GraceString("expected "
                                                                       + "initial value of var 'size' to be of type Number"))
                        obj2669.mutable = true;
                    sourceObject = obj2669;
                    sourceObject = obj2669;
                    sourceObject = obj2669;
                    sourceObject = obj2669;
                    sourceObject = obj2669;
                    sourceObject = obj2669;
                    superDepth = origSuperDepth;
                }
                obj_init_2669.apply(inheritingObject, []);
                return obj2669
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        func2668.paramTypes = [];
        func2668.paramTypes.push([type_Location, "location'"]);
        func2668.paramTypes.push([type_String, "contents'"]);
        func2668.paramTypes.push([type_Canvas, "canvas'"]);
        obj2607.methods["at()with()on()object"] = func2668;
        sourceObject = obj2607;
        superDepth = origSuperDepth;
    }
    obj_init_2607.apply(obj2607, []);
    var var_aText = obj2607;
    return this;
}
if (gctCache)
gctCache['objectdraw'] = "constructors-of:aDrawable2D:\n at()size()on\nmethods-of:aDrawable2D.at()size()on:\n isVisible\n removeFromCanvas\n location:=\n frameColor:=\n sendToBack\n color:=\n theWidth\n theFrameColor\n canvas\n contains\n theHeight\n sendBackward\n setStateChanged\n width\n frameColor\n theHeight:=\n addToCanvas\n location\n theColor\n overlaps\n moveBy\n theWidth:=\n asString\n theColor:=\n height\n color\n moveTo\n sendForward\n sendToFront\n isVisible:=\n x\n y\n theFrameColor:=\n canvas:=\n draw\nmethods-of:aLocation.at:\n asString\n distanceTo\n x\n y\n ==\n translate\nmethods-of:aCanvas.size:\n width:=\n height:=\n buttonPressTime\n maxClickTime\n sendToBack\n buttonPressTime:=\n add\n clear\n clickOK:=\n indexOf\n asString\n remove\n objects:=\n height\n sendBackward\n clickOK\n sendForward\n sendToFront\n buttonPressed:=\n objects\n setStateChanged\n width\n drawingArea\n printObjects\n buttonPressed\n doSetUp\n paintAll\nconstructors-of:aFramedOval:\n at()size()on\nmethods-of:aFilledOval.at()size()on:\n isVisible\n width:=\n setSize\n color:=\n location:=\n frameColor:=\n sendToBack\n removeFromCanvas\n theWidth\n theFrameColor\n canvas\n contains\n theHeight\n sendBackward\n setStateChanged\n width\n frameColor\n ==\n theHeight:=\n height:=\n addToCanvas\n location\n theColor\n overlaps\n moveBy\n theWidth:=\n asString\n theColor:=\n height\n color\n moveTo\n sendForward\n sendToFront\n isVisible:=\n x\n y\n theFrameColor:=\n canvas:=\n draw\nmethods-of:aText.at()with()on:\n isVisible\n removeFromCanvas\n location:=\n frameColor:=\n sendToBack\n theContents:=\n color:=\n theFrameColor\n canvas\n contents\n sendBackward\n contents:=\n frameColor\n fontSize:=\n addToCanvas\n location\n theColor\n setStateChanged\n moveBy\n asString\n theColor:=\n color\n moveTo\n sendForward\n sendToFront\n fontSize\n theContents\n y\n isVisible:=\n draw\n x\n size\n theFrameColor:=\n canvas:=\n size:=\nmethods-of:aFilledRect.at()size()on:\n isVisible\n width:=\n setSize\n color:=\n location:=\n frameColor:=\n sendToBack\n removeFromCanvas\n theWidth\n theFrameColor\n canvas\n contains\n theHeight\n sendBackward\n setStateChanged\n width\n frameColor\n ==\n theHeight:=\n height:=\n addToCanvas\n location\n theColor\n overlaps\n moveBy\n theWidth:=\n asString\n theColor:=\n height\n color\n moveTo\n sendForward\n sendToFront\n isVisible:=\n x\n y\n theFrameColor:=\n canvas:=\n draw\nconfidential:\nclasses:\n aColor\n aLocation\n aCanvas\n aGraphicApplication\n aDrawable\n aDrawable2D\n aResizable2D\n aFramedRect\n aFilledRect\n aFramedOval\n aFilledOval\n aFramedArc\n aFilledArc\n aDrawableImage\n aLine\n aText\nconstructors-of:aFilledOval:\n at()size()on\nfresh-methods:\nmethods-of:aDrawable.at()on:\n isVisible\n addToCanvas\n location\n color:=\n location:=\n frameColor:=\n theColor\n moveBy\n removeFromCanvas\n theFrameColor\n canvas\n asString\n theColor:=\n sendToBack\n color\n moveTo\n sendForward\n sendToFront\n sendBackward\n setStateChanged\n isVisible:=\n frameColor\n x\n y\n theFrameColor:=\n canvas:=\n draw\nconstructors-of:aFilledRect:\n at()size()on\nconstructors-of:aDrawableImage:\n at()size()file()on\nmodules:\nconstructors-of:aDrawable:\n at()on\nmethods-of:aColor.r()g()b:\n red\n blue\n green\n asString\nconstructors-of:aFramedRect:\n at()size()on\nmethods-of:aGraphicApplication.size:\n addToTop\n windowTitle:=\n canvas\n addToLeft\n onMouseMove\n gridLayout\n onMouseExit\n addToRight\n onMouseRelease\n onMouseClick\n addToBottom\n rightbox\n onMouseDrag\n leftbox\n onMousePress\n bottombox\n onMouseEnter\n window\n startGraphics\n topbox\nconstructors-of:aLocation:\n at\npublic:\n GColor\n DrawingBlock\n Widget\n Location\n GraphicObject\n Context\n Canvas\n GraphicApplication\n aColor\n randomColor\n aLocation\n aCanvas\n aGraphicApplication\n Graphic2DObject\n Resizable2DObject\n LinearObject\n white\n black\n green\n red\n gray\n blue\n cyan\n magenta\n yellow\n neutral\n aDrawable\n aDrawable2D\n aResizable2D\n aFramedRect\n aFilledRect\n aFramedOval\n aFilledOval\n aFramedArc\n aFilledArc\n aDrawableImage\n aLine\n Textual\n aText\nconstructors-of:aGraphicApplication:\n size\npath:\n objectdraw\nconstructors-of:aText:\n at()with()on\nconstructors-of:aFramedArc:\n at()size()from()to()on\nconstructors-of:aResizable2D:\n at()size()on\nconstructors-of:aFilledArc:\n at()size()from()to()on\nmethods-of:aFramedOval.at()size()on:\n isVisible\n width:=\n setSize\n color:=\n location:=\n frameColor:=\n sendToBack\n removeFromCanvas\n theWidth\n theFrameColor\n canvas\n contains\n theHeight\n sendBackward\n setStateChanged\n width\n frameColor\n ==\n theHeight:=\n height:=\n addToCanvas\n location\n theColor\n overlaps\n moveBy\n theWidth:=\n asString\n theColor:=\n height\n color\n moveTo\n sendForward\n sendToFront\n isVisible:=\n x\n y\n theFrameColor:=\n canvas:=\n draw\nconstructors-of:aCanvas:\n size\nmethods-of:aFramedRect.at()size()on:\n isVisible\n width:=\n setSize\n color:=\n location:=\n frameColor:=\n sendToBack\n removeFromCanvas\n theWidth\n theFrameColor\n canvas\n contains\n theHeight\n sendBackward\n setStateChanged\n width\n frameColor\n ==\n theHeight:=\n height:=\n addToCanvas\n location\n theColor\n overlaps\n moveBy\n theWidth:=\n asString\n theColor:=\n height\n color\n moveTo\n sendForward\n sendToFront\n isVisible:=\n x\n y\n theFrameColor:=\n canvas:=\n draw\nconstructors-of:aColor:\n r()g()b\nconstructors-of:aLine:\n from()to()on\nmethods-of:aResizable2D.at()size()on:\n isVisible\n width:=\n setSize\n color:=\n location:=\n frameColor:=\n sendToBack\n removeFromCanvas\n theWidth\n theFrameColor\n canvas\n contains\n theHeight\n color\n setStateChanged\n width\n frameColor\n theHeight:=\n height:=\n addToCanvas\n location\n theColor\n overlaps\n moveBy\n theWidth:=\n asString\n theColor:=\n height\n sendBackward\n moveTo\n sendForward\n sendToFront\n isVisible:=\n x\n y\n theFrameColor:=\n canvas:=\n draw\nmethods-of:aFramedArc.at()size()from()to()on:\n isVisible\n width:=\n setSize\n color:=\n location:=\n frameColor:=\n sendToBack\n removeFromCanvas\n theWidth\n theFrameColor\n canvas\n contains\n theHeight\n sendBackward\n setStateChanged\n width\n frameColor\n ==\n theHeight:=\n height:=\n addToCanvas\n location\n theColor\n overlaps\n moveBy\n theWidth:=\n asString\n theColor:=\n height\n color\n moveTo\n sendForward\n sendToFront\n isVisible:=\n x\n y\n theFrameColor:=\n canvas:=\n draw\nmethods-of:aFilledArc.at()size()from()to()on:\n isVisible\n width:=\n setSize\n color:=\n location:=\n frameColor:=\n sendToBack\n removeFromCanvas\n theWidth\n theFrameColor\n canvas\n contains\n theHeight\n sendBackward\n setStateChanged\n width\n frameColor\n ==\n theHeight:=\n height:=\n addToCanvas\n location\n theColor\n overlaps\n moveBy\n theWidth:=\n asString\n theColor:=\n height\n color\n moveTo\n sendForward\n sendToFront\n isVisible:=\n x\n y\n theFrameColor:=\n canvas:=\n draw\nmethods-of:aDrawableImage.at()size()file()on:\n isVisible\n width:=\n setSize\n color:=\n location:=\n frameColor:=\n sendToBack\n removeFromCanvas\n theWidth\n theFrameColor\n canvas\n imHeight\n surface\n contains\n theHeight\n sendBackward\n setStateChanged\n width\n frameColor\n ==\n theHeight:=\n height:=\n addToCanvas\n location\n theColor\n overlaps\n moveBy\n imWidth\n theWidth:=\n asString\n theColor:=\n height\n color\n moveTo\n sendForward\n sendToFront\n isVisible:=\n x\n y\n theFrameColor:=\n canvas:=\n draw\nmethods-of:aLine.from()to()on:\n isVisible\n theEnd:=\n removeFromCanvas\n location:=\n frameColor:=\n sendToBack\n color:=\n theFrameColor\n canvas\n end:=\n start\n sendBackward\n setStateChanged\n start:=\n frameColor\n setEndPoints\n addToCanvas\n location\n theColor\n moveBy\n end\n asString\n theColor:=\n color\n moveTo\n sendForward\n sendToFront\n theEnd\n isVisible:=\n x\n y\n theFrameColor:=\n canvas:=\n draw\n";
