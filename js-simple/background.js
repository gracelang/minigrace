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
        var escaped = graceModuleName(cmd.modname);
        eval("theModule = gracecode_" + escaped + ";");
        self[escaped] = theModule;
    } else if (cmd.action == "importGCT") {
        gctCache[cmd.modname] = cmd.gct;
    }
}

function graceModuleName(fileName) {
    var prefix = "gracecode_";
    var base = fileName;    // remove leading/components/ and trailing .js
    return prefix + escapeident(base);
}

function escapeident(id) {
    // must correspond to escapeident(_) in genjs.grace
    var nm = "";
    for (var ix = 0; ix < id.length; ix++) {
        var o = id.charCodeAt(ix);
        if (((o >= 97) && (o <= 122)) || ((o >= 65) && (o <= 90)) ||
            ((o >= 48) && (o <= 57))) {
            nm = nm + id.charAt(ix);
        } else {
            nm = nm + "__" + o + "__";
        }
    }
    return nm;
}
