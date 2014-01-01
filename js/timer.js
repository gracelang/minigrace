function gracecode_timer() {
    var o = Grace_allocObject();
    o.methods.intervalList = [];
    o.methods.timeoutList = [];
    
    o.methods.trapErrors = function(func) {
        try {
            func();
        } catch (e) {
            if (e.exctype == 'graceexception') {
                document.getElementById("stderr_txt").value += (
                    "Error around line " + e.lineNumber
                    + ": " + e.exception.name + ": "
                    + e.message._value + "\n");
                for (i=e.callStack.length-1; i>=0; i--) {
                    document.getElementById("stderr_txt").value += (
                        "  From call to " + e.callStack[i] + "\n");
                }
                if (e.callStack.length > 0) {
                    document.getElementById("stderr_txt").value += (
                        "Error around line " + e.lineNumber
                        + ": " + e.exception.name + ": "
                        + e.message._value + "\n");
                }
            } else if (e != "SystemExit") {
                document.getElementById("stderr_txt").value += (
                    "Runtime error\n"); // around line " + lineNumber + "\n");
                throw e;
            } else {
                document.getElementById("stderr_txt").value += (
                    "Unknown Error\n"
                );
            }
        }
    }
    
    // the following is part of attempt to halt timers
    // from different programs then the current one from running
    if(document.getElementById("timers"))
        document.getElementById("timers").click();
    
    o.methods["every()do"] = function(argcv, millisec, code) {
        // check if there's still a stop timers button
        if(document.getElementById("timers")) {
            var func = function() {
                o.methods.trapErrors(function() {
                    callmethod(code, "apply", [0]);
                });
            }
            var id = setInterval(func, millisec._value);
            func.id = id;
            o.methods.intervalList.push(id);
            return new GraceNum(id);
        }
    }
	
    o.methods["after()do"] = function(argcv, millisec, code) {
        // check if there's still a stop timers button
        if(document.getElementById("timers")) {
            var func = function() {
                o.methods.trapErrors(function() {
                    callmethod(code, "apply", [0]);
                });
            }
            var id = setTimeout(func, millisec._value);
            func.id = id;
            o.methods.timeoutList.push(id);
            return new GraceNum(id);
        }
    }
	
    o.methods.stop = function(argcv, id) {
		var index = o.methods.intervalList.indexOf(id._value);
		if(index != -1) {
            clearInterval(id._value);
			o.methods.intervalList.splice(index, 1);
		}
		var index = o.methods.timeoutList.indexOf(id._value);
        if(index != -1) {
            clearTimeout(id._value);
			o.methods.timeoutList.splice(index, 1);
		}
		
    }
	
    o.methods.stopAll = function() {
		var list = o.methods.intervalList;
        for(var i=0;i<list.length;i++)
            clearInterval(list[i]);
		
		o.methods.intervalList = [];
        
        list = o.methods.timeoutList;
        for(var i=0;i<list.length;i++)
            clearTimeout(list[i]);
		
		o.methods.timeoutList = [];
    }
    
    
    // the following lines are in place to enable the stopping of timers from outside a program
    if(document.getElementById("extra")) {
        var stop = document.createElement("button")
        stop.innerHTML = "Stop Timers"
        stop.id = "timers";
        stop.addEventListener("click", o.methods.stopAll, false);
        document.getElementById("extra").appendChild(stop);
        stop.onclick = function() {this.parentNode.removeChild(this);}
    }
    
    return o;
}
