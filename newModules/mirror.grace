#pragma noStrict

// Some reflection methods for Grace.  
// If compiled in strict mode, callee.caller is not available more than 1 level

method stacktrace → Sequence⟦String⟧ {
    native "js" code "return stacktrace()"
}

native "js" code ‹function stacktrace() {
    resultArray = [ ];
    function st2(f) {
        var args = [ ];
        if (f) {
            for (var i = 0; i < f.arguments.length; i++) {
                let arg = f.arguments[i];
                if (!arg) break;
                args.push(arg);
            }
            let functionText = f.toString();
            let commentStart = functionText.indexOf("// method");
            let lineEnd = functionText.indexOf("\n");
            let functionName = functionText.substring(commentStart + 9, lineEnd);
            debugger;
            resultArray.push(new GraceString(functionName + ', args = (' + args.join(', ') + ')'));
            st2(f.caller);
        }
    }
    st2(arguments.callee.caller);
    return new GraceList(resultArray)
}›


method add(x, y) {
    print(stacktrace2)
    return x+y
}
 
method calc {
    return add(8, 11) + add(9, 14);
}
 

def x = add(2, 3)
def y = calc

method stacktrace2 → String {
    native "js" code ‹let stackString = new Error().stack;
        let stackArray = stackString.split("\n");
        let graceStackArray = [ ];
        for (let i = 1 ; i < stackArray.length ; i++) {
            let leftParen = stackArray[i].indexOf(" (");
            let functionName = stackArray[i].substring(7,leftParen);
            if (! functionName.match(/selfRequest|request/)) 
                graceStackArray.push(new GraceString(stackArray[i].substring(7,leftParen)));
            if (functionName == "do_import") break;
        }
        return new GraceList(graceStackArray)›   
}

method stacktrace3 → String {
    native "js" code "console.trace();"
    "no result"
}