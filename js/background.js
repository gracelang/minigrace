// This file provides structure for running the compiler in a
// background thread with Web Workers. Use it with:
//   var worker = new Worker("background.js");
//   worker.onmessage = function(ev) {if (ev.data.success) ...};
//   worker.postMessage({action: "compile", source: ... });
// If you are using dialects you will want to use the "import"
// and "importGCT" actions to load the code back into the compiler
// thread.

// Some points in minigrace.js use "window" explicitly
var window = self;
var document = {};
importScripts("minigrace.js");

var stderr_output = "";
minigrace.stderr_write = function(value) {
    stderr_output += value;
}
onmessage = function(ev) {
    var cmd = ev.data;
    stderr_output = "";
    if (cmd.action == "compile") {
        minigrace.modname = cmd.modname;
        minigrace.mode = cmd.mode;
        minigrace.compile(cmd.source);
        if (!minigrace.compileError) {
            postMessage({success: true, output: minigrace.generated_output,
                stderr: stderr_output, gct: gctCache[cmd.modname]});
        } else {
            postMessage({success: false, stderr: stderr_output});
        }
    } else if (cmd.action == "importFile") {
        importScripts(cmd.url);
    } else if (cmd.action == "import") {
        var theModule;
        eval(cmd.code);
        eval("theModule = gracecode_" + cmd.modname.replace('/', '$') + ";");
        self['gracecode_' + cmd.modname.replace('/', '$')] = theModule;
    } else if (cmd.action == "importGCT") {
        gctCache[cmd.modname] = cmd.gct;
    }
}
