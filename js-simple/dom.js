var domNoObject = Grace_allocObject(GraceObject, "noObject");
domNoObject.methods["=="] = function(argcv, other) {
    return (this === other) ? GraceTrue : GraceFalse;
};

function unwrapDOMObject(obj) {
  if (obj.hasOwnProperty("_wrappedDOMObject")) {
    return obj._wrappedDOMObject;
  }

  return obj;
}

function wrapDOMFunction(obj, fn) {
    return function(argcv) {
        var args = Array.prototype.slice.call(arguments, 1);
        for (var i=0; i<args.length; i++)
            args[i] = wrapGraceObject(args[i]);
        return wrapDOMObject(obj[fn].apply(obj, args));
    };
}

function wrapDOMField(o, obj, k) {
    o.methods[k + ":="] = function(argcv, val) {
        obj[k] = wrapGraceObject(val);
        return var_done;
    };
    return function() {
        return wrapDOMObject(obj[k]);
    };
}
function wrapDOMObject(obj) {
    switch(typeof obj) {
        case "boolean":
            return new GraceBoolean(obj);
        case "string":
            return new GraceString(obj);
        case "number":
            return new GraceNum(obj);
        case "undefined":
            return domNoObject;
    }
    if (obj === null) {
      return domNoObject;
    }
    if (obj._graceWrapper)
        return obj._graceWrapper;
    var o = Grace_allocObject(GraceObject, "wrappedDomObject");
    o._wrappedDOMObject = obj;
    o.methods.asString = function() {
        return new GraceString("DOMObject(" + obj + ")");
    };
    o.methods["=="] = function(argcv, other) {
        return (this === other) ? GraceTrue : GraceFalse;
    };
    for (var k in obj) {
        switch(typeof obj[k]) {
            case "function":
                o.methods[k] = wrapDOMFunction(obj, k);
                break;
            case "string":
            case "boolean":
            case "number":
            case "object":
                o.methods[k] = wrapDOMField(o, obj, k);
                break;
        }
    }
    o.methods._methods = function() {
        var l = [];
        for (var m in o.methods) {
            l.push(new GraceString(m));
        }
        return new GraceList(l);
    };
    try {
        obj._graceWrapper = o;
    } catch(e) {}
    return o;
}

function wrapGraceObject(o) {
    if (o === undefined || o === null) {
        return domNoObject;
    }
    if (o instanceof GraceString) {
        return o._value;
    }
    if (o instanceof GraceNum) {
        return o._value;
    }
    if (o instanceof GraceBoolean) {
        return o._value;
    }
    if (o.real) { // A block
        if (o._wrappedDOMObject)
            return o._wrappedDOMObject;
        var f = function() {
            var args = [];
            for (var i=0; i<arguments.length; i++) {
                args.push(wrapDOMObject(arguments[i]));
            }
            var ret;
            minigrace.trapErrors(function() {
                ret = wrapGraceObject(o.real.apply(o.receiver, args));
            });
            return ret;
        };
        o._wrappedDOMObject = f;
    }
    if (o._wrappedDOMObject)
        return o._wrappedDOMObject;
    return o;
}

function gracecode_dom() {
    this.methods.document = function(argcv) {
        if (typeof(document) === "undefined") {
            return wrapDOMObject(null);
            // This return is here because objectdraw requests `dom.document` in its initialization.
            // When used as a dialect, the initialization code runs inside the compiler, were there
            // is no document.  Raising an exception at this point kills the compiler.
            throw new GraceExceptionPacket(EnvironmentExceptionObject,
                       new GraceString("There is no 'document' in this context."));
        }
        return wrapDOMObject(document);
    };
    this.methods.document.paramCounts = [0];
    this.methods.document.variableArities = [false];

    this.methods.window = function(argcv) {
        var win = wrapDOMObject(window);
        win.methods["Math"] = function() {
            return {"methods": {
                "cos": wrapDOMFunction(Math, "cos"),
                "sin": wrapDOMFunction(Math, "sin"),
                "tan": wrapDOMFunction(Math, "tan"),
                "asin": wrapDOMFunction(Math, "asin"),
                "acos": wrapDOMFunction(Math, "acos"),
                "atan": wrapDOMFunction(Math, "atan"),
                "atan2": wrapDOMFunction(Math, "atan2")
            }};
        };
        return win;
    };
    this.methods.window.paramCounts = [0];
    this.methods.window.variableArities = [false];

    this.methods["doesObject()haveProperty"] = function (argcv, object, name) {
        return name._value in unwrapDOMObject(object) ? GraceTrue : GraceFalse;
    };
    this.methods["doesObject()haveProperty"].paramCounts = [1, 1];
    this.methods["doesObject()haveProperty"].variableArities = [false, false];

    this.methods["for()waiting()do"] = function(argcv, iterable, delay, block) {
        var ret = Grace_allocObject(GraceObject, "dom.for()waiting()do");
        ret.methods.then = function(argcv, block) {
            this.data["then"] = block;
        };
        var iter = callmethod(iterable, "iterator", [0]);
        var func = function() {
            minigrace.trapErrors(function() {
                if (Grace_isTrue(callmethod(iter, "hasNext", [0]))) {
                    var val = callmethod(iter, "next", [0]);
                    callmethod(block, "apply", [1], val);
                    setTimeout(func, delay._value);
                } else {
                    if (ret.data.then)
                        callmethod(ret.data.then, "apply", [0]);
                }
            });
        };
        func();
        return ret;
    };
    this.methods["for()waiting()do"].paramCounts = [1, 1, 1];
    this.methods["for()waiting()do"].variableArities = [false, false, false];

    this.methods["while()waiting()do"] = function(argcv, cond, delay, block) {
        var ret = Grace_allocObject(GraceObject, "dom.while()waiting()do");
        ret.methods.then = function(argcv, block) {
            this.data["then"] = block;
        };
        var func = function() {
            minigrace.trapErrors(function() {
                if (Grace_isTrue(callmethod(cond, "apply", [0]))) {
                    callmethod(block, "apply", [0]);
                    setTimeout(func, delay._value);
                } else {
                    if (ret.data.then)
                        callmethod(ret.data.then, "apply", [0]);
                }
            });
        };
        func();
        return ret;
    };
    this.methods["while()waiting()do"].paramCounts = [1, 1, 1];
    this.methods["while()waiting()do"].variableArities = [false, false, false];

    function color(g) {
      var c = g.theColor.data;
      return "rgb(" + c.red._value + ", " + c.green._value + ", " + c.blue._value + ")";
    }

    function arc(ctx, g) {
      var p = g.location.data;
      var w = g.theWidth._value;
      var h = g.theHeight._value;
      ctx.translate(p.x._value + w, p.y._value + h);
      ctx.scale(w / 2, h / 2);
      ctx.arc(0, 0, 1, 0, 2 * Math.PI);
    }

    function run(ctx, name, g) {
      var p = g.location.data;
      ctx[name](p.x._value, p.y._value, g.theWidth._value, g.theHeight._value);
    }

    this.methods.framedRect = function (argcv, ctx, g) {
      ctx = ctx._wrappedDOMObject;
      g = g.data;
      ctx.save();
      ctx.strokeStyle = color(g);
      run(ctx, "strokeRect", g);
      ctx.restore();
      return GraceDone;
    };

    this.methods.filledRect = function (argcv, ctx, g) {
      ctx = ctx._wrappedDOMObject;
      g = g.data;
      ctx.save();
      ctx.fillStyle = color(g);
      run(ctx, "fillRect", g);
      ctx.restore();
      return GraceDone;
    };

    this.methods.framedOval = function (argcv, ctx, g) {
      ctx = ctx._wrappedDOMObject;
      g = g.data;
      ctx.beginPath();
      ctx.save();
      arc(ctx, g);
      ctx.restore();
      ctx.save();
      ctx.strokeStyle = color(g);
      ctx.stroke();
      ctx.restore();
      ctx.closePath();
      return GraceDone;
    };

    this.methods.filledOval = function (argcv, ctx, g) {
      ctx = ctx._wrappedDOMObject;
      g = g.data;
      ctx.beginPath();
      ctx.save();
      arc(ctx, g);
      ctx.restore();
      ctx.save();
      ctx.fillStyle = color(g);
      ctx.fill();
      ctx.restore();
      ctx.closePath();
      return GraceDone;
    };

    this.methods.image = function (argcv, ctx, g) {
      ctx = ctx._wrappedDOMObject;
      g = g.data;
      ctx.drawImage(g.theImage, g.x._value, g.y._value, g.theWidth._value, g.theHeight._value);
    };

    this.methods.draw = function (argcv, ctx, graphics, width, height) {
      ctx._wrappedDOMObject.clearRect(0, 0, width._value, height._value);

      var list = graphics._value;

      for (var i = 0, l = list.length; i < l; i++) {
        var graphic = list[i];
        if (Grace_isTrue(graphic.data.isVisible)) {
          graphic.methods.draw.call(graphic, [1], ctx);
        }
      }
      return GraceDone;
    };

    this.methods.noObject = function (argcv) {
        return domNoObject;
    };
    this.methods.noObject.paramcounts = [ 0 ];
    this.methods.noObject.variableArities = [ false ];

    return this;
}

gracecode_dom.imports = [];
if (typeof gctCache !== "undefined")
gctCache['dom'] = "classes:\nconfidential:\nfresh-methods:\nmodules:\npath:\n dom\npublic:\n document\n doesObject()haveProperty\n draw\n filledOval\n filledRect\n for()waiting()do\n framedOval\n framedRect\n image\n noObject\n while()waiting()do\n window\ntypes:\n";
