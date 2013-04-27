function wrapDOMFunction(obj, fn) {
    return function(argcv) {
        var args = Array.prototype.slice.call(arguments, 1);
        for (var i=0; i<args.length; i++)
            args[i] = wrapGraceObject(args[i]);
        return wrapDOMObject(obj[fn].apply(obj, args));
    }
}

function wrapDOMField(o, obj, k) {
    o.methods[k + ":="] = function(argcv, val) {
        obj[k] = wrapGraceObject(val);
        return var_noSuchValue;
    }
    return function() {
        return wrapDOMObject(obj[k]);
    }
}
function wrapDOMObject(obj) {
    switch(typeof obj) {
        case "string":
            return new GraceString(obj);
        case "number":
            return new GraceNum(obj);
        case "undefined":
            return var_noSuchValue;
    }
    if (obj._graceWrapper)
        return obj._graceWrapper;
    var o = Grace_allocObject();
    o._wrappedDOMObject = obj;
    o.methods.asString = function() {
        return new GraceString("DOMObject(" + obj + ")");
    }
    for (var k in obj) {
        switch(typeof obj[k]) {
            case "function":
                o.methods[k] = wrapDOMFunction(obj, k);
                break;
            case "string":
            case "number":
            case "object":
                o.methods[k] = wrapDOMField(o, obj, k);
                break
        }
    }
    o.methods._methods = function() {
        var l = [];
        for (var m in o.methods) {
            l.push(new GraceString(m));
        }
        return new GraceList(l);
    }
    try {
        obj._graceWrapper = o;
    } catch(e) {}
    return o;
}

function wrapGraceObject(o) {
    if (o === undefined)
        return var_noSuchValue;
    if (o instanceof GraceString) {
        return o._value;
    }
    if (o instanceof GraceNum) {
        return o._value;
    }
    if (o instanceof GraceBoolean) {
        return o._value;
    }
    if (o._wrappedDOMObject)
        return o._wrappedDOMObject;
    return o;
}

function gracecode_dom() {
    this.methods.document = function(argcv) {
        return wrapDOMObject(document);
    };
    this.methods.window = function(argcv) {
        return wrapDOMObject(window);
    };
    this.methods["for()waiting()do"] = function(argcv, iterable, delay, block) {
        var ret = Grace_allocObject();
        ret.methods.then = function(argcv, block) {
            this.data["then"] = block;
        }
        var iter = callmethod(iterable, "iterator", [0]);
        var func = function() {
            if (Grace_isTrue(callmethod(iter, "havemore", [0]))) {
                var val = callmethod(iter, "next", [0]);
                callmethod(block, "apply", [1], val);
                setTimeout(func, delay);
            } else {
                callmethod(ret.data.then, "apply", [0]);
            }
        }
        func();
        return ret;
    }
    return this;
}

