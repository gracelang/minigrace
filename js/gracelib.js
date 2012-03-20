var lineNumber = 0;
var stdout_txt = document.getElementById("stdout_txt");
var stdin_txt = document.getElementById("stdout_txt");
var stderr_txt = document.getElementById("stderr_txt");
var superDepth = null;
var invocationCount = 0;

function GraceString(s) {
    this._value = s;
}

GraceString.prototype = {
    methods: {
        "++": function(other) {
            var o = callmethod(other, "asString");
            return new GraceString(this._value + o._value);
        },
        "at": function(other) {
            var o = callmethod(other, 'asString');
            var idx = parseInt(o._value) - 1;
            return new GraceString(this._value.charAt(idx));
        },
        "size": function() {
            return new GraceNum(this._value.length);
        },
        "_escape": function() {
            var tmp = callmethod(this, "replace()with",
                    new GraceString("\\"), new GraceString("\\\\"));
            tmp = callmethod(tmp, "replace()with",
                    new GraceString("\""), new GraceString("\\\""));
            tmp = callmethod(tmp, "replace()with",
                    new GraceString("\n"), new GraceString("\\n"));
            return tmp;
        },
        "replace()with": function(what, wth) {
            var s = this._value;
            var os = "";
            var sl = what._value.length;
            while ((i = s.indexOf(what._value)) != -1) {
                os += s.substr(0, i);
                os += wth._value;
                s = s.substr(i + sl);
            }
            os += s;
            return new GraceString(os);
        },
        "substringFrom()to": function(from, to) {
            var s = this._value;
            return new GraceString(s.substring(from._value - 1, to._value));
        },
        "asString": function() { return this ; },
        "encode": function() { return this ; }, // TODO this is a hack
        "==": function(other) {
            if (this == other)
                return new GraceBoolean(true);
            if (this.prototype == other.prototype
                    && this._value == other._value)
                return new GraceBoolean(true);
            return new GraceBoolean(false);
        },
        "!=": function(other) {
            var t = callmethod(this, "==", other);
            return callmethod(t, "not");
        },
        "/=": function(other) {
            var t = callmethod(this, "==", other);
            return callmethod(t, "not");
        },
        "iterator": function() {
            return new GraceStringIterator(this);
        },
        "ord": function() {
            return new GraceNum(this._value.charCodeAt(0));
        },
        "hashcode": function() {
            var hc = 0;
            for (var i=0; i<this._value.length; i++) {
                hc *= 23;
                hc += this._value.charCodeAt(i);
                hc %= 0x100000000;
            }
            return new GraceNum(hc);
        },
        "match()matchesBinding()else": function(pat, b, e) {
            return callmethod(pat, "matchObject()matchesBinding()else", this,
                    b, e);
        },
        "matchObject()matchesBinding()else": function(obj, b, e) {
            var bl = callmethod(this, "==", obj);
            if (Grace_isTrue(bl)) {
                return callmethod(b, "apply", obj);
            } else {
                return callmethod(e, "apply", obj);
            }
        },
        "indices": function() {
            var l = [];
            for (var i=1; i<=this._value.length; i++)
                l.push(new GraceNum(i));
            return new GraceList(l);
        },
        "asNumber": function() {
            return new GraceNum(0 + this._value);
        },
    },
    className: "String"
};
GraceString.prototype.methods["[]"] = GraceString.prototype.methods["at"];

function GraceNum(n) {
    this._value = n;
}

GraceNum.prototype = {
    methods: {
        "+": function(other) {
            var s = this._value + other._value;
            return new GraceNum(s)
        },
        "*": function(other) {
            var s = this._value * other._value;
            return new GraceNum(s)
        },
        "/": function(other) {
            var s = this._value / other._value;
            return new GraceNum(s)
        },
        "-": function(other) {
            var s = this._value - other._value;
            return new GraceNum(s)
        },
        "%": function(other) {
            var s = this._value % other._value;
            return new GraceNum(s)
        },
        "++": function(other) {
            var t = callmethod(this, "asString");
            return callmethod(t, "++", other);
        },
        "..": function(other) {
            var o = callmethod(other, "asString");
            var ub = parseInt(o._value);
            var l = [];
            for (var i=this._value; i<=ub; i++)
                l.push(new GraceNum(i));
            return new GraceList(l);
        },
        "<": function(other) {
            var s = this._value < other._value;
            return new GraceBoolean(s)
        },
        ">": function(other) {
            var s = this._value > other._value;
            return new GraceBoolean(s)
        },
        "<=": function(other) {
            var s = this._value <= other._value;
            return new GraceBoolean(s)
        },
        ">=": function(other) {
            var s = this._value >= other._value;
            return new GraceBoolean(s)
        },
        "prefix-": function() {
            return new GraceNum(-this._value)
        },
        "asString": function() {
            return new GraceString("" + this._value)
        },
        "==": function(other) {
            if (this == other)
                return new GraceBoolean(true);
            if (this.prototype == other.prototype
                    && this._value == other._value)
                return new GraceBoolean(true);
            return new GraceBoolean(false);
        },
        "!=": function(other) {
            var t = callmethod(this, "==", other);
            return callmethod(t, "not");
        },
        "/=": function(other) {
            var t = callmethod(this, "==", other);
            return callmethod(t, "not");
        },
        "hashcode": function() {
            return new GraceNum(parseInt("" + (this._value * 10)));
        },
        "match()matchesBinding()else": function(pat, b, e) {
            return callmethod(pat, "matchObject()matchesBinding()else", this,
                    b, e);
        },
        "matchObject()matchesBinding()else": function(obj, b, e) {
            var bl = callmethod(this, "==", obj);
            if (Grace_isTrue(bl)) {
                return callmethod(b, "apply", obj);
            } else {
                return callmethod(e, "apply", obj);
            }
        },
        "inBase": function(other) {
            var mine = this._value;
            var base = other._value;
            var symbols = "0123456789abcdefghijklmnopqrstuvwxyz";
            var str = "";
            var before = "";
            if (mine < 0) {
                before = '-';
                mine = -mine;
            }
            while (mine != 0) {
                var r = mine % base;
                str = symbols[r] + str;
                mine = (mine - r) / base;
            }
            if (before)
                str = before + str;
            return new GraceString(str); 
        },
        "truncate": function() {
            if (this._value < 0)
                return new GraceNum(Math.ceil(this._value));
            return new GraceNum(Math.floor(this._value));
        }
    },
    className: "Number",
};

function GraceBoolean(b) {
    this._value = b;
}
GraceBoolean.prototype = {
    methods: {
        "not": function() {
            return new GraceBoolean(!this._value)
        },
        "prefix!": function() {
            return new GraceBoolean(!this._value)
        },
        "&": function(other) {
            var s = this._value && other._value;
            return new GraceBoolean(s)
        },
        "|": function(other) {
            var s = this._value || other._value;
            return new GraceBoolean(s)
        },
        "&&": function(other) {
            if (!this._value)
                return this;
            var o = callmethod(other, "apply");
            return o;
        },
        "||": function(other) {
            if (this._value)
                return this;
            var o = callmethod(other, "apply");
            return o;
        },
        "ifTrue": function(other) {
            if (this._value) {
                return callmethod(other, "apply");
            }
        },
        "ifFalse": function(other) {
            if (!this._value) {
                return callmethod(other, "apply");
            }
        },
        "asString": function() {
            return new GraceString("" + this._value)
        },
        "==": function(other) {
            if (this == other)
                return new GraceBoolean(true);
            if (this.prototype == other.prototype
                    && this._value == other._value)
                return new GraceBoolean(true);
            return new GraceBoolean(false);
        },
        "!=": function(other) {
            var t = callmethod(this, "==", other);
            return callmethod(t, "not");
        },
        "/=": function(other) {
            var t = callmethod(this, "==", other);
            return callmethod(t, "not");
        },
        "match()matchesBinding()else": function(pat, b, e) {
            return callmethod(pat, "matchObject()matchesBinding()else", this,
                    b, e);
        },
    },
    className: "Boolean",
};
function GraceList(l) {
    this._value = l;
}
GraceList.prototype = {
    methods: {
        "push": function(val) {
            this._value.push(val);
        },
        "size": function() {
            //dbg("called size: " + this._value.length);
            return new GraceNum(this._value.length);
        },
        "pop": function() {
            return this._value.pop();
        },
        "at": function(other) {
            var o = callmethod(other, "asString");
            var idx = parseInt(o._value);
            return this._value[idx-1];
        },
        "[]": function(other) {
            var o = callmethod(other, "asString");
            var idx = parseInt(o._value);
            return this._value[idx-1];
        },
        "at()put": function(idx, val) {
            this._value[idx._value-1] = val;
        },
        "[]:=": function(idx, val) {
            this._value[idx._value-1] = val;
        },
        "asString": function() {
            var s = "[";
            s += this._value.length + ": "
            for (var i=0; i<this._value.length; i++) {
                var v = this._value[i];
                if (v.methods["asString"])
                    s += callmethod(v, "asString")._value + ", ";
                else {
                    var q = dbgp(v, 2);
                    s += "((" + q + ")), "
                }
            }
            s += "]";
            return new GraceString(s);
        },
        "contains": function(other) {
            for (var i=0; i<this._value.length; i++) {
                var v = this._value[i];
                if (Grace_isTrue(callmethod(v, "==", other)))
                    return new GraceBoolean(true);
            }
            return new GraceBoolean(false);
        },
        "==": function(other) {
            if (this == other)
                return new GraceBoolean(true);
            return new GraceBoolean(false);
        },
        "!=": function(other) {
            var t = callmethod(this, "==", other);
            return callmethod(t, "not");
        },
        "/=": function(other) {
            var t = callmethod(this, "==", other);
            return callmethod(t, "not");
        },
        "match()matchesBinding()else": function(pat, b, e) {
            return callmethod(pat, "matchObject()matchesBinding()else", this,
                    b, e);
        },
        "prepended": function(item) {
            var l = [item];
            for (var i=0; i<this._value.length; i++)
                l.push(this._value[i]);
            return new GraceList(l);
        },
        "iterator": function() {
            return new GraceListIterator(this._value);
        },
        "indices": function() {
            var l = [];
            for (var i=1; i<=this._value.length; i++)
                l.push(new GraceNum(i));
            return new GraceList(l);
        },
        "first": function() {
            return this._value[0];
        },
        "last": function() {
            return this._value[this._value.length-1];
        },
    },
    className: "List",
};

function Grace_isTrue(o) {
    return (o._value != false);
}

function Grace_print(obj) {
    var s = callmethod(obj, "asString");
    stdout_txt.value += s._value + "\n";
}
function Grace_length(obj) {
    return new GraceNum(obj._value.length);
}
function GraceObject() {

}
GraceObject.prototype = {
    methods: {
        "==": function(o) {
            return new GraceBoolean(this == o);
        },
        "!=": function(o) {
            var b = this.methods["=="].call(this, o);
            return b.methods["not"].call(b);
        },
        "/=": function(o) {
            var b = this.methods["=="].call(this, o);
            return b.methods["not"].call(b);
        },
        "asString": function() {
            var s = "object {";
            for (var i in this.data) {
                s += "var " + i + " = " + this.data[i]._value;
            }
            return new GraceString(s + "}");
        },
    },
    data: {}
};
function Grace_allocObject() {
    return {
        methods: {
            "==": function(o) {
                return new GraceBoolean(this == o);
            },
            "!=": function(other) {
                var t = callmethod(this, "==", other);
                return callmethod(t, "not");
            },
            "/=": function(other) {
                var t = callmethod(this, "==", other);
                return callmethod(t, "not");
            },
            "asString": function() {
                var s = "object {";
                for (var i in this.data) {
                    s += "var " + i + " = " + this.data[i]._value + " ";
                }
                return new GraceString(s + "}");
            },
            "match()matchesBinding()else": function(pat, b, e) {
                return callmethod(pat, "matchObject()matchesBinding()else",
                        this, b, e);
            },
        },
        superobj: null,
        data: {},
        className: "Object",
    };
}
var var_MatchFailed = Grace_allocObject();
var_HashMap = { methods: { 'new': function() { return new GraceHashMap(); } } };
function GraceHashMap() {
    this.table = {};
    this.size = 0;
}
GraceHashMap.prototype = Grace_allocObject();
GraceHashMap.prototype.methods.put = function(k, v) {
    var hc = callmethod(k, "hashcode");
    hc = hc._value;
    while (this.table[hc]) {
        if (Grace_isTrue(callmethod(this.table[hc].key, "==", k)))
            break;
        hc++;
    }
    this.size++;
    this.table[hc] = {key: k, value: v};
    return this;
}
GraceHashMap.prototype.methods.get = function(k) {
    var hc = callmethod(k, "hashcode");
    hc = hc._value;
    while (this.table[hc]) {
        if (Grace_isTrue(callmethod(this.table[hc].key, "==", k)))
            return this.table[hc].value;
        hc++;
    }
    stderr_txt.value += "Key not found in HashMap at line " + lineNumber + ".\n";
    for (var i=callStack.length; i>0; i--)
        stderr_txt.value += "  From call to " + callStack[i-1] + ".\n";
    throw "Key not found in HashMap";
}
GraceHashMap.prototype.methods.contains = function(k) {
    var hc = callmethod(k, "hashcode");
    hc = hc._value;
    while (this.table[hc]) {
        if (Grace_isTrue(callmethod(this.table[hc].key, "==", k)))
            return new GraceBoolean(true);
        hc++;
    }
    return new GraceBoolean(false);
}
GraceHashMap.prototype.methods.asString = function() {
    var s = "[{";
    var first = true;
    for (h in this.table) {
        p = this.table[h];
        if (first)
            first = false;
        else
            s += ", ";
        s += callmethod(p.key, "asString")._value;
        s += ": ";
        s += callmethod(p.value, "asString")._value;
    }
    s += "}]";
    return new GraceString(s);
}
function GraceListIterator(l) {
    this._value = l;
    this._index = 0;
    this._max = l.length;
}
GraceListIterator.prototype = Grace_allocObject();
GraceListIterator.prototype.methods.havemore = function() {
    return new GraceBoolean(this._index < this._max);
}
GraceListIterator.prototype.methods.next = function() {
    var rv = this._value[this._index];
    this._index++;
    return rv;
}
function GraceStringIterator(s) {
    this._value = s._value;
    this._index = 0;
    this._max = s._value.length;
}
GraceStringIterator.prototype = Grace_allocObject();
GraceStringIterator.prototype.methods.havemore = function() {
    return new GraceBoolean(this._index < this._max);
}
GraceStringIterator.prototype.methods.next = function() {
    var rv = new GraceString(this._value.charAt(this._index));
    this._index++;
    return rv;
}

var stdout = Grace_allocObject();
stdout.methods.write = function(s) {
    stdout_txt.value += s._value;
}
var stdin = Grace_allocObject();
stdin.methods.read = function() {
    return new GraceString(stdin_txt.value);
}
var stderr = Grace_allocObject();
stderr.methods.write = function(s) {
    stderr_txt.value += s._value;
}
stdout.methods.close = function() {};
stderr.methods.close = function() {};
stdin.methods.close = function() {};
function gracecode_io() {
    this.methods.output = function() {
        return this._output;        
    };
    this._output = stdout;
    this.methods.input = function() {
        return this._input;        
    };
    this._input = stdin;
    this.methods.error = function() {
        return this._error;        
    };
    this._error = stderr;
    return this;
}

function gracecode_sys() {
    this.methods.argv = function() {
        return new GraceList([
            new GraceString("minigrace"),
            new GraceString("--target"),
            new GraceString("js"),
        ]);
    };
    this.methods.exit = function() {
        throw "SystemExit";
    };
    return this;
}

function gracecode_unicode() {
    this.methods = {
        isLetter: function(s) {
            if (typeof s._value == "string")
                var i = s._value.charCodeAt(0);
            else
                var i = s._value;
            return new GraceBoolean((i >= 65 && i <= 90) || (i >= 97 && i <= 122));
        },
        isNumber: function(s) {
            if (typeof s._value == "string")
                var i = s._value.charCodeAt(0);
            else
                var i = s._value;
            return new GraceBoolean((i >= 48 && i <= 57));
        },
        isSymbolMathematical: function(ord) {
            var s = ord._value
            if ((s == 45) || (s == 43) || (s == 47) || (s == 42)
                    || s == 62 || s == 60 || s == 61 || s == 126) {
                return new GraceBoolean(true);
            }
            return new GraceBoolean(false);
        },
        isSeparator: function(s) {
            if (s == " ") {
                return new GraceBoolean(true);
            }
            return new GraceBoolean(false);
        },
        isControl: function(s) {
            return new GraceBoolean(false);
        },
        name: function(s) {
            return new GraceString("UNICODE CHARACTER " + s.methods["ord"].call(s)._value + " (no Unicode character database; names unknown)");
        },
        create: function(n) {
            return new GraceString(String.fromCharCode(n._value));
        },
    };
    return this;
}

var util_module = false;
function gracecode_util() {
    if (util_module != false)
        return util_module;
    this.methods = {
        outfile: function() {
            return stdout;
        },
        infile: function() {
            return stdin;
        },
        parseargs: function() {
        },
        target: function() {
            return new GraceString(document.getElementById('mode').value);
        },
        modname: function() {
            return new GraceString("USER");
        },
        setline: function(i) {
            lineNumber = i._value;
            this._linenum = i;
        },
        linenum: function() {
            return this._linenum;
        },
        linepos: function() {
            return this._linepos;
        },
        setPosition: function(l, p) {
            lineNumber = l._value;
            this._linenum = l;
            this._linepos = p;
        },
        buildtype: function() {
            return new GraceString("normal");
        },
        runmode: function() {
            return new GraceString("normal");
        },
        gracelibPath: function() {
            return new GraceString("gracelib.h");
        },
        verbosity: function() {
            return new GraceNum(30);
        },
        log_verbose: function(s) {
            stderr_txt.value += "minigrace: " + s._value + "\n";
        },
        outprint: function(s) {
            stdout_txt.value += s._value + "\n";
        },
        engine: function() {
            return new GraceString("js");
        },
        debug: function(s) {
            dbg(s._value);
        },
        type_error: function(s) {
            stderr_txt.value += "<USER>:" + this._linenum._value + ":" +
                this._linepos._value + ": type error: " + s._value;
            throw "ErrorExit";
        },
        syntax_error: function(s) {
            stderr_txt.value += "<USER>:" + this._linenum._value + ":" +
                this._linepos._value + ": syntax error: " + s._value;
            throw "ErrorExit";
        },
        warning: function(s) {
            stderr_txt.value += "<USER>:" + this._linenum._value + ":" +
                this._linepos._value + ": warning: " + s._value;
        },
        hex: function(n) {
            var hexdigits = "0123456789abcdef"
            var s = ""
            var num = n._value
            while (num > 0) {
                var i = num % 16
                s = s + hexdigits.charAt(i)
                num = num - i
                num = num / 16
            }
            return new GraceString(s)
        },
        join: function(joiner, iterable) {
            var s = "";
            var ind = callmethod(iterable, "indices");
            for (var i=0; i<ind._value.length; i++) {
                if (i > 0)
                    s += ",";
                s += callmethod(callmethod(iterable, "at", new GraceNum(i + 1)),
                        "asString")._value;
            }
            return new GraceString(s);
        },
        "runOnNew()else": function(b,e) {
            return callmethod(b, "apply");
        },
        "extensions": function() {
            return extensionsMap;
        }
    };
    this._linenum = new GraceNum(1);
    this._linepos = new GraceNum(1);
    util_module = this;
    return this;
}
var callStack = [];
var overrideReceiver = null;
function callmethodsuper(obj, methname) {
    overrideReceiver = obj;
    var args = Array.prototype.slice.call(arguments, 1);
    args.splice(0, 0, superDepth.superobj);
    return callmethod.apply(null, args);
}
function callmethod(obj, methname) {
    var meth = obj.methods[methname];
    var origSuperDepth = superDepth;
    superDepth = obj;
    if (typeof(meth) != "function") {
        var s = obj
        while (s.superobj != null) {
            s = s.superobj;
            meth = s.methods[methname];
            if (typeof(meth) == "function") {
                superDepth = s;
                break;
            }
        }
    }
    if (typeof(meth) != "function") {
        stderr_txt.value += "No such method '" + methname + "' on " + obj.className + ", called at line " + lineNumber + ".\n";
        for (var i=callStack.length; i>0; i--)
            stderr_txt.value += "  From call to " + callStack[i-1] + ".\n";
        stderr_txt.value += "Methods are:\n";
        for (var mn in obj.methods) {
            stderr_txt.value += "  " + mn + "\n";
        }
        throw "No such method '" + methname + "'";
    }
    if (overrideReceiver != null) {
        obj = overrideReceiver;
        overrideReceiver = null;
    }
    callStack.push(obj.className + "." + methname + " at line " + lineNumber);
    var args = Array.prototype.slice.call(arguments, 2);
    var ret = meth.apply(obj, args);
    superDepth = origSuperDepth;
    callStack.pop();
    return ret;
}
function matchCase(obj, cases, elsecase) {
    var i = 0;
    for (i = 0; i<cases.length; i++) {
        var ret = callmethod(cases[i], "apply", obj);
        if (ret != var_MatchFailed)
            return ret;
    }
    if (elsecase != false)
        return callmethod(elsecase, "apply", obj);
    return var_MatchFailed;
}
function ReturnException(v, target) {
    this.returnvalue = v;
    this.target = target;
}
ReturnException.prototype = {
    'exctype': 'return',
};
var importedModules = {};
function do_import(modname, func) {
    if (importedModules[modname]) {
        return importedModules[modname];
    }
    var f = func.call(Grace_allocModule(modname));
    importedModules[modname] = f;
    return f;
}
function dbgp(o, d) {
    if (d == undefined)
        d = 0;
    var i;
    var ind = "";
    for (i=0; i<d; i++)
        ind += "  ";
    if (typeof(o) == "function") {
        return "function";
    }
    if (typeof(o) == "number") {
        return "" + o;
    }
    if (typeof(o) == "boolean") {
        return "" + o;
    }
    if (typeof(o) == "string") {
        return '"' + o + '"';
    }
    var s = "Object{\n";
    for (var t in o) {
        s += ind + "  " + t + ": " + dbgp(o[t], d + 1) + "\n";
    }
    return s + ind + "}";
}
function dbg(o) {
    stderr_txt.value += dbgp(o, 0) + "\n";
}
var extensionsMap = callmethod(var_HashMap, "new");
var var_void = new GraceObject();
var ellipsis = Grace_allocObject();
ellipsis.methods.asString = function() {return new GraceString("ellipsis");}
var Grace_prelude = Grace_allocObject();
Grace_prelude.methods["while()do"] = function(c,b) {
    while (Grace_isTrue(callmethod(c, "apply"))) {
        callmethod(b, "apply");
    }
    return var_void;
}
Grace_prelude.methods["for()do"] = function(c,b) {
    var iter = callmethod(c, "iterator");
    while (Grace_isTrue(callmethod(iter, "havemore"))) {
        var val = callmethod(iter, "next");
        callmethod(b, "apply", val);
    }
    return var_void;
}
function Grace_allocModule(modname) {
    var mod = Grace_allocObject();
    mod.methods.outer = function() {
        return this.outer;
    }
    mod.outer = Grace_prelude;
    mod.className = "module<" + modname + ">";
    return mod;
}
