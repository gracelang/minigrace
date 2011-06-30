
var stdout_txt = document.getElementById("stdout_txt");
var stdin_txt = document.getElementById("stdout_txt");
var stderr_txt = document.getElementById("stderr_txt");

function GraceString(s) {
    this._value = s;
}

GraceString.prototype = {
    methods: {
        "++": function(other) {
            var o = other.methods["asString"].call(other);
            return new GraceString(this._value + o._value);
        },
        "at": function(other) {
            var o = other.methods["asString"].call(other);
            var idx = parseInt(o._value);
            return new GraceString(this._value.charAt(idx));
        },
        "size": function() {
            return new GraceNum(this._value.length);
        },
        "_escape": function() {
            var s = this._value.replace("\\", "\\\\");
            s = s.replace("\n", "\\n");
            return new GraceString(s.replace("\"", "\\\""));
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
            var t = this.methods["=="].call(this, other);
            return t.methods["not"].call(t);
        },
        "iterator": function() {
            return new GraceStringIterator(this);
        },
        "ord": function() {
            return new GraceNum(this._value.charCodeAt(0));
        },
    }
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
            var t = this.methods["asString"].call(this);
            return t.methods["++"].call(t, other);
        },
        "..": function(other) {
            var o = other.methods["asString"].call(other);
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
            var t = this.methods["=="].call(this, other);
            return t.methods["not"].call(t);
        },
    }
};

function GraceBoolean(b) {
    this._value = b;
}
GraceBoolean.prototype = {
    methods: {
        "not": function() {
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
                return other.methods["apply"].call(other);
            }
        },
        "ifFalse": function(other) {
            if (!this._value) {
                return other.methods["apply"].call(other);
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
            var t = this.methods["=="].call(this, other);
            return t.methods["not"].call(t);
        },
    }
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
            var o = other.methods["asString"].call(other);
            var idx = parseInt(o._value);
            return this._value[idx];
        },
        "[]": function(other) {
            var o = other.methods["asString"].call(other);
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
                    s += v.methods["asString"].call(v)._value + ", ";
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
                if (Grace_isTrue(v.methods["=="].call(v, other)))
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
            var t = this.methods["=="].call(this, other);
            return t.methods["not"].call(t);
        },
        "iterator": function() {
            return new GraceListIterator(this._value);
        }
    }
};

function Grace_isTrue(o) {
    return (o._value != false);
}

function Grace_print(obj) {
    var s = obj.methods['asString'].call(obj);
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
            "/=": function(o) {
                var b = this.methods["=="].call(this, o);
                return b.methods["not"].call(b);
            },
            "asString": function() {
                var s = "object {";
                for (var i in this.data) {
                    s += "var " + i + " = " + this.data[i]._value + " ";
                }
                return new GraceString(s + "}");
            },
        },
        data: {}
    };
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
    };
    return this;
}

function gracecode_util() {
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
            return new GraceString("js");
        },
        modname: function() {
            return new GraceString("USER");
        },
        setline: function(i) {
            this._linenum = i;
        },
        linenum: function() {
            return this._linenum;
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
            stderr_txt.value += "Syntax error around line " + this._linenum._value + ": " + s._value;
            throw new Exception("Grace syntax error");
        },
    };
    this._linenum = new GraceNum(1);
    return this;
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
