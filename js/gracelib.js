"use strict";

if(typeof(process) != "undefined") {
    var fs = require("fs");
    var child_process = require('child_process');
}

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
    // gets its methods from the prototype.  Don't add to them!
    this.superobj = null;
    this.data = {};
    this.className = "object";
    this.mutable = false;
    this.definitionModule = "unknown";
    this.definitionLine = 0;
}

function object_notEquals (argcv, o) {
    var b = callmethod(this, "==", [1], o);
    return callmethod(b, "not", [0]);
}

GraceObject.prototype = {
    methods: {
        "==": function object_equals (argcv, o) {
            return callmethod(Grace_prelude, "identical", [2], this, o);
        },
        "!=": object_notEquals,
        "≠": object_notEquals,
        "basicAsString": function object_asString (argcv) {
            var s = "object {";
            var firstTime = true;
            for (var i in this.data) {
                if (firstTime) firstTime = false; else s += ", ";
                try {
                    s += "" + i + " = " + callmethod(this.data[i], "asString", [0])._value;
                } catch (e) {
                    s += "" + i + " = ?";
                }
            }
            return new GraceString(s + "}");
        },
        "asString": function object_asString (argcv) {
            if (!this.className || this.className.length == 0)
                return new GraceString("an object");
            var firstChar = this.className[0];
            var article = ("aeio".indexOf(firstChar) >= 0)? "an " : "a ";
            return new GraceString(article + this.className);
        },
        "asDebugString": function object_asDebugString (argcv) {
            return callmethod(this, "asString", [0]);
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

function Grace_allocObject(superConstructor, givenName) {
    // The difference between this function and "new GraceObject" is that the
    // object returned here has its OWN methods object,
    // whereas the one returned from new GraceObject shares its prototype's methods.
    // Changing the 'methods' object has different effects in the two cases!
    var sup = superConstructor ? new superConstructor() : null;
    var resultObj = {
        methods: {},
        superobj: sup,
        data: {},
        className: givenName || "object",
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

function string_curriedAt(idx) {
    var s = this._value;
    if (idx > s.length) {
        var msgstr = (s.length <= 20) ? s : (s.substr(0, 17) + "…");
        throw new GraceExceptionPacket(BoundsErrorObject,
            new GraceString('"' + msgstr + "\".at(" + idx + ") but string.size = " + s.length))
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
            return (this._value.length === 0) ? GraceTrue : GraceFalse;
        },
        "first": function() { return string_curriedAt.call(this, 1) },
        "second": function() { return string_curriedAt.call(this, 2) },
        "third": function() { return string_curriedAt.call(this, 3) },
        "fourth": function() { return string_curriedAt.call(this, 4) },
        "fifth": function() { return string_curriedAt.call(this, 5) },
        "last": function() { return string_curriedAt.call(this, this._value.length) },
        "_escape": function(argcv) {
            var tmp = callmethod(this, "replace()with", [2],
                    new GraceString("\\"), new GraceString("\\\\"));
            tmp = callmethod(tmp, "replace()with", [2],
                    new GraceString("\""), new GraceString("\\\""));
            tmp = callmethod(tmp, "replace()with", [2],
                    new GraceString("\n"), new GraceString("\\0a"));
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
            if (result === -1) { return new GraceNum(0) };
            return new GraceNum(result + 1);
        },
        "indexOf()ifAbsent": function string_indexOf_ifAbsent (argcv, needle, block0) {
            var self = this._value;
            var result = self.indexOf(needle._value);
            if (result === -1) { return callmethod(block0, "apply", [0]) };
            return new GraceNum(result + 1);
        },
        "indexOf()startingAt()ifAbsent": function string_indexOf_ifAbsent (argcv, needle, startPos, block0) {
            var self = this._value;
            var start = startPos._value - 1;
            var result = self.indexOf(needle._value, start);
            if (result === -1) { return callmethod(block0, "apply", [0]) };
            return new GraceNum(result + 1);
        },
        "lastIndexOf()": function string_lastIndexOf_ifAbsent (argcv, needle, block0) {
            var self = this._value;
            var result = self.lastIndexOf(needle._value);
            if (result === -1) { return new GraceNum(0) };
            return new GraceNum(result + 1);
        },
        "lastIndexOf()startingAt()ifAbsent": function string_lastIndexOf (argcv, needle, startPos, block0) {
            var self = this._value;
            var start = startPos._value - 1;
            var result = self.lastIndexOf(needle._value, start);
            if (result === -1) { return callmethod(block0, "apply", [0]) };
            return new GraceNum(result + 1);
        },
        "lastIndexOf()ifAbsent": function string_lastIndexOf (argcv, needle, block0) {
            var self = this._value;
            var result = self.lastIndexOf(needle._value);
            if (result === -1) { return callmethod(block0, "apply", [0]) };
            return new GraceNum(result + 1);
        },
        "contains": function string_contains(argcv, needle) {
            var self = this._value;
            var result = self.indexOf(needle._value);
            if (result === -1) { return GraceFalse };
            return GraceTrue;
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
            if (self === other) return new GraceNum(0)
            if (self > other) return new GraceNum(+1);
            return new GraceNum(-1);
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
        "iterator": function string_iterator(argcv) {
            return new GraceStringIterator(this);
        },
        "do": function string_do(argcv, action1) {
            var self = this._value;
            var size = self.length;
            for (var ix = 0; ix < size; ix ++) {
                callmethod(action1, "apply", [1], new GraceString(self[ix]));
            };
            return GraceDone;
        },
        "keysAndValuesDo": function string_do(argcv, action2) {
            var self = this._value;
            var size = self.length;
            for (var ix = 0; ix < size; ix ++) {
                callmethod(action2, "apply", [2], new GraceNum(ix+1), new GraceString(self[ix]));
            };
            return GraceDone;
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
        "hash": function string_hash(argcv) {
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
            return callmethod(GraceRangeClass(), "from()to", [1, 1], new GraceNum(1), new GraceNum(size));
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
            return callmethod(GraceRangeClass(), "from()to", [1, 1], this, new GraceNum(ub));
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
        "hash": function num_hash (argcv) {
            return new GraceNum(parseInt("" + (this._value * 10)));
        },
        "hashcode": function num_hashcode (argcv) {
            return new GraceNum(parseInt("" + (this._value * 10)));
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
        "truncated": function(argcv) {
            if (this._value < 0)
                return new GraceNum(Math.ceil(this._value));
            return new GraceNum(Math.floor(this._value));
        },
        "rounded": function(argcv) {
            return new GraceNum(Math.round(this._value));
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

function RealGraceList(jsList) {
    var newList = callmethod(GraceListClass(), "empty", [0]);
    for (var ix = 0; ix < jsList.length; ix++) {
        callmethod(newList, "push", [1], jsList[ix]);
    }
    return newList;
}

function GraceList(l) {
    this._value = l;
}
GraceList.prototype = {
    methods: {
        "push": function(argcv, val) {
            this._value.push(val);
            return GraceDone;
        },
        "unshift": function (argcv, val) {
            this._value.unshift(val);
            return GraceDone;
        },
        "remove": function (argcv, val) {
            var list = this._value;
            var index = -1;
            for (var i = 0; i < list.length && index == -1; i++)
                if (Grace_isTrue(callmethod(val, "==", [1], list[i])))
                    index = i;
            if (index > -1)
                list.splice(index, 1);
            return new GraceNum(index + 1);
        },
        "indexOf": function (argcv, val) {
            return new GraceNum(this._value.indexOf(val) + 1);
        },
        "reverse": function (argcv, val) {
            this._value.reverse();
            return this;
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
        "at()add": function(argcv, idx, val) {
            this._value.splice(idx._value - 1, 0, val);
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
                    s += ",";
                }
                if (v.methods['asString'])
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
                    s += ",";
                }
                if (v.methods['asDebugString'])
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
        "prepended": function(argcv, item) {
            var self = this._value;
            var l = [item];
            for (var i=0; i<self.length; i++)
                l.push(self[i]);
            return new GraceList(l);
        },
        "iterator": function(argcv) {
            return new GraceListIterator(this._value);
        },
        "do": function list_do(argcv, action1) {
            var self = this._value;
            var size = self.length;
            for (var ix = 0; ix < size; ix ++) {
                callmethod(action1, "apply", [1], self[ix]);
            };
            return GraceDone;
        },
        "indices": function list_indices(argcv) {
            var size = this._value.length;
            return callmethod(GraceRangeClass(), "from()to", [1, 1],
                              new GraceNum(1), new GraceNum(size));
        },
        "first": function(argcv) {
            return this._value[0];
        },
        "last": function(argcv) {
            var self = this._value;
            return self[self.length-1];
        },
        "reduce": function(argcv, initial, block) {
            var self = this._value;
            var res = initial;
            for (var i=0; i<self.length; i++) {
                var v = self[i];
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
                    (v.methods['asString']))
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
                if ((v) && (v.methods) && (v.methods['asDebugString']))
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
    var orClass = callmethod(Grace_prelude, "OrPattern", [0]);
    return callmethod(orClass, "new", [2], l, r)
}

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
    try {
        try {
            var s = callmethod(obj, "asString", [0]);
            minigrace.stderr_write(s._value + "\n");
        } catch (e) {
            minigrace.stderr_write("can't stringify object " + obj + "\n");
        }
    } finally {
        return GraceDone;
    }
}

function Grace_length(obj) {
    return new GraceNum(obj._value.length);
}

function GraceMatchResult(result, bindings) {
    this.data['result'] = result;
    if (bindings == undefined)
        bindings = new GraceList([]);
    this.data['bindings'] = bindings;
    this._value = this.superobj._value;
}
GraceMatchResult.prototype = Grace_allocObject();
GraceMatchResult.prototype.methods.result = function() {
    return this.data['result'];
}
GraceMatchResult.prototype.methods.bindings = function() {
    return this.data['bindings'];
}
GraceMatchResult.prototype.methods.asString = function() {
    var s = ""
    if (Grace_isTrue(this))
        s = "SuccessfulMatch(result = ";
    else
        s = "FailedMatch(result = ";
    s += callmethod(this.data['result'], "asString", [0])._value;
    s += ", bindings = ";
    s += callmethod(this.data['bindings'], "asString", [0])._value;
    s += ")";
    return new GraceString(s);
}
GraceMatchResult.prototype.methods['::'] = function(argcv, other) {
    return callmethod(GraceBindingClass(), "key()value", [1, 1], this, other);
}

function GraceSuccessfulMatch(result, bindings) {
    this.superobj = new GraceBoolean(true);
    this.data = {};
    this.data['result'] = result;
    if (bindings == undefined)
        bindings = new GraceList([]);
    this.data['bindings'] = bindings;
    this._value = this.superobj._value;
}
GraceSuccessfulMatch.prototype = GraceMatchResult.prototype;

function GraceFailedMatch(result, bindings) {
    this.superobj = new GraceBoolean(false);
    this.data = {};
    this.data['result'] = result;
    if (bindings == undefined)
        bindings = new GraceList([]);
    this.data['bindings'] = bindings;
    this._value = this.superobj._value;
}
GraceFailedMatch.prototype = GraceMatchResult.prototype;

function GraceTypeIntersection(l, r) {
    var opClass = callmethod(Grace_prelude, "TypeIntersection", [0]);
    return callmethod(opClass, "new", [2], l, r)
}
function GraceTypeUnion(l, r) {
    var opClass = callmethod(Grace_prelude, "TypeUnion", [0]);
    return callmethod(opClass, "new", [2], l, r)
}
function GraceTypeVariant(l, r) {
    var opClass = callmethod(Grace_prelude, "TypeVariant", [0]);
    return callmethod(opClass, "new", [2], l, r)
}
function GraceTypeSubtraction(l, r) {
    var opClass = callmethod(Grace_prelude, "TypeSubtraction", [0]);
    return callmethod(opClass, "new", [2], l, r)
}

function GraceType(name) {
    this.name = name;
    this.typeMethods = [];
}
GraceType.prototype = {
    methods: {
        "match": function type_match (argcv, other) {
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
        "|": function type_or(argcv, other) {
            return new GraceTypeVariant(this, other);
        },
        "&": function type_and(argcv, other) {
            return new GraceTypeIntersection(this, other);
        },
        "+": function type_and(argcv, other) {
            return new GraceTypeUnion(this, other);
        },
        "-": function type_and(argcv, other) {
            return new GraceTypeSubtraction(this, other);
        },
        "asString": function type_asString (argcv) {
            return new GraceString("type " + this.name);
        },
        "methodNames": function type_methodNames (argcv) {
            var result = callmethod(GraceSetClass(), "empty", [0]);
            for (var i=0; i<this.typeMethods.length; i++) {
                var methName = this.typeMethods[i];
                callmethod(result, "add", [1], new GraceString(methName));
            }
            return result;
        }
    },
    className: "type",
    definitionModule: "unknown",
    definitionLine: 0,
    superobj: new GraceObject()
};

function GraceBlock(recvr, lineNum, numParams) {
    this.definitionModule = recvr.definitionModule;
    this.definitionLine = lineNum;
    this.numParams = numParams;
    this.receiver = recvr;
}

GraceBlock.prototype = {
    methods : {
        "apply": function block_apply (argcv) {
            var args = Array.prototype.slice.call(arguments, 1);
            if (args.length != this.numParams)
                callmethod(ProgrammingErrorObject, "raise", [1],
                       new GraceString("block applied to " + args.length +
                                       " arguments where " + this.numParams + " expected."));
            return this.real.apply(this.receiver, args);
        },
        "applyIndirectly": function block_applyIndirectly (argcv, a) {
            return this.real.apply(this.receiver, a._value);
        },
        "outer": function block_outer () {
            return callmethod(this.receiver, 'outer', [0]);
        },
        "match": GraceBlock_match,
        "asString": function block_asString (argcv) {
            return new GraceString("block<" + this.definitionModule +
                                   ":" + this.definitionLine + ">");
        }
    },
    className: "block",
    superobj: new GraceObject()
}

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
var var_Done = new GraceType("Done");
var_Done.typeMethods.push("asString");
var_Done.typeMethods.push("asDebugString");
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
var var_Block = new GraceType("Block");
var_Block.typeMethods.push("apply");
var_Block.typeMethods.push("applyIndirectly");
var_Block.typeMethods.push("match");
var type_Block = var_Block;
var var_None = new GraceType("None");
var_None.typeMethods.push("==");
var_None.typeMethods.push("!=");
var type_None = var_None;

var var_HashMap = { methods: { 'new':
    function HashMap_new () { return new GraceHashMap(); } }
};
var var_GraceType = { methods: { 'new':
    function GraceType_new () { return new GraceType(); } }
};

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
    this.superobj = callmethod(callmethod(Grace_prelude, "iterable", [0]), "trait", [0]);
}
GraceStringIterator.prototype = {
    methods: {
        hasNext: function() {
            return ((this._index < this._max) ? GraceTrue : GraceFalse);
        },
        next: function() {
            var rv = new GraceString(this._value.charAt(this._index));
            this._index++;
            return rv;
        }
    }
};

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
stdout.methods.isatty = function() {
        if(typeof(process) != "undefined") {
            return Boolean(process.stdout.isTTY) ? GraceTrue : GraceFalse;
        } else {
            return GraceFalse;
        }
}
stdout.methods.close = function() {};

var stdin = Grace_allocObject();
stdin.methods.getline = function() {
    return new GraceString(minigrace.stdin_read());
}
stdin.methods.read = function() {
    return new GraceString(minigrace.stdin_read());
}
stdin.methods.iterator = function() {
    return callmethod(new GraceString(minigrace.stdin_read()), "iterator", [0]);
}
stdin.methods.isatty = function() {
        if(typeof(process) != "undefined") {
            return Boolean(process.stdin.isTTY) ? GraceTrue : GraceFalse;
        } else {
            return GraceFalse;
        }
}
stdin.methods.close = function() {};

var stderr = Grace_allocObject();
stderr.methods.write = function(junk, s) {
    minigrace.stderr_write(s._value);
    return GraceDone;
}
stderr.methods.isatty = function() {
        if(typeof(process) != "undefined") {
            return Boolean(process.stderr.isTTY) ? GraceTrue : GraceFalse;
        } else {
            return GraceFalse;
        }
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
// The base to which a module adds its contents.  Thus, it is
// important that 'methods' be a property of the module object itself,
// and not of a prototype, since 'methods' will be changed.
    var newModuleObject = Grace_allocObject();
    newModuleObject.className = "module";
    newModuleObject.definitionModule = name;
    newModuleObject.definitionLine = 0;
    newModuleObject.superobj = new GraceObject();
//    newModuleObject.outer = Grace_prelude;
    newModuleObject.methods.asString = function module_asString(argcv) {
        return new GraceString("the " + this.definitionModule + " " + this.className);
    };
//    newModuleObject.methods.outer = function module_outer () {
//        return this.outer;
//    };
    return newModuleObject;
}

function fileExists(path) {
    var slashPosn = path.lastIndexOf("/");
    if (slashPosn !== -1) path = path.substr(slashPosn + 1);
    var dotPosn = path.lastIndexOf(".");
    if (dotPosn === -1) return false;
    var extn = path.substr(dotPosn);
    var baseName = path.substring(0, dotPosn);
    if (extn === ".gct") {
        var gctpath = path.substr(0, path.length - 4);
        return typeof(gctCache[gctpath]) !== "undefined";
    }
    if (extn == ".js") {
        return eval("typeof(gracecode_" + baseName + ")") !== "undefined";
    }
    return false;
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
	if(typeof(process) != "undefined") {
            return (fs.existsSync(safeJsString(path)) ? GraceTrue : GraceFalse);
	}
        if (fileExists(path._value)) return GraceTrue;
        return GraceFalse;
    };
    this.methods.system = function(argcv, systemString) {
        if(typeof(process) != "undefined") {
	    try {
		var result = child_process.execSync(safeJsString(systemString), {stdio: [process.stdin, process.stdout, process.stderr]});
		return GraceTrue;
	    } catch(e) {
		return GraceFalse;
	    }
	}
	return GraceFalse;
    };
    this.methods.spawn = function() {
        if(typeof(process) != "undefined") {
	    var cmd = safeJsString(arguments[1]);
	    var args = [];
	    for(var i = 2; i < arguments.length; i++)
		args.push(safeJsString(arguments[i]));
	    var result = child_process.spawnSync(cmd, args, {stdio: [process.stdin, process.stdout, process.stderr]});
            var o = new Grace_allocObject();
	    o.methods['terminated'] = function () { return GraceTrue; };
	    o.methods['wait'] = function () { return GraceTrue; };
	    o.methods['status'] = function () { return new GraceNum(result.status); };
	    o.methods['success'] = function () { return result.status == 0 ? GraceTrue : GraceFalse; };
	    return o;
	}
	return GraceFalse;
    };
    this.methods.open = function(argcv, path, mode) {
	if(typeof(process) != "undefined") {
            var p = safeJsString(path);
            var m = safeJsString(mode);
            var o = new Grace_allocObject();
	    var f = fs.openSync(p, m);
            if(fs.existsSync(p)) {
                var c = fs.readFileSync(p);
		var a = c.toString().split('\n');
	    }
	    var i = 0;
            o.methods['write'] = function (argvc, data) { fs.writeSync(f, safeJsString(data)); };
            o.methods['close'] = function () { fs.closeSync(f); };
            o.methods['getline'] = function () { var s = a[i]; i++; return new GraceString(s); };
            o.methods['eof'] = function () { return (i == a.length) ? GraceTrue : GraceFalse; };
            o.methods['read'] = function () { return new GraceString(c.toString()); };
            o.methods['pathname'] = function () { return new GraceString(p);};
            return o;
	}
        var o = new Grace_allocObject();
        o.methods['write'] = function io_write () {};
        o.methods['close'] = function io_close () {};
        path = path._value;
        var slash = path.lastIndexOf("/");
        if (slash >= 0) path = path.substring(slash+1);
        if (path.substr(path.length - 4) == ".gct") {
            var gctpath = path.substr(0, path.length - 4);
            if (mode._value == "w")
                gctCache[gctpath] = "";
            else if (mode._value == "r") {
                if (typeof gctCache[gctpath] == "undefined")
                    throw new GraceExceptionPacket(EnvironmentExceptionObject,
                           new GraceString("Can't open file " + gctpath +
                                           ".gct for 'r'.  File does not exist."))
                else {
                    o._lines = gctCache[gctpath].split("\n");
                    o._index = 0;
                }
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
    this.methods.realpath = function io_browser_realpath (argcv, x) {
        if(typeof(process) != "undefined") {
            return new GraceString(fs.realpathSync(safeJsString(x)));
	}
        return x;
    };
    this.methods.listdir = function (argcv, x) {
        if(typeof(process) != "undefined") {
            var list = [];
	    list.push(new GraceString("."));
	    list.push(new GraceString(".."));
            fs.readdirSync(safeJsString(x)).forEach(function(val, index, array) {
                list.push(new GraceString(val));
            });
            return new GraceList(list);
        }
        return new GraceList([]);
    };
    this.methods.newer = function io_browser_newer(argcv, jsFile, sourceFile) {
        return GraceTrue
    };
    return this;
}

function gracecode_sys() {
    var startTime = (new Date).getTime()/1000;
    this.methods.cputime = function() {
	return new GraceNum((performance.now() - loadCPU)/1000);
    }
    this.methods.argv = function() {
        if(typeof(process) != "undefined") {
            var list = [];
	    
            process.argv.forEach(function(val, index, array) {
		if(index > 1)
                    list.push(new GraceString(val));
            });
            return new GraceList(list);
        } else {
            return new GraceList([
                new GraceString("minigrace"),
                new GraceString("--target"),
                new GraceString("js"),
            ]);
	}
    };
    this.methods.elapsed = function() {return new GraceNum(((new Date).getTime()/1000)-startTime);};
    this.methods.exit = function() {
        throw "SystemExit";
    };
    this.methods.execPath = function() {
        return new GraceString(".");
    };
    this.methods.environ = function() {
        var o = Grace_allocObject(GraceObject, "environmentObject");
        o.methods['at'] = function environ_at(argcv, key) {
            if(typeof(process) != "undefined") {
                var str = safeJsString(key);
                if(str in process.env)
                    return new GraceString(process.env[str]);
	    }
	    return GraceEmptyString;
	};
        o.methods['[]'] = o.methods['at'];
        o.methods['at()put'] = function environ_at_put(argcv, key, value) {
            if(typeof(process) != "undefined") {
                var kstr = safeJsString(key);
                var vstr = safeJsString(value);
                process.env[kstr] = vstr;
	    }
	    return GraceTrue;
	};
        o.methods['[]:='] = o.methods['at()put'];
        o.methods['contains'] = function environ_contains(argcv, searchkey) {
            if(typeof(process) != "undefined") {
                return (safeJsString(searchkey) in process.env) ? GraceTrue : GraceFalse;
            } else {
		return GraceFalse;
	    }
        };
        return o;
    };
    this.methods.asString = function(argcv) {
        return new GraceString('the "sys" module');
    };
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
    return this;
}

function gracecode_unicode() {
    this.methods.isLetter = function unicode_isLetter(argcv, s) {
        if (typeof s._value == "number")
            s = String.fromCharCode(s._value);
        else s = s._value;
        return (  (unicode.isCategory(s, "Ll")
                || unicode.isCategory(s, "Lu")
                || unicode.isCategory(s, "Lo")
                || unicode.isCategory(s, "Lm")) ? GraceTrue : GraceFalse);
    };
    this.methods.isNumber = function unicode_isNumber(argcv, s) {
        if (typeof s._value == "number")
            s = String.fromCharCode(s._value);
        else s = s._value;
        return (  (unicode.isCategory(s, "Nd")
                || unicode.isCategory(s, "No")
                || unicode.isCategory(s, "Nl")) ? GraceTrue : GraceFalse);
    };
    this.methods.isSymbolMathematical = function unicode_isSymbolMathematical(argcv, s) {
        if (typeof s._value == "number")
            s = String.fromCharCode(s._value);
        else s = s._value;
        return ((unicode.isCategory(s, "Sm")) ? GraceTrue : GraceFalse);
    };
    this.methods.isSeparator = function unicode_isSeparator(argcv, s) {
        if (typeof s._value == "number")
            s = String.fromCharCode(s._value);
        else s = s._value;
        return (  (unicode.isCategory(s, "Zs")
                || unicode.isCategory(s, "Zp")
                || unicode.isCategory(s, "Zl")) ? GraceTrue : GraceFalse);
    };
    this.methods.isControl = function unicode_isControl(argcv, s) {
        if (typeof s._value == "number")
            s = String.fromCharCode(s._value);
        else s = s._value;
        return  ( (unicode.isCategory(s, "Cf")
                || unicode.isCategory(s, "Cc")
                || unicode.isCategory(s, "Co")
                || unicode.isCategory(s, "Cs")) ? GraceTrue : GraceFalse);
    };
    this.methods.inCategory = function unicode_inCategory(argcv, s, c) {
        if (typeof s._value == "number")
            s = String.fromCharCode(s._value);
        else s = s._value;
        return ((unicode.isCategory(s, c._value)) ? GraceTrue : GraceFalse);
    };
    this.methods.iscategory = this.methods.inCategory;
    this.methods.category = function unicode_category(argcv, s) {
        return new GraceString(unicode.category(s._value));
    }
    this.methods.name = function unicode_name(argcv, s) {
        return new GraceString(unicode.name(s._value));
    };
    this.methods.create = function unicode_create(argcv, n) {
        return new GraceString(String.fromCharCode(n._value));
    };
    this.methods.pattern = function unicode_pattern(argcv) {
        var args = Array.prototype.slice.call(arguments, 1);
        return new GraceUnicodePattern(args);
    };
    this.methods['pattern()not'] = function unicode_pattern_not(argcv) {
        var args = Array.prototype.slice.call(arguments, 1, argcv[0] + 1);
        var args2 = Array.prototype.slice.call(arguments, argcv[0] + 1);
        return new GraceUnicodePattern(args, args2);
    };
    return this;
}

if (typeof gctCache !== "undefined")
    gctCache['unicode'] = "path:\n unicode\nclasses:\npublic:\n category\n bidirectional\n combining\n mirrored\n name\n iscategory\n isSeparator\n isControl\n isLetter\n isNumber\n isSymbolMathematical\n create\nconfidential:\nfresh-methods:\nmodules:\n";


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
var loadDate = Date.now();
// NOTE: loadCPU is used in sys above as well
var loadCPU = performance.now();
var previousElapsed = loadDate;
var previousCPU = loadCPU;

function gracecode_util() {
    if (util_module != false)
        return util_module;

    this.methods.vtag = function(argcv) {
        return new GraceBoolean(false);
    };
    this.methods.outfile = function util_outfile(argcv) {
        return stdout;
    };
    this.methods.infile = function util_infile(argcv) {
        return stdin;
    };
    this.methods.parseargs = function util_parseargs(argcv) {
        return GraceDone;
    };
    this.methods.target = function util_target(argcv) {
        return new GraceString(minigrace.mode);
    };
    this.methods.modname = function util_modname(argcv) {
        return new GraceString(minigrace.modname);
    };
    this.methods.setline = function util_setline(argcv, i) {
        lineNumber = i._value;
        this._linenum = i;
    };
    this.methods.linenum = function util_linenum(argcv) {
        return this._linenum;
    };
    this.methods.linepos = function util_linepos(argcv) {
        return this._linepos;
    };
    this.methods.setPosition = function util_setPosition(argcv, l, p) {
        lineNumber = l._value;
        this._linenum = l;
        this._linepos = p;
        return GraceDone;
    };
    this.methods.buildtype = function util_buildtype(argcv) {
        return new GraceString("normal");
    };
    this.methods.runmode = function util_runmode(argcv) {
        return new GraceString("normal");
    };
    this.methods.gracelibPath = function util_gracelibPath(argcv) {
        return new GraceString("gracelib.h");
    };
    this.methods.verbosity = function util_verbosity(argcv) {
        return new GraceNum(30);
    };
    this.methods.log_verbose = function util_log_verbose(argcv, s) {
        if (minigrace.verbose) {
            var cpu = Math.round((performance.now() - loadCPU)/10);  // 10 ms
            var elapsed = Math.round((Date.now() - loadDate)/10); // 10 ms
            cpu = (cpu / 100);               // seconds, with 2 decimals
            elapsed = (elapsed / 100);       // seconds, with 2 decimals
            minigrace.stderr_write("minigrace: " + minigrace.modname + ': '
                            + cpu + "/" + elapsed
                            + " (+" + (cpu - previousCPU).toFixed(2) + "/"
                            + (elapsed - previousElapsed).toFixed(2) + "): "
                            + s._value + "\n");
            previousElapsed = elapsed;
            previousCPU = cpu;
        }
        return GraceDone;
    };
    this.methods.outprint = function util_outprint(argcv, s) {
        minigrace.stdout_write(s._value + "\n");
        return GraceDone;
    };
    var obj_requiredModules = Grace_allocObject();
    var obj_init_requiredModules = function () {
        var origSuperDepth = superDepth;
        superDepth = obj_requiredModules;
        var meth_isAlready = function(argcv) {    // method isAlready(1)
            var curarg = 1;
            var var_moduleName = arguments[curarg];
            curarg++;
            if (argcv[0] != 1)
                callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for isAlready(1)"));
            setModuleName("util");
            var returnTarget = invocationCount;
            invocationCount++;
            try {
                var if1246 = GraceDone;
                onSelf = true;
                var call1247 = callmethod(this, "static", [0]);
                var call1248 = callmethod(call1247,"contains", [1], var_moduleName);
                if (Grace_isTrue(call1248)) {
                    var bool1249 = new GraceBoolean(true)
                    if1246 = bool1249;
                } else {
                    var if1250 = GraceDone;
                    onSelf = true;
                    var call1251 = callmethod(this, "other", [0]);
                    var call1252 = callmethod(call1251,"contains", [1], var_moduleName);
                    if (Grace_isTrue(call1252)) {
                        var bool1253 = new GraceBoolean(true)
                        if1250 = bool1253;
                    } else {
                        var bool1254 = new GraceBoolean(false)
                        if1250 = bool1254;
                    }
                    if1246 = if1250;
                }
                return if1246;
            } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                    return e.returnvalue;
                } else {
                    throw e;
                }
            }
        }
        meth_isAlready.paramCounts = [1];
        meth_isAlready.variableArities = [false];
        obj_requiredModules.methods["isAlready"] = meth_isAlready;
        meth_isAlready.definitionModule = "util";
        sourceObject = obj_requiredModules;
        var call1255 = callmethod(Grace_prelude, "set", [0]);
        var call1256 = callmethod(call1255,"empty", [0]);
        obj_requiredModules.data["static"] = call1256;
        var reader_util_static1257 = function() {
            return this.data["static"];
        }
        reader_util_static1257.def = true;
        obj_requiredModules.methods["static"] = reader_util_static1257;
        sourceObject = obj_requiredModules;
        var call1258 = callmethod(Grace_prelude, "list", [0]);
        var call1259 = callmethod(call1258,"empty", [0]);
        obj_requiredModules.data["linkfiles"] = call1259;
        var reader_util_linkfiles1260 = function() {
            return this.data["linkfiles"];
        }
        reader_util_linkfiles1260.def = true;
        obj_requiredModules.methods["linkfiles"] = reader_util_linkfiles1260;
        sourceObject = obj_requiredModules;
        var call1261 = callmethod(Grace_prelude, "set", [0]);
        var call1262 = callmethod(call1261,"empty", [0]);
        obj_requiredModules.data["other"] = call1262;
        var reader_util_other1263 = function() {
            return this.data["other"];
        }
        reader_util_other1263.def = true;
        obj_requiredModules.methods["other"] = reader_util_other1263;
        sourceObject = obj_requiredModules;
        superDepth = origSuperDepth;
    }
    obj_init_requiredModules.apply(obj_requiredModules, []);
    var var_requiredModules = obj_requiredModules;
    var util_requiredmodules = function(argcv) {    // method requiredModules
        var curarg = 1;
        if (argcv[0] != 0)
            callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for requiredModules"));
        return var_requiredModules;
    };
    util_requiredmodules.paramCounts = [ 0 ];
    util_requiredmodules.variableArities = [false];
    this.methods.requiredModules = util_requiredmodules;
    this.methods.debug = function util_debug(argcv, s) {
        dbg(s._value);
        return GraceDone;
    };
    this.methods.interactive = function util_interactive(argcv) {
        return GraceFalse;
    };
    this.methods.splitPath = function util_splitPath(argcv, pathString) {
        var locations = pathString._value.split(':');
        var result = callmethod(GraceListClass(), "empty", [0]);
        var len = locations.length;
        for (var i = 0; i < len; i++) {
            callmethod(result, "addLast", [1], new GraceString(locations[i]));
        };
        return result;
    };
    this.methods['file()on()orPath()otherwise'] =
        function util_file_on_orPath_otherwise (argcv, fn, origin, pth, blk) {
        var jsFn = fn._value;
        if (fileExists(jsFn)) return fn;
        return callmethod(blk, "apply", [1], new GraceString("gct cache"));
    };
    this.methods['file()onPath()otherwise'] = function (argcv, fn, p, blk) {
        var jsFn = fn._value;
        if (fileExists(jsFn)) return fn;
        return callmethod(blk, "apply", [1], new GraceString("gct cache"));
    };
    this.methods.sourceDir = function util_sourceDir(argcv) {
        return new GraceString("./");
    };
    this.methods.execDir = function util_execDir(argcv) {
        return new GraceString("./");
    };
    this.methods.type_error = function util_type_error(argcv, s) {
        minigrace.stderr_write(minigrace.modname + ".grace:" + this._linenum._value + ":" +
            this._linepos._value + ": type error: " + s._value + "\n");
        throw "ErrorExit";
    };
    // This is called by various wrapper methods in the errormessages module.
    // The parameters are as follows:
    // - message: The text of the error message.
    // - errlinenum: The line number on which the error occurred.
    // - position: A string used to show the position of the error in the error message.
    // - arr: The string used to draw an arrow showing the position of the error.
    // - spacePos: The position in the error line that a space should be inserted, or false.
    // - suggestions: A (possibly empty) list of suggestions to correct the error.
    this.methods['syntaxError'] = function util_syntaxError(argcv, message, errlinenum, position, arr, spacePos, suggestions) {
        callmethod(this, "generalError", [6], new GraceString("Syntax error: " + message._value), errlinenum,
            position, arr, spacePos, suggestions);
    };
    this.methods['generalError'] = function util_generalError(argcv, message, errlinenum, position, arr, spacePos, suggestions) {
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
    };
    this.methods.semantic_error = function util_semantic_error(argcv, s) {
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
    };
    this.methods.warning = function util_warning(argcv, s) {
        minigrace.stderr_write(minigrace.modname + ".grace:" + this._linenum._value + ":" +
            this._linepos._value + ": warning: " + s._value + "\n");
    };
    this.methods.hex = function util_hex(argcv, n) {
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
    };
    this.methods.join = function util_join(argcv, joiner, iterable) {
        var s = "";
        var ind = callmethod(iterable, "indices", [0]);
        for (var i=0; i<ind._value.length; i++) {
            if (i > 0)
                s += ",";
            s += callmethod(callmethod(iterable, "at", [1], new GraceNum(i + 1)),
                    "asString", [0])._value;
        }
        return new GraceString(s);
    };
    this.methods.split = function util_split(argcv, str, by) {
        var r = [];
        var pts = str._value.split(by);
        for (var i=0; i<pts.length; i++)
            r.push(new GraceString(pts[i]));
        return new GraceList(r);
    };
    this.methods.extensions = function util_extensions(argcv) {
        return extensionsMap;
    };
    this.methods.processExtension = function util_processExtension(argcv, ext) {
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
    };
    this.methods['lines'] = function util_lines(argcv) {
        return this._lines;
    };
    this.methods['cLines'] = function util_cLines(argcv) {
        return this._cLines;
    };
    this.methods['lines:='] = function util_lines_set(argcv, v) {
        this._lines = v;
        return GraceDone;
    };
    this.methods['cLines:='] = function util_cLines_set(argcv, v) {
        this._cLines = v;
        return GraceDone;
    };
    this.methods.suggestion = function util_suggestion() {
        return this._suggestion;
    };
    this._linenum = new GraceNum(1);
    this._linepos = new GraceNum(1);
    this._lines = new GraceList([]);
    this._cLines = new GraceList([]);
    this._suggestion = new Grace_allocObject();

    this._suggestion.methods['new'] = function(argcv, line, code) {
        var suggestion = new Grace_allocObject();
        suggestion.methods['line'] = function() {
            return line;
        };
        suggestion.methods['code'] = function() {
            return code;
        };
        return suggestion;
    };
    util_module = this;
    return this;
}

if (typeof(process) == "undefined" && typeof gctCache !== "undefined")
    gctCache['util'] = "path:\n util\nclasses:\npublic:\n recurse\n recurse:=\n dynamicModule\n dynamicModule:=\n importDynamic\n importDynamic:=\n jobs\n jobs:=\n cLines\n cLines:=\n lines\n lines:=\n filename\n filename:=\n errno\n errno:=\n parseargs\n previousElapsed\n previousElapsed:=\n previousCPU\n previousCPU:=\n log_verbose\n outprint\n syntaxError\n generalError\n type_error\n semantic_error\n warning\n verbosity\n outfile\n infile\n modname\n runmode\n buildtype\n interactive\n gracelibPath\n setline\n setPosition\n linenum\n linepos\n vtag\n noexec\n target\n extensions\n sourceDir\n execDir\n splitPath\n file()on()orPath()otherwise\n file()onPath()otherwise\n requiredModules\n processExtension\n printhelp\n debug\n hex\nconfidential:\nfresh-methods:\nmodules:\n mgcollections\n buildinfo\n sys\n io\n";

var interactive_module = false;
function gracecode_interactive() {
    return this;
}

function GraceMirrorMethod(o, k) {
    this.name = k;
    this.obj = o;
    this.superobj = new GraceObject();
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

function methodMirror_hash (argcv, argList) {
    return callmethod(new GraceString(this.name), "hash", [0]);
}

GraceMirrorMethod.prototype.methods['hashcode'] = methodMirror_hash;
GraceMirrorMethod.prototype.methods['hash'] = methodMirror_hash;



function GraceMirror(subj) {       // constructor function
    this.superobj = new GraceObject();
    this.subject = subj;
    this.mutable = false;
    this.definitionModule = "mirrors";
    this.definitionLine = 0;
}

GraceMirror.prototype = {
    methods: {
        methods: function mirror_methods(argcv) {
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
        methodNames: function mirror_methodName(argcv) {
            var meths = callmethod(GraceSetClass(), "empty", [0])
            var current = this.subject;
            while (current != null) {
                for (var k in current.methods)
                    callmethod(meths, "add", [1], new GraceString(k));
                current = current.superobj;
            }
            return meths;
        },
        superobject: function mirror_superobject (argcv) {
            return this.superobj;
        },
        superobjectMirror: function mirror_superobject(argcv) {
            return new GraceMirror(this.superobj);
        },
        getMethod: function mirror_getMethod (argcv, methName) {
            var name = methName._value;
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
        }
    },
    className: 'objectMirror'
};

function gracecode_mirrors() {
    this.methods['loadDynamicModule'] = function(argcv, v) {
        var moduleFunc;
        var modName = v._value;
        var slash = modName.lastIndexOf("/");
        if (slash >= 0) modName = modName.substring(slash+1);
        try {
            moduleFunc = eval("gracecode_" + modName);
        } catch (e) {
            throw new GraceExceptionPacket(ImportErrorObject,
                       new GraceString("Can't find module " + v._value))
        }
        try {
            return do_import(v._value, moduleFunc);
        } catch (e) {
            throw new GraceExceptionPacket(ProgrammingErrorObject,
                                           new GraceString("Error importing module " + v._value));
        }
    };
    this.methods['reflect'] = function(argcv, o) {
        return new GraceMirror(o);
    };
    return this;
}

if (typeof gctCache !== "undefined")
    gctCache['mirrors'] = "path:\n mirrors\nclasses:\npublic:\n Mirror\n MethodMirror\n ArgList\n loadDynamicModule\n reflect\nconfidential:\nfresh-methods:\n reflect\nfresh:reflect:\n basicAsString\n asDebugString\n ::\n methodNames\n ==\n !=\n getMethod\n methods\n ≠\n self\n asString\nmodules:\n";


function gracecode_math() {
    this.methods['asString'] = function math_asString(argcv) {
        return new GraceString('the "math" module');
    };
    this.methods['asDebugString'] = function math_asDebugString(argcv) {
        return callmethod(this, "asString", [0]);
    };
    this.methods['sin'] = function math_sin(argcv, a) {
        return new GraceNum(Math.sin(a._value));
    };
    this.methods['cos'] = function math_cos(argcv, a) {
        return new GraceNum(Math.cos(a._value));
    };
    this.methods['tan'] = function math_tan(argcv, a) {
        return new GraceNum(Math.tan(a._value));
    };
    this.methods['asin'] = function math_asin(argcv, a) {
        return new GraceNum(Math.asin(a._value));
    };
    this.methods['acos'] = function math_acos(argcv, a) {
        return new GraceNum(Math.acos(a._value));
    };
    this.methods['atan'] = function math_atan(argcv, a) {
        return new GraceNum(Math.atan(a._value));
    };
    this.methods['random'] = function math_random(argcv) {
        return new GraceNum(Math.random());
    };
    this.methods['pi'] = function math_pi(argcv) {
        return new GraceNum(3.141592653589793)
    };
    this.methods['π'] = function math_π(argcv) {
        return new GraceNum(3.141592653589793)
    };
    this.methods['sqrt'] = function math_sqrt(argcv, a) {
        return new GraceNum(Math.sqrt(a._value));
    };
    this.methods['abs'] = function math_abs(argcv, a) {
        return new GraceNum(Math.abs(a._value));
    };
    this.methods['lg'] = function math_lg(argcv, a) {
        return new GraceNum(Math.log(a._value) / Math.LN2);
    };
    this.methods['ln'] = function math_ln(argcv, a) {
        return new GraceNum(Math.log(a._value));  // JavaScript's log is base e!
    };
    this.methods['exp'] = function math_exp(argcv, a) {
        return new GraceNum(Math.exp(a._value));
    };
    this.methods['log10'] = function math_log10(argcv, a) {
        return new GraceNum(Math.log(a._value) / Math.LN10);
    };
    return this;
}

if (typeof gctCache !== "undefined")
    gctCache['math'] = "modules:\nfresh-methods:\npath:\n math\nclasses:\npublic:\n  asString\n asDebugString\n sin\n cos\n tan\n asin\n acos\n atan\n random\n π\n pi\n sqrt\n abs\n lg\n ln\n exp\n log10\nconfidential:\n";


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

function safeJsString (obj) {
    var objString
    try {
        objString = callmethod(obj, "asString", [0])._value;
    } catch (e) {
        objString = "(without string representation)"
    }
    return objString;
}

function GraceCallStackToString() {
    var errorLine = this.lineNumber;
    if (typeof(errorLine) == "undefined" || errorLine == 0) {
       var errorString = this.className + "." + this.methname + " in " + this.moduleName;
    } else {
       var errorString = this.className + "." + this.methname + " at line " + errorLine + " of " + this.moduleName;
    }
    return errorString;
}

function callmethod(obj, methname, argcv) {
    if (typeof obj == 'undefined')
        throw new GraceExceptionPacket(ProgrammingErrorObject,
                new GraceString("Requested method '" + methname + "' on uninitialised value."));
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
                new GraceString("no method '" + methname + "' in " +
                    obj.className + " " + safeJsString(obj) + "."));
    }
    if (meth.confidential && !onSelf) {
        throw new GraceExceptionPacket(NoSuchMethodErrorObject,
                new GraceString("Requested confidential method '" + methname + "' on " + obj.className + " " + safeJsString(obj) + " from outside."));
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
    callStack.push({className: obj.className, methname: methname, moduleName: moduleName, lineNumber: lineNumber, toString: GraceCallStackToString});
    try {
        var args = Array.prototype.slice.call(arguments, 3);
        for (var i=0; i<args.length; i++)
            if (typeof args[i] == 'undefined')
                throw new GraceExceptionPacket(
                           ProgrammingErrorObject,
                           new GraceString("Uninitialised value used as argument to "
                                           + methname + "' in " + obj.className + " "
                                           + safeJsString(obj) + "."));
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
    this.superobj = new GraceObject();
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
        },
        "reraise": function exception_reraise(argcv) {
            throw this;
        }
    },
    exctype: 'graceexception'
};

function GraceException(name, parent) {
    this.name = name;
    this.parent = parent;
    this.superobj = new GraceObject();
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
    superDepth = (modname === "StandardPrelude") ? Grace_prelude : new GraceModule(modname);
    // importing "StandardPrelude" adds to the built-in prelude.
    try {
        var f = Function.prototype.call.call(func, superDepth);
        return f;
    } finally {
        superDepth = origSuperDepth;
        importedModules[modname] = f;
    }
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
    return s + "}";
}

function dbg(o) {
    minigrace.stderr_write(dbgp(o, 0) + "\n");
}

var extensionsMap = callmethod(var_HashMap, "new", [0]);
var GraceDone = Grace_allocObject(null, "done");
GraceDone.methods.asString = function done_asString() {
    return new GraceString("done");
};
GraceDone.methods.asDebugString = function done_asDebugString() {
    return new callemethod(this, "asString", [0]);
};

var ellipsis = Grace_allocObject(GraceObject, "ellipsis");
ellipsis.methods.asString = function ellipsis_asString() {return new GraceString("...");}

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
// Define "Grace_prelude" as a Grace object to which some methods are added here,
// and to which more methods will be added by the compiled StandardPrelude module
// when it is loaded.
//

var Grace_prelude = new GraceModule("StandardPrelude");

Grace_prelude.methods['true()object'] = function prelude_true_object (argcv) {
    return GraceTrue;
}
Grace_prelude.methods['false()object'] = function prelude_false_object (argcv) {
    return GraceFalse;
}
Grace_prelude.methods['Exception'] = function(argcv) {
    return ExceptionObject;
}
Grace_prelude.methods['Error'] = function(argcv) {
    return ErrorObject;
}
Grace_prelude.methods['ProgrammingError'] = function(argcv) {
    return ProgrammingErrorObject;
}
Grace_prelude.methods['EnvironmentException'] = function(argcv) {
    return EnvironmentExceptionObject;
}
Grace_prelude.methods['ResourceException'] = function(argcv) {
    return ResourceExceptionObject;
}
Grace_prelude.methods['RuntimeError'] = function(argcv) {
    return RuntimeErrorObject;
}
Grace_prelude.methods['TypeError'] = function(argcv) {
    return TypeErrorObject;
}
Grace_prelude.methods['NoSuchMethod'] = function(argcv) {
    return NoSuchMethodErrorObject;
}
Grace_prelude.methods['BoundsError'] = function(argcv) {
    return BoundsErrorObject;
}
Grace_prelude.methods['while()do'] = function(argcv, c, b) {
    if (c.className == "Boolean" || c.className == "Number")
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected Block for first argument of "
                            + "while()do, got " + c.className + "."));
    if (Grace_prelude.methods['while()do'] &&
            Grace_prelude.methods['while()do'].safe) {
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
Grace_prelude.methods['for()do'] = function(argcv, c, b) {
    var iter = callmethod(c, "iterator", [0]);
    while (Grace_isTrue(callmethod(iter, "hasNext", [0]))) {
        var val = callmethod(iter, "next", [0]);
        callmethod(b, "apply", [1], val);
    }
    return GraceDone;
}
Grace_prelude.methods['identical'] = function prelude_identical (argcv, a, b) {
    if (a === b) return GraceTrue; else return GraceFalse;
}
Grace_prelude.methods['different'] = function prelude_different (argcv, a, b) {
    if (a !== b) return GraceTrue; else return GraceFalse;
}
Grace_prelude.methods['_methods'] = function() {
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

Grace_prelude.methods['clone'] = function prelude_clone (argcv, obj) {
    return clone(obj);
}

function clone (obj) {
//   shallow copy, except up the superchain
    var copy = new GraceObject();
    if (obj.superobj)
        copy.superobj = clone(obj.superobj);
    copy.className = obj.className;
    copy.methods = obj.methods;
    copy.mutable = obj.mutable;
    copy.definitionModule = obj.definitionModule;
    copy.definitionLine = obj.definitionLine;
    for (var attr in obj.data) {
        if (obj.data.hasOwnProperty(attr))
            copy.data[attr] = obj.data[attr];
    }
    return copy;
}
Grace_prelude.methods['become'] = function(argcv, a, b) {
    for(var k in a) {
        var t = a[k];
        a[k] = b[k];
        b[k] = t;
    }
    return GraceDone;
}

Grace_prelude.methods['inBrowser'] = function(argcv) {
    if (typeof global == "undefined") return GraceTrue
        else return GraceFalse;
}

var PrimitiveArrayClass = Grace_allocObject();
PrimitiveArrayClass.methods['new'] = function(argcv, n) {
    return new GracePrimitiveArray(n._value);
}

Grace_prelude.methods['PrimitiveArray'] = function() { return PrimitiveArrayClass; };
Grace_prelude.methods['primitiveArray'] = function() { return PrimitiveArrayClass; };

Grace_prelude.methods['engine'] = function prelude_engine(argcv) {
    return new GraceString("js");
};

//
//  Access methods declared in Grace's standard prelude
//

var _point2DClass;
function GracePoint2DClass() {
    if (!_point2DClass)
        _point2DClass = callmethod(Grace_prelude, "point2D", [0]);
    return _point2DClass
}

var _bindingClass;
function GraceBindingClass() {
    if (!_bindingClass)
        _bindingClass = callmethod(Grace_prelude, "binding", [0]);
    return _bindingClass
}

var _rangeClass;
function GraceRangeClass() {
    if (!_rangeClass)
        _rangeClass = callmethod(Grace_prelude, "range", [0]);
    return _rangeClass
}

var _setClass;
function GraceSetClass() {
    if (!_setClass)
        _setClass = callmethod(Grace_prelude, "set", [0]);
    return _setClass
}

var _sequenceClass;
function GraceSequenceClass() {
    if (!_sequenceClass)
        _sequenceClass = callmethod(Grace_prelude, "sequence", [0]);
    return _sequenceClass
}

var _listClass;
function GraceListClass() {
    if (!_listClass)
        _listClass = callmethod(Grace_prelude, "list", [0]);
    return _listClass
}


// these names are used in the generated code.
// __95__ is the escape for _
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
    // NOTE: intentionally exclude gracecode_util
    // We use the stub JS version only on the web!
    // For the node version, we do want util.grace
    // global.gracecode_util = gracecode_util;
    global.GraceBlock = GraceBlock;
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
    global.GracePrimitiveArray = GracePrimitiveArray;
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
    global.type_Block = type_Block;
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
    global.var_GraceType = var_GraceType;
    global.var_Number = var_Number;
    global.var_Object = var_Object;
    global.var_String = var_String,
    global.var_Unknown = var_Unknown;
};
