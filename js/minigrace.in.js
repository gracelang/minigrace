 var compileError = false;
 var passes = 0;

 function compile() {
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
    var vis = document.getElementById('defaultVisibility').value;
    if (vis == "standard") {
        // Do nothing
    } else if (vis == "methodspublic") {
        callmethod(extensionsMap, "put", [2], new GraceString("DefaultVisibility"), new GraceString("confidential"));
        callmethod(extensionsMap, "put", [2], new GraceString("DefaultMethodVisibility"), new GraceString("public"));
    } else {
        callmethod(extensionsMap, "put", [2], new GraceString("DefaultVisibility"), new GraceString(vis));
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

function run() {
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
    if (goldenOutput != "") {
        var realOut = stdout_txt.value.substr(goldenOutputOffset);
        if (realOut == goldenOutput) {
            stderr_txt.value += "\nTest passed.";
            passes = passes + 1;
        } else {
            stderr_txt.value += "\nTest failed.";
        }
        stderr_txt.scrollTop = stderr_txt.scrollHeight;
        goldenOutput = "";
        setTimeout("stdout_txt.style.background = ''", 2500);
    }
    scrollstdout();
}

function compilerun() {
    document.getElementById('stderr_txt').value = "";
    if (document.getElementById('mode').value == 'testall') {
        document.getElementById('mode').selectedIndex = 0;
        modeswitch();
        testall();
        return;
    }
    compile();
    if (!compileError &&
           document.getElementById('mode').value == 'js') {
        run();
    }
}

var stdout_txt = document.getElementById("stdout_txt");
var stdin_txt = document.getElementById("stdout_txt");
var stderr_txt = document.getElementById("stderr_txt");
