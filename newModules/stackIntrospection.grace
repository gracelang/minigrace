#pragma noStrict

// Some reflection methods for Grace.  
// If compiled in strict mode, callee.caller is not available more than 1 level

method stacktrace → Sequence⟦String⟧ {
    native "js" code "return stacktrace()"
}

native "js" code ‹function stacktrace1() {
    resultArray = [ ];
    var count = 5;  // to avoid infinite recursion while developing
    function st2(f) {
        var args = [ ];
        if (f && (count-- > 0)) {
            for (var i = 0; i < f.arguments.length; i++) {
                let arg = f.arguments[i];
                if (!arg) break;
                args.push(arg);
            }
            if (! f.isGraceRequest) {
                let functionText = f.toString();
                let commentStart = functionText.indexOf("// method");
                let lineEnd = functionText.indexOf("\n");
                let functionName = functionText.substring(commentStart + 9, lineEnd);
                let methodName = f.methodName
                console.log("found method " + methodName + " = " + functionName)
                resultArray.push(new GraceString(methodName + ', args = (' + args.join(', ') + ')'));
            }
            st2(f.caller);
        }
    }
    st2(arguments.callee.caller);
    return new GraceList(resultArray);
}›


method add(x, y) {
    print(stacktrace1)
    return x+y
}
 
method calc {
    return add(8, 11) + add(9, 14);
}
 

def x = add(2, 3)
def y = calc
print "calc = {calc}"

method stacktrace2 → String {
    native "js" code ‹let stackString = new Error().stack;
        let stackArray = stackString.split("\n");
        let graceStackArray = [ ];
        for (let i = 1 ; i < stackArray.length ; i++) {
            let leftParen = stackArray[i].indexOf(" (");
            let functionName = stackArray[i].substring(7,leftParen);
            if (! functionName.match(/selfRequest|request/)) {
                graceStackArray.push(new GraceString(functionName));
                // graceStackArray.push(new GraceString(eval(functionName).methodName));
                // doesn't work because functionName is not global; it's defined inside
                // the module function.
            }
            if (functionName == "do_import") break;
        }
        return new GraceList(graceStackArray)›   
}

method stacktrace1 → String {
    native "js" code ‹return stacktrace1();›
}

method stacktrace3 → String {
    native "js" code "console.trace();"
    "no result"
}
