#pragma DefaultVisibility=public

import "io" as io
import "sys" as sys
import "mgcollections" as collections
import "util" as util
import "ast" as ast

def gctCache = collections.map.new

method parseGCT(moduleName) {
    parseGCT(moduleName) sourceDir(util.sourceDir)
}

method parseGCT(moduleName) sourceDir(dir) {
    if (gctCache.contains(moduleName)) then {
        return gctCache.get(moduleName)
    }
    def data = collections.map.new
    def sz = moduleName.size
    def sought = 
        if (moduleName.substringFrom(sz - 3) to(sz) == ".gct") then {
        moduleName
    } else {
        moduleName ++ ".gct"
    }
    def filename = util.file(sought) on(dir)
      orPath(sys.environ.at "GRACE_MODULE_PATH") otherwise {
        util.log_verbose "Can't find file {sought} for module {moduleName}"
        gctCache.put(moduleName, data)
        return data
    }
    def tfp = io.open(filename, "r")
    var key := ""
    while {!tfp.eof} do {
        def line = tfp.getline
        if (line.size > 0) then {
            if (line.at(1) != " ") then {
                key := line.substringFrom(1)to(line.size-1)
                data.put(key, collections.list.new)
            } else {
                data.get(key).push(line.substringFrom(2)to(line.size))
            }
        }
    }
    tfp.close
    gctCache.put(moduleName, data)
    return data
}

method writeGCT(path, filepath, data) {
    def fp = io.open(filepath, "w")
    for (data) do {key->
        fp.write "{key}:\n"
        for (data.get(key)) do {v->
            fp.write " {v}\n"
        }
    }
    fp.close
    gctCache.put(path, data)
}

method writeGCT(path, filepath)fromValues(values)modules(modules) {
    writeGCT(path, filepath,
        generateGCT(path)fromValues(values)modules(modules))
}
method gctAsString(data) {
    var ret := ""
    for (data) do {key->
        ret := ret ++ "{key}:\n"
        for (data.get(key)) do {v->
            ret := ret ++ " {v}\n"
        }
    }
    return ret
}
method generateGCT(path)fromValues(values)modules(modules) {
    def meths = collections.list.new
    def confidentials = collections.list.new
    var theDialect := false
    for (values) do { v->
        if (v.kind == "vardec") then {
            if (v.isReadable) then {
                meths.push(v.name.value)
            }
            if (v.isWritable) then {
                meths.push(v.name.value ++ ":=")
            }
        } elseif {(v.kind == "method").orElse {v.kind == "typedec"}} then {
            if (v.isPublic) then {
                meths.push(v.nameString)
            } else {
                confidentials.push(v.nameString)
            }
        } elseif (v.kind == "defdec") then {
            if (v.isPublic) then {
                meths.push(v.name.value)
            }
            if (ast.findAnnotation(v, "parent")) then {
                if (false != v.data) then {
                    for (v.data.elements) do {m->
                        meths.push(m)
                    }
                }
            }
        } elseif (v.kind == "class") then {
            meths.push(v.name.value)
        } elseif (v.kind == "dialect") then {
            theDialect := v.value
        } elseif (v.kind == "inherits") then {
            v.providedNames.do { each -> meths.push(each) }
        }
    }
    def gct = collections.map.new
    gct.put("modules", modules)
    gct.put("path", collections.list.new(path))
    gct.put("public", meths)
    gct.put("confidential", confidentials)
    if (false != theDialect) then {
        gct.put("dialect", collections.list.new(theDialect))
    }
    def classes = collections.list.new
    for (values) do {val->
        if (val.kind == "class") then {
            gct.put("constructors-of:{val.name.value}",
                collections.list.new(val.constructor.value))
            gct.put("methods-of:{val.name.value}.{val.constructor.value}",
                val.data.elements)
            classes.push(val.name.value)
        }
        if (val.kind == "defdec") then {
            if (val.value.kind == "object") then {
                def ob = val.value
                var isClass := false
                def obConstructors = collections.list.new
                for (ob.value) do {nd->
                    if (nd.kind == "method") then {
                        if (nd.isFresh) then {
                            isClass := true
                            obConstructors.push(nd.value.value)
                            gct.put("methods-of:{val.name.value}.{nd.value.value}",
                                ob.data.getScope(nd.value.value).elements)
                        }
                    }
                }
                if (obConstructors.size > 0) then {
                    gct.put("constructors-of:{val.name.value}",
                        obConstructors)
                    classes.push(val.name.value)
                }
            }
        }
    }
    gct.put("classes", classes)

    def freshmeths = collections.list.new
    gct.put("fresh-methods", freshmeths)
    for (values) do {val->
        if (val.kind == "method") then {
            if (val.isFresh) then {
                freshmeths.push(val.nameString)
                def freshMethResult = val.body.last
                if (freshMethResult.isObject) then {
                    gct.put("fresh:{val.nameString}",
                        freshMethResult.scope.keysAsList)
                } elseif {freshMethResult.isCall} then {
                    // we know that freshMethResult.value.isMember and 
                    // freshMethResult.value.nameString == "clone"
                    def receiver = freshMethResult.value.in
                    if ((receiver.nameString == "prelude").andAlso{
                      freshMethResult.with.first.args.first.nameString == "self"}) then {
                        gct.put("fresh:{val.nameString}", meths)
                        def key = "fresh:{val.nameString}"
                    } elseif {(receiver.nameString == "self")} then {
                        gct.put("fresh:{val.nameString}", meths)
                    } else {
                        ProgrammingError.raise 
                            "unrecognized fresh method tail-call: {freshMethResult.pretty(0)}"
                    }
                } else {
                    ProgrammingError.raise
                        "fresh method result of an unexpected kind: {freshMethResult.pretty(0)}"
                }
            }
        }
    }
    return gct
}

