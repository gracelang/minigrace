"use strict";

var inBrowser = (typeof global === "undefined");

if (!inBrowser) {  // if we are in Node.js
    var fs = require("fs");
    var child_process = require('child_process');
    global.lineNumber = 0;
    global.moduleName = "null";
} else {
    var lineNumber = 0;
    var moduleName = "null";
}
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

function identifierAvailable(category, identifier) {
    if (inBrowser) {
        return !(localStorage.hasOwnProperty(category + ":" + identifier));
    } else {
        return ! fs.existsSync(identifier);
    }
}

function getFile(name){
    if (inBrowser) {
        return localStorage[name];
    } else {
        if (fs.existsSync(name)) {
            return fs.readFileSync(name).toString();
        } else {
            return "";
        }
    }
}

var writeFileToDisk = inBrowser ? browserWrite : commandLineWrite;

function browserWrite(name, data) {
    // name is a pathname, data the string to be written
    localStorage.setItem(name,data);
}

function commandLineWrite (name, data){
    // name is a pathname, data the string to be written
    try {
        var nodeFileObject = fs.openSync(name, "w");
        fs.writeSync(nodeFileObject, data);
        fs.closeSync(nodeFileObject);
    } catch(ex) {
        throw new GraceExceptionPacket(EnvironmentExceptionObject,
            new GraceString("can't write to file '" + path + "'."));
    }
}

//Takes a full localStorage directory identifier, ex. (thisDir/thatDir)
//and returns just the actual name ex. (thatDir)
function getDirectoryName(toParse) {
    var directoryName = toParse;
    var lastSlash = directoryName.lastIndexOf("/");

    //Check for a slash in the name (-1 means not found)
    if (lastSlash !== -1) {
        directoryName = directoryName.substring(0,lastSlash);
    }

    return directoryName;
}

//Functions to add/remove files from the web editor file tree
function addFileToTree(name) {
    var element = document.getElementById("add-file-io-api");
    element.innerHTML = name;
    element.click(); //Trigger event in files.js (grace-web-editor)
}

function removeFileFromTree(name) {
    var element = document.getElementById("remove-file-io-api");
    element.innerHTML = name;
    element.click(); //Trigger event in files.js (grace-web-editor)
}

Array.prototype.sum = function () {
    return this.reduce(function(a,b) {return a+b;}, 0);
};

if (!Array.prototype.includes) {
    Array.prototype.includes = function (needle) {
        for (var i = 0, len = this.length ; i < len ; i++) {
            if (this[i] === needle) return true;
        }
        return false;
    };
}

function GraceObject() {       // constructor function
    // gets its methods from the prototype.  Don't add to them!
    this.data = {};
    this.className = "graceObject";
    this.mutable = false;
    this.definitionModule = "basic library";
    this.definitionLine = 0;
    this.closureKeys = [];
}

function object_notEquals (argcv, o) {
    var b = callmethod(this, "==(1)", [1], o);
    return callmethod(b, "not", [0]);
}

function object_isMe (argcv, o) {
    return Object.is(this, o) ? GraceTrue : GraceFalse;
}
object_isMe.confidential = true;

function object_basicAsString (argcv) {
    var s = "object {";
    var firstTime = true;
    for (var i in this.data) {
        if (firstTime) firstTime = false; else s += ", ";
        try {
            s += "" + i + " = " + callmethod(this.data[i], "asString", [0])._value;
        } catch (ex) {
            s += "" + i + " = ?";
        }
    }
    return new GraceString(s + "}");
}
function articleFor(str) {
    var noun = str.toLowerCase();
    if (noun.startsWith("one")) return "a";
    if (noun.startsWith("un")) return "an";
    if ("aeio".indexOf(noun[0]) >= 0) return "an";
    return "a";
}
function object_asString (argcv) {
    if (!this.className || this.className.length === 0)
        return new GraceString("an object");
    var clNm = this.className;
    return new GraceString(articleFor(clNm) + " " + clNm);
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
    return callmethod(GraceBindingClass(), "key(1)value(1)", [1, 1], this, other);
}

GraceObject.prototype = {
    methods: {
        "isMe(1)":          object_isMe,
        "≠(1)":             object_notEquals,
        "basicAsString":    object_basicAsString,
        "asString":         object_asString,
        "asDebugString":    object_asDebugString,
        "debugValue":       object_debugValue,
        "debugIterator":    object_debugIterator,
        "::(1)":            object_colonColon
    }
//    data: {}  The prototype should NOT have a data object — data should go in the
//    child (non-shared) object.
};

function GraceTrait() {       // constructor function
    // gets its methods from the prototype.  Don't add to them!
    this.closureKeys = [];
    this.data = {};
    this.className = "graceTrait";
    this.mutable = false;
    this.definitionModule = "basic library";
    this.definitionLine = 0;
}

function trait_asString (argcv) {
    if (!this.className || this.className.length === 0)
        return new GraceString("a trait");
    var firstChar = this.className[0].toLowerCase();
    var article = ("aeio".indexOf(firstChar) >= 0)? "an " : "a ";
    return new GraceString(article + this.className + " trait");
}

GraceTrait.prototype = {
    methods: {
        "isMe(1)":             object_isMe,
        "≠(1)":                object_notEquals,
        "basicAsString":    object_basicAsString,
        "asString":         trait_asString,
        "asDebugString":    object_asDebugString,
        "debugValue":       object_debugValue,
        "debugIterator":    object_debugIterator,
        "::(1)":               object_colonColon
    }
};

function isEmptyObject(obj) {
    for (var name in obj) {
        return false;
    }
    return true;
}

function Grace_allocObject(superConstructor, givenName) {
    // The difference between this function and "new GraceObject" is that the
    // object returned here has its OWN methods object,
    // whereas the one returned from new GraceObject shares its prototype's methods.
    // Changing the 'methods' object has different effects in the two cases!

    var newMethods = {};
    if (superConstructor) {
        var supMethods = (new superConstructor()).methods;
        for (var nm in supMethods) {
            if (supMethods.hasOwnProperty(nm))
                newMethods[nm] = supMethods[nm];
        }
    }
    var resultObj = {
        closureKeys: [],
        methods: newMethods,
        data: {},
        className: givenName || "object",
        mutable: false,
        closureKeys: [],
        definitionModule: "basic library",
        definitionLine: 0
    };
    return resultObj;
}

function emptyGraceObject(givenName, modname, line) {
    return {
        methods: {
            "isMe(1)":          object_isMe,
            "≠(1)":             object_notEquals,
            "basicAsString":    object_basicAsString,
            "asString":         object_asString,
            "asDebugString":    object_asDebugString,
            "debugValue":       object_debugValue,
            "debugIterator":    object_debugIterator,
            "::(1)":            object_colonColon
        },
        data: {},
        className: givenName,
        mutable: false,
        closureKeys: [],
        definitionModule: modname,
        definitionLine: line
    };
}

function capitalize(str) {
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
        new GraceString("argument to 'at(_)' on string \"" + msgstr + "\" is not an Integer"));
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

function string_indices(argcv) {
    var size = this._value.length;
    return callmethod(GraceRangeClass(), "uncheckedFrom(1)to(1)", [1, 1],
                      new GraceNum(1), new GraceNum(size));
}

GraceString.prototype = {
    methods: {
        "isMe(1)":          object_isMe,
        "≠(1)":             object_notEquals,
        "basicAsString":    object_basicAsString,
        "debugValue":       object_debugValue,
        "debugIterator":    object_debugIterator,
        "::(1)":            object_colonColon,
        "++(1)": function(argcv, other) {
            var o = callmethod(other, "asString", [0]);
            return new GraceString(this._value + o._value);
        },
        ">>(1)": function(argcv, target) {
            return callmethod(target, "++(1)", [1], this);
        },
        "at(1)": string_at,
        "size": function(argcv) {
            return new GraceNum(this._value.length);
        },
        "sizeIfUnknown(1)": function(argcv) {
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
            var tmp = s.replace(/\\/g, '\\\\');   // replaces backslash
            tmp = tmp.replace(/"/g, '\\"');       // quotes double-quote
            tmp = tmp.replace(/\n/g, '\\n');      // quotes newline
            tmp = tmp.replace(/\t/g, '\\t');      // quotes tab
            return new GraceString(tmp);
        },
        "replace(1)with(1)": function(argcv, what, wth) {
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
        "indexOf(1)": function string_indexOf (argcv, needle) {
            var self = this._value;
            var result = self.indexOf(needle._value);
            if (result === -1) { return new GraceNum(0); }
            return new GraceNum(result + 1);
        },
        "indexOf(1)ifAbsent(1)": function string_indexOf_ifAbsent (argcv, needle, block0) {
            var self = this._value;
            var result = self.indexOf(needle._value);
            if (result === -1) { return callmethod(block0, "apply", [0]); }
            return new GraceNum(result + 1);
        },
        "indexOf(1)startingAt(1)": function string_indexOf_startingAt (argcv, needle, startPos) {
            var self = this._value;
            var start = startPos._value - 1;
            var result = self.indexOf(needle._value, start);
            if (result === -1) { return new GraceNum(0); }
            return new GraceNum(result + 1);
        },
        "indexOf(1)startingAt(1)ifAbsent(1)": function string_indexOf_startingAt_ifAbsent (argcv, needle, startPos, block0) {
            var self = this._value;
            var start = startPos._value - 1;
            var result = self.indexOf(needle._value, start);
            if (result === -1) { return callmethod(block0, "apply", [0]); }
            return new GraceNum(result + 1);
        },
        "lastIndexOf(1)": function string_lastIndexOf_ifAbsent (argcv, needle, block0) {
            var self = this._value;
            var result = self.lastIndexOf(needle._value);
            if (result === -1) { return new GraceNum(0); }
            return new GraceNum(result + 1);
        },
        "lastIndexOf(1)startingAt(1)": function string_lastIndexOf_startingAt (argcv, needle, startPos) {
            var self = this._value;
            var start = startPos._value - 1;
            var result = self.lastIndexOf(needle._value, start);
            if (result === -1) { return new GraceNum(0); }
            return new GraceNum(result + 1);
        },
        "lastIndexOf(1)startingAt(1)ifAbsent(1)": function string_lastIndexOf_startingAt_ifAbsent (argcv, needle, startPos, block0) {
            var self = this._value;
            var start = startPos._value - 1;
            var result = self.lastIndexOf(needle._value, start);
            if (result === -1) { return callmethod(block0, "apply", [0]); }
            return new GraceNum(result + 1);
        },
        "lastIndexOf(1)ifAbsent(1)": function string_lastIndexOf (argcv, needle, block0) {
            var self = this._value;
            var result = self.lastIndexOf(needle._value);
            if (result === -1) { return callmethod(block0, "apply", [0]); }
            return new GraceNum(result + 1);
        },
        "contains(1)": function string_contains(argcv, needle) {
            var self = this._value;
            var result = self.indexOf(needle._value);
            if (result === -1) { return GraceFalse; }
            return GraceTrue;
        },
        "trim": function string_trim (argcv) {
            var self = this._value;
            return new GraceString(self.trim());
        },
        "substringFrom(1)to(1)": function string_substringFrom_to(argcv, from, to) {
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
        "substringFrom(1)size(1)": function string_substringFrom_size(argcv, from, size) {
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
        "substringFrom(1)": function string_substringFrom_size(argcv, from) {
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
        "startsWith(1)": function string_startsWith(argcv, needle) {
            var self = this._value;
            var n = needle._value;
            if (self.lastIndexOf(n, 0) === 0) return GraceTrue;
            return GraceFalse;
        },
        "endsWith(1)": function string_endsWith(argvc, needle) {
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
            var qSelf = callmethod(quote, "++(1)", [1], self);
            var qSelfq = callmethod(qSelf, "++(1)", [1], quote);
            return qSelfq;
        },
        "compare(1)": function string_compare (argcv, that) {
            var self = this._value;
            var other = that._value;
            if (self === other) return new GraceNum(0);
            if (self > other) return new GraceNum(+1);
            return new GraceNum(-1);
        },
        ">(1)": function string_greaterThan (argcv, that) {
            var self = this._value;
            var other = that._value;
            if (self > other) return GraceTrue;
            return GraceFalse;
        },
        "<(1)": function string_lessThan (argcv, that) {
            var self = this._value;
            var other = that._value;
            if (self < other) return GraceTrue;
            return GraceFalse;
        },
        "≤(1)": string_lessThanOrEqual,
        "≥(1)": string_greaterThanOrEqual,
        "==(1)": function string_equal(argcv, other) {
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
        "do(1)": function string_do(argcv, action1) {
            var self = this._value;
            var size = self.length;
            for (var ix = 0; ix < size; ix ++) {
                callmethod(action1, "apply(1)", [1], new GraceString(self[ix]));
            }
            return GraceDone;
        },
        "do(1)separatedBy(1)": function string_do_sepBy(argcv, action1, separatorAction) {
            var self = this._value;
            var size = self.length;
            var firstTime = true;
            for (var ix = 0; ix < size; ix ++) {
                if (! firstTime)
                    callmethod(separatorAction, "apply", [0]);
                else
                    firstTime = false;
                callmethod(action1, "apply(1)", [1], new GraceString(self[ix]));
            }
            return GraceDone;
        },
        "keysAndValuesDo(1)": function string_do(argcv, action2) {
            var self = this._value;
            var size = self.length;
            for (var ix = 0; ix < size; ix ++) {
                callmethod(action2, "apply(2)", [2], new GraceNum(ix+1), new GraceString(self[ix]));
            }
            return GraceDone;
        },
        "ord": function string_ord (argcv) {
            return new GraceNum(this._value.charCodeAt(0));
        },
        "hash": string_hash,
        "indices": string_indices,
        "keys": string_indices,
        "asNumber": function string_asNumber(argcv) {
            return new GraceNum(+this._value);
        },
        "match(1)": function string_match (argcv, o) {
            if (Grace_isTrue(callmethod(this, "==(1)", [1], o)))
                return new GraceSuccessfulMatch(o);
            return GraceFalse;
        },
        "|(1)": function string_orPattern(argcv, o) {
            return new GraceOrPattern(this, o);
        },
        "&(1)": function string_andPattern (argcv, o) {
            return new GraceAndPattern(this, o);
        },
        "startsWithSpace": function string_startsWithSpace (argcv) {
            var s = this._value.charCodeAt(0);
            return  ( (unicode.inCategory(s, "Zs") ) ? GraceTrue : GraceFalse);
        },
        "startsWithPeriod": function string_startsWithPeriod (argcv) {
            if (this._value.charCodeAt(0) === 46) return GraceTrue; else return GraceFalse;
        },
        "startsWithDigit": function string_startsWithDigit (argcv) {
            var s = this._value.charCodeAt(0);
            return ( ( unicode.inCategory(s, "Nd") ||
                       unicode.inCategory(s, "No") ||
                       unicode.inCategory(s, "Nl") ) ? GraceTrue : GraceFalse);
        },
        "startsWithLetter": function string_startsWithLetter (argcv) {
            var c = this._value.charCodeAt(0);
            return ( ( unicode.inCategory(c, "Ll") ||
                       unicode.inCategory(c, "Lu") ||
                       unicode.inCategory(c, "Lo") ||
                       unicode.inCategory(c, "Lm") ) ? GraceTrue : GraceFalse);
        },
        "*(1)": function string_times (argcv, num) {
            // We could adapt the Russian Peasant algorithm for multiplication by addition,
            // but this simpler algorithm will usually use fewer string operations.
            var n;
            if ((num.className !== 'number') || (! Number.isInteger(n = num._value))) {
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("argument to string *(_) must be an integer"));
            }
            var output = this._value;
            var requiredLength = output.length * n;
            while (output.length < requiredLength) {
                output = output.concat(output);
            }
            output = output.substr(0, requiredLength);
            return new GraceString(output);
        },
        "reverseTimesNumber(1)": function (argcv, num) {
            return callmethod(this, "*(1)", [1], num);
        },
        "map(1)": function string_map(argcv, function1) {
            var collections = callmethod(var___95__prelude, "collections", [0]);
            return selfRequest(collections,
                        "lazySequenceOver(1)mappedBy(1)", [1, 1], this, function1);
        },
        "filter(1)": function string_filter(argcv, predicate1) {
            var self = this._value;
            var size = self.length;
            var result = "";
            for (var ix = 0; ix < size; ix ++) {
                var ch = self[ix];
                if (GraceTrue === callmethod(predicate1, "apply(1)", [1], new GraceString(ch)))
                    result = result + ch;
            }
            return new GraceString(result);
        },
        "fold(1)startingWith(1)": function string_fold(argcv, block2, initialValue) {
            var self = this._value;
            var size = self.length;
            var accum = initialValue;
            for (var ix = 0; ix < size; ix ++) {
                accum = callmethod(block2, "apply(2)", [2],
                                   accum, new GraceString(self[ix]));
            }
            return accum;
        }
    },
    className: "string",
    definitionModule: "basic library",
    definitionLine: 0
};

var GraceEmptyString = new GraceString("");

function GraceNum(n) {
    this._value = n;
}

GraceNum.prototype = {
    methods: {
        "isMe(1)":          object_isMe,
        "≠(1)":             object_notEquals,
        "basicAsString":    object_basicAsString,
        "debugValue":       object_debugValue,
        "debugIterator":    object_debugIterator,
        "::(1)":            object_colonColon,
        "+(1)": function(argcv, other) {
            if (other.className === "number") {
                var s = this._value + other._value;
                return new GraceNum(s);
            }
            return callmethod(other, "reversePlusNumber(1)", [1], this);
        },
        "*(1)": function(argcv, other) {
            if (other.className === "number") {
                var s = this._value * other._value;
                return new GraceNum(s);
            }
            return callmethod(other, "reverseTimesNumber(1)", [1], this);
        },
        "/(1)": function(argcv, other) {
            if (other.className === "number") {
                var s = this._value / other._value;
                return new GraceNum(s);
            }
            return callmethod(other, "reverseDivideNumber(1)", [1], this);
        },
        "-(1)": function(argcv, other) {
            if (other.className === "number") {
                var s = this._value - other._value;
                return new GraceNum(s);
            }
            return callmethod(other, "reverseMinusNumber(1)", [1], this);
        },
        "^(1)": function(argcv, other) {
            if (other.className === "number") {
                var s = Math.pow(this._value, other._value);
                return new GraceNum(s);
            }
            return callmethod(other, "reversePowerNumber(1)", [1], this);
        },
        "%(1)": function(argcv, other) {
            if (other.className === "number") {
                var s = this._value % other._value;
                if (s < 0) s = s + Math.abs(other._value);
                return new GraceNum(s);
            }
            return callmethod(other, "reverseRemainderNumber(1)", [1], this);
        },
        "÷(1)": function(argv, other) {
            if (other.className === "number") {
                var quo = this._value / other._value;
                var q = Math.trunc(quo);
                if (this._value >= 0) return new GraceNum(q);
                if (q === quo) return new GraceNum(q);
                if (other._value < 0) return new GraceNum(q + 1);
                return new GraceNum(q - 1);
            }
            return callmethod(other, "reverseQuotientNumber(1)", [1], this);
        },
        "@(1)": function(argcv, other) {
            return callmethod(Grace_prelude, "point2Dx(1)y(1)", [1, 1], this, other);
        },
        "..(1)": function(argcv, other) {
            if (! Number.isInteger(this._value)) {
                throw new GraceExceptionPacket(RequestErrorObject,
                    new GraceString("lower bound of range (" + this._value +
                                    ") not an integer."));
            } else if (other.className !== "number") {
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("upper bound of range not a Number."));
            } else if (! Number.isInteger(other._value)) {
                throw new GraceExceptionPacket(RequestErrorObject,
                    new GraceString("upper bound of range (" + other._value +
                                    ") not an integer."));
            }
            return callmethod(GraceRangeClass(),
                    "uncheckedFrom(1)to(1)", [1, 1], this, other);
        },
        "compare(1)": function(argcv, that) {
            var self = this._value;
            var other = that._value;
            if (self === other) return new GraceNum(0);
            if (self > other) return new GraceNum(+1);
            return new GraceNum(-1);
        },
        "<(1)": function(argcv, other) {
            if (this._value < other._value) return GraceTrue; else return GraceFalse;
        },
        ">(1)": function(argcv, other) {
            if (this._value > other._value) return GraceTrue; else return GraceFalse;
        },
        "≤(1)": function(argcv, other) {
            if (this._value <= other._value) return GraceTrue; else return GraceFalse;
        },
        "≥(1)": function(argcv, other) {
            if (this._value >= other._value) return GraceTrue; else return GraceFalse;
        },
        "isInteger": function(argcv, other) {
            if (Number.isInteger(this._value)) return GraceTrue; else return GraceFalse;
        },
        "isEven": function(argcv, other) {
            if (this._value % 2 === 0) return GraceTrue; else return GraceFalse;
        },
        "isOdd": function(argcv, other) {
            // we can't just check that remainder is 1, becasue negative
            // arguments give a remaider of -1.  This is much faster than
            // checking for +1 or -1, or taking abs!
            var val = this._value;
            if (Number.isInteger(val) && (val % 2 !== 0)) {
                return GraceTrue;
            } else {
                return GraceFalse;
            }
        },
        "prefix-": function(argcv) {
            return new GraceNum(-this._value);
        },
        "prefix<": function(argcv) {
            return new GracePredicatePattern(arg => arg < this._value);
        },
        "prefix>": function(argcv) {
            return new GracePredicatePattern(arg => arg > this._value);
        },
        "prefix≤": function(argcv) {
            return new GracePredicatePattern(arg => arg <= this._value);
        },
        "prefix≥": function(argcv) {
            return new GracePredicatePattern(arg => arg >= this._value);
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
        "asStringDecimals(1)": function (argcv, other) {
            var num = this._value;
            if (num === Infinity)
                return new GraceString("infinity");
            if (num === -Infinity)
                return new GraceString("-infinity");
            var d = other._value;
            if ((d < 0) || (d > 20))
                throw new GraceExceptionPacket(RequestErrorObject,
                    new GraceString("argument to asStringDecimals(_) must be between 0 and 20"));
            return new GraceString(num.toFixed(d));
        },
        "==(1)": function(argcv, other) {
            // Do NOT test for identity, because then NaN == NaN !
            if (this.className === other.className &&
                  this._value === other._value)
                return GraceTrue;
            return GraceFalse;
        },
        "≠(1)": function(argcv, other) {
            var t = callmethod(this, "==(1)", [1], other);
            return callmethod(t, "not", [0]);
        },
        "hash": function num_hash (argcv) {
            var self = this._value;
            if (isNaN(self)) {
                throw new GraceExceptionPacket(RequestErrorObject,
                    new GraceString("attempting to hash NaN"));
            }
            var raw = self * 13;
            return new GraceNum(Math.abs(raw & raw));  // & converts to 32-bit int
        },
        "hashcode": function num_hashcode (argcv) {
            var raw = this._value * 13;
            return new GraceNum(Math.abs(raw & raw));  // & converts to 32-bit int
        },
        "inBase(1)": function(argcv, other) {
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
            return (isNaN(this._value)) ? GraceTrue : GraceFalse;
        },
        "sin": function(argv) {
            return new GraceNum(Math.sin(this._value));
        },
        "cos": function(argv) {
            return new GraceNum(Math.cos(this._value));
        },
        "tan": function(argv) {
            return new GraceNum(Math.tan(this._value));
        },
        "asin": function(argv) {
            return new GraceNum(Math.asin(this._value));
        },
        "acos": function(argv) {
            return new GraceNum(Math.acos(this._value));
        },
        "atan": function(argv) {
            return new GraceNum(Math.atan(this._value));
        },
        lg: function(argv) {
            return new GraceNum(Math.log(this._value) / Math.LN2);
        },
        ln: function(argv) {
            return new GraceNum(Math.log(this._value));
        },
        exp: function(argv) {
            return new GraceNum(Math.exp(this._value));
        },
        log10: function(argv) {
            return new GraceNum(Math.log(this._value) / Math.LN10);
        },
        "truncated": function(argcv) {
            return new GraceNum(Math.trunc(this._value));
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
        "sgn": function(argcv) {
            var n = this._value;
            if (n != n) throw new GraceExceptionPacket(ProgrammingErrorObject,
                            new GraceString("NaN.sgn is undefined"));
            if (n === 0) return new GraceNum(0);
            return new GraceNum(n > 0 ? 1 : -1);
        },
        "sqrt": function(argcv) {
            return new GraceNum(Math.sqrt(this._value));
        },
        "match(1)": function(argcv, o) {
            if (Grace_isTrue(callmethod(this, "==(1)", [1], o)))
                return new GraceSuccessfulMatch(o);
            return GraceFalse;
        },
        "|(1)": function(argcv, o) {
            return new GraceOrPattern(this, o);
        },
        "&(1)": function(argcv, o) {
            return new GraceAndPattern(this, o);
        }
    },
    className: "number",
    definitionModule: "basic library",
    definitionLine: 0
};

function GracePredicatePattern(pred) {
    this._value = pred;
}

GracePredicatePattern.prototype = {
    methods: {
        "isMe(1)":          object_isMe,
        "≠(1)":             object_notEquals,
        "basicAsString":    object_basicAsString,
        "debugValue":       object_debugValue,
        "debugIterator":    object_debugIterator,
        "::(1)":            object_colonColon,
        "asString": function(argcv) {
            return new GraceString("a predicate pattern");
        },
        "asDebugString": function(argcv) {
            return new GraceString("a predicate pattern");
        },
        "match(1)": function predicate_match (argcv, o) {
            if (o._value) {
                // if o has no _value, it is not a number, and so can't match
                if (this._value(o._value)) {
                    return new GraceSuccessfulMatch(o);
                }
            }
            return GraceFalse;
        },
        "|(1)": function predicate_orPattern(argcv, o) {
            return new GraceOrPattern(this, o);
        },
        "&(1)": function predicate_andPattern (argcv, o) {
            return new GraceAndPattern(this, o);
        }
    },
    className: "predicatePattern",
    definitionModule: "basic library",
    definitionLine: 0
}

function GraceBoolean(b) {
    this._value = b;
}
GraceBoolean.prototype = {
    methods: {
        "isMe(1)":          object_isMe,
        "≠(1)":             object_notEquals,
        "basicAsString":    object_basicAsString,
        "debugValue":       object_debugValue,
        "debugIterator":    object_debugIterator,
        "::(1)":            object_colonColon,
        "not": function(argcv) {
            return ((this._value) ? GraceFalse : GraceTrue);
        },
        "prefix!": function(argcv) {
            return ((this._value) ? GraceFalse : GraceTrue);
        },
        "&(1)": function(argcv, other) {
            return new GraceAndPattern(this, other);
        },
        "|(1)": function(argcv, other) {
            return new GraceOrPattern(this, other);
        },
        "&&(1)": function(argcv, other) {
            if (!this._value)
                return this;
            if ((other.hasOwnProperty("_value")) && (typeof other._value === "boolean"))
                return other;
            var o = callmethod(other, "apply", [0]);
            return o;
        },
        "||(1)": function(argcv, other) {
            if (this._value)
                return this;
            if ((other.hasOwnProperty("_value")) && (typeof other._value === "boolean"))
                return other;
            var o = callmethod(other, "apply", [0]);
            return o;
        },
        "asString": function(argcv) {
            return new GraceString("" + this._value);
        },
        "asDebugString": function(argcv) {
            return new GraceString("" + this._value);
        },
        "==(1)": function(argcv, other) {
            if (this === other)
                return GraceTrue;
            if (this._value === other._value)
                return GraceTrue;
            return GraceFalse;
        },
        "match(1)": function(argcv, o) {
            if (Grace_isTrue(callmethod(this, "==(1)", [1], o)))
                return new GraceSuccessfulMatch(o);
            return GraceFalse;
        },
        "hash": function(argcv) {
            return new GraceNum(this._value ? 3637 : 1741);
        }
    },
    className: "boolean",
    definitionModule: "basic library",
    definitionLine: 0
};

var GraceTrue = new GraceBoolean(true);
var GraceFalse = new GraceBoolean(false);

function GraceList(jsList) {
    var newList = callmethod(Grace_prelude, "emptyList", [0]);
    for (var ix = 0; ix < jsList.length; ix++) {
        callmethod(newList, "push(1)", [1], jsList[ix]);
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
        new GraceString("argument to 'at(_)' is not an Integer"));
}
function prim_list_update(argcv, where, val) {
    var idx = where._value;
    if (idx === undefined)
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 to 'at(_)put(_)' is not a Number"));
    if (! (idx > 0 && idx <= (this._value.length + 1)))
        throw new GraceExceptionPacket(BoundsErrorObject,
            new GraceString('index ' + idx + ' but list has size ' + this._value.length));
    this._value[idx-1] = val;
    return this;
}
function list_indices(argcv) {
    var size = this._value.length;
    return callmethod(GraceRangeClass(), "uncheckedFrom(1)to(1)", [1, 1],
                  new GraceNum(1), new GraceNum(size));
}
PrimitiveGraceList.prototype = {
    methods: {
        "isMe(1)":          object_isMe,
        "≠(1)":             object_notEquals,
        "basicAsString":    object_basicAsString,
        "debugValue":       object_debugValue,
        "debugIterator":    object_debugIterator,
        "::(1)":            object_colonColon,
        "makeEmpty": function(argcv) {
            this._value = [ ];
            return this;
        },
        "clear": function(argcv) {
            this._value = [ ];
            return this;
        },
        "push(1)": function(argcv, val) {
            this._value.push(val);
            return this;
        },
        "addFirst(1)": function(argcv, val) {
            this._value.unshift(val);
            return this;
        },
        "addAll(1)": function(argcv, other) {
            var iter = callmethod(other, "iterator", [0]);
            while (Grace_isTrue(callmethod(iter, "hasNext", [0]))) {
                var val = callmethod(iter, "next", [0]);
                this._value.push(val);
            }
            return this;
        },
        "addLast(1)": function(argcv, val) {
            this._value.push(val);
            return this;
        },
        "add(1)": function(argcv, val) {
            this._value.push(val);
            return this;
        },
        "unshift(1)": function (argcv, val) {
            this._value.unshift(val);
            return this;
        },
        "remove(1)": function (argcv, val) {
            var list = this._value;
            var index = -1;
            for (var i = 0; i < list.length && index === -1; i++) {
                if (Grace_isTrue(callmethod(val, "==(1)", [1], list[i])))
                    index = i;
            }
            if (index > -1)
                list.splice(index, 1);
            return this;
        },
        "removeFirst": function (argcv) {
            var list = this._value;
            if (list.length === 0)
                throw new GraceExceptionPacket(BoundsErrorObject,
                    new GraceString("'removeFirst' requested on empty list"));
            return list.shift();
        },
        "reverse": function (argcv) {
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
        "sizeIfUnknown(1)": function list_size (argcv, val) {
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
        "removeLast": function(argcv) {
            var result = this._value.pop();
            if (result === undefined)
                throw new GraceExceptionPacket(BoundsErrorObject,
                    new GraceString("'removeLast' requested on list with size " +
                                                        this._value.length));
            return result;
        },
        "at(1)": prim_list_index,
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
        "at(1)put(1)": prim_list_update,
        "at(1)add(1)": function(argcv, idx, val) {
            this._value.splice(idx._value - 1, 0, val);
            return this;
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
                } catch (ex) {
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
                } catch (ex) {
                    s += "‹" + dbgp(obj, 2) + "›";
                }
            }
            s += "]";
            return new GraceString(s);
        },
        "debugValue": function(argcv) {
            return new GraceString("extendedLineup");
        },
        "debugIterator": function(argcv) {
            return new GraceListIterator(this._value);
        },
        "contains(1)": function(argcv, other) {
            for (var i=0; i<this._value.length; i++) {
                var v = this._value[i];
                if (Grace_isTrue(callmethod(v, "==(1)", [1], other)))
                    return GraceTrue;
            }
            return GraceFalse;
        },
        "==(1)": function(argcv, other) {
            var collections = callmethod(var___95__prelude, "collections", [0]);
            return selfRequest(collections,
                        "isEqual(1)toCollection(1)", [1, 1], this, other);
        },
        "≠(1)": function(argcv, other) {
            var t = callmethod(this, "==(1)", [1], other);
            return callmethod(t, "not", [0]);
        },
        "iterator": function(argcv) {
            return new GraceListIterator(this._value);
        },
        "do(1)": function list_do(argcv, action1) {
            var self = this._value;
            var size = self.length;
            for (var ix = 0; ix < size; ix ++) {
                callmethod(action1, "apply(1)", [1], self[ix]);
            }
            return GraceDone;
        },
        "keysAndValuesDo(1)": function list_do(argcv, action2) {
            var self = this._value;
            var size = self.length;
            for (var ix = 0; ix < size; ix ++) {
                callmethod(action2, "apply(2)", [2], new GraceNum(ix+1), self[ix]);
            }
            return GraceDone;
        },
        "do(1)separatedBy(1)": function list_do_sepBy(argcv, action1, separatorAction) {
            var self = this._value;
            var size = self.length;
            var firstTime = true;
            for (var ix = 0; ix < size; ix ++) {
                if (! firstTime)
                    callmethod(separatorAction, "apply", [0]);
                else
                    firstTime = false;
                callmethod(action1, "apply(1)", [1], self[ix]);
            }
            return GraceDone;
        },
        "indices": list_indices,
        "keys": list_indices,
        "map(1)": function list_map(argcv, function1) {
            var collections = callmethod(var___95__prelude, "collections", [0]);
            return selfRequest(collections,
                        "lazySequenceOver(1)mappedBy(1)", [1, 1], this, function1);
        },
        "filter(1)": function list_filter(argcv, predicate1) {
            var collections = callmethod(var___95__prelude, "collections", [0]);
            return selfRequest(collections,
                        "lazySequenceOver(1)filteredBy(1)", [1, 1], this, predicate1);
        },
        "fold(1)startingWith(1)": function(argcv, block, initial) {
            var self = this._value;
            var res = initial;
            for (var i=0; i<self.length; i++) {
                var v = self[i];
                res = callmethod(block, "apply(2)", [2], res, v);
            }
            return res;
        },
        "++(1)": function(argcv, other) {
            var otherIter = callmethod(other, "iterator", [0]);
            var l = this._value.slice();    // copy of the embedded js list
            while (Grace_isTrue(callmethod(otherIter, "hasNext", [0]))) {
                l.push(callmethod(otherIter, "next", [0]));
            }
            return new PrimitiveGraceList(l);
        },
        ">>(1)": function(argcv, target) {
            return callmethod(target, "++(1)", [1], this);
        }
    },
    className: "extendedLineup",
    definitionModule: "basic library",
    definitionLine: 0
};

function Lineup(jsList) {
    this._value = jsList;
}


Lineup.prototype = {
    methods: {
        "isMe(1)":          object_isMe,
        "≠(1)":             object_notEquals,
        "basicAsString":    object_basicAsString,
        "::(1)":            object_colonColon,
        "isEmpty": function list_isEmpty (argcv) {
            return (this._value.length === 0) ? GraceTrue : GraceFalse;
        },
        "clear": function list_clear (argcv) {
            this._value = [ ];
            return this;
        },
        "size": function list_size (argcv) {
            //dbg("called size: " + this._value.length);
            return new GraceNum(this._value.length);
        },
        "sizeIfUnknown(1)": function list_size (argcv, val) {
            return new GraceNum(this._value.length);
        },
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
                } catch (ex) {
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
                } catch (ex) {
                    s += "‹" + dbgp(obj, 2) + "›";
                }
            }
            s += "]";
            return new GraceString(s);
        },
        "debugValue": function(argcv) {
            return new GraceString("lineup");
        },
        "debugIterator": function(argcv) {
            return new GraceListIterator(this._value);
        },
        "==(1)": function(argcv, other) {
            var collections = callmethod(var___95__prelude, "collections", [0]);
            return selfRequest(collections,
                        "isEqual(1)toCollection(1)", [1, 1], this, other);
        },
        "≠(1)": function(argcv, other) {
            var t = callmethod(this, "==(1)", [1], other);
            return callmethod(t, "not", [0]);
        },
        "iterator": function(argcv) {
            return new GraceListIterator(this._value);
        },
        "do(1)": function list_do(argcv, action1) {
            var self = this._value;
            var size = self.length;
            for (var ix = 0; ix < size; ix ++) {
                callmethod(action1, "apply(1)", [1], self[ix]);
            }
            return GraceDone;
        },
        "do(1)separatedBy(1)": function list_do_sepBy(argcv, action1, separatorAction) {
            var self = this._value;
            var size = self.length;
            var firstTime = true;
            for (var ix = 0; ix < size; ix ++) {
                if (! firstTime)
                    callmethod(separatorAction, "apply", [0]);
                else
                    firstTime = false;
                callmethod(action1, "apply(1)", [1], self[ix]);
            }
            return GraceDone;
        },
        "map(1)": function list_map(argcv, function1) {
            var collections = callmethod(var___95__prelude, "collections", [0]);
            return selfRequest(collections,
                        "lazySequenceOver(1)mappedBy(1)", [1, 1], this, function1);
        },
        "filter(1)": function list_filter(argcv, predicate1) {
            var collections = callmethod(var___95__prelude, "collections", [0]);
            return selfRequest(collections,
                        "lazySequenceOver(1)filteredBy(1)", [1, 1], this, predicate1);
        },
        "fold(1)startingWith(1)": function(argcv, block, initial) {
            var self = this._value;
            var res = initial;
            for (var i=0; i<self.length; i++) {
                var v = self[i];
                res = callmethod(block, "apply(2)", [2], res, v);
            }
            return res;
        },
        "++(1)": function(argcv, other) {
            var otherIter = callmethod(other, "iterator", [0]);
            var l = this._value.slice();    // copy of the embedded js list
            while (Grace_isTrue(callmethod(otherIter, "hasNext", [0]))) {
                l.push(callmethod(otherIter, "next", [0]));
            }
            return new Lineup(l);
        },
        ">>(1)": function(argcv, target) {
            return callmethod(target, "++(1)", [1], this);
        }
    },
    className: "lineup",
    definitionModule: "basic library",
    definitionLine: 0
};

function GracePrimitiveArray(len) {
    this._value = new Array(len);
//    this._value.fill(undefined);
//    elements are all undefined by default
}

GracePrimitiveArray.prototype = {
    methods: {
        "isMe(1)":          object_isMe,
        "≠(1)":             object_notEquals,
        "basicAsString":    object_basicAsString,
        "::(1)":            object_colonColon,
        "size": function(argcv) {
            return new GraceNum(this._value.length);
        },
        "sizeIfUnknown(1)": function(argcv) {
            return new GraceNum(this._value.length);
        },
        "at(1)": function(argcv, where) {
            var idx = where._value;
            var result = this._value[idx];
            if (result) return result;
            if (! Number.isInteger(idx)) {
                throw new GraceExceptionPacket(ProgrammingErrorObject,
                    new GraceString("error in 'at(" + idx +
                        ")' on primitive array of size " + this._value.length));
            }
            if ((idx < 0) || (idx >= this._value.length)) {
                throw new GraceExceptionPacket(BoundsErrorObject,
                    new GraceString("requested 'at(" + idx +
                        ")' on primitive array of size " + this._value.length));
            }
            throw new GraceExceptionPacket(UninitializedVariableObject,
                new GraceString("primitive array at(" + idx +
                    ") has not been initialized"));
        },
        "at(1)put(1)": function(argcv, idx, val) {
            this._value[idx._value] = val;
            return this;
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
                } catch (ex) {
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
                } catch (ex) {
                    s += "‹" + dbgp(obj, 2) + "›";
                }
            }
            s += ")";
            return new GraceString(s);
        },
        "debugValue": function(argcv) {
            return new GraceString("primArray");
        },
        "debugIterator": function(argcv) {
            return new GraceIterator(this._value);
        },
        "contains(1)": function(argcv, other) {
            for (var i=0; i<this._value.length; i++) {
                var v = this._value[i];
                if (Grace_isTrue(callmethod(v, "==(1)", [1], other)))
                    return GraceTrue;
            }
            return GraceFalse;
        },
        "==(1)": function(argcv, other) {
            if (this === other)
                return GraceTrue;
            return GraceFalse;
        },
        "≠(1)": function(argcv, other) {
            var t = callmethod(this, "==(1)", [1], other);
            return callmethod(t, "not", [0]);
        },
        "iterator": function(argcv) {
            return new GraceIterator(this._value);
        },
        "reduce(2)": function(argcv, initial, block) {
            var res = initial;
            for (var i=0; i<this._value.length; i++) {
                var v = this._value[i];
                res = callmethod(block, "apply(2)", [2], res, v);
            }
            return res;
        },
        "fold(1)startingWith(1)": function(argcv, block, initial) {
            var res = initial;
            for (var i=0; i<this._value.length; i++) {
                var v = this._value[i];
                res = callmethod(block, "apply(2)", [2], res, v);
            }
            return res;
        },
        "sortInitial(1)by(1)": function(argcv, length, compareBlock) {
            var origLength = this._value.length;
            this._value.length = length._value;
            function compareFun(a, b) {
                var res = callmethod(compareBlock, "apply(2)", [2], a, b);
                if (res.className === "number") return res._value;
                throw new GraceExceptionPacket(TypeErrorObject,
                       new GraceString("compare block in primitiveArray.sort method " +
                                       "did not return a Number"));
            }
            this._value.sort(compareFun);
            this._value.length = origLength;
            return this;
        }
    },
    className: "primitiveArray",
    definitionModule: "basic library",
    definitionLine: 0
};

function GraceOrPattern(l, r) {
    var orClass = callmethod(Grace_prelude, "OrPattern", [0]);
    return callmethod(orClass, "new(2)", [2], l, r);
}

function GraceAndPattern(l, r) {
    var andClass = callmethod(Grace_prelude, "AndPattern", [0]);
    return callmethod(andClass, "new(2)", [2], l, r);
}

function Grace_isTrue(o) {
    if (o._value === false)
        return false;
    if (o._value === true)
        return true;
    throw new GraceExceptionPacket(ProgrammingErrorObject,
        new GraceString("non-Boolean object " + describe(o) + " used as condition."));
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
            minigrace.stderr_write(s._value);
        } catch (ex) {
            minigrace.stderr_write(describe(obj));
        }
    } finally {
        if (! inBrowser) minigrace.stderr_write("\n");
        return GraceDone;
    }
}

function Grace_length(obj) {
    return new GraceNum(obj._value.length);
}

var GraceMatchResultPrototype = Grace_allocObject(GraceBoolean, "matchResult");
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
    return callmethod(GraceBindingClass(), "key(1)value(1)", [1, 1], this, other);
};

function GraceSuccessfulMatch(result, bindings) {
    this.data = {};
    this.data['result'] = result;
    if (bindings === undefined)
        bindings = GraceEmptySequence();
    this.data['bindings'] = bindings;
    this._value = true;
}
GraceSuccessfulMatch.prototype = GraceMatchResultPrototype;

function GraceFailedMatch(result) {
    this.data = {};
    this.data['result'] = result;
    this.data['bindings'] = GraceEmptySequence();
    this._value = false;
}
GraceFailedMatch.prototype = GraceMatchResultPrototype;

function GraceTypeIntersection(l, r) {
    var opClass = callmethod(Grace_prelude, "TypeIntersection", [0]);
    return callmethod(opClass, "new(2)", [2], l, r);
}
function GraceTypeUnion(l, r) {
    var opClass = callmethod(Grace_prelude, "TypeUnion", [0]);
    return callmethod(opClass, "new(2)", [2], l, r);
}
function GraceTypeVariant(l, r) {
    var opClass = callmethod(Grace_prelude, "TypeVariant", [0]);
    return callmethod(opClass, "new(2)", [2], l, r);
}
function GraceTypeSubtraction(l, r) {
    var opClass = callmethod(Grace_prelude, "TypeSubtraction", [0]);
    return callmethod(opClass, "new(2)", [2], l, r);
}

function GraceType(name) {
    this.name = name;
    this.typeMethods = [];
    this.typeTypes = {};
}
GraceType.prototype = {
    methods: {
        "isMe(1)":          object_isMe,
        "≠(1)":             object_notEquals,
        "basicAsString":    object_basicAsString,
        "debugValue":       object_debugValue,
        "debugIterator":    object_debugIterator,
        "::(1)":            object_colonColon,
        "match(1)": function type_match (argcv, other) {
            for (var i=0; i<this.typeMethods.length; i++) {
                var m = this.typeMethods[i];
                if (!other.methods[m]) {
                    return GraceFalse;
                }
            }
            return new GraceSuccessfulMatch(other);
        },
        "|(1)": function type_or(argcv, other) {
            return new GraceTypeVariant(this, other);
        },
        "&(1)": function type_and(argcv, other) {
            return new GraceTypeIntersection(this, other);
        },
        "+(1)": function type_and(argcv, other) {
            return new GraceTypeUnion(this, other);
        },
        "-(1)": function type_and(argcv, other) {
            return new GraceTypeSubtraction(this, other);
        },
        "asString": function type_asString (argcv) {
            return new GraceString("type " + this.name);
        },
        "asDebugString": function type_asDebugString (argcv) {
            return new GraceString("built-in type " + this.name);
        },
        "methodNames": function type_methodNames (argcv) {
            var result = callmethod(Grace_prelude, "emptySet", [0]);
            for (var i=0; i<this.typeMethods.length; i++) {
                var methName = canonicalMethodName(this.typeMethods[i]);
                callmethod(result, "add(1)", [1], new GraceString(methName));
            }
            return result;
        },
        "typeNames": function type_typeNames (argcv) {
            var result = callmethod(Grace_prelude, "emptySet", [0]);
            for (var nm in this.typeTypes) {
                if (this.typeTypes.hasOwnProperty(nm)) {
                    callmethod(result, "add(1)", [1], new GraceString(nm));
                }
            }
            return result;
        },
        "==(1)": function type_identity (argcv, other) {
            return selfRequest(this, "isMe(1)", [1], other)
        }
    },
    className: "Type",
    definitionModule: "basic library",
    definitionLine: 0
};

function evaluateTypeInType(name, type) {
	return type.typeTypes[name];
};

function GraceBlock(recvr, lineNum, numParams) {
    this.definitionModule = recvr.definitionModule;
    this.definitionLine = lineNum;
    this.numParams = numParams;
    this.receiver = recvr;
}

GraceBlock.prototype = {
    methods: {
        "isMe(1)":          object_isMe,
        "≠(1)":             object_notEquals,
        "basicAsString":    object_basicAsString,
        "asDebugString":    object_asDebugString,
        "debugValue":       object_debugValue,
        "debugIterator":    object_debugIterator,
        "::(1)":            object_colonColon,
        "apply": function(argcv) {
            return this.real.call(this.receiver); },
        "apply(1)": function(argcv, a1) {
            checkBlockApply.call(this, 1, a1);
            return this.real.call(this.receiver, a1); },
        "apply(2)": function(argcv, a1, a2) {
            checkBlockApply.call(this, 2, a1, a2);
            return this.real.call(this.receiver, a1, a2); },
        "apply(3)": function(argcv, a1, a2, a3) {
            checkBlockApply.call(this, 3, a1, a2, a3);
            return this.real.call(this.receiver, a1, a2, a3); },
        "apply(4)": function(argcv, a1, a2, a3, a4) {
            checkBlockApply.call(this, 4, a1, a2, a3, a4);
            return this.real.call(this.receiver, a1, a2, a3, a4); },
        "apply(5)": function(argcv, a1, a2, a3, a4, a5) {
            checkBlockApply.call(this, 5, a1, a2, a3, a4, a5);
            return this.real.call(this.receiver, a1, a2, a3, a4, a5); },
        "apply(6)": function(argcv, a1, a2, a3, a4, a5, a6) {
            checkBlockApply.call(this, 6, a1, a2, a3, a4, a5, a6);
            return this.real.call(this.receiver, a1, a2, a3, a4, a5, a6); },
        "apply(7)": function(argcv, a1, a2, a3, a4, a5, a6, a7) {
            checkBlockApply.call(this, 7, a1, a2, a3, a4, a5, a6, a7);
            return this.real.call(this.receiver, a1, a2, a3, a4, a5, a6, a7); },
        "apply(8)": function(argcv, a1, a2, a3, a4, a5, a6, a7, a8) {
            checkBlockApply.call(this, 8, a1, a2, a3, a4, a5, a6, a7, a8);
            return this.real.call(this.receiver, a1, a2, a3, a4, a5, a6, a7, a8); },
        "apply(9)": function(argcv, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
            checkBlockApply.call(this, 9, a1, a2, a3, a4, a5, a6, a7, a8, a9);
            return this.real.call(this.receiver, a1, a2, a3, a4, a5, a6, a7, a8, a9); },
        "applyIndirectly(1)": function GraceBlock_applyIndirectly (argcv, a) {
            var argList = a._value;
            if (! argList) {
                if (a.data && a.data.jsArray) {
                    argList = a.data.jsArray;
                }
            }
            // APB: 2015 09 08.  This is a horrible hack.
            // a._value          => a is a PrimitiveGraceList or Lineup
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
        "match(1)": GraceBlock_match,
        "asString": function GraceBlock_asString (argcv) {
            return new GraceString("block<" + this.definitionModule +
                                   ":" + this.definitionLine + ">");
        }
    },
    className: "block"
};

function blockWrongArityException(numArgs) {
    var plural = (this.numParams === 1) ? "" : "s";
    throw new GraceExceptionPacket(RequestErrorObject,
        new GraceString("block requires " + this.numParams + " argument" +
                plural + " but given " + numArgs + " arguments."));
}

function checkBlockApply(numargs) {
    var args = Array.prototype.slice.call(arguments, 1);
        // makes a copy of arguments, without element at index 0
    var nArgs = args.length;
    setLineNumber(this.definitionLine);
    setModuleName(this.definitionModule);
    if (nArgs !== this.numParams) {
        var plural = (this.numParams === 1) ? "" : "s";
        throw new GraceExceptionPacket(RequestErrorObject,
            new GraceString("block takes " + this.numParams + " argument" +
                plural + " but given " + nArgs + "."));
    }
    if (this.guard.apply(this.receiver, args)) return;
    for (var ix = 0; ix < this.paramTypes.length; ix++) {
        var typeSpec = this.paramTypes[ix]
        var match = callmethod(typeSpec, "match(1)", [1], args[ix]);
        if ( ! Grace_isTrue(match)) {
            var n = ix + 1;
            var canonicalName = "apply(_";
            for (var i = 1; i < numargs; i++) { canonicalName += ",_"; }
            canonicalName += ")";
            var typeName = callmethod(typeSpec, "asString", [0])._value;
            if (typeName.match(/type ‹anon›/)) {
                typeName = "required type";
            }
            var argDesc = (numargs === 1) ? "argument" : "argument " + n ;
            if (typeSpec.className.startsWith("Type")) {
                // startsWith("Type") catches TypeIntersection, TypeUnion,
                // etc, as well as class "Type" itself.
                raiseTypeError(argDesc + " to block." + canonicalName +
                            " does not have " + typeName,
                            typeSpec, args[ix]);
            } else {
                throw new GraceExceptionPacket(RequestErrorObject,
                   new GraceString(argDesc + " to block." +
                       canonicalName + " does not match pattern"));
            }

        }
    }
}

function assertTypeOrMsg(obj, type, objDesc, typeDesc) {
    if (type.methods["match(1)"]) {
        if (!Grace_isTrue(request(type, "match(1)", [1], obj))) {
            let message = objDesc + " does not have type " + typeDesc;
            raiseTypeError(message, type, obj);
        }
    } else {
        throw new GraceExceptionPacket(ProgrammingErrorObject,
                new GraceString("while checking that " + objDesc + " has type " +
                  typeDesc + ", found that " + typeDesc + " is not a type"));
    }
}

function raiseTypeError(msg, type, value) {
    var diff;
    if (GraceDone === value) {
        diff = " — it is `done`.";
    } else {
        var mm = do_import("mirrors", gracecode_mirrors);
        try {
             var tc = callmethod(mm, "loadDynamicModule(1)", [1], new GraceString("typeComparison"));
             var missing = callmethod(tc, "methodsIn(1)missingFrom(1)", [1, 1], type, value)._value;
             var s = (missing.includes(" ")) ? "s " : " ";
             diff = ".\nIt is missing method" + s + missing + ".";
        } catch (ex) {
             // if something goes wrong while generating the message, just give up
        }
        if (! diff) { diff = ""; }
    }
    var ex = new GraceExceptionPacket(TypeErrorObject,
                                      new GraceString(msg + diff));
    throw ex;
}

function GraceBlock_match(argcv, o) {
    if (!this.guard) {
        if (argcv.length !== 1 || argcv[0] !== 1) {
            throw new GraceExceptionPacket(ProgrammingErrorObject,
                    new GraceString("block is not a matching block"));
        }
        var rv1 = callmethod(this, "apply(1)", [1], o);
        return new GraceSuccessfulMatch(rv1);
    }
    if (this.guard(o)) {
        var rv2 = callmethod(this, "apply(1)", [1], o);
        return new GraceSuccessfulMatch(rv2);
    }
    return GraceFalse;
}

function classType(o) {
    var t = new GraceType(capitalize(o.className));
    for (var m in o.methods) {
        if (! o.methods[m].confidential) {
            t.typeMethods.push(m);
        }
    };
    if (o.types) {
        for (var t in o.types) {
            t.typeTypes[t] = o.types[t]
        }
    }
    return t;
}

var var_graceObject = new GraceObject();
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
var_Block.typeMethods.push("applyIndirectly(1)");
var_Block.typeMethods.push("match(1)");
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
GraceHashMap.prototype.methods['put(2)'] = function(argcv, k, v) {
    var hc = callmethod(k, "hash", [0]);
    hc = hc._value;
    while (this.table[hc]) {
        if (Grace_isTrue(callmethod(this.table[hc].key, "==(1)", [1], k)))
            break;
        hc++;
    }
    this.size++;
    this.table[hc] = {key: k, value: v};
    return this;
};
GraceHashMap.prototype.methods['get(1)'] = function(argcv, k) {
    var hc = callmethod(k, "hash", [0]);
    hc = hc._value;
    while (this.table[hc]) {
        if (Grace_isTrue(callmethod(this.table[hc].key, "==(1)", [1], k)))
            return this.table[hc].value;
        hc++;
    }
    throw new GraceExceptionPacket(RuntimeErrorObject,
            new GraceString("key not found in HashMap"));
};
GraceHashMap.prototype.methods['contains(1)'] = function(argcv, k) {
    var hc = callmethod(k, "hash", [0]);
    hc = hc._value;
    while (this.table[hc]) {
        if (Grace_isTrue(callmethod(this.table[hc].key, "==(1)", [1], k)))
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
        throw new GraceExceptionPacket(ie,
            new GraceString("on built-in list " + this._value));
};

function GraceStringIterator(s) {
    this._value = s._value;
    this._index = 0;
    this._max = s._value.length;
    this.className = "stringIterator";
}
GraceStringIterator.prototype = {
    methods: {
        "isMe(1)":          object_isMe,
        "≠(1)":             object_notEquals,
        "basicAsString":    object_basicAsString,
        "asDebugString":    object_asDebugString,
        "debugValue":       object_debugValue,
        "debugIterator":    object_debugIterator,
        "::(1)":            object_colonColon,
        hasNext: function() {
            return ((this._index < this._max) ? GraceTrue : GraceFalse);
        },
        next: function() {
            if (this._index >= this._max) {
                var ie = callmethod(var___95__prelude, "IteratorExhausted", [0]);
                throw new GraceExceptionPacket(ie,
                    new GraceString("on string " + this._value));
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
    throw new GraceExceptionPacket(ie,
        new GraceString("on primitiveArray " + this._value));
};

var stdout = Grace_allocObject(GraceObject, "stdout");
stdout.buffer = "";
stdout.methods["write(1)"] = function(argcv, s) {
    var str = s._value;
    if (inBrowser) {
        var lastNewline = str.lastIndexOf("\n");
        if (lastNewline != -1) {
            minigrace.stdout_write(stdout.buffer + str.substring(0, lastNewline + 1));
            stdout.buffer = str.substring(lastNewline + 1);
        } else {
            stdout.buffer = stdout.buffer + str;
        }
    } else {
        minigrace.stdout_write(str);
    }
    return GraceDone;
};
stdout.methods.pathname = function() { return new GraceString("/dev/stdout"); };
stdout.methods.isatty = function() {
    if (! inBrowser) {
        return Boolean(process.stdout.isTTY) ? GraceTrue : GraceFalse;
    } else {
        return GraceFalse;
    }
};
stdout.methods.close = function() {
    if (stdout.buffer.length > 0) {
        minigrace.stdout_write(stdout.buffer);
        stdout.buffer = "";
    }
    if (! inBrowser) { replaceMethodsOnClose(stdout); }
    return GraceDone;
};
stdout.methods.clear = function() {throw new GraceExceptionPacket(IoExceptionObject,
    new GraceString("method \"clear\" not implemented on stdout"));};
stdout.methods["seek(1)"] = function() { throw new GraceExceptionPacket(IoExceptionObject,
    new GraceString("method \"seek(_)\" not implemented on stdout"));};
stdout.methods["seekForward(1)"] = function() { throw new GraceExceptionPacket(IoExceptionObject,
    new GraceString("method \"seekForward(_)\" not implemented on stdout"));};
stdout.methods["seekBackward(1)"] = function() { throw new GraceExceptionPacket(IoExceptionObject,
    new GraceString("method \"seekBackward(_)\" not implemented on stdout"));};
stdout.methods.hasNext = function() {return GraceFalse;};
stdout.methods.next = function() { throw new GraceExceptionPacket(IoExceptionObject,
    new GraceString("method \"next\" not implemented on stdout"));};
stdout.methods.size = function() { throw new GraceExceptionPacket(IoExceptionObject,
    new GraceString("method \"size\" not implemented on stdout"));};
stdout.methods.eof = function() {return GraceTrue;};
stdout.methods['==(1)'] = function (argcv, other) {
    return (this===other) ? GraceTrue : GraceFalse;
};
function streamIsClosedException(argcv) {
    throw new GraceExceptionPacket(IoExceptionObject,
        new GraceString("operation attempted on closed FileStream"));
};
function replaceMethodsOnClose(o) {
    o.methods.size = streamIsClosedException;
    o.methods.close = streamIsClosedException;
    o.methods.isatty = streamIsClosedException;
    o.methods["write(1)"] = streamIsClosedException;
    o.methods.read = streamIsClosedException;
    o.methods.clear = streamIsClosedException;
    o.methods["seek(1)"] = streamIsClosedException;
    o.methods["seekForward(1)"] = streamIsClosedException;
    o.methods["seekBackward(1)"] = streamIsClosedException;
    o.methods.hasNext = streamIsClosedException;
    o.methods.next = streamIsClosedException;
    o.methods.nextLine = streamIsClosedException;
};

var stdin = Grace_allocObject(GraceObject, "stdin");
stdin.lineBuffer = "";
stdin.lineCursor = 0;
stdin.methods.getline = function() {
    return new GraceString(minigrace.stdin_read());
};
stdin.methods.nextLine = function() {
    return new GraceString(minigrace.stdin_read());
};
stdin.methods.read = function() {
    return new GraceString(minigrace.stdin_read());
};
stdin.next = function () {
    if (stdin.lineCursor >= stdin.lineBuffer.length) {
        stdin.lineCursor = 0;
        stdin.lineBuffer = minigrace.stdin_read() + "\n";
    }
    stdin.lineCursor++;
    return stdin.lineBuffer.charAt(stdin.lineCursor - 1);
}
stdin.methods.iterator = function() {
    return callmethod(new GraceString(minigrace.stdin_read()), "iterator", [0]);
};
stdin.methods.isatty = function() {
    if (inBrowser) { return GraceFalse; }
    return Boolean(process.stderr.isTTY) ? GraceTrue : GraceFalse;
};
stdin.methods.pathname = function() { return new GraceString("/dev/stdin"); };
stdin.methods.size = function() { throw new GraceExceptionPacket(IoExceptionObject,
    new GraceString("method \"size\" not implemented on stdin"));};
stdin.methods.close = function() {
    replaceMethodsOnClose(stdin);
};
stdin.methods['==(1)'] = function (argcv, other) {
    return (this===other) ? GraceTrue : GraceFalse;
};


var stderr = Grace_allocObject(GraceObject, "stderr");
stderr.methods['write(1)'] = function(junk, s) {
    minigrace.stderr_write(s._value);
    return GraceDone;
};
stderr.methods.isatty = function() {
    if (inBrowser) { return GraceFalse; }
    return Boolean(process.stderr.isTTY) ? GraceTrue : GraceFalse;
};
stderr.methods.pathname = function() {
    return new GraceString("/dev/stderr");
};
stderr.methods.close = function() {
    if (! inBrowser) { replaceMethodsOnClose(stdout); }
};
stderr.methods['==(1)'] = function (argcv, other) {
    return (this===other) ? GraceTrue : GraceFalse;
};


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
        for (var v in this.variables) {
            if (this.variables.hasOwnProperty(v)) {
                f(v, this.getVar(v));
            }
        }
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
        return eval("typeof(" + graceModuleName(baseName) + ")") !== "undefined";
    }
    return false;
}

function gracecode_io() {
    var FileStream = classType(stdout);
    FileStream.name = "FileStream";
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
    this.methods['FileStream'] = function () {
        return FileStream;
    };

    this.methods['IoException'] = function(argcv) {
        return IoExceptionObject;
    };
    this.methods['FileException'] = function(argcv) {
        return FileExceptionObject;
    };
    this.methods['exists(1)'] = function(argcv, path) {
        if (!inBrowser) {
            return (fs.existsSync(safeJsString(path)) ? GraceTrue : GraceFalse);
        }
        if (!identifierAvailable("file",path._value)) return GraceTrue;
        return GraceFalse;
    };
    this.methods['unlink(1)'] = function (argcv, data) {
        if (inBrowser) {
            var fileKey = "file:" + data._value;
            if (! localStorage.hasOwnProperty(fileKey)) {
                throw new GraceExceptionPacket(EnvironmentExceptionObject,
                    new GraceString("can't unlink file \"" + data._value +"\" because it does not exist."));
            } else {
                removeFileFromTree(data._value);
                localStorage.removeItem(fileKey);
            }
        } else {
            try {
                fs.unlinkSync(data._value);
            } catch (ex) {
                throw new GraceExceptionPacket(EnvironmentExceptionObject,
                    new GraceString("can't unlink file '" + data._value));
            }
        }
        return GraceDone;
    };
    this.methods['system(1)'] = function(argcv, systemString) {
        if (!inBrowser) {
            try {
                var result = child_process.execSync(safeJsString(systemString),
                    {stdio: [process.stdin, process.stdout, process.stderr]});
                return GraceTrue;
            } catch(ex) {
                return GraceFalse;
            }
        }
        return GraceFalse;
    };
    this.methods['spawn(2)'] = function(argcv, gCmd, gArgList) {
        if (!inBrowser) {
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
            o.methods['==(1)'] = function (argcv, other) {
                return (this===other) ? GraceTrue : GraceFalse; };
            return o;
        }
        return GraceFalse;
    };
    this.methods['open(2)'] = function browserOpen(argcv, path, mode) {
            path = inBrowser ? path._value : callmethod(path, "asString", [0])._value;
            var o = Grace_allocObject(GraceObject, "fileStream");
            var fileMode = mode._value;
            var fileName = inBrowser ? "file:"+path : path;
            var lastPeriod = fileName.lastIndexOf(".");
            var fileExtension = fileName.substring(lastPeriod);
            var textExtensions = [".grace", ".txt", ".json", ".xml", ".js", ".html", ".xhtml"];
            var contents, write_allowed, read_only, append_mode,
                rw_pointer, isFile_creation_needed, content_length, nodeFileObject;

            //Determine File Mode
            fileMode = fileMode.toLowerCase();
            append_mode = (fileMode === "a");
            write_allowed = fileMode.includes("w") || append_mode;
            read_only = (fileMode === "r");

            if (inBrowser) {
                //Enforce specified file types for IDE
                if (!textExtensions.includes(fileExtension)) {
                    throw new GraceExceptionPacket(IoExceptionObject,
                        new GraceString("can't open file \"" + path + "\" due to unsupported file type: " + fileExtension));
                }

                isFile_creation_needed = identifierAvailable("file", path);

                //Check to see if reading a non-existing file
                if (read_only && isFile_creation_needed) {
                    throw new GraceExceptionPacket(EnvironmentExceptionObject,
                        new GraceString("can't open file " + path + " in mode " + fileMode + " because it does not exist"));
                }

                //Add the file to the UI, if needed
                if (write_allowed && isFile_creation_needed) {
                    var directory = getDirectoryName(path);

                    //Check to see if the file's directory exists
                    if ((directory !== path) && identifierAvailable("directory", directory)) {
                        throw new GraceExceptionPacket(EnvironmentExceptionObject,
                            new GraceString("can't create file \"" + path + "\" because directory \"" + directory + "\" does not exist."));
                    }
                }
            } else {
                if (!fs.existsSync(path) && read_only) {
                    throw new GraceExceptionPacket(EnvironmentExceptionObject,
                        new GraceString("can't open file '" + path + "' for '" + fileMode + "'."));
                }
            }

            //Get and parse file
            contents = getFile(fileName);
            if (contents === undefined || fileMode==="w") {
                contents = "";
                content_length = 0;
            } else {
                content_length = contents.length;
            }
            if (append_mode && contents !== undefined) {
                rw_pointer = contents.length;
            } else {
                rw_pointer = 0;
            }

            //------ IO Methods --------
            o.methods['write(1)'] = function (argcv, data) {
                var new_contents;
                if (write_allowed) {
                    if (contents && inBrowser) {
                        new_contents = contents.slice(0,rw_pointer) + data._value + contents.slice((rw_pointer)+(data._value.length));
                    } else {
                        new_contents = safeJsString(data);
                    }

                    //Update buffer values only
                    if (fileMode === "w" && !inBrowser) {
                        contents = contents + new_contents;
                        rw_pointer += new_contents.length;
                    } else if (inBrowser) {
                        contents = new_contents;
                        rw_pointer += data._value.length;
                    }

                    content_length = contents.length;
                    return GraceDone;
                } else {
                    throw new GraceExceptionPacket(ProgrammingErrorObject,
                        new GraceString("can't write to file \""+path+"\" in read-only mode."));
                }
            };
            o.methods['clear'] = function () {
                if (write_allowed) {
                    contents = "";
                    rw_pointer = 0;
                    content_length = 0;
                    return GraceDone;
                } else {
                    throw new GraceExceptionPacket(ProgrammingErrorObject,
                        new GraceString("can't clear file \"" + path + "\" in read-only mode."));
                }
            };
            o.methods['getline'] = function () {
                var resultLine;
                var newline_index = contents.indexOf("\n", rw_pointer);

                //Check for last-line or EOF case and narrow-down to next line from rw_pointer
                if (newline_index !== -1) {
                    resultLine = contents.slice(rw_pointer, newline_index);
                } else {
                    resultLine = contents.slice(rw_pointer);
                }

                //Update rw_pointer to take into account returned value
                rw_pointer += (resultLine.length + 1);

                return new GraceString(resultLine);
            };
            o.methods['nextLine'] = function () {
                if (rw_pointer >= contents.length) {
                    var ie = callmethod(var___95__prelude, "IteratorExhausted", [0]);
                    throw new GraceExceptionPacket(ie, new GraceString("End of file reached; there is no next line"));
                }
                var resultLine;
                var newline_index = contents.indexOf("\n", rw_pointer);

                //Check for last-line or EOF case and narrow-down to next line from rw_pointer
                if (newline_index !== -1) {
                    resultLine = contents.slice(rw_pointer, newline_index);
                } else {
                    resultLine = contents.slice(rw_pointer);
                }

                //Update rw_pointer to take into account returned value
                rw_pointer += (resultLine.length + 1);

                return new GraceString(resultLine);
            };
            //Seek Methods
            o.methods['seek(1)'] = function (argcv, data) {
                var pointer = parseFloat(data._value);
                //Check for NaN and for non-integer input
                checkSeekInput(data.className, pointer, "seek(_)");

                if (pointer<0){pointer=0}
                else if (pointer>content_length){pointer=content_length}

                rw_pointer=pointer;
                return this;
            };
            o.methods['seekForward(1)'] = function (argcv, data) {
                var pointer = parseFloat(data._value);
                //Check for NaN and for non-integer input
                checkSeekInput(data.className, pointer, "seekForward(_)");

                pointer = rw_pointer+pointer;

                if (pointer<0){pointer=0}
                else if (pointer>content_length){pointer=content_length}

                rw_pointer=pointer;
                return this;
            };
            o.methods['seekBackward(1)'] = function (argcv, data) {
                var pointer = parseFloat(data._value);
                //Check for NaN and for non-integer input
                checkSeekInput(data.className, pointer, "seekBackward(_)");

                pointer = rw_pointer-pointer;

                if (pointer<0){pointer=0}
                else if (pointer>content_length){pointer=content_length}

                rw_pointer=pointer;
                return this;
            };
            o.methods['hasNext'] = function () {
                return (rw_pointer < content_length) ? GraceTrue : GraceFalse;
            };
            o.methods['next'] = function () {
                if (rw_pointer < content_length){
                    var char = new GraceString(contents.charAt(rw_pointer));
                    rw_pointer++;
                    return char;
                } else {
                    var ie = callmethod(var___95__prelude, "IteratorExhausted", [0]);
                    throw new GraceExceptionPacket(ie, new GraceString(
                        "End of file reached; there is no next character"));
                }
            };
            o.methods['close'] = function () {
                //Update system storage with buffered contents
                if (inBrowser && fileMode === "w") {
                    if (identifierAvailable("file",path)) { addFileToTree(path); }
                    writeFileToDisk(fileName, contents);
                } else if (!inBrowser && fileMode === "w") {
                    writeFileToDisk(fileName, contents);
                }
                replaceMethodsOnClose(o);
                return GraceDone;
            };
            o.methods['pathname'] = function () { return new GraceString(path); };
            o.methods['eof'] =  function () { return (rw_pointer < content_length) ? GraceFalse : GraceTrue; };
            o.methods['read'] = function () { return new GraceString(contents.toString()); };
            o.methods['size'] = function () { return new GraceNum(content_length); };
            o.methods['iterator'] = function () { return this; };
            o.methods['isatty'] = function () { return GraceFalse;}; //tty not currently possible
            o.methods['==(1)'] = function (argcv, other) { return (this===other) ? GraceTrue : GraceFalse; };
        return o;
    };
    function checkSeekInput(className, value, method) {
        if (className !== "number"){
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("in request of `"+method+"`, the argument is not of type Number"));
        }
        else if (!Number.isInteger(value)) {
            throw new GraceExceptionPacket(RequestErrorObject,
                new GraceString("in request of `"+method+"`, the argument is not an integer"));
        }
    }
    this.methods['realpath(1)'] = function io_browser_realpath (argcv, x) {
        if (!inBrowser) {
            var arg = safeJsString(x);
            try {
                return new GraceString(fs.realpathSync(arg));
            } catch (ex) {
                throw new GraceExceptionPacket(RequestErrorObject,
                        new GraceString("can't get real path for \"" + arg + "\""));
            }
        }
        return x;
    };
    this.methods['listdir(1)'] = function (argcv, x) {
        if (!inBrowser) {
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
    this.methods['newer(2)'] = function io_browser_newer(argcv, jsFile, sourceFile) {
        return GraceTrue;
    };
    this.methods['ask(1)'] = function io_ask(argcv, question) {
        return new GraceString(minigrace.ask(question._value));
    };
    return this;
}

if (typeof gctCache !== "undefined")
  gctCache["io"] = "classes:\nconfidential:\ndialect:\n standardGrace\nfresh-methods:\n error\n input\n open(2)\n output\nfresh:error:\n close\n eof\n getline\n hasNext\n isatty\n iterator\n next\n nextLine\n pathname\n read\n readBinary(1)\n seek(1)\n seekBackward(1)\n seekForward(1)\n write(1)\n writeBinary(1)\nfresh:input:\n close\n eof\n getline\n hasNext\n isatty\n iterator\n next\n nextLine\n pathname\n read\n readBinary(1)\n seek(1)\n seekBackward(1)\n seekForward(1)\n write(1)\n writeBinary(1)\nfresh:open(2):\n close\n eof\n getline\n hasNext\n isatty\n iterator\n next\n nextLine\n pathname\n read\n readBinary(1)\n seek(1)\n seekBackward(1)\n seekForward(1)\n write(1)\n writeBinary(1)\nfresh:output:\n close\n eof\n getline\n hasNext\n isatty\n iterator\n next\n nextLine\n pathname\n read\n readBinary(1)\n seek(1)\n seekBackward(1)\n seekForward(1)\n write(1)\n writeBinary(1)\nmethodtypes-of:FileStream:\n & 2\n & Object\n 2 ==(other:Unknown) → Boolean\n 2 clear → FileStream\n 2 close → Done\n 2 hasNext → Boolean\n 2 isatty → Boolean\n 2 iterator → FileStream\n 2 next → String\n 2 nextLine → String\n 2 pathname → String\n 2 read → String\n 2 seek(n:Number) → FileStream\n 2 seekBackward(n:Number) → FileStream\n 2 seekForward(n:Number) → FileStream\n 2 size → Number\n 2 write(s:String) → Done\nmethodtypes-of:IO:\n & 3\n & Object\n 3 IoException → prelude.ExceptionKind\n 3 ask(question:String) → String\n 3 changeDirectory(dirPath:String) → Done\n 3 env → Dictionary⟦String, String⟧\n 3 error → FileStream\n 3 exists(path:String) → Boolean\n 3 input → FileStream\n 3 listdir(dirPath:String) → Sequence⟦String⟧\n 3 newer(path1:String, path2:String) → Boolean\n 3 open(path:String, mode:String) → FileStream\n 3 output → FileStream\n 3 realpath(path:String) → String\n 3 spawn(executable:String, args:Collection⟦String⟧) → Process\n 3 system(command:String) → Boolean\n 3 unlink(path:String) → Done\nmethodtypes-of:Process:\n & 4\n & Object\n 4 status → Number\n 4 success → Boolean\n 4 terminated → Boolean\n 4 wait → Number\nmodules:\n collectionsPrelude\n standardGrace\npath:\n /Users/black/Development/mg/gracelang/minigrace/stubs/io.grace\npublic:\n FileStream\n IO\n Process\n ask(1)\n error\n exists(1)\n input\n listdir(1)\n newer(2)\n open(2)\n output\n realpath(1)\n spawn(2)\n system(1)\ntypes:\n FileStream\n IO\n Process\n";

function gracecode_sys() {
    var startTime = (new Date).getTime()/1000;
    this.methods.argv = function() {
        if (!inBrowser) {
            var list = [];
            process.argv.forEach(function(val, index, array) {
                if (index > 0)   // element 0 is /usr/local/bin/node, or similar
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
    this.methods['exit(1)'] = function(argcv, code) {
        if (typeof process === "undefined") {
            throw "SystemExit";
        } else {
            process.exit(code._value);
        }
    };
    this.methods.execPath = function() {
        if (typeof minigrace.execFile === "undefined") {
            return new GraceString(".");
        }
        var execFile = minigrace.execFile;
        var slashIx = execFile.lastIndexOf("/");
        var execDir = execFile.substring(0, slashIx + 1);  //includes the trailing /
        return new GraceString(execDir);
    };
    this.methods.environ = function() {
        var o = Grace_allocObject(GraceObject, "environmentObject");
        o.methods['at(1)'] = function environ_at(argcv, key) {
            if (!inBrowser) {
                var str = safeJsString(key);
                if (str in process.env)
                    return new GraceString(process.env[str]);
            }
            return GraceEmptyString;
        };
        o.methods['at(1)put(1)'] = function environ_at_put(argcv, key, value) {
            if (!inBrowser) {
                var kstr = safeJsString(key);
                var vstr = safeJsString(value);
                process.env[kstr] = vstr;
            }
            return GraceTrue;
        };
        o.methods['contains(1)'] = function environ_contains(argcv, searchkey) {
            if (!inBrowser) {
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
    this.methods.requestCount = function(argcv) {
        return new GraceNum(invocationCount);
    };
    return this;
}

if (typeof gctCache !== "undefined")
    gctCache['sys'] = "fresh:environ:\n self\n ≠\n basicAsString\n asDebugString\n ::\n at\n ==(1)\n at(1)put(1)\n !=\n contains(1)\n asString\nmodules:\nfresh-methods:\n environ\npath:\n sys\nclasses:\npublic:\n Environment\n argv\n elapsed\n elaspedTime\n exit(1)\n execPath\n environ\nconfidential:\n";

function gracecode_unicode() {
    this.methods['isLetter(1)'] = function unicode_isLetter(argcv, s) {
        if (typeof s._value === "number")
            s = String.fromCharCode(s._value);
        else s = s._value;
        return ( ( unicode.inCategory(s, "Ll") ||
                   unicode.inCategory(s, "Lu") ||
                   unicode.inCategory(s, "Lo") ||
                   unicode.inCategory(s, "Lm") ) ? GraceTrue : GraceFalse);
    };
    this.methods['isNumber(1)'] = function unicode_isNumber(argcv, s) {
        if (typeof s._value === "number")
            s = String.fromCharCode(s._value);
        else s = s._value;
        return ( ( unicode.inCategory(s, "Nd") ||
                   unicode.inCategory(s, "No") ||
                   unicode.inCategory(s, "Nl") ) ? GraceTrue : GraceFalse);
    };
    this.methods['isSymbolMathematical(1)'] = function unicode_isSymbolMathematical(argcv, s) {
        if (typeof s._value === "number")
            s = String.fromCharCode(s._value);
        else s = s._value;
        return ((unicode.inCategory(s, "Sm")) ? GraceTrue : GraceFalse);
    };
    this.methods['isSeparator(1)'] = function unicode_isSeparator(argcv, s) {
        if (typeof s._value === "number")
            s = String.fromCharCode(s._value);
        else s = s._value;
        return ( ( unicode.inCategory(s, "Zs") ||
                   unicode.inCategory(s, "Zp") ||
                   unicode.inCategory(s, "Zl") ) ? GraceTrue : GraceFalse);
    };
    this.methods['isControl(1)'] = function unicode_isControl(argcv, s) {
        if (typeof s._value === "number")
            s = String.fromCharCode(s._value);
        else s = s._value;
        return ( ( unicode.inCategory(s, "Cf") ||
                   unicode.inCategory(s, "Cc") ||
                   unicode.inCategory(s, "Co") ||
                   unicode.inCategory(s, "Cs") ) ? GraceTrue : GraceFalse);
    };
    this.methods['inCategory(2)'] = function unicode_inCategory(argcv, s, c) {
        if (typeof s._value === "number")
            s = String.fromCharCode(s._value);
        else s = s._value;
        return ((unicode.inCategory(s, c._value)) ? GraceTrue : GraceFalse);
    };
    this.methods['category(1)'] = function unicode_category(argcv, s) {
        return new GraceString(unicode.category(s._value));
    };
    this.methods['name(1)'] = function unicode_name(argcv, s) {
        return new GraceString(unicode.name(s._value));
    };
    this.methods['create(1)'] = function unicode_create(argcv, n) {
        return new GraceString(String.fromCharCode(n._value));
    };
    this.methods['pattern(1)'] = function unicode_pattern(argcv, patterns) {
        return new GraceUnicodePattern(patterns);
    };
    this.methods['pattern(1)not(1)'] = function unicode_pattern_not(argcv, patterns, excludes) {
        return new GraceUnicodePattern(patterns, excludes);
    };
    return this;
}

if (typeof gctCache !== "undefined")
    gctCache['unicode'] = "path:\n unicode\nclasses:\npublic:\n category(1)\n inCategory(2)\n isSeparator(1)\n isControl(1)\n isLetter(1)\n isNumber(1)\n isSymbolMathematical(1)\n create(1)\nconfidential:\nfresh-methods:\nmodules:\n";


function GraceUnicodePattern(pos, neg) {
    // this.pos and this.neg are Iterables of positive and negative items
    this.pos = pos._value;
        // APB: 2016 06 11     This is a horrible hack.
        // pos._value          => pos is a PrimitiveGraceList or Lineup
    if (! this.pos) {
        this.pos = [];
        var iter = callmethod(pos, "iterator", [0]);
        while (Grace_isTrue(callmethod(iter, "hasNext", [0]))) {
            var p = callmethod(iter, "next", [0]);
            this.pos.push(p);
        }
    }
    if (neg) {
        this.neg = neg._value;
        if (! this.neg) {
            this.neg = [];
            var niter = callmethod(pos, "iterator", [0]);
            while (Grace_isTrue(callmethod(niter, "hasNext", [0]))) {
                var n = callmethod(niter, "next", [0]);
                this.neg.push(n);
            }
        }
    }
}

GraceUnicodePattern.prototype = {
    methods: {
        "isMe(1)":          object_isMe,
        "≠(1)":             object_notEquals,
        "basicAsString":    object_basicAsString,
        "asString":         object_asString,
        "asDebugString":    object_asDebugString,
        "debugValue":       object_debugValue,
        "debugIterator":    object_debugIterator,
        "::(1)":            object_colonColon,
        'match(1)': function(argcv, o) {
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
                    if (unicode.inCategory(cc, t._value)) {
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
                        if (unicode.inCategory(cc, u._value)) {
                            success = false;
                            break;
                        }
                    }
                }
            }
            if (success)
                return new GraceSuccessfulMatch(o);
            return GraceFalse;
        }
    },
    typeMethods: [],
    className: "unicodePattern",
    definitionModule: "unicode",
    definitionLine: 0
};

var util_module = false;
var loadDate = Date.now();
var previousElapsed = Math.round(loadDate/10)/100;

function gracecode_util() {
    if (util_module !== false)
        return util_module;

    this.methods.asString = function(argcv) {
        return new GraceString('the "util" module');
    };
    this.methods.vtag = function(argcv) {
        return new GraceBoolean(false);
    };
    this.methods.outfile = function util_outfile(argcv) {
        return stdout;
    };
    this.methods.infile = function util_infile(argcv) {
        return stdin;
    };
    this.methods['parseargs(1)'] = function util_parseargs(argcv) {
        return GraceDone;
    };
    this.methods.target = function util_target(argcv) {
        return new GraceString(minigrace.mode);
    };
    this.methods.modname = function util_modname(argcv) {
        return new GraceString(minigrace.modname);
    };
    this.methods['setline(1)'] = function util_setline(argcv, i) {
        lineNumber = i._value;
        this._linenum = i;
    };
    this.methods.linenum = function util_linenum(argcv) {
        return this._linenum;
    };
    this.methods.linepos = function util_linepos(argcv) {
        return this._linepos;
    };
    this.methods['setPosition(2)'] = function util_setPosition(argcv, l, p) {
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
    this.methods.defaultVerbosity = function util_defaultVerbosity(argcv) {
        return new GraceNum(40);
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
                                     "): " + s._value);
            previousElapsed = elapsed;
        }
        return GraceDone;
    }
    this.methods['log(1)verbose(1)'] = util_log_verbose;

    this.methods['log_verbose(1)'] = function (argcv, s) {
        util_log_verbose([1, 1], new GraceNum(40), s);
    };
    this.methods['outprint(1)'] = function util_outprint(argcv, s) {
        minigrace.stdout_write(s._value + "\n");
        return GraceDone;
    };
    var obj_requiredModules = Grace_allocObject(GraceObject, "requiredModules");
    var obj_init_requiredModules = function () {
        var meth_isAlready = function(argcv) {    // method isAlready(1)
            var var_moduleName = arguments[1];
            setModuleName("util");
            var staticv = selfRequest(this, "static", [0]);
            var sc = callmethod(staticv, "contains(1)", [1], var_moduleName);
            if (Grace_isTrue(sc)) {
                return GraceTrue;
            }
            var otherv = selfRequest(this, "other", [0]);
            return callmethod(otherv, "contains(1)", [1], var_moduleName);
        };
        meth_isAlready.paramCounts = [1];
        meth_isAlready.variableArities = [false];
        obj_requiredModules.methods['isAlready(1)'] = meth_isAlready;
        meth_isAlready.definitionModule = "util";
        obj_requiredModules.data['static'] = callmethod(Grace_prelude, "emptySet", [0]);
        var reader_util_static1257 = function() {
            return this.data['static'];
        };
        reader_util_static1257.def = true;
        obj_requiredModules.methods['static'] = reader_util_static1257;
        obj_requiredModules.data['linkfiles'] = callmethod(Grace_prelude, "emptyList", [0]);
        var reader_util_linkfiles1260 = function() {
            return this.data['linkfiles'];
        };
        reader_util_linkfiles1260.def = true;
        obj_requiredModules.methods['linkfiles'] = reader_util_linkfiles1260;
        obj_requiredModules.data['other'] = callmethod(Grace_prelude, "emptySet", [0]);
        var reader_util_other1263 = function() {
            return this.data['other'];
        };
        reader_util_other1263.def = true;
        obj_requiredModules.methods['other'] = reader_util_other1263;
    };
    obj_init_requiredModules.apply(obj_requiredModules, []);
    var var_requiredModules = obj_requiredModules;
    var util_requiredmodules = function(argcv) {    // method requiredModules
        return var_requiredModules;
    };
    util_requiredmodules.paramCounts = [ 0 ];
    this.methods.requiredModules = util_requiredmodules;
    this.methods['debug(1)'] = function util_debug(argcv, s) {
        dbg(s._value);
        return GraceDone;
    };
    this.methods.interactive = function util_interactive(argcv) {
        return GraceFalse;
    };
    this.methods['splitPath(1)'] = function util_splitPath(argcv, pathString) {
        var locations = pathString._value.split(':');
        var result = callmethod(Grace_prelude, "emptyList", [0]);
        var len = locations.length;
        for (var i = 0; i < len; i++)
            callmethod(result, "addLast", [1], new GraceString(locations[i]));
        return result;
    };
    this.methods['file(1)on(1)orPath(1)otherwise(1)'] =
        function util_file_on_orPath_otherwise (argcv, fn, origin, pth, blk) {
        var jsFn = callmethod(fn, "asString", [0])._value;
        if (fileExists(jsFn)) return fn;
        return callmethod(blk, "apply(1)", [1], new GraceString("gct cache"));
    };
    this.methods['file(1)onPath(1)otherwise(1)'] = function (argcv, fn, p, blk) {
        var jsFn = fn._value;
        if (fileExists(jsFn)) return fn;
        return callmethod(blk, "apply(1)", [1], new GraceString("gct cache"));
    };
    this.methods.sourceDir = function util_sourceDir(argcv) {
        return new GraceString("./");
    };
    this.methods.outDir = function util_outDir(argcv) {
        return new GraceString("./");
    };
    this.methods['outDir:=(1)'] = function util_outDir_gets(argcv, newVal) {
        return GraceDone;
    };
    this.methods.execDir = function util_execDir(argcv) {
        return new GraceString("./");
    };
    this.methods['type_error(1)'] = function util_type_error(argcv, s) {
        minigrace.stderr_write(minigrace.modname + ".grace:" + this._linenum._value + ":" +
            this._linepos._value + ": type error: " + s._value);
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
    this.methods['syntaxError(5)'] = function util_syntaxError(argcv, message, errlinenum, position, arr, suggestions) {
        callmethod(this, "generalError(5)", [5], new GraceString("Syntax error: " + message._value), errlinenum,
            position, arr, suggestions);
    };
    this.methods['generalError(5)'] = function util_generalError(argcv, message, errlinenum, position, arr, suggestions) {
        minigrace.stderr_write(minigrace.modname + ".grace[" + errlinenum._value +
            position._value + "]: " + message._value);
        if (errlinenum._value > 0) {
            if ((errlinenum._value > 1) && (callmethod(this._lines, "size", [0])._value > 1))
                minigrace.stderr_write("  " + (errlinenum._value - 1) + ": " +
                    callmethod(this._lines, "at(1)",
                        [1], new GraceNum(errlinenum._value - 1))._value);

            if (callmethod(this._lines, "size", [0])._value >= errlinenum._value) {
                var line = callmethod(this._lines, "at(1)", [1], new GraceNum(errlinenum._value))._value;
                minigrace.stderr_write("  " + errlinenum._value + ": " + line);
                minigrace.stderr_write(arr._value);
            }

            if (errlinenum._value <
                    callmethod(this._lines, "size", [0])._value)
                minigrace.stderr_write("  " + (errlinenum._value + 1) + ": " +
                      callmethod(this._lines, "at(1)", [1],
                            new GraceNum(errlinenum._value + 1))._value);
        }
        var numsuggestions = callmethod(suggestions, "size", [0]);
        if (numsuggestions._value > 0) {
            for(var i=1; i <= numsuggestions._value; i++) {
                minigrace.stderr_write("\nDid you mean:");
                var suggestion = callmethod(suggestions, "at(1)", [1], new GraceNum(i));
                callmethod(suggestion, "print", [0]);
            }
        }

        throw "ErrorExit";
    };
    this.methods['semantic_error(1)'] = function util_semantic_error(argcv, s) {
        minigrace.stderr_write(minigrace.modname + ".grace:" + this._linenum._value + ":" +
            this._linepos._value + ": semantic error: " + s._value);
        if (this._linenum._value > 1)
            minigrace.stderr_write("  " + (this._linenum._value - 1) + ": " +
                callmethod(this._lines, "at(1)", [1],
                    new GraceNum(this._linenum._value - 1))._value);
        var linenumsize = callmethod(callmethod(this._linenum, "asString", []), "size", []);
        var arr = "----";
        for (var i=1; i<this._linepos._value+linenumsize._value; i++)
            arr = arr + "-";
        minigrace.stderr_write("  " + this._linenum._value + ": " +
                callmethod(this._lines, "at(1)", [1],
                    new GraceNum(this._linenum._value))._value);
        minigrace.stderr_write(arr + "^\n");
        if (this._linenum._value <
                callmethod(this._lines, "size", [])._value)
            minigrace.stderr_write("  " + (this._linenum._value + 1) + ": " +
                callmethod(this._lines, "at(1)", [1],
                    new GraceNum(this._linenum._value + 1))._value);
        throw "ErrorExit";
    };
    this.methods['warning(1)'] = function util_warning(argcv, s) {
        minigrace.stderr_write(minigrace.modname + ".grace:" + this._linenum._value + ":" +
            this._linepos._value + ": warning: " + s._value);
    };
    this.methods['hex(1)'] = function util_hex(argcv, n) {
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
    this.methods.extensions = function util_extensions(argcv) {
        return extensionsMap;
    };
    this.methods['processExtension(1)'] = function util_processExtension(argcv, ext) {
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
        callmethod(extensionsMap, "put(2)", [2], extn, extv);
        return GraceDone;
    };
    this.methods['lines'] = function util_lines(argcv) {
        return this._lines;
    };
    this.methods['cLines'] = function util_cLines(argcv) {
        return this._cLines;
    };
    this.methods['lines:=(1)'] = function util_lines_set(argcv, v) {
        this._lines = v;
        return GraceDone;
    };
    this.methods['cLines:=(1)'] = function util_cLines_set(argcv, v) {
        this._cLines = v;
        return GraceDone;
    };
    this.methods.suggestion = function util_suggestion() {
        return this._suggestion;
    };
    this._linenum = new GraceNum(1);
    this._linepos = new GraceNum(1);
    this._lines = new PrimitiveGraceList([]);
    this._cLines = new PrimitiveGraceList([]);
    this._suggestion = Grace_allocObject(GraceObject, "class suggestion");

    this._suggestion.methods['new(2)'] = function(argcv, line, code) {
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
    gctCache['util'] = "path:\n util\nclasses:\npublic:\n recurse\n recurse:=(1)\n dynamicModule\n dynamicModule:=(1)\n importDynamic\n importDynamic:=(1)\n jobs\n jobs:=(1)\n cLines\n cLines:=(1)\n lines\n lines:=(1)\n filename\n filename:=(1)\n errno\n errno:=(1)\n parseargs\n previousElapsed\n previousElapsed:=(1)\n log_verbose\n outprint\n syntaxError\n generalError\n type_error\n semantic_error\n warning\n verbosity\n outfile\n infile\n modname\n runmode\n buildtype\n interactive\n gracelibPath\n setline\n setPosition\n linenum\n linepos\n vtag\n noexec\n target\n extensions\n sourceDir\n execDir\n splitPath(1)\n file(1)on(1)orPath(1)otherwise(1)\n file(1)onPath(1)otherwise(1)\n requiredModules\n processExtension\n printhelp\n debug\n hex\nconfidential:\nfresh-methods:\nmodules:\n stringMap\n buildinfo\n sys\n io\n";

function GraceMirrorMethod(o, k) {
    this.name = k;
    this.canonicalName = canonicalMethodName(k);
    this.obj = o;
}
GraceMirrorMethod.prototype = Grace_allocObject(GraceObject, "methodMirror");
GraceMirrorMethod.prototype.methods['asString'] = function(argcv) {
    return new GraceString("mirror on method '" + this.canonicalName + "'");
};
GraceMirrorMethod.prototype.methods['name'] = function(argcv) {
    return new GraceString(this.canonicalName);
};
GraceMirrorMethod.prototype.methods['partcount'] = function(argcv) {
    var count = this.name.split("(").length;
    if (count === 1) return new GraceNum(1);
    return new GraceNum(count - 1);
};

GraceMirrorMethod.prototype.methods['paramcounts'] = function(argcv) {
    var theFunction = this.obj.methods[this.name];
    var l = theFunction.paramCounts ? theFunction.paramCounts.length : 0;
    var countArray = new Array(l);
    for (var i = 0; i < l; i++) {
        countArray[i] = new GraceNum(theFunction.paramCounts[i]);
    }
    return new GraceList(countArray);
};

GraceMirrorMethod.prototype.methods['request(1)'] = function(argcv, argList) {
    if (! argList) {
        throw new GraceExceptionPacket(ProgrammingErrorObject,
                new GraceString("'request(_)' requires one argument (a list of argument lists)"));
    }
    var theFunction = this.obj.methods[this.name];
    var requiredLen = theFunction.paramCounts ? theFunction.paramCounts.length : 0;
    var providedLen = callmethod(argList, "size", [0])._value;
    if (providedLen !== requiredLen) {
        throw new GraceExceptionPacket(ProgrammingErrorObject,
                   new GraceString("wrong number of argument lists in 'request'" ));
    }
    var allArgs = [this.obj, this.name, []];
    var outerIter = callmethod(argList, "iterator", [0]);
    while (Grace_isTrue(callmethod(outerIter, "hasNext", [0]))) {
        var innerArray = callmethod(outerIter, "next", [0]);
        var innerSize = callmethod(innerArray, "size", [0])._value;
        allArgs[2].push(innerSize);    // incrementally build list of argument list lengths
        var innerIter = callmethod(innerArray, "iterator", [0]);
        while (Grace_isTrue(callmethod(innerIter, "hasNext", [0]))) {
            allArgs.push(callmethod(innerIter, "next"));
        }
    }
    return selfRequest.apply(null, allArgs);
};

GraceMirrorMethod.prototype.methods['requestWithArgs(1)'] = function(argcv, argList) {
    if (! argList) {
        throw new GraceExceptionPacket(ProgrammingErrorObject,
                new GraceString("'requestWithArgs(_)' requires one argument (a list of arguments)"));
    }
    var theFunction = this.obj.methods[this.name];
    if (typeof theFunction !== "function") {
        return dealWithNoMethod(this.name, this.subject, argList);
    }
    var paramcv = theFunction.paramCounts;
    var np = theFunction.paramNames.length;
    var ntp = theFunction.typeParamNames.length;
    var providedLen = callmethod(argList, "size", [0])._value;
    if ((providedLen !== np) && (providedLen != (np + ntp))) {
        throw new GraceExceptionPacket(ProgrammingErrorObject,
                new GraceString("method '" + this.name + "' requires " +
                np + " arguments, but was given " + providedLen + "."));
    }
    var allArgs = [this.obj, this.name, paramcv];
    var argsIter = callmethod(argList, "iterator", [0]);
    while (Grace_isTrue(callmethod(argsIter, "hasNext", [0]))) {
        var arg = callmethod(argsIter, "next", [0]);
        allArgs.push(arg);
    }
    return selfRequest.apply(null, allArgs);
};

GraceMirrorMethod.prototype.methods['hash'] = function methodMirror_hash (argcv) {
    return callmethod(new GraceString(this.name), "hash", [0]);
};

function mirror_getMethod (argcv, methName) {
    var name = numericMethodName(methName._value);
    var current = this.subject;
    if (current.methods[name]) {
        return (new GraceMirrorMethod(this.subject, name));
    }
    var exceptionMsg = new GraceString("no method " +
          canonicalMethodName(name) + " in mirror for ");
    var objDescription = callmethod(this.subject, "asString", [0]);
    exceptionMsg = callmethod(exceptionMsg, "++(1)", [1], objDescription);
    throw new GraceExceptionPacket(NoSuchMethodErrorObject, exceptionMsg);
}

function mirror_NoSuchMethodHandler (argcv, handlerBlock) {
    // sets up handlerBlock (a Block with 2 arguments) to be applied
    // when a requested method is not found.
    this.subject.noSuchMethodHandler = handlerBlock;
    return GraceDone;
}

function GraceMirror(subj) {       // constructor function
    this.subject = subj;
    this.mutable = false;
    this.definitionModule = "mirrors";
    this.definitionLine = 0;
}

GraceMirror.prototype = {
    methods: {
        "isMe(1)":          object_isMe,
        "≠(1)":             object_notEquals,
        "basicAsString":    object_basicAsString,
        "asString":         object_asString,
        "asDebugString":    object_asDebugString,
        "debugValue":       object_debugValue,
        "debugIterator":    object_debugIterator,
        "::(1)":            object_colonColon,
        methods: function mirror_methods(argcv) {
            var meths = [];
            var current = this.subject;
            for (var k in current.methods) {
                if (! k.includes("$") && current.methods.hasOwnProperty(k)) {
                    meths.push(new GraceMirrorMethod(current, k));
                }
            }
            var l = new GraceList(meths);
            return l;
        },
        methodNames: function mirror_methodName(argcv) {
            var meths = callmethod(Grace_prelude, "emptySet", [0]);
            var current = this.subject;
            for (var k in current.methods) {
                if (! k.includes("$") && current.methods.hasOwnProperty(k)) {
                    callmethod(meths, "add(1)", [1],
                          new GraceString(canonicalMethodName(k)));
                }
            }
            return meths;
        },
        'getMethod(1)': mirror_getMethod,
        'onMethod(1)': mirror_getMethod,
        'whenNoMethodDo(1)': mirror_NoSuchMethodHandler,
        subject: this.subject
    },
    className: 'objectMirror'
};

function gracecode_mirrors() {
    this.methods['loadDynamicModule(1)'] = function(argcv, v) {
        var name = v._value;
        var moduleFunc;
        if (typeof process === "undefined") {
            try {
                moduleFunc = eval(graceModuleName(name));
            } catch (ex) {
                throw new GraceExceptionPacket(ImportErrorObject,
                           new GraceString("can't find module " + v._value));
            }
        } else {
            minigrace.loadModule(name, "./");
            try {
                moduleFunc = eval(graceModuleName(name));
            } catch (ex) {
                throw new GraceExceptionPacket(ImportErrorObject,
                    new GraceString("error initializing module " + v._value));
            }
        }
        return do_import(name, moduleFunc);
    };
    this.methods['reflect(1)'] = function(argcv, o) {
        return new GraceMirror(o);
    };
    return this;
}

if (typeof gctCache !== "undefined")
    gctCache['mirrors'] = "path:\n mirrors\nclasses:\npublic:\n Mirror\n MethodMirror\n ArgList\n loadDynamicModule(1)\n reflect(1)\nconfidential:\nfresh-methods:\n reflect(1)\nfresh:reflect(1):\n basicAsString\n asDebugString\n ::\n methodNames\n ==(1)\n getMethod(1)\n methods\n ≠(1)\n self\n asString\nmodules:\n";

function safeJsString (obj) {
    // Don't use callmethod!  This function is called from within callmethod.
    var objString;
    try {
        var m = findMethod(obj, "asString");
        objString = m.call(obj, [0])._value;
    } catch (ex) {
        objString = "(without working asString method)";
    }
    return objString;
}

function findMethod (obj, methname) {
    var s = obj;
    var meth = s.methods[methname];
    if (typeof(meth) !== "function") meth = null;
    return meth;
}

function stripDollarSuffix(str) {
    var dollarIx = str.indexOf("$");
    if (dollarIx == -1) return str;
    return str.substring(0, dollarIx);
}

function GraceCallStackToString() {
    var errorLine = this.lineNumber;
    var effectiveName = canonicalMethodName(stripDollarSuffix(this.methname));
    var errorString = effectiveName;
    if (this.className !== "module") {
        errorString = this.className + "." + effectiveName;
    }
    if (typeof(errorLine) === "undefined" || errorLine === 0) {
        errorString += " in ";
    } else {
        errorString += " at line " + errorLine + " of ";
    }
    return errorString + this.moduleName;
}

function handleRequestException(ex, obj, methname, methodArgs) {
    if (ex.exctype === 'graceexception') {
        ex.exitStack.unshift({
            className: obj.className,
            methname: methname,
            moduleName: moduleName,
            lineNumber: lineNumber,
            toString: GraceCallStackToString
        });
        throw ex;
    } else if (!obj) {
        throw new GraceExceptionPacket(UninitializedVariableObject,
            new GraceString("requested method '" + methname + "' on uninitialised variable."));
    } else if (typeof(obj.methods[methname]) !== "function") {
        var argsGL = callmethod(Grace_prelude, "emptyList", [0]);
        var argsLength = methodArgs.length;
        for (var ix = 3; ix < argsLength; ix++) {
            callmethod(argsGL, "push(1)", [1], methodArgs[ix]);
        }
        return dealWithNoMethod(methname, obj, argsGL);
    } else {
        var newEx = new GraceExceptionPacket(MinigraceErrorObject,
            new GraceString("Implementation error in JavaScript method. " + ex.toString()));
        newEx.exitStack.unshift({
            className: obj.className,
            methname: methname,
            moduleName: "native code",
            lineNumber: 0,
            toString: GraceCallStackToString
        });
        throw newEx;
    }
}

function request(obj, methname, argcv, a, b, c, d, e, f, g, h, i, j) {
    var origModuleName = moduleName;
    var origLineNumber = lineNumber;
    var returnTarget = invocationCount;  // will be incremented by invoked method
    try {
        var meth = obj.methods[methname];
        if (meth.confidential) {
            raiseConfidentialMethod(methname, obj);
        }
        var ret = meth.call(obj, argcv, a, b, c, d, e, f, g, h, i, j);
    } catch(ex) {
        if (ex.exctype === 'return') {
            if (ex.target == returnTarget) {
                return ex.returnvalue;
            }
            throw ex;
        } else {
            return handleRequestException(ex, obj, methname, arguments);
        }
    } finally {
        setModuleName(origModuleName);
        setLineNumber(origLineNumber);
    }
    return ret;
}

var callmethod = request;       // for backward compatibility

function requestWithArgs(obj, methname, argcv) {
    // allow unlimited arguments using reflection
    var origModuleName = moduleName;
    var origLineNumber = lineNumber;
    var returnTarget = invocationCount;  // will be incremented by invoked method
    try {
        var meth = obj.methods[methname];
        if (meth.confidential) {
            raiseConfidentialMethod(methname, obj);
        }
        var args = Array.prototype.slice.call(arguments, 2);
        var ret = meth.apply(obj, args);
    } catch(ex) {
        if (ex.exctype === 'return') {
            if (ex.target == returnTarget) {
                return ex.returnvalue;
            }
            throw ex;
        } else {
            return handleRequestException(ex, obj, methname, arguments);
        }
    } finally {
        setModuleName(origModuleName);
        setLineNumber(origLineNumber);
    }
    return ret;
}

function selfRequest(obj, methname, argcv, a, b, c, d, e, f, g, h, i, j) {
    var origModuleName = moduleName;
    var origLineNumber = lineNumber;
    var returnTarget = invocationCount;  // will be incremented by invoked method
    try {
        var meth = obj.methods[methname];
        var ret = meth.call(obj, argcv, a, b, c, d, e, f, g, h, i, j);
    } catch(ex) {
        if (ex.exctype === 'return') {
            if (ex.target == returnTarget) {
                return ex.returnvalue;
            }
            throw ex;
        } else {
            return handleRequestException(ex, obj, methname, arguments);
        }
    } finally {
        setModuleName(origModuleName);
        setLineNumber(origLineNumber);
    }
    return ret;
}

function selfRequestWithArgs(obj, methname, argcv) {
    // allow unlimited arguments using reflection
    var origModuleName = moduleName;
    var origLineNumber = lineNumber;
    var returnTarget = invocationCount;  // will be incremented by invoked method
    try {
        var meth = obj.methods[methname];
        var args = Array.prototype.slice.call(arguments, 2);
        var ret = meth.apply(obj, args);
    } catch(ex) {
        if (ex.exctype === 'return') {
            if (ex.target == returnTarget) {
                return ex.returnvalue;
            }
        } else if (ex.exctype === 'graceexception') {
            ex.exitStack.unshift({
                className: obj.className,
                methname: methname,
                moduleName: moduleName,
                lineNumber: lineNumber,
                toString: GraceCallStackToString
            });
        } else if (!obj) {
            throw new GraceExceptionPacket(UninitializedVariableObject,
                new GraceString("requested method '" + methname + "' on uninitialised variable."));
        } else if (typeof(obj.methods[methname]) !== "function") {
            var argsGL = callmethod(Grace_prelude, "emptyList", [0]);
            var argsLength = arguments.length;
            for (var ix = 3; ix < argsLength; ix++) {
                callmethod(argsGL, "push(1)", [1], arguments[ix]);
            }
            return dealWithNoMethod(methname, obj, argsGL);
        }
        throw ex;
    } finally {
        setModuleName(origModuleName);
        setLineNumber(origLineNumber);
    }
    return ret;
}

function canonicalMethodName(name) {
    var parts = name.split("(");
    var output = parts[0];
    for (var i = 1; i < parts.length; i++) {
        var part_split = parts[i].split(")");
        if (isNaN(Number(part_split[0]))){
            output += part_split[0];
        } else {
            output += "(";
            for(var j = 0; j < Number(part_split[0]) - 1; j++){
                output += "_,";
            }
            output += "_)";
            if (part_split.length > 1) {
                output += part_split[1];
            }
        }
    }
    return output;
}
function numericMethodName(name) {
    var parts = name.split("(");
    var output = parts[0];
    for (var i = 1; i < parts.length; i++) {
        var part_split = parts[i].split(")");
        var underscores = part_split[0];
        var underscoreCount = underscores.split("_").length - 1;
        output = output + "(" + underscoreCount + ")" + part_split[1];
            // part_split[1] will be the empty string on the final part
    }
    return output;
}
function dealWithNoMethod(name, target, argList) {
    var dollarIx = name.indexOf("$");
    if (dollarIx == -1) {
        if (target.typeTypes && target.typeTypes[name]) {
            return evaluateTypeInType(name, target);
        } else if (target.noSuchMethodHandler) {
            return callmethod(target.noSuchMethodHandler, "apply(2)", [2],
                new GraceString(name), argList);
        } else {
            var closeMatches = closeMatchesForMethodNamed(name, target);
            var suggestions = "";
            if (closeMatches.length !== 0) {
                suggestions = "  Did you mean " + readableOptions(closeMatches) + "?";
            }
            throw new GraceExceptionPacket(NoSuchMethodErrorObject,
                new GraceString("no method " + canonicalMethodName(name) + " on " +
                    describe(target) + "." + suggestions));
        }
    } else {
        var baseName = name.substring(0, dollarIx);
        if (typeof target.methods[baseName] === "function") {
            throw new GraceExceptionPacket(ProgrammingErrorObject,
                new GraceString("attempting to inherit from '" +
                    canonicalMethodName(baseName) + "' on " +
                    describe(target) + ". This is not a fresh method."));
        } else {
            closeMatches = closeMatchesForMethodNamed(name, target);
            suggestions = "";
            if (closeMatches.length === 0) {
                suggestions = "  Did you mean " + readableOptions(closeMatches) + "?";
            }
            throw new GraceExceptionPacket(NoSuchMethodErrorObject,
                new GraceString("no method " + canonicalMethodName(baseName) + " on " +
                    describe(target) + "." + suggestions));
        }
    }
}

function closeMatchesForMethodNamed(mName, obj) {
    // the method with name mName is not in the methods of obj.
    // Returns a list of up to 4 close matches to mName.
    var matchesFound = 0;
    var matches = [];
    var gName = new GraceString(mName);
    for (var candidate in obj.methods) {
        if (obj.methods.hasOwnProperty(candidate)) {
            var gCand = new GraceString(candidate);
            var mm = do_import("mirrors", gracecode_mirrors);
            var em = request(mm, "loadDynamicModule(1)", [1], new GraceString("errormessages"));
            if (Grace_isTrue(request(em, "name(1)mightBeIntendedToBe(1)",
                    [1, 1], gCand, gName))) {
                matches.push(canonicalMethodName(gCand._value));
                matchesFound = matchesFound + 1;
                if (matchesFound === 4)  { return matches; }
            }
        }
    }
    return matches;
}

function readableOptions(methList) {
    // if methList is ["foo", "bar"], returns "foo or bar"
    var len = methList.length;
    if (len === 0) return "";
    if (len === 1) return methList[0];
    var result = "";
    for (var i = 0; i < len-2; i++) result = result + methList[i] + ", ";
    return result + methList[len-2] + " or " + methList[len-1];
}

function raiseConfidentialMethod(name, target) {
    throw new GraceExceptionPacket(NoSuchMethodErrorObject,
            new GraceString("requested confidential method '" +
                stripDollarSuffix(canonicalMethodName(name)) +
                "' of " + describe(target) + " from outside."));
}

function raiseUninitializedArgument(n, name, target) {
    throw new GraceExceptionPacket(UninitializedVariableObject,
          new GraceString("uninitialised variable used as argument " + n + " to '" +
                canonicalMethodName(name) + "' of " + describe(target) + "."));
}

function raiseUninitializedVariable(name) {
    throw new GraceExceptionPacket(UninitializedVariableObject,
          new GraceString("attempt to read uninitialised variable " + name + "."));
}

function describe(obj) {
    // Generates a string describing obj, using its "class" and its
    // own asString method, if the latter works.  Avoid duplicating
    // information, as in "done done".
    // Because this method is used within callmethod, it's important that the
    // implementation doesn't use callmethod, or infinite recursion may result.
    var objString = "";
    var classString = "object";
    var shortClassString = "object";
    try {
        var origModuleName = moduleName;    // because the asString method
        var origLineNumber = lineNumber;    // will change them
        var m = findMethod(obj, "asString");
        objString = m.call(obj, [0])._value;
    } catch (ex) {
    } finally {
        setModuleName(origModuleName);
        setLineNumber(origLineNumber);
    }
    try {
        classString = obj.className;
        var dotIx = classString.lastIndexOf(".");
        shortClassString = (dotIx == -1) ? classString : classString.substring(dotIx+1);
    } catch (ex) {
    }
    if (objString === "") {
        return classString + " (without working asString method)";
    }
    if ((classString == "object") || (objString.includes(shortClassString))) {
        return objString;
    }
    return classString + " " + objString;
}

function tryCatch(obj, cases, finallyblock) {
    setModuleName("try(_)catch(_)...finally(_)");
    setLineNumber(0);
    var ret;
    try {
        return callmethod(obj, "apply", [0]);
    } catch (ex) {
        if (ex.exctype === 'graceexception') {
            for (var i = 0; i < cases.length; i++) {
                var eachCase = cases[i];
                if (eachCase.guard.call(eachCase.receiver, ex))
                    return callmethod(cases[i], "apply(1)", [0], ex);
            }
            throw ex;
        } else {
            var eStr = ex.toString();
            if ((eStr === "RangeError: Maximum call stack size exceeded") ||    // Chrome
                (eStr === "InternalError: too much recursion") ) {              // Firefox
                ex = new GraceExceptionPacket(new GraceException("TooMuchRecursion", ProgrammingErrorObject),
                       new GraceString("Does one of your methods request execution of itself without limit?"));
            }
            throw ex;
        }
    } finally {
        if (finallyblock !== false)
            ret = callmethod(finallyblock, "apply", [0]);
    }
    return ret;
}

function matchCase(obj, cases) {
    setModuleName("match()case()…");
    for (var i = 0, len = cases.length; i<len; i++) {
        var eachCase = cases[i];
        if (eachCase.guard.call(eachCase.receiver, obj)) {
            return eachCase.real.call(eachCase.receiver, obj);
        }
    }
    callmethod(ProgrammingErrorObject, "raise(1)", [1],
          new GraceString ("non-exhaustive match in match(_)case(_)…."));
    return GraceDone;       // should never happen
}

function ReturnException(v, target) {
    this.returnvalue = v;
    this.target = target;
}

ReturnException.prototype = {
    'exctype': 'return'
};

function Alias(newName, oldName) {
    this.newName = newName;
    this.oldName = oldName;
}

function GraceExceptionPacket(exception, message, data) {
    this.exception = exception;
    this.message = message;
    this.data = data;
    this.lineNumber = lineNumber;
    this.moduleName = moduleName;
    this.stackFrames = [];
    this.exitStack = [];
    for (var j=0; j < stackFrames.length; j++)
        this.stackFrames.push(stackFrames[j]);
}
GraceExceptionPacket.prototype = {
    methods: {
        "isMe(1)":          object_isMe,
        "≠(1)":             object_notEquals,
        "basicAsString":    object_basicAsString,
        "asDebugString":    object_asDebugString,
        "debugValue":       object_debugValue,
        "debugIterator":    object_debugIterator,
        "::(1)":            object_colonColon,
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
            var es = new GraceList([]);
            for (var i=0; i<this.exitStack.length; i++)
                callmethod(es, "push(1)", [1], new GraceString(this.exitStack[i].toString()));
            return es;
        },
        "printBacktrace": function(argcv) {
            var exceptionName = callmethod(callmethod(this, "exception", [0]), "asString", [0]);
            var ln = callmethod(this, "lineNumber", [0]);
            var mn = callmethod(this, "moduleName", [0]);
            var errMsg = callmethod(exceptionName, "++(1)", [1], new GraceString(" on line "));
            errMsg = callmethod(callmethod(errMsg, "++(1)", [1], ln), "++(1)", [1], new GraceString(" of "));
            errMsg = callmethod(callmethod(errMsg, "++(1)", [1], mn), "++(1)", [1], new GraceString(": "));
            errMsg = callmethod(errMsg, "++(1)", [1], callmethod(this, "message", [0]));
            Grace_errorPrint(errMsg);
            var bt = callmethod(this, "backtrace", [0]);
            var prefix = new GraceString("  raised at ");
            var rf = new GraceString("  requested from ");
            while (callmethod(bt, "size", [0])._value > 0) {
                Grace_errorPrint(callmethod(prefix, "++(1)", [1],
                        callmethod(bt, "pop", [0])));
                prefix = rf;
            }
        },
        "printBacktraceSkippingModules": function(argcv, skipable) {
            var exceptionName = callmethod(callmethod(this, "exception", [0]), "asString", [0]);
            var ln = callmethod(this, "lineNumber", [0]);
            var mn = callmethod(this, "moduleName", [0]);
            if (! Grace_isTrue(callmethod(skipable, "contains(1)", [1], mn))) {
                var errMsg = callmethod(exceptionName, "++(1)", [1], new GraceString(" on line "));
                errMsg = callmethod(callmethod(errMsg, "++(1)", [1], ln), "++(1)", [1], new GraceString(" of "));
                errMsg = callmethod(callmethod(errMsg, "++(1)", [1], mn), "++(1)", [1], new GraceString(": "));
                errMsg = callmethod(errMsg, "++(1)", [1], callmethod(this, "message", [0]));
                Grace_errorPrint(errMsg);
            }
            var bt = callmethod(this, "backtrace", [0]);
            var prefix = new GraceString("  in method ");
            var rf = new GraceString("  requested from ");
            for (var i = this.exitStack.length - 1; i >= 0; i--) {
                var nextFrame = this.exitStack[i];
                mn = new GraceString(nextFrame.moduleName);
                if (! Grace_isTrue(callmethod(skipable, "contains(1)", [1], mn))) {
                    Grace_errorPrint(callmethod(prefix, "++(1)", [1], new GraceString(nextFrame.toString())));
                    prefix = rf;
                }
            }
            if (! Grace_isTrue(callmethod(skipable, "contains(1)", [1], new GraceString(this.moduleName)))) {
                Grace_errorPrint(callmethod(prefix, "++(1)", [1],
                    new GraceString("line " + this.lineNumber + " of module " + this.moduleName + ".")));
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
}
GraceException.prototype = {
    methods: {
        "isMe(1)":          object_isMe,
        "≠(1)":             object_notEquals,
        "basicAsString":    object_basicAsString,
        "asDebugString":    object_asDebugString,
        "debugValue":       object_debugValue,
        "debugIterator":    object_debugIterator,
        "::(1)":            object_colonColon,
        "refine(1)": function(argcv, nm) {
            return new GraceException(nm._value, this);
        },
        "raise(1)": function(argcv, msg) {
            throw new GraceExceptionPacket(this, msg, new GraceString("no data"));
        },
        "raise(1)with(1)": function(argcv, msg, data) {
            throw new GraceExceptionPacket(this, msg, data);
        },
        "match(1)": function(argcv, other) {
            if (!other.exception)
                return GraceFalse;
            if (other.exception.name === this.name)
                return new GraceSuccessfulMatch(other);
            var exc = other.exception;
            while (exc) {
                if (exc.name === this.name)
                    return new GraceSuccessfulMatch(other);
                exc = exc.parent;
            }
            return GraceFalse;
        },
        "|(1)": function(argcv, o) {
            return new GraceOrPattern(this, o);
        },
        "==(1)": function(argcv, o) {
            if (o === this) return GraceTrue; // not just for efficiency, but
                                              // also to avoid infinite regress
            if (o.className !== 'Exception') return GraceFalse;
            if (o.name !== this.name) return GraceFalse;
            return callmethod(this.parent, "==(1)", [1], o.parent);
        },
        "&(1)": function(argcv, o) {
            return new GraceAndPattern(this, o);
        },
        "name": function(argcv) {
            return new GraceString(this.name);
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
    definitionModule: "basic library",
    definitionLine: 0
};

var importedModules = {};

function do_import(modname, moduleCodeFunc) {
    var origModuleName = moduleName;
    if (importedModules[modname]) {
        return importedModules[modname];
    }
    if (moduleCodeFunc === undefined)
        throw new GraceExceptionPacket(ImportErrorObject,
            new GraceString("could not find code for module '" + modname + "'"));
    var newModule = (modname === "standardGrace") ? Grace_prelude : new GraceModule(modname);
    // importing "standardGrace" adds to the built-in prelude.
    try {
        var f = Function.prototype.call.call(moduleCodeFunc, newModule);
          // Almost like moduleCodeFunc.call(newModule), which executes
          // moduleCodeFunc with this === newModule.  The difference is that we
          // ensure that the `call` function is the one from Function.prototype
        return f;
    } catch (ex) {
        return handleRequestException(ex,
                                      {className: "module"},
                                      "module initialization",
                                      []);
    } finally {
        importedModules[modname] = f;
        setModuleName(origModuleName);
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
    minigrace.stderr_write(dbgp(o, 0));
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

function ellipsisFun() {
    throw new GraceExceptionPacket(ProgrammingErrorObject,
         new GraceString("attempt to evaluate ellipsis (...)"));
}
if (typeof global === "undefined") {
    Object.defineProperty(window, "ellipsis", { get: ellipsisFun });
} else {
    Object.defineProperty(global, "ellipsis", { get: ellipsisFun });
}

var ExceptionObject = new GraceException("Exception", false);
var MinigraceErrorObject = new GraceException("MinigraceError", ExceptionObject);
var ProgrammingErrorObject = new GraceException("ProgrammingError", ExceptionObject);
var RequestErrorObject = new GraceException("RequestError", ProgrammingErrorObject);
var EnvironmentExceptionObject = new GraceException("EnvironmentException", ExceptionObject);
var ResourceExceptionObject = new GraceException("ResourceException", ExceptionObject);
var IoExceptionObject = new GraceException("IoException", EnvironmentExceptionObject);
var FileExceptionObject = new GraceException("FileError", IoExceptionObject);
var RuntimeErrorObject = new GraceException("RuntimeError", ExceptionObject);
var ImportErrorObject = new GraceException("ImportError", EnvironmentExceptionObject);
var TypeErrorObject = new GraceException("TypeError", ProgrammingErrorObject);
var NoSuchMethodErrorObject = new GraceException("NoSuchMethod", ProgrammingErrorObject);
var BoundsErrorObject = new GraceException("BoundsError", ProgrammingErrorObject);
var UninitializedVariableObject = new GraceException("UninitializedVariable", ProgrammingErrorObject);

//
// Define "Grace_prelude" as a Grace object to which some methods are added here,
// and to which more methods will be added by the compiled standardGrace module
// when it is loaded.
//

function nullFunction() {}

function traitObjectFromInto(obj, that, aliases, exclusions) {
    setModuleName("built-in");
    if (obj.hasOwnProperty('_value')) {
        that._value = obj._value;
    }
    for (var methName in obj.methods) {
        that.methods[methName] = obj.methods[methName];
    }
    for (var aix in aliases) {
        var oneAlias = aliases[aix];
        that.methods[oneAlias.newName] = obj.methods[oneAlias.oldName];
    }
    for (var eix in exclusions) {
        var exMeth = exclusions[eix];
        delete that.methods[exMeth];
    }
    return nullFunction;
}

var Grace_prelude = new GraceModule("standardGrace");

Grace_prelude.methods['true$build(3)'] =
    function prelude_true$build (argcv, inheritingObject, aliases, exclusions) {
        return traitObjectFromInto(GraceTrue, inheritingObject, aliases, exclusions);
    };
Grace_prelude.methods['false$build(3)'] =
    function prelude_false$build (argcv, inheritingObject, aliases, exclusions) {
        return traitObjectFromInto(GraceFalse, inheritingObject, aliases, exclusions);
    };
Grace_prelude.methods['Exception'] = function(argcv) {
    return ExceptionObject;
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
Grace_prelude.methods['while(1)do(1)'] = function(argcv, c, b) {
    if (c.className === "boolean" || c.className === "number")
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected Block for first argument of " +
                                "while(_)do(_), got " + c.className + "."));
    if (Grace_prelude.methods['while(1)do(1)'] &&
            Grace_prelude.methods['while(1)do(1)'].safe) {
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
                if (! confirm("A while loop is taking a long time to run. " +
                              "Do you want to continue? " +
                              totIterations + " iterations of the loop have taken " +
                              totTime + "ms so far." +
                              "\n\nChoose Cancel to stop the program, or OK to " +
                              "let it continue."))
                    throw new GraceExceptionPacket(ResourceExceptionObject,
                        new GraceString("user abort of long-running loop."));
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
Grace_prelude.methods['for(1)do(1)'] = function(argcv, c, b) {
    callmethod(c, "do(1)", [1], b);
    return GraceDone;
};
Grace_prelude.methods['_methods'] = function() {
    var meths = [];
    for (var m1 in this.methods)
        meths.push(new GraceString(m1));
    var l = new GraceList(meths);
    return l;
};

Grace_prelude.methods['clone(1)'] = prelude_clone;

function prelude_clone (argcv, obj) {
    var ouc = new obj.constructor();
    prelude_clone_build(null, obj, ouc, [], []);
    return ouc;
}
Grace_prelude.methods['clone(1)$build(3)'] = prelude_clone_build;

function prelude_clone_build (ignore, obj, ouc, aliases, exclusions) {
    // shallow copy fields
    ouc.className = obj.className;
    ouc.methods = Object.create(Object.getPrototypeOf(obj.methods));
    for (var attr in obj.methods) {
        if (obj.methods.hasOwnProperty(attr))
            ouc.methods[attr] = obj.methods[attr];
    }
    ouc.mutable = obj.mutable;
    if (obj.noSuchMethodHandler) {
        ouc.noSuchMethodHandler = obj.noSuchMethodHandler;
    }
    ouc.data = {};
    for (attr in obj.data) {
        if (obj.data.hasOwnProperty(attr))
            ouc.data[attr] = obj.data[attr];
    }
    var props = obj.closureKeys || [];
    ouc.closureKeys = props.slice();     // makes a shallow copy
    for (var oix = 0, cLen = ouc.closureKeys.length; oix < cLen; oix++) {
        var k = obj.closureKeys[oix];
        ouc[k] = obj[k];
    }
    for (var aix = 0, aLen = aliases.length; aix < aLen; aix++) {
        var oneAlias = aliases[aix];
        ouc.methods[oneAlias.newName] = obj.methods[oneAlias.oldName];
    }
    for (var eix = 0, eLen = exclusions.length; eix < eLen; eix++) {
        var exMeth = exclusions[eix];
        delete ouc.methods[exMeth];
    }
    return nullFunction;                // the init function for this clone
}
Grace_prelude.methods['become(2)'] = function(argcv, a, b) {
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
PrimitiveArrayClass.methods['new(1)'] = function(argcv, n) {
    return new GracePrimitiveArray(n._value);
};

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

var _emptySequence;
function GraceEmptySequence() {
    if (!_emptySequence)
        _emptySequence = callmethod(Grace_prelude, "emptySequence", [0]);
    return _emptySequence;
}

if (typeof(path) === "undefined") {
    var path = { basename: function(n, ex) {
                              var slash = n.lastIndexOf("/");
                              if (slash >= 0) n = n.substring(slash+1);
                              if (n.endsWith(ex)) n = n.substring(0, n.length-ex.length);
                              return n;
                          }
               };
}

function graceModuleName(fileName) {
    var prefix = "gracecode_";
    var base = path.basename(fileName, ".js");
    return prefix + escapeident(base);
}

function escapeident(id) {
    // escapses characters not legal in an identifer using __«codepoint»__
    // This function must correspond to method escapeident(_) in genjs.grace
    var nm = "";
    for (var ix = 0, len = id.length; ix < len; ix++) {
        var o = id.charCodeAt(ix);
        if (((o >= 97) && (o <= 122)) || ((o >= 65) && (o <= 90)) ||
            ((o >= 48) && (o <= 57))) {
            nm = nm + id.charAt(ix);
        } else {
            nm = nm + "__" + o + "__";
        }
    }
    return nm;
}

function escapestring(str) {
    // escapes embedded double-quotes, backslashes, newlines and non-ascii chars
    // this function must correspond to method escapestring(_) in genjs.grace
    var os = "";
    for (var ix = 0, len = str.length; ix < len; ix++) {
        var c = str.charAt(ix);
        if (c === "\"") {
            os = os + "\\\"";
        } else if (c === "\\") {
            os = os + "\\\\";
        } else if (c === "\n") {
            os = os + "\\n";
        } else {
            var cOrd = str.charCodeAt(ix);
            if  ((cOrd < 32) || (cOrd > 126)) {
                var uh = cOrd.toString(16)
                while (uh.length < 4) {
                    uh = "0" + uh;
                }
                os = os + "\\u" + uh;
            } else {
                os = os + c;
            }
        }
    }
    return os;
}


// these names are used in the generated code.
// __95__ is the escape for _
var var___95__prelude = Grace_prelude;
var var_done = GraceDone;


// for node: explicitly make names global
if (typeof global !== "undefined") {
    global.Alias = Alias;
    global.assertTypeOrMsg = assertTypeOrMsg;
    global.callmethod = callmethod;
    global.classType = classType;
    global.dbg = dbg;
    global.dbgp = dbgp;
    global.do_import = do_import;
    global.emptyGraceObject = emptyGraceObject;
    global.EnvironmentExceptionObject = EnvironmentExceptionObject;
    global.escapeident = escapeident;
    global.escapestring = escapestring;
    global.ExceptionObject = ExceptionObject;
    global.findMethod = findMethod;
    global.getLineNumber = getLineNumber;
    global.getModuleName = getModuleName;
    global.graceModuleName = graceModuleName;
    global.Grace_allocObject = Grace_allocObject;
    global.Grace_errorPrint = Grace_errorPrint;
    global.Grace_prelude = Grace_prelude;
    global.Grace_print = Grace_print;
    global.GraceBindingClass = GraceBindingClass;
    global.GraceBlock_match = GraceBlock_match;
    global.GraceBoolean = GraceBoolean;
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
    global.importedModules = importedModules;
    global.ImportErrorObject = ImportErrorObject;
    global.Lineup = Lineup;
    global.loadDate = loadDate;
    global.matchCase = matchCase;
    global.MinigraceErrorObject = MinigraceErrorObject;
    global.NoSuchMethodErrorObject = NoSuchMethodErrorObject;
    global.nullFunction = nullFunction;
    global.PrimitiveGraceList = PrimitiveGraceList;
    global.ProgrammingErrorObject = ProgrammingErrorObject;
    global.raiseTypeError = raiseTypeError;
    global.raiseUninitializedVariable = raiseUninitializedVariable;
    global.request = request;
    global.requestWithArgs = requestWithArgs;
    global.ResourceExceptionObject = ResourceExceptionObject;
    global.ReturnException = ReturnException;
    global.RequestErrorObject = RequestErrorObject;
    global.RuntimeErrorObject = RuntimeErrorObject;
    global.selfRequest = selfRequest;
    global.selfRequestWithArgs = selfRequestWithArgs;
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
    global.var_graceObject = var_graceObject;
    global.var_GraceType = var_GraceType;
    global.var_Number = var_Number;
    global.var_Object = var_Object;
    global.var_String = var_String;
    global.var_Type = var_Type;
    global.var_Unknown = var_Unknown;
}
