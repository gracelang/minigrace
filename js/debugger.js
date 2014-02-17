function toggleDebugger() {
    var std_err = document.getElementById("stderr_txt");
    var dbgmenu = document.getElementById("debugger");
    if (document.getElementById("debugtoggle").checked) {
        if(ace) {
            editor.session.setBreakpoints(
                                          GraceDebugger.breakpoints.points.map(
                                                                               function(x){return x - 1;}));
        }
        std_err.style.width="49.5%";
        dbgmenu.style.display = "table";
    } else {
        if(ace) {
            editor.session.clearBreakpoints();
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
        document.getElementById("debugger_vars_display").className = "treeview";
    },
    
    
    // adds a variable to the list
    VariableListItem : function (obj, name, ul) {
        var li = document.createElement("li");
        li.variable = obj;
        
        if (obj && obj.className) {
            switch(obj.className) {
                case "String":
                    if (obj._value) {
                        li.innerHTML = name + " : \"" + obj._value + "\"";
                    } else {
                        li.innerHTML = name + " : \"\"";
                    }
                    break;
                    
                case "Number":
                    if (obj._value) {
                        li.innerHTML = name + " : " + obj._value;
                    } else {
                        li.innerHTML = name + " : 0";
                    }
                    break;
                    
                case "Boolean":
                    if (obj._value) {
                        li.innerHTML = name + " : " + obj._value;
                    } else {
                        li.innerHTML = name + " : false";
                    }
                    break;
                    
                case "Object":
                    li.className = "submenu";
                    li.style.backgroundImage='url("closed.png")';
                    
                    var top_span = document.createElement("span");
                    var sub_ul = document.createElement("ul");
                    
                    top_span.innerHTML = name + " : ";
                    sub_ul.style.display = "none";
                    
                    li.appendChild(top_span);
                    li.appendChild(sub_ul);
                    
                    li.onclick = function(e) {
                        GraceDebugger.toggleObjList(e, this, name);
                    }
                    
                    sub_ul.onclick = function(e) {
                        e.stopPropagation();
                    }
                    break;
                    
                default: // other types we've yet to define introspection for
                    li.innerHTML = name + " : " + obj.className;
            }
            
            // Undefined
        } else {
            li.innerHTML = name + " := undefined";
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
            
            for(obj in li.variable.data)
                GraceDebugger.VariableListItem(li.variable.data[obj], obj, sub_ul);
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
        if(ace) {
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


