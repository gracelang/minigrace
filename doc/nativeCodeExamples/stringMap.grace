// This module defines a class that implements a mapping from strings to objects
// For a general-purpose mapping obejct, use dictonary from collections or mapDict.
//
// The implementation for JS uses native code, since hashing is built-in to JavaScript
// objects. External iterators are not implemented.  Instead, the internal iterators
// keysDo and valuesDo are provided.

once class dictionary⟦K,T⟧ {

    method asString { "the stringMap factory" }
    method empty { dictionary⟦K,T⟧ [] }
    method with(aBinding) { dictionary⟦K,T⟧ [aBinding] }
    method withAll(initial: Collection⟦Binding⟦K,T⟧⟧) { dictionary⟦K,T⟧ (initial) }
    method << (source:Collection⟦Binding⟦K,T⟧⟧) { self.withAll(source) }
}


class dictionary⟦K, T⟧ (initialBindings: Collection⟦Binding⟦K,T⟧⟧) {
    if (String ≠ K) then {
        TypeError.raise "Keys to a stringMap must be Strings, not {K}"
    }
    native "js" code ‹this.data.inner = { };›
    initialBindings.do { b:Binding ->
        self.at (b.key) put (b.value)
    }

    method size {
        // The number of bindings that I contain.
        native "js" code ‹var s = Object.keys(this.data.inner).length;
              return new GraceNum(s);›
    }

    method at(k) put(v) {
        // binds the value v and the key k, which must be a String.
        // Returns self, for chaining.
        native "js" code ‹this.data.inner[var_k._value] = var_v;
                        return this;›
        self
    }
    method at(k) {
        // answers the value associated with the key k.  If there is none
        // raises the NoSuchObject exception.
        native "js" code ‹if (this.data.inner.hasOwnProperty(var_k._value))
                return this.data.inner[var_k._value];
            var nso = callmethod(var___95__prelude, "NoSuchObject", [0]);
            var exceptionMsg = new GraceString("no value for key " + var_k._value);
            throw new GraceExceptionPacket(nso, exceptionMsg);›
    }
    method at(k) ifAbsent (absentBlock) {
        // answers the value associated with the key k.  If there is none
        // evaluates absentBlock and returns its result.
        native "js" code ‹if (this.data.inner.hasOwnProperty(var_k._value))
                return this.data.inner[var_k._value];
            return callmethod(var_absentBlock, "apply", [0]);›
    }
    method containsKey(k) {
        // true if I contain the key k
        native "js" code ‹if (this.data.inner.hasOwnProperty(var_k._value))
                return GraceTrue;
            else return GraceFalse;›
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
    }
    method removeKey(k) ifAbsent (action) {
        native "js" code ‹
            var hc = var_k._value;
            let b = this.data.inner[hc];
            if (b) {
                delete this.data.inner[hc];
                return GraceDone;
            };›
        action.apply
    }
    method removeKey(k) {
        removeKey(k) ifAbsent {
            NoSuchObject.raise "dictionary does not contain entry with key {k}"
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
    }
    
    method valuesDo(action) { do(action) }

    method bindings {
        // the contents of this stringMap as a list of bindings
        def result = list.empty
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
    }
}
