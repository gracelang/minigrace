import "io" as io

factory method null {
    // creates a unixFilePath with empty components
    var dir := ""
    var base is public := ""
    var extension is public := ""
    method asString { dir ++ base ++ extension }
    method shortName { base ++ extension }
    method asDebugString { "unixFilePath[{dir}|{base}|{extension}]" }
    method directory {
        if (dir == "") then { "./" } else { dir }
    }
    method directory:=(d) {
        var newDir := d
        if (newDir == "") then {
            dir := ""
            return
        }
        if (newDir.at(newDir.size) != "/") then {
            newDir := newDir ++ "/"
        }
        if (newDir == "./") then { newDir := "" }
        dir := newDir
    }
    method setDirectory(d) {
        directory := d
        self
    }
    method setBase(b) {
        base := b
        self
    }
    method setExtension(e) {
        if (e.first == ".") then {
            extension := e
        } else {
            extension := "." ++ e
        }
        self
    }
    method exists -> Boolean {
        io.exists(self.asString)
    }
    method newer(pn) -> Boolean {
        io.newer(self.asString, pn.asString)
    }

    method copy {
        def p = null
        p.directory := directory
        p.base := base
        p.extension := extension
        p
    }
}

method withDirectory(d) {
    null.setDirectory(d)
}

method withBase(b) {
    null.setBase(b)
}

method withExtension(e) {
    null.setExtension(e)
}

method withDirectory(d) base(b) extension(e) {
    // creates a unixFilePath with directory d, base b and extension e
    null.setDirectory(d).setBase(b).setExtension(e)
}

method fromString(s) {
    // parses the filename s into components and answers the approriate unixFilePath
    def p = null
    var slashPosn := 0
    def sSize = s.size
    var ix := sSize
    while { (slashPosn == 0) && (ix > 0) } do {
        if (s.at(ix) == "/") then {
            slashPosn := ix
        } else { 
            ix := ix - 1 
        }
    }
    p.directory := s.substringFrom 1 to (slashPosn)
    var dotPosn := sSize + 1
    ix := sSize
    while { (dotPosn > sSize) && (ix > slashPosn) } do {
        if (s.at(ix) == ".") then {
            dotPosn := ix
        } else {
            ix := ix - 1
        }
    }
    if (dotPosn <= sSize) then {
        p.extension := s.substringFrom (dotPosn) to (sSize)
    }
    p.base := s.substringFrom (slashPosn + 1) to (dotPosn - 1)
    p
}

method split(pathString) -> List<String> {
    // splits pathString, assumed to be a Unix PATH, into a List of 
    // items on colons.  Ensures that each item ends with /  
    def locations = list.empty
    var ix := 1
    var ox := 1
    def pss = pathString.size
    while { ox <= pss } do {
        while { (ox <= pss).andAlso{pathString.at(ox) != ":"} } do {
            ox := ox + 1 
        }
        var item := pathString.substringFrom(ix) to(ox-1)
        if (item.at(item.size) != "/") then { item := item ++ "/" }
        locations.addLast (item)
        ix := ox + 1
        ox := ix
    }
    return locations
}