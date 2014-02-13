function MiniGrace() {
    this.compileError = false;
    this.vis = "standard";
    this.mode = "js";
    this.modname = "main";
    this.verbose = true;
    this.lastSourceCode = "";
    this.lastMode = "";
    this.lastModname = "";
    this.breakLoops = false;
    this.debugMode = false;
    this.lastDebugMode = false;
    this.printStackFrames = true;
    
    this.generated_output = "";
    
    this.stdout_write = function(value) {
        
    }
    
    this.stderr_write = function(value) {
        console.log(value);
    };
    
    this.stdin_read = function() {
        return "";
    }
}

MiniGrace.prototype.compile = function(grace_code) {
    importedModules = {};
    callStack = [];
    
    // Change stdin to read from code.
    var old_stdin_read = this.stdin_read;
    this.stdin_read = function() {
        return grace_code;
    }
    
    // Change stdout to store generated output.
    var old_stdout_write = this.stdout_write;
    this.stdout_write = function(value) {
        this.generated_output += value;
    }
    this.generated_output = "";
    
    this.compileError = false;
    extensionsMap = callmethod(var_HashMap, "new", [0])
    if (this.vis == "standard") {
        // Do nothing
    } else {
        callmethod(extensionsMap, "put", [2], new GraceString("DefaultVisibility"), new GraceString(this.vis));
    }
    if (this.debugMode) {
        callmethod(extensionsMap, "put", [2], new GraceString("Debug"), new GraceString("yes"));
    }
    try {
        gracecode_compiler.call(Grace_allocModule(":user:"));
    } catch (e) {
        if (e == "ErrorExit") {
            this.compileError = true;
        } else if (e == "SystemExit") {
            // pass
        } else if (e.exctype == 'graceexception') {
            this.stderr_write("Internal compiler error, around line " + e.lineNumber
                + " of " + e.moduleName
                + ": " + e.exception.name + ": "
                + e.message._value + "\n");
            for (i=e.callStack.length-1; i>=0; i--) {
                this.stderr_write("  called from" + e.callStack[i] + "\n");
            }
        } else {
            throw e;
        }
    } finally {
        // Change the stdin and stdout back.
        this.stdin_read = old_stdin_read;
        this.stdout_write = old_stdout_write;
    }
}

MiniGrace.prototype.trapErrors = function(func) {
    this.exception = null;
    try {
        func();
    } catch (e) {
        if (e.exctype == 'graceexception') {
            this.exception = e;
            this.stderr_write("Error around line " + e.lineNumber
                + " of " + e.moduleName
                + ": " + e.exception.name + ": "
                + e.message._value + "\n");
            for (i=e.callStack.length-1; i>=0; i--) {
                this.stderr_write("  called from " + e.callStack[i] + "\n");
            }
            if (originalSourceLines[e.moduleName]) {
                var lines = originalSourceLines[e.moduleName];
                for (var i = e.lineNumber - 1; i <= e.lineNumber + 1; i++)
                    if (lines[i-1] != undefined) {
                        for (var j=0; j<4-i.toString().length; j++)
                            this.stderr_write(" ");
                        this.stderr_write("" + i + ": " + lines[i-1] + "\n");
                    }
            }
            if (e.stackFrames.length > 0 && this.printStackFrames) {
                this.stderr_write("Stack frames:\n");
                for (var i=0; i<e.stackFrames.length; i++) {
                    this.stderr_write("  " + e.stackFrames[i].methodName + "\n");
                    var stderr_write = this.stderr_write;
                    e.stackFrames[i].forEach(function(name, value) {
                        stderr_write("    " + name);
                        var debugString = "unknown";
                        try {
                            if (typeof value == "undefined") {
                                debugString = "uninitialised";
                            } else {
                                var debugString = callmethod(value,
                                    "asDebugString", [0])._value;
                            }
                        } catch(e) {
                            debugger
                            debugString = "<[Error calling asDebugString"
                                + ": " + e.message._value + "]>";
                        }
                        debugString = debugString.replace("\\", "\\\\");
                        debugString = debugString.replace("\n", "\\n");
                        if (debugString.length > 60)
                            debugString = debugString.substring(0,57) + "...";
                        stderr_write(" = " + debugString + "\n");
                    });
                }
            }
        } else if (e != "SystemExit") {
            this.stderr_write("Runtime error around line " + lineNumber + "\n");
            throw e;
        }
    } finally {
        if (Grace_prelude.methods["while()do"])
            Grace_prelude.methods["while()do"].safe = false;
    }
}

MiniGrace.prototype.run = function() {
    importedModules = {};
    callStack = [];
    stackFrames = [];
    var code = minigrace.generated_output;
    lineNumber = 1;
    moduleName = this.modname;
    eval(code);
    var theModule;
    eval("theModule = gracecode_" + this.modname + ";");
    window['gracecode_' + this.modname] = theModule;
    testpass = false;
    var modname = this.modname;
    if (Grace_prelude.methods["while()do"])
        Grace_prelude.methods["while()do"].safe = this.breakLoops;
    this.trapErrors(function() {
        if(document.getElementById("debugtoggle").checked) {
            GraceDebugger.that = {methods:{}, data: {}, className: modname};
            GraceDebugger.run(theModule, GraceDebugger.that);
        } else {
            theModule.call({methods:{}, data: {}, className: modname});
        }
    });
}

// Returns true if the program was compiled, or false if the program has not been modified.
MiniGrace.prototype.compilerun = function(grace_code) {
    var compiled = false;
    if (grace_code != this.lastSourceCode ||
            this.mode != this.lastMode ||
            this.lastModule != document.getElementById("modname").value ||
            this.visDefault != document.getElementById("defaultVisibility").value) {
        this.compile(grace_code);
        this.lastSourceCode = grace_code;
        this.lastMode = this.mode;
        this.lastModule = document.getElementById("modname").value;
        this.visDefault = document.getElementById("defaultVisibility").value;	
        compiled = true;
    }
    if (!this.compileError && this.mode == 'js') {
        this.run();
    }
    return compiled;
}

var minigrace = new MiniGrace();
