dialect "none"

// The intrinsic module.  This is the home for language elements that cannot
// be defined in Grace itself because they are beyond the descriptive power
// of the language.

def UnimplementedMethod = Exception.refine "UnimplementedMethod"

def NoneType = object {
     def name is public = "None"

     method matches(obj) { false }
     method | (other) { other }
     method & (other) { self }
     method prefix ¬ { Done }
     method +(other) { other }
     method -(other) {
         UnimplementedMethod.raise
              "can't subtract methods from type {name}"
     }
     method asString { "type {name}" }
     method methodNames {
         UnimplementedMethod.raise
              "can't get the methods of type {name} because they form an infinite set"
     }
     method ==(other) { isMe(other) }
     method hash { myIdentityHash }
     method setName(nu) is confidential {
         UnimplementedMethod.raise
              "attempting to change the name of type {name} to {nu}"
     }
     method isNone { true }
}
def StringType = native "js" code ‹result = type_String›
def NumberType = native "js" code ‹result = type_Number›
def BooleanType = native "js" code ‹result = type_Boolean›
def ObjectType = native "js" code ‹result = type_Object›
def TypeType = native "js" code ‹result = type_Type›

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

trait constants {
    method Exception { native "js" code ‹
        return ExceptionObject; ›
    }
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
    method infinity { native "js" code ‹
        return new GraceNum(Infinity); ›
    }
    method π { native "js" code ‹
        return new GraceNum(3.141592653589793); ›
    }
    method primitiveArray { native "js" code ‹
        return PrimitiveArrayClass; ›
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
        if (this.methods['while(1)do(1)'] &&
                this.methods['while(1)do(1)'].safe) {
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

    method for (collection) do (block) {
        collection.do(block)
    }
}

method clone(anObject) {
    native "js" code ‹prelude_clone([1], anObject);›
}
native "js" code ‹this.methods['clone(1)$build(3)'] = prelude_clone_build;›
    // so that one can `inherit` or `use` a clone

method inBrowser {
    native "js" code ‹return (typeof global === "undefined") ? GraceTrue : GraceFalse;›
}

method engine {
    native "js" code ‹return new GraceString("js");›    // only when generating JS
    ProgrammingError.raise "the method `engine` must be augmented to support this execution engine"
}
