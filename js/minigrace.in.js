

function MiniGrace() {
    this.compileError = false;
    this.passes = 0;
    this.vis = "standard";
    this.stdout_txt = document.getElementById("stdout_txt");
    this.stdin_txt = document.getElementById("stdout_txt");
    this.stderr_txt = document.getElementById("stderr_txt");
}

MiniGrace.prototype.compile = function() {
    if (document.getElementById('mode').value == 'testall') {
        document.getElementById('mode').selectedIndex = 0;
        modeswitch();
        testall();
        return;
    }
    importedModules = {};
    callStack = [];
    stdout_txt = document.getElementById("js_txt");
    stdin_txt = document.getElementById("code_txt");
    stderr_txt = document.getElementById("stderr_txt");
    stderr_txt.value = "";
    stdout_txt.value = "";
    compileError = false;
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
            compileError = true;
        } else if (e == "SystemExit") {
            // pass
        } else if (e.exctype == 'graceexception') {
            stderr_txt.value += "Internal compiler error, around line " + e.lineNumber
                + ": " + e.exception.name + ": "
                + e.message._value + "\n";
            for (i=e.callStack.length-1; i>=0; i--) {
                stderr_txt.value += "  From call to " + e.callStack[i] + "\n";
            }
        } else {
            throw e;
        }
    }
}
    
MiniGrace.prototype.run = function() {
    importedModules = {};
    callStack = [];
    stdout_txt = document.getElementById("stdout_txt");
    stdin_txt = document.getElementById("stdout_txt");
    stderr_txt = document.getElementById("stderr_txt");
    var code = document.getElementById("js_txt").value;
    lineNumber = 1;
    eval(code);
    var mod = document.getElementById('modname').value;
    var theModule;
    eval("theModule = gracecode_" + mod + ";");
    window['gracecode_' + mod] = theModule;
    testpass = false;
    try {
        theModule.call({methods:{}, data: {}, className: document.getElementById('modname').value});
    } catch (e) {
        if (e.exctype == 'graceexception') {
            stderr_txt.value += "Error around line " + e.lineNumber
                + ": " + e.exception.name + ": "
                + e.message._value + "\n";
            for (i=e.callStack.length-1; i>=0; i--) {
                stderr_txt.value += "  From call to " + e.callStack[i] + "\n";
            }
            if (e.callStack.length > 0) {
                stderr_txt.value += "Error around line " + e.lineNumber
                    + ": " + e.exception.name + ": "
                    + e.message._value + "\n";
            }
            stderr_txt.scrollTop = stderr_txt.scrollHeight;
        } else if (e != "SystemExit") {
            stderr_txt.value += "Runtime error around line " + lineNumber + "\n";
            throw e;
        }
    }
}
    
MiniGrace.prototype.compilerun = function() {
    document.getElementById('stderr_txt').value = "";
    if (document.getElementById('mode').value == 'testall') {
        document.getElementById('mode').selectedIndex = 0;
        modeswitch();
        testall();
        return;
    }
    this.compile();
    if (!compileError &&
           document.getElementById('mode').value == 'js') {
        this.run();
    }
}

var stdout_txt = document.getElementById("stdout_txt");
var stdin_txt = document.getElementById("stdout_txt");
var stderr_txt = document.getElementById("stderr_txt");
