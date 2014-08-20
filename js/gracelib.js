"use strict";

var lineNumber = 0;
var moduleName = "null";

function setLineNumber(n) {
    lineNumber = n;
}
function getLineNumber() {
    return lineNumber;
}
function setModuleName(m) {
    moduleName = m;
}
function getModuleName() {
    return moduleName;
}

function GraceObject() {       // constructor function
    this.superobj = null;
    this.data = {};
    this.className = "object";
    this.mutable = false;
    this.definitionModule = "unknown";
    this.definitionLine = 0;
}

GraceObject.prototype = {
    methods: {
        "==": function object_equals (argcv, o) {
            return callmethod(Grace_prelude, "is()identicalTo", [1, 1], this, o);
        },
        "!=": function object_notEquals (argcv, o) {
            var b = callmethod(this, "==", [1], o);
            return callmethod(b, "not", [0]);
        },
        "asString": function object_asString (argcv) {
            var s = "object {";
            for (var i in this.data) {
                if (firstTime) firstTime = false; else s += ", ";
                try {
                    s += "" + i + " = " + callmethod(this.data[i], "asString", [0])._value + "; ";
                } catch (e) {
                    s += "var " + i + ";"
                }
            }
            return new GraceString(s + "}");
        },
        "asDebugString": function object_asDebugString (argcv) {
            var s = "object {";
            for (var i in this.data) {
                if (firstTime) firstTime = false; else s += ", ";
                try {
                    s += "" + i + " = " + callmethod(this.data[i], "asDebugString", [0])._value + "; ";
                } catch (e) {
                    s += "var " + i + ";"
                }
            }
            return new GraceString(s + "}");
        },
        "debugValue": function object_debugValue (argcv) {
            return new GraceString("object");
        },
        "debugIterator": function object_debugIterator (argcv) {
            return new GraceIterator(this.data);
        },
        "::": function object_colonColon (argcv, other) {
            return callmethod(GraceBindingClass(), "key()value", [1, 1], this, other);
        },
    },
//    data: {}  The prototype should NOT have a data object — data should go in the
//    child (non-shared) object.
};
// make asString available under another name, in case asString is overridden.
GraceObject.prototype.methods.basicAsString = GraceObject.prototype.methods.asString;
// TODO: make this a named method parameterized by the name to recurse on, and share it.

function Grace_allocObject(superConstructor, classname) {
    // The difference between this function and "new GraceObject" is that the
    // object returned here has its OWN methods object,
    // whereas the one returned from new GraceObject shares its prototype's methods.
    // Changing the 'methods' object has different effects in the two cases!
    var sup = superConstructor ? new superConstructor() : null;
    var resultObj = {
        methods: {},
        superobj: sup,
        data: {},
        className: classname || "object",
        mutable: false,
        definitionModule: "unknown",
        definitionLine: 0
    };
    for (var m in GraceObject.prototype.methods) {
        resultObj.methods[m] = GraceObject.prototype.methods[m];
    };
    return resultObj;
}

function capitalize(str)
{
    return str.replace(/^.|\s\S/g, function(a) { return a.toUpperCase(); });
}

function GraceString(s) {
    this._value = s;
}
function string_greaterThanOrEqual (argcv, that) {
    var self = this._value;
    var other = that._value;
    if (self >= other) return GraceTrue;
    return GraceFalse;
}
function string_lessThanOrEqual (argcv, that) {
    var self = this._value;
    var other = that._value;
    if (self <= other) return GraceTrue;
    return GraceFalse;
}
function string_notEqual(argcv, other) {
    var t = callmethod(this, "==", [1], other);
    return callmethod(t, "not", [0]);
}
function string_at(argcv, other) {
    var o = callmethod(other, 'asString', [0]);
    var idx = parseInt(o._value);
    var s = this._value;
    if (idx > s.length) {
        var msgstr = (s.length <= 20) ? s : (s.substr(0, 17) + "…");
        throw new GraceExceptionPacket(BoundsErrorObject,
            new GraceString('"' + msgstr + "\".at(" + idx + ") but string.size = " + s.length))
    };
    if (idx < 1) {
        var msgstr = (s.length <= 20) ? s : (s.substr(0, 17) + "…");
        throw new GraceExceptionPacket(BoundsErrorObject,
            new GraceString("'" + msgstr + "\".at(" + idx + ") but strings are indexed from 1"))
    };
    return new GraceString(s.charAt(idx-1));
}
GraceString.prototype = {
    methods: {
        "++": function(argcv, other) {
            var o = callmethod(other, "asString", [0]);
            return new GraceString(this._value + o._value);
        },
        "at": string_at,
        "[]": string_at,
        "size": function(argcv) {
            return new GraceNum(this._value.length);
        },
        "isEmpty": function(argcv) {
            return (this_.value.length === 0) ? GraceTrue : GraceFalse;
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
            var i;
            while ((i = s.indexOf(what._value)) != -1) {
                os += s.substr(0, i);
                os += wth._value;
                s = s.substr(i + sl);
            }
            os += s;
            return new GraceString(os);
        },
        "indexOf": function string_indexOf (argcv, needle, block0) {
            var self = this._value;
            var result = self.indexOf(needle._value);
            if (result === -1) { return 0 };
            return new GraceNum(result + 1);
        },
        "indexOf()ifAbsent": function string_indexOf_ifAbsent (argcv, needle, block0) {
            var self = this._value;
            var result = self.indexOf(needle._value);
            if (result === -1) { return callmethod(block0, "apply", [0]) };
            return new GraceNum(result + 1);
        },
        "lastIndexOf()": function string_lastIndexOf_ifAbsent (argcv, needle, block0) {
            var self = this._value;
            var result = self.lastIndexOf(needle._value);
            if (result === -1) { return 0 };
            return new GraceNum(result + 1);
        },
        "lastIndexOf()ifAbsent": function string_lastIndexOf (argcv, needle, block0) {
            var self = this._value;
            var result = self.lastIndexOf(needle._value);
            if (result === -1) { return callmethod(block0, "apply", [0]) };
            return new GraceNum(result + 1);
        },
        "trim": function string_trim (argcv) {
            var self = this._value;
            return new GraceString(self.trim());
        },
        "substringFrom()to": function string_substringFrom_to(argcv, from, to) {
            var s = this._value;
            var start = from._value;
            var stop = to._value;
            // we deliberately allow "abc".substringFrom 4 to (stop)
            // and for stop to be beyond the end of s
            if ((start < 1) || (start > s.length + 1)) {
                var msgstr = s.length <= 20 ? s : (s.substr(0, 17) + "…");
                throw new GraceExceptionPacket(BoundsErrorObject,
                    new GraceString('"' + msgstr + "\".substringFrom(" + start + ")to("
                                    + stop + ") but string.size = " + s.length));
            };
            return new GraceString(s.substring(start - 1, stop));
        },
        "substringFrom()size": function string_substringFrom_size(argcv, from, size) {
            var s = this._value;
            var start = from._value;
            var n = size._value;
            // we deliberatly allow "abc".substringFrom 4 size (size)
            // and for start + n to extend beyond the end of s.
            if ((start < 1) || (start > s.length + 1)) {
                var msgstr = s.length <= 20 ? s : (s.substr(0, 17) + "…");
                throw new GraceExceptionPacket(BoundsErrorObject,
                    new GraceString('"' + msgstr + "\".substringFrom(" + start + ")size("
                                    + n + ") but string.size = " + s.length));
            };
            return new GraceString(s.substr(start - 1, n));
        },
        "startsWith": function string_startsWith(argcv, needle) {
            var self = this._value;
            var n = needle._value;
            if (self.lastIndexOf(n, 0) === 0) return GraceTrue
            return GraceFalse;
        },
        "endsWith": function string_endsWith(argvc, needle) {
            var self = this._value;
            var n = needle._value;
            var startPosition = self.length - needle.length;
            if (startPosition < 1) return GraceFalse;
            var lastIndex = self.lastIndexOf(suffix, position);
            if (lastIndex === position) return GraceTrue;
            return GraceFalse;
        },
        "capitalized": function string_capitalized(argcv) {
            var self = this._value;
            return new GraceString(capitalize(self));
        },
        "asLower": function string_asLower(argcv) {
            var self = this._value;
            return new GraceString(self.toLowerCase());
        },
        "asUpper": function string_asUpper(argcv) {
            var self = this._value;
            return new GraceString(self.toUpperCase());
        },
        "asString": function string_asString(argcv) { return this ; },
        "asDebugString": function string_asDebugString (argcv) {
            var quote = new GraceString("\"");
            var self = callmethod(this, "_escape", [0]);
            var qSelf = callmethod(quote, "++", [1], self);
            var qSelfq = callmethod(qSelf, "++", [1], quote);
            return qSelfq;
        },
        "encode": function string_encode(argcv) {
// TODO this is a hack
            var patt = /"/gm;
            var s = '"' + this._value.replace(patt, '\\"') + '"';
            return new GraceString(s);
        },
        "compare": function string_compare (argcv, that) {
            var self = this._value;
            var other = that._value;
            if (self === other) return GraceNum(0)
            if (self > other) return GraceNum(+1);
            return GraceNum(-1);
        },
        ">": function string_greaterThan (argcv, that) {
            var self = this._value;
            var other = that._value;
            if (self > other) return GraceTrue;
            return GraceFalse;
        },
        ">=": string_greaterThanOrEqual,
        "<": function string_lessThan (argcv, that) {
            var self = this._value;
            var other = that._value;
            if (self < other) return GraceTrue;
            return GraceFalse;
        },
        "<=": string_lessThanOrEqual,
        "≤": string_lessThanOrEqual,
        "≥": string_greaterThanOrEqual,
        "==": function(argcv, other) {
            if (this === other)
                return GraceTrue;
            if (this.prototype == other.prototype
                && this._value == other._value)
                return GraceTrue;
            return GraceFalse;
        },
        "!=": string_notEqual,
        "/=": string_notEqual,
        "≠": string_notEqual,
        "iterator": function string_iterator(argcv) {
            return new GraceStringIterator(this);
        },
        "ord": function string_ord (argcv) {
            return new GraceNum(this._value.charCodeAt(0));
        },
        "hashcode": function string_hashcode(argcv) {
            var hc = 0;
            for (var i=0; i<this._value.length; i++) {
                hc *= 23;
                hc += this._value.charCodeAt(i);
                hc %= 0x100000000;
            }
            return new GraceNum(hc);
        },
        "match()matchesBinding()else": function string_match (argcv, pat, b, e) {
            return callmethod(pat, "matchObject()matchesBinding()else", [3],
                    this, b, e);
        },
        "matchObject()matchesBinding()else": function string_matchObject (argcv, obj, b, e) {
            var bl = callmethod(this, "==", [1], obj);
            if (Grace_isTrue(bl)) {
                return callmethod(b, "apply", [1], obj);
            } else {
                return callmethod(e, "apply", [1], obj);
            }
        },
        "indices": function string_indices(argcv) {
            var size = this._value.length;
            return callmethod(GraceRangeClass(), "from()to", [1, 1], 0, size);
        },
        "asNumber": function string_asNumber(argcv) {
            return new GraceNum(+this._value);
        },
        "match": function string_match (argcv, o) {
            if (Grace_isTrue(callmethod(this, "==", [1], o)))
                return new GraceSuccessfulMatch(o);
            return new GraceFailedMatch(o);
        },
        "|": function string_orPattern(argcv, o) {
            return new GraceOrPattern(this, o);
        },
        "&": function string_andPattern (argcv, o) {
            return new GraceAndPattern(this, o);
        },
        "startsWithSpace": function string_startsWithSpace (argcv) {
            var s = this._value.charCodeAt(0);
            return  ( (unicode.isCategory(s, "Zs") ) ? GraceTrue : GraceFalse);
        },
        "startsWithPeriod": function string_startsWithPeriod (argcv) {
            if (this._value.charCodeAt(0) == 46) return GraceTrue; else return GraceFalse;
        },
        "startsWithDigit": function string_startsWithDigit (argcv) {
            var s = this._value.charCodeAt(0);
            return (  (unicode.isCategory(s, "Nd")
                    || unicode.isCategory(s, "No")
                    || unicode.isCategory(s, "Nl")) ? GraceTrue : GraceFalse);
        },
        "startsWithLetter": function string_startsWithLetter (argcv) {
            var c = this._value.charCodeAt(0);
            return (  (unicode.isCategory(c, "Ll")
                    || unicode.isCategory(c, "Lu")
                    || unicode.isCategory(c, "Lo")
                    || unicode.isCategory(c, "Lm")) ? GraceTrue : GraceFalse);
        },
        "*": function string_times (argcv, num) {
            // We could adapt the Russian Peasant algorithm for multiplication by addition,
            // but this simpler algorithm will usually use fewer string operations.
            var n;
            if ((num.className !== 'number') || (! isFinite(n = parseInt(num._value)))) {
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("argument to string * method must be a (finite) number"));
            }
            var output = this._value;
            var requiredLength = output.length * n;
            while (output.length < requiredLength) {
                output = output.concat(output);
            }
            output = output.substr(0, requiredLength);
            return new GraceString(output);
        }
    },
    className: "string",
    definitionModule: "unknown",
    definitionLine: 0,
    superobj: new GraceObject()
};

var GraceEmptyString = new GraceString("");

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
        "^": function(argcv, other) {
            var s = Math.pow(this._value, other._value);
            return new GraceNum(s)
        },
        "%": function(argcv, other) {
            var s = this._value % other._value;
            return new GraceNum(s)
        },
        "@": function(argcv, other) {
            return callmethod(GracePoint2DClass(), "x()y", [1, 1], this, other);
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
            if (this._value < other._value) return GraceTrue; else return GraceFalse;
        },
        ">": function(argcv, other) {
            if (this._value > other._value) return GraceTrue; else return GraceFalse;
        },
        "<=": function(argcv, other) {
            if (this._value <= other._value) return GraceTrue; else return GraceFalse;
        },
        ">=": function(argcv, other) {
            if (this._value >= other._value) return GraceTrue; else return GraceFalse;
        },
        "prefix-": function(argcv) {
            return new GraceNum(-this._value)
        },
        "asString": function(argcv) {
            return new GraceString((Math.round(this._value * 1000000) / 1000000).toString())
        },
        "asDebugString": function(argcv) {
            return new GraceString("" + this._value)
        },
        "==": function(argcv, other) {
            if (this === other)
                return GraceTrue;
            if (this.className === other.className
                    && this._value === other._value)
                return GraceTrue;
            return GraceFalse;
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
        "|": function(argcv, o) {
            return new GraceOrPattern(this, o);
        },
        "&": function(argcv, o) {
            return new GraceAndPattern(this, o);
        }
    },
    className: "number",
    definitionModule: "unknown",
    definitionLine: 0,
    superobj: new GraceObject()
};

function GraceBoolean(b) {
    this._value = b;
}
GraceBoolean.prototype = {
    methods: {
        "not": function(argcv) {
            return ((this._value) ? GraceFalse : GraceTrue);
        },
        "prefix!": function(argcv) {
            return ((this._value) ? GraceFalse : GraceTrue);
        },
        "&": function(argcv, other) {
            return new GraceAndPattern(this, other);
        },
        "|": function(argcv, other) {
            return new GraceOrPattern(this, other);
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
        "asDebugString": function(argcv) {
            return new GraceString("" + this._value)
        },
        "==": function(argcv, other) {
            if (this == other)
                return GraceTrue;
            if (this.prototype == other.prototype
                    && this._value == other._value)
                return GraceTrue;
            return GraceFalse;
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
    className: "boolean",
    definitionModule: "unknown",
    definitionLine: 0,
    superobj: new GraceObject()
};

var GraceTrue = new GraceBoolean(true);
var GraceFalse = new GraceBoolean(false);

function GraceList(l) {
    this._value = l;
}
GraceList.prototype = {
    methods: {
        "push": function(argcv, val) {
            this._value.push(val);
            return GraceDone;
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
            return GraceDone;
        },
        "[]:=": function(argcv, idx, val) {
            this._value[idx._value-1] = val;
            return GraceDone;
        },
        "asString": function(argcv) {
            var s = "[";
            var isFirst = true;
            for (var i=0; i<this._value.length; i++) {
                var v = this._value[i];
                if (isFirst) {
                    isFirst = false;
                } else {
                    s += ", ";
                }
                if (v.methods["asString"])
                    s += callmethod(v, "asString", [0])._value;
                else {
                    var q = dbgp(v, 2);
                    s += "((" + q + "))"
                }
            }
            s += "]";
            return new GraceString(s);
        },
        "asDebugString": function(argcv) {
            var s = "[";
            var isFirst = true;
            for (var i=0; i<this._value.length; i++) {
                var v = this._value[i];
                if (isFirst) {
                    isFirst = false;
                } else {
                    s += ", ";
                }
                if (v.methods["asDebugString"])
                    s += (i+1) + ":" + callmethod(v, "asDebugString", [0])._value;
                else {
                    var q = dbgp(v, 2);
                    s += "((" + q + "))"
                }
            }
            s += "]";
            return new GraceString(s);
        },
        "debugValue": function(argcv) {
            return new GraceString("List");
        },
        "debugIterator": function(argcv) {
            return new GraceListIterator(this._value);
        },
        "contains": function(argcv, other) {
            for (var i=0; i<this._value.length; i++) {
                var v = this._value[i];
                if (Grace_isTrue(callmethod(v, "==", [1], other)))
                    return GraceTrue;
            }
            return GraceFalse;
        },
        "==": function(argcv, other) {
            if (this == other)
                return GraceTrue;
            return GraceFalse;
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
        "reduce": function(argcv, initial, block) {
            var res = initial;
            for (var i=0; i<this._value.length; i++) {
                var v = this._value[i];
                res = callmethod(block, "apply", [2], res, v)
            }
            return res;
        },
        "++": function(argcv, other) {
            var l = this._value.concat(other._value);
            return new GraceList(l);
        }
    },
    className: "list",
    definitionModule: "unknown",
    definitionLine: 0,
    superobj: new GraceObject()
};

function GracePrimitiveArray(len) {
    this._value = new Array(len);
//    this._value.fill(undefined);
//    elements are all undefined by default
};

GracePrimitiveArray.prototype = {
    methods: {
        "size": function(argcv) {
            return new GraceNum(this._value.length);
        },
        "at": function(argcv, other) {
            var o = callmethod(other, "asString", [0]);
            var idx = parseInt(o._value);
            return this._value[idx];
        },
        "[]": function(argcv, other) {
            var o = callmethod(other, "asString", [0]);
            var idx = parseInt(o._value);
            return this._value[idx];
        },
        "at()put": function(argcv, idx, val) {
            this._value[idx._value] = val;
            return GraceDone;
        },
        "[]:=": function(argcv, idx, val) {
            this._value[idx._value] = val;
            return GraceDone;
        },
        "asString": function(argcv) {
            var s = "[";
            s += this._value.length + ": "
            for (var i=0; i<this._value.length; i++) {
                if (i !== 0) s += ", ";
                var v = this._value[i];
                if ((v) && (v.methods) &&
                    (v.methods["asString"]))
                    s += callmethod(v, "asString", [0])._value;
                else {
                    var q = dbgp(v, 2);
                    s += "‹" + q + "›"
                }
            }
            s += "]";
            return new GraceString(s);
        },
        "asDebugString": function(argcv) {
            var s = "primArray(";
            s += this._value.length + ": "
            for (var i=0; i<this._value.length; i++) {
                if (i !== 0) s += ", ";
                var v = this._value[i];
                if ((v) && (v.methods) && (v.methods["asDebugString"]))
                    s += callmethod(v, "asDebugString", [0])._value;
                else {
                    var q = dbgp(v, 2);
                    s += "‹" + q + "›"
                }
            }
            s += ")";
            return new GraceString(s);
        },
        "debugValue": function(argcv) {
            return new GraceString("PrimArray");
        },
        "debugIterator": function(argcv) {
            return new GraceIterator(this._value);
        },
        "contains": function(argcv, other) {
            for (var i=0; i<this._value.length; i++) {
                var v = this._value[i];
                if (Grace_isTrue(callmethod(v, "==", [1], other)))
                    return GraceTrue;
            }
            return GraceFalse;
        },
        "==": function(argcv, other) {
            if (this == other)
                return GraceTrue;
            return GraceFalse;
        },
        "!=": function(argcv, other) {
            var t = callmethod(this, "==", [1], other);
            return callmethod(t, "not", [0]);
        },
        "iterator": function(argcv) {
            return new GraceIterator(this._value);
        },
        "reduce": function(argcv, initial, block) {
            var res = initial;
            for (var i=0; i<this._value.length; i++) {
                var v = this._value[i];
                res = callmethod(block, "apply", [2], res, v);
            }
            return res;
        },
        "fold()startingWith": function(argcv, block, initial) {
            var res = initial;
            for (var i=0; i<this._value.length; i++) {
                var v = this._value[i];
                res = callmethod(block, "apply", [2], res, v);
            }
            return res;
        },
        "sortInitial()by": function(argcv, length, compareBlock) {
            var origLength = this._value.length
            this._value.length = length._value
            function compareFun(a, b) {
                var res = callmethod(compareBlock, "apply", [2], a, b);
                if (res.className == "number") return res._value;
                throw new GraceExceptionPacket(TypeErrorObject,
                       new GraceString("compare block in primitiveArray.sort method " +
                                       "did not return a number"));
            }
            this._value.sort(compareFun);
            this._value.length = origLength
            return this;
        }
    },
    className: "primitiveArray",
    definitionModule: "unknown",
    definitionLine: 0,
    superobj: new GraceObject()
};

function GraceOrPattern(l, r) {
    this._left = l;
    this._right = r;
}
GraceOrPattern.prototype = {
    methods: {
        "==": function(argcv, other) {
            if (this == other)
                return GraceTrue;
            return GraceFalse;
        },
        "!=": function(argcv, other) {
            var t = callmethod(this, "==", [1], other);
            return callmethod(t, "not", [0]);
        },
        "match": function(argcv, o) {
            var m1 = callmethod(this._left, "match", [1], o);
            if (Grace_isTrue(m1))
                return new GraceSuccessfulMatch(o);
            var m2 = callmethod(this._right, "match", [1], o);
            if (Grace_isTrue(m2))
                return new GraceSuccessfulMatch(o);
            return new GraceFailedMatch(o);
        },
        "|": function(argcv, o) {
            return new GraceOrPattern(this, o);
        },
        "&": function(argcv, o) {
            return new GraceOrPattern(this, o);
        },
        "asString": function(argcv) {
            return new GraceString("<OrPattern("
                    + callmethod(this._left, "asString", [0])._value
                    + ", " + callmethod(this._right, "asString", [0])._value
                    + ")>");
        },
        "asDebugString": function(argcv) {
            return callmethod(this, "asString", [0]);
        },
    },
    className: "OrPattern",
    definitionModule: "unknown",
    definitionLine: 0,
    superobj: new GraceObject()
};

function GraceAndPattern(l, r) {
    var andClass = callmethod(Grace_prelude, "AndPattern", [0]);
    return callmethod(andClass, "new", [2], l, r)
}

function Grace_isTrue(o) {
    if (o._value === false)
        return false;
    if (o._value === true)
        return true;
    if (o.superobj != null)
        return Grace_isTrue(o.superobj);
}

function Grace_print(obj) {
    var s = callmethod(obj, "asString", [0]);
    minigrace.stdout_write(s._value + "\n");
    return GraceDone;
}

function Grace_errorPrint(obj) {
    var s = callmethod(obj, "asString", [0]);
    minigrace.stderr_write(s._value + "\n");
    return GraceDone;
}

function Grace_length(obj) {
    return new GraceNum(obj._value.length);
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
GraceMatchResult.prototype.methods["::"] = function(argcv, other) {
    return callmethod(GraceBindingClass(), "key()value", [1, 1], this, other);
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
GraceSuccessfulMatch.prototype = GraceMatchResult.prototype;

function GraceFailedMatch(result, bindings) {
    this.superobj = new GraceBoolean(false);
    this.data = {};
    this.data["result"] = result;
    if (bindings == undefined)
        bindings = new GraceList([]);
    this.data["bindings"] = bindings;
    this._value = this.superobj._value;
}
GraceFailedMatch.prototype = GraceMatchResult.prototype;

function GraceType(name) {
    this.name = name;
    this.className = name;
    this.typeMethods = [];
}
GraceType.prototype = {
    methods: {
        "match": function(argcv, other) {
            for (var i=0; i<this.typeMethods.length; i++) {
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
        "|": function(argcv, other) {
            return new GraceOrPattern(this, other);
        },
        "&": function(argcv, other) {
            return new GraceAndPattern(this, other);
        },
        "asString": function(argcv) {
            return new GraceString("Type<" + this.name + ">");
        },
        "asDebugString": function(argcv) {
            return callmethod(this, "asString", [0]);
        }
    },
    typeMethods: [],
    className: "Type",
    definitionModule: "unknown",
    definitionLine: 0,
    superobj: new GraceObject()
};

function GraceBlock_match(argcv, o) {
    if (!this.pattern) {
        if (argcv.length != 1 || argcv[0] != 1) {
            throw new GraceExceptionPacket(ProgrammingErrorObject,
                    new GraceString("Block is not a matching block"));
        }
        var rv = callmethod(this, "apply", [1], o);
        return new GraceSuccessfulMatch(rv);
    }
    var match = callmethod(this.pattern, "match", [1], o);
    if (Grace_isTrue(match)) {
        var bindings = callmethod(match, "bindings", [0]);
        var rv = callmethod(this, "applyIndirectly", [1], bindings);
        return new GraceSuccessfulMatch(rv);
    }
    return new GraceFailedMatch(o);
}

function classType(obj) {
    var t = new GraceType(capitalize(obj.className));
    var o = obj;
    while (o != null) {
        for (var m in o.methods)
            t.typeMethods.push(m);
        o = o.superobj;
    }
    return t;
}

var var_Unknown = new GraceType("Unknown");
var var_Dynamic = var_Unknown;
var var_Done = new GraceType("Done");
var var_String = classType(GraceEmptyString);
var var_Number = classType(new GraceNum(1));
var var_Boolean = classType(GraceTrue);
var var_Object = classType(new GraceObject);
var var_Type = classType(var_Boolean);
var type_String = var_String;
var type_Number = var_Number;
var type_Boolean = var_Boolean;
var type_Object = var_Object;
var type_Unknown = var_Unknown;
var type_Dynamic = var_Dynamic;
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
var var_HashMap = { methods: { 'new': function() { return new GraceHashMap(); } } };

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
    throw new GraceExceptionPacket(RuntimeErrorObject,
            new GraceString("Key not found in HashMap"));
}
GraceHashMap.prototype.methods.contains = function(argcv, k) {
    var hc = callmethod(k, "hashcode", [0]);
    hc = hc._value;
    while (this.table[hc]) {
        if (Grace_isTrue(callmethod(this.table[hc].key, "==", [1], k)))
            return GraceTrue;
        hc++;
    }
    return GraceFalse;
}
GraceHashMap.prototype.methods.asString = function() {
    var s = "[{";
    var first = true;
    for (var h in this.table) {
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
GraceHashMap.prototype.methods.asDebugString = GraceHashMap.prototype.methods.asString;

function GraceListIterator(l) {
    this._value = l;
    this._index = 0;
    this._max = l.length;
}
GraceListIterator.prototype = Grace_allocObject();
GraceListIterator.prototype.methods.hasNext = function() {
    return ((this._index < this._max) ? GraceTrue : GraceFalse);
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
GraceStringIterator.prototype.methods.hasNext = function() {
    return ((this._index < this._max) ? GraceTrue : GraceFalse);
}
GraceStringIterator.prototype.methods.next = function() {
    var rv = new GraceString(this._value.charAt(this._index));
    this._index++;
    return rv;
}

function GraceIterator(obj) {
    this._value = obj;
    
    this._keys = [];
    for(i in obj)
        this._keys.push(i);
    
    this._trueIndex = 0;
    this._index = this._keys[this._trueIndex];
    this._max = this._keys.length;
}
GraceIterator.prototype = Grace_allocObject();
GraceIterator.prototype.methods.hasNext = function() {
    return ((this._trueIndex < this._max) ? GraceTrue : GraceFalse);
}
GraceIterator.prototype.methods.next = function() {
    var rv = this._value[this._index];
    this._trueIndex++;
    this._index = this._keys[this._trueIndex];
    return rv;
}

var stdout = Grace_allocObject();
stdout.methods.write = function(junk, s) {
    minigrace.stdout_write(s._value);
}
stdout.methods.close = function() {};

var stdin = Grace_allocObject();
stdin.methods.read = function() {
    return new GraceString(minigrace.stdin_read());
}
stdin.methods.iterator = function() {
    return callmethod(new GraceString(minigrace.stdin_read()), "iterator", [0]);
}
stdin.methods.close = function() {};

var stderr = Grace_allocObject();
stderr.methods.write = function(junk, s) {
    minigrace.stderr_write(s._value);
    return GraceDone;
}
stderr.methods.close = function() {};

function StackFrame(methodName) {
    this.methodName = methodName;
    this.variables = {};
}
StackFrame.prototype = {
    addVar: function(name, accessor) {
        this.variables[name] = accessor;
        return GraceDone;
    },
    getVar: function(name) {
        return this.variables[name]();
    },
    forEach: function(f) {
        for (var v in this.variables)
            f(v, this.getVar(v));
        return GraceDone;
    },
};

function GraceModule(name) {
// The base on top of which a module adds its contents.  Thus, it is
// important that 'methods' be a property of the module object itself,
// and not of a prototype, since 'methods' will be changed.
    var newModuleObject = Grace_allocObject();
    newModuleObject.classname = "Module<" + name + ">";
    newModuleObject.outer = Grace_prelude;
    newModuleObject.methods.asString = function module_asString(argcv) {
        return new GraceString(this.className);
    };
    newModuleObject.methods.outer = function module_outer () {
        return this.outer;
    };
    newModuleObject.superobj = new GraceObject();
    return newModuleObject;
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
    this._error = stderr;
    this.methods.exists = function(argcv, path) {
        path = path._value;
        var gctpath = path.substr(0, path.length - 4);
        if (gctCache[gctpath])
            return GraceTrue;
        return GraceFalse;
    }
    this.methods.open = function(argcv, path, mode) {
        var o = new Grace_allocObject();
        o.methods['write'] = function io_write () {};
        o.methods['close'] = function io_close () {};
        path = path._value;
        if (path.substr(path.length - 4) == ".gct") {
            var gctpath = path.substr(0, path.length - 4);
            if (mode._value == "w")
                gctCache[gctpath] = "";
            else if (mode._value == "r") {
                o._lines = gctCache[gctpath].split("\n");
                o._index = 0;
            }
            o.methods['write'] = function io_gct_write (argcv, s) {
                gctCache[gctpath] += s._value;
            }
            o.methods['getline'] = function io_gct_getline (argcv) {
                return new GraceString(this._lines[this._index++]);
            }
            o.methods['eof'] = function io_gct_eof  () {
                return ((this._index >= this._lines.length) ? GraceTrue : GraceFalse);
            }
        }
        return o;
    };
    this.methods.realpath = function io_realpath (junk, x) {
        return x;
    };
    this.methods.findResource = function io_findResource (junk, path) {
        return path;
    };
    this.definitionModule = "io";
    this.definitionLine = 0;
    this.className = "module";
    return this;
}

function gracecode_sys() {
    var startTime = (new Date).getTime()/1000;
    this.methods.argv = function() {
        return new GraceList([
            new GraceString("minigrace"),
            new GraceString("--target"),
            new GraceString("js"),
        ]);
    };
    this.methods.elapsed = function() {return new GraceNum(((new Date).getTime()/1000)-startTime);};
    this.methods.exit = function() {
        throw "SystemExit";
    };
    this.methods.execPath = function() {
        return new GraceString("./minigrace");
    };
    this.methods.environ = function() {
        var o = new GraceObject();
        o.methods['at'] = function() {return GraceEmptyString;};
        o.methods['[]'] = o.methods['at'];
        o.methods['at()put'] = function() {return GraceTrue;};
        o.methods['[]:='] = o.methods['at()put'];
        o.methods['contains'] = function() {return GraceFalse;};
        return o;
    };
    this.methods.asString = function(argcv) {
        return new GraceString('the "sys" module');
    };
    this.definitionModule = "sys";
    this.definitionLine = 0;
    this.className = "module";
    return this;
}

function gracecode_imports() {
    var extensions = {
        'txt': Grace_allocObject(),
    };
    extensions.txt.methods.loadResource = function(junk, path) {
        var req = new XMLHttpRequest();
        req.open('GET', 'https://' + path._value, false);
        req.send(null);
        if (req.status == 200) {
            return new GraceString(req.responseText);
        }
        throw new GraceExceptionPacket(EnvironmentExceptionObject,
                new GraceString("Error loading resource '" + path._value
                    + "'."));
    };
    this.methods.registerExtension = function(junk, ext, handler) {
        extensions[ext._value] = handler;
    };
    this.methods.loadResource = function(junk, importpath) {
        path = importpath._value;
        var slashPos = path.lastIndexOf('/');
        var dotpos = path.indexOf('.', slashPos);
        if (dotpos <= 0)
            throw new GraceExceptionPacket(EnvironmentExceptionObject,
                    new GraceString("No extension in path '" + path._value
                        + "'."));
        var ext = path.substr(dotpos + 1);
        if (extensions[ext]) {
            return callmethod(extensions[ext], "loadResource", [1], importpath);
        }
        throw new GraceExceptionPacket(RuntimeErrorObject,
                new GraceString("No mapping for extension '" + ext + "'."));
    };
    this.methods.asString = function(argcv) {
        return new GraceString('the "imports" module');
    };
    this.definitionModule = "imports";
    this.definitionLine = 0;
    this.className = "module";
    return this;
}

function gracecode_unicode() {
    this.methods = {
        isLetter: function(argcv, s) {
            if (typeof s._value == "number")
                s = String.fromCharCode(s._value);
            else s = s._value;
            return (  (unicode.isCategory(s, "Ll")
                    || unicode.isCategory(s, "Lu")
                    || unicode.isCategory(s, "Lo")
                    || unicode.isCategory(s, "Lm")) ? GraceTrue : GraceFalse);
        },
        isNumber: function(argcv, s) {
            if (typeof s._value == "number")
                s = String.fromCharCode(s._value);
            else s = s._value;
            return (  (unicode.isCategory(s, "Nd")
                    || unicode.isCategory(s, "No")
                    || unicode.isCategory(s, "Nl")) ? GraceTrue : GraceFalse);
        },
        isSymbolMathematical: function(argcv, s) {
            if (typeof s._value == "number")
                s = String.fromCharCode(s._value);
            else s = s._value;
            return ((unicode.isCategory(s, "Sm")) ? GraceTrue : GraceFalse);
        },
        isSeparator: function(argcv, s) {
            if (typeof s._value == "number")
                s = String.fromCharCode(s._value);
            else s = s._value;
            return (  (unicode.isCategory(s, "Zs")
                    || unicode.isCategory(s, "Zp")
                    || unicode.isCategory(s, "Zl")) ? GraceTrue : GraceFalse);
        },
        isControl: function(argcv, s) {
            if (typeof s._value == "number")
                s = String.fromCharCode(s._value);
            else s = s._value;
            return  ( (unicode.isCategory(s, "Cf")
                    || unicode.isCategory(s, "Cc")
                    || unicode.isCategory(s, "Co")
                    || unicode.isCategory(s, "Cs")) ? GraceTrue : GraceFalse);
        },
        iscategory: function(argcv, s, c) {
            if (typeof s._value == "number")
                s = String.fromCharCode(s._value);
            else s = s._value;
            return ((unicode.isCategory(s, c._value)) ? GraceTrue : GraceFalse);
        },
        name: function(argcv, s) {
            return new GraceString(unicode.name(s._value));
        },
        create: function(argcv, n) {
            return new GraceString(String.fromCharCode(n._value));
        },
        pattern: function(argcv) {
            var args = Array.prototype.slice.call(arguments, 1);
            return new GraceUnicodePattern(args);
        },
        "pattern()not": function(argcv) {
            var args = Array.prototype.slice.call(arguments, 1, argcv[0] + 1);
            var args2 = Array.prototype.slice.call(arguments, argcv[0] + 1);
            return new GraceUnicodePattern(args, args2);
        },
    };
    this.definitionModule = "unicode";
    this.definitionLine = 0;
    this.superobj = new GraceModule("unicode");
    return this;
}

function GraceUnicodePattern(pos, neg) {
    this.pos = pos;
    this.neg = neg;
}

GraceUnicodePattern.prototype = {
    methods: {
        match: function(argcv, o) {
            var success = false;
            var cc = o._value;
            if (cc.charCodeAt)
                cc = cc.charCodeAt(0);
            for (var i=0; i<this.pos.length; i++) {
                var t = this.pos[i];
                if (typeof t._value == "number") {
                    if (cc == t._value) {
                        success = true;
                        break;
                    }
                } else {
                    if (unicode.isCategory(cc, t._value)) {
                        success = true;
                        break;
                    }
                }
            }
            if (this.neg) {
                if (this.pos.length == 0)
                    success = true;
                for (var i=0; i<this.neg.length; i++) {
                    var t = this.neg[i];
                    if (typeof t._value == "number") {
                        if (cc == t._value) {
                            success = false;
                            break;
                        }
                    } else {
                        if (unicode.isCategory(cc, t._value)) {
                            success = false;
                            break;
                        }
                    }
                }
            }
            if (success)
                return new GraceSuccessfulMatch(o);
            return new GraceFailedMatch(o);
        }
    },
    typeMethods: [],
    className: "unicodePattern",
    definitionModule: "unicode",
    definitionLine: 0,
    superobj: new GraceObject()
};

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
            return GraceDone;
        },
        target: function(argcv) {
            return new GraceString(minigrace.mode);
        },
        modname: function(argcv) {
            return new GraceString(minigrace.modname);
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
            return GraceDone;
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
            if (minigrace.verbose)
            minigrace.stderr_write("minigrace: " + minigrace.modname + ': ' + s._value + "\n");
            return GraceDone;
        },
        outprint: function(argcv, s) {
            minigrace.stdout_write(s._value + "\n");
            return GraceDone;
        },
        engine: function(argcv) {
            return new GraceString("js");
        },
        debug: function(argcv, s) {
            dbg(s._value);
            return GraceDone;
        },
        interactive: function(argcv) {
            return GraceFalse;
        },
        type_error: function(argcv, s) {
            minigrace.stderr_write(minigrace.modname + ".grace:" + this._linenum._value + ":" +
                this._linepos._value + ": type error: " + s._value + "\n");
            throw "ErrorExit";
        },
        // This is called by various wrapper methods in the errormessages module.
        // The parameters are explained as follows:
        // - message: The text of the error message.
        // - errlinenum: The line number on which the error occurred.
        // - position: A string used to show the position of the error in the error message.
        // - arr: The string used to draw an arrow showing the position of the error.
        // - spacePos: The position in the error line that a space should be inserted, or false.
        // - suggestions: A (possibly empty) list of suggestions to correct the error.
        "syntaxError": function(argcv, message, errlinenum, position, arr, spacePos, suggestions) {
            callmethod(this, "generalError", [6], new GraceString("Syntax error: " + message._value), errlinenum,
                position, arr, spacePos, suggestions);
        },
        "generalError": function(argcv, message, errlinenum, position, arr, spacePos, suggestions) {
            minigrace.stderr_write(minigrace.modname + ".grace[" + errlinenum._value + position._value
                + "]: " + message._value + "\n");

            if ((errlinenum._value > 1) && (callmethod(this._lines, "size", [0])._value > 1))
                minigrace.stderr_write("  " + (errlinenum._value - 1) + ": "
                    + callmethod(this._lines, "at",
                        [1], new GraceNum(errlinenum._value - 1))._value + "\n");

            if (callmethod(this._lines, "size", [0])._value >= errlinenum._value) {
                var line = callmethod(this._lines, "at", [1], new GraceNum(errlinenum._value))._value;
                if(spacePos._value != false) {
                    minigrace.stderr_write("  " + errlinenum._value + ": " + line.substring(0, spacePos._value - 1) + " "
                        + line.substring(spacePos._value - 1) + "\n");
                } else {
                    minigrace.stderr_write("  " + errlinenum._value + ": " + line + "\n");
                }
                minigrace.stderr_write(arr._value + "\n");
            }

            if (errlinenum._value <
                    callmethod(this._lines, "size", [0])._value)
                minigrace.stderr_write("  " + (errlinenum._value + 1) + ": "
                + callmethod(this._lines, "at",
                        [1], new GraceNum(errlinenum._value + 1))._value + "\n");

            var numsuggestions = callmethod(suggestions, "size", []);
            if(numsuggestions._value > 0) {
                for(var i=1; i <= numsuggestions._value; i++) {
                    minigrace.stderr_write("\nDid you mean:\n");
                    var suggestion = callmethod(suggestions, "at", [1], new GraceNum(i));
                    callmethod(suggestion, "print", [0]);
                }
            }

            throw "ErrorExit";
        },
        semantic_error: function(argcv, s) {
            minigrace.stderr_write(minigrace.modname + ".grace:" + this._linenum._value + ":" +
                this._linepos._value + ": semantic error: " + s._value + "\n");
            if (this._linenum._value > 1)
                minigrace.stderr_write("  " + (this._linenum._value - 1) + ": "
                    + callmethod(this._lines, "at",
                        [1], new GraceNum(this._linenum._value - 1))._value
                    + "\n");
            var linenumsize = callmethod(callmethod(this._linenum, "asString", []), "size", []);
            var arr = "----";
            for (var i=1; i<this._linepos._value+linenumsize._value; i++)
                arr = arr + "-";
            minigrace.stderr_write("  " + this._linenum._value + ": "
                + callmethod(this._lines, "at",
                        [1], new GraceNum(this._linenum._value))._value + "\n");
            minigrace.stderr_write(arr + "^\n");
            if (this._linenum._value <
                    callmethod(this._lines, "size", [])._value)
                minigrace.stderr_write("  " + (this._linenum._value + 1) + ": "
                    + callmethod(this._lines, "at",
                        [1], new GraceNum(this._linenum._value + 1))._value
                    + "\n");
            throw "ErrorExit";
        },
        warning: function(argcv, s) {
            minigrace.stderr_write(minigrace.modname + ".grace:" + this._linenum._value + ":" +
                this._linepos._value + ": warning: " + s._value + "\n");
        },
        hex: function(argcv, n) {
            var hexdigits = "0123456789abcdef"
            var s = ""
            var num = n._value
            while (num > 0) {
                var i = num % 16
                s = hexdigits.charAt(i) + s
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
        split: function(argcv, str, by) {
            var r = [];
            var pts = str._value.split(by);
            for (var i=0; i<pts.length; i++)
                r.push(new GraceString(pts[i]));
            return new GraceList(pts);
        },
        "runOnNew()else": function(argcv, b,e) {
            return callmethod(b, "apply", [0]);
        },
        "extensions": function(argcv) {
            return extensionsMap;
        },
        "processExtension": function(argcv, ext) {
            var extn;
            var extv;
            ext = ext._value;
            if (ext.indexOf("=") >= 0) {
                var tmp = ext.split("=");
                extn = new GraceString(tmp[0]);
                extv = new GraceString(tmp[1]);
            } else {
                extn = new GraceString(ext);
                extv = GraceTrue;
            }
            callmethod(extensionsMap, "put", [2], extn, extv);
            return GraceDone;
        },
        "lines": function(argcv) {
            return this._lines;
        },
        "cLines": function(argcv) {
            return this._cLines;
        },
        "lines:=": function(argcv, v) {
            this._lines = v;
            return GraceDone;
        },
        "cLines:=": function(argcv, v) {
            this._cLines = v;
            return GraceDone;
        },
        "suggestion": function() {
            return this._suggestion;
        },
    };
    this._linenum = new GraceNum(1);
    this._linepos = new GraceNum(1);
    this._lines = new GraceList([]);
    this._cLines = new GraceList([]);
    this._suggestion = new Grace_allocObject();

    this._suggestion.methods["new"] = function(argcv, line, code) {
        var suggestion = new Grace_allocObject();
        suggestion.methods["line"] = function() {
            return line;
        };
        suggestion.methods["code"] = function() {
            return code;
        };
        return suggestion;
    };

    util_module = this;
    this.definitionModule = "util";
    this.definitionLine = 0;
    this.superobj = new GraceModule("util");
    return this;
}

var interactive_module = false;
function gracecode_interactive() {
    return this;
}

function GraceMirrorMethod(o, k) {
    this.name = k;
    this.obj = o;
}
GraceMirrorMethod.prototype = Grace_allocObject();
GraceMirrorMethod.prototype.methods['asString'] = function(argcv) {
    return new GraceString("mirror on method '" + this.name + "'");
}
GraceMirrorMethod.prototype.methods['name'] = function(argcv) {
    return new GraceString(this.name);
}
GraceMirrorMethod.prototype.methods['partcount'] = function(argcv) {
    var count = 1;
    var place = 1;
    while(place < this.name.length) {
        if(this.name[place] == "(") {
            count++;
            place++;
        }
        place++;
    }
    return new GraceNum(count);
}

GraceMirrorMethod.prototype.methods['paramcounts'] = function(argcv) {
    var theFunction = this.obj.methods[this.name];
    var l = theFunction.paramCounts.length;
    var countArray = new Array(l);
    for (var i = 0; i < l; i++) {
        countArray[i] = new GraceNum(theFunction.paramCounts[i])
    }
    return new GraceList(countArray);
}

GraceMirrorMethod.prototype.methods['isVariableArity'] = function(argcv) {
    var theFunction = this.obj.methods[this.name];
    var l = theFunction.variableArities.length;
    var boolArray = new Array(l);
    for (var i = 0; i < l; i++) {
        boolArray[i] = theFunction.variableArities[i] ? GraceTrue : GraceFalse
    }
    return new GraceList(boolArray);
}

GraceMirrorMethod.prototype.methods['request'] = function(argcv, argList) {
    if (! argList) {
        throw new GraceExceptionPacket(ProgrammingErrorObject,
                new GraceString("'request' requires one argument (a list of arg lists)"));
    }
    var theFunction = this.obj.methods[this.name];
    var requiredLen = theFunction.paramCounts.length;
    var providedLen = callmethod(argList, "size", [0])._value;
    if (providedLen != requiredLen) {
        throw new GraceExceptionPacket(ProgrammingErrorObject,
                   new GraceString("wrong number of argument lists in 'request'" ));
    }
    var allArgs = [this.obj, this.name, []];
    for (var outerIx = 1; outerIx <= providedLen; outerIx++) {
        var innerArray = callmethod(argList, "at", [1], new GraceNum(outerIx));
        var innerSize = callmethod(innerArray, "size", [0])._value;
        allArgs[2].push(innerSize);    // incrementally build list of argument list lengths
        for (var innerIx = 1; innerIx <= innerSize; innerIx++) {
            allArgs.push(callmethod(innerArray, "at", [1], new GraceNum(innerIx)))
        }
    }
    return callmethod.apply(null, allArgs);
}

GraceMirrorMethod.prototype.methods['::'] = function(argcv, other) {
    return callmethod(GraceBindingClass(), "key()value", [1, 1], this, other);
}

function GraceMirror(sub) {       // constructor function
    this.superobj = new GraceObject();
    this.subject = sub;
    this.mutable = false;
    this.definitionModule = "mirrors";
    this.definitionLine = 0;
}

GraceMirror.prototype = {
    methods: {
        methods: function(argcv) {
            var meths = [];
            var current = this.subject;
            while (current != null) {
                for (var k in current.methods)
                    meths.push(new GraceMirrorMethod(current, k));
                current = current.superobj;
            }
            var l = new GraceList(meths);
            return l;
        },
        getMethod: function(argcv, gString) {
            var name = gString._value;
            var current = this.subject;
            while (current != null) {
                if (current.methods[name]) {
                    return (new GraceMirrorMethod(this.subject, name));
                }
                current = current.superobj;
            }
            var exceptionMsg = new GraceString("no method " + name + " in mirror for ");
            var objDescription = callmethod(this.subject, "asString", [0]);
            exceptionMsg = callmethod(exceptionMsg, "++", [1], objDescription);
            throw new GraceExceptionPacket(NoSuchMethod, exceptionMsg);
        },
    classname: 'objectMirror'
    }
};

function gracecode_mirrors() {
    this.methods = {
        'loadDynamicModule': function(argcv, v) {
            return do_import(v._value, eval("gracecode_" + v._value));
        },
        'reflect': function(argcv, o) {
            return new GraceMirror(o);
        }
    };
    this.definitionModule = "mirrors";
    this.definitionLine = 0;
    this.superobj = new GraceModule("mirrors");
    return this;
}

function gracecode_math() {
    this.methods = {
        'asString': function(argcv) {
            return new GraceString('the "math" module');
        },
        'asDebugString': function(argcv) {
            return callmethod(this, "asString", [0]);
        },
        'sin': function(argcv, a) {
            return new GraceNum(Math.sin(a._value));
        },
        'cos': function(argcv, a) {
            return new GraceNum(Math.cos(a._value));
        },
        'tan': function(argcv, a) {
            return new GraceNum(Math.tan(a._value));
        },
        'asin': function(argcv, a) {
            return new GraceNum(Math.asin(a._value));
        },
        'acos': function(argcv, a) {
            return new GraceNum(Math.acos(a._value));
        },
        'atan': function(argcv, a) {
            return new GraceNum(Math.atan(a._value));
        },
        'random': function(argcv) {
            return new GraceNum(Math.random());
        },
        'pi': function(argcv) {
            return new GraceNum(3.141592653589793)
        },
        'π': function(argcv) {
            return new GraceNum(3.141592653589793)
        },
        'sqrt': function(argcv, a) {
            return new GraceNum(Math.sqrt(a._value));
        },
        'abs': function(argcv, a) {
            return new GraceNum(Math.abs(a._value));
        },
        'lg': function(argcv, a) {
            return new GraceNum(Math.log(a._value) / Math.LN2);
        },
        'ln': function(argcv, a) {
            return new GraceNum(Math.log(a._value));  // JavaScript's log is base e!
        },
        'exp': function(argcv, a) {
            return new GraceNum(Math.exp(a._value));
        },
        'log10': function(argcv, a) {
            return new GraceNum(Math.log(a._value) / Math.LN10);
        },
    };
    this.definitionModule = "math";
    this.definitionLine = 0;
    return this;
}

function checkmethodcall(func, methname, obj, args) {
    var pt = func.paramTypes;
    for (var i=0; i<args.length, i<pt.length; i++) {
        var p = pt[i];
        if (!p || p.length == 0)
            continue;
        if (!args[i])
            continue;
        var t = p[0];
        if (!Grace_isTrue(callmethod(t, "match", [1], args[i]))) {
            throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected " + t.className + " for argument " + p[1] + " (" + (i+1) + ") of " + methname + "."));
        }
    }
}

var overrideReceiver = null;

function callmethodsuper(obj, methname, argcv) {
    overrideReceiver = obj;
    var args = Array.prototype.slice.call(arguments, 1);
    args.splice(0, 0, superDepth.superobj);
    onSelf = true;
    return callmethod.apply(null, args);
}

function callmethod(obj, methname, argcv) {
    if (typeof obj == 'undefined')
        throw new GraceExceptionPacket(ProgrammingErrorObject,
                new GraceString("Requested method on uninitialised value."));
    if (!obj || obj === undefined || !obj.methods)
        debugger
    var meth = obj.methods[methname];
    var origSuperDepth = superDepth;
    var isSuper = false;
    if (overrideReceiver != null)
        isSuper = true;
    superDepth = obj;
    var origModuleName = moduleName;
    var origLineNumber = lineNumber;
    if (typeof(meth) != "function") {
        var s = obj;
        isSuper = true;
        while (s.superobj != null) {
            s = s.superobj;
            meth = s.methods[methname];
            if (typeof(meth) == "function") {
                superDepth = s;
                break;
            }
        }
    }
    var objDesc = "";
    if (obj.definitionLine && obj.definitionModule != "unknown")
        objDesc = " in object at " + obj.definitionModule
            + ":" + obj.definitionLine;
    else if (obj.definitionModule != "unknown")
        objDesc = " in " + obj.definitionModule + " module";
    if (typeof(meth) != "function") {
        callStack.push(obj.className + "." + methname
                + " (defined nowhere"
                + objDesc + ")"
                + " at " + moduleName
                + ":" + lineNumber);
        throw new GraceExceptionPacket(NoSuchMethodErrorObject,
                new GraceString("no method " + methname + " in " +
                    obj.className + "."));
    }
    if (meth.confidential && !onSelf) {
        throw new GraceExceptionPacket(NoSuchMethodErrorObject,
                new GraceString("Requested confidential method '" + methname + "' on " + obj.className + " from outside."));
    }
    onSelf = false;
    onOuter = false;
    var oldSourceObject = sourceObject;
    sourceObject = superDepth;
    if (overrideReceiver != null) {
        obj = overrideReceiver;
        overrideReceiver = null;
    }
    var beforeSize = callStack.length;
    if (lineNumber == 0) {
        callStack.push(obj.className + "." + methname + " in " + moduleName);
    } else {
        callStack.push(obj.className + "." + methname + " at line " + lineNumber + " of " + moduleName);
    }
    try {
        var args = Array.prototype.slice.call(arguments, 3);
        for (var i=0; i<args.length; i++)
            if (typeof args[i] == 'undefined')
                throw new GraceExceptionPacket(ProgrammingErrorObject,
                       new GraceString("Uninitialised value used as argument to " + methname + "."));
        if (meth.paramTypes)
            checkmethodcall(meth, methname, obj, args);
        args.unshift(argcv);
        var ret = meth.apply(obj, args);
    } finally {
        superDepth = origSuperDepth;
        while (callStack.length > beforeSize)
            callStack.pop();
        sourceObject = oldSourceObject;
        setModuleName(origModuleName);
        setLineNumber(origLineNumber);
    }
    return ret;
}

function catchCase(obj, cases, finallyblock) {
    setModuleName("try()catch()...finally()");
    setLineNumber(0);
    try {
        callmethod(obj, "apply")
    } catch (e) {
        if (e.exctype == 'graceexception') {
            for (var i = 0; i<cases.length; i++) {
                var ret = callmethod(cases[i], "match", [1],
                        e);
                if (Grace_isTrue(ret))
                    return GraceDone;
            }
            throw e;
        } else {
            throw e;
        }
    } finally {
        if (finallyblock != false)
            callmethod(finallyblock, "apply");
    }
    return GraceDone;
}

function matchCase(obj, cases, elsecase) {
    setModuleName("match()case()...");
    setLineNumber(0);
    for (var i = 0; i<cases.length; i++) {
        var ret = callmethod(cases[i], "match", [1], obj);
        if (Grace_isTrue(ret))
            return callmethod(ret, "result", [0]);
    }
    if (elsecase != false)
        return callmethod(elsecase, "apply", [0]);
    return new GraceFailedMatch(obj);
}

function ReturnException(v, target) {
    this.returnvalue = v;
    this.target = target;
}
ReturnException.prototype = {
    'exctype': 'return',
};

function GraceExceptionPacket(exception, message, data) {
    this.exception = exception;
    this.message = message;
    this.data = data;
    this.lineNumber = lineNumber;
    this.moduleName = moduleName;
    this.callStack = [];
    this.stackFrames = [];
    for (var i=0; i<callStack.length; i++)
        this.callStack.push(callStack[i]);
    for (var i=0; i<stackFrames.length; i++)
        this.stackFrames.push(stackFrames[i]);
    this.superobj = Grace_allocObject();
}
GraceExceptionPacket.prototype = {
    methods: {
        "data": function(argcv) {
            return this.data;
        },
        "exception": function(argcv) {
            return this.exception;
        },
        "message": function(argcv) {
            return this.message;
        },
        "asString": function(argcv) {
            return new GraceString(this.exception.name + ": "
                    + this.message._value);
        },
        "lineNumber": function(argcv) {
            return new GraceNum(this.lineNumber);
        },
        "moduleName": function(argcv) {
            return new GraceString(this.moduleName);
        },
        "backtrace": function(argcv) {
            var bt = new GraceList([]);
            for (var i=0; i<this.callStack.length; i++)
                callmethod(bt, "push", [1], new GraceString(this.callStack[i]));
            return bt;
        },
        "printBacktrace": function(argcv) {
            var exceptionName = callmethod(callmethod(this, "exception", [0]), "asString", [0]);
            var lineNumber = callmethod(this, "lineNumber", [0]);
            var moduleName = callmethod(this, "moduleName", [0]);
            var errMsg = callmethod(exceptionName, "++", [1], new GraceString(" on line "));
            errMsg = callmethod(callmethod(errMsg, "++", [1], lineNumber), "++", [1], new GraceString(" of "));
            errMsg = callmethod(callmethod(errMsg, "++", [1], moduleName), "++", [1], new GraceString(": "));
            errMsg = callmethod(errMsg, "++", [1], callmethod(this, "message", [0]));
            Grace_errorPrint(errMsg);
            var bt = callmethod(this, "backtrace", [0]);
            var cf = new GraceString("  called from ");
            while (callmethod(bt, "size", [0])._value > 0) {
                Grace_errorPrint(callmethod(cf, "++", [1], callmethod(bt, "pop", [0])));
            }
        }
    },
    exctype: 'graceexception'
};

function GraceException(name, parent) {
    this.name = name;
    this.parent = parent;
    this.superobj = Grace_allocObject();
}
GraceException.prototype = {
    methods: {
        "refine": function(argcv, nm) {
            return new GraceException(nm._value, this)
        },
        "raise": function(argcv, msg) {
            throw new GraceExceptionPacket(this, msg, new GraceObject())
        },
        "raiseWith": function(argcv, msg, data) {
            throw new GraceExceptionPacket(this, msg, data)
        },
        "raise()with": function(argcv, msg, data) {
            throw new GraceExceptionPacket(this, msg, data)
        },
        "match": function(argcv, other) {
            if (!other.exception)
                return new GraceFailedMatch(other);
            if (other.exception.name == this.name)
                return new GraceSuccessfulMatch(other);
            var exc = other.exception;
            while (exc) {
                if (exc.name == this.name)
                    return new GraceSuccessfulMatch(other);
                exc = exc.parent;
            }
            return new GraceFailedMatch(other);
        },
        "|": function(argcv, o) {
            return new GraceOrPattern(this, o);
        },
        "==": function(argcv, o) {
            if (o === this) return GraceTrue; // not just for efficiency, but
                                              // also to avoid infinite regress
            if (o.className != 'Exception') return GraceFalse;
            if (o.name != this.name) return GraceFalse;
            if (o.parent != this.parent) return GraceFalse;
            return GraceTrue;
        },
        "&": function(argcv, o) {
            return new GraceAndPattern(this, o);
        },
        "asString": function(argcv) {
            return new GraceString(this.name);
        },
        "parent": function(argcv) {
            if (this.parent == false)
                return this
            else
                return this.parent;
        }
    },
    className: 'Exception',
    definitionModule: "unknown",
    definitionLine: 0,
    superobj: new GraceObject()
}

var importedModules = {};

function do_import(modname, func) {
    if (importedModules[modname]) {
        return importedModules[modname];
    }
    if (!func)
        throw new GraceExceptionPacket(ImportErrorObject,
            new GraceString("Could not find module '" + modname + "'"));
    var origSuperDepth = superDepth;
    superDepth = new GraceModule(modname);
    var f = Function.prototype.call.call(func, superDepth);
    superDepth = origSuperDepth;
    importedModules[modname] = f;
    return f;
}

function dbgp(o, d) {
    if (d == undefined)
        d = 0;
    var ind = "";
    for (var i=0; i<d; i++)
        ind += "  ";
    if (typeof(o) == "undefined") {
        return "undefined";
    }
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
    minigrace.stderr_write(dbgp(o, 0) + "\n");
}

var extensionsMap = callmethod(var_HashMap, "new", [0]);
var GraceDone = new GraceObject();
GraceDone.methods.asString = function() {return new GraceString("done");}

var ellipsis = Grace_allocObject();
ellipsis.methods.asString = function() {return new GraceString("ellipsis");}

var ExceptionObject = new GraceException("Exception", false);
var ErrorObject = new GraceException("Error", ExceptionObject);
var ProgrammingErrorObject = new GraceException("ProgrammingError", ExceptionObject);
var EnvironmentExceptionObject = new GraceException("EnvironmentException", ExceptionObject);
var ResourceExceptionObject = new GraceException("ResourceException", ExceptionObject);
var RuntimeErrorObject = new GraceException("RuntimeError", ErrorObject);
var ImportErrorObject = new GraceException("ImportError", EnvironmentExceptionObject);
var TypeErrorObject = new GraceException("TypeError", ProgrammingErrorObject);
var NoSuchMethodErrorObject = new GraceException("NoSuchMethod", ProgrammingErrorObject);
var BoundsErrorObject = new GraceException("BoundsError", ProgrammingErrorObject);

//
// Define Grace_prelude": a Grace object to which some methods are added here,
// and to which more methods will be added by the compiled Grace prelude module
// when it is loaded.
//

var Grace_prelude = Grace_allocObject();
Grace_prelude.methods["Exception"] = function(argcv) {
    return ExceptionObject;
}
Grace_prelude.methods["Error"] = function(argcv) {
    return ErrorObject;
}
Grace_prelude.methods["ProgrammingError"] = function(argcv) {
    return ProgrammingErrorObject;
}
Grace_prelude.methods["EnvironmentException"] = function(argcv) {
    return EnvironmentExceptionObject;
}
Grace_prelude.methods["ResourceException"] = function(argcv) {
    return ResourceExceptionObject;
}
Grace_prelude.methods["RuntimeError"] = function(argcv) {
    return RuntimeErrorObject;
}
Grace_prelude.methods["TypeError"] = function(argcv) {
    return TypeErrorObject;
}
Grace_prelude.methods["NoSuchMethod"] = function(argcv) {
    return NoSuchMethodErrorObject;
}
Grace_prelude.methods["BoundsError"] = function(argcv) {
    return BoundsErrorObject;
}
Grace_prelude.methods["while()do"] = function(argcv, c, b) {
    if (c.className == "Boolean" || c.className == "Number")
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected Block for first argument of "
                            + "while()do, got " + c.className + "."));
    if (Grace_prelude.methods["while()do"] &&
            Grace_prelude.methods["while()do"].safe) {
        var count = 0;
        var runningTime = 0;
        var runningCount = 0;
        var startTime = new Date();
        var diff;
        while (Grace_isTrue(callmethod(c, "apply", [0]))) {
            count++;
            if (count % 100000 == 0 && ((diff=new Date()-startTime) > 5000)) {
                var totTime = runningTime + diff;
                var totIterations = runningCount + count;
                if (confirm("A while loop is taking a long time to run. Do you want to stop the program? " + totIterations + " iterations of the loop have taken "
                            + totTime + "ms so far."
                            + "\n\nChoose OK to stop the loop or Cancel to "
                            + "let it continue."))
                    throw new GraceExceptionPacket(ResourceExceptionObject,
                        new GraceString("user abort of possibly-infinite loop."));
                else {
                    runningCount += count;
                    runningTime += diff;
                    count = 0;
                    startTime = new Date();
                }
            }
            callmethod(b, "apply", [0]);
        }
        return var_nothing;
    }
    while (Grace_isTrue(callmethod(c, "apply", [0]))) {
        callmethod(b, "apply", [0]);
    }
    return GraceDone;
}
Grace_prelude.methods["for()do"] = function(argcv, c, b) {
    var iter = callmethod(c, "iterator", [0]);
    while (Grace_isTrue(callmethod(iter, "hasNext", [0]))) {
        var val = callmethod(iter, "next", [0]);
        callmethod(b, "apply", [1], val);
    }
    return GraceDone;
}
Grace_prelude.methods["is()identicalTo"] = function is_IdenticalTo (argcv, a, b) {
    if (a === b) return GraceTrue; else return GraceFalse;
}
Grace_prelude.methods["is()differentFrom"] = function is_DifferentFrom (argcv, a, b) {
    if (a !== b) return GraceTrue; else return GraceFalse;
}
Grace_prelude.methods["_methods"] = function() {
    var meths = [];
    for (var m in this.methods)
        meths.push(new GraceString(m));
    var s = this.superobj;
    while (s) {
        for (var m in s.methods)
            meths.push(new GraceString(m));
        s = s.superobj;
    }
    var l = new GraceList(meths);
    return l;
}
Grace_prelude.methods["clone"] = function(argcv, obj) {
    return obj;
}
Grace_prelude.methods["become"] = function(argcv, a, b) {
    for(var k in a) {
        var t = a[k];
        a[k] = b[k];
        b[k] = t;
    }
    return GraceDone;
}

var PrimitiveArrayClass = Grace_allocObject();
PrimitiveArrayClass.methods["new"] = function(argcv, n) {
    return new GracePrimitiveArray(n._value);
};
Grace_prelude.methods["PrimitiveArray"] = function() { return PrimitiveArrayClass; };
Grace_prelude.methods["primitiveArray"] = function() { return PrimitiveArrayClass; };

//
//  Access methods declared in Grace's standard prelude
//

var _point2DClass = 'undefined';
function GracePoint2DClass() {
    if (_point2DClass === 'undefined')
        _point2DClass = callmethod(Grace_prelude, "point2D", [0]);
    return _point2DClass
}

var _bindingClass = 'undefined';
function GraceBindingClass() {
    if (_bindingClass === 'undefined')
        _bindingClass = callmethod(Grace_prelude, "binding", [0]);
    return _bindingClass
}

var _rangeClass = 'undefined';
function GraceRangeClass() {
    if (_rangeClass === 'undefined')
        _rangeClass = callmethod(Grace_prelude, "range", [0]);
    return _rangeClass
}

function Grace_allocModule(modname) {
    // This method should not be used any more;
    // superced by new GraceModule
    alert('Grace_allocModule called')
    var mod = Grace_allocObject();
    mod.methods.outer = function() {
        return this.outer;
    }
    mod.outer = Grace_prelude;
    mod.className = "Module<" + modname + ">";
    return mod;
}

// for browsers: old names for backward compatibility
var var___95__prelude = Grace_prelude;
var var_Done = GraceDone;
var var_done = GraceDone;


// for node: explicitly make names global
if (typeof global !== "undefined") {
    global.callmethod = callmethod;
    global.callmethodsuper = callmethodsuper;
    global.callStack = callStack;
    global.catchCase = catchCase;
    global.checkmethodcall = checkmethodcall;
    global.classType = classType;
    global.dbg = dbg;
    global.dbgp = dbgp;
    global.do_import = do_import;
    global.EnvironmentExceptionObject = EnvironmentExceptionObject;
    global.ErrorObject = ErrorObject;
    global.ExceptionObject = ExceptionObject;
    global.getLineNumber = getLineNumber;
    global.getModuleName = getModuleName;
    global.Grace_allocObject = Grace_allocObject;
    global.Grace_errorPrint = Grace_errorPrint;
    global.Grace_length = Grace_length;
    global.Grace_prelude = Grace_prelude;
    global.Grace_print = Grace_print;
    global.GraceBindingClass = GraceBindingClass;
    global.GraceBlock_match = GraceBlock_match;
    global.GraceBoolean = GraceBoolean;
    global.gracecode_imports = gracecode_imports;
    global.gracecode_interactive = gracecode_interactive;
    global.gracecode_io = gracecode_io;
    global.gracecode_math = gracecode_math;
    global.gracecode_mirrors = gracecode_mirrors;
    global.gracecode_sys = gracecode_sys;
    global.gracecode_unicode = gracecode_unicode;
    global.gracecode_util = gracecode_util;
    global.GraceDone = GraceDone;
    global.GraceException = GraceException;
    global.GraceExceptionPacket = GraceExceptionPacket;
    global.GraceFailedMatch = GraceFailedMatch;
    global.GraceFalse = GraceFalse;
    global.GraceHashMap = GraceHashMap;
    global.Grace_isTrue = Grace_isTrue;
    global.GraceIterator = GraceIterator;
    global.GraceList = GraceList;
    global.GraceListIterator = GraceListIterator;
    global.GraceMatchResult = GraceMatchResult;
    global.GraceMirrorMethod = GraceMirrorMethod;
    global.GraceNum = GraceNum;
    global.GraceObject = GraceObject;
    global.GracePoint2DClass = GracePoint2DClass;
    global.GraceString = GraceString;
    global.GraceStringIterator = GraceStringIterator;
    global.GraceSuccessfulMatch = GraceSuccessfulMatch;
    global.GraceTrue = GraceTrue;
    global.GraceType = GraceType;
    global.GraceUnicodePattern = GraceUnicodePattern;
    global.ImportErrorObject = ImportErrorObject;
    global.matchCase = matchCase;
    global.NoSuchMethodErrorObject = NoSuchMethodErrorObject;
    global.ProgrammingErrorObject = ProgrammingErrorObject;
    global.ResourceExceptionObject = ResourceExceptionObject;
    global.ReturnException = ReturnException;
    global.RuntimeErrorObject = RuntimeErrorObject;
    global.setLineNumber = setLineNumber;
    global.setModuleName = setModuleName;
    global.StackFrame = StackFrame;
    global.type_Boolean = type_Boolean;
    global.type_Number = type_Number;
    global.type_Object = type_Object;
    global.type_String = type_String;
    global.type_Unknown = type_Unknown;
    global.TypeErrorObject = TypeErrorObject;
    global.var___95__prelude = Grace_prelude;
    global.var_Done = GraceDone;
    global.var_done = GraceDone;
    global.var_Block = var_Block;
    global.var_Boolean = var_Boolean;
    global.var_Number = var_Number;
    global.var_Object = var_Object;
    global.var_String = var_String,
    global.var_Unknown = var_Unknown;
};
