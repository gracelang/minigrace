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
        "++": function(argcv, other) {
            var o = callmethod(other, "asString", [0]);
            return new GraceString(this._value + o._value);
        },
        "at": function(argcv, other) {
            var o = callmethod(other, 'asString', [0]);
            var idx = parseInt(o._value) - 1;
            return new GraceString(this._value.charAt(idx));
        },
        "size": function(argcv) {
            return new GraceNum(this._value.length);
        },
        "_escape": function(argcv) {
            var tmp = callmethod(this, "replace()with", [2],
                    new GraceString("\\"), new GraceString("\\\\"));
            tmp = callmethod(tmp, "replace()with", [2],
                    new GraceString("\""), new GraceString("\\\""));
            tmp = callmethod(tmp, "replace()with", [2],
                    new GraceString("\n"), new GraceString("\\n"));
            return tmp;
        },
        "replace()with": function(argcv, what, wth) {
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
        "substringFrom()to": function(argcv, from, to) {
            var s = this._value;
            return new GraceString(s.substring(from._value - 1, to._value));
        },
        "asString": function(argcv) { return this ; },
        "encode": function(argcv) { return this ; }, // TODO this is a hack
        "==": function(argcv, other) {
            if (this == other)
                return new GraceBoolean(true);
            if (this.prototype == other.prototype
                    && this._value == other._value)
                return new GraceBoolean(true);
            return new GraceBoolean(false);
        },
        "!=": function(argcv, other) {
            var t = callmethod(this, "==", [1], other);
            return callmethod(t, "not", [0]);
        },
        "/=": function(argcv, other) {
            var t = callmethod(this, "==", [1], other);
            return callmethod(t, "not", [0]);
        },
        "iterator": function(argcv) {
            return new GraceStringIterator(this);
        },
        "ord": function(argcv) {
            return new GraceNum(this._value.charCodeAt(0));
        },
        "hashcode": function(argcv) {
            var hc = 0;
            for (var i=0; i<this._value.length; i++) {
                hc *= 23;
                hc += this._value.charCodeAt(i);
                hc %= 0x100000000;
            }
            return new GraceNum(hc);
        },
        "match()matchesBinding()else": function(argcv, pat, b, e) {
            return callmethod(pat, "matchObject()matchesBinding()else", [3],
                    this, b, e);
        },
        "matchObject()matchesBinding()else": function(argcv, obj, b, e) {
            var bl = callmethod(this, "==", [1], obj);
            if (Grace_isTrue(bl)) {
                return callmethod(b, "apply", [1], obj);
            } else {
                return callmethod(e, "apply", [1], obj);
            }
        },
        "indices": function(argcv) {
            var l = [];
            for (var i=1; i<=this._value.length; i++)
                l.push(new GraceNum(i));
            return new GraceList(l);
        },
        "asNumber": function(argcv) {
            return new GraceNum(0 + this._value);
        },
        "match": function(argcv, o) {
            if (Grace_isTrue(callmethod(this, "==", [1], o)))
                return new GraceSuccessfulMatch(o);
            return new GraceFailedMatch(o);
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
        "+": function(argcv, other) {
            var s = this._value + other._value;
            return new GraceNum(s)
        },
        "*": function(argcv, other) {
            var s = this._value * other._value;
            return new GraceNum(s)
        },
        "/": function(argcv, other) {
            var s = this._value / other._value;
            return new GraceNum(s)
        },
        "-": function(argcv, other) {
            var s = this._value - other._value;
            return new GraceNum(s)
        },
        "%": function(argcv, other) {
            var s = this._value % other._value;
            return new GraceNum(s)
        },
        "++": function(argcv, other) {
            var t = callmethod(this, "asString", [0]);
            return callmethod(t, "++", [1], other);
        },
        "..": function(argcv, other) {
            var o = callmethod(other, "asString", [0]);
            var ub = parseInt(o._value);
            var l = [];
            for (var i=this._value; i<=ub; i++)
                l.push(new GraceNum(i));
            return new GraceList(l);
        },
        "<": function(argcv, other) {
            var s = this._value < other._value;
            return new GraceBoolean(s)
        },
        ">": function(argcv, other) {
            var s = this._value > other._value;
            return new GraceBoolean(s)
        },
        "<=": function(argcv, other) {
            var s = this._value <= other._value;
            return new GraceBoolean(s)
        },
        ">=": function(argcv, other) {
            var s = this._value >= other._value;
            return new GraceBoolean(s)
        },
        "prefix-": function(argcv) {
            return new GraceNum(-this._value)
        },
        "asString": function(argcv) {
            return new GraceString("" + this._value)
        },
        "==": function(argcv, other) {
            if (this == other)
                return new GraceBoolean(true);
            if (this.className == other.className
                    && this._value == other._value)
                return new GraceBoolean(true);
            return new GraceBoolean(false);
        },
        "!=": function(argcv, other) {
            var t = callmethod(this, "==", [1], other);
            return callmethod(t, "not", [0]);
        },
        "/=": function(argcv, other) {
            var t = callmethod(this, "==", [1], other);
            return callmethod(t, "not", [0]);
        },
        "hashcode": function(argcv) {
            return new GraceNum(parseInt("" + (this._value * 10)));
        },
        "match()matchesBinding()else": function(argcv, pat, b, e) {
            return callmethod(pat, "matchObject()matchesBinding()else", [3],
                    this, b, e);
        },
        "matchObject()matchesBinding()else": function(argcv, obj, b, e) {
            var bl = callmethod(this, "==", [1], obj);
            if (Grace_isTrue(bl)) {
                return callmethod(b, "apply", [1], obj);
            } else {
                return callmethod(e, "apply", [1], obj);
            }
        },
        "inBase": function(argcv, other) {
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
        "truncate": function(argcv) {
            if (this._value < 0)
                return new GraceNum(Math.ceil(this._value));
            return new GraceNum(Math.floor(this._value));
        },
        "match": function(argcv, o) {
            if (Grace_isTrue(callmethod(this, "==", [1], o)))
                return new GraceSuccessfulMatch(o);
            return new GraceFailedMatch(o);
        },
    },
    className: "Number",
};

function GraceBoolean(b) {
    this._value = b;
}
GraceBoolean.prototype = {
    methods: {
        "not": function(argcv) {
            return new GraceBoolean(!this._value)
        },
        "prefix!": function(argcv) {
            return new GraceBoolean(!this._value)
        },
        "&": function(argcv, other) {
            var s = this._value && other._value;
            return new GraceBoolean(s)
        },
        "|": function(argcv, other) {
            var s = this._value || other._value;
            return new GraceBoolean(s)
        },
        "&&": function(argcv, other) {
            if (!this._value)
                return this;
            if (other instanceof GraceBoolean)
                return other;
            if (other.superobj instanceof GraceBoolean)
                return other;
            var o = callmethod(other, "apply", [0]);
            return o;
        },
        "||": function(argcv, other) {
            if (this._value)
                return this;
            if (other instanceof GraceBoolean)
                return other;
            if (other.superobj instanceof GraceBoolean)
                return other;
            var o = callmethod(other, "apply", [0]);
            return o;
        },
        "andAlso": function(argcv, other) {
            if (this._value) {
                return callmethod(other, "apply", [0]);
            }
            return this;
        },
        "orElse": function(argcv, other) {
            if (!this._value) {
                return callmethod(other, "apply", [0]);
            }
            return this;
        },
        "asString": function(argcv) {
            return new GraceString("" + this._value)
        },
        "==": function(argcv, other) {
            if (this == other)
                return new GraceBoolean(true);
            if (this.prototype == other.prototype
                    && this._value == other._value)
                return new GraceBoolean(true);
            return new GraceBoolean(false);
        },
        "!=": function(argcv, other) {
            var t = callmethod(this, "==", [1], other);
            return callmethod(t, "not", [0]);
        },
        "/=": function(argcv, other) {
            var t = callmethod(this, "==", [1], other);
            return callmethod(t, "not", [0]);
        },
        "match()matchesBinding()else": function(argcv, pat, b, e) {
            return callmethod(pat, "matchObject()matchesBinding()else", [3],
                    this, b, e);
        },
        "match": function(argcv, o) {
            if (Grace_isTrue(callmethod(this, "==", [1], o)))
                return new GraceSuccessfulMatch(o);
            return new GraceFailedMatch(o);
        },
    },
    className: "Boolean",
};
function GraceList(l) {
    this._value = l;
}
GraceList.prototype = {
    methods: {
        "push": function(argcv, val) {
            this._value.push(val);
        },
        "size": function(argcv) {
            //dbg("called size: " + this._value.length);
            return new GraceNum(this._value.length);
        },
        "pop": function(argcv) {
            return this._value.pop();
        },
        "at": function(argcv, other) {
            var o = callmethod(other, "asString", [0]);
            var idx = parseInt(o._value);
            return this._value[idx-1];
        },
        "[]": function(argcv, other) {
            var o = callmethod(other, "asString", [0]);
            var idx = parseInt(o._value);
            return this._value[idx-1];
        },
        "at()put": function(argcv, idx, val) {
            this._value[idx._value-1] = val;
        },
        "[]:=": function(argcv, idx, val) {
            this._value[idx._value-1] = val;
        },
        "asString": function(argcv) {
            var s = "[";
            s += this._value.length + ": "
            for (var i=0; i<this._value.length; i++) {
                var v = this._value[i];
                if (v.methods["asString"])
                    s += callmethod(v, "asString", [0])._value + ", ";
                else {
                    var q = dbgp(v, 2);
                    s += "((" + q + ")), "
                }
            }
            s += "]";
            return new GraceString(s);
        },
        "contains": function(argcv, other) {
            for (var i=0; i<this._value.length; i++) {
                var v = this._value[i];
                if (Grace_isTrue(callmethod(v, "==", [1], other)))
                    return new GraceBoolean(true);
            }
            return new GraceBoolean(false);
        },
        "==": function(argcv, other) {
            if (this == other)
                return new GraceBoolean(true);
            return new GraceBoolean(false);
        },
        "!=": function(argcv, other) {
            var t = callmethod(this, "==", [1], other);
            return callmethod(t, "not", [0]);
        },
        "/=": function(argcv, other) {
            var t = callmethod(this, "==", [1], other);
            return callmethod(t, "not", [0]);
        },
        "match()matchesBinding()else": function(argcv, pat, b, e) {
            return callmethod(pat, "matchObject()matchesBinding()else", [3],
                    this, b, e);
        },
        "prepended": function(argcv, item) {
            var l = [item];
            for (var i=0; i<this._value.length; i++)
                l.push(this._value[i]);
            return new GraceList(l);
        },
        "iterator": function(argcv) {
            return new GraceListIterator(this._value);
        },
        "indices": function(argcv) {
            var l = [];
            for (var i=1; i<=this._value.length; i++)
                l.push(new GraceNum(i));
            return new GraceList(l);
        },
        "first": function(argcv) {
            return this._value[0];
        },
        "last": function(argcv) {
            return this._value[this._value.length-1];
        },
    },
    className: "List",
};

function Grace_isTrue(o) {
    if (o._value === false)
        return false;
    if (o._value === true)
        return true;
    if (o.superobj != null)
        return Grace_isTrue(o.superobj);
}

function Grace_egal(o1, o2) {
    if (o1 == o2)
        return new GraceBoolean(true);
    if (o1.mutable || o2.mutable)
        return new GraceBoolean(false);
    var t1 = classType(o1);
    var t2 = classType(o2);
    var tm = callmethod(callmethod(t1, "match", [1], o2),
            "&&", [1], callmethod(t2, "match", [1], o1));
    if (!Grace_isTrue(tm))
        return new GraceBoolean(false);
    for (d in o1.methods) {
        if (d == "outer")
            continue;
        var meth = o1.methods[d];
        var tmp = o2;
        while (tmp != null && tmp != undefined
                && typeof(tmp.methods[d]) != "function")
            tmp = tmp.superobj;
        if (tmp == null || tmp == undefined)
            return new GraceBoolean(false);
        if (meth == tmp.methods[d])
            continue;
        if (meth.def && !tmp.methods[d].def)
            return new GraceBoolean(false);
        if (!meth.def && meth != tmp.methods[d])
            return new GraceBoolean(false);
        if (o1.data[d] && !tmp.data[d])
            return new GraceBoolean(false);
        var leftdata = o1.data[d];
        var rightdata = tmp.data[d];
        if (!Grace_isTrue(callmethod(leftdata, "==", [1], rightdata)))
            return new GraceBoolean(false);
    }
    return new GraceBoolean(true);
}

function Grace_print(obj) {
    var s = callmethod(obj, "asString", [0]);
    stdout_txt.value += s._value + "\n";
    return var_nothing;
}
function Grace_length(obj) {
    return new GraceNum(obj._value.length);
}
function GraceObject() {

}
GraceObject.prototype = {
    methods: {
        "==": function(argcv, o) {
            return new GraceBoolean(this == o);
        },
        "!=": function(argcv, o) {
            var b = this.methods["=="].call(this, o);
            return b.methods["not"].call(b);
        },
        "/=": function(argcv, o) {
            var b = this.methods["=="].call(this, o);
            return b.methods["not"].call(b);
        },
        "asString": function(argcv) {
            var s = "object {";
            for (var i in this.data) {
                s += "var " + i + " = " + this.data[i]._value;
            }
            return new GraceString(s + "}");
        },
    },
    data: {}
};
GraceObjectMethods = {
    "==": function(argcv, o) {
        return Grace_egal(this, o);
    },
    "!=": function(argcv, other) {
        var t = callmethod(this, "==", [1], other);
        return callmethod(t, "not", [0]);
    },
    "/=": function(argcv, other) {
        var t = callmethod(this, "==", [1], other);
        return callmethod(t, "not", [0]);
    },
    "asString": function(argcv) {
        var s = "object {";
        for (var i in this.data) {
            s += "var " + i + " = " + this.data[i]._value + " ";
        }
        return new GraceString(s + "}");
    },
};
function Grace_allocObject() {
    return {
        methods: {
            "==": GraceObjectMethods["=="],
            "!=": GraceObjectMethods["!="],
            "/=": GraceObjectMethods["/="],
            "asString": GraceObjectMethods["asString"],
        },
        superobj: null,
        data: {},
        className: "Object",
        mutable: false,
    };
}
function GraceMatchResult(result, bindings) {
    this.data["result"] = result;
    if (bindings == undefined)
        bindings = new GraceList([]);
    this.data["bindings"] = bindings;
    this._value = this.superobj._value;
}
GraceMatchResult.prototype = Grace_allocObject();
GraceMatchResult.prototype.methods.result = function() {
    return this.data["result"];
}
GraceMatchResult.prototype.methods.bindings = function() {
    return this.data["bindings"];
}
GraceMatchResult.prototype.methods.asString = function() {
    var s = ""
    if (Grace_isTrue(this))
        s = "SuccessfulMatch(result = ";
    else
        s = "FailedMatch(result = ";
    s += callmethod(this.data["result"], "asString", [0])._value;
    s += ", bindings = ";
    s += callmethod(this.data["bindings"], "asString", [0])._value;
    s += ")";
    return new GraceString(s);
}
function GraceSuccessfulMatch(result, bindings) {
    this.superobj = new GraceBoolean(true);
    this.data = {};
    this.data["result"] = result;
    if (bindings == undefined)
        bindings = new GraceList([]);
    this.data["bindings"] = bindings;
    this._value = this.superobj._value;
}
function GraceFailedMatch(result, bindings) {
    this.superobj = new GraceBoolean(false);
    this.data = {};
    this.data["result"] = result;
    if (bindings == undefined)
        bindings = new GraceList([]);
    this.data["bindings"] = bindings;
    this._value = this.superobj._value;
}
GraceSuccessfulMatch.prototype = GraceMatchResult.prototype;
GraceFailedMatch.prototype = GraceMatchResult.prototype;

function GraceType(name) {
    this.name = name;
    this.className = name;
    this.typeMethods = [];
}
GraceType.prototype = {
    methods: {
        "match": function(argcv, other) {
            var i;
            for (i=0; i<this.typeMethods.length; i++) {
                var m = this.typeMethods[i];
                if (!other.methods[m]) {
                    var tmp = other;
                    var found = false;
                    while (tmp.superobj != null) {
                        tmp = tmp.superobj;
                        if (tmp.methods[m]) {
                            found = true;
                            break
                        }
                    }
                    if (!found)
                        return new GraceFailedMatch(other);
                }
            }
            return new GraceSuccessfulMatch(other,
                    new GraceList([]));
        },
    },
    typeMethods: [],
    className: "Type",
};
function classType(obj) {
    var t = new GraceType(obj.className);
    var o = obj;
    while (o != null) {
        var i;
        for (m in o.methods)
            t.typeMethods.push(m);
        o = o.superobj;
    }
    return t;
}
var var_String = classType(new GraceString(""));
var var_Number = classType(new GraceNum(1));
var var_Boolean = classType(new GraceBoolean(true));
var var_Type = classType(var_Boolean);
var type_String = var_String;
var type_Number = var_Number;
var type_Boolean = var_Boolean;
var var_Block = new GraceType("Block");
var_Block.typeMethods.push("apply");
var_Block.typeMethods.push("applyIndirectly");
var_Block.typeMethods.push("match");
var type_Block = var_Block;
var var_None = new GraceType("None");
var_None.typeMethods.push("==");
var_None.typeMethods.push("!=");
var type_None = var_None;
var var_Void = var_None;
var type_Void = var_None;
var var_MatchFailed = Grace_allocObject();
var_HashMap = { methods: { 'new': function() { return new GraceHashMap(); } } };
function GraceHashMap() {
    this.table = {};
    this.size = 0;
}
GraceHashMap.prototype = Grace_allocObject();
GraceHashMap.prototype.methods.put = function(argcv, k, v) {
    var hc = callmethod(k, "hashcode", [0]);
    hc = hc._value;
    while (this.table[hc]) {
        if (Grace_isTrue(callmethod(this.table[hc].key, "==", [1], k)))
            break;
        hc++;
    }
    this.size++;
    this.table[hc] = {key: k, value: v};
    return this;
}
GraceHashMap.prototype.methods.get = function(argcv, k) {
    var hc = callmethod(k, "hashcode", [0]);
    hc = hc._value;
    while (this.table[hc]) {
        if (Grace_isTrue(callmethod(this.table[hc].key, "==", [1], k)))
            return this.table[hc].value;
        hc++;
    }
    stderr_txt.value += "Key not found in HashMap at line " + lineNumber + ".\n";
    for (var i=callStack.length; i>0; i--)
        stderr_txt.value += "  From call to " + callStack[i-1] + ".\n";
    throw "Key not found in HashMap";
}
GraceHashMap.prototype.methods.contains = function(argcv, k) {
    var hc = callmethod(k, "hashcode", [0]);
    hc = hc._value;
    while (this.table[hc]) {
        if (Grace_isTrue(callmethod(this.table[hc].key, "==", [1], k)))
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
        s += callmethod(p.key, "asString", [0])._value;
        s += ": ";
        s += callmethod(p.value, "asString", [0])._value;
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
stdin.methods.iterator = function() {
    return callmethod(new GraceString(stdin_txt.value), "iterator", [0]);
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
        isLetter: function(argcv, s) {
            if (typeof s._value == "string")
                var i = s._value.charCodeAt(0);
            else
                var i = s._value;
            return new GraceBoolean((i >= 65 && i <= 90) || (i >= 97 && i <= 122));
        },
        isNumber: function(argcv, s) {
            if (typeof s._value == "string")
                var i = s._value.charCodeAt(0);
            else
                var i = s._value;
            return new GraceBoolean((i >= 48 && i <= 57));
        },
        isSymbolMathematical: function(argcv, ord) {
            var s = ord._value
            if ((s == 45) || (s == 43) || (s == 47) || (s == 42)
                    || s == 62 || s == 60 || s == 61 || s == 126) {
                return new GraceBoolean(true);
            }
            return new GraceBoolean(false);
        },
        isSeparator: function(argcv, s) {
            if (s == " ") {
                return new GraceBoolean(true);
            }
            return new GraceBoolean(false);
        },
        isControl: function(argcv, s) {
            return new GraceBoolean(false);
        },
        name: function(argcv, s) {
            return new GraceString("UNICODE CHARACTER " + s.methods["ord"].call(s)._value + " (no Unicode character database; names unknown)");
        },
        create: function(argcv, n) {
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
        outfile: function(argcv) {
            return stdout;
        },
        infile: function(argcv) {
            return stdin;
        },
        parseargs: function(argcv) {
        },
        target: function(argcv) {
            return new GraceString(document.getElementById('mode').value);
        },
        modname: function(argcv) {
            return new GraceString("USER");
        },
        setline: function(argcv, i) {
            lineNumber = i._value;
            this._linenum = i;
        },
        linenum: function(argcv) {
            return this._linenum;
        },
        linepos: function(argcv) {
            return this._linepos;
        },
        setPosition: function(argcv, l, p) {
            lineNumber = l._value;
            this._linenum = l;
            this._linepos = p;
        },
        buildtype: function(argcv) {
            return new GraceString("normal");
        },
        runmode: function(argcv) {
            return new GraceString("normal");
        },
        gracelibPath: function(argcv) {
            return new GraceString("gracelib.h");
        },
        verbosity: function(argcv) {
            return new GraceNum(30);
        },
        log_verbose: function(argcv, s) {
            stderr_txt.value += "minigrace: " + s._value + "\n";
        },
        outprint: function(argcv, s) {
            stdout_txt.value += s._value + "\n";
        },
        engine: function(argcv) {
            return new GraceString("js");
        },
        debug: function(argcv, s) {
            dbg(s._value);
        },
        type_error: function(argcv, s) {
            stderr_txt.value += "<USER>:" + this._linenum._value + ":" +
                this._linepos._value + ": type error: " + s._value;
            throw "ErrorExit";
        },
        syntax_error: function(argcv, s) {
            stderr_txt.value += "<USER>:" + this._linenum._value + ":" +
                this._linepos._value + ": syntax error: " + s._value;
            throw "ErrorExit";
        },
        warning: function(argcv, s) {
            stderr_txt.value += "<USER>:" + this._linenum._value + ":" +
                this._linepos._value + ": warning: " + s._value;
        },
        hex: function(argcv, n) {
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
        join: function(argcv, joiner, iterable) {
            var s = "";
            var ind = callmethod(iterable, "indices", [0]);
            for (var i=0; i<ind._value.length; i++) {
                if (i > 0)
                    s += ",";
                s += callmethod(callmethod(iterable, "at", [1], new GraceNum(i + 1)),
                        "asString", [0])._value;
            }
            return new GraceString(s);
        },
        "runOnNew()else": function(argcv, b,e) {
            return callmethod(b, "apply", [0]);
        },
        "extensions": function(argcv) {
            return extensionsMap;
        }
    };
    this._linenum = new GraceNum(1);
    this._linepos = new GraceNum(1);
    util_module = this;
    return this;
}
function checkmethodcall(func, methname, obj, args) {
    var i = 0;
    var pt = func.paramTypes;
    for (i=0; i<args.length, i<pt.length; i++) {
        var p = pt[i];
        if (!p || p.length == 0)
            continue;
        var t = p[0];
        if (!Grace_isTrue(callmethod(t, "match", [1], args[i]))) {
            stderr_txt.value += "Runtime type error: expected " + t.className + " for argument " + p[1] + " (" + (i+1) + ") of " + methname + ", called at line " + lineNumber + ".\n";
            for (var i=callStack.length; i>0; i--)
                stderr_txt.value += "  From call to " + callStack[i-1] + ".\n";
            throw "Runtime type error";
        }
    }
}
var callStack = [];
var overrideReceiver = null;
function callmethodsuper(obj, methname, argcv) {
    overrideReceiver = obj;
    var args = Array.prototype.slice.call(arguments, 1);
    args.splice(0, 0, superDepth.superobj);
    return callmethod.apply(null, args);
}
function callmethod(obj, methname, argcv) {
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
    var args = Array.prototype.slice.call(arguments, 3);
    if (meth.paramTypes)
        checkmethodcall(meth, methname, obj, args);
    args.unshift(argcv)
    var ret = meth.apply(obj, args);
    superDepth = origSuperDepth;
    callStack.pop();
    return ret;
}
function matchCase(obj, cases, elsecase) {
    var i = 0;
    for (i = 0; i<cases.length; i++) {
        var ret = callmethod(cases[i], "match", [1], obj);
        if (Grace_isTrue(ret))
            return callmethod(ret, "result", [0]);
    }
    if (elsecase != false)
        return callmethod(elsecase, "apply", [1], obj);
    return new GraceFailedMatch(obj);
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
var extensionsMap = callmethod(var_HashMap, "new", [0]);
var var_nothing = new GraceObject();
var_nothing.methods.asString = function() {return new GraceString("noSuchValue");}
var var_noSuchValue = var_nothing;
var ellipsis = Grace_allocObject();
ellipsis.methods.asString = function() {return new GraceString("ellipsis");}
var Grace_native_prelude = Grace_allocObject();
var Grace_prelude = Grace_native_prelude;
var var___95__prelude = Grace_native_prelude;
Grace_prelude.methods["while()do"] = function(argcv, c, b) {
    while (Grace_isTrue(callmethod(c, "apply", [0]))) {
        callmethod(b, "apply", [0]);
    }
    return var_nothing;
}
Grace_prelude.methods["for()do"] = function(argcv, c, b) {
    var iter = callmethod(c, "iterator", [0]);
    while (Grace_isTrue(callmethod(iter, "havemore", [0]))) {
        var val = callmethod(iter, "next", [0]);
        callmethod(b, "apply", [1], val);
    }
    return var_nothing;
}
Grace_prelude.methods["_methods"] = function() {
    var meths = [];
    for (m in this.methods)
        meths.push(new GraceString(m));
    var l = new GraceList(meths);
    return l;
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
