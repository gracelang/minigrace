dialect "none"
import "intrinsic" as intrinsic
import "basicTypesBundle" as basicTypesBundle

use intrinsic.annotations
use basicTypesBundle.open

type Mirror = Object & interface {
    methods → Sequence⟦MethodMirror⟧    // mirrors on all of subject's methods
    methodNames → Sequence⟦String⟧      // the names of the subject's non-confidential methods
    confidentialMethodNames → Sequence⟦String⟧  // the names of the subject's confidential methods
    allMethodNames → Sequence⟦String⟧           // the names of all of the subject's methods
    onMethod(nm:String) → MethodMirror // a mirror on the method with name nm
    ilk → String                       // a uid for the subject's object constructor
    definitionModule → String   // the name of the module containing the subject's constructor
    definitionLine → String     // the line number of the start of the subject's constructor
    subject → Object            // the object on which I reflect
    whenNoMethodDo(action:Function3) →  Done
        // if subject is sent a request named nm, and there is no method nm,
        // action will be applied to the arguments subject and nm.
}

type MethodMirror = Object & interface {
     name → String
     numberOfParams → Number
     partCount → Number
     paramCounts → Sequence⟦Number⟧
     paramNames → Sequence⟦String⟧
     requestWithArgs(args:Sequence⟦Object⟧) → Unknown
     isConfidential → Boolean
     isPublic → Boolean
}

def MMhash = "MM".hash
def OMhash = "OM".hash
def thisModule = self

class reflect(subj) {
    // answers a Mirror on subj
    def subject is public = subj
    method asString { "a mirror on {subject}" }
    method methods → Sequence⟦MethodMirror⟧  {
        native "js" code ‹
            var meths = [];
            var current = this.data.subject;
            for (var k in current.methods) {
                if (! k.includes("$") && current.methods.hasOwnProperty(k)) {
                    meths.push(request(var_thisModule, "methodMirror(2)",
                            2, current, new GraceString(k)));
                }
            }
            return new GraceSequence(meths);
        ›
    }
    method methodNames {
        // answers a sorted sequence of strings (not a set), being the names of subject's public methods
        native "js" code ‹
            var methNames = [];
            var current = this.data.subject;
            for (var k in current.methods) {
                if (! k.includes("$") && current.methods.hasOwnProperty(k) &&
                      ! current.methods[k].confidential) {
                    methNames.push(canonicalMethodName(k));
                }
            }
            return new GraceSequence(methNames.sort().map(
                    nm => new GraceString(nm)));
        ›
    }
    method confidentialMethodNames {
        // answers a sorted sequecne of strings (not a set) being the names of subject's confidential methods
        native "js" code ‹
            var methNames = [];
            var current = this.data.subject;
            for (var k in current.methods) {
                if (! k.includes("$") && current.methods.hasOwnProperty(k) &&
                      current.methods[k].confidential) {
                    methNames.push(canonicalMethodName(k));
                }
            }
            return new GraceSequence(methNames.sort().map(
                    nm => new GraceString(nm)));
        ›
    }
    method allMethodNames {
        // answers a sorted sequecne of strings, being the names of all of subject's methods
        native "js" code ‹
            var methNames = [];
            var current = this.data.subject;
            for (var k in current.methods) {
                if (! k.includes("$") && current.methods.hasOwnProperty(k)) {
                    methNames.push(canonicalMethodName(k));
                }
            }
            return new GraceSequence(methNames.sort().map(
                    nm => new GraceString(nm)));
        ›
    }
    method onMethod(nm) {
        // answers a MethodMirror on subject's method named nm
        methodMirror(subject, nm)
    }

    method whenNoMethodDo(handlerBlock) {
        // sets up handlerBlock (a function with 3 arguments) to be applied when
        // a requested method is not found.  The parameters of handlerBlock are
        //      name:String — the canonical name of the requested method
        //      args:Sequence⟦Object⟧ — the arguments of the original request
        //      receiver:Object — the object on which the request was originally made
        //                          (which will be the subject of this mirror)
        native "js" code ‹this.data.subject.noSuchMethodHandler = var_handlerBlock;›
    }
    method ilk {
        native "js" code ‹return new GraceString(this.data.subject.classUid);›
    }
    method definitionModule {
        native "js" code ‹return new GraceString(this.data.subject.definitionModule);›
    }
    method definitionLine {
        native "js" code ‹return new GraceNum(this.data.subject.definitionLine);›
    }
    method hash {
        def subjectHash = native "js" code ‹
            result = selfRequest(this.data.subject, "myIdentityHash");
        ›   // in native code so that we can make it a _self_ request
        intrinsic.hashCombine(OMhash, subjectHash);
    }
    method == (other) {
        native "js" code ‹
            if (this.classUid !== other.classUid) {
                return GraceFalse;   // return false if other is not a Mirror
            }
            if (this.data.subject !== other.data.subject) {
                return GraceFalse;   // return false if we don't have the same subject
            }
            return GraceTrue;
        ›
    }
}

method canonicalName(n) {
    // converts n, a minigrace numeric method name, to the canonical name
    native "js" code ‹return new GraceString(canonicalMethodName(var_n._value));›
}

method numericName(c) {
    // converts c, a Grace canonical method name, to minigrace's numeric name
    native "js" code ‹return new GraceString(numericMethodName(var_c._value));›
}

class methodMirror(theSubject, aMethodName) {
    // For flexibility, we allow aMethodName to be canonical or numeric
    def subject is public = theSubject

    native "js" code ‹
        const rawName = var_aMethodName._value;
        if (rawName.indexOf("(") === -1) {
            this.numericName = rawName;
            this.canonicalName = rawName;
        } else if (rawName.match(/\(\d+\)/)) {
            this.numericName = rawName;
            this.canonicalName = canonicalMethodName(rawName);
        } else {
            this.numericName = numericMethodName(rawName);
            this.canonicalName = rawName;
        };
        if (! this.data.subject.methods[this.numericName]) {
            var exceptionMsg = new GraceString("no method " +
                  this.canonicalMethodName + " in mirror for ");
            const objDescription = callmethod(this.data.subject, "asString", [0]);
            exceptionMsg = callmethod(exceptionMsg, "++(1)", [1], objDescription);
            throw new GraceExceptionPacket(NoSuchMethodErrorObject, exceptionMsg);
        };
        this.theFunction = this.data.subject.methods[this.numericName];
    ›

    method name {
        native "js" code ‹return new GraceString(this.canonicalName)›
    }
    method asString { "mirror on method '{name}' of {subject}" }
    method partCount {
        native "js" code ‹
            const count = this.numericName.split("(").length;
            if (count === 1) return new GraceNum(1);
            return new GraceNum(count - 1);
        ›
    }
    method paramCounts {
        native "js" code ‹
            const len = this.theFunction.paramCounts ? this.theFunction.paramCounts.length : 0;
            const countArray = new Array(len);
            for (var i = 0; i < l; i++) {
                countArray[i] = new GraceNum(theFunction.paramCounts[i]);
            }
            return new GraceSequence(countArray);
        ›
    }

    method isConfidential {
        native "js" code ‹
            return (this.theFunction.confidential ? GraceTrue : GraceFalse);
        ›
    }

    method isPublic {
        native "js" code ‹
            return (this.theFunction.confidential ? GraceFalse : GraceTrue);
        ›
    }

    method numberOfParams {
        native "js" code ‹
            return new GraceNum(this.theFunction.paramNames.length);
        ›
    }

    method requestWithArgs(argList) {
        native "js" code ‹
            var paramcv = this.theFunction.paramCounts;
            var np = this.theFunction.paramNames.length;
            var ntp = (this.theFunction.typeParamNames) ?
                    this.theFunction.typeParamNames.length : 0;
            var providedLen = callmethod(var_argList, "size", [0])._value;
            if ((providedLen !== np) && (providedLen != (np + ntp))) {
                const tParamPart = (ntp > 0) ? (" and " + ntp + " type arguments") : "";
                throw new GraceExceptionPacket(RequestErrorObject,
                    new GraceString("method '" + this.canonicalName + "' requires " +
                                    np + " arguments" + tParamPart +
                                    ", but was given " + providedLen + "."));
            }
            const requestArgs = [this.data.subject, this.numericName, paramcv];
            const argsIter = callmethod(var_argList, "iterator", [0]);
            while (Grace_isTrue(callmethod(argsIter, "hasNext", [0]))) {
                const arg = callmethod(argsIter, "next", [0]);
                requestArgs.push(arg);
            }
            return selfRequest.apply(null, requestArgs);
        ›
    }

    method hash {
        def subjectHash = native "js" code ‹
            result = selfRequest(this.data.subject, "myIdentityHash");
        ›
        intrinsic.hashCombine(MMhash,
              intrinsic.hashCombine(name.hash, subjectHash));
    }

    method == (other) {
        native "js" code ‹
            if (this.classUid !== other.classUid) {
                return GraceFalse;   // return false if other is not a methodMirror
            }
            if (this.data.subject !== other.data.subject) {
                return GraceFalse;   // return false if we don't have the same subject
            }
            if (this.numericName !== other.numericName) {
                return GraceFalse;   // return false if not the same method
            }
            return true;
        ›
    }
}

method loadModule(moduleName) {
    native "js" code ‹return loadDynamicModule(safeJsString(var_moduleName));›
}

method initialModuleName {
    native "js" code ‹return new GraceString(minigrace.initialModule);›
}
