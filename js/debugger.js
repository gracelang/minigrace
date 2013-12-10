function toggleDebugger() {
    var std_err = document.getElementById("stderr_txt");
    var dbgmenu = document.getElementById("debugger");
    if (document.getElementById("debugtoggle").checked) {
        std_err.style.width="49.5%";
        dbgmenu.style.display = "table";
    } else {
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
            this.VariableValues(module.call(obj));
            GraceDebugger.lineCount();  // this is so back-step will stop at the line before the end of the program (would stop two lines before the end without this)
            this.SetStatus("Program has finished running");
	    window.setLineNumber = function (n) {
                lineNumber = n;
            }
        } catch(e) {
	    window.setLineNumber = function (n) {
                lineNumber = n;
            }
            if(e.exctype && e.exctype == "breakpoint") {
                this.VariableValues(e.that);
                this.SetStatus("Program stopped on line " + lineNumber);

            } else {
                this.SetStatus("Program errored!");
                throw e;
            }
        }
        
    },

    VariableValues : function (that) {
        function prb(obj, depth) {
            var space = depth + "  "
            if(obj != null) {
                if(obj._value) {
                    return obj._value;
                } else if(obj.data) {
                    var str = "{\n";
                    for(var i in obj.data) {
                        str += space + i + ":" + prb(obj.data[i], space) + ",\n";
                    }
                    str += depth + "}";
                    return str;
                } else {
                    return "unknown";
                }
            } else {
                return "undefined";
            }
        }
        
        var table = "Variables <div>";
        if(that && that.methods) {
            table += "<table class=\"debugger_vars_display\">";
            for(var i in that.methods) {
                var variable = that.methods[i];
                if(variable.debug) {
                    var returnedVar = variable([0])
                    if(returnedVar) {
                        if(returnedVar._value) {
                            table += "<tr><td>" + i + "</td><td>"
                                  + returnedVar._value + "</td></tr>\n";
                        } else {
                            table += "<tr><td>" + i + "</td><td>"
                                  + prb(returnedVar, "") + "</td></tr>\n";
                        }
                    } else {
                        table += "<tr><td>" + i
                              + "</td><td>undefined</td></tr>\n";
                    }
                }
            }
            table += "</table>";
        } else {
            table += "<span style=\"color: #aaa;\">(No variables set)</span>";
	}
        table += "</div>";
        document.getElementById("debugger_vars_display").innerHTML = table;
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
            if (this.enabled[i]) {
                bpString += "<div>" + this.points[i]
                    + ' <button onclick="GraceDebugger.breakpoints.toggle(' + i + ');">Disable</button><button onclick="GraceDebugger.breakpoints.remove('
                    + i + ');">Remove</button></div>';
            } else {
                bpString += "<div>" + this.points[i] 
                    + ' <button onclick="GraceDebugger.breakpoints.toggle('
                    + i + ');">Enable</button><button onclick="GraceDebugger.breakpoints.remove('
                    + i + ');">Remove</button></div>';
            }
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
    toggle : function (index) {
        if (this.enabled[index]) {
            GraceDebugger.SetStatus("Breakpoint for line " + this.points[index] + " disabled.");
        } else {
            GraceDebugger.SetStatus("Breakpoint for line " + this.points[index] + " enabled.");
        }
            this.enabled[index] = !this.enabled[index];
            this.refresh();
    },
  
    remove : function (index) {
        this.enabled.splice(index, 1);
        GraceDebugger.SetStatus("Breakpoint for line " + this.points[index] + " removed.");
        this.points.splice(index, 1);
        this.refresh();
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

