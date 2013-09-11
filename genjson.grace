import "mgcollections" as collections
import "util" as util
import "io" as io
import "ast" as ast

method wrap(v) {
    match(v)
        case { _ : String -> JSString.new(v) }
        case { _ : Boolean -> JSBoolean.new(v) }
        case { _ -> v }
}
class JSObj.new {
    def data = collections.map.new
    method put(key, val) {
        data.put(key, wrap(val))
    }
    method asJSON {
        var ret := "\{"
        var comma := ""
        for (data) do {k->
            ret := ret ++ comma ++ "\"{k}\": " ++ data.get(k).asJSON
            comma := ","
        }
        return ret ++ "}"
    }
}

class JSArray.new {
    def data = collections.list.new
    method push(val) {
        data.push(wrap(val))
    }
    method asJSON {
        var ret := "["
        var comma := ""
        for (data) do {v->
            ret := ret ++ comma ++ v.asJSON
            comma := ","
        }
        return ret ++ "]"
    }
}

class JSString.new(s) {
    def data = s
    method asJSON {
        return "\"{data}\""
    }
}
class JSBoolean.new(b) {
    def data = b
    method asJSON {
        return "{data}"
    }
}

method generateNode(n) {
    def ret = JSObj.new
    match (n.kind)
        case { "vardec" ->
            ret.put("type", "vardec")
            ret.put("name", n.name.value)
            ret.put("value", generateNode(n.value))
        } case { "defdec" ->
            ret.put("type", "defdec")
            ret.put("name", n.name.value)
            ret.put("value", generateNode(n.value))
        } case { "string" ->
            ret.put("type", "string")
            ret.put("value", n.value)
        } case { "num" ->
            ret.put("type", "number")
            ret.put("value", n.value)
        } case { "op" ->
            ret.put("type", "operator")
            ret.put("left", generateNode(n.left))
            ret.put("right", generateNode(n.right))
            ret.put("operator", n.value)
        } case { "bind" ->
            if (n.dest.kind == "member") then {
                if (n.dest.in.value == "prelude") then {
                    ret.put("type", "dialect-method")
                    ret.put("name", n.dest.value ++ ":=")
                    def parts = JSArray.new
                    ret.put("parts", parts)
                    def part = JSArray.new
                    parts.push(part);
                    part.push(generateNode(n.value))
                } else {
                    if (n.dest.in.value == "self") then {
                        ret.put("type", "assign")
                        def ident = ast.identifierNode.new(n.dest.value, false)
                        ret.put("left", generateNode(ident))
                        ret.put("right", generateNode(n.value))
                    } else {
                        ret.put("type", "unknown assign")
                    }
                }
            } else {
                ret.put("type", "assign")
                ret.put("left", generateNode(n.dest))
                ret.put("right", generateNode(n.value))
            }
        } case { "method" ->
            ret.put("type", "method")
            ret.put("name", n.value.value)
            def args = JSArray.new
            for (n.signature.at(1).params) do {p->
                args.push(p.value)
            }
            ret.put("arg", args)
            def body = JSArray.new
            for (n.body) do {v->
                body.push(generateNode(v))
            }
            ret.put("body", body)
        } case { "inherits" ->
            ret.put("type", "inherits")
            ret.put("parent", generateNode(n.value))
        } case { "object" ->
            ret.put("type", "object")
            def body = JSArray.new
            for (n.value) do {v->
                body.push(generateNode(v))
            }
            ret.put("body", body)
        } case { "class" ->
            ret.put("type", "class")
            ret.put("name", n.name.value)
            ret.put("constructor", n.constructor.value)
            def args = JSArray.new
            for (n.signature.at(1).params) do {p->
                args.push(p.value)
            }
            ret.put("args", args)
            def body = JSArray.new
            for (n.value) do {v->
                body.push(generateNode(v))
            }
            ret.put("body", body)
        } case { "if" ->
            if (n.elseblock.size > 0) then {
                def mn = ast.callNode.new(
                    ast.memberNode.new("if()then()else",
                        ast.identifierNode.new("prelude", false)),
                    [ast.callWithPart.new("if", [n.value]),
                        ast.callWithPart.new("then",
                            [ast.blockNode.new([], n.thenblock)]),
                        ast.callWithPart.new("else",
                            [ast.blockNode.new([], n.elseblock)])
                        ])
                return generateNode(mn)
            } else {
                def mn = ast.callNode.new(
                    ast.memberNode.new("if()then",
                        ast.identifierNode.new("prelude", false)),
                    [ast.callWithPart.new("if", [n.value]),
                        ast.callWithPart.new("then",
                            [ast.blockNode.new([], n.thenblock)])
                        ])
                return generateNode(mn)
            }
        } case { "identifier" ->
            ret.put("type", "var")
            ret.put("value", n.value)
        } case { "call" ->
            if (n.value.kind == "member") then {
                var memName := n.value.value
                if (memName.substringFrom(memName.size - 7)to(memName.size) ==
                        "()object") then {
                    memName := memName.substringFrom(1)to(memName.size - 8)
                }
                if (n.value.in.value == "prelude") then {
                    ret.put("name", memName)
                    ret.put("type", "dialect-method")
                    def parts = JSArray.new
                    ret.put("parts", parts)
                    for (n.with) do {part->
                        def thisPart = JSArray.new
                        parts.push(thisPart)
                        for (part.args) do {arg->
                            thisPart.push(generateNode(arg))
                        }
                    }
                } else {
                    if (n.value.in.value == "self") then {
                        if (n.with.size > 1) then {
                            ret.put("name", n.value.value)
                            ret.put("type", "dialect-method")
                            def parts = JSArray.new
                            ret.put("parts", parts)
                            for (n.with) do {part->
                                def thisPart = JSArray.new
                                parts.push(thisPart)
                                for (part.args) do {arg->
                                    thisPart.push(generateNode(arg))
                                }
                            }
                        } else {
                            ret.put("type", "selfcall")
                            ret.put("name", memName)
                            def args = JSArray.new
                            for (n.with.at(1).args) do {arg->
                                args.push(generateNode(arg))
                            }
                            ret.put("args", args)
                        }
                    } else {
                        if (n.value.in.value == "outer") then {
                            ret.put("type", "selfcall")
                            ret.put("name", memName)
                            def args = JSArray.new
                            for (n.with.at(1).args) do {arg->
                                args.push(generateNode(arg))
                            }
                            ret.put("args", args)
                            ret.put("isRequest", true)
                        } else {
                            ret.put("type", "request")
                            ret.put("receiver", generateNode(n.value.in))
                            ret.put("name", memName)
                            def args = JSArray.new
                            for (n.with.at(1).args) do {arg->
                                args.push(generateNode(arg))
                            }
                            ret.put("args", args)
                        }
                    }
                }
            } else {
                ret.put("type", "unknown call")
                print "    {n.pretty(4)}"
            }
        } case { "member" ->
            if (n.in.value == "outer") then {
                ret.put("type", "selfcall")
                ret.put("name", n.value)
                ret.put("args", JSArray.new)
                ret.put("isRequest", true)
            } else {
                ret.put("type", "request")
                ret.put("receiver", generateNode(n.in))
                ret.put("name", n.value)
                ret.put("args", JSArray.new)
            }
        } case { "block" ->
            ret.put("type", "block")
            def params = JSArray.new
            ret.put("params", params)
            for (n.params) do {p->
                params.push(p.value)
            }
            def body = JSArray.new
            ret.put("body", body)
            for (n.body) do {p->
                body.push(generateNode(p))
            }
        } case { _ ->
            ret.put("type", "UNKNOWN")
            ret.put("internalKind", n.kind)
        }
    return ret
}

var lastToken := object {def kind is readable = ""}
method saveToken(token) {
    lastToken := token
}

method generate(values, outfile) {
    util.log_verbose "generating JSON."
    def chunkLocations = collections.list.new
    if (lastToken.kind == "comment") then {
        def cmt = lastToken.value
        if (cmt.substringFrom(1)to(9) == " chunks: ") then {
            var accum := "";
            var leftAccum := ""
            for (cmt.substringFrom(10)to(cmt.size)) do {c->
                if (c == " ") then {
                    chunkLocations.push(object {
                        def top is readable = accum
                        def left is readable = leftAccum
                    })
                    accum := ""
                } else {
                    if (c == ",") then {
                        leftAccum := accum
                        accum := ""
                    } else {
                        accum := accum ++ c
                    }
                }
            }
            chunkLocations.push(object {
                def top is readable = accum
                def left is readable = leftAccum
            })
            accum := ""
        }
    }
    if (chunkLocations.size == 0) then {
        chunkLocations.push(object {
            def top is readable = "10px"
            def left is readable = "10px"
        })
    }
    def overall = JSObj.new
    def arr = JSArray.new
    overall.put("chunks", arr)
    var chunkIndex := 1
    var chunk := JSObj.new
    arr.push(chunk)
    chunk.put("type", "chunk")
    chunk.put("x", chunkLocations.at(chunkIndex).left)
    chunk.put("y", chunkLocations.at(chunkIndex).top)
    var body := JSArray.new
    chunk.put("body", body)
    for (values) do {v->
        if (v.kind == "dialect") then {
            overall.put("dialect", v.value)
        } else {
            if (v.kind == "blank") then {
                chunkIndex := chunkIndex + 1
                if (chunkLocations.size < chunkIndex) then {
                    chunkLocations.push(object {
                        def top is readable = "{chunkIndex * 10}px"
                        def left is readable = "{chunkIndex * 10}px"
                    })
                }
                chunk := JSObj.new
                arr.push(chunk)
                chunk.put("type", "chunk")
                chunk.put("x", chunkLocations.at(chunkIndex).left)
                chunk.put("y", chunkLocations.at(chunkIndex).top)
                body := JSArray.new
                chunk.put("body", body)
            } else {
                body.push(generateNode(v))
            }
        }
    }
    outfile.write(overall.asJSON ++ "\n")
}
