"use strict";

if(typeof(process) !== "undefined") {
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
    this.className = "graceObject";
    this.mutable = false;
    this.definitionModule = "unknown";
    this.definitionLine = 0;
}

function object_notEquals (argcv, o) {
    var b = callmethod(this, "==", [1], o);
    return callmethod(b, "not", [0]);
}

function object_equals (argcv, o) {
    return callmethod(Grace_prelude, "identical", [2], this, o);
}
function object_basicAsString (argcv) {
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
}
function object_asString (argcv) {
    if (!this.className || this.className.length === 0)
        return new GraceString("an object");
    var firstChar = this.className[0];
    var article = ("aeio".indexOf(firstChar) >= 0)? "an " : "a ";
    return new GraceString(article + this.className);
}
function object_asDebugString (argcv) {
    return callmethod(this, "asString", [0]);
}
function object_debugValue (argcv) {
    return new GraceString("object");
}
function object_debugIterator (argcv) {
    return new GraceIterator(this.data);
}
function object_colonColon (argcv, other) {
    return callmethod(GraceBindingClass(), "key()value", [1, 1], this, other);
}

GraceObject.prototype = {
    methods: {
        "==":               object_equals,
        "!=":               object_notEquals,
        "≠":                object_notEquals,
        "basicAsString":    object_basicAsString,
        "asString":         object_asString,
        "asDebugString":    object_asDebugString,
        "debugValue":       object_debugValue,
        "debugIterator":    object_debugIterator,
        "::":               object_colonColon
    }
//    data: {}  The prototype should NOT have a data object — data should go in the
//    child (non-shared) object.
};

function GraceTrait() {       // constructor function
    // gets its methods from the prototype.  Don't add to them!
    this.superobj = null;
    this.data = {};
    this.className = "graceTrait";
    this.mutable = false;
    this.definitionModule = "unknown";
    this.definitionLine = 0;
}

function trait_asString (argcv) {
    if (!this.className || this.className.length === 0)
        return new GraceString("a trait");
    var firstChar = this.className[0];
    var article = ("aeio".indexOf(firstChar) >= 0)? "an " : "a ";
    return new GraceString(article + this.className + " trait");
}

GraceTrait.prototype = {
    methods: {
        "==":               object_equals,
        "!=":               object_notEquals,
        "≠":                object_notEquals,
        "basicAsString":    object_basicAsString,
        "asString":         trait_asString,
        "asDebugString":    object_asDebugString,
        "debugValue":       object_debugValue,
        "debugIterator":    object_debugIterator,
        "::":               object_colonColon
    }
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
function string_at(argcv, where) {
    var idx = where._value;
    var s = this._value;
    var jrv = s[idx-1];   // don't use charAt(): [] gives undefined for non-integers
    if (jrv) return new GraceString(jrv);

    // now deal with the error conditions:
    var msgstr = (s.length <= 20) ? s : (s.substr(0, 17) + "…");
    if (where.className === "number") {
        if (idx > s.length) {
            throw new GraceExceptionPacket(BoundsErrorObject,
                new GraceString('"' + msgstr + '".at(' + idx + ') but string.size = ' + s.length));
        }
        if (idx < 1) {
            throw new GraceExceptionPacket(BoundsErrorObject,
                new GraceString('"' + msgstr + '".at(' + idx + ') but strings are indexed from 1'));
        }
    }
    throw new GraceExceptionPacket(TypeErrorObject,
        new GraceString("argument to 'at' on string \"" + msgstr + "\" is not an integer"));
}

function string_curriedAt(idx) {
    var s = this._value;
    if (idx > s.length) {
        var msgstr = (s.length <= 20) ? s : (s.substr(0, 17) + "…");
        throw new GraceExceptionPacket(BoundsErrorObject,
            new GraceString('"' + msgstr + "\".at(" + idx + ") but string.size = " + s.length));
    }
    return new GraceString(s.charAt(idx-1));
}

function string_hash(argcv) {
    if (typeof this._hash === 'undefined') {
        var hc = 0;
        for (var i=0; i<this._value.length; i++) {
            hc *= 23;
            hc += this._value.charCodeAt(i);
            hc = hc & hc;
        }
        this._hash = new GraceNum(Math.abs(hc));
    }
    return this._hash;
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
        "first": function() { return string_curriedAt.call(this, 1); },
        "second": function() { return string_curriedAt.call(this, 2); },
        "third": function() { return string_curriedAt.call(this, 3); },
        "fourth": function() { return string_curriedAt.call(this, 4); },
        "fifth": function() { return string_curriedAt.call(this, 5); },
        "last": function() { return string_curriedAt.call(this, this._value.length); },
        "quoted": function(argcv) {
            var s = this._value;
            var tmp = s.replace(/\\/g, '\\\\');
            tmp = tmp.replace(/"/g, '\\"');
            tmp = tmp.replace(/\n/g, '\\n');
            tmp = tmp.replace(/\t/g, '\\t');
            return new GraceString(tmp);
        },
        "_escape": function(argcv) {
            // Used by the genc compiler backend to help generate utf-8.
            // This implementation is inadequate for any other purpose;
            // it works only for the particular strings thrown at it
            // by genc.  *Not* part of the documented string interface.
            var tmp = callmethod(this, "replace()with", [2],
                    new GraceString("\\"), new GraceString("\\\\"));
            tmp = callmethod(tmp, "replace()with", [2],
                    new GraceString("\""), new GraceString("\\22"));
            tmp = callmethod(tmp, "replace()with", [2],
                    new GraceString("\n"), new GraceString("\\0a"));
            tmp = callmethod(tmp, "replace()with", [2],
                    new GraceString("\r"), new GraceString("\\0d"));
            tmp = callmethod(tmp, "replace()with", [2],
                    new GraceString("\u2028"), new GraceString("\\e2\\80\\a8"));
            return tmp;
        },
        "replace()with": function(argcv, what, wth) {
            var s = this._value;
            var os = "";
            var sl = what._value.length;
            var i;
            while ((i = s.indexOf(what._value)) !== -1) {
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
            if (result === -1) { return new GraceNum(0); }
            return new GraceNum(result + 1);
        },
        "indexOf()ifAbsent": function string_indexOf_ifAbsent (argcv, needle, block0) {
            var self = this._value;
            var result = self.indexOf(needle._value);
            if (result === -1) { return callmethod(block0, "apply", [0]); }
            return new GraceNum(result + 1);
        },
        "indexOf()startingAt": function string_indexOf_startingAt (argcv, needle, startPos) {
            var self = this._value;
            var start = startPos._value - 1;
            var result = self.indexOf(needle._value, start);
            if (result === -1) { return new GraceNum(0); }
            return new GraceNum(result + 1);
        },
        "indexOf()startingAt()ifAbsent": function string_indexOf_startingAt_ifAbsent (argcv, needle, startPos, block0) {
            var self = this._value;
            var start = startPos._value - 1;
            var result = self.indexOf(needle._value, start);
            if (result === -1) { return callmethod(block0, "apply", [0]); }
            return new GraceNum(result + 1);
        },
        "lastIndexOf()": function string_lastIndexOf_ifAbsent (argcv, needle, block0) {
            var self = this._value;
            var result = self.lastIndexOf(needle._value);
            if (result === -1) { return new GraceNum(0); }
            return new GraceNum(result + 1);
        },
        "lastIndexOf()startingAt": function string_lastIndexOf_startingAt (argcv, needle, startPos) {
            var self = this._value;
            var start = startPos._value - 1;
            var result = self.lastIndexOf(needle._value, start);
            if (result === -1) { return new GraceNum(0); }
            return new GraceNum(result + 1);
        },
        "lastIndexOf()startingAt()ifAbsent": function string_lastIndexOf_startingAt_ifAbsent (argcv, needle, startPos, block0) {
            var self = this._value;
            var start = startPos._value - 1;
            var result = self.lastIndexOf(needle._value, start);
            if (result === -1) { return callmethod(block0, "apply", [0]); }
            return new GraceNum(result + 1);
        },
        "lastIndexOf()ifAbsent": function string_lastIndexOf (argcv, needle, block0) {
            var self = this._value;
            var result = self.lastIndexOf(needle._value);
            if (result === -1) { return callmethod(block0, "apply", [0]); }
            return new GraceNum(result + 1);
        },
        "contains": function string_contains(argcv, needle) {
            var self = this._value;
            var result = self.indexOf(needle._value);
            if (result === -1) { return GraceFalse; }
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
                    new GraceString('"' + msgstr + "\".substringFrom(" + start +
                          ")to(" + stop + ") but string.size = " + s.length));
            }
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
                    new GraceString('"' + msgstr + "\".substringFrom(" + start +
                          ")size(" + n + ") but string.size = " + s.length));
            }
            return new GraceString(s.substr(start - 1, n));
        },
        "substringFrom": function string_substringFrom_size(argcv, from) {
            var s = this._value;
            var start = from._value;
            var n = s.length;
            // we deliberatly allow "abc".substringFrom 4
            if ((start < 1) || (start > s.length + 1)) {
                var msgstr = s.length <= 20 ? s : (s.substr(0, 17) + "…");
                throw new GraceExceptionPacket(BoundsErrorObject,
                    new GraceString('"' + msgstr + "\".substringFrom(" + start +
                          ") but string.size = " + s.length));
            }
            return new GraceString(s.substr(start - 1, n));
        },
        "startsWith": function string_startsWith(argcv, needle) {
            var self = this._value;
            var n = needle._value;
            if (self.lastIndexOf(n, 0) === 0) return GraceTrue;
            return GraceFalse;
        },
        "endsWith": function string_endsWith(argvc, needle) {
            var self = this._value;
            var n = needle._value;
            var startPosition = self.length - n.length;
            if (startPosition < 1) return GraceFalse;
            var lastIndex = self.lastIndexOf(n, startPosition);
            if (lastIndex === startPosition) return GraceTrue;
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
            var self = callmethod(this, "quoted", [0]);
            var qSelf = callmethod(quote, "++", [1], self);
            var qSelfq = callmethod(qSelf, "++", [1], quote);
            return qSelfq;
        },
        "compare": function string_compare (argcv, that) {
            var self = this._value;
            var other = that._value;
            if (self === other) return new GraceNum(0);
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
        "==": function string_equal(argcv, other) {
            if (this === other)
                return GraceTrue;
            if (this.prototype === other.prototype &&
                  this._value === other._value)
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
            }
            return GraceDone;
        },
        "do()separatedBy": function string_do_sepBy(argcv, action1, separatorAction) {
            var self = this._value;
            var size = self.length;
            var firstTime = true;
            for (var ix = 0; ix < size; ix ++) {
                if (! firstTime)
                    callmethod(separatorAction, "apply", [0]);
                else
                    firstTime = false;
                callmethod(action1, "apply", [1], new GraceString(self[ix]));
            }
            return GraceDone;
        },
        "keysAndValuesDo": function string_do(argcv, action2) {
            var self = this._value;
            var size = self.length;
            for (var ix = 0; ix < size; ix ++) {
                callmethod(action2, "apply", [2], new GraceNum(ix+1), new GraceString(self[ix]));
            }
            return GraceDone;
        },
        "ord": function string_ord (argcv) {
            return new GraceNum(this._value.charCodeAt(0));
        },
        "hashcode": string_hash,
        "hash": string_hash,
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
            if (this._value.charCodeAt(0) === 46) return GraceTrue; else return GraceFalse;
        },
        "startsWithDigit": function string_startsWithDigit (argcv) {
            var s = this._value.charCodeAt(0);
            return ( ( unicode.isCategory(s, "Nd") ||
                       unicode.isCategory(s, "No") ||
                       unicode.isCategory(s, "Nl") ) ? GraceTrue : GraceFalse);
        },
        "startsWithLetter": function string_startsWithLetter (argcv) {
            var c = this._value.charCodeAt(0);
            return ( ( unicode.isCategory(c, "Ll") ||
                       unicode.isCategory(c, "Lu") ||
                       unicode.isCategory(c, "Lo") ||
                       unicode.isCategory(c, "Lm") ) ? GraceTrue : GraceFalse);
        },
        "*": function string_times (argcv, num) {
            // We could adapt the Russian Peasant algorithm for multiplication by addition,
            // but this simpler algorithm will usually use fewer string operations.
            var n;
            if ((num.className !== 'number') || (! Number.isInteger(n = num._value))) {
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("argument to string * method must be an integer"));
            }
            var output = this._value;
            var requiredLength = output.length * n;
            while (output.length < requiredLength) {
                output = output.concat(output);
            }
            output = output.substr(0, requiredLength);
            return new GraceString(output);
        },
        "reverseTimesNumber": function (argcv, num) {
            return callmethod(this, "*", [1], num);
        },
        "map": function string_map(argcv, function1) {
            var collections = callmethod(var___95__prelude, "collections", [0]);
            onSelf = true;
            return callmethod(collections,
                        "lazySequenceOver()mappedBy", [1, 1], this, function1);
        },
        "filter": function string_filter(argcv, predicate1) {
            var self = this._value;
            var size = self.length;
            var result = "";
            for (var ix = 0; ix < size; ix ++) {
                var ch = self[ix];
                if (GraceTrue === callmethod(predicate1, "apply", [1], new GraceString(ch)))
                    result = result + ch;
            }
            return new GraceString(result);
        },
        "fold()startingWith": function string_fold(argcv, block2, initialValue) {
            var self = this._value;
            var size = self.length;
            var accum = initialValue;
            for (var ix = 0; ix < size; ix ++) {
                accum = callmethod(block2, "apply", [2],
                                   accum, new GraceString(self[ix]));
            }
            return accum;
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
            if (other.className === "number") {
                var s = this._value + other._value;
                return new GraceNum(s);
            }
            return callmethod(other, "reversePlusNumber", [1], this);
        },
        "*": function(argcv, other) {
            if (other.className === "number") {
                var s = this._value * other._value;
                return new GraceNum(s);
            }
            return callmethod(other, "reverseTimesNumber", [1], this);
        },
        "/": function(argcv, other) {
            if (other.className === "number") {
                var s = this._value / other._value;
                return new GraceNum(s);
            }
            return callmethod(other, "reverseDivideNumber", [1], this);
        },
        "-": function(argcv, other) {
            if (other.className === "number") {
                var s = this._value - other._value;
                return new GraceNum(s);
            }
            return callmethod(other, "reverseMinusNumber", [1], this);
        },
        "^": function(argcv, other) {
            if (other.className === "number") {
                var s = Math.pow(this._value, other._value);
                return new GraceNum(s);
            }
            return callmethod(other, "reversePowerNumber", [1], this);
        },
        "%": function(argcv, other) {
            if (other.className === "number") {
                var s = this._value % other._value;
                if (s < 0) s = s + Math.abs(other._value);
                return new GraceNum(s);
            }
            return callmethod(other, "reverseRemainderNumber", [1], this);
        },
        "÷": function(argv, other) {
            if (other.className === "number") {
                var quo = this._value / other._value;
                var q = Math.trunc(quo);
                if (this._value >= 0) return new GraceNum(q);
                if (q === quo) return new GraceNum(q);
                if (other._value < 0) return new GraceNum(q + 1);
                return new GraceNum(q - 1);
            }
            return callmethod(other, "reverseDivideNumber", [1], this);
        },
        "@": function(argcv, other) {
            return callmethod(Grace_prelude, "point2Dx()y", [1, 1], this, other);
        },
        "++": function(argcv, other) {
            var t = callmethod(this, "asString", [0]);
            return callmethod(t, "++", [1], other);
        },
        "..": function(argcv, other) {
            return callmethod(GraceRangeClass(), "from()to", [1, 1], this, other);
        },
        "compare": function(argcv, that) {
            var self = this._value;
            var other = that._value;
            if (self === other) return new GraceNum(0);
            if (self > other) return new GraceNum(+1);
            return new GraceNum(-1);
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
        "≤": function(argcv, other) {
            if (this._value <= other._value) return GraceTrue; else return GraceFalse;
        },
        "≥": function(argcv, other) {
            if (this._value >= other._value) return GraceTrue; else return GraceFalse;
        },
        "prefix-": function(argcv) {
            return new GraceNum(-this._value);
        },
        "asString": function(argcv) {
            var num = this._value;
            if (num === Infinity)
                return new GraceString("infinity");
            if (num === -Infinity)
                return new GraceString("-infinity");
            return new GraceString((Math.round(num * 1000000) / 1000000).toString());
        },
        "asDebugString": function(argcv) {
            return new GraceString("" + this._value);
        },
        "==": function(argcv, other) {
            if (this === other)
                return GraceTrue;
            if (this.className === other.className &&
                  this._value === other._value)
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
        "≠": function(argcv, other) {
            var t = callmethod(this, "==", [1], other);
            return callmethod(t, "not", [0]);
        },
        "hash": function num_hash (argcv) {
            var raw = this._value * 13;
            return new GraceNum(Math.abs(raw & raw));  // & converts to 32-bit int
        },
        "hashcode": function num_hashcode (argcv) {
            var raw = this._value * 13;
            return new GraceNum(Math.abs(raw & raw));  // & converts to 32-bit int
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
            while (mine !== 0) {
                var r = mine % base;
                str = symbols[r] + str;
                mine = (mine - r) / base;
            }
            if (before)
                str = before + str;
            return new GraceString(str);
        },
        "isNaN": function Num_isNaN(argcv) {
            if (this._value === this._value) return GraceFalse;
            // This is correct!  NaN is the only value not equal to itself.
            return GraceTrue;
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
        "floor": function(argcv) {
            return new GraceNum(Math.floor(this._value));
        },
        "ceiling": function(argcv) {
            return new GraceNum(Math.ceil(this._value));
        },
        "rounded": function(argcv) {
            return new GraceNum(Math.round(this._value));
        },
        "abs": function(argcv) {
            return new GraceNum(Math.abs(this._value));
        },
        "sqrt": function(argcv) {
            return new GraceNum(Math.sqrt(this._value));
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
            return new GraceString("" + this._value);
        },
        "asDebugString": function(argcv) {
            return new GraceString("" + this._value);
        },
        "==": function(argcv, other) {
            if (this === other)
                return GraceTrue;
            if (this.prototype === other.prototype &&
                    this._value === other._value)
                return GraceTrue;
            return GraceFalse;
        },
        "match": function(argcv, o) {
            if (Grace_isTrue(callmethod(this, "==", [1], o)))
                return new GraceSuccessfulMatch(o);
            return new GraceFailedMatch(o);
        },
        "hash": function(argcv) {
            return new GraceNum(this._value ? 3637 : 1741);
        }
    },
    className: "boolean",
    definitionModule: "unknown",
    definitionLine: 0,
    superobj: new GraceObject()
};

var GraceTrue = new GraceBoolean(true);
var GraceFalse = new GraceBoolean(false);

function GraceList(jsList) {
    var newList = callmethod(GraceListClass(), "empty", [0]);
    for (var ix = 0; ix < jsList.length; ix++) {
        callmethod(newList, "push", [1], jsList[ix]);
    }
    return newList;
}

function PrimitiveGraceList(jsList) {
    this._value = jsList;
}
function prim_list_index(argcv, where) {
    var idx = where._value;
    var result = this._value[idx-1];
    if (result !== undefined) return result;     // fast path
    // Now investigate the cause of the problem:
    if (idx <= 0 || idx > this._value.length)
        throw new GraceExceptionPacket(BoundsErrorObject,
            new GraceString('index ' + idx + ' but list has size ' + this._value.length));
    throw new GraceExceptionPacket(TypeErrorObject,
        new GraceString("argument to 'at' is not an integer"));
}
function prim_list_update(argcv, where, val) {
    var idx = where._value;
    if (idx === undefined)
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 to 'at()put()' is not a Number"));
    if (! (idx > 0 && idx <= (this._value.length + 1)))
        throw new GraceExceptionPacket(BoundsErrorObject,
            new GraceString('index ' + idx + ' but list has size ' + this._value.length));
    this._value[idx-1] = val;
    return this;
}
function list_indices(argcv) {
    var size = this._value.length;
    return callmethod(GraceRangeClass(), "from()to", [1, 1],
                  new GraceNum(1), new GraceNum(size));
}
PrimitiveGraceList.prototype = {
    methods: {
        "push": function(argcv, val) {
            this._value.push(val);
            return this;
        },
        "addFirst": function(argcv, val) {
            this._value.unshift(val);
            return this;
        },
        "addLast": function(argcv, val) {
            this._value.push(val);
            return this;
        },
        "add": function(argcv, val) {
            this._value.push(val);
            return this;
        },
        "unshift": function (argcv, val) {
            this._value.unshift(val);
            return this;
        },
        "remove": function (argcv, val) {
            var list = this._value;
            var index = -1;
            for (var i = 0; i < list.length && index === -1; i++) {
                if (Grace_isTrue(callmethod(val, "==", [1], list[i])))
                    index = i;
            }
            if (index > -1)
                list.splice(index, 1);
            return this;
        },
        "removeFirst": function (argcv, val) {
            var list = this._value;
            if (list.length === 0)
                throw new GraceExceptionPacket(BoundsErrorObject,
                    new GraceString("'removeFirst' requested on empty list"));
            return list.shift();
        },
        "reverse": function (argcv, val) {
            this._value.reverse();
            return this;
        },
        "reversed": function prim_list_reversed (argcv) {
            return new PrimitiveGraceList(this._value.slice().reverse());
        },
        "copy": function list_copy(argcv) {
            return new PrimitiveGraceList(this._value.slice());
        },
        "isEmpty": function list_isEmpty (argcv) {
            return (this._value.length === 0) ? GraceTrue : GraceFalse;
        },
        "size": function list_size (argcv) {
            //dbg("called size: " + this._value.length);
            return new GraceNum(this._value.length);
        },
        "pop": function(argcv) {
            var result = this._value.pop();
            if (result === undefined)
                throw new GraceExceptionPacket(BoundsErrorObject,
                    new GraceString("'pop' requested on list with size " +
                                                        this._value.length));
            return result;
        },
        "at": prim_list_index,
        "first": function list_first(argcv) {
            if (this._value.length < 1)
                throw new GraceExceptionPacket(BoundsErrorObject,
                    new GraceString('[] has no first element'));
            return this._value[0];
        },
        "second": function list_first(argcv) {
            if (this._value.length < 2)
                throw new GraceExceptionPacket(BoundsErrorObject,
                    new GraceString('list of length ' + this._value.length +
                                        ' has no second element'));
            return this._value[1];
        },
        "third": function list_first(argcv) {
            if (this._value.length < 3)
                throw new GraceExceptionPacket(BoundsErrorObject,
                    new GraceString('list of length ' + this._value.length +
                                        ' has no third element'));
            return this._value[2];
        },
        "fourth": function list_first(argcv) {
            if (this._value.length < 4)
                throw new GraceExceptionPacket(BoundsErrorObject,
                    new GraceString('list of length ' + this._value.length +
                                        ' has no fourth element'));
            return this._value[3];
        },
        "fifth": function list_first(argcv) {
            if (this._value.length < 5)
                throw new GraceExceptionPacket(BoundsErrorObject,
                    new GraceString('list of length ' + this._value.length +
                                        ' has no fifth element'));
            return this._value[4];
        },
        "last": function(argcv) {
            var self = this._value;
            if (self.length < 1)
                throw new GraceExceptionPacket(BoundsErrorObject,
                    new GraceString('[] has no last element'));
            return self[self.length-1];
        },
        "[]": prim_list_index,
        "at()put": prim_list_update,
        "at()add": function(argcv, idx, val) {
            this._value.splice(idx._value - 1, 0, val);
            return this;
        },
        "[]:=": function(argcv, where, val) {
            prim_list_update.call(this, argcv, where, val);
            return GraceDone;
        },
        "asString": function(argcv) {
            var s = "[";
            var isFirst = true;
            for (var i=0; i<this._value.length; i++) {
                var obj = this._value[i];
                if (isFirst) {
                    isFirst = false;
                } else {
                    s += ", ";
                }
                try {
                    var m = findMethod(obj, "asString");
                    s += m.call(obj, [0])._value;
                } catch (e) {
                    s += "‹" + dbgp(obj, 2) + "›";
                }
            }
            s += "]";
            return new GraceString(s);
        },
        "asDebugString": function(argcv) {
            var s = "[";
            var isFirst = true;
            for (var i=0; i<this._value.length; i++) {
                var obj = this._value[i];
                if (isFirst) {
                    isFirst = false;
                } else {
                    s += ", ";
                }
                try {
                    var m = findMethod(obj, "asDebugString");
                    s += m.call(obj, [0])._value;
                } catch (e) {
                    s += "‹" + dbgp(obj, 2) + "›";
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
            if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject,
                    new GraceString("wrong number of arguments for ==(1)"));
            var collections = callmethod(var___95__prelude, "collections", [0]);
            onSelf = true;
            return callmethod(collections,
                        "isEqual()toIterable", [1, 1], this, other);
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
            return new PrimitiveGraceList(l);
        },
        "iterator": function(argcv) {
            return new GraceListIterator(this._value);
        },
        "do": function list_do(argcv, action1) {
            if (argcv[0] !== 1)
                callmethod(ProgrammingErrorObject, "raise", [1],
                    new GraceString("wrong number of arguments for do(1)" +
                    "\n argcv[0] = " + argcv[0]));
            var self = this._value;
            var size = self.length;
            for (var ix = 0; ix < size; ix ++) {
                callmethod(action1, "apply", [1], self[ix]);
            }
            return GraceDone;
        },
        "keysAndValuesDo": function list_do(argcv, action2) {
            if (argcv[0] !== 1)
                callmethod(ProgrammingErrorObject, "raise", [1],
                    new GraceString("wrong number of arguments for do(1)" +
                    "\n argcv[0] = " + argcv[0]));
            var self = this._value;
            var size = self.length;
            for (var ix = 0; ix < size; ix ++) {
                callmethod(action2, "apply", [2], new GraceNum(ix+1), self[ix]);
            }
            return GraceDone;
        },
        "do()separatedBy": function list_do_sepBy(argcv, action1, separatorAction) {
            var self = this._value;
            var size = self.length;
            var firstTime = true;
            for (var ix = 0; ix < size; ix ++) {
                if (! firstTime)
                    callmethod(separatorAction, "apply", [0]);
                else
                    firstTime = false;
                callmethod(action1, "apply", [1], self[ix]);
            }
            return GraceDone;
        },
        "indices": list_indices,
        "keys": list_indices,
        "reduce": function(argcv, initial, block) {
            var self = this._value;
            var res = initial;
            for (var i=0; i<self.length; i++) {
                var v = self[i];
                res = callmethod(block, "apply", [2], res, v);
            }
            return res;
        },
        "map": function list_map(argcv, function1) {
            var collections = callmethod(var___95__prelude, "collections", [0]);
            onSelf = true;
            return callmethod(collections,
                        "lazySequenceOver()mappedBy", [1, 1], this, function1);
        },
        "filter": function list_filter(argcv, predicate1) {
            var collections = callmethod(var___95__prelude, "collections", [0]);
            onSelf = true;
            return callmethod(collections,
                        "lazySequenceOver()filteredBy", [1, 1], this, predicate1);
        },
        "fold()startingWith": function(argcv, block, initial) {
            var self = this._value;
            var res = initial;
            for (var i=0; i<self.length; i++) {
                var v = self[i];
                res = callmethod(block, "apply", [2], res, v);
            }
            return res;
        },
        "++": function(argcv, other) {
            var l = this._value.concat(other._value);
            return new PrimitiveGraceList(l);
        },
        "asSet": function list_asSet(argcv, self) {
            var collections = callmethod(var___95__prelude, "collections", [0]);
            var collSet = callmethod(collections, "set", [0]);
            return callmethod(collSet, "withAll", [1], self);
        },
        "asList": function list_asSet(argcv, self) {
            var collections = callmethod(var___95__prelude, "collections", [0]);
            var collSet = callmethod(collections, "list", [0]);
            return callmethod(collSet, "withAll", [1], self);
        },
        "asSequence": function list_asSet(argcv, self) {
            var collections = callmethod(var___95__prelude, "collections", [0]);
            var collSet = callmethod(collections, "sequence", [0]);
            return callmethod(collSet, "withAll", [1], self);
        }
    },
    className: "builtinList",
    definitionModule: "unknown",
    definitionLine: 0,
    superobj: new GraceObject()
};

function GracePrimitiveArray(len) {
    this._value = new Array(len);
//    this._value.fill(undefined);
//    elements are all undefined by default
}

GracePrimitiveArray.prototype = {
    methods: {
        "size": function(argcv) {
            return new GraceNum(this._value.length);
        },
        "at": function(argcv, where) {
            var idx = where._value;
            var result = this._value[idx];
            if (result) return result;
            if (Number.isInteger(idx))
                throw new GraceExceptionPacket(BoundsErrorObject,
                    new GraceString("index " + idx +
                        " in primitive array of size " + this._value.length));
            throw new GraceExceptionPacket(ProgrammingErrorObject,
                    new GraceString("error in 'at' " +
                        " on primitive array of size " + this._value.length));
        },
        "[]": function(argcv, where) {
            var idx = where._value;
            var result = this._value[idx];
            if (result) return result;
            if (Number.isInteger(idx))
                throw new GraceExceptionPacket(BoundsErrorObject,
                    new GraceString('index ' + idx +
                        ' in primitive array of size ' + this._value.length));
            throw new GraceExceptionPacket(ProgrammingErrorObject,
                    new GraceString("error in '[ ]' " +
                        " on primitive array of size " + this._value.length));
        },
        "at()put": function(argcv, idx, val) {
            this._value[idx._value] = val;
            return this;
        },
        "[]:=": function(argcv, idx, val) {
            this._value[idx._value] = val;
            return GraceDone;
        },
        "asString": function(argcv) {
            var s = "[";
            s += this._value.length + ": ";
            for (var i=0; i<this._value.length; i++) {
                if (i !== 0) s += ", ";
                var obj = this._value[i];
                try {
                    var m = findMethod(obj, "asString");
                    s += m.call(obj, [0])._value;
                } catch (e) {
                    s += "‹" + dbgp(obj, 2) + "›";
                }
            }
            s += "]";
            return new GraceString(s);
        },
        "asDebugString": function(argcv) {
            var s = "primArray(";
            s += this._value.length + ": ";
            for (var i=0; i<this._value.length; i++) {
                if (i !== 0) s += ", ";
                var obj = this._value[i];
                try {
                    var m = findMethod(obj, "asDebugString");
                    s += m.call(obj, [0])._value;
                } catch (e) {
                    s += "‹" + dbgp(obj, 2) + "›";
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
            if (this === other)
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
            var origLength = this._value.length;
            this._value.length = length._value;
            function compareFun(a, b) {
                var res = callmethod(compareBlock, "apply", [2], a, b);
                if (res.className === "number") return res._value;
                throw new GraceExceptionPacket(TypeErrorObject,
                       new GraceString("compare block in primitiveArray.sort method " +
                                       "did not return a number"));
            }
            this._value.sort(compareFun);
            this._value.length = origLength;
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
    return callmethod(orClass, "new", [2], l, r);
}

function GraceAndPattern(l, r) {
    var andClass = callmethod(Grace_prelude, "AndPattern", [0]);
    return callmethod(andClass, "new", [2], l, r);
}

function Grace_isTrue(o) {
    if (o._value === false)
        return false;
    if (o._value === true)
        return true;
    if (o.superobj !== null)
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

var GraceMatchResultPrototype = Grace_allocObject(GraceObject,"matchResult");
GraceMatchResultPrototype.methods.result = function() {
    return this.data['result'];
};
GraceMatchResultPrototype.methods.bindings = function() {
    return this.data['bindings'];
};
GraceMatchResultPrototype.methods.asString = function() {
    var s = "";
    if (Grace_isTrue(this)) {
        s = "SuccessfulMatch(result = ";
    } else {
        s = "FailedMatch(result = ";
    }
    s += callmethod(this.data['result'], "asString", [0])._value;
    s += ", bindings = ";
    s += callmethod(this.data['bindings'], "asString", [0])._value;
    s += ")";
    return new GraceString(s);
};
GraceMatchResultPrototype.methods['::'] = function(argcv, other) {
    return callmethod(GraceBindingClass(), "key()value", [1, 1], this, other);
};

function GraceSuccessfulMatch(result, bindings) {
    this.superobj = new GraceBoolean(true);
    this.data = {};
    this.data['result'] = result;
    if (bindings === undefined)
        bindings = GraceEmptySequence();
    this.data['bindings'] = bindings;
    this._value = this.superobj._value;
}
GraceSuccessfulMatch.prototype = GraceMatchResultPrototype;

function GraceFailedMatch(result) {
    this.superobj = new GraceBoolean(false);
    this.data = {};
    this.data['result'] = result;
    this.data['bindings'] = GraceEmptySequence();
    this._value = this.superobj._value;
}
GraceFailedMatch.prototype = GraceMatchResultPrototype;

function GraceTypeIntersection(l, r) {
    var opClass = callmethod(Grace_prelude, "TypeIntersection", [0]);
    return callmethod(opClass, "new", [2], l, r);
}
function GraceTypeUnion(l, r) {
    var opClass = callmethod(Grace_prelude, "TypeUnion", [0]);
    return callmethod(opClass, "new", [2], l, r);
}
function GraceTypeVariant(l, r) {
    var opClass = callmethod(Grace_prelude, "TypeVariant", [0]);
    return callmethod(opClass, "new", [2], l, r);
}
function GraceTypeSubtraction(l, r) {
    var opClass = callmethod(Grace_prelude, "TypeSubtraction", [0]);
    return callmethod(opClass, "new", [2], l, r);
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
                    while (tmp.superobj !== null) {
                        tmp = tmp.superobj;
                        if (tmp.methods[m]) {
                            found = true;
                            break;
                        }
                    }
                    if (!found)
                        return new GraceFailedMatch(other);
                }
            }
            return new GraceSuccessfulMatch(other);
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
        "asDebugString": function type_asDebugString (argcv) {
            return new GraceString("built-in type " + this.name);
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
    methods: {
        "apply": GraceBlock_apply,
        "applyIndirectly": function GraceBlock_applyIndirectly (argcv, a) {
            var argList = a._value || a.data.jsArray ;
            // APB: 2015 09 08.  This is a horrible hack.
            // a._value          => a is a PrimitiveGraceList
            // a.data.jsArray    => a is a native code list from collectionsPrelude
            // in these cases, extract the JS Array burried in the object.
            if (! argList) {
                argList = [];
                var iter = callmethod(a, "iterator", [0]);
                while (Grace_isTrue(callmethod(iter, "hasNext", [0]))) {
                    var arg = callmethod(iter, "next", [0]);
                    argList.push(arg);
                }
            }
            return this.real.apply(this.receiver, argList);
        },
        "outer": function GraceBlock_outer () {
            return callmethod(this.receiver, 'outer', [0]);
        },
        "match": GraceBlock_match,
        "asString": function GraceBlock_asString (argcv) {
            return new GraceString("block<" + this.definitionModule +
                                   ":" + this.definitionLine + ">");
        }
    },
    className: "block",
    superobj: new GraceObject()
};

function GraceBlock_apply(argcv) {
    var args = Array.prototype.slice.call(arguments, 1);
        // makes a copy of arguments, without element at index 0
    var len = args.length;
    if (args.length !== this.numParams) {
        var plural = (len === 1) ? "" : "s";
        throw new GraceExceptionPacket(ProgrammingErrorObject,
            new GraceString("block applied to " + len + " argument" +
                plural + " where " + this.numParams + " expected."));
    }
    var match;
    superDepth = this.receiver;
    if (this.pattern) {
        match = callmethod(this.pattern, "match", [1], args[0]);
        if ( ! Grace_isTrue(match)) {
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument to block.apply has wrong type."));
        }
    } else if (this.paramTypes) {
        for (var ix=0; ix < this.paramTypes.length; ix++) {
            match = callmethod(this.paramTypes[ix], "match", [1], args[ix]);
            if ( ! Grace_isTrue(match)) {
                var n = ix + 1;
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("argument " + n +
                        " to block.apply has wrong type."));
            }
        }
    }
    return this.real.apply(this.receiver, args);
}

function GraceBlock_match(argcv, o) {
    if (!this.pattern) {
        if (argcv.length !== 1 || argcv[0] !== 1) {
            throw new GraceExceptionPacket(ProgrammingErrorObject,
                    new GraceString("Block is not a matching block"));
        }
        var rv1 = callmethod(this, "apply", [1], o);
        return new GraceSuccessfulMatch(rv1);
    }
    var match = callmethod(this.pattern, "match", [1], o);
    if (Grace_isTrue(match)) {
        var bindings = callmethod(match, "bindings", [0]);
        var rv2 = callmethod(this, "applyIndirectly", [1], bindings);
        return new GraceSuccessfulMatch(rv2);
    }
    return new GraceFailedMatch(o);
}

function classType(obj) {
    var t = new GraceType(capitalize(obj.className));
    var o = obj;
    while (o !== null) {
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
    var_Object.name = "Object";
    // type Object is an exception to the normal naming rule
var var_Type = classType(var_Boolean);
var type_String = var_String;
var type_Number = var_Number;
var type_Boolean = var_Boolean;
var type_Object = var_Object;
var type_Unknown = var_Unknown;
var type_Type = var_Type;
var var_Block = new GraceType("Block");
var_Block.typeMethods.push("apply");
var_Block.typeMethods.push("applyIndirectly");
var_Block.typeMethods.push("match");
var type_Block = var_Block;
var type_Done = var_Done;

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
GraceHashMap.prototype = Grace_allocObject(GraceObject, "hashMap");
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
};
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
};
GraceHashMap.prototype.methods.contains = function(argcv, k) {
    var hc = callmethod(k, "hashcode", [0]);
    hc = hc._value;
    while (this.table[hc]) {
        if (Grace_isTrue(callmethod(this.table[hc].key, "==", [1], k)))
            return GraceTrue;
        hc++;
    }
    return GraceFalse;
};
GraceHashMap.prototype.methods.asString = function() {
    var s = "[{";
    var first = true;
    for (var h in this.table) {
        var p = this.table[h];
        if (first)
            first = false;
        else
            s += ", ";
        s += callmethod(p.key, "asString", [0])._value;
        s += "::";
        s += callmethod(p.value, "asString", [0])._value;
    }
    s += "}]";
    return new GraceString(s);
};
GraceHashMap.prototype.methods.asDebugString = GraceHashMap.prototype.methods.asString;

function GraceListIterator(l) {
    this._value = l;
    this._index = 0;
    this._max = l.length;
}
GraceListIterator.prototype = Grace_allocObject(GraceObject, "listIterator");
GraceListIterator.prototype.methods.hasNext = function() {
    return ((this._index < this._max) ? GraceTrue : GraceFalse);
};
GraceListIterator.prototype.methods.next = function() {
    if (this._index < this._max) {
        var rv = this._value[this._index];
        this._index++;
        return rv;
    }
    var ie = callmethod(var___95__prelude, "IteratorExhausted", [0]);
        throw new GraceExceptionPacket(ie, "on built-in list " + this._value);
};

function GraceStringIterator(s) {
    this._value = s._value;
    this._index = 0;
    this._max = s._value.length;
    this.superobj = new GraceObject();
    this.className = "stringIterator";
}
GraceStringIterator.prototype = {
    methods: {
        hasNext: function() {
            return ((this._index < this._max) ? GraceTrue : GraceFalse);
        },
        next: function() {
            if (this._index >= this._max) {
                var ie = callmethod(var___95__prelude, "IteratorExhausted", [0]);
                throw new GraceExceptionPacket(ie, "on string " + this._value);
            }
            var rv = new GraceString(this._value.charAt(this._index));
            this._index++;
            return rv;
        },
        asString: function() {
            return new GraceString("a String Iterator over " + this._value);
        }
    }
};

function GraceIterator(obj) {
    this._value = obj;
    this._keys = Object.keys(obj);
    this._keyIndex = 0;
    this._max = this._keys.length;
}
GraceIterator.prototype = Grace_allocObject(GraceObject, "iterator");
GraceIterator.prototype.methods.hasNext = function() {
    return ((this._keyIndex < this._max) ? GraceTrue : GraceFalse);
};
GraceIterator.prototype.methods.next = function() {
    if (this._keyIndex < this._max) {
        var result = this._value[this._keyIndex];
        this._keyIndex++;
        return result;
    }
    var ie = callmethod(var___95__prelude, "IteratorExhausted", [0]);
    throw new GraceExceptionPacket(ie, "on primitiveArray " + this._value);
};

var stdout = Grace_allocObject(GraceObject, "stdout");
stdout.methods.write = function(junk, s) {
    minigrace.stdout_write(s._value);
};
stdout.methods.isatty = function() {
        if(typeof(process) !== "undefined") {
            return Boolean(process.stdout.isTTY) ? GraceTrue : GraceFalse;
        } else {
            return GraceFalse;
        }
};
stdout.methods.close = function() {};

var stdin = Grace_allocObject(GraceObject, "stdin");
stdin.methods.getline = function() {
    return new GraceString(minigrace.stdin_read());
};
stdin.methods.read = function() {
    return new GraceString(minigrace.stdin_read());
};
stdin.methods.iterator = function() {
    return callmethod(new GraceString(minigrace.stdin_read()), "iterator", [0]);
};
stdin.methods.isatty = function() {
        if(typeof(process) !== "undefined") {
            return Boolean(process.stdin.isTTY) ? GraceTrue : GraceFalse;
        } else {
            return GraceFalse;
        }
};
stdin.methods.close = function() {};

var stderr = Grace_allocObject(GraceObject, "stderr");
stderr.methods.write = function(junk, s) {
    minigrace.stderr_write(s._value);
    return GraceDone;
};
stderr.methods.isatty = function() {
        if(typeof(process) !== "undefined") {
            return Boolean(process.stderr.isTTY) ? GraceTrue : GraceFalse;
        } else {
            return GraceFalse;
        }
};
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
    }
};

function GraceModule(name) {
    // The base to which a module adds its contents.  Thus, it is
    // important that 'methods' be a property of the module object itself,
    // and not of a prototype, since 'methods' will be changed.
    var newModuleObject = Grace_allocObject(GraceObject, "module");
    newModuleObject.definitionModule = name;
    newModuleObject.definitionLine = 0;
    newModuleObject.methods.asString = function module_asString(argcv) {
        return new GraceString("the \"" + this.definitionModule + "\" " + this.className);
    };
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
    if (extn === ".js") {
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
        if(typeof(process) !== "undefined") {
            return (fs.existsSync(safeJsString(path)) ? GraceTrue : GraceFalse);
        }
        if (fileExists(path._value)) return GraceTrue;
        return GraceFalse;
    };
    this.methods.system = function(argcv, systemString) {
        if(typeof(process) !== "undefined") {
            try {
                var result = child_process.execSync(safeJsString(systemString),
                                            {stdio: [process.stdin, process.stdout, process.stderr]});
                return GraceTrue;
            } catch(e) {
                return GraceFalse;
            }
        }
        return GraceFalse;
    };
    this.methods.spawn = function(argcv, gCmd, gArgList) {
        if(typeof(process) !== "undefined") {
            var cmd = safeJsString(gCmd);
            var args = [];
            var iter = callmethod(gArgList, "iterator", [0]);
            while (Grace_isTrue(callmethod(iter, "hasNext", [0]))) {
                var arg = callmethod(iter, "next", [0]);
                args.push(safeJsString(arg));
            }
            var result = child_process.spawnSync(cmd, args,
                    {stdio: [process.stdin, process.stdout, process.stderr]});
            var o = Grace_allocObject(GraceObject, "process");
            o.methods['terminated'] = function () { return GraceTrue; };
            o.methods['wait'] = function () { return new GraceNum(result.status); };
            o.methods['status'] = function () { return new GraceNum(result.status); };
            o.methods['success'] = function () { return result.status === 0 ? GraceTrue : GraceFalse; };
            return o;
        }
        return GraceFalse;
    };
    this.methods.open = function(argcv, path, mode) {
        path = callmethod(path, "asString", [0])._value;
        if (typeof(process) !== "undefined") {
            var m = mode._value;
            var o = Grace_allocObject(GraceObject, "fileStream");
            try {
                var f = fs.openSync(path, m);
            } catch(e) {
                throw new GraceExceptionPacket(EnvironmentExceptionObject,
                    new GraceString("Can't open file '" + path + "' for '" + m + "'."));
            }
            if (fs.existsSync(path)) {
                var c = fs.readFileSync(path);
                var a = c.toString().split('\n');
            }
            var i = 0;
            o.methods['write'] = function (argvc, data) { fs.writeSync(f, safeJsString(data)); };
            o.methods['close'] = function () { fs.closeSync(f); };
            o.methods['getline'] = function () { var s = a[i]; i++; return new GraceString(s); };
            o.methods['eof'] = function () { return (i === a.length) ? GraceTrue : GraceFalse; };
            o.methods['read'] = function () { return new GraceString(c.toString()); };
            o.methods['pathname'] = function () { return new GraceString(path); };
            return o;
        }
        var o2 = Grace_allocObject(GraceObject, "fileStream");
        o2.methods['write'] = function io_write () {};
        o2.methods['close'] = function io_close () {};
        var slash = path.lastIndexOf("/");
        if (slash >= 0) path = path.substring(slash+1);
        if (path.substr(path.length - 4) === ".gct") {
            var gctpath = path.substr(0, path.length - 4);
            if (mode._value === "w")
                gctCache[gctpath] = "";
            else if (mode._value === "r") {
                if (typeof gctCache[gctpath] === "undefined")
                    throw new GraceExceptionPacket(EnvironmentExceptionObject,
                           new GraceString("Can't open file '" + gctpath +
                                           ".gct' for 'r'.  File does not exist."));
                else {
                    o2._lines = gctCache[gctpath].split("\n");
                    o2._index = 0;
                }
            }
            o2.methods['write'] = function io_gct_write (argcv, s) {
                gctCache[gctpath] += s._value;
            };
            o2.methods['getline'] = function io_gct_getline (argcv) {
                return new GraceString(this._lines[this._index++]);
            };
            o2.methods['eof'] = function io_gct_eof  () {
                return ((this._index >= this._lines.length) ? GraceTrue : GraceFalse);
            };
        }
        return o2;
    };
    this.methods.realpath = function io_browser_realpath (argcv, x) {
        if(typeof(process) !== "undefined") {
            return new GraceString(fs.realpathSync(safeJsString(x)));
        }
        return x;
    };
    this.methods.listdir = function (argcv, x) {
        if(typeof(process) !== "undefined") {
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
        return GraceTrue;
    };
    return this;
}

function gracecode_sys() {
    var startTime = (new Date).getTime()/1000;
    this.methods.argv = function() {
        if(typeof(process) !== "undefined") {
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
                new GraceString("js")
            ]);
	    }
    };
    this.methods.elapsed = function() {
        return new GraceNum(((new Date).getTime()/1000)-startTime);
    };
    this.methods.elapsedTime = function() {
        return new GraceNum(((new Date).getTime()/1000)-startTime);
    };
    this.methods.exit = function() {
        throw "SystemExit";
    };
    this.methods.execPath = function() {
        return new GraceString(".");
    };
    this.methods.environ = function() {
        var o = Grace_allocObject(GraceObject, "environmentObject");
        o.methods['at'] = function environ_at(argcv, key) {
            if(typeof(process) !== "undefined") {
                var str = safeJsString(key);
                if(str in process.env)
                    return new GraceString(process.env[str]);
            }
            return GraceEmptyString;
        };
        o.methods['[]'] = o.methods['at'];
        o.methods['at()put'] = function environ_at_put(argcv, key, value) {
            if(typeof(process) !== "undefined") {
                var kstr = safeJsString(key);
                var vstr = safeJsString(value);
                process.env[kstr] = vstr;
            }
            return GraceTrue;
        };
        o.methods['[]:='] = o.methods['at()put'];
        o.methods['contains'] = function environ_contains(argcv, searchkey) {
            if(typeof(process) !== "undefined") {
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

if (typeof gctCache !== "undefined")
    gctCache['sys'] = "fresh:environ:\n self\n ≠\n basicAsString\n asDebugString\n ::\n at\n []\n []:=()put\n ==\n at()put\n !=\n contains\n asString\nmodules:\nfresh-methods:\n environ\npath:\n sys\nclasses:\npublic:\n Environment\n argv\n elapsed\n elaspedTime\n exit\n execPath\n environ\nconfidential:\n";

function gracecode_unicode() {
    this.methods.isLetter = function unicode_isLetter(argcv, s) {
        if (typeof s._value === "number")
            s = String.fromCharCode(s._value);
        else s = s._value;
        return ( ( unicode.isCategory(s, "Ll") ||
                   unicode.isCategory(s, "Lu") ||
                   unicode.isCategory(s, "Lo") ||
                   unicode.isCategory(s, "Lm") ) ? GraceTrue : GraceFalse);
    };
    this.methods.isNumber = function unicode_isNumber(argcv, s) {
        if (typeof s._value === "number")
            s = String.fromCharCode(s._value);
        else s = s._value;
        return ( ( unicode.isCategory(s, "Nd") ||
                   unicode.isCategory(s, "No") ||
                   unicode.isCategory(s, "Nl") ) ? GraceTrue : GraceFalse);
    };
    this.methods.isSymbolMathematical = function unicode_isSymbolMathematical(argcv, s) {
        if (typeof s._value === "number")
            s = String.fromCharCode(s._value);
        else s = s._value;
        return ((unicode.isCategory(s, "Sm")) ? GraceTrue : GraceFalse);
    };
    this.methods.isSeparator = function unicode_isSeparator(argcv, s) {
        if (typeof s._value === "number")
            s = String.fromCharCode(s._value);
        else s = s._value;
        return ( ( unicode.isCategory(s, "Zs") ||
                   unicode.isCategory(s, "Zp") ||
                   unicode.isCategory(s, "Zl") ) ? GraceTrue : GraceFalse);
    };
    this.methods.isControl = function unicode_isControl(argcv, s) {
        if (typeof s._value === "number")
            s = String.fromCharCode(s._value);
        else s = s._value;
        return ( ( unicode.isCategory(s, "Cf") ||
                   unicode.isCategory(s, "Cc") ||
                   unicode.isCategory(s, "Co") ||
                   unicode.isCategory(s, "Cs") ) ? GraceTrue : GraceFalse);
    };
    this.methods.inCategory = function unicode_inCategory(argcv, s, c) {
        if (typeof s._value === "number")
            s = String.fromCharCode(s._value);
        else s = s._value;
        return ((unicode.isCategory(s, c._value)) ? GraceTrue : GraceFalse);
    };
    this.methods.iscategory = this.methods.inCategory;
    this.methods.category = function unicode_category(argcv, s) {
        return new GraceString(unicode.category(s._value));
    };
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
                if (typeof t._value === "number") {
                    if (cc === t._value) {
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
                if (this.pos.length === 0)
                    success = true;
                for (var j=0; j<this.neg.length; j++) {
                    var u = this.neg[j];
                    if (typeof u._value === "number") {
                        if (cc === u._value) {
                            success = false;
                            break;
                        }
                    } else {
                        if (unicode.isCategory(cc, u._value)) {
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
var previousElapsed = Math.round(loadDate/10)/100;

function gracecode_util() {
    if (util_module !== false)
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
        return new GraceNum(minigrace.verbosity);
    };
    function util_log_verbose(argcv, level, s) {
        if (minigrace.verbosity >= level._value) {
            var elapsed = Math.round((Date.now() - loadDate)/10); // 10 ms
            elapsed = (elapsed / 100);       // seconds, with 2 decimals
            if (s._value === "starting compilation")
                previousElapsed = elapsed;
            minigrace.stderr_write("minigrace: " + minigrace.modname + ': ' +
                                     elapsed + " (+" +
                                     (elapsed - previousElapsed).toFixed(2) +
                                     "): " + s._value + "\n");
            previousElapsed = elapsed;
        }
        return GraceDone;
    }
    this.methods['log()verbose'] = util_log_verbose;

    this.methods['log_verbose'] = function (argcv, s) {
        util_log_verbose([1, 1], new GraceNum(40), s);
    };
    this.methods.outprint = function util_outprint(argcv, s) {
        minigrace.stdout_write(s._value + "\n");
        return GraceDone;
    };
    var obj_requiredModules = Grace_allocObject(GraceObject, "requiredModules");
    var obj_init_requiredModules = function () {
        var origSuperDepth = superDepth;
        superDepth = obj_requiredModules;
        var meth_isAlready = function(argcv) {    // method isAlready(1)
            var var_moduleName = arguments[1];
            if (argcv[0] !== 1)
                callmethod(ProgrammingErrorObject, "raise", [1], new GraceString("wrong number of arguments for isAlready(1)"));
            setModuleName("util");
            onSelf = true;
            var staticv = callmethod(this, "static", [0]);
            var sc = callmethod(staticv, "contains", [1], var_moduleName);
            if (Grace_isTrue(sc)) {
                return GraceTrue;
            }
            onSelf = true;
            var otherv = callmethod(this, "other", [0]);
            return callmethod(otherv, "contains", [1], var_moduleName);
        };
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
        };
        reader_util_static1257.def = true;
        obj_requiredModules.methods["static"] = reader_util_static1257;
        sourceObject = obj_requiredModules;
        var call1258 = callmethod(Grace_prelude, "list", [0]);
        var call1259 = callmethod(call1258,"empty", [0]);
        obj_requiredModules.data["linkfiles"] = call1259;
        var reader_util_linkfiles1260 = function() {
            return this.data["linkfiles"];
        };
        reader_util_linkfiles1260.def = true;
        obj_requiredModules.methods["linkfiles"] = reader_util_linkfiles1260;
        sourceObject = obj_requiredModules;
        var call1261 = callmethod(Grace_prelude, "set", [0]);
        var call1262 = callmethod(call1261,"empty", [0]);
        obj_requiredModules.data["other"] = call1262;
        var reader_util_other1263 = function() {
            return this.data["other"];
        };
        reader_util_other1263.def = true;
        obj_requiredModules.methods["other"] = reader_util_other1263;
        sourceObject = obj_requiredModules;
        superDepth = origSuperDepth;
    };
    obj_init_requiredModules.apply(obj_requiredModules, []);
    var var_requiredModules = obj_requiredModules;
    var util_requiredmodules = function(argcv) {    // method requiredModules
        var curarg = 1;
        if (argcv[0] !== 0)
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
        for (var i = 0; i < len; i++)
            callmethod(result, "addLast", [1], new GraceString(locations[i]));
        return result;
    };
    this.methods['file()on()orPath()otherwise'] =
        function util_file_on_orPath_otherwise (argcv, fn, origin, pth, blk) {
        var jsFn = callmethod(fn, "asString", [0])._value;
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
    this.methods.outDir = function util_outDir(argcv) {
        return new GraceString("./");
    };
    this.methods['outDir:='] = function util_outDir_gets(argcv, newVal) {
        return GraceDone;
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
        minigrace.stderr_write(minigrace.modname + ".grace[" + errlinenum._value +
            position._value + "]: " + message._value + "\n");

        if ((errlinenum._value > 1) && (callmethod(this._lines, "size", [0])._value > 1))
            minigrace.stderr_write("  " + (errlinenum._value - 1) + ": " +
                callmethod(this._lines, "at",
                    [1], new GraceNum(errlinenum._value - 1))._value + "\n");

        if (callmethod(this._lines, "size", [0])._value >= errlinenum._value) {
            var line = callmethod(this._lines, "at", [1], new GraceNum(errlinenum._value))._value;
            if (spacePos._value !== false) {
                minigrace.stderr_write("  " + errlinenum._value + ": " +
                    line.substring(0, spacePos._value - 1) + " " +
                    line.substring(spacePos._value - 1) + "\n");
            } else {
                minigrace.stderr_write("  " + errlinenum._value + ": " + line + "\n");
            }
            minigrace.stderr_write(arr._value + "\n");
        }

        if (errlinenum._value <
                callmethod(this._lines, "size", [0])._value)
            minigrace.stderr_write("  " + (errlinenum._value + 1) + ": " +
                  callmethod(this._lines, "at", [1],
                        new GraceNum(errlinenum._value + 1))._value + "\n");

        var numsuggestions = callmethod(suggestions, "size", [0]);
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
            minigrace.stderr_write("  " + (this._linenum._value - 1) + ": " +
                callmethod(this._lines, "at", [1],
                    new GraceNum(this._linenum._value - 1))._value + "\n");
        var linenumsize = callmethod(callmethod(this._linenum, "asString", []), "size", []);
        var arr = "----";
        for (var i=1; i<this._linepos._value+linenumsize._value; i++)
            arr = arr + "-";
        minigrace.stderr_write("  " + this._linenum._value + ": " +
                callmethod(this._lines, "at", [1],
                    new GraceNum(this._linenum._value))._value + "\n");
        minigrace.stderr_write(arr + "^\n");
        if (this._linenum._value <
                callmethod(this._lines, "size", [])._value)
            minigrace.stderr_write("  " + (this._linenum._value + 1) + ": " +
                callmethod(this._lines, "at", [1],
                    new GraceNum(this._linenum._value + 1))._value + "\n");
        throw "ErrorExit";
    };
    this.methods.warning = function util_warning(argcv, s) {
        minigrace.stderr_write(minigrace.modname + ".grace:" + this._linenum._value + ":" +
            this._linepos._value + ": warning: " + s._value + "\n");
    };
    this.methods.hex = function util_hex(argcv, n) {
        var hexdigits = "0123456789abcdef";
        var s = "";
        var num = n._value;
        while (num > 0) {
            var i = num % 16;
            s = hexdigits.charAt(i) + s;
            num = num - i;
            num = num / 16;
        }
        return new GraceString(s);
    };
    this.methods.join = function util_join(argcv, joiner, iterable) {
        var s = "";
        var ind = callmethod(iterable, "indices", [0]);
        for (var i=0; i<ind._value.length; i++) {
            if (i > 0)
                s += ", ";
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
    this._suggestion = Grace_allocObject(GraceObject, "class suggestion");

    this._suggestion.methods['new'] = function(argcv, line, code) {
        var suggestion = Grace_allocObject(GraceObject, "suggestion");
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

if (typeof(process) === "undefined" && typeof gctCache !== "undefined")
    gctCache['util'] = "path:\n util\nclasses:\npublic:\n recurse\n recurse:=\n dynamicModule\n dynamicModule:=\n importDynamic\n importDynamic:=\n jobs\n jobs:=\n cLines\n cLines:=\n lines\n lines:=\n filename\n filename:=\n errno\n errno:=\n parseargs\n previousElapsed\n previousElapsed:=\n log_verbose\n outprint\n syntaxError\n generalError\n type_error\n semantic_error\n warning\n verbosity\n outfile\n infile\n modname\n runmode\n buildtype\n interactive\n gracelibPath\n setline\n setPosition\n linenum\n linepos\n vtag\n noexec\n target\n extensions\n sourceDir\n execDir\n splitPath\n file()on()orPath()otherwise\n file()onPath()otherwise\n requiredModules\n processExtension\n printhelp\n debug\n hex\nconfidential:\nfresh-methods:\nmodules:\n stringMap\n buildinfo\n sys\n io\n";

var interactive_module = false;
function gracecode_interactive() {
    return this;
}

function GraceMirrorMethod(o, k) {
    this.name = k;
    this.obj = o;
    this.superobj = new GraceObject();
}
GraceMirrorMethod.prototype = Grace_allocObject(GraceObject, "methodMirror");
GraceMirrorMethod.prototype.methods['asString'] = function(argcv) {
    return new GraceString("mirror on method '" + this.name + "'");
};
GraceMirrorMethod.prototype.methods['name'] = function(argcv) {
    return new GraceString(this.name);
};
GraceMirrorMethod.prototype.methods['partcount'] = function(argcv) {
    var count = 1;
    var place = 1;
    while(place < this.name.length) {
        if(this.name[place] === "(") {
            count++;
            place++;
        }
        place++;
    }
    return new GraceNum(count);
};

GraceMirrorMethod.prototype.methods['paramcounts'] = function(argcv) {
    var theFunction = this.obj.methods[this.name];
    var l = theFunction.paramCounts.length;
    var countArray = new Array(l);
    for (var i = 0; i < l; i++) {
        countArray[i] = new GraceNum(theFunction.paramCounts[i]);
    }
    return new GraceList(countArray);
};

GraceMirrorMethod.prototype.methods['isVariableArity'] = function(argcv) {
    var theFunction = this.obj.methods[this.name];
    var l = theFunction.variableArities.length;
    var boolArray = new Array(l);
    for (var i = 0; i < l; i++) {
        boolArray[i] = theFunction.variableArities[i] ? GraceTrue : GraceFalse;
    }
    return new GraceList(boolArray);
};

GraceMirrorMethod.prototype.methods['request'] = function(argcv, argList) {
    if (! argList) {
        throw new GraceExceptionPacket(ProgrammingErrorObject,
                new GraceString("'request' requires one argument (a list of arg lists)"));
    }
    var theFunction = this.obj.methods[this.name];
    var requiredLen = theFunction.paramCounts.length;
    var providedLen = callmethod(argList, "size", [0])._value;
    if (providedLen !== requiredLen) {
        throw new GraceExceptionPacket(ProgrammingErrorObject,
                   new GraceString("wrong number of argument lists in 'request'" ));
    }
    var allArgs = [this.obj, this.name, []];
    for (var outerIx = 1; outerIx <= providedLen; outerIx++) {
        var innerArray = callmethod(argList, "at", [1], new GraceNum(outerIx));
        var innerSize = callmethod(innerArray, "size", [0])._value;
        allArgs[2].push(innerSize);    // incrementally build list of argument list lengths
        for (var innerIx = 1; innerIx <= innerSize; innerIx++) {
            allArgs.push(callmethod(innerArray, "at", [1], new GraceNum(innerIx)));
        }
    }
    return callmethod.apply(null, allArgs);
};

GraceMirrorMethod.prototype.methods['requestWithArgs'] = function(argcv, argList) {
    if (! argList) {
        throw new GraceExceptionPacket(ProgrammingErrorObject,
                new GraceString("'request' requires one argument (a list of arguments)"));
    }
    var theFunction = this.obj.methods[this.name];
    var paramcv = theFunction.paramCounts;
    var providedLen = callmethod(argList, "size", [0])._value;
    // Don't check that providedLen is correct: the preamble
    // of the requested method will do that.
    var l = theFunction.variableArities.length;
    if (l > 1) {
        var vararg = theFunction.variableArities;
        for (var ix = 0; ix < l; ix++) {
            if (vararg[ix]) {
                    throw new GraceExceptionPacket(ProgrammingErrorObject,
                        new GraceString("'requestWithArgs' cannot be used to request a method with multiple  argument lists if one has variable arity."));
            }
        }
    } else {
        paramcv = [providedLen];
    }
    var allArgs = [this.obj, this.name, paramcv];
    for (var jx = 1; jx <= providedLen; jx++) {
        var arg = callmethod(argList, "at", [1], new GraceNum(jx));
        allArgs.push(arg);
    }
    return callmethod.apply(null, allArgs);
};

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
            while (current !== null) {
                for (var k in current.methods)
                    meths.push(new GraceMirrorMethod(current, k));
                current = current.superobj;
            }
            var l = new GraceList(meths);
            return l;
        },
        methodNames: function mirror_methodName(argcv) {
            var meths = callmethod(GraceSetClass(), "empty", [0]);
            var current = this.subject;
            while (current !== null) {
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
            while (current !== null) {
                if (current.methods[name]) {
                    return (new GraceMirrorMethod(this.subject, name));
                }
                current = current.superobj;
            }
            var exceptionMsg = new GraceString("no method " + name + " in mirror for ");
            var objDescription = callmethod(this.subject, "asString", [0]);
            exceptionMsg = callmethod(exceptionMsg, "++", [1], objDescription);
            throw new GraceExceptionPacket(NoSuchMethodErrorObject, exceptionMsg);
        }
    },
    className: 'objectMirror'
};

function gracecode_mirrors() {
    this.methods['loadDynamicModule'] = function(argcv, v) {
        var modName = v._value;
        var moduleFunc;
        if (typeof process === "undefined") {
            var slash = modName.lastIndexOf("/");
            if (slash >= 0) modName = modName.substring(slash+1);
            try {
                moduleFunc = eval("gracecode_" + modName);
            } catch (e) {
                throw new GraceExceptionPacket(ImportErrorObject,
                           new GraceString("Can't find module " + v._value));
            }
        } else {
            minigrace.loadModule(modName, "./");try {
            moduleFunc = eval("gracecode_" + modName);
            } catch (e) {
                throw new GraceExceptionPacket(ImportErrorObject,
                    new GraceString("Error initializing module " + v._value));
            }
        }
        return do_import(modName, moduleFunc);
    };
    this.methods['reflect'] = function(argcv, o) {
        return new GraceMirror(o);
    };
    return this;
}

if (typeof gctCache !== "undefined")
    gctCache['mirrors'] = "path:\n mirrors\nclasses:\npublic:\n Mirror\n MethodMirror\n ArgList\n loadDynamicModule\n reflect\nconfidential:\nfresh-methods:\n reflect\nfresh:reflect:\n basicAsString\n asDebugString\n ::\n methodNames\n ==\n !=\n getMethod\n methods\n ≠\n self\n asString\nmodules:\n";

var overrideReceiver = null;

function callmethodsuper(obj, methname, argcv) {
    overrideReceiver = obj;
    var args = Array.prototype.slice.call(arguments, 1);
    args.splice(0, 0, superDepth.superobj);
    onSelf = true;
    return callmethod.apply(null, args);
}

function safeJsString (obj) {
    // Don't use callmethod!  This function is called from within callmethod.
    var objString;
    try {
        var m = findMethod(obj, "asString");
        objString = m.call(obj, [0])._value;
    } catch (e) {
        objString = "(without working asString method)";
    }
    return objString;
}

function findMethod (obj, methname) {
    var s = obj;
    var meth = s.methods[methname];
    while ((typeof(meth) !== "function") && (s.superobj !== null)) {
        s = s.superobj;
        meth = s.methods[methname];
    }
    if (typeof(meth) !== "function") meth = null;
    return meth;
}


function GraceCallStackToString() {
    var errorLine = this.lineNumber;
    var errorString = this.className + "." + this.methname;
    if (typeof(errorLine) === "undefined" || errorLine === 0) {
        errorString += " in ";
    } else {
        errorString += " at line " + errorLine + " of ";
    }
    return errorString + this.moduleName;
}

function callmethod(obj, methname, argcv) {
    var meth = obj.methods[methname];
    var origSuperDepth = superDepth;
    var isSuper = false;
    if (overrideReceiver !== null)
        isSuper = true;
    superDepth = obj;
    var origModuleName = moduleName;
    var origLineNumber = lineNumber;
    if (typeof(meth) !== "function") {
        var s = obj;
        isSuper = true;
        while (s.superobj !== null) {
            s = s.superobj;
            meth = s.methods[methname];
            if (typeof(meth) === "function") {
                superDepth = s;
                break;
            }
        }
    }
    if (typeof(meth) !== "function") {
        var objDesc = "";
        if (obj.definitionLine && obj.definitionModule !== "unknown")
            objDesc = " in object at " + obj.definitionModule +
                ":" + obj.definitionLine;
        else if (obj.definitionModule !== "unknown")
            objDesc = " in " + obj.definitionModule + " module";
        callStack.push(obj.className + "." + methname +
                  " (defined nowhere" +
                  objDesc + ")" +
                  " at " + moduleName +
                  ":" + lineNumber);
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
    if (overrideReceiver !== null) {
        obj = overrideReceiver;
        overrideReceiver = null;
    }
    var beforeSize = callStack.length;
    callStack.push({className: obj.className, methname: methname, moduleName: moduleName, lineNumber: lineNumber, toString: GraceCallStackToString});
    try {
        var args = Array.prototype.slice.call(arguments, 3);
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

function callmethodChecked(obj, methname, argcv) {
    if (typeof obj === 'undefined')
        throw new GraceExceptionPacket(ProgrammingErrorObject,
                new GraceString("Requested method '" + methname + "' on uninitialised value."));
    if (! obj.methods) debugger;
    var meth = obj.methods[methname];
    var origSuperDepth = superDepth;
    var isSuper = false;
    if (overrideReceiver !== null)
        isSuper = true;
    superDepth = obj;
    var origModuleName = moduleName;
    var origLineNumber = lineNumber;
    if (typeof(meth) !== "function") {
        var s = obj;
        isSuper = true;
        while (s.superobj !== null) {
            s = s.superobj;
            meth = s.methods[methname];
            if (typeof(meth) === "function") {
                superDepth = s;
                break;
            }
        }
    }
    if (typeof(meth) !== "function") {
        var objDesc = "";
        if (obj.definitionLine && obj.definitionModule !== "unknown")
            objDesc = " in object at " + obj.definitionModule +
                  ":" + obj.definitionLine;
        else if (obj.definitionModule !== "unknown")
            objDesc = " in " + obj.definitionModule + " module";
        callStack.push(obj.className + "." + methname +
                  " (defined nowhere" +
                  objDesc + ")" +
                  " at " + moduleName +
                  ":" + lineNumber);
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
    if (overrideReceiver !== null) {
        obj = overrideReceiver;
        overrideReceiver = null;
    }
    var beforeSize = callStack.length;
    callStack.push({
        className: obj.className,
        methname: methname,
        moduleName: moduleName,
        lineNumber: lineNumber,
        toString: GraceCallStackToString
    });
    try {
        var args = Array.prototype.slice.call(arguments, 3);
        for (var i=0; i<args.length; i++) {
            if (typeof args[i] === 'undefined')
                throw new GraceExceptionPacket(
                       ProgrammingErrorObject,
                       new GraceString("Uninitialised value used as argument to '" +
                                       methname + "' on " + obj.className +
                                       " " + safeJsString(obj) + "."));
        }
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

function tryCatch(obj, cases, finallyblock) {
    setModuleName("try()catch()...finally()");
    setLineNumber(0);
    var ret;
    try {
        return callmethod(obj, "apply");
    } catch (e) {
        if (e.exctype === 'graceexception') {
            for (var i = 0; i < cases.length; i++) {
                ret = callmethod(cases[i], "match", [1], e);
                if (Grace_isTrue(ret))
                    return callmethod(ret, "result", [0]);
            }
            throw e;
        } else {
            throw e;
        }
    } finally {
        if (finallyblock !== false)
            ret = callmethod(finallyblock, "apply");
    }
    return ret;
}

function matchCase(obj, cases, elsecase) {
    setModuleName("match()case()...");
    for (var i = 0; i<cases.length; i++) {
        var ret = callmethod(cases[i], "match", [1], obj);
        if (Grace_isTrue(ret))
            return callmethod(ret, "result", [0]);
    }
    if (elsecase !== false)
        return callmethod(elsecase, "apply", [0]);
    callmethod(ProgrammingErrorObject, "raise", [1],
               new GraceString ("non-exhaustive match in match()case()…."));
    return GraceDone;       // should never happen
}

function ReturnException(v, target) {
    this.returnvalue = v;
    this.target = target;
}

ReturnException.prototype = {
    'exctype': 'return'
};

function GraceExceptionPacket(exception, message, data) {
    this.exception = exception;
    this.message = message;
    this.data = data;
    this.lineNumber = lineNumber;
    this.moduleName = moduleName;
    this.callStack = [];
    this.stackFrames = [];
    for (var i=0; i < callStack.length; i++)
        this.callStack.push(callStack[i].toString());
    for (var j=0; j < stackFrames.length; j++)
        this.stackFrames.push(stackFrames[j]);
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
            return new GraceString(this.exception.name + ": " +
                    this.message._value);
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
                callmethod(bt, "push", [1], new GraceString(this.callStack[i].toString()));
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
            return new GraceException(nm._value, this);
        },
        "raise": function(argcv, msg) {
            if (argcv[0] !== 1)
                throw new GraceExceptionPacket(ProgrammingErrorObject,
                    new GraceString("wrong number of arguments for raise(1)"));
            throw new GraceExceptionPacket(this, msg, new GraceObject());
        },
        "raiseWith": function(argcv, msg, data) {
            if (argcv[0] !== 2)
                throw new GraceExceptionPacket(ProgrammingErrorObject,
                    new GraceString("wrong number of arguments for raiseWith(1)"));
            throw new GraceExceptionPacket(this, msg, data);
        },
        "raise()with": function(argcv, msg, data) {
            if ((argcv[0] !== 1) && (argcv[1] !== 1))
                throw new GraceExceptionPacket(ProgrammingErrorObject,
                    new GraceString("wrong number of arguments for raise(1)with(1)"));
            throw new GraceExceptionPacket(this, msg, data);
        },
        "match": function(argcv, other) {
            if (!other.exception)
                return new GraceFailedMatch(other);
            if (other.exception.name === this.name)
                return new GraceSuccessfulMatch(other);
            var exc = other.exception;
            while (exc) {
                if (exc.name === this.name)
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
            if (o.className !== 'Exception') return GraceFalse;
            if (o.name !== this.name) return GraceFalse;
            if (o.parent !== this.parent) return GraceFalse;
            return GraceTrue;
        },
        "&": function(argcv, o) {
            return new GraceAndPattern(this, o);
        },
        "asString": function(argcv) {
            return new GraceString(this.name);
        },
        "parent": function(argcv) {
            if (this.parent === false)
                return this;
            else
                return this.parent;
        }
    },
    className: 'Exception',
    definitionModule: "unknown",
    definitionLine: 0,
    superobj: new GraceObject()
};

var importedModules = {};

function do_import(modname, moduleCodeFunc) {
    if (importedModules[modname]) {
        return importedModules[modname];
    }
    if (moduleCodeFunc === undefined)
        throw new GraceExceptionPacket(ImportErrorObject,
            new GraceString("Could not find code for module '" + modname + "'"));
    var origSuperDepth = superDepth;
    superDepth = (modname === "StandardPrelude") ? Grace_prelude : new GraceModule(modname);
    // importing "StandardPrelude" adds to the built-in prelude.
    try {
        var f = Function.prototype.call.call(moduleCodeFunc, superDepth);
          // Almost like moduleCodeFunc.call(superDepth), which executes
          // moduleCodeFunc with this === superDepth.  The difference is that we
          // ensure that the `call` function is the one from Function.prototype
        return f;
    } finally {
        superDepth = origSuperDepth;
        importedModules[modname] = f;
    }
}

function dbgp(o, d) {
    if (d === undefined)
        d = 0;
    var ind = "";
    for (var i=0; i<d; i++)
        ind += "  ";
    if (typeof(o) === "undefined") {
        return "undefined";
    }
    if (typeof(o) === "function") {
        return "function";
    }
    if (typeof(o) === "number") {
        return "" + o;
    }
    if (typeof(o) === "boolean") {
        return "" + o;
    }
    if (typeof(o) === "string") {
        return '"' + o + '"';
    }
    var s = "Object{\n";
    for (var t in o) {
        if (o.hasOwnProperty(t))
            s += ind + "  " + t + ": " + typeof(o[t]) + "\n";
    }
    return s + "}";
}

function dbg(o) {
    minigrace.stderr_write(dbgp(o, 0) + "\n");
}

var extensionsMap = callmethod(var_HashMap, "new", [0]);

function done_asString() {
    return new GraceString("done");
}

var GraceDone = Grace_allocObject(null, "done");
GraceDone.methods = {
            asString: done_asString,
            asDebugString: done_asString };
// The singleton object "done"; does *not* have GraceObject as its superObject

var ellipsis = Grace_allocObject(GraceObject, "ellipsis");
ellipsis.methods.asString = function ellipsis_asString() {
    return new GraceString("...");
};

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
};
Grace_prelude.methods['false()object'] = function prelude_false_object (argcv) {
    return GraceFalse;
};
Grace_prelude.methods['Exception'] = function(argcv) {
    return ExceptionObject;
};
Grace_prelude.methods['Error'] = function(argcv) {
    return ErrorObject;
};
Grace_prelude.methods['ProgrammingError'] = function(argcv) {
    return ProgrammingErrorObject;
};
Grace_prelude.methods['EnvironmentException'] = function(argcv) {
    return EnvironmentExceptionObject;
};
Grace_prelude.methods['ResourceException'] = function(argcv) {
    return ResourceExceptionObject;
};
Grace_prelude.methods['RuntimeError'] = function(argcv) {
    return RuntimeErrorObject;
};
Grace_prelude.methods['TypeError'] = function(argcv) {
    return TypeErrorObject;
};
Grace_prelude.methods['NoSuchMethod'] = function prelude_NoSuchMethod (argcv) {
    return NoSuchMethodErrorObject;
};
Grace_prelude.methods['BoundsError'] = function prelude_BoundsError (argcv) {
    return BoundsErrorObject;
};
Grace_prelude.methods['infinity'] = function prelude_infinity (argcv) {
    return new GraceNum(Infinity);
};
Grace_prelude.methods['π'] = function prelude_pi (argcv) {
    return new GraceNum(3.141592653589793);
};
Grace_prelude.methods['while()do'] = function(argcv, c, b) {
    if (c.className === "boolean" || c.className === "number")
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected Block for first argument of " +
                                "while()do, got " + c.className + "."));
    if (Grace_prelude.methods['while()do'] &&
            Grace_prelude.methods['while()do'].safe) {
        var count = 0;
        var runningTime = 0;
        var runningCount = 0;
        var startTime = new Date();
        var diff;
        while (Grace_isTrue(callmethod(c, "apply", [0]))) {
            count++;
            if (count % 100000 === 0 && ((diff=new Date()-startTime) > 5000)) {
                var totTime = runningTime + diff;
                var totIterations = runningCount + count;
                if (confirm("A while loop is taking a long time to run. Do you want to stop the program? " + totIterations + " iterations of the loop have taken " +
                              totTime + "ms so far." +
                              "\n\nChoose OK to stop the loop or Cancel to " +
                              "let it continue."))
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
        return GraceDone;
    }
    while (Grace_isTrue(callmethod(c, "apply", [0]))) {
        callmethod(b, "apply", [0]);
    }
    return GraceDone;
};
Grace_prelude.methods['for()do'] = function(argcv, c, b) {
    callmethod(c, "do", [1], b);
    return GraceDone;
};
Grace_prelude.methods['identical'] = function prelude_identical (argcv, a, b) {
    if (a === b) return GraceTrue; else return GraceFalse;
};
Grace_prelude.methods['different'] = function prelude_different (argcv, a, b) {
    if (a !== b) return GraceTrue; else return GraceFalse;
};
Grace_prelude.methods['_methods'] = function() {
    var meths = [];
    for (var m1 in this.methods)
        meths.push(new GraceString(m1));
    var s = this.superobj;
    while (s) {
        for (var m2 in s.methods)
            meths.push(new GraceString(m2));
        s = s.superobj;
    }
    var l = new GraceList(meths);
    return l;
};

Grace_prelude.methods['clone'] = function prelude_clone (argcv, obj) {
    return clone(obj);
};

function clone (obj) {
//   shallow copy, except up the superchain
    var copy = new GraceObject();
    copy.superobj = null;
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
};

Grace_prelude.methods['inBrowser'] = function(argcv) {
    return (typeof global === "undefined") ? GraceTrue : GraceFalse;
};

var PrimitiveArrayClass = Grace_allocObject(GraceObject, "class primitiveArray");
PrimitiveArrayClass.methods['new'] = function(argcv, n) {
    return new GracePrimitiveArray(n._value);
};

Grace_prelude.methods['PrimitiveArray'] = function() { return PrimitiveArrayClass; };
Grace_prelude.methods['primitiveArray'] = function() { return PrimitiveArrayClass; };

Grace_prelude.methods['engine'] = function prelude_engine(argcv) {
    return new GraceString("js");
};

//
//  Access methods declared in Grace's standard prelude
//

var _bindingClass;
function GraceBindingClass() {
    if (!_bindingClass)
        _bindingClass = callmethod(Grace_prelude, "binding", [0]);
    return _bindingClass;
}

var _rangeClass;
function GraceRangeClass() {
    if (!_rangeClass)
        _rangeClass = callmethod(Grace_prelude, "range", [0]);
    return _rangeClass;
}

var _setClass;
function GraceSetClass() {
    if (!_setClass)
        _setClass = callmethod(Grace_prelude, "set", [0]);
    return _setClass;
}

var _sequenceClass;
function GraceSequenceClass() {
    if (!_sequenceClass)
        _sequenceClass = callmethod(Grace_prelude, "sequence", [0]);
    return _sequenceClass;
}

var _emptySequence;
function GraceEmptySequence() {
    if (!_emptySequence)
        _emptySequence = callmethod(GraceSequenceClass(), "empty", [0]);
    return _emptySequence;
}

var _listClass;
function GraceListClass() {
    if (!_listClass)
        _listClass = callmethod(Grace_prelude, "list", [0]);
    return _listClass;
}


// these names are used in the generated code.
// __95__ is the escape for _
var var___95__prelude = Grace_prelude;
var var_done = GraceDone;


// for node: explicitly make names global
if (typeof global !== "undefined") {
    global.callmethod = callmethod;
    global.callmethodChecked = callmethodChecked;
    global.callmethodsuper = callmethodsuper;
    global.callStack = callStack;
    global.classType = classType;
    global.dbg = dbg;
    global.dbgp = dbgp;
    global.do_import = do_import;
    global.EnvironmentExceptionObject = EnvironmentExceptionObject;
    global.ErrorObject = ErrorObject;
    global.ExceptionObject = ExceptionObject;
    global.findMethod = findMethod;
    global.getLineNumber = getLineNumber;
    global.getModuleName = getModuleName;
    global.Grace_allocObject = Grace_allocObject;
    global.Grace_errorPrint = Grace_errorPrint;
    global.Grace_prelude = Grace_prelude;
    global.Grace_print = Grace_print;
    global.GraceBindingClass = GraceBindingClass;
    global.GraceBlock_match = GraceBlock_match;
    global.GraceBoolean = GraceBoolean;
    global.gracecode_interactive = gracecode_interactive;
    global.gracecode_io = gracecode_io;
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
    global.GraceMirrorMethod = GraceMirrorMethod;
    global.GraceNum = GraceNum;
    global.GraceObject = GraceObject;
    global.GracePrimitiveArray = GracePrimitiveArray;
    global.GraceString = GraceString;
    global.GraceStringIterator = GraceStringIterator;
    global.GraceSuccessfulMatch = GraceSuccessfulMatch;
    global.GraceTrait = GraceTrait;
    global.GraceTrue = GraceTrue;
    global.GraceType = GraceType;
    global.GraceUnicodePattern = GraceUnicodePattern;
    global.ImportErrorObject = ImportErrorObject;
    global.loadDate = loadDate;
    global.matchCase = matchCase;
    global.NoSuchMethodErrorObject = NoSuchMethodErrorObject;
    global.PrimitiveGraceList = PrimitiveGraceList;
    global.ProgrammingErrorObject = ProgrammingErrorObject;
    global.ResourceExceptionObject = ResourceExceptionObject;
    global.ReturnException = ReturnException;
    global.RuntimeErrorObject = RuntimeErrorObject;
    global.setLineNumber = setLineNumber;
    global.setModuleName = setModuleName;
    global.StackFrame = StackFrame;
    global.tryCatch = tryCatch;
    global.type_Boolean = type_Boolean;
    global.type_Block = type_Block;
    global.type_Done = type_Done;
    global.type_Number = type_Number;
    global.type_Object = type_Object;
    global.type_String = type_String;
    global.type_Type = type_Type;
    global.type_Unknown = type_Unknown;
    global.TypeErrorObject = TypeErrorObject;
    global.var___95__prelude = Grace_prelude;
    global.var_Done = var_Done;
    global.var_done = var_done;
    global.var_Block = var_Block;
    global.var_Boolean = var_Boolean;
    global.var_GraceType = var_GraceType;
    global.var_Number = var_Number;
    global.var_Object = var_Object;
    global.var_String = var_String;
    global.var_Type = var_Type;
    global.var_Unknown = var_Unknown;
}
