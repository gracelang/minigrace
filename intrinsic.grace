dialect "none"

// The intrinsic module.  This is the home for language elements that cannot
// be defined in Grace itself because they are beyond the descriptive power
// of the language.

once method Exception { native "js" code ‹return ExceptionObject;› }
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

trait types {
    // these types are defined in terms of defs because the rhs of a type
    // declaration cannot be an arbitrary request, such as native(_)code(_)

    type None = NoneType
    type String = StringType
    type Number = NumberType
    type Boolean = BooleanType
    type Object = ObjectType
    type Type = TypeType
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
    once class primitiveArray {
        method new(size:Number) {
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
    native "js" code ‹
    for (let k in var_a) {
        const temp = var_a[k];
        var_a[k] = var_b[k];
        var_b[k] = temp;
    }›
    done
}
