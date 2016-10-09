// This module defines a class new that implements a mapping from strings to objects
// Its interface is strange, but is designed to mimic that of mgcollecitons.map.new
// For a general-purpose mapping obejct, use dictonary from standardGrace.
//
// The implementation for C is based on that from mgcollections; that for JS uses
// native code, since hashing is built-in to JavaScript objects.
// External iterators are not implemented.  Instead, the internal iterators
// keysDo and valuesDo are provided.

def unused = object {
    inherit Singleton.named "unused"
    def key is public = self
}

class new {
    var elems := 0
    var inner := primitiveArray.new(4)
    for (0..(inner.size-1)) do {i->
        inner.at(i)put(unused)
    }
    native "js" code ‹this.data.inner = { };›  
        // override the primitiveArray with an empty object

    method size {
        // The number of bindings that I contain.
        native "js" code ‹var s = Object.keys(this.data.inner).length;
              return new GraceNum(s);›
        elems
    }

    method put(k, v) {
        // binds the value v and the key k, which must be a String.
        // Returns self, for chaining.
        native "js" code ‹this.data.inner[var_k._value] = var_v;
                        return this;›
        var t := findPosition(k)
        if (unused == inner.at(t)) then {
            elems := elems + 1
        }
        inner.at(t)put(k::v)
        if (elems > (inner.size / 2)) then {
            expand
        }
        self
    }
    method get(k) {
        // answers the value associated with the key k.  If there is none
        // raises the NoSuchObject exception.
        native "js" code ‹if (this.data.inner.hasOwnProperty(var_k._value))
                return this.data.inner[var_k._value];
            var nso = callmethod(var___95__prelude, "NoSuchObject", [0]);
            var exceptionMsg = new GraceString("no value for key " + var_k._value);
            throw new GraceExceptionPacket(nso, exceptionMsg);›
        var t := findPosition(k)
        var c := inner.at(t)
        if (unused == c) then {
            NoSuchObject.raise "no value for key {k}"
        }
        return c.value
    }
    method get(k) ifAbsent (absentBlock) {
        // answers the value associated with the key k.  If there is none
        // evaluates absentBlock and returns its result.
        native "js" code ‹if (this.data.inner.hasOwnProperty(var_k._value))
                return this.data.inner[var_k._value];
            return callmethod(var_absentBlock, "apply", [0]);›
        var t := findPosition(k)
        var c := inner.at(t)
        if (unused == c)
            then { return absentBlock.apply }
            else { return c.value }
    }
    method contains(k) {
        // true if I contain the key k
        native "js" code ‹if (this.data.inner.hasOwnProperty(var_k._value))
                return GraceTrue;
            else return GraceFalse;›
        var t := findPosition(k)
        if (inner.at(t).key == k) then {
            return true
        }
        return false
    }
    method findPosition(x) is confidential {
        def h = x.hash
        def s = inner.size
        var t := h % s
        var jump := 5
        while { unused ≠ inner.at(t) } do {
            if (inner.at(t).key == x) then {
                return t
            }
            if (jump != 0) then {
                t := (t * 3 + 1) % s
                jump := jump - 1
            } else {
                t := (t + 1) % s
            }
        }
        return t
    }
    method asString {
        native "js" code ‹var s = "";
            var inner = this.data.inner;
            var keys = Object.keys(inner);
            for (var ix = 0; ix < keys.length; ix++) {
                var key = keys[ix];
                if (s === "") {
                    s = key + "::";
                } else {
                    s = s + ", " + key + "::";
                }
                s = s + callmethod(inner[key], "asString", [0])._value;
            }
            s = "map.new[" + s + "]";
            return new GraceString(s);›
        var s := ""
        for (0..(inner.size-1)) do {i->
            def a = inner.at(i)
            if (a != unused) then {
                if (s == "") then {
                    s := "{a.key}::{a.value}"
                } else {
                    s := s ++ ", {a.key}::{a.value}"
                }
            }
        }
        "map.new[" ++ s ++ "]"
    }
    method asDebugString {
        asString
    }
    method keysAndValuesDo(action) {
        // internal iterator over my keys and values.
        native "js" code ‹var s = "";
            var inner = this.data.inner;
            var keys = Object.keys(inner);
            for (var ix = 0; ix < keys.length; ix++) {
                var key = keys[ix];
                callmethod(var_action, "apply(2)", [2], new GraceString(key), inner[key]);
            }
            return GraceDone;›
        var count := 1
        var idx := 0
        while {count <= size} do {
            while { unused == inner.at(idx) } do {
                idx := idx + 1
            }
            def a = inner.at(idx)
            action.apply(a.key, a.value)
            count := count + 1
            idx := idx + 1
        }
    }
    method do(action) {
        // internal iterator over my values.
        native "js" code ‹
            var inner = this.data.inner;
            var keys = Object.keys(inner);
            for (var ix = 0; ix < keys.length; ix++) {
                var key = keys[ix];
                callmethod(var_action, "apply(1)", [1], inner[key]);
            }
            return GraceDone;›
        var count := 1
        var idx := 0
        while {count <= size} do {
            while { unused == inner.at(idx) } do {
                idx := idx + 1
            }
            action.apply (inner.at(idx).value)
            count := count + 1
            idx := idx + 1
        }
    }
    
    method keysDo(action) {
        native "js" code ‹
            var inner = this.data.inner;
            var keys = Object.keys(inner);
            for (var ix = 0; ix < keys.length; ix++) {
                var key = keys[ix];
                callmethod(var_action, "apply(1)", [1], new GraceString(key));
            }
            return GraceDone;›
        var count := 1
        var idx := 0
        while {count <= size} do {
            while { unused == inner.at(idx) } do {
                idx := idx + 1
            }
            action.apply (inner.at(idx).key)
            count := count + 1
            idx := idx + 1
        }
    }
    
    method valuesDo(action) { do(action) }

    method expand is confidential {
        def c = inner.size
        def n = c * 2
        def oldInner = inner
        inner := primitiveArray.new(n)
        for (0..(inner.size-1)) do {i->
            inner.at(i)put(unused)
        }
        elems := 0
        for (0..(oldInner.size-1)) do {i->
            def a = oldInner.at(i)
            if (a != unused) then {
                put(a.key, a.value)
            }
        }
    }
    method bindings {
        // the contents of this stringMap as a list of bindings
        def result = emptyList
        native "js" code ‹
            var inner = this.data.inner;
            var keys = Object.keys(inner);
            for (var ix = 0; ix < keys.length; ix++) {
                var key = keys[ix];
                var keyStr = new GraceString(key);
                var binding = callmethod(GraceBindingClass(), "key(1)value(1)",
                                                    [1, 1], keyStr, inner[key]);
                callmethod(var_result, "add(1)", [1], binding);
            }
            return var_result;›
        var count := 1
        var idx := 0
        while {count <= size} do {
            while { unused == inner.at(idx) } do {
                idx := idx + 1
            }
            result.add (inner.at(idx))
            count := count + 1
            idx := idx + 1
        }
        result
    }
}
