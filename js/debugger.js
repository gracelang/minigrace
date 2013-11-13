function probe(obj) {
    window.grace_code;
    function prb(obj, depth) {
        var space = depth + "  "
        var type = typeof obj
        switch(type) {
            case "object":
            case "function":
                var str = "{\n";
                for(var i in obj) {
                    str += space + i + ":" + prb(obj[i], space) + ",\n";
                }
                str += depth + "}";
                return str;
                
            case "function":
                var str = "" + obj;
                var spl = str.split("\n");
                if(spl[2].match("  if") && spl[8].match("  return var_")) {
                    var value = obj([0]);
                    if(value._value)
                        return value._value;
                    else {
                        var str = "{\n";
                        for(var i in value) {
                            str += space + i + ":" + typeof value[i] + ",\n";
                        }
                        str += depth + "}";
                        return str;
                    }
                        
                } else {
                    return "function";
                }
                
                return "" + obj;
                
            case "number":
            case "boolean":
                return obj;
                
            case "string":
                return "\'" + obj + "\'";
                
            default:
                return typeof obj;
        }
    }
    
    document.getElementById("stderr_txt").value += prb(obj, "") + "\n";
}


// Find and display all the variables a module has at the time "that" is handed to this function
// "that" should be "this" when called by the function being debugged
//
// the easiest way to use this is to modify the minigrace.in.js file slightly
// replace the following line from the declaration of MiniGrace.prototype.run
//         theModule.call({methods:{}, data: {}, className: modname});
// with
//         getVariableValues(theModule.call({methods:{}, data: {}, className: modname}));
//
// functionality possible thanks to the following line and it's twin added to genjs.grace
// specifically to the ends of method compiledefdec and method compilevardec
// out("this.methods[\"{nm}\"].debug = \"def\";")
// out("this.methods[\"{nm}\"].debug = \"var\";")
function getVariableValues(that) {
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
    
    var str = "";
    if(that.methods) {
        for(var i in that.methods) {
            var variable = that.methods[i];
            if(variable.debug) {
                var returnedVar = variable([0])
                if(returnedVar) {
                    if(returnedVar._value) {
                        str += i + " = " + returnedVar._value + "\n";
                    } else {
                        str += i + " = " + prb(returnedVar, "") + "\n";
                    }
                } else {
                    str += i + " = undefined\n";
                }
            }
        }
    }
    
    document.getElementById("stderr_txt").value += str;
}
