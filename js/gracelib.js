var lineNumber = 0;
var stdout_txt = document.getElementById("stdout_txt");
var stdin_txt = document.getElementById("stdout_txt");
var stderr_txt = document.getElementById("stderr_txt");
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
            var o = callmethod(other, asString);
            var idx = parseInt(o._value);
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
            return new GraceString(s.substring(from._value, to._value));
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
            var hc = 1;
            for (var i=0; i<this._value.length; i++) {
                hc *= this._value.charCodeAt(i);
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
            return this._value[idx];
        },
        "[]": function(other) {
            var o = callmethod(other, "asString");
            var idx = parseInt(o._value);
            return this._value[idx];
        },
        "[]:=": function(idx, val) {
            this._value[idx] = val;
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
        "/=": function(other) {
            var t = callmethod(this, "==", other);
            return callmethod(t, "not");
        },
        "match()matchesBinding()else": function(pat, b, e) {
            return callmethod(pat, "matchObject()matchesBinding()else", this,
                    b, e);
        },
        "iterator": function() {
            return new GraceListIterator(this._value);
        },
        "indices": function() {
            var l = [];
            for (var i=0; i<this._value.length; i++)
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
        data: {},
        className: "Object",
    };
}
var_HashMap = { methods: { new: function() { return new GraceHashMap(); } } };
function GraceHashMap() {
    self.table = {};
}
GraceHashMap.prototype = Grace_allocObject();
GraceHashMap.prototype.methods.put = function(k, v) {
    var hc = callmethod(k, "hashcode");
    hc = hc._value;
    while (self.table[hc]) {
        if (Grace_isTrue(callmethod(self.table[hc].key, "==", k)))
            break;
        hc++;
    }
    self.table[hc] = {key: k, value: v};
    return self;
}
GraceHashMap.prototype.methods.get = function(k) {
    var hc = callmethod(k, "hashcode");
    hc = hc._value;
    while (self.table[hc]) {
        if (Grace_isTrue(callmethod(self.table[hc].key, "==", k)))
            return self.table[hc].value;
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
    while (self.table[hc]) {
        if (Grace_isTrue(callmethod(self.table[hc].key, "==", k)))
            return new GraceBoolean(true);
        hc++;
    }
    return new GraceBoolean(false);
}
GraceHashMap.prototype.methods.asString = function() {
    var s = "[{";
    var first = true;
    for (h in self.table) {
        p = self.table[h];
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
    this._error = stdin;
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
                    || s == 62 || s == 60 || s == 61) {
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
            if (document.getElementById("show_tokens").checked)
                return new GraceString("lex");
            if (document.getElementById("show_ast").checked)
                return new GraceString("parse");
            if (document.getElementById("show_llvm").checked)
                return new GraceString("llvm");
            return new GraceString("js");
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
            return new GraceString("normal");
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
        syntax_error: function(s) {
            stderr_txt.value += "Syntax error around line " + this._linenum._value + ", character " + this._linepos._value + ": " + s._value;
            throw "ErrorExit";
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
    };
    this._linenum = new GraceNum(1);
    this._linepos = new GraceNum(1);
    util_module = this;
    return this;
}
var callStack = [];
function callmethod(obj, methname) {
    var meth = obj.methods[methname];
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
    callStack.push(obj.className + "." + methname + " at line " + lineNumber);
    var args = Array.prototype.slice.call(arguments, 2);
    var ret = meth.apply(obj, args);
    callStack.pop();
    return ret;
}
function ReturnException(v, target) {
    this.returnvalue = v;
    this.target = target;
}
ReturnException.prototype = {
    'exctype': 'return',
};
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
