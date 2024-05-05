dialect "none"
import "intrinsic" as intrinsic
import "basicTypesBundle" as basicTypesBundle
import "equalityBundle" as equalityBundle

use intrinsic.annotations
use basicTypesBundle.open
use equalityBundle.open

type Mirror = EqualityObject & interface {
    methods → Sequence⟦MethodMirror⟧    // mirrors on all of subject's methods
    methodNames → Sequence⟦String⟧      // the names of the subject's non-confidential methods
    confidentialMethodNames → Sequence⟦String⟧  // the names of the subject's confidential methods
    allMethodNames → Sequence⟦String⟧           // the names of all of the subject's methods
    onMethod(nm:String) → MethodMirror // a mirror on the method with name nm
    request(nm:String)withArgs(args:Sequence⟦Object⟧) → Unknown
    ilk → String                       // a uid for the subject's object constructor
    definitionModule → String   // the name of the module containing the subject's constructor
    definitionLine → String     // the line number of the start of the subject's constructor
    subject → Object            // the object on which I reflect
    whenNoMethodDo(action:Function3) →  Done
        // if subject is sent a request named nm, with argument list args, and
        // there is no method nm, action will be applied to (nm, args, subject)
}

type MethodMirror = EqualityObject & interface {
    name → String                   // canonical name of the method
    numberOfParams → Number         // the number of parameters of the method
    numberOfTypeParams → Number     // the number of type parameters
    partCount → Number              // the number of parts to name
    paramCounts → Sequence⟦Number⟧   // the number of parameters to each part
    paramNames → Sequence⟦String⟧    // the names of the parameters
    paramTypes → Sequence⟦Type⟧      // the types of the parameters
    returnType → Type
    typeParamNames → Sequence⟦String⟧// the names of the type parameters
    requestWithArgs(args:Sequence⟦Object⟧) → Unknown
        // executes the method with args; ordonary arguments first, followed by type args
    subject → Object                // the object on whose method I reflect
    isConfidential → Boolean        // true if this method is confidential
    isPublic → Boolean              // true if this method is public
}

def MMhash = "MM".hash
def OMhash = "OM".hash
def thisModule = self

class reflect(subj) {
    // answers a Mirror on subj
    use equality
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
        // Answers a sorted sequence of strings, being the names of the subject's
        // public methods.  Don't use a set, to limit dependencies
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
        // answers a sorted sequecne of strings (not a set) being the names of
        // the subject's confidential methods
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
        // answers a sorted sequecne of strings, being the names of all of
        // the subject's methods
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
        // answers a MethodMirror on the subject's method named nm
        methodMirror(subject, nm)
    }

    method request(nm:String) withArgs(args:Sequence⟦Object⟧) → Unknown {
        def methodMirror = methodMirror(subject, nm)
        methodMirror.requestWithArgs(args)
    }

    method whenNoMethodDo(handlerBlock) {
        // sets up handlerBlock (a function with 3 parameters) to be applied when
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
        native "js" code ‹return new GraceNum(this.data.subject.definitionLine || 0);›
    }
    method hash {
        def subjectHash = native "js" code ‹
            result = selfRequest(this.data.subject, "myIdentityHash");
        ›   // in native code so that we can make it a _self_ request
        intrinsic.hashCombine(OMhash, subjectHash);
    }
    method == (other) {
        native "js" code ‹
            if (this.classUid !== var_other.classUid) {
                return GraceFalse;   // return false if other is not a Mirror
            }
            if (this.data.subject !== var_other.data.subject) {
                return GraceFalse;   // return false if we don't have the same subject
            }
            return GraceTrue;
        ›
    }
}

class methodMirror(theSubject, aMethodName) {
    // Answers a MethodMirror on theSubject's method with name aMethodName
    // For flexibility, we allow aMethodName to be canonical or numeric

    use equality

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
            const objDescription = request(this.data.subject, "asString", [0]);
            exceptionMsg = request(exceptionMsg, "++(1)", [1], objDescription);
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
            for (var i = 0; i < len; i++) {
                countArray[i] = new GraceNum(this.theFunction.paramCounts[i]);
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

    method numberOfTypeParams {
        native "js" code ‹
            return new GraceNum(this.theFunction.typeParamNames.length);
        ›
    }

    method paramNames {
        native "js" code ‹
            const graceNames = this.theFunction.paramNames.map(s => new GraceString(s));
            return new GraceSequence(graceNames);
        ›
    }

    method paramTypes {
        native "js" code ‹
            var types;
            const paramTypes = this.theFunction.paramTypes;
            if (typeof paramTypes == "function") {
                const nrTypeParams = this.theFunction.typeParamNames.length;
                const paramTypesBlock = new GraceBlock(
                    {definitionModule: "mirror"}, 247, nrTypeParams);
                paramTypesBlock.guard = function(...args) {
                    for (let i=0; i<args.length; i++) {
                        if (! isGraceType(args[i])) return false;
                    }
                    return true;
                };
                paramTypesBlock.real = (...args) =>
                    new GraceSequence(paramTypes.apply(this.theFunction, args));
                const applyMeth = (argcv, ...args) => {
                    if (paramTypesBlock.guard.apply(paramTypesBlock, args))
                        return paramTypesBlock.real.apply(this.theFunction, args);
                    for (let i=0; i<args.length; i++) {
                        if (! isGraceType(args[i])) {
                            raiseException(RequestErrorObject,
                                "argument " + (i+1) + " to block (from methodMirror.paramTypes) is not a type.");
                        }
                    }
                };
                applyMeth.methodName = "apply(" + nrTypeParams + ")";
                applyMeth.paramCounts = [nrTypeParams];
                applyMeth.paramNames = this.theFunction.typeParamNames;
                applyMeth.definitionLine = this.theFunction.definitionLine;
                applyMeth.definitionModule = this.theFunction.definitionModule;
                paramTypesBlock.methods[applyMeth.methodName] = applyMeth;
                return paramTypesBlock;
            }
            if (paramTypes) {
                types = this.theFunction.paramTypes;
            } else {
                types = Array(this.theFunction.paramNames.length).fill(type_Unknown);
            }
            return new GraceSequence(types);
        ›
    }

    method returnType {
        native "js" code ‹
            const returnType = this.theFunction.returnType;
            if (typeof returnType == "function") {
                const nrTypeParams = this.theFunction.typeParamNames.length;
                const returnTypeBlock = new GraceBlock(
                    {definitionModule: "mirror"}, 285, nrTypeParams);
                returnTypeBlock.guard = function(...args) {
                    for (let i=0; i<args.length; i++) {
                        if (! isGraceType(args[i])) return false;
                    }
                    return true;
                };
                returnTypeBlock.real = (...args) =>
                    returnType.apply(this.theFunction, args);
                const applyMeth = (argcv, ...args) => {
                    if (returnTypeBlock.guard.apply(returnTypeBlock, args))
                        return returnTypeBlock.real.apply(this.theFunction, args);
                    for (let i=0; i<args.length; i++) {
                        if (! isGraceType(args[i])) {
                            raiseException(RequestErrorObject,
                                "argument " + (i+1) + " to block (from methodMirror.returnType) is not a type.");
                        }
                    }
                };
                applyMeth.methodName = "apply(" + nrTypeParams + ")";
                applyMeth.paramCounts = [nrTypeParams];
                applyMeth.paramNames = this.theFunction.typeParamNames;
                applyMeth.definitionLine = this.theFunction.definitionLine;
                applyMeth.definitionModule = this.theFunction.definitionModule;
                returnTypeBlock.methods[applyMeth.methodName] = applyMeth;
                return returnTypeBlock;
            }
            if (returnType) {
                return returnType;
            } else {
                return type_Unknown;
            }
        ›
    }

    method typeParamNames {
        native "js" code ‹
            const graceNames = this.theFunction.typeParamNames.map(s => new GraceString(s));
            return new GraceSequence(graceNames);
        ›
    }

    method requestWithArgs(argList) {
        native "js" code ‹
            var paramcv = this.theFunction.paramCounts || [0];
            var np = (this.theFunction.paramNames) ?
                    this.theFunction.paramNames.length : 0;
            var ntp = (this.theFunction.typeParamNames) ?
                    this.theFunction.typeParamNames.length : 0;
            var providedLen = request(var_argList, "size", [0])._value;
            if ((providedLen !== np) && (providedLen != (np + ntp))) {
                const tParamPart = (ntp > 0) ? (" and " + ntp + " type arguments") : "";
                throw new GraceExceptionPacket(RequestErrorObject,
                    new GraceString("method '" + this.canonicalName + "' requires " +
                                    np + " arguments" + tParamPart +
                                    ", but was given " + providedLen + "."));
            }
            const requestArgs = [this.data.subject, this.numericName, paramcv];
            const argsIter = request(var_argList, "iterator", [0]);
            while (Grace_isTrue(request(argsIter, "hasNext", [0]))) {
                const arg = request(argsIter, "next", [0]);
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
            if (this.classUid !== var_other.classUid) {
                return GraceFalse;   // return false if other is not a methodMirror
            }
            if (this.data.subject !== var_other.data.subject) {
                return GraceFalse;   // return false if we don't have the same subject
            }
            if (this.numericName !== var_other.numericName) {
                return GraceFalse;   // return false if not the same method
            }
            return GraceTrue;
        ›
    }
}

method loadModule(moduleName) {
    // loads moduleName dynamically

    native "js" code ‹return loadDynamicModule(safeJsString(var_moduleName));›
}

method initialModuleName {
    // the name of the "main" module being run from the command line or ide

    native "js" code ‹return new GraceString(minigrace.initialModuleName);›
}

method numberOfParameters(numericName) → Number {
    def parts = numericName.split "("
    var result := 0
    (2..parts.size).do { i →
        def part_split = parts.at(i).split ")"
        def n = part_split.first.asNumber
        if (n.isNaN) then {
            intrinsic.constants.ProgrammingError.raise
                  "ill-formed numeric method name {numericName}"
        } else {
            result := result + n
        }
    }
    result
}

method isTheSame(left, right) → Boolean {
    def leftMirror = reflect(left)
    leftMirror.request "isMe(_)" withArgs [right]
}
