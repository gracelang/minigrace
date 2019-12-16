var inBrowser = (typeof global === "undefined");

if (!inBrowser) {  // if we are in Node.js
    global.lineNumber = 0;
} else {
    var lineNumber = 0;
}
function setLineNumber(n) {
    lineNumber = n;
}
function getLineNumber() {
    return lineNumber;
}
function setModuleName(m) {
    return;
}
function getModuleName() {
    return arguments.callee.caller.definitionModule || "native code" ;
}
function jsTrue() {
    return true;
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

function hashAndCombine(aHash, objB) {
    // aHash is a JS number; objB is a Grace object
    // returns a JS Number
    var bHash = request(objB, 'hash', [0])._value;
    return (aHash * 2) ^ bHash;     // ^ is bitwise XOR
}

function GraceObject() {       // constructor function
    // gets its methods from the prototype.  Don't add to them!
    this.data = {};
    this.className = "graceObject";
    this.mutable = false;
    this.definitionModule = "built-in library";
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

function object_Equals (argcv, o) {
    return Object.is(this, o) ? GraceTrue : GraceFalse;
}

var identityHashSeed = 1001;

function object_identityHash(argcv) {
    if (! this.identityHash) {
        this.identityHash = new GraceNum(identityHashSeed ^ 0xdeadbeef);  // ^ means XOR
        identityHashSeed = identityHashSeed + 1;
    }
    return this.identityHash;
}
object_identityHash.confidential = true;

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

object_basicAsString.confidential = true;

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
function object_debugIterator (argcv) {
    return new GraceIterator(this);
}
function object_colonColon (argcv, other) {
    return callmethod(GraceBindingClass(), "key(1)value(1)", [1, 1], this, other);
}

GraceObject.prototype = {
    methods: {
        "isMe(1)":          object_isMe,
        "myIdentityHash":   object_identityHash,
        "basicAsString":    object_basicAsString,
        "asString":         object_asString,
        "asDebugString":    object_asDebugString,
        "debug$Iterator":   object_debugIterator
    },
    classUid: "graceObject-built-in"
//    data: {}  The prototype should NOT have a data object — data should go in the
//    child (non-shared) object.
};

function GraceTrait() {       // constructor function
    // gets its methods from the prototype.  Don't add to them!
    this.closureKeys = [];
    this.data = {};
    this.className = "graceTrait";
    this.mutable = false;
    this.definitionModule = "built-in library";
    this.definitionLine = 0;
}

function trait_asString (argcv) {
    if (!this.className || this.className.length === 0)
        return new GraceString("a trait");
    var firstChar = this.className[0].toLowerCase();
    var article = ("aeio".indexOf(firstChar) >= 0)? "an " : "a ";
    return new GraceString(article + this.className + " trait");
}

function confidentialVersion(fun, optionalName) {
    if (fun.wrappedFunction) fun = fun.wrappedFunction;  // avoid multiple wrappers
    const newFun = function confidentialV (...args) { return fun.apply(this, args) };
    newFun.confidential = true;
    newFun.wrappedFunction = fun;
    if (fun.paramCounts) newFun.paramCounts = fun.paramCounts;
    if (fun.paramNames) newFun.paramNames = fun.paramNames;
    if (fun.typeParamNames) newFun.typeParamNames = fun.typeParamNames;
    if (optionalName) newFun.methodName = optionalName;
    return newFun;
}

function publicVersion(fun, optionalName) {
    if (fun.wrappedFunction) fun = fun.wrappedFunction;  // avoid multiple wrappers
    const newFun = function publicV (...args) { return fun.apply(this, args) };
    newFun.wrappedFunction = fun;
    if (fun.paramCounts) newFun.paramCounts = fun.paramCounts;
    if (fun.paramNames) newFun.paramNames = fun.paramNames;
    if (fun.typeParamNames) newFun.typeParamNames = fun.typeParamNames;
    if (optionalName) newFun.methodName = optionalName;
    return newFun;
}

function memoized(methodFun, memoCellName) {
    return function() {
        if (! this[memoCellName]) {
            this[memoCellName] = methodFun.call(this);
        }
        return this[memoCellName];
    }
}

GraceTrait.prototype = {
    methods: {
        "isMe(1)":          object_isMe,
        "myIdentityHash":   object_identityHash,
        "basicAsString":    object_basicAsString,
        "asString":         trait_asString,
        "asDebugString":    object_asDebugString,
        "debug$Iterator":   object_debugIterator
    },
    classUid: "graceTrait-built-in"
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
    givenName = givenName || "object";
    givenName = givenName.toString();
    var resultObj = {
        closureKeys: [],
        methods: newMethods,
        data: {},
        className: givenName,
        mutable: false,
        closureKeys: [],
        definitionModule: "built-in library",
        definitionLine: 0,
        classUid: givenName + "-built-in"
    };
    return resultObj;
}

function emptyGraceObject(givenName, modname, line) {
    return {
        methods: {
            "isMe(1)":          object_isMe,
            "myIdentityHash":   object_identityHash,
            "basicAsString":    object_basicAsString,
            "asString":         object_asString,
            "asDebugString":    object_asDebugString,
            "debug$Iterator":   object_debugIterator
        },
        data: {},
        className: givenName,
        mutable: false,
        closureKeys: [],
        definitionModule: modname,
        definitionLine: line,
        classUid: givenName + "-" + modname + "-" + line
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
    if (that.className !== "string") {
          this.failArgCheck('', "string", "≥(_)");
    }
    var other = that._value;
    if (self >= other) return GraceTrue;
    return GraceFalse;
}
function string_lessThanOrEqual (argcv, that) {
    var self = this._value;
    if (that.className !== "string") {
          this.failArgCheck('', "string", "≤(_)");
    }
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

function escapeRegExp(str) {
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');  // prefixes special chars with \
}

function escapeReplacement(str) {
    return str.replace(/\$/g, '$$$$');  // replaces a single $ by $$
}

function failStringMethodArgCheck(desc, className, methodName) {
    const idStart = /^[a-zA-Z_]/;
    const sep = methodName.match(idStart) ? "." : " ";
    raiseClassError(desc + 'argument to "' + escapestring(this._value) + '"' +
                    sep + methodName + ' is not a ' + className);
}

GraceString.prototype = {
    failArgCheck: failStringMethodArgCheck,
    methods: {
        "isMe(1)":          object_isMe,
        "myIdentityHash":   object_identityHash,
        "≠(1)":             object_notEquals,
        "basicAsString":    object_basicAsString,
        "debug$Iterator":   object_debugIterator,
        "::(1)":            object_colonColon,
        "++(1)": function(argcv, other) {
            var o = other.className == "string" ? other : request(other, "asString", [0]);
            if (this._value.length === 0) return o;
            return new GraceString(this._value + o._value);
        },
        ">>(1)": function(argcv, target) {
            return callmethod(target, "<<(1)", [1], this);
        },
        "<<(1)": function(argcv, source) {
            return callmethod(this, "++(1)", [1], source);
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
            if (what.className !== "string") {
                  this.failArgCheck('first ', "string", "replace(_)with(_)");
            }
            if (wth.className !== "string") {
                  this.failArgCheck('second ', "string", "replace(_)with(_)");

            }
            var sl = what._value.length;
            let pattern = new RegExp(escapeRegExp(what._value), 'gm');
            let replacement = escapeReplacement(wth._value);
                // a string, not a RegExp, but must escape any $ characters
            os = s.replace(pattern, replacement);
            return new GraceString(os);
        },
        "indexOf(1)": function string_indexOf (argcv, needle) {
            var self = this._value;
            if (needle.className !== "string") {
                  this.failArgCheck('', "string", "indexOf(_)");
            }
            var result = self.indexOf(needle._value);
            return new GraceNum(result + 1);
        },
        "indexOf(1)ifAbsent(1)": function string_indexOf_ifAbsent (argcv, needle, block0) {
            var self = this._value;
            if (needle.className !== "string") {
                  this.failArgCheck('first ', "string", "indexOf(_)ifAbsent(_)");
            }
            var result = self.indexOf(needle._value);
            if (result === -1) { return callmethod(block0, "apply", [0]); }
            return new GraceNum(result + 1);
        },
        "indexOf(1)startingAt(1)": function string_indexOf_startingAt (argcv, needle, startPos) {
            var self = this._value;
            if (needle.className !== "string") {
                  this.failArgCheck('first ', "string", "indexOf(_)startingAt(_)");
            }
            if (startPos.className !== "number") {
                  this.failArgCheck('second ', "number", "indexOf(_)startingAt(_)");
            }
            var start = startPos._value - 1;
            var result = self.indexOf(needle._value, start);
            if (result === -1) { return new GraceNum(0); }
            return new GraceNum(result + 1);
        },
        "indexOf(1)startingAt(1)ifAbsent(1)": function string_indexOf_startingAt_ifAbsent (argcv, needle, startPos, block0) {
            var self = this._value;
            if (needle.className !== "string") {
                  this.failArgCheck('first ', "string", "indexOf(_)startingAt(_)ifAbsent(_)");
            }
            var start = startPos._value - 1;
            if (startPos.className !== "number") {
                  this.failArgCheck('second ', "number", "indexOf(_)startingAt(_)ifAbsent(_)");
            }
            var start = startPos._value - 1
            var result = self.indexOf(needle._value, start);
            if (result === -1) { return callmethod(block0, "apply", [0]); }
            return new GraceNum(result + 1);
        },
        "lastIndexOf(1)": function string_lastIndexOf_ifAbsent (argcv, needle, block0) {
            var self = this._value;
            if (needle.className !== "string") {
                  this.failArgCheck('', "string", "indexOf(_)");
            }
            var result = self.lastIndexOf(needle._value);
            return new GraceNum(result + 1);
        },
        "lastIndexOf(1)startingAt(1)": function string_lastIndexOf_startingAt (argcv, needle, startPos) {
            if (needle.className !== "string") {
                  this.failArgCheck('first ', "string", "indexOf(_)startingAt(_)");
            }
            if (startPos.className !== "number") {
                  this.failArgCheck('second ', "number", "indexOf(_)startingAt(_)");
            }
            var self = this._value;
            var start = startPos._value - 1;
            var result = self.lastIndexOf(needle._value, start);
            return new GraceNum(result + 1);
        },
        "lastIndexOf(1)startingAt(1)ifAbsent(1)": function string_lastIndexOf_startingAt_ifAbsent (argcv, needle, startPos, block0) {
            var self = this._value;
            if (needle.className !== "string") {
                  this.failArgCheck('first ', "string", "lastIndexOf(_)startingAt(_)ifAbsent(_)");
            }
            if (startPos.className !== "number") {
                  this.failArgCheck('second ', "number", "lastIndexOf(_)startingAt(_)ifAbsent(_)");
            }
            var start = startPos._value - 1;
            var result = self.lastIndexOf(needle._value, start);
            if (result === -1) { return callmethod(block0, "apply", [0]); }
            return new GraceNum(result + 1);
        },
        "lastIndexOf(1)ifAbsent(1)": function string_lastIndexOf (argcv, needle, block0) {
            var self = this._value;
            if (needle.className !== "string") {
                  this.failArgCheck('first ', "string", "lastIndexOf(_)ifAbsent(_)");
            }
            var result = self.lastIndexOf(needle._value);
            if (result === -1) { return callmethod(block0, "apply", [0]); }
            return new GraceNum(result + 1);
        },
        "contains(1)": function string_contains(argcv, needle) {
            var self = this._value;
            if (needle.className !== "string") {
                  this.failArgCheck('', "string", "contains(_)");
            }
            var result = self.indexOf(needle._value);
            if (result === -1) { return GraceFalse; }
            return GraceTrue;
        },
        "includes(1)": function includes(argcv, predicate) {
            var self = this._value;
            for (let i=0; i<self.length; i++) {
                const candidate = new GraceString(self[i]);
                if (Grace_isTrue(request(predicate, "apply(1)", [1], candidate))) {
                    return GraceTrue;
                }
            }
            return GraceFalse;
        },
        "split(1)": function string_split (argcv, spliter) {
            const self = this._value;
            if (spliter.className !== "string") {
                  this.failArgCheck('', "string", "split(_)");
            }
            const ary = self.split(spliter._value);
            const len = ary.length;
            for (var i = 0 ; i < len ; i++) {
                ary[i] = new GraceString(ary[i]);
            }
            return new GraceList(ary);
        },
        "trim": function string_trim (argcv) {
            var self = this._value;
            return new GraceString(self.trim());
        },
        "substringFrom(1)to(1)": function string_substringFrom_to(argcv, from, to) {
            var s = this._value;
            if (from.className !== "number") {
                  this.failArgCheck('first ', "number", "substringFrom(_)to(_)");
            }
            if (to.className !== "number") {
                  this.failArgCheck('second ', "number", "substringFrom(_)to(_)");
            }
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
            if (from.className !== "number") {
                  this.failArgCheck('first ', "number", "substringFrom(_)to(_)");
            }
            if (size.className !== "number") {
                  this.failArgCheck('second ', "number", "substringFrom(_)to(_)");
            }
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
            if (from.className !== "number") {
                  this.failArgCheck('', "number", "substringFrom(_)to(_)");
            }
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
            if (needle.className !== "string") {
                  this.failArgCheck('', "string", "startsWith(_)");
            }
            var n = needle._value;
            if (self.lastIndexOf(n, 0) === 0) return GraceTrue;
            return GraceFalse;
        },
        "endsWith(1)": function string_endsWith(argvc, needle) {
            var self = this._value;
            if (needle.className !== "string") {
                  this.failArgCheck('', "string", "endsWith(_)");
            }
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
            if (that.className !== "string") {
                  this.failArgCheck('', "string", "compare(_)");
            }
            var other = that._value;
            if (self === other) return new GraceNum(0);
            if (self > other) return new GraceNum(+1);
            return new GraceNum(-1);
        },
        ">(1)": function string_greaterThan (argcv, that) {
            var self = this._value;
            if (that.className !== "string") {
                  this.failArgCheck('', "string", ">(_)");
            }
            var other = that._value;
            if (self > other) return GraceTrue;
            return GraceFalse;
        },
        "<(1)": function string_lessThan (argcv, that) {
            var self = this._value;
            if (that.className !== "string") {
                  this.failArgCheck('', "string", "<(_)");
            }
            var other = that._value;
            if (self < other) return GraceTrue;
            return GraceFalse;
        },
        "≤(1)": string_lessThanOrEqual,
        "≥(1)": string_greaterThanOrEqual,
        "==(1)": function string_equal(argcv, other) {
            if (this === other)
                return GraceTrue;
            if ("string" === other.className &&
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
        "matches(1)": function string_match (argcv, o) {
            return callmethod(this, "==(1)", [1], o);
        },
        "|(1)": function string_orPattern(argcv, o) {
            return graceOrPattern(this, o);
        },
        "&(1)": function string_andPattern (argcv, o) {
            return graceAndPattern(this, o);
        },
        "prefix¬": function(argcv) {
            return graceNotPattern(this);
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
                raiseClassError("argument to string *(_) must be an integer");
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
            const collections = loadDynamicModule("collections");
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
    definitionModule: "built-in library",
    definitionLine: 0,
    classUid: "string-built-in"
};

var GraceEmptyString = new GraceString("");

function failNumMethodArgCheck(desc, className, methodName) {
    const idStart = /^[a-zA-Z_]/;
    const sep = methodName.match(idStart) ? "." : " ";
    raiseClassError(desc + 'argument to ' + this._value +
                    sep + methodName + ' is not a ' + className);
}

function pointObject() {
    if (! pointObject.cache) {
        const pointBundle = loadDynamicModule("pointBundle");
        const openBundle = request(pointBundle, "open");
        pointObject.cache = openBundle;
    }
    return pointObject.cache
}

function GraceNum(n) {
    this._value = n;
}

GraceNum.prototype = {
    failArgCheck: failNumMethodArgCheck,
    methods: {
        "isMe(1)":          object_isMe,
        "myIdentityHash":   object_identityHash,
        "≠(1)":             object_notEquals,
        "basicAsString":    object_basicAsString,
        "debug$Iterator":   object_debugIterator,
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
            return callmethod(pointObject(), "point2Dx(1)y(1)", [1, 1], this, other);
        },
        "..(1)": function(argcv, other) {
            if (! Number.isInteger(this._value)) {
                raiseException(RequestErrorObject,
                    "lower bound of range (" + this._value +
                               ") not an integer.");
            } else if (other.className !== "number") {
                raiseException(TypeErrorObject, "upper bound of range not a Number");
            } else if (! Number.isInteger(other._value)) {
                raiseException(RequestErrorObject, "upper bound of range (" +
                    other._value + ") not an integer");
            }
            return callmethod(GraceRangeClass(),
                    "uncheckedFrom(1)to(1)", [1, 1], this, other);
        },
        "downTo(1)": function(argcv, other) {
            if (! Number.isInteger(this._value)) {
                raiseException(RequestErrorObject,
                    "first bound of downward range (" + this._value +
                               ") not an integer.");
            } else if (other.className !== "number") {
                raiseException(TypeErrorObject, "second bound of downward range not a Number");
            } else if (! Number.isInteger(other._value)) {
                raiseException(RequestErrorObject, "second bound of downward range (" +
                    other._value + ") not an integer");
            }
            return callmethod(GraceRangeClass(),
                    "from(1)downTo(1)", [1, 1], this, other);
        },
        "compare(1)": function(argcv, that) {
            var self = this._value;
            var other = that._value;
            if (self === other) return new GraceNum(0);
            if (that.className !== "number") {
                  this.failArgCheck(dbgp(other), "number", "compare(_)");
            }
            if (self > other) return new GraceNum(+1);
            return new GraceNum(-1);
        },
        "<(1)": function(argcv, other) {
            if (other.className === "number") {
                return (this._value < other._value) ? GraceTrue : GraceFalse;
            }
            return request(other, "≥(1)", [1], this);
        },
        ">(1)": function(argcv, other) {
            if (other.className === "number") {
                return (this._value > other._value) ? GraceTrue : GraceFalse;
            }
            return request(other, "≤(1)", [1], this);
        },
        "≤(1)": function(argcv, other) {
            if (other.className === "number") {
                return (this._value <= other._value) ? GraceTrue : GraceFalse;
            }
            return request(other, ">(1)", [1], this);
        },
        "≥(1)": function(argcv, other) {
            if (other.className === "number") {
                return (this._value >= other._value) ? GraceTrue : GraceFalse;
            }
            return request(other, "<(1)", [1], this);
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
        "matches(1)": function(argcv, o) {
            return callmethod(this, "==(1)", [1], o);
        },
        "|(1)": function(argcv, o) {
            return graceOrPattern(this, o);
        },
        "&(1)": function(argcv, o) {
            return graceAndPattern(this, o);
        },
        "prefix¬": function(argcv) {
            return graceNotPattern(this);
        }
    },
    className: "number",
    definitionModule: "built-in library",
    definitionLine: 0,
    classUid: "number-built-in"
};

function GracePredicatePattern(pred) {
    this._value = pred;
}

GracePredicatePattern.prototype = {
    methods: {
        "isMe(1)":          object_isMe,
        "myIdentityHash":   object_identityHash,
        "≠(1)":             object_notEquals,
        "basicAsString":    object_basicAsString,
        "debug$Iterator":   object_debugIterator,
        "::(1)":            object_colonColon,
        "asString": function(argcv) {
            return new GraceString("a predicate pattern");
        },
        "asDebugString": function(argcv) {
            return new GraceString("a predicate pattern");
        },
        "matches(1)": function predicate_match (argcv, o) {
            if (o._value) {
                // if o has no _value, it is not a number, and so can't match
                if (this._value(o._value)) {
                    return GraceTrue;
                }
            }
            return GraceFalse;
        },
        "|(1)": function predicate_orPattern(argcv, o) {
            return graceOrPattern(this, o);
        },
        "&(1)": function predicate_andPattern (argcv, o) {
            return graceAndPattern(this, o);
        },
        "prefix¬": function predicate_notPattern (argcv) {
            return graceNotPattern(this);
        },
        "isType": function type_isType (argcv) {
            return GraceFalse;
        }
    },
    className: "predicatePattern",
    definitionModule: "built-in library",
    definitionLine: 0,
    classUid: "predicatePattern-built-in"
}

function GraceBoolean(b) {
    this._value = b;
}
GraceBoolean.prototype = {
    methods: {
        "isMe(1)":          object_isMe,
        "myIdentityHash":   object_identityHash,
        "≠(1)":             object_notEquals,
        "basicAsString":    object_basicAsString,
        "debug$Iterator":   object_debugIterator,
        "::(1)":            object_colonColon,
        "ifTrue(1)": function(argcv, action) {
            return (this._value) ? request(action, "apply") : GraceDone;
        },
        "ifFalse(1)": function(argcv, action) {
            return (this._value) ? GraceDone : request(action, "apply");
        },
        "ifTrue(1)ifFalse(1)": function(argcv, trueAction, falseAction) {
            return ((this._value) ? request(trueAction, "apply") : request(falseAction, "apply"));
        },
        "ifFalse(1)ifTrue(1)": function(argcv, falseAction, trueAction) {
            return ((this._value) ? request(trueAction, "apply") : request(falseAction, "apply"));
        },
        "not": function(argcv) {
            return ((this._value) ? GraceFalse : GraceTrue);
        },
        "prefix!": function(argcv) {
            return ((this._value) ? GraceFalse : GraceTrue);
        },
        "&(1)": function(argcv, other) {
            return graceAndPattern(this, other);
        },
        "|(1)": function(argcv, other) {
            return graceOrPattern(this, other);
        },
        "prefix¬": function(argcv) {
            return graceNotPattern(this);
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
        "matches(1)": function(argcv, o) {
            return (callmethod(this, "==(1)", [1], o));
        },
        "hash": function(argcv) {
            return new GraceNum(this._value ? 3637 : 1741);
        }
    },
    className: "boolean",
    definitionModule: "built-in library",
    definitionLine: 0,
    classUid: "boolean-built-in"
};

var GraceTrue = new GraceBoolean(true);
var GraceFalse = new GraceBoolean(false);

function listObject() {
    if (! listObject.cache) {
        const coll = loadDynamicModule("collections");
        listObject.cache = callmethod(coll, "list", [0]);
    }
    return listObject.cache
}

function GraceList(jsList) {
    var newList = callmethod(listObject(), "empty", [0]);
    for (var ix = 0; ix < jsList.length; ix++) {
        callmethod(newList, "add(1)", [1], jsList[ix]);
    }
    return newList;
}

function GraceSequence(jsList) {
    this._value = jsList;
}

function sequence_indices(argcv) {
    var size = this._value.length;
    return callmethod(GraceRangeClass(), "uncheckedFrom(1)to(1)", [1, 1],
                    new GraceNum(1), new GraceNum(size));
}

function checkBounds(obj, n, max) {
    // checks that the Grace number n is a legal bound in the list or sequence obj
    // max is an optional parameter; if provided, it's the maximum for n
    max = max || obj._value.length;
    if (n.className != "number") {
        raiseException(TypeErrorObject,
            "argument " + safeJsString(n) + " to 'at(_)' is not a Number");
    }
    const idx = n._value;   // the js number
    if (!(idx > 0 && idx <= max)) {
        // why the negation?  So that NaN triggers this BoundsError
        raiseBoundsError(
            'index ' + safeJsString(n) + ' but ' + obj.className + ' has size ' +
            obj._value.length);
    }
    if (! Number.isInteger(idx)) {
        raiseBoundsError(
            "argument " + safeJsString(n) + " to 'at(_)' is not an integer");
    }
    return      // everything looks ok!
}

GraceSequence.prototype = {
    methods: {
        "isMe(1)":          object_isMe,
        "myIdentityHash":   object_identityHash,
        "≠(1)":             object_notEquals,
        "basicAsString":    object_basicAsString,
        "::(1)":            object_colonColon,
        "isEmpty": function sequence_isEmpty (argcv) {
            return (this._value.length === 0) ? GraceTrue : GraceFalse;
        },
        "size": function sequence_size (argcv) {
            return new GraceNum(this._value.length);
        },
        "sizeIfUnknown(1)": function sequence_sizeIfUnknown (argcv, val) {
            return new GraceNum(this._value.length);
        },
        "reversed": function sequence_reversed (argcv) {
            return new GraceSequence(this._value.slice().reverse());
        },
        "at(1)": function sequence_at(argcv, where) {
            var idx = where._value;
            var result = this._value[idx-1];
            if (result !== undefined) return result;     // fast path
            // Now report the cause of the problem:
            checkBounds(this, where);
            raiseException(ProgrammingErrorObject,
                    "impossible happened in sequence.at(_)", where);
        },
        "at(1)ifAbsent(1)": function sequence_at_ifAbsent(argcv, where, action) {
            var idx = where._value;
            var result = this._value[idx-1];
            if (result !== undefined) return result;     // fast path
            return request(action, "apply", [0]);
        },
        "first": function sequence_first(argcv) {
            if (this._value.length < 1)
                raiseBoundsError('[] has no first element');
            return this._value[0];
        },
        "second": function sequence_second(argcv) {
            if (this._value.length < 2)
                raiseBoundsError(
                        'sequence of length ' + this._value.length +
                        ' has no second element');
            return this._value[1];
        },
        "third": function sequence_third(argcv) {
            if (this._value.length < 3)
                raiseBoundsError('sequence of length ' +
                        this._value.length + ' has no third element');
            return this._value[2];
        },
        "fourth": function sequence_fourth(argcv) {
            if (this._value.length < 4)
                raiseBoundsError('sequence of length ' +
                        this._value.length + ' has no fourth element');
            return this._value[3];
        },
        "fifth": function sequence_fifth(argcv) {
            if (this._value.length < 5)
                raiseBoundsError('sequence of length ' +
                        this._value.length + ' has no fifth element');
            return this._value[4];
        },
        "last": function sequence_last(argcv) {
            var self = this._value;
            if (self.length < 1)
                throw new GraceExceptionPacket(BoundsErrorObject,
                    new GraceString('[] has no last element'));
            return self[self.length-1];
        },
        "contains(1)": function sequence_contains(argcv, other) {
            for (var i=0; i<this._value.length; i++) {
                var v = this._value[i];
                if (Grace_isTrue(callmethod(v, "==(1)", [1], other)))
                    return GraceTrue;
            }
            return GraceFalse;
        },
        "includes(1)": function sequence_includes(argcv, booleanBlock) {
            for (var i=0; i<this._value.length; i++) {
                var v = this._value[i];
                if (Grace_isTrue(callmethod(booleanBlock, "apply(1)", [1], v)))
                    return GraceTrue;
            }
            return GraceFalse;
        },
        "indexOf(1)ifAbsent(1)": function sequence_indexOf_ifAbsent(argcv, other, absentBlock) {
            for (var i=0; i<this._value.length; i++) {
                var v = this._value[i];
                if (Grace_isTrue(callmethod(v, "==(1)", [1], other)))
                    return new GraceNum(i+1);
            }
            return callmethod(absentBlock, "apply", [0]);
        },                             
        "indexOf(1)": function sequence_indexOf(argcv, other, absentBlock) {
            for (var i=0; i<this._value.length; i++) {
                var v = this._value[i];
                if (Grace_isTrue(callmethod(v, "==(1)", [1], other)))
                    return new GraceNum(i+1);
            }
            raiseException(NoSuchObjectErrorObject,
                           "sequence does not contain " + safeJsString(other),
                           other);
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
            var s = "sequence [";
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
        "debug$Iterator": function(argcv) {
            return new GraceSequenceIterator(this);
        },
        "==(1)": function(argcv, other) {
            const collections = loadDynamicModule("collections");
            return selfRequest(collections,
                        "isEqual(1)toCollection(1)", [1, 1], this, other);
        },
        "hash": function(argcv) {
            var result = 0x5E0EACE;     // sort of like SEQENCE
            for (var i=0; i<this._value.length; i++) {
                result = hashAndCombine(result, this._value[i]);
            }
            return new GraceNum(result);
        },
        "::(1)": object_colonColon,
        "iterator": function(argcv) {
            return new GraceSequenceIterator(this);
        },
        "do(1)": function sequence_do(argcv, action1) {
            var self = this._value;
            var size = self.length;
            for (var ix = 0; ix < size; ix ++) {
                callmethod(action1, "apply(1)", [1], self[ix]);
            }
            return GraceDone;
        },
        "keysAndValuesDo(1)": function sequence_do(argcv, action2) {
            var self = this._value;
            var size = self.length;
            for (var ix = 0; ix < size; ix ++) {
                callmethod(action2, "apply(2)", [2], new GraceNum(ix+1), self[ix]);
            }
            return GraceDone;
        },
        "do(1)separatedBy(1)": function sequence_do_sepBy(argcv, action1, separatorAction) {
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
        "indices": sequence_indices,
        "keys": sequence_indices,
        "values": function sequence_values(argcv) { return this; },
        "map(1)": function sequence_map(argcv, function1) {
            var collections = loadDynamicModule("collections");
            return selfRequest(collections,
                        "lazySequenceOver(1)mappedBy(1)", [1, 1], this, function1);
        },
        "filter(1)": function sequence_filter(argcv, predicate1) {
            var collections = loadDynamicModule("collections");
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
            return new GraceSequence(l);
        },
        ">>(1)": function(argcv, target) {
            return callmethod(target, "<<(1)", [1], this);
        },
        "<<(1)": function(argcv, source) {
            return callmethod(this, "++(1)", [1], source);
        },
        "sortedBy(1)": function sequence_sortedBy(argcv, compareBlock) {
            const result = new GraceSequence(this._value.slice(0));
                              // slice creates a shallow copy
            var len = this._value.length;
            function compareFun(a, b) {
                var res = callmethod(compareBlock, "apply(2)", [2], a, b);
                if (res.className === "number") return res._value;
                throw new GraceExceptionPacket(TypeErrorObject,
                       new GraceString("compare block in primitiveArray.sort method " +
                                       "did not return a Number"));
            }
            result._value.sort(compareFun);
            return result;
        },
        "sorted": function sequence_sorted(argcv) {
            const result = new GraceSequence(this._value.slice(0));
                        // slice creates a shallow copy from 0 to end
            function compareFun(a, b) {
                var res = callmethod(a, "compare(1)", [1], b);
                if (res.className === "number") return res._value;
                throw new GraceExceptionPacket(TypeErrorObject,
                       new GraceString("compare(_) method on " +safeJsString(a) +
                                       " did not return a Number"));
            }
            result._value.sort(compareFun);
            return result;
        }
    },
    className: "sequence",
    definitionModule: "built-in library",
    definitionLine: 0,
    classUid: "sequence-built-in"
};

function GracePrimitiveArray(len) {
    this._value = new Array(len);
//    elements are all undefined by default
}

GracePrimitiveArray.prototype = {
    methods: {
        "isMe(1)":          object_isMe,
        "myIdentityHash":   object_identityHash,
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
            var s = "primitiveArray [";
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
            var s = "primitiveArray [";
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
            s += "]";
            return new GraceString(s);
        },
        "debug$Iterator": function(argcv) {
            return new GraceIterator(this);
        },
        "do(1)": function (argcv, block) {
            for (let i=0; i<this._value.length; i++) {
                const obj = this._value[i];
                if (obj) request(block, "apply(1)", [1], obj);
            }
            return GraceDone
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
            return new GraceIterator(this);
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
    definitionModule: "built-in library",
    definitionLine: 0,
    classUid: "primitiveArray-built-in"
};

function graceOrPattern(l, r) {
    return request(patternAndType(), "OrPattern(2)", [2], l, r);
}

function graceAndPattern(l, r) {
    return request(patternAndType(), "AndPattern(2)", [2], l, r);
}

function graceNotPattern(o) {
    return request(patternAndType(), "NotPattern(1)", [1], o);
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

function patternAndType() {
    // an instance of the _opened_ bundle pattern+type
    if (! patternAndType.cache) {
        const bundle = loadDynamicModule("pattern+typeBundle");
        const openBundle = request(bundle, "open", [0]);
        patternAndType.cache = openBundle;
    }
    return patternAndType.cache;
}
function GraceTypeIntersection(l, r) {
    return request(patternAndType(), "TypeIntersection(2)", [2], l, r);
}
function GraceTypeUnion(l, r) {
    return request(patternAndType(), "TypeUnion(2)", [2], l, r);
}
function GraceTypeVariant(l, r) {
    return request(patternAndType(), "TypeVariant(2)", [2], l, r);
}
function GraceTypeSubtraction(l, r) {
    return request(patternAndType(), "TypeSubtraction(2)", [2], l, r);
}

function GraceType(name) {
    this.name = name;
    this.typeMethods = [];
    this.matchCache = [];
}
GraceType.prototype = {
    methods: {
        "isMe(1)":          object_isMe,
        "myIdentityHash":   object_identityHash,
        "≠(1)":             object_notEquals,
        "basicAsString":    object_basicAsString,
        "debug$Iterator":   object_debugIterator,
        "::(1)":            object_colonColon,
        "matches(1)": function type_match (argcv, other) {
            let cUid = other.classUid;
            if (cUid) {
                let c = this.matchCache[cUid];
                if (c !== undefined) return c;
            } else {
                cuid = null;
                minigrace.stderr_write(dbgp(other) + " has no classUid\n");
            }
            for (var i=0; i<this.typeMethods.length; i++) {
                var m = this.typeMethods[i];
                if (!other.methods[m]) {
                    if (cUid) this.matchCache[cUid] = GraceFalse;
                    return GraceFalse;
                }
            }
            if (cUid) this.matchCache[cUid] = GraceTrue;
            return GraceTrue;
        },
        "|(1)": function type_or(argcv, other) {
            return new GraceTypeVariant(this, other);
        },
        "&(1)": function type_and(argcv, other) {
            return new GraceTypeIntersection(this, other);
        },
        "prefix¬": function(argcv) {
            return graceNotPattern(this);
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
            var result = [];
            for (var i=0; i<this.typeMethods.length; i++) {
                const methName = canonicalMethodName(this.typeMethods[i]);
                result.push(methName);
            }
            return new GraceSequence(result.sort().map(
                    nm => new GraceString(nm)));;
        },
        "==(1)": function type_identity (argcv, other) {
            return selfRequest(this, "isMe(1)", argcv, other)
        },
        "hash": function type_hash (argcv) {
            return selfRequest(this, "myIdentityHash", argcv)
        },
        "setName(1)": function type_setName (argcv, nu) {
            if (nu.className !== "string") nu = request(nu, "asString", [0]);
            this.name = nu._value;
            return this;
        },
        "name": function type_name (argcv) {
            return new GraceString(this.name);
        },
        "isNone": function type_isNone (argcv) {
            return GraceFalse;
        },
        "isType": function type_isType (argcv) {
            return GraceTrue;
        }
    },
    className: "Type",
    definitionModule: "built-in library",
    definitionLine: 0,
    classUid: "Type-built-in"
};

GraceType.prototype.methods["setName(1)"].confidential = true;


function GraceBlock(recvr, lineNum, numParams) {
    this.definitionModule = recvr.definitionModule;
    this.definitionLine = lineNum;
    this.numParams = numParams;
    this.receiver = recvr;
    this.className = 'block';
    this.methods = {
        "isMe(1)":          object_isMe,
        "myIdentityHash":   object_identityHash,
        "basicAsString":    object_basicAsString,
        "asDebugString":    object_asDebugString,
        "debug$Iterator":   object_debugIterator,
        "asString":         function GraceBlock_asString (argcv) {
            return new GraceString("block" + this.numParams + "<" +
                    this.definitionModule + ":" + this.definitionLine + ">");
        }
    };
    this.classUid = 'block-' + numParams
}

GraceBlock.prototype.noSuchMethodHandler = {
    numParams: 3,
    className: 'block',
    methods: {
        "isMe(1)":          object_isMe,
        "myIdentityHash":   object_identityHash,
        "basicAsString":    object_basicAsString,
        "asDebugString":    object_asDebugString,
        "debug$Iterator":   object_debugIterator,
        "asString":         function GraceBlock_asString (argcv) {
            return new GraceString("intrinsic noSuchMethodHandler for blocks");
        },
        "apply(3)":         function GraceBlock_noMethod(argcv, name, arglist, recvr) {
            const canonicalName = name._value;
            if (canonicalName.match( /^apply\(_(,_)*\)$/ )) {
                const numArgs = request(arglist, 'size', [0]);
                blockWrongArityException(numArgs._value, recvr);
            } else {
                const numericName = numericMethodName(canonicalName);
                const closeMatches = closeMatchesForMethodNamed(numericName, recvr);
                let suggestions = "";
                if (closeMatches.length !== 0) {
                    let options = readableOptions(closeMatches.sort().map(n => canonicalName(n)));
                    suggestions = "  Did you mean " + options + "?";
                }
                throw new GraceExceptionPacket(NoSuchMethodErrorObject,
                    new GraceString("no method " + canonicalName + " on " +
                        describe(recvr) + "." + suggestions));
            }
        }
    }
};

function blockWrongArityException(numArgs, recvr) {
    const plural = (recvr.numParams === 1) ? "" : "s";
    throw new GraceExceptionPacket(NoSuchMethodErrorObject,
        new GraceString(describe(recvr) + " requires " + recvr.numParams + " argument" +
                plural + " but given " + numArgs));
}

function badBlockArgs(...args) {
    // called by compiled code after the guard of a block has failed
    // in its `apply(…)` method. `this` is the block itself.
    // We simulate the evaluation of the guard, and report an error on
    // the first failure.
    const numArgs = args.length;
    for (var ix = 0; ix < this.paramTypes.length; ix++) {
        var typeSpec = this.paramTypes[ix]
        var match = callmethod(typeSpec, "matches(1)", [1], args[ix]);
        if ( ! Grace_isTrue(match)) {
            var n = ix + 1;
            var canonicalName = "apply(_";
            for (var i = 1; i < numArgs; i++) { canonicalName += ",_"; }
            canonicalName += ")";
            var typeName = callmethod(typeSpec, "asString", [0])._value;
            if (typeName.match(/type ‹anon›/)) {
                typeName = "required type";
            }
            var argDesc = (numArgs === 1) ? "argument" : "argument " + n ;
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
    if (type === var_Unknown) return;  // an optimization
    if (type.methods["matches(1)"]) {
        if (!Grace_isTrue(request(type, "matches(1)", [1], obj))) {
            if ((type.name) && (type.name !== typeDesc)) {
                typeDesc += " (= " + type.name + ")";
            }
            let message = objDesc + " does not have type " + typeDesc;
            raiseTypeError(message, type, obj);
        }
    } else {
        raiseException(ProgrammingErrorObject,
                "while checking that " + objDesc + " has type " +  typeDesc +
                ", found that " + typeDesc + " is not a type (has no matches(_) method)");
    }
}

function raiseTypeError(msg, type, value) {
    var diff;
    if (GraceDone === value) {
        diff = " — it is `done`.";
    } else {
        try {
             var tc = loadDynamicModule("typeComparison");
             var missing = callmethod(tc, "methodsIn(1)missingFrom(1)", [1, 1], type, value)._value;
             var s = (missing.includes(" ")) ? "s " : " ";
             diff = ".\nIt is " + describe(value) +  ", which is missing method" + s + missing + ".";
        } catch (ex) {
             // if something goes wrong while generating the message, just give up
        }
        if (! diff) { diff = ""; }
    }
    var ex = new GraceExceptionPacket(TypeErrorObject,
                                      new GraceString(msg + diff));
    throw ex;
}

function raiseTypeArgError(methodName, required, given) {
    const s = (required == 1) ? ""  : "s";
    throw new GraceExceptionPacket(RequestErrorObject,
                new GraceString(methodName + " requires " + required +
                        " type argument" + s + ", but was given " + given));
}

function classType(o) {
    var t = new GraceType(capitalize(o.className));
    for (let m in o.methods) {
        if (! (m.includes("$") || o.methods[m].confidential)) {
            t.typeMethods.push(m);
        }
    };
    if (o.types) {
        for (let m in o.types) {
            if (! o.types[m].confidential) {
                t.typeMethods.push(m);
            }
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
var type_Done = var_Done;

function hashMap_empty () { return new GraceHashMap(); };

var var_HashMap = { methods: { 'new': hashMap_empty,
                               'empty': hashMap_empty } };
var var_GraceType = { methods: { 'new':
    function GraceType_new () { return new GraceType(); } }
};

function hashMap_at_put (argcv, k, v) {
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

function hashMap_at (argcv, k) {
    var hc = callmethod(k, "hash", [0]);
    hc = hc._value;
    while (this.table[hc]) {
        if (Grace_isTrue(callmethod(this.table[hc].key, "==(1)", [1], k)))
            return this.table[hc].value;
        hc++;
    }
    raiseException(NoSuchObjectErrorObject,
                   "key " + describe(k) + " not found in HashMap",
                   this);
};

function hashMap_at_ifAbsent (argcv, k, block) {
    var hc = callmethod(k, "hash", [0]);
    hc = hc._value;
    while (this.table[hc]) {
        if (Grace_isTrue(callmethod(this.table[hc].key, "==(1)", [1], k)))
            return this.table[hc].value;
        hc++;
    }
    return request(block, "apply", [0]);
};
function hashMap_containsKey (argcv, k) {
    var hc = callmethod(k, "hash", [0]);
    hc = hc._value;
    while (this.table[hc]) {
        if (Grace_isTrue(callmethod(this.table[hc].key, "==(1)", [1], k)))
            return GraceTrue;
        hc++;
    }
    return GraceFalse;
};
function hashMap_asString() {
    var s = "hashMap{";
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
    s += "}";
    return new GraceString(s);
};

function GraceHashMap() {
    this.table = {};
    this.size = 0;
}

GraceHashMap.prototype = Grace_allocObject(GraceObject, "hashMap");
GraceHashMap.prototype.methods['put(2)'] = hashMap_at_put;
GraceHashMap.prototype.methods['at(1)put(1)'] = hashMap_at_put;
GraceHashMap.prototype.methods['at(1)'] = hashMap_at;
GraceHashMap.prototype.methods['get(1)'] = hashMap_at;
GraceHashMap.prototype.methods['at(1)ifAbsent(1)'] = hashMap_at_ifAbsent;
GraceHashMap.prototype.methods['contains(1)'] = hashMap_containsKey;
GraceHashMap.prototype.methods['containsKey(1)'] = hashMap_containsKey;
GraceHashMap.prototype.methods['asString'] = hashMap_asString;
GraceHashMap.prototype.methods['asDebugString'] = hashMap_asString;

function GraceSequenceIterator(l) {
    this._value = l._value;
    this._max = this._value.length;
    this._index = 0;
    this._obj = l;
}
GraceSequenceIterator.prototype = Grace_allocObject(GraceObject, "sequenceIterator");
GraceSequenceIterator.prototype.methods.hasNext = function() {
    return ((this._index < this._max) ? GraceTrue : GraceFalse);
};
GraceSequenceIterator.prototype.methods.next = function() {
    if (this._index < this._max) {
        var rv = this._value[this._index];
        this._index++;
        return rv;
    }
    const selfString = request(this._obj, "asString")._value;
    raiseException(IteratorExhaustedObject, "on sequence " + selfString);
};
GraceSequenceIterator.prototype.classUid = "sequenceIterator-built-in";

function GraceStringIterator(s) {
    this._value = s._value;
    this._index = 0;
    this._max = s._value.length;
    this.className = "stringIterator";
}
GraceStringIterator.prototype = {
    methods: {
        "isMe(1)":          object_isMe,
        "myIdentityHash":   object_identityHash,
        "basicAsString":    object_basicAsString,
        "asDebugString":    object_asDebugString,
        "debug$Iterator":   object_debugIterator,
        hasNext: function() {
            return ((this._index < this._max) ? GraceTrue : GraceFalse);
        },
        next: function() {
            if (this._index >= this._max) {
                raiseException(IteratorExhaustedObject, "on string " + this._value);
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

GraceStringIterator.prototype.classUid = "stringIterator-built-in";

function GraceIterator(obj) {
    this._value = obj._value;
    this._obj = obj;
    this._keys = Object.keys(this._value);
    this._keyIndex = 0;
    this._max = this._keys.length;
}
GraceIterator.prototype = Grace_allocObject(GraceObject, "iterator");
GraceIterator.prototype.methods.hasNext = function() {
    return ((this._keyIndex < this._max) ? GraceTrue : GraceFalse);
};
GraceIterator.prototype.methods.next = function() {
    if (this._keyIndex < this._max) {
        const result = this._value[this._keys[this._keyIndex]];
        this._keyIndex++;
        return result;
    }
    const selfString = request(this._obj, "asString")._value;
    raiseException(IteratorExhaustedObject, "on " + selfString);
};
GraceIterator.prototype.methods.asString = function() {
    const selfString = request(this._obj, "asString")._value;
    return new GraceString("an iterator over " + selfString);
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

var util_module = false;
var loadDate = Date.now();
var previousElapsed = Math.round(loadDate/10)/100;

function gracecode_util() {
    if (util_module !== false)
        return util_module;

    this.io = do_import("io", gracecode_io);

    this.methods.asString = function(argcv) {
        return new GraceString('the "util" module');
    };
    this.methods.vtag = function(argcv) {
        return new GraceBoolean(false);
    };
    this.methods.outfile = function util_outfile(argcv) {
        return request(this.io, 'output');
    };
    this.methods.infile = function util_infile(argcv) {
        return request(this.io, 'input');
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
        var meth_isAlready = function(argcv, var_moduleName) {    // method isAlready(1)
            setLineNumber(0);
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

        const setObject = request(loadDynamicModule("collections"), "set", [0]);
        obj_requiredModules.data['static'] = request(setObject, "empty", [0]);
        var reader_util_static1257 = function() {
            return this.data['static'];
        };
        reader_util_static1257.def = true;
        obj_requiredModules.methods['static'] = reader_util_static1257;
        obj_requiredModules.data['linkfiles'] = callmethod(listObject(), "empty", [0]);
        var reader_util_linkfiles1260 = function() {
            return this.data['linkfiles'];
        };
        reader_util_linkfiles1260.def = true;
        obj_requiredModules.methods['linkfiles'] = reader_util_linkfiles1260;
        obj_requiredModules.data['other'] = callmethod(setObject, "empty", [0]);
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
        var result = callmethod(listObject, "empty", [0]);
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
    this.methods['generalError(5)'] = function util_generalError(argcv, message, errlinenum, position, arr, suggestions) {
        minigrace.stderr_write(minigrace.modname + ".grace[" + errlinenum._value + ":" +
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
    this._lines = new GraceList([]);
    this._cLines = new GraceList([]);
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
    gctCache['util'] = "path:\n util\nclasses:\npublic:\n recurse\n recurse:=(1)\n dynamicModule\n dynamicModule:=(1)\n importDynamic\n importDynamic:=(1)\n jobs\n jobs:=(1)\n cLines\n cLines:=(1)\n lines\n lines:=(1)\n filename\n filename:=(1)\n errno\n errno:=(1)\n parseargs\n previousElapsed\n previousElapsed:=(1)\n log_verbose\n outprint\n generalError\n type_error\n semantic_error\n warning\n verbosity\n outfile\n infile\n modname\n runmode\n buildtype\n interactive\n gracelibPath\n setline\n setPosition\n linenum\n linepos\n vtag\n noexec\n target\n extensions\n sourceDir\n execDir\n splitPath(1)\n file(1)on(1)orPath(1)otherwise(1)\n file(1)onPath(1)otherwise(1)\n requiredModules\n processExtension\n printhelp\n debug\n hex\nconfidential:\nfresh-methods:\nmodules:\n stringMap\n buildinfo\n sys\n io\n";

function loadDynamicModule (moduleName, directory) {
    // `directory` is optional; if omitted, we search GRACE_MODULE_PATH

    if (importedModules[moduleName]) {      // if module has already been imported,
        return importedModules[moduleName]; // we should not import it again
    }
    var moduleFunc;
    if (inBrowser) {
        try {
            moduleFunc = window[graceModuleName(moduleName)];
        } catch (ex) {
            throw new GraceExceptionPacket(ImportErrorObject,
                new GraceString("can't find module " + moduleName));
        }
    } else {
        if (! directory) {
            directory = path.dirname(findOnPath(moduleName + ".js"));
        }
        minigrace.loadModule(moduleName, directory);
        try {
            moduleFunc = global[graceModuleName(moduleName)];
        } catch (ex) {
            throw new GraceExceptionPacket(ImportErrorObject,
                new GraceString("error initializing module " + moduleName));
        }
    }
    return do_import(moduleName, moduleFunc);
}

function safeJsString (obj) {
    // Don't use request!  This function is called from within request.
    var result;
    if (obj.className == "string") { return obj._value }
    try {
        var m = findMethod(obj, "asString");
        result = m.call(obj, [0])._value;
    } catch (ex) {
        result = "(without working asString method)";
    }
    return result;
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
    let errorLine = this.lineNumber;
    let modName = this.method.definitionModule
    if (!modName) {
        modName = "native code";
        errorLine = 0;
    }
    const effectiveName = canonicalMethodName(stripDollarSuffix(this.methname));
    let errorString = effectiveName;
    if (this.className !== "module") {
        errorString = this.className + "." + effectiveName;
    }
    if (errorLine) {
        errorString += " at line " + errorLine + " of " + modName;
    } else {
        errorString += " in " + modName;
    }
    return errorString;
}

function handleRequestException(ex, obj, methname, method, methodArgs) {
    if (ex.exctype === 'graceexception') {
        ex.exitStack.unshift({
            className: obj.className,
            methname: methname,
            method: method,
            lineNumber: lineNumber,
            toString: GraceCallStackToString
        });
        throw ex;
    } else if (obj == undefined) {
        throw new GraceExceptionPacket(UninitializedVariableObject,
            new GraceString("requested method '" + methname + "' on uninitialised variable."));
    } else if (methname === 'module initialization') {
        const where = lineNumber ? "on line " + lineNumber : "in initialisation";
        const newEx = new GraceExceptionPacket(RequestErrorObject,
            new GraceString("error " + where + " of module " +
            obj.definitionModule + ": " + ex.message));
        Object.defineProperty(newEx, 'moduleName', {value: obj.definitionModule});
        newEx.lineNumber = lineNumber;
        throw newEx;
    } else if (typeof(obj.methods[methname]) !== "function") {
        var argsGSeq = new GraceSequence( methodArgs.slice(1) );
        return dealWithNoMethod(methname, obj, argsGSeq);
    } else if (ex == "ErrorExit") {
        throw ex;
    } else {
        throwStackOverflowIfAppropriate(ex);
        const newEx = new GraceExceptionPacket(MinigraceErrorObject,
            new GraceString("implementation error in JavaScript method. " + ex.toString()));
        newEx.exitStack.unshift({
            className: obj.className,
            methname: methname,
            method: method,
            lineNumber: 0,
            toString: GraceCallStackToString
        });
        throw newEx;
    }
}

function request(obj, methname, ...args) {
    var origLineNumber = lineNumber;
    lineNumber = 0;                      // to avoid reporting line number in native code
    var returnTarget = invocationCount;  // will be incremented by invoked method
    var meth
    try {
        meth = obj.methods[methname];
        if (meth.confidential) {
            raiseConfidentialMethod(methname, obj);
        }
        var ret = meth.apply(obj, args);
    } catch(ex) {
        if (ex.exctype === 'return') {
            if (ex.target == returnTarget) {
                return ex.returnvalue;
            }
            throw ex;
        } else {
            return handleRequestException(ex, obj, methname, meth, args);
        }
    } finally {
        setLineNumber(origLineNumber);
    }
    return ret;
}

request.isGraceRequest = true;  // marks this as a request dispatch
var callmethod = request;       // for backward compatibility

function selfRequest(obj, methname, ...args) {
    var origLineNumber = lineNumber;
    lineNumber = 0;                      // to avoid reporting line number in native code
    var returnTarget = invocationCount;  // will be incremented by invoked method
    var meth
    try {
        meth = obj.methods[methname];
        var ret = meth.apply(obj, args);
    } catch(ex) {
        if (ex.exctype === 'return') {
            if (ex.target == returnTarget) {
                return ex.returnvalue;
            }
            throw ex;
        } else {
            return handleRequestException(ex, obj, methname, meth, args);
        }
    } finally {
        setLineNumber(origLineNumber);
    }
    return ret;
}
selfRequest.isGraceRequest = true;  // marks this as a request dispatch

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
function dealWithNoMethod(name, target, args) {
    var dollarIx = name.indexOf("$");
    if (dollarIx <= 1) {
        if (target.noSuchMethodHandler) {
            return callmethod(target.noSuchMethodHandler, "apply(3)", [3],
                new GraceString(canonicalMethodName(name)), args, target);
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
            if (closeMatches.length !== 0) {
                suggestions = "  Did you mean " + readableOptions(closeMatches) + "?";
            }
            throw new GraceExceptionPacket(NoSuchMethodErrorObject,
                new GraceString("no method " + canonicalMethodName(baseName) + " on " +
                    describe(target) + "." + suggestions));
        }
    }
}

function closeMatchesForMethodNamed(mName, obj) {
    // the method with canonicalName mName is not in the methods of obj.
    // Returns a list of up to 4 JS strings that are close matches to mName.
    var matchesFound = 0;
    var matches = [];
    try {
        // wrap everything in a try-catch, so that if there is a further
        // error, we don't recurse infinitely
        var em = loadDynamicModule("errormessages");
        var gName = new GraceString(numericMethodName(mName));
        for (var candidate in obj.methods) {
            if (obj.methods.hasOwnProperty(candidate)) {
                var gCand = new GraceString(candidate);
                if (Grace_isTrue(request(em, "name(1)mightBeIntendedToBe(1)",
                        [1, 1], gCand, gName))) {
                    matches.push(canonicalMethodName(gCand._value));
                    matchesFound = matchesFound + 1;
                    if (matchesFound === 4)  { return matches; }
                }
            }
        }
    } catch (ex) { }
    return matches;
}

function readableOptions(methList, joiner) {
    // if methList is ["foo", "bar"], returns "foo or bar"
    // joiner is an optional String; if present, joiner replaces "or"
    joiner = joiner || "or";
    var len = methList.length;
    if (len === 0) return "";
    if (len === 1) return methList[0];
    var result = "";
    for (var i = 0; i < len-2; i++) result = result + methList[i] + ", ";
    return result + methList[len-2] + " " + joiner + " " + methList[len-1];
}

function listWithAnd(lst) { return readableOptions(lst, "and") }

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
    var classString = "object";
    var shortClassString = "object";
    var source = "defined in module " + obj.definitionModule;
    if (0 !== obj.definitionLine) {
        source = source + ", line " + obj.definitionLine;
    }
    var objString = classString + " (without working asString method, " + source + ")";
    const stringQuery = (obj.className === "string") ? "asDebugString" : "asString"
                       // to get a quoted string
    try {
        var origLineNumber = lineNumber;    // because the asString method will change it
        var m = findMethod(obj, stringQuery);
        objString = m.call(obj, [0])._value;
    } catch (ex) {
    } finally {
        setLineNumber(origLineNumber);
    }
    try {
        classString = obj.className;
        var dotIx = classString.lastIndexOf(".");
        shortClassString = (dotIx == -1) ? classString : classString.substring(dotIx+1);
    } catch (ex) {
    }
    if ((classString == "object") || (objString.includes(shortClassString))) {
        return objString + " (" + source + ")";
    }
    return classString + " " + objString + " (" + source + ")";
}

function tryCatch(obj, cases, finallyblock) {
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
            throwStackOverflowIfAppropriate(ex);
            throw ex;
        }
    } finally {
        if (finallyblock !== false)
            ret = callmethod(finallyblock, "apply", [0]);
    }
    return ret;
}

function isStackOverflow(ex) {
    const eStr = ex.toString();
    if (eStr.includes("call stack size exceeded")) { return true; }  // Chrome
    if (eStr.includes("stack overflow")) { return true; }
    if (eStr.includes("too much recursion")) { return true; }        // Firefox
    return false;
}
function throwStackOverflowIfAppropriate(ex) {
    if (isStackOverflow(ex)) {
        const newEx = new GraceExceptionPacket(
            new GraceException("TooMuchRecursion", ProgrammingErrorObject),
            new GraceString("Does one of your methods request execution of itself without limit?"));
        throw newEx;
    }
}
function matchCase(obj, cases, elseCase) {
    let trueCases = [];
    var trueCount = 0;
    var matchingBlock;
    for (let i = 0, len = cases.length; i<len; i++) {
        var eachCase = cases[i];
        if (eachCase.guard.call(eachCase.receiver, obj)) {
            // if the guard is true …
            trueCases.push(i);
            trueCount++;
            matchingBlock = eachCase;
        }
    }
    if (trueCount === 1) {
        return matchingBlock.real.call(matchingBlock.receiver, obj);
    }
    if (trueCount === 0) {
        if (elseCase !== false) return callmethod(elseCase, "apply", [0]);
        raiseException(MatchErrorObject,
                       "in match(_)case(_)…, no case matches",
                       obj);
    }
    const matching = trueCases.map(i => "case " + (i+1) + " on line " + cases[i].definitionLine);
    const matchingDesc = "(" + listWithAnd(matching) + ")";
    raiseException(MatchErrorObject,
                   "in match(_)case(_)…, " + trueCount + " cases match " + matchingDesc,
                   obj);
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
    this.method = arguments.callee.caller;
    this.stackFrames = [];
    this.exitStack = [];
    for (var j=0; j < stackFrames.length; j++)
        this.stackFrames.push(stackFrames[j]);
}
GraceExceptionPacket.prototype = {
    methods: {
        "isMe(1)":          object_isMe,
        "myIdentityHash":   object_identityHash,
        "basicAsString":    object_basicAsString,
        "asDebugString":    object_asDebugString,
        "debug$Iterator":   object_debugIterator,
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
            var es = [];
            for (var i=0; i<this.exitStack.length; i++)
                es.push( new GraceString(this.exitStack[i].toString()) );
            return new GraceSequence(es);
        },
        "printBacktrace": function(argcv) {
            const exceptionName = callmethod(callmethod(this, "exception", [0]), "asString", [0]);
            let errMsg = callmethod(exceptionName, "++(1)", [1], new GraceString(": "));
            errMsg = callmethod(errMsg, "++(1)", [1], callmethod(this, "message", [0]));
            Grace_errorPrint(errMsg);
            var bt = callmethod(this, "backtrace", [0]);
            var prefix = "  raised from ";
            var rf = "  requested from ";
            for (let i = this.exitStack.length - 1; i >= 0; i--) {
                Grace_errorPrint(new GraceString(
                        prefix + this.exitStack[i].toString() ));
                prefix = rf;
            }
        },
        "printBacktraceSkippingModules(1)": function(argcv, skipable) {
            var exceptionName = callmethod(callmethod(this, "exception", [0]), "asString", [0]);
            var ln = callmethod(this, "lineNumber", [0]);
            var mn = callmethod(this, "moduleName", [0]);
            if (! Grace_isTrue(callmethod(skipable, "contains(1)", [1], mn))) {
                var errMsg = exceptionName;
                if (ln) {
                    errMsg = callmethod(errMsg, "++(1)", [1], new GraceString(" on line "));
                    errMsg = callmethod(errMsg, "++(1)", [1], ln);
                }
                if (mn._value !== 'native code') {
                    errMsg = callmethod(errMsg, "++(1)", [1], new GraceString(" of "));
                    errMsg = callmethod(errMsg, "++(1)", [1], mn)
                }
                errMsg = callmethod(errMsg, "++(1)", [1], new GraceString(": "));
                errMsg = callmethod(errMsg, "++(1)", [1], callmethod(this, "message", [0]));
                Grace_errorPrint(errMsg);
            }
            var prefix = new GraceString("  in method ");
            var rf = new GraceString("  requested from ");
            for (var i = this.exitStack.length - 1; i >= 0; i--) {
                var nextFrame = this.exitStack[i];
                mn = new GraceString(nextFrame.method.definitionModule || "native code");
                if (! Grace_isTrue(callmethod(skipable, "contains(1)", [1], mn))) {
                    Grace_errorPrint(callmethod(prefix, "++(1)", [1], new GraceString(nextFrame.toString())));
                    prefix = rf;
                }
            }
            if (! Grace_isTrue(callmethod(skipable, "contains(1)", [1], mn))) {
                var msg
                if (mn._value === "native code") {
                    msg = "in native code";
                } else {
                    msg = "line " + this.lineNumber + " of module " + mn._value + ".";
                }
                Grace_errorPrint(callmethod(prefix, "++(1)", [1], new GraceString(msg)));
            }
        },
        "reraise": function exception_reraise(argcv) {
            throw this;
        }
    },
    exctype: 'graceexception',
    get moduleName() { return this.method.definitionModule || "native code"; },
    definitionLine: 0,
    classUid: "ExceptionPacket-built-in"
};

function GraceException(name, parent) {
    this.name = name;
    this.parent = parent;
}
GraceException.prototype = {
    methods: {
        "isMe(1)":          object_isMe,
        "myIdentityHash":   object_identityHash,
        "≠(1)":             object_notEquals,
        "basicAsString":    object_basicAsString,
        "asDebugString":    object_asDebugString,
        "debug$Iterator":   object_debugIterator,
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
        "matches(1)": function(argcv, other) {
            if (!other.exception)
                return GraceFalse;
            if (other.exception.name === this.name)
                return GraceTrue;   // TODO: delete these four lines!
            var exc = other.exception;
            while (exc) {
                if (exc.name === this.name)
                    return GraceTrue;
                exc = exc.parent;
            }
            return GraceFalse;
        },
        "|(1)": function(argcv, o) {
            return graceOrPattern(this, o);
        },
        "==(1)": function(argcv, o) {
            if (o === this) return GraceTrue; // not just for efficiency, but
                                              // also to avoid infinite regress
            if (o.className !== 'Exception') return GraceFalse;
            if (o.name !== this.name) return GraceFalse;
            return callmethod(this.parent, "==(1)", [1], o.parent);
        },
        "hash": function exception_hash(argcv) {
            if (! this._hash) {
                var hc = 47;
                for (let i=0; i<this.name.length; i++) {
                    hc *= 29;
                    hc += this.name.charCodeAt(i);
                    hc = hc & hc;
                }
                this._hash = new GraceNum(Math.abs(hc));
            }
            return this._hash;
        },
        "&(1)": function(argcv, o) {
            return graceAndPattern(this, o);
        },
        "prefix¬": function(argcv) {
            return graceNotPattern(this);
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
        },
        "isType": function exception_isType(argcv) {
            return GraceFalse;
        }
    },
    className: 'Exception',
    definitionModule: "built-in library",
    definitionLine: 0,
    classUid: "Exception-built-in"
};

var importedModules = {};

function do_import(modname, moduleCodeFunc) {
    if (importedModules[modname]) {
        return importedModules[modname];
    }
    if (typeof moduleCodeFunc !== "function")
        throw new GraceExceptionPacket(ImportErrorObject,
            new GraceString("could not find code for module '" + modname + "'"));
    const newModule = new GraceModule(modname);
    try {
        var f = requestModuleInitialization(newModule, modname, moduleCodeFunc);
        importedModules[modname] = f;
        return f;
    } catch (ex) {
        return handleRequestException(ex, newModule, "module initialization",
                                      {definitionModule: modname}, []);
    }
}

function requestModuleInitialization(moduleObject, modname, moduleInitializationFunction) {
    // execute moduleInitializationFunction with moduleObject as `this`
    lineNumber = 0;
    return moduleInitializationFunction.call(moduleObject);  // makes moduleObject `this`
}
requestModuleInitialization.isGraceRequest = true;

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
function annotationFun() {
    throw new GraceExceptionPacket(ProgrammingErrorObject,
         new GraceString("attempt to evaluate an annotation"));
}
if (typeof global === "undefined") {
    Object.defineProperty(window, "ellipsis", { get: ellipsisFun });
    Object.defineProperty(window, "annotation", { get: annotationFun });
} else {
    Object.defineProperty(global, "ellipsis", { get: ellipsisFun });
    Object.defineProperty(global, "annotation", { get: annotationFun });
}
function nullDefinition() {
    throw new GraceExceptionPacket(ProgrammingErrorObject,
         new GraceString("attempt to evaluate a marker defintion"));
}

var ExceptionObject = new GraceException("Exception", false);
var MinigraceErrorObject = new GraceException("MinigraceError", ExceptionObject);
var ProgrammingErrorObject = new GraceException("ProgrammingError", ExceptionObject);
var MatchErrorObject = new GraceException("MatchError", ProgrammingErrorObject);
var RequestErrorObject = new GraceException("RequestError", ProgrammingErrorObject);
var EnvironmentExceptionObject = new GraceException("EnvironmentException", ExceptionObject);
var ResourceExceptionObject = new GraceException("ResourceException", ExceptionObject);
var IoExceptionObject = new GraceException("IoException", EnvironmentExceptionObject);
var FileExceptionObject = new GraceException("FileError", IoExceptionObject);
var RuntimeErrorObject = new GraceException("RuntimeError", ExceptionObject);
var ImportErrorObject = new GraceException("ImportError", EnvironmentExceptionObject);
var TypeErrorObject = new GraceException("TypeError", ProgrammingErrorObject);
var NoSuchMethodErrorObject = new GraceException("NoSuchMethod", ProgrammingErrorObject);
var NoSuchObjectErrorObject = new GraceException("NoSuchObject", ProgrammingErrorObject);
var BoundsErrorObject = new GraceException("BoundsError", ProgrammingErrorObject);
var IteratorExhaustedObject = new GraceException("IteratorExhausted", ProgrammingErrorObject);
var UninitializedVariableObject = new GraceException("UninitializedVariable", ProgrammingErrorObject);

function raiseException(ex, msg, data) {
    data = data || new GraceString("no data");
    const newEx = new GraceExceptionPacket(ex, new GraceString(msg), data);
    var callee = arguments.callee;
    var caller = callee.caller;
    var count = 0;      // to avoid an infinite loop if everything goes wrong
    while ((! caller.isGraceRequest) && (count++ < 10)) {
        // searches for a request or selfRequest on the stack
        callee = caller;
        caller = caller.caller;
    }
    if (caller.isGraceRequest) {
        Object.defineProperty(newEx, 'moduleName', {value: callee.definitionModule});
        let methName = caller.arguments[1];
        if (methName) {     // will be undefined in module initialization code
            Object.defineProperty(newEx, 'methodName', {value: canonicalMethodName(methName)});
        }
    }
    throw newEx;
}

function raiseClassError(msg, data) {
    raiseException(TypeErrorObject, msg, data);
}

function raiseBoundsError(msg, data) {
    raiseException(BoundsErrorObject, msg, data);
}

function nullFunction() {}

function traitObjectFromInto(obj, that, aliases, exclusions) {
    if (obj.hasOwnProperty('_value')) {
        that._value = obj._value;
    }
    for (var methName in obj.methods) {
        that.methods[methName] = obj.methods[methName];
    }
    for (let aix = 0, len = aliases.length; aix < len; aix++) {
        var anAlias = aliases[aix];
        that.methods[anAlias.newName] =
              confidentialVersion(obj.methods[anAlias.oldName], anAlias.newName);
    }
    for (let eix = 0, len = exclusions.length; eix < len; eix ++) {
        var exMeth = exclusions[eix];
        delete that.methods[exMeth];
    }
    return nullFunction;
}

var var_$builtIn = new GraceModule("builtIn");

var_$builtIn.methods['true$build(3)'] =
    function true$build (argcv, inheritingObject, aliases, exclusions) {
        return traitObjectFromInto(GraceTrue, inheritingObject, aliases, exclusions);
    };
var_$builtIn.methods['false$build(3)'] =
    function false$build (argcv, inheritingObject, aliases, exclusions) {
        return traitObjectFromInto(GraceFalse, inheritingObject, aliases, exclusions);
    };

//
//  Access methods declared in Grace's collections
//

var _bindingClass;
function GraceBindingClass() {
    if (!_bindingClass) {
        const collections = loadDynamicModule("collections");
        _bindingClass = callmethod(collections, "binding", [0]);
    }
    return _bindingClass;
}

var _rangeClass;
function GraceRangeClass() {
    if (!_rangeClass) {
        const collections = loadDynamicModule("collections");
        _rangeClass = callmethod(collections, "range", [0]);
    }
    return _rangeClass;
}

function basename(n) {
    var slash = n.lastIndexOf("/");
    if (slash >= 0) n = n.substring(slash+1);
    [".grace", ".js"].forEach( ex => {
        if (n.endsWith(ex)) n = n.substring(0, n.length-ex.length); }
    )
    return n;
}

function graceModuleName(fileName) {
    var prefix = "gracecode_";
    var base = basename(fileName, ".js");
    return prefix + escapeident(base);
}

function escapeident(id) {
    // escapses characters not legal in an identifer using __«codepoint»__
    // This function must correspond to method escapeident(_) in genjs.grace
    var nm = "";
    for (var ix = 0, len = id.length; ix < len; ix++) {
        var c = id.charAt(ix);
        if (c.match(/[a-zA-Z0-9\$]/)) {
            nm = nm + c;
        } else {
            nm = nm + "__" + c.charCodeAt(0) + "__";
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
var var_done = GraceDone;

// for node: explicitly make names global
if (typeof global !== "undefined") {
    global.Alias = Alias;
    global.assertTypeOrMsg = assertTypeOrMsg;
    global.badBlockArgs = badBlockArgs;
    global.BoundsErrorObject = BoundsErrorObject;
    global.callmethod = callmethod;
    global.canonicalMethodName = canonicalMethodName;
    global.checkBounds = checkBounds;
    global.classType = classType;
    global.confidentialVersion = confidentialVersion;
    global.dealWithNoMethod = dealWithNoMethod;
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
    global.GraceModule = GraceModule;
    global.graceModuleName = graceModuleName;
    global.Grace_allocObject = Grace_allocObject;
    global.Grace_errorPrint = Grace_errorPrint;
    global.Grace_print = Grace_print;
    global.GraceBindingClass = GraceBindingClass;
    global.GraceBlock = GraceBlock;
    global.GraceBoolean = GraceBoolean;
    // NOTE: intentionally exclude gracecode_util
    // We use the JS version defined here only on the web!
    // These global definitions are for the node version of minigrace,
    // wehere we must _not_ pre-define util.grace, so that the grace
    // version of the util module will be loaded.
    // global.gracecode_util = gracecode_util;
    global.GraceDone = GraceDone;
    global.GraceEmptyString = GraceEmptyString;
    global.GraceException = GraceException;
    global.GraceExceptionPacket = GraceExceptionPacket;
    global.GraceFalse = GraceFalse;
    global.GraceHashMap = GraceHashMap;
    global.Grace_isTrue = Grace_isTrue;
    global.GraceIterator = GraceIterator;
    global.GraceList = GraceList;
    global.GraceNum = GraceNum;
    global.GraceObject = GraceObject;
    global.GracePrimitiveArray = GracePrimitiveArray;
    global.GraceSequence = GraceSequence;
    global.GraceSequenceIterator = GraceSequenceIterator;
    global.GraceString = GraceString;
    global.GraceStringIterator = GraceStringIterator;
    global.GraceTrait = GraceTrait;
    global.GraceTrue = GraceTrue;
    global.GraceType = GraceType;
    global.importedModules = importedModules;
    global.ImportErrorObject = ImportErrorObject;
    global.IteratorExhaustedObject = IteratorExhaustedObject;
    global.inBrowser = inBrowser;
    global.jsTrue = jsTrue;
    global.loadDate = loadDate;
    global.loadDynamicModule = loadDynamicModule;
    global.matchCase = matchCase;
    global.MatchErrorObject = MatchErrorObject;
    global.MinigraceErrorObject = MinigraceErrorObject;
    global.NoSuchMethodErrorObject = NoSuchMethodErrorObject;
    global.NoSuchObjectErrorObject = NoSuchObjectErrorObject;
    global.numericMethodName = numericMethodName;
    global.nullDefinition = nullDefinition;
    global.nullFunction = nullFunction;
    global.object_isMe = object_isMe;
    global.object_identityHash = object_identityHash;
    global.ProgrammingErrorObject = ProgrammingErrorObject;
    global.publicVersion = publicVersion;
    global.raiseBoundsError = raiseBoundsError;
    global.raiseException = raiseException;
    global.raiseTypeArgError = raiseTypeArgError;
    global.raiseTypeError = raiseTypeError;
    global.raiseUninitializedVariable = raiseUninitializedVariable;
    global.request = request;
    global.ResourceExceptionObject = ResourceExceptionObject;
    global.ReturnException = ReturnException;
    global.RequestErrorObject = RequestErrorObject;
    global.RuntimeErrorObject = RuntimeErrorObject;
    global.safeJsString = safeJsString;
    global.selfRequest = selfRequest;
    global.setLineNumber = setLineNumber;
    global.setModuleName = setModuleName;
    global.StackFrame = StackFrame;
    global.tryCatch = tryCatch;
    global.type_Boolean = type_Boolean;
    global.type_Done = type_Done;
    global.type_Number = type_Number;
    global.type_Object = type_Object;
    global.type_String = type_String;
    global.type_Type = type_Type;
    global.type_Unknown = type_Unknown;
    global.TypeErrorObject = TypeErrorObject;
    global.var_$builtIn = var_$builtIn;
    global.var_Done = var_Done;
    global.var_done = var_done;
    global.var_Boolean = var_Boolean;
    global.var_HashMap = var_HashMap;
    global.var_graceObject = var_graceObject;
    global.var_GraceType = var_GraceType;
    global.var_Number = var_Number;
    global.var_Object = var_Object;
    global.var_String = var_String;
    global.var_Type = var_Type;
    global.var_Unknown = var_Unknown;
}
