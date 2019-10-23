type Timer = Number

native "js" code ‹
    this.data.intervalList = [];
    this.data.timeoutList = [];
›

method every (millisec) do (codeBlock) -> Timer {
    native "js" code ‹
        var func = function() {
            minigrace.trapErrors(function() {
                callmethod(var_codeBlock, "apply", [0]);
            });
        }
        var id = setInterval(func, var_millisec._value);
        func.id = id;
        this.data.intervalList.push(id);
        graceRegisterInterval(id);
        return new GraceNum(id);
    ›
}
method after (millisec) do (codeBlock) -> Timer {
    native "js" code ‹
        var func = function() {
            minigrace.trapErrors(function() {
                callmethod(var_codeBlock, "apply", [0]);
            });
        }
        var id = setTimeout(func, var_millisec._value);
        func.id = id;
        this.data.timeoutList.push(id);
        graceRegisterTimeout(id);
        return new GraceNum(id);
    ›
}
method stop(id:Timer) {
    native "js" code ‹
        var index = this.data.intervalList.indexOf(var_id._value);
        if(index != -1) {
            clearInterval(var_id._value);
            this.data.intervalList.splice(index, 1);
        }
        var index = this.data.timeoutList.indexOf(var_id._value);
        if(index != -1) {
            clearTimeout(var_id._value);
            this.data.timeoutList.splice(index, 1);
        }
    ›
}
method stopAll {
    native "js" code ‹
        var list = this.data.intervalList;
        for (let i=0; i<list.length; i++)
            clearInterval(list[i]);

        this.data.intervalList = [];

        list = o.methods.timeoutList;
        var list = o.methods.intervalList;
        for (let i=0; i<list.length; i++)
            clearTimeout(list[i]);

        this.data.timeoutList = [];
    ›
}
