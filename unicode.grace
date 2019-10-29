
def thisModule = self

method category(char:String) -> String {
    // Return a string containing the Unicode category of the first
    // character in the 'char' (e.g., "Nd").
    native "js" code ‹
        return new GraceString(unicode.category(var_char._value));
    ›
}
method bidirectional(char:String) -> String {
    // Return a String indicating the bidirectionality of the first
    // character in 'char', as provided in the Unicode tables.
    native "js" code ‹›
}
method combining(char:String) -> Number {
    // Return a Grace Number containing the Unicode combining class of
    // the first character in the String argument (e.g. 10).
    native "js" code ‹›
}
method mirrored(char:String) -> Boolean {
    // Is the first character in 'char'
    // marked as mirrored in the Unicode database?
    native "js" code ‹›
}
method name(char:String) -> String {
    // Return the Unicode name of the first character in 'char'
    // (e.g., "LATIN SMALL LETTER A WITH DIARESIS").
    native "js" code ‹
        return new GraceString(unicode.name(var_char._value));
    ›
}
method inCategory(char, cat:String) -> Boolean {
    // Is the first character of 'char' in the Unicode category 'cat'?
    // 'cat' can be either one or two characters, testing for either
    // a broad category (like "N") or a specific one (like "Nd").
    native "js" code ‹
        let v = var_char._value;
        let s = (typeof v === 'number') ? String.fromCharCode(v) :
                (typeof v === 'string') ? v : safeJsString(var_char);
        return ((unicode.inCategory(s, var_cat._value)) ? GraceTrue : GraceFalse);
    ›
}
method isSeparator(char) -> Boolean {
    // Is 'char' a separator?
    native "js" code ‹
        let v = var_char._value;
        let s = (typeof v === 'number') ? String.fromCharCode(v) :
                (typeof v === 'string') ? v : safeJsString(var_char);
        return ( ( unicode.inCategory(s, "Zs") ||
                   unicode.inCategory(s, "Zp") ||
                   unicode.inCategory(s, "Zl") ) ? GraceTrue : GraceFalse);
    ›
}
method isControl(char) -> Boolean {
    // Is 'char' a control character?
    native "js" code ‹
        let v = var_char._value;
        let s = (typeof v === 'number') ? String.fromCharCode(v) :
                (typeof v === 'string') ? v : safeJsString(var_char);
        return ( ( unicode.inCategory(s, "Cf") ||
                   unicode.inCategory(s, "Cc") ||
                   unicode.inCategory(s, "Co") ||
                   unicode.inCategory(s, "Cs") ) ? GraceTrue : GraceFalse);
    ›
}
method isLetter(char) -> Boolean {
    // Is 'char' a letter?
    native "js" code ‹
        var s;
        let v = var_char._value
        if (typeof v === 'number') {
            s = String.fromCharCode(v);
        } else if (typeof v === 'string') {
            s = v;
        } else {
            s = safeJsString(var_char);
        }
        return ( ( unicode.inCategory(s, "Ll") ||
                   unicode.inCategory(s, "Lu") ||
                   unicode.inCategory(s, "Lo") ||
                   unicode.inCategory(s, "Lm") ) ? GraceTrue : GraceFalse);
    ›
}
method isNumber(char) -> Boolean {
    // Is 'char' a digit?
    native "js" code ‹
        let v = var_char._value;
        let s = (typeof v === 'number') ? String.fromCharCode(v) :
                (typeof v === 'string') ? v : safeJsString(var_char);
        return ( ( unicode.inCategory(s, "Nd") ||
                   unicode.inCategory(s, "No") ||
                   unicode.inCategory(s, "Nl") ) ? GraceTrue : GraceFalse);
    ›
}
method isSymbolMathematical(char) -> Boolean {
    // Is 'char' a mathematical symbol?
    native "js" code ‹
        let v = var_char._value;
        let s = (typeof v === 'number') ? String.fromCharCode(v) :
                (typeof v === 'string') ? v : safeJsString(var_char);
        return ((unicode.inCategory(s, "Sm")) ? GraceTrue : GraceFalse);
    ›
}
method create(codepoint:Number) -> String {
    // Return a string of length 1 containing the Unicode codepoint
    native "js" code ‹
        return new GraceString(String.fromCharCode(var_codepoint._value));
    ›
}
method lookup(uName:String) -> String {
    // Return the single-character-string representing the unicode codepoint 
    // named by 'uName'. Takes log N time, were N is the number of
    // named Unicode codepoints.
    // NB -- currently missing from the Javascript implementation
    native "js" code ‹›
}
method pattern(cs:Collection) -> Pattern {
    // Returns a pattern that matches any of the Unicode characters in cs.
    // Each c in cs can be a number, meaning the Unicode character with codepoint c,
    // or a one or two letter string indicating a Unicode category.
    native "js" code ‹return new GraceUnicodePattern(var_cs);›
}
method pattern(cs:Collection)not(ncs:Collection) -> Pattern {
    // Returns a pattern that matches any of the Unicode characters in cs and 
    // not in ncs.  Each c in cs and ncs can be a number, meaning the
    // Unicode character with codepoint c,  or a one or two letter string 
    // indicating a Unicode category.
    // For example, pattern ["C"] not [10, 13] mathches any Unicode Control
    // character (in category "C") other than U+0010 and U+0013 (LF and CR)
    native "js" code ‹
        return new GraceUnicodePattern(var_cs, var_ncs);
    ›
}
native "js" code ‹
    function GraceUnicodePattern(pos, neg) {
        // this.pos and this.neg are Collections of positive and negative items; neg is optional
        this.pos = pos._value;
            // APB: 2016 06 11     This is a horrible hack.
            // pos._value          pos._value is defined => pos is a GraceSequence
            // TODO: check that class is sequence.
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

    GraceUnicodePattern.prototype =
        emptyGraceObject("unicodePattern", "unicode", lineNumber+1);
    GraceUnicodePattern.prototype.methods['matches(1)'] =
        function(argcv, o) {
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
            return success ? GraceTrue : GraceFalse;
        };
›
