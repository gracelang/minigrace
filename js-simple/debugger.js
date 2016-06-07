function toggleDebugger() {
    var std_err = document.getElementById("stderr_txt");
    var dbgmenu = document.getElementById("debugger");
    if (document.getElementById("debugtoggle").checked) {
        if(typeof ace != "undefined") {
            editor.session.setBreakpoints(
                GraceDebugger.breakpoints.points.map(
                    function(x){return x - 1;}));
        }
        std_err.style.width="49.5%";
        dbgmenu.style.display = "table";
    } else {
        if(typeof ace != "undefined") {
            editor.session.clearBreakpoints();
        }
        GraceDebugger.cache.clear();

        // the following function assignment is a hack, fix later
        if(typeof stdin != "undefined") {
            stdin.methods.read = function() {
                return new GraceString(minigrace.stdin_read());
            }
        }

        dbgmenu.style.display = "none";
        std_err.style.width = "100%";
    }
}


var GraceDebugger = {
    currentRunCount : 0,
    lastRunCount : 0,
    lineCount : function () {
        this.currentRunCount++;
    },
    
    SetStatus : function (value) {
        minigrace.stderr_write(value + "\n");
    },
    
    "default" : window.setLineNumber,
    
    "backStep" : function () {
        window.setLineNumber = function (n) {
            lineNumber = n;
            if (moduleName == minigrace.modname) {
                GraceDebugger.lineCount();
                if (GraceDebugger.currentRunCount >= GraceDebugger.lastRunCount-1) {
                    throw new breakPoint(GraceDebugger.that);
                }
            }
        }
    },
    
    "restart" : function() {
        this.lastRunCount = 0;
        window.setLineNumber = function (n) {
            lineNumber = n;
            if (moduleName == minigrace.modname) {
                GraceDebugger.lineCount();
                if (GraceDebugger.breakpoints.isHere(n)) {
                    throw new breakPoint(GraceDebugger.that);
                }
            }
        }
    },
    
    "continue" : function () {
        window.setLineNumber = function (n) {
            lineNumber = n;
            if (moduleName == minigrace.modname) {
                GraceDebugger.lineCount();
                if (GraceDebugger.currentRunCount > GraceDebugger.lastRunCount && GraceDebugger.breakpoints.isHere(n)) {
                    throw new breakPoint(GraceDebugger.that);
                }
            }
        }
    },
    
    "step" : function () {
        window.setLineNumber = function (n) {
            lineNumber = n;
            if (moduleName == minigrace.modname) {
                GraceDebugger.lineCount();
                if (GraceDebugger.currentRunCount > GraceDebugger.lastRunCount) {
                    throw new breakPoint(GraceDebugger.that);
                }
            }
        }
    },
    
    
    run : function (module, obj) {
        this.lastRunCount = this.currentRunCount;
        this.currentRunCount = 0;
        this.SetStatus("Program running....");
        try {
            window.clearstdout();
            this.VariableListBase(module.call(obj));
            GraceDebugger.lineCount();  // this is so back-step will stop at the line before the end of the program (would stop two lines before the end without this)
            this.SetStatus("Program has finished running");
            window.setLineNumber = this["default"];
        } catch(e) {
            window.setLineNumber = this["default"];
            if(e.exctype && e.exctype == "breakpoint") {
                this.VariableListBase(e.that);
                this.SetStatus("Program stopped on line " + lineNumber);
            } else {
                this.SetStatus("Program errored!");
                throw e;
            }
        }
    },
    
    
    VariableListBase : function (that) {
        document.getElementById("debugger_vars_display").that = that;
        var list = document.createElement("ul");
        if (that && that.methods) {
            for (var i in that.methods) {
                var variable = that.methods[i];
                if (variable.debug) {
                    this.VariableListItem(variable([0]), i, list);
                }
            }
            document.getElementById("debugger_vars_display").innerHTML = "Variables:";
            document.getElementById("debugger_vars_display").appendChild(list);
        } else {
            document.getElementById("debugger_vars_display").innerHTML = "Variables:<br /><span style=\"color: #aaa;\">(No variables set)</span>";
        }
    },
    
    
    // adds a variable to the list
    VariableListItem : function (obj, name, ul) {
        var li = document.createElement("li");
        li.variable = obj;

        if (obj && obj.methods) {
            // if a debugIterator exists and if either there's no debugIteratorEnabled set or it is set to true
            var doIterator = false;
            if  (obj.methods.debugIterator &&
                (typeof obj.data == "undefined"
                || typeof obj.data.debugIteratorEnabled == "undefined"
                || obj.data.debugIteratorEnabled._value)
            ) {
                doIterator = true;
            }
            if (doIterator) {
                li.className = "submenu";
                li.style.backgroundImage='url("closed.png")';
                var top_span = document.createElement("span");
                var sub_ul = document.createElement("ul");

                if (obj.methods.debugValue) {
                    top_span.innerHTML = name + " : " + callmethod(obj, "debugValue", [0])._value;
                } else {
                    top_span.innerHTML = name + " : ";
                }
                    
                sub_ul.style.display = "none";
                    
                li.appendChild(top_span);
                li.appendChild(sub_ul);
                    
                li.onclick = function(e) {
                    GraceDebugger.toggleObjList(e, this, name);
                }
                
                sub_ul.onclick = function(e) {
                    e.stopPropagation();
                }
            } else {
                if (obj.methods.debugValue) {
                    li.innerHTML = name + " : " + callmethod(obj, "debugValue", [0])._value;
                } else if (obj.methods.asDebugString) {
                    li.innerHTML = name + " : " + callmethod(obj, "asDebugString", [0])._value;
                } else {
                    li.innerHTML = name + " : ";
                }
            }
        } else {
            li.innerHTML = name + " : undefined";
        }
        ul.appendChild(li);
    },
    
    
    // opens up or closes an object list
    toggleObjList : function (e, li, name) {
        e.stopPropagation();
        var sub_ul = li.getElementsByTagName("ul")[0];
        
        if(sub_ul.style.display == "block") { // hide
            li.style.backgroundImage='url("closed.png")';
            sub_ul.style.display = "none";
        } else { // show
            li.style.backgroundImage='url("open.png")';
            sub_ul.innerHTML = "";
            sub_ul.style.display = "block";
            
            var iter = callmethod(li.variable, "debugIterator", [0]);
            while (Grace_isTrue(callmethod(iter, "havemore", [0]))) {
                var name = iter._index;
                var val = callmethod(iter, "next", [0]);
                GraceDebugger.VariableListItem(val, name, sub_ul);
            }
        }
    },
};


/* breakpoint object */
function breakPoint(that) {
    this.that = that;
}
breakPoint.prototype = {
    exctype : 'breakpoint',
    message : 'what will it take to break?'
}


/* Object for managing breakpoints */
GraceDebugger.breakpoints = {
    // Refresh breakpoints list on page to display changes
    refresh : function () {
        var bpString = "";
        for (var i=0;i<this.points.length;i++) {
            var lineNum = this.points[i];
            if (this.enabled[i]) {
                bpString += "<div>" + this.points[i]
                + ' <button onclick="GraceDebugger.breakpoints.toggle(' + lineNum + ');">Disable</button><button onclick="GraceDebugger.breakpoints.remove('
                + lineNum + ');">Remove</button></div>';
            } else {
                bpString += "<div>" + lineNum
                + ' <button onclick="GraceDebugger.breakpoints.toggle('
                + lineNum + ');">Enable</button><button onclick="GraceDebugger.breakpoints.remove('
                + lineNum + ');">Remove</button></div>';
            }
        }
        if(typeof ace != "undefined") {
            editor.session.clearBreakpoints();
            editor.session.setBreakpoints(
                GraceDebugger.breakpoints.points.map(
                    function(x){return x - 1;}));
        }
        document.getElementById("breakpoints").innerHTML = bpString;
    },
    
    // add a breakpoint to the current module using the number in the correct input field
    add : function () {
        num = Number(document.getElementById("add_break").value);
        if(num > 0) {
            if (this.points.indexOf(num) == -1) {
                this.points.unshift(num);
                this.enabled.unshift(true);
                
                for (var i=1;i<this.points.length;i++) {
                    if (this.points[i-1] > this.points[i]) {
                        var swap = this.points[i-1];
                        this.points[i-1] = this.points[i];
                        this.points[i] = swap;
                        swap = this.enabled[i-1];
                        this.enabled[i-1] = this.enabled[i];
                        this.enabled[i] = swap;
                    } else {
                        break;
                    }
                }
                
                GraceDebugger.SetStatus("Breakpoint at line number " + num + " for module " + minigrace.modname + " added.");
                this.refresh();
            } else {
                GraceDebugger.SetStatus("Cannot add breakpoint - breakpoint already exists.");
            }
        } else {
            GraceDebugger.SetStatus("Cannot add breakpoint - invalid breakpoint number.");
        }
    },
    
    // toggle breakpoint
    toggle : function (num) {
        var index = this.points.indexOf(num);
        if (index != -1) {
            if (this.enabled[index]) {
                GraceDebugger.SetStatus("Breakpoint for line " + num + " disabled.");
            } else {
                GraceDebugger.SetStatus("Breakpoint for line " + num + " enabled.");
            }
            this.enabled[index] = !this.enabled[index];
            this.refresh();
        }
    },
    
    remove : function (num) {
        var index = this.points.indexOf(num);
        if (index != -1) {
            this.enabled.splice(index, 1);
            GraceDebugger.SetStatus("Breakpoint for line " + num + " removed.");
            this.points.splice(index, 1);
            this.refresh();
        }
    },
    
    isHere : function (num) {
        var index = this.points.indexOf(num);
        if (index > -1 && this.enabled[index]) {
            return true;
        } else {
            return false;
        }
    },
    
    points : [],
    enabled : [],
};


/* data cache */
function functionCache(modname, name) {
    this.modname = modname;
    this.name = name;

    eval(
 "this.run = function() {\n"
+"    var modname = \"" + modname + "\";\n"
+"    var name = \"" + name + "\";\n"
+"    var this_ = GraceDebugger.cache.get(modname, name);\n"
+"    if(document.getElementById(\"modname\").value != window.moduleName) {"
+"        return this_.method();\n"
+"    }\n"
+"    var ret;\n"
+"    if (this_.index == this_.cache.length) {\n"
+"        ret = this_.method();\n"
+"        this_.add(ret);\n"
+"    } else {\n"
+"        ret = this_.cache[this_.index].value;\n"
+"    }\n"
+"    this_.index++;\n"
+"    return ret;\n"
+"}\n"
    );

    this.cache = [];
    this.index = 0;
    
    this.start = function() {
        if (this.index != 0) {
            // clear unused part of the cache from last run
            /*if (this.index < this.cache.length) {
                this.cache = this.cache.slice(0, this.index);
            }*/
            this.index = 0;
        }
        eval("do_import(this.modname, gracecode_" + this.modname + ");");
        if (this.modname != "io" || this.name != "read") {
            this.method = importedModules[this.modname].methods[this.name];
            importedModules[this.modname].methods[this.name] = this.run;
        } else {
            this.method = function() {
                return new GraceString(minigrace.stdin_read());
            };
            stdin.methods.read = this.run;
        }
    }

    this.reset = function() {
        this.index = 0;
        this.cache = [];
    }

    this.clear = function() {
        this.cache = [];
    }

    this.add = function(value) {
        var obj = {
            value : value
        }
        this.cache.push(obj);
    }
}

GraceDebugger.cache = {
    // Note that to get input to be cached required special-casing it, but it
    // should be possible to upgrade the code to not need this special-case.
    // special case code located in: functionCache.start, toggleDebugger
    //
    // To add any other method to cache, specify the module and method below
    // in the names array.
    names : [
        {module: "math", method : "random"}, 
        {module: "io", method : "read"}
    ],
    caches : [],
    init : function () {
        for (var i=0;i<this.names.length;i++) {
            this.caches.push(new functionCache(this.names[i].module, this.names[i].method));
        }
    },
    start : function () {
        for (var i=0;i<this.caches.length;i++) {
            this.caches[i].start();
        }
    },
    clear : function () {
        for (var i=0;i<this.caches.length;i++) {
            this.caches[i].clear();
        }
    },
    get : function(nodname, method) {
        for (var i=0;i<this.names.length;i++)
            if (this.names[i].module==nodname && this.names[i].method==method)
                return this.caches[i];
    }
}

