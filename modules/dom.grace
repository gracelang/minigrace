native "js" code ‹

    function unwrapDOMObject(obj) {
        if (obj.hasOwnProperty("_wrappedDOMObject")) {
            return obj._wrappedDOMObject;
        }

        return obj;
    }

    function wrapDOMFunction(obj, fn) {
        return function(argcv) {
            var args = [];
            var numArgs = argcv.sum();
            for (var i=1; i <= numArgs; i++)
                args.push(wrapGraceObject(arguments[i]));
            return wrapDOMObject(obj[fn].apply(obj, args));
        };
    }

    function wrapDOMField(o, obj, k) {
        o.methods[k + ":=(1)"] = function(argcv, val) {
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
                return var_noObject;
            default:
                break;
        }
        if (obj === null) {
            return var_noObject;
        }
        if (obj._graceWrapper)
            return obj._graceWrapper;
        var o = Grace_allocObject(GraceObject, "wrappedDomObject");
        o._wrappedDOMObject = obj;
        o.methods.asString = function() {
            return new GraceString("DOMObject(" + obj + ")");
        };
        o.methods["==(1)"] = function(argcv, other) {
            return (this === other) ? GraceTrue : GraceFalse;
        };
        o.methods["≠(1)"] = function(argcv, other) {
            return (this !== other) ? GraceTrue : GraceFalse;
        };
        o.methods.hash = publicVersion(object_identityHash, 'hash');
        for (var k in obj) {
            switch(typeof obj[k]) {
                case "function":
                    var wrappedFun = wrapDOMFunction(obj, k);
                    if (k === "drawImage") {
                        o.methods[k + "(3)"] = wrappedFun;
                        o.methods[k + "(5)"] = wrappedFun;
                        o.methods[k + "(9)"] = wrappedFun;
                    } else if (k === "arc") {
                        o.methods[k + "(5)"] = wrappedFun;
                        o.methods[k + "(6)"] = wrappedFun;
                    } else {
                        o.methods[k] = wrappedFun;
                        o.methods[k + "(1)"] = wrappedFun;
                        o.methods[k + "(2)"] = wrappedFun;
                        o.methods[k + "(3)"] = wrappedFun;
                        o.methods[k + "(4)"] = wrappedFun;
                        // we don't know how many arguments this method takes
                    }
                    break;
                case "string":
                case "boolean":
                case "number":
                case "object":
                    o.methods[k] = wrapDOMField(o, obj, k);
                    break;
                case "undefined":
                    o.methods[k] = null;
                    break;
                default:
                    throw new GraceExceptionPacket(ExceptionObject,
                          new GraceString("JavaScript value " + obj[k] + " has unknown type"));
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
            return var_noObject;
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
›

def noObject is public = singleton "noObject"

native "js" code ‹
    if (typeof window !== "undefined") {
        if (!window.var_domNoObject) {
            window.var_domNoObject = var_noObject;
        } else {
            var_noObject = window.var_domNoObject;
        }
    }
›
// This horrible piece of code ensures that noObject (local to this module) is
// unchanged from one program run to the next.  Why does this matter?
// Because DOM objects survive from one run to the next, and wrappedDOMObjects
// cache Grace objects, including noObject.

method document -> Object {
    native "js" code ‹
        if (typeof(document) === "undefined") {
            return wrapDOMObject(null);
            // This return is here because objectdraw requests `dom.document` in
            // its initialization. When used as a dialect, the initialization
            // code runs inside the compiler, where there is no document.
            // Raising an exception at this point kills the compiler.
            // throw new GraceExceptionPacket(EnvironmentExceptionObject,
            //       new GraceString("There is no 'document' in this context."));
        }
        return wrapDOMObject(document);
    ›
}
method window -> Object {
    native "js" code ‹
        return wrapDOMObject(window);
    ›
}
method for(iterable) waiting(delay:Number) do(block) -> Object {
    native "js" code ‹
        result = Grace_allocObject(GraceObject, "dom.for(1)waiting(1)do(1)");
        result.methods["then(1)"]  = function(argcv, b) {
            this.data.then = b;
        };
        var iter = callmethod(var_iterable, "iterator", [0]);
        const func = function() {
            minigrace.trapErrors(function() {
                if (Grace_isTrue(callmethod(iter, "hasNext", [0]))) {
                    const val = callmethod(iter, "next", [0]);
                    callmethod(var_block, "apply(1)", [1], val);
                    setTimeout(func, var_delay._value);
                } else {
                    if (result.data.then)
                        callmethod(result.data.then, "apply", [0]);
                }
            });
        };
        func();
    ›
}
method while(cond) waiting(delay) do(block) -> Object {
    native "js" code ‹
        var result = Grace_allocObject(GraceObject, "dom.while(1)waiting(1)do(1)");
        result.methods["then(1)"] = function(argcv, block) {
            this.data.then = block;
        };
        const func = function() {
            minigrace.trapErrors(function() {
                if (Grace_isTrue(callmethod(var_cond, "apply", [0]))) {
                    callmethod(var_block, "apply", [0]);
                    setTimeout(func, var_delay._value);
                } else {
                    if (result.data.then)
                        callmethod(result.data.then, "apply", [0]);
                }
            });
        };
        func();
    ›
}
method doesObject(domObj) haveProperty (name) -> Boolean {
    native "js" code ‹
        return var_name._value in unwrapDOMObject(var_domObj) ? GraceTrue : GraceFalse;
    ›
}
method framedRect(ctx, g) -> Done  {
    native "js" code ‹
        var_ctx = var_ctx._wrappedDOMObject;
        var_g = var_g.data;
        var_ctx.save();
        var_ctx.strokeStyle = color(var_g);
        run(var_ctx, "strokeRect", var_g);
        var_ctx.restore();
    ›
}
method filledRect(ctx, g) -> Done  {
    native "js" code ‹
        var_ctx = var_ctx._wrappedDOMObject;
        var_g = var_g.data;
        var_ctx.save();
        var_ctx.fillStyle = color(var_g);
        run(var_ctx, "fillRect", var_g);
        var_ctx.restore();
    ›
}
method framedOval(ctx, g) -> Done  {
    native "js" code ‹
        var_ctx = var_ctx._wrappedDOMObject;
        var_g = var_g.data;
        var_ctx.beginPath();
        var_ctx.save();
        arc(var_ctx, var_g);
        var_ctx.restore();
        var_ctx.save();
        var_ctx.strokeStyle = color(var_g);
        var_ctx.stroke();
        var_ctx.restore();
        var_ctx.closePath();
    ›
}
method filledOval(ctx, g) -> Done  {
    native "js" code ‹
        var_ctx = var_ctx._wrappedDOMObject;
        var_g = var_g.data;
        var_ctx.beginPath();
        var_ctx.save();
        arc(var_ctx, var_g);
        var_ctx.restore();
        var_ctx.save();
        var_ctx.fillStyle = color(var_g);
        var_ctx.fill();
        var_ctx.restore();
        var_ctx.closePath();
    ›
}
method image(ctx, g) -> Done  {
    native "js" code ‹
        var_ctx = var_ctx._wrappedDOMObject;
        var_g = var_g.data;
        var_ctx.drawImage(var_g.theImage, var_g.x._value, var_g.y._value, var_g.theWidth._value, var_g.theHeight._value);
    ›
}
method draw(ctx, graphics, width, height) -> Done  {
    native "js" code ‹
        var_ctx._wrappedDOMObject.clearRect(0, 0, var_width._value, var_height._value);

        const list = var_graphics._value;

        for (var i = 0, l = list.length; i < l; i++) {
            const graphic = list[i];
            if (Grace_isTrue(graphic.data.isVisible)) {
                graphic.methods["draw(1)"].call(graphic, [1], var_ctx);
            }
        }
    ›
}
