dialect "none"

// The intrinsic module.  This is the home for language elements that cannot
// be defined in Grace itself because they are beyond the descriptive power
// of the language.

once method Exception { native "js" code ‹return ExceptionObject;› }
def UnimplementedMethod = Exception.refine "UnimplementedMethod"

def NoneType = object {
    method name { "None" }
    method matches(obj) { false }
    method | (other) { other }
    method & (other) { self }
    method prefix ¬ { interface { } }
    method +(other) { other }
    method -(other) {
        UnimplementedMethod.raise "can't subtract methods from type {name}"
    }
    method asString { "type {name}" }
    method methodNames {
        UnimplementedMethod.raise
            "can't get the methods of type {name} because they form an infinite set"
    }
    method ==(other) { self.isMe(other) }
    method hash { myIdentityHash }
    method isNone { true }
    method isType { true }
}

trait annotations {
    // these _can_ be declared in Grace, but we don't want to repeat the
    // definitions in many files

    method annotation is annotation
    method required is annotation
    method abstract is annotation
    method confidential is annotation
    method public is annotation
    method readable is annotation
    method writable is annotation
    method override is annotation
}

trait constants {
    method Exception { outer.Exception }
    method UnimplementedMethod { outer.UnimplementedMethod }
    method ProgrammingError { native "js" code ‹
        return ProgrammingErrorObject; ›
    }
    method EnvironmentException { native "js" code ‹
        return EnvironmentExceptionObject; ›
    }
    method ResourceException { native "js" code ‹
        return ResourceExceptionObject; ›
    }
    method RuntimeError { native "js" code ‹
        return RuntimeErrorObject; ›
    }
    method TypeError { native "js" code ‹
        return TypeErrorObject; ›
    }
    method NoSuchMethod { native "js" code ‹
        return NoSuchMethodErrorObject; ›
    }
    method BoundsError { native "js" code ‹
        return BoundsErrorObject; ›
    }
    method IteratorExhausted { native "js" code ‹
        return IteratorExhaustedObject; ›
    }
    method NoSuchObject { native "js" code ‹
        return NoSuchObjectErrorObject; ›
    }
    once method DialectError {
        Exception.refine "DialectError"
    }
    once method infinity { native "js" code ‹
        return new GraceNum(Infinity); ›
    }
    method done { native "js" code ‹
        return GraceDone;›
    }

    once class primitiveArray {
        method new(size) {
            native "js" code ‹return new GracePrimitiveArray(var_size._value);›
        }
    }
}

trait controlStructures {
    method while (cond) do (block) {
        native "js" code ‹
        const c = var_cond;
        const b = var_block;
        if (c.className === "boolean" || c.className === "number")
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected Block for first argument of " +
                                    "while(_)do(_), got " + c.className + "."));
        if ((typeof minigrace != "undefined") && minigrace.breakLoops) {
            var count = 0;
            var runningTime = 0;
            var runningCount = 0;
            var startTime = new Date();
            var diff;
            while (Grace_isTrue(callmethod(c, "apply", [0]))) {
                count++;
                if (count % 100000 === 0 && ((diff=new Date()-startTime) > 5000)) {
                    var totTime = runningTime + diff;
                    var totIterations = runningCount + count;
                    if (! confirm("A while loop is taking a long time to run. " +
                                  "Do you want to continue? " +
                                  totIterations + " iterations of the loop have taken " +
                                  totTime + "ms so far." +
                                  "\n\nChoose Cancel to stop the program, or OK to " +
                                  "let it continue."))
                        throw new GraceExceptionPacket(ResourceExceptionObject,
                            new GraceString("user abort of long-running loop."));
                    else {
                        runningCount += count;
                        runningTime += diff;
                        count = 0;
                        startTime = new Date();
                    }
                }
                callmethod(b, "apply", [0]);
            }
        } else {
            while (Grace_isTrue(callmethod(c, "apply", [0]))) {
                callmethod(b, "apply", [0]);
            }
        }
        return GraceDone;›
    }
}

method inBrowser {
    native "js" code ‹return (typeof global === "undefined") ? GraceTrue : GraceFalse;›
}

method engine {
    native "js" code ‹return new GraceString("js");›    // only when generating JS
    constants.ProgrammingError.raise "the method `engine` must be augmented to support this execution engine"
}

method become(a, b) {
    // not clear what this is actualy intended to do ... it's used in statictypes dialect
    // it won't exchange the prototypes of the two objects, so they may not work.
    native "js" code ‹
        for (let k in var_a) {
            const temp = var_a[k];
            var_a[k] = var_b[k];
            var_b[k] = temp;
        }
        GraceDone;
    ›
}

method hashCombine(a, b) {
    native "c" code ‹
        int a = (int)(args[0]->data);
        int b = (int)(args[1]->data);
        int aHash = a * 1664525;
        int bHash = (b * 1664525 - 0xA21FE89) * 3;
        return alloc_Float64((aHash * 2) ^ bHash);›
    native "js" code ‹
        var a = var_a._value;
        var b = var_b._value;
        var aHash = a * 1664525;
        var bHash = (b * 1664525 - 0xA21FE89) * 3;
        result = new GraceNum((aHash * 2) ^ bHash);›
}

method curriedMethodPattern(subject, methName) {
    native "js" code ‹
        return new GraceCurriedMethodPattern(var_subject, var_methName._value);›
}