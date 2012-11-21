#pragma DefaultVisibility=public

import "io" as io
import "sys" as sys
import "mgcollections" as collections
import "util" as util

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
