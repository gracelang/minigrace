function MiniGrace() {
    this.compileError = false;
    this.vis = "standard";
    this.mode = "js";
    this.modname = "main";

    this.generated_output = ""

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
    } else if (this.vis == "methodspublic") {
        callmethod(extensionsMap, "put", [2], new GraceString("DefaultVisibility"), new GraceString("confidential"));
        callmethod(extensionsMap, "put", [2], new GraceString("DefaultMethodVisibility"), new GraceString("public"));
    } else {
        callmethod(extensionsMap, "put", [2], new GraceString("DefaultVisibility"), new GraceString(this.vis));
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
                + ": " + e.exception.name + ": "
                + e.message._value + "\n");
            for (i=e.callStack.length-1; i>=0; i--) {
                this.stderr_write("  From call to " + e.callStack[i] + "\n");
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
    
MiniGrace.prototype.run = function() {
    importedModules = {};
    callStack = [];
    var code = minigrace.generated_output;
    lineNumber = 1;
    eval(code);
    var theModule;
    eval("theModule = gracecode_" + this.modname + ";");
    window['gracecode_' + this.modname] = theModule;
    testpass = false;
    try {
        theModule.call({methods:{}, data: {}, className: this.modname});
    } catch (e) {
        if (e.exctype == 'graceexception') {
            this.stderr_write("Error around line " + e.lineNumber
                + ": " + e.exception.name + ": "
                + e.message._value + "\n");
            for (i=e.callStack.length-1; i>=0; i--) {
                this.stderr_write("  From call to " + e.callStack[i] + "\n");
            }
            if (e.callStack.length > 0) {
                this.stderr_write("Error around line " + e.lineNumber
                    + ": " + e.exception.name + ": "
                    + e.message._value + "\n");
            }
        } else if (e != "SystemExit") {
            this.stderr_write("Runtime error around line " + lineNumber + "\n");
            throw e;
        }
    }
}
    
MiniGrace.prototype.compilerun = function(grace_code) {
    this.compile(grace_code);
    if (!this.compileError && this.mode == 'js') {
        this.run();
    }
}

var minigrace = new MiniGrace();
