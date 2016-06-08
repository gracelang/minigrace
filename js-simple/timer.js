function gracecode_timer() {
    var o = Grace_allocObject();
    o.methods.intervalList = [];
    o.methods.timeoutList = [];

    o.methods["every()do"] = function(argcv, millisec, code) {
        var func = function() {
            minigrace.trapErrors(function() {
                callmethod(code, "apply", [0]);
            });
        }
        var id = setInterval(func, millisec._value);
        func.id = id;
        o.methods.intervalList.push(id);
        graceRegisterInterval(id);
        return new GraceNum(id);
    }

    o.methods["after()do"] = function(argcv, millisec, code) {
        var func = function() {
            minigrace.trapErrors(function() {
                callmethod(code, "apply", [0]);
            });
        }
        var id = setTimeout(func, millisec._value);
        func.id = id;
        o.methods.timeoutList.push(id);
        graceRegisterTimeout(id);
        return new GraceNum(id);
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

    return o;
}

gracecode_timer.imports = [];

if (typeof gctCache !== "undefined")
    gctCache['timer'] = "modules:\nfresh-methods:\npath:\n timer\nclasses:\npublic:\n intervalList\n timeoutList\n every()do\n after()do\n stop\n stopAll\nconfidential:\n";
