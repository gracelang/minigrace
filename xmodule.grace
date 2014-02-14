#pragma DefaultVisibility=public

import "io" as io
import "sys" as sys
import "mgcollections" as collections
import "util" as util
import "ast" as ast

def gctCache = collections.map.new

method parseGCT(path, filepath) {
    if (gctCache.contains(path)) then {
        return gctCache.get(path)
    }
    def data = collections.map.new
    util.runOnNew {} else { return data }
    if (io.exists(filepath)) then {
        def tfp = io.open(filepath, "r")
        var key := ""
        while {!tfp.eof} do {
            def line = tfp.getline
            if (line.at(1) != " ") then {
                key := line.substringFrom(1)to(line.size-1)
                data.put(key, collections.list.new)
            } else {
                data.get(key).push(line.substringFrom(2)to(line.size))
            }
        }
        tfp.close
    }
    gctCache.put(path, data)
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
    def methods = collections.list.new
    def confidentials = collections.list.new
    var theDialect := false
    for (values) do { v->
        if (v.kind == "vardec") then {
            if (ast.isPublic(v)) then {
                methods.push(v.name.value)
                if (ast.isWritable(v)) then {
                    methods.push(v.name.value ++ ":=")
                }
            }
        } elseif (v.kind == "method") then {
            if (ast.isPublic(v)) then {
                methods.push(v.value.value)
            } else {
                confidentials.push(v.value.value)
            }
        } elseif (v.kind == "defdec") then {
            if (ast.isPublic(v)) then {
                methods.push(v.name.value)
            }
            if (ast.findAnnotation(v, "parent")) then {
                if (false != v.data) then {
                    for (v.data.elements) do {m->
                        methods.push(m)
                    }
                }
            }
        } elseif (v.kind == "class") then {
            methods.push(v.name.value)
        } elseif (v.kind == "type") then {
            methods.push(v.value)
        } elseif (v.kind == "dialect") then {
            theDialect := v.value
        }
    }
    def gct = collections.map.new
    gct.put("modules", modules)
    gct.put("path", collections.list.new(path))
    gct.put("public", methods)
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
                        if (nd.properties.contains("fresh")) then {
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
    for (values) do {val->
        if (val.kind == "method") then {
            if (val.properties.contains("fresh")) then {
                freshmeths.push(val.value.value)
            }
        }
    }
    gct.put("fresh-methods", freshmeths)
    for (values) do {val->
        if (val.kind == "method") then {
            if (val.properties.contains("fresh")) then {
                gct.put("fresh:{val.value.value}",
                    val.properties.get("fresh").elements)
            }
        }
    }
    return gct
}
