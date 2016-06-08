var ace;
var goldenOutput = "";
var goldenOutputOffset = 0;

// Setup stderr.
minigrace.stderr_write = function(value) {
    // this function is used only in the oldWeb interface. 
    var stderr = document.getElementById("stderr_txt");
    stderr.value += value + "\n";
    stderr.scrollTop = stderr.scrollHeight;
};

// Setup stdin.
minigrace.stdin_read = function() {
    return prompt("Input: ");
}

// Setup stdout.
minigrace.stdout_write = function(value) {
    var stdout = document.getElementById("stdout_txt");
    stdout.value += value;
    scrollstdout();
};

function go() {
    if (ace)
        editor.getSession().clearAnnotations();
    if (document.getElementById('mode').value == 'testall') {
        document.getElementById('mode').selectedIndex = 0;
        modeswitch();
        testall();
        return;
    }
    var old_stderr = document.getElementById('stderr_txt').value;
    document.getElementById('stderr_txt').value = "";
    minigrace.modname = document.getElementById('modname').value;
    var compiled = minigrace.compilerun(getCode());
    if (!compiled && !document.getElementById('debugtoggle').checked)
        document.getElementById('stderr_txt').value = old_stderr;
    document.getElementById('js_txt').value = minigrace.generated_output;
    if (minigrace.compileError && ace) {
        var lines = document.getElementById('stderr_txt').value.split("\n");
        var bits;
        for (var i=0; i<lines.length; i++) {
            if (lines[i].substring(0, 10) != 'minigrace:') {
                bits = lines[i].split(':');
                break;
            }
        }
        editor.moveCursorTo(bits[1] - 1, bits[2] - 1);
        editor.getSelection().clearSelection();
        bits.shift();
        editor.getSession().setAnnotations([{
            row: bits.shift() - 1,
            column: bits.shift() - 1,
            text: bits.join(":"),
            type: "error"
        }]);
    }
    scrollstdout();
}

function loadtest(testname) {
    document.getElementById('stderr_txt').value = "";
    document.getElementById('defaultVisibility').selectedIndex = 1;
    selectvisibility();
    var req = new XMLHttpRequest();
    req.open("GET", "tests/" + testname + "_test.grace", false);
    req.send(null);
    if (req.status == 200) {
        if (ace)
            editor.setValue(req.responseText, -1);
        document.getElementById("code_txt").value = req.responseText;
        document.getElementById("modname").value = testname;
        minigrace.modname = testname;
    }
    if (testname.indexOf("_fail") == -1) {
        req.open("GET", "tests/" + testname + ".out", false);
        req.send(null);
        if (req.status == 200) {
            document.getElementById("stdout_txt").value = "Golden output:\n" + req.responseText + "=================================\n";
            goldenOutput = req.responseText;
            goldenOutputOffset = document.getElementById("stdout_txt").value.length;
        }
    } else {
        document.getElementById("stdout_txt").value = "Expected result: syntax error.\n=================================\n";
    }
}

function modeswitch() {
    var mode = document.getElementById('mode').value;
    if (mode != 'js' && mode != 'testall') {
        outputTabManager(document.getElementById("tab_stdout"), 'js_tab');
    }
    if (mode != 'testall') {
        minigrace.mode = mode;
    }
}

function testall() {
    var tc = document.getElementById('testcases');
    var passes = 0;
    var tests = 0;
    var failures = [];
    var idx = 0;
    var overallStartTime = (new Date).getTime();
    var fetchTime = 0;
    var compileTime = 0;
    var runTime = 0;
    function testnext() {
        function testthis() {
            tests++;
            tc.selectedIndex = idx;
            var st = (new Date).getTime();
            loadtest(tc.children[idx].value);
            var et = (new Date).getTime();
            fetchTime += (et - st);
            var op = passes;
            document.getElementById('stderr_txt').value = "";
            st = (new Date).getTime();
            minigrace.compile(getCode());
            et = (new Date).getTime();
            compileTime += (et - st);
            document.getElementById('js_txt').value = minigrace.generated_output;
            st = (new Date).getTime();
            if (!minigrace.compileError) {
                minigrace.run();
                if (goldenOutput != "") {
                    var realOut = "";
                    if (document.getElementById('debugtoggle').checked)
                        realOut = stdout_txt.value;
                    else
                        realOut = stdout_txt.value.substr(goldenOutputOffset);

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
            }
            et = (new Date).getTime();
            runTime += (et - st);
            if (tc.children[idx].value.indexOf("_fail") != -1) {
                if (minigrace.compileError || (stderr_txt.value.indexOf("error") != -1)) {
                    passes++;
                } else {
                    failures.push(tc.children[idx].value);
                }
            } else {
                if (op == passes)
                    failures.push(tc.children[idx].value);
            }
            idx++;
            stderr_txt.value = ("Ran " + idx + "/"
                                + tc.children.length + " tests.\n\n"
                                + stderr_txt.value);
            testnext();
        }
        if (idx < tc.children.length) {
            setTimeout(testthis, 0);
        } else {
            var overallEndTime = (new Date).getTime();
            stderr_txt.value = "Ran all tests. Passed: "
                + passes + "/" + tests;
            if (failures.length > 0) {
                stderr_txt.value += "\nFailures: ";
                for (var i=0; i<failures.length; i++)
                    stderr_txt.value += "\n  " + failures[i];
            }
            stderr_txt.value += "\nTook "
                + (overallEndTime - overallStartTime)/1000
                + "s elapsed time (" + fetchTime/1000 + "s fetching, "
                + compileTime/1000 + "s compiling, "
                + runTime/1000 + "s running).";
        }
    }
    testnext();
}

function clearstdout() {
    document.getElementById("stdout_txt").value = "";
}

function scrollstdout() {
    if(document.getElementById("autoscroll").checked) {
        var stdout = document.getElementById("stdout_txt");
        stdout.scrollTop = stdout.scrollHeight;
    }
}

function selectvisibility() {
    minigrace.vis = document.getElementById("defaultVisibility").value;
}
window.addEventListener("load", function() {
    document.getElementById('stdout_txt').value = "";
    document.getElementById('stderr_txt').value = "";
    if (window.location.hash) {
        if (window.location.hash.substring(0, 8) == "#sample=") {
            var s = window.location.hash.substring(8);
            loadsample(s);
        }
    }
});


/***************************************/
/****     Start of Tabs Section     ****/
/***************************************/
// manages the tabs on the right hand side of the screen (Program output/Generated code/Canvas)
function outputTabManager(that, target) {
    if (!that.className.match("selected")) {
        var divs = document.getElementById("output").getElementsByTagName("div");
        for (var i=0;i<divs.length;i++) {
            if (divs[i].className) {
                if (divs[i].className.match("selected")) {
                    divs[i].className = that.className;
                }
            } else {
                divs[i].style.display = "none";
            }
        }
        that.className += " selected";
        document.getElementById(target).style.display = "inline";
        if (target == "stdout_tab")
            document.getElementById("stdout_options").style.display = "inline";
    }
}

var tabs = [];
// if the active tab is closed, select a new one
tabs.lostSelected = function (index) {
    if (this.length > 0 && index >= 0) {
        if (index < this.length) {
            // select tab to the right of closed tab
            this[index].select();
        } else {
            // select tab furthest to the right
            this[this.length-1].select();
        }

    } else { // create new tab and select it
        addCodeTab();
        this[0].select();
    }
}

// deselect all tabs
tabs.deselectAll = function()
{
    for (var i = 0; i < this.length; i++) {
        this[i].deselect();
    }
}

// save code from all tabs into codeArray, then return codeArray
tabs.getAllCode = function()
{
    var codeArray = [];
    for (var i = 0; i < this.length; i++) {
        if (this[i].isSelected) {
            codeArray.push(getCode());
        } else {
            codeArray.push(this[i].code);
        }
    }
    return codeArray;
}
var tabCount = 0;

// create a new tab
function addCodeTab(name, code, file) {
    var tab = {
        name : "new" + tabCount,
        code : "",
        tabObject : null,
        isSelected : false,
        number : tabCount,
        debug : {
            that : null,
            points : [],
            enabled : [],
            lineCount : 0,
        },
    };

    if (typeof name == "string")
        tab.name = name;
    if (code)
        tab.code = code;

    tab.tabObject = {
        body : document.createElement("div"),
        close : document.createElement("div"),
        span : document.createElement("span"),
        input : document.createElement("input")
    }
    tab.tabObject.body.id = "tab_" + tab.number;
    tab.tabObject.body.className = "tab";
    tab.tabObject.close.innerHTML = "x";
    tab.tabObject.close.className = "close";
    tab.tabObject.span.innerHTML = tab.name;
    tab.tabObject.span.style.display = "inline";
    tab.tabObject.input.value = tab.name;
    tab.tabObject.input.style.display = "none";
    tab.tabObject.body.appendChild(tab.tabObject.close);
    tab.tabObject.body.appendChild(tab.tabObject.span);
    tab.tabObject.body.appendChild(tab.tabObject.input);

    tab.changeName = function(name) {
        if (typeof name == "string") {
            this.name = name;
            this.tabObject.span.innerHTML = name;
            this.tabObject.input.value = name;
            if(tab.isSelected) {
                document.getElementById("modname").value = tab.name;
            }
        }
    }

    // stores given string as user grace code for this tab
    tab.setCode = function(code) {
        tab.code = code;
        if (tab.isSelected) {
            document.getElementById("code_txt").value = tab.code;
            if(typeof ace != "undefined")
                editor.setValue(tab.code, -1);
        }
    }

    // selects this tab (display code and mod style)
    tab.select = function() {
        tabs.deselectAll();
        tab.tabObject.body.className = "tab selected";
        document.getElementById("modname").value = tab.name;
        document.getElementById("modname").selected = tab;
        tab.isSelected = true;
        tab.setCode(tab.code);

        // check debugger exists and works like we think it does
        if (GraceDebugger
        && GraceDebugger.currentRunCount > -1
        && GraceDebugger.breakpoints
        && GraceDebugger.breakpoints.points
        && GraceDebugger.breakpoints.enabled) {
        // set breakpoints, object view, linecount
        // refresh breakpoints, variable list
            GraceDebugger.VariableListBase(tab.debug.that);
            GraceDebugger.breakpoints.points = tab.debug.points;
            GraceDebugger.breakpoints.enable = tab.debug.enable;
            GraceDebugger.lastRunCount = tab.debug.lineCount;
            if (document.getElementById('debugtoggle').checked)
                GraceDebugger.breakpoints.refresh();
        }
    }

    // deselects this tab (save code and mod style)
    tab.deselect = function() {
        if (tab.isSelected) {
            tab.tabObject.body.className = "tab";
            tab.isSelected = false;
            tab.code = getCode();

            // check debugger exists and works like we think it does
            if (GraceDebugger
            && GraceDebugger.currentRunCount > -1
            && GraceDebugger.breakpoints
            && GraceDebugger.breakpoints.points
            && GraceDebugger.breakpoints.enabled) {
                // save breakpoins, that, and linecount,
                if (document.getElementById("debugger_vars_display").that)
                    tab.debug.that = document.getElementById("debugger_vars_display").that;
                tab.debug.points = GraceDebugger.breakpoints.points;
                tab.debug.enable = GraceDebugger.breakpoints.enable;
                tab.debug.lineCount = GraceDebugger.lastRunCount;
            }
        }
    }

    // close this tab (and associated file if any)
    tab.close = function(e) {
        e.stopPropagation();
        document.getElementById("tabs").removeChild(tab.tabObject.body);
        var index = tabs.indexOf(tab);
        if (index != -1) {
            tabs.splice(index, 1);
        }
        if (tab.isSelected) {
            tabs.lostSelected(index);
        }
        if (tab.file) {
            tab.file.close();
        }
    }

    // start renaming process by providing input field
    tab.nameEditStart = function() {
        tab.tabObject.span.style.display = "none";
        tab.tabObject.input.style.display = "inline";
    }

    // finish renaming process by returning tab to normal with new name
    tab.nameEditFinish = function(event) {
        if(event.keyCode && event.keyCode == 13) {
            tab.changeName(tab.tabObject.input.value);
            if(tab.isSelected) {
                document.getElementById("modname").value = tab.name;
            }
            tab.tabObject.span.style.display = "inline";
            tab.tabObject.input.style.display = "none";
        }
    }
    tab.tabObject.body.addEventListener("click", tab.select, false);
    tab.tabObject.close.addEventListener("click", tab.close, false);
    tab.tabObject.span.addEventListener("dblclick", tab.nameEditStart, false);
    tab.tabObject.input.addEventListener("keydown", tab.nameEditFinish, false);


    document.getElementById("tabs").appendChild(tab.tabObject.body);
    document.getElementById("tabs").appendChild(document.getElementById("plus"));

    tabs.push(tab);
    tabCount++;
    tab.select();

    if (file) {
        tab.file = file;
    }

    return tab;
}
/***************************************/
/****      End of Tabs Section      ****/
/***************************************/

// runs when page is finished loading to set everything up
function startup() {
    document.getElementById("acetoggle").checked = true;
    document.getElementById("debugtoggle").checked = false;

    document.getElementById('code_area').style.paddingBottom = "0px";

    if (ace) {
        document.getElementById('code_txt_real').style.display = 'block';
        document.getElementById('code_txt').style.display = 'none';
        editor = ace.edit("code_txt_real");
        editor.$blockScrolling = Infinity;
        var GraceMode = require("ace/mode/grace").Mode;
        editor.getSession().setMode(new GraceMode());
        editor.setBehavioursEnabled(false);
        editor.setHighlightActiveLine(true);
        editor.setShowFoldWidgets(false);
        editor.setShowPrintMargin(false);
        editor.getSession().setUseSoftTabs(true);
        editor.getSession().setTabSize(4);
        editor.commands.bindKeys({"ctrl-l":null, "ctrl-shift-r":null, "ctrl-r":null, "ctrl-t":null})

        document.getElementById('code_txt_real').style.height = document.getElementById('stdout_txt').clientHeight + 'px';
        document.getElementById('code_txt_real').style.width = (document.getElementById('stdout_txt').clientWidth - 30) + 'px';

        // resize ace on window resize
        window.onresize = function(event) {
            document.getElementById('code_txt_real').style.height = document.getElementById('stdout_txt').clientHeight + 'px';
            document.getElementById('code_txt_real').style.width = (document.getElementById('stdout_txt').clientWidth - 30) + 'px';
        }

        // Get code from ace editor.
        getCode = function() {
            if(document.getElementById("acetoggle").checked) {
                return editor.getValue();
            } else {
                return document.getElementById("code_txt").value;
            }
        }

        // debugger stuff
        editor.on("guttermousedown", function(e){
            if (document.getElementById("debugtoggle").checked) {
                var target = e.domEvent.target;
                if (target.className.indexOf("ace_gutter-cell") == -1)
                    return;
                if (!editor.isFocused())
                    return;
                if (e.clientX > 25 + target.getBoundingClientRect().left)
                    return;

                var row = e.getDocumentPosition().row;
                if (e.editor.session.$breakpoints[row]) {
                    //e.editor.session.clearBreakpoint(row);
                    GraceDebugger.breakpoints.remove(row+1);
                } else {
                    //e.editor.session.setBreakpoint(row);
                    document.getElementById("add_break").value = row + 1;
                    document.getElementById("bpadd").click();
                }
                e.stop();
            }
        });
    } else {
        document.getElementById("code_txt_real").style.display = "none";
        document.getElementById("acetoggle").parentNode.style.display = "none";
        getCode = function() {
            return document.getElementById("code_txt").value;
        }
    }
    GraceDebugger.cache.init();

    addCodeTab("main","print \"Hello, world!\"");
    document.getElementById("code_options").style.height = (document.getElementById("tab_0").clientHeight + 5) + "px";
    document.getElementById("stdout_options").style.height = (document.getElementById("tab_0").clientHeight + 5) + "px";

    // get samples to work
    if (typeof samples != "undefined") {
        var sm = document.getElementById('sample');
        for (var s in samples) {
            var opt = document.createElement('option');
            opt.value = s;
            opt.innerHTML = samples[s].name;
            sm.appendChild(opt);
        }
        sm.removeChild(sm.getElementsByTagName('option')[0]);
    }
}

// allow ace to be turned on and off in the browser
function toggleAce() {
    if (document.getElementById("acetoggle").checked) {
        document.getElementById('code_txt_real').style.display = 'block';
        document.getElementById('code_txt').style.display = 'none';
        editor.setValue(document.getElementById("code_txt").value, -1);
    } else {
        document.getElementById("code_txt").value = editor.getValue();
        document.getElementById('code_txt_real').style.display = 'none';
        document.getElementById('code_txt').style.display = 'inline';

    }
}

// used to generate the file download interface
function addFileLine() {
    // '<div>Select a file to load: <input type="file"><button>reload</button></div>'
    var newFileLine = document.createElement("div");
    var text = document.createTextNode("Select a file to load: ");
    newFileLine.appendChild(text);

    var input = document.createElement("input");
    input.type="file";

    var button = document.createElement("button");
    var label = document.createTextNode("Reload");
    button.appendChild(label);

    newFileLine.appendChild(input);
    newFileLine.appendChild(button);

    var file = {
        "body" : newFileLine,
        "input" : input,
        "button" : button,
        "name" : function() {
            var name = this.input.value.split("\\");
            return name[name.length - 1].split(".")[0];
        },
        "close" : function() {
            document.getElementById("files").removeChild(file.body);
        },
    }
    file.load = function() {
        var fileToLoad = file.input.files[0];

        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) {
            file.tab.changeName(file.name());
            file.tab.setCode(fileLoadedEvent.target.result);
        }
        fileReader.readAsText(fileToLoad, "UTF-8");
    }

    file.tab = addCodeTab("newFile", "", file);
    file.input.addEventListener("change", file.load, false);
    file.button.addEventListener("click", file.load, false);


    document.getElementById("files").appendChild(newFileLine);
}

// save the currently selected tab
function saveCurrentTab() {
    // it is currently possible to generate a regular link for saving purposes,
    // and that's actually part of how this works, but the save-as option messes up the name for some reason
    var textToWrite = getCode();
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
    var fileNameToSaveAs = document.getElementById("modname").value + ".grace";
    var downloadLink = document.createElement("a");

    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "<br />Download " + fileNameToSaveAs;
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = function(event) {document.body.removeChild(event.target);};
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}
