// A regular exprsssion module for Grace.  Implemented with JS regular expressions

method fromString(regExString) {
    // Returns a new regular expression based on regEx with no modifiers
    fromString(regExString) modifiers ""
}

class fromString(regExString:String) modifiers(modifiers:String) {
    native "js" code ‹this._value = new RegExp(var_regExString._value, var_modifiers._value);›
    def asString is public = "regular expression {regExString}"
    
    method matches(text:String) {
        // answers true if I match text, and false if I do not
        native "js" code 
            ‹this._value.lastIndex = 0;
            return (this._value.test(var_text._value) ? GraceTrue : GraceFalse)›
    }
    method firstMatchingPosition(text:String) ifNone(noMatchBlock) {
        // answers the index of the first substring of text that matches me
        def matchPosn = native "js" code 
            ‹this._value.lastIndex = 0;
            result = new GraceNum(var_text._value.search(this._value) + 1)›
        if (matchPosn == 0) then {
            noMatchBlock.apply
        } else {
            matchPosn
        }
    }
    method firstMatchingString(text:String) ifNone(noMatchBlock) {
        // answers the first substring of text that matches me
        native "js" code 
            ‹this._value.lastIndex = 0;
            const matchStr = this._value.exec(var_text._value);
            if (matchStr) { return new GraceString(matchStr[0]); }›
        noMatchBlock.apply
    }
    method allMatches(text:String) {
        // answers a collection containing all the substrings of text that match me
        // Each element is a matchResult(_)at(_) object that describes one match
        
        // apb: my first implementation used the String.matchAll method, but in Chrome
        // this appeared not to work.
        def matchList = list.empty
        native "js" code
            ‹const patt = this._value;
            patt.lastIndex = 0;     // start at the beginning
            var res;
            while(res = patt.exec(var_text._value)) {
                callmethod(var_matchList, "add(1)", [1],
                    selfRequest(this, "matchResult(1)at(1)", [1, 1], 
                    new GraceList(res.map(elt => 
                        elt ? new GraceString(elt) : new GraceString(""))),
                    new GraceNum(res.index + 1)));
                if (! patt.global) break;   // not global regex, so we are done.
                patt.lastIndex = res.index + 1 // otherwise, overlapping matches are missed
            }›            
        matchList
    }
    
    class matchResult(strings) at (index) is confidential {
        def stringSeq = strings
        def position is public = index // the index at which the matching text starts
        method group(i) { 
            // returns the i_th matching group, or raises BoundsError if there is none
            stringSeq.at(i + 1)
        }
        method whole {
            // returns the whole of the matching text
            stringSeq.first
        }
    }
}

type MatchResult = interface {
    position // the index at which the matching text starts
    group(i) // i is an integer; returns the text matching the i_th parenthesized matching group, 
            // or raises BoundsError if there is no such group.
    whole   // returns the whole of the matching text
}

