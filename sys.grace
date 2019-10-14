type Environment = interface {
    at(key:String) -> String
    at(key:String) put(value:String) -> Boolean
    contains(key:String) -> Boolean
}

native "js" code ‹var startTime = (new Date).getTime()/1000;›

method argv -> Sequence⟦String⟧ {
    native "js" code ‹
        if (!inBrowser) {
            var list = [];
            process.argv.forEach(function(val, index, array) {
                if (index > 0)   // element 0 is /usr/local/bin/node, or similar
                    list.push(new GraceString(val));
            });
            return new GraceSequence(list);
        } else {
            return new GraceSequence([
                new GraceString("minigrace"),
                new GraceString("--target"),
                new GraceString("js")
            ]);
        };
    ›
}

method cwd {
    native "js" code ‹
        if (inBrowser) return new GraceString("");
        return new GraceString(process.cwd() + require('path').sep);
    ›
}

method elapsedTime -> Number {
    native "js" code ‹
        return new GraceNum(((new Date).getTime()/1000)-startTime);
    ›
}
method exit(code:Number) -> Done {
    native "js" code‹
        if (typeof process === "undefined") {
            throw "SystemExit";
        } else {
            process.exit(var_code._value);
        }
    ›
}
method execPath -> String {
    // the path to this executable
    native "js" code ‹
        if (typeof minigrace.execFile === "undefined") {
            return new GraceString(".");
        }
        var execFile = minigrace.execFile;
        var slashIx = execFile.lastIndexOf("/");
        var execDir = execFile.substring(0, slashIx + 1);  // includes the trailing /
        return new GraceString(execDir);
    ›
}
method requestCount {
    // the number of Grace requests that have been executed since startup
    native "js" code ‹return new GraceNum(invocationCount);›
}

def environ:Environment is public = object {
    // the Unix "Environment" as a Grace object

    method asString { "the Environment object" }
    method at(key:String) -> String {
        native "js" code ‹
            if (!inBrowser) {
                const str = safeJsString(var_key);
                if (str in process.env)
                    return new GraceString(process.env[str]);
            }
            return GraceEmptyString;
        ›
    }
    method at(key:String) put(value:String) -> Boolean {
        native "js" code ‹
            if (inBrowser) { return GraceFalse; }
            const kstr = safeJsString(var_key);
            const vstr = safeJsString(var_value);
            process.env[kstr] = vstr;
            return GraceTrue;
        ›
    }
    method contains(key:String) -> Boolean {
        native "js" code ‹
            if (inBrowser) { return GraceFalse; }
            return (safeJsString(var_key) in process.env) ? GraceTrue : GraceFalse;
        ›
    }
    method remove(key:String) -> Done {
        native "js" code ‹
            const kstr = safeJsString(var_key);
            delete process.env[kstr];
        ›
    }
}
