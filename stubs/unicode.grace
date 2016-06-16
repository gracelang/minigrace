
method category(char:String) -> String {
    // Return a string containing the Unicode category of the first
    // character in the 'char' (e.g., "Nd").
}
method bidirectional(char:String) -> String {
    // Return a String indicating the bidirectionality of the first
    // character in 'char', as provided in the Unicode tables.
}
method combining(char:String) -> Number {
    // Return a Grace Number containing the Unicode combining class of
    // the first character in the String argument (e.g. 10).
}
method mirrored(char:String) -> Boolean {
    // Is the first character in 'char'
    // marked as mirrored in the Unicode database?
}
method name(char:String) -> String {
    // Return the Unicode name of the first character in 'char'
    // (e.g., "LATIN SMALL LETTER A WITH DIARESIS").
}
method inCategory(char:String, cat:String) -> Boolean {
    // Is the first character of 'char' in the Unicode category 'cat'?
    // 'cat' can be either one or two characters, testing for either
    // a broad category (like "N") or a specific one (like "Nd").
}
method isSeparator(char:String) -> Boolean {
    // Is 'char' a separator?
}
method isControl(char:String) -> Boolean {
    // Is 'char' a control character?
}
method isLetter(char:String) -> Boolean {
    // Is 'char' a letter?
}
method isNumber(char:String) -> Boolean {
    // Is 'char' a digit?
}
method isSymbolMathematical(char:String) -> Boolean {
    // Is 'char' a mathematical symbol?
}
method create(codepoint:Number) -> String {
    // Return a string of length 1 containing the Unicode codepoint
}
method lookup(uName:String) -> String {
    // Return the single-character-string representing the unicode codepoint 
    // named by 'uName'. Takes log N time, were N is the number of
    // named Unicode codepoints.
    // NB -- currently missing from the Javascript implementation 
}
method pattern(cs:Iterable) -> Pattern {
    // Returns a pattern that matches any of the Unicode characters in cs.
    // Each c in cs can be a number, meaning the Unicode character with codepoint c,
    // or a one or two letter string indicating a Unicode category.
}
method pattern(cs:Iterable)not(ncs:Iterable) -> Pattern {
    // Returns a pattern that matches any of the Unicode characters in cs and 
    // not in ncs.  Each c in cs and ncs can be a number, meaning the
    // Unicode character with codepoint c,  or a one or two letter string 
    // indicating a Unicode category.
    // For example, pattern ["C"] not [10, 13] mathches any Unicode Control
    // character (in category "C") other than U+0010 and U+0013 (LF and CR)
}