import "io" as io
import "sys" as sys
import "buildinfo" as buildinfo
import "mgcollections" as mgcollections

var verbosityv := 30
var outfilev := io.output
var infilev := io.input
var modnamev := "standardInput"
var runmodev := "make"
var buildtypev := "run"
var gracelibPathv := false
var linenumv := 1
var lineposv := 1
var vtagv := false
var noexecv := false
var targetv := "c"
var extensionsv := mgcollections.map.new
var recurse is readable := true
var dynamicModule := false
var importDynamic := false
var jobs := 2
var cLines := list.empty
var lines := list.empty
var filename is readable := "standardInput.grace"


def targets = set.with("lex", "parse", "grace", "ast", "processed-ast",
    "patterns", "symbols", "imports", "c", "js")

def requiredModules is public = object {
    def static is public = set.empty
    def linkfiles is public = set.empty
    def other is public = set.empty
    method isAlready ( moduleName ) -> Boolean {
        if ( static.contains(moduleName) ) then {
            true 
        } elseif { other.contains(moduleName ) } then {
            true 
        } else {
            false
        }
    }
}

var errno is readable := 0

method parseargs {
    var argv := sys.argv
    var toStdout := false
    if (argv.size > 1) then {
        var indices := argv.indices
        var arg
        var skip := true
        for (indices) do { ai->
            arg := argv.at(ai)
            if (arg.at(1) == "-") then {
                match(arg)
                    case { "-o" ->
                        if(argv.size < (ai + 1)) then {
                            io.error.write("minigrace: -o requires an argument.\n")
                            sys.exit(1)
                        }
                        outfilev := io.open(argv.at(ai + 1), "w")
                        skip := true
                    } case { "--verbose" ->
                        verbosityv := 40
                    } case { "--help" ->
                        printhelp
                    } case { "--vtag" ->
                        skip := true
                        if(argv.size < (ai + 1)) then {
                            io.error.write("minigrace: --vtag requires an argument.\n")
                            sys.exit(1)
                        }
                        vtagv := argv.at(ai + 1)
                    } case { "--make" ->
                        runmodev := "make"
                        buildtypev := "bc"
                    } case { "--no-recurse" ->
                        recurse := false
                    } case { "--dynamic-module" ->
                        dynamicModule := true
                        runmodev := "make"
                        noexecv := true
                        buildtypev := "bc"
                    } case { "--import-dynamic" ->
                        importDynamic := true
                    } case { "--run" ->
                        buildtypev := "run"
                        runmodev := "make"
                    } case { "--source" ->
                        buildtypev := "source"
                        runmodev := "build"
                    } case { "--native" ->
                        buildtypev := "native"
                    } case { "--noexec" ->
                        noexecv := true
                        buildtypev := "bc"
                    } case { "--dir" ->
                        skip := true
                        if(argv.size < (ai + 1)) then {
                            io.error.write "minigrace: --dir requires an argument.\n"
                            sys.exit(1)
                        }
                        outDirCache := argv.at(ai + 1)
                        if (outDirCache.at(outDirCache.size) != "/") then {
                            outDirCache := outDirCache ++ "/"
                        }
                        createDirectoryIfNecessary(outDirCache)
                    } case { "--stdout" ->
                        toStdout := true
                    } case { "-" ->
                        toStdout := true
                    } case { "--module" ->
                        skip := true
                        if(argv.size < (ai + 1)) then {
                            io.error.write("minigrace: --module requires an argument.\n")
                            sys.exit(1)
                        }
                        modnamev := argv.at(ai + 1)
                    } case { "--gracelib" ->
                        skip := true
                        if(argv.size < (ai + 1)) then {
                            io.error.write("minigrace: --gracelib requires an argument.\n")
                            sys.exit(1)
                        }
                        gracelibPathv := argv.at(ai + 1)
                    } case { "--target" ->
                        skip := true
                        if(argv.size < (ai + 1)) then {
                            io.error.write "minigrace: --target requires an argument.\n"
                            sys.exit(1)
                        }
                        targetv := argv.at(ai + 1)

                        if (targetv == "help") then {
                            io.error.write "Valid targets:\n"
                            targets.asList.sort.do { t ->
                                io.error.write "  {t}\n"
                            }
                            sys.exit(0)
                        }
                    } case { "-j" ->
                        skip := true
                        if(argv.size < (ai + 1)) then {
                            io.error.write("minigrace: -j requires an argument.\n")
                            sys.exit(1)
                        }
                        jobs := argv.at(ai + 1).asNumber
                    } case { "--version" ->
                        print("minigrace version "
                            ++ "{buildinfo.gitgeneration}")
                        print("git revision " ++ buildinfo.gitrevision)
                        sys.exit(0)
                    } case { _ ->
                        if (arg.at(2) == "X") then {
                            var ext := arg.substringFrom(3)to(arg.size)
                            processExtension(ext)
                        } else {
                            io.error.write("minigrace: invalid "
                                ++ "argument {arg}.\n")
                            sys.exit(1)
                        }
                    }
            } else {
                if (skip) then {
                    skip := false
                } else {
                    filename := arg
                    try {
                        infilev := io.open(filename, "r")
                    } catch {
                        ex:EnvironmentException -> 
                            generalError ("Can't open file {filename}",
                                0, 0, "", false, sequence.empty)
                    }
                    if (modnamev == "standardInput") then {
                        var accum := ""
                        modnamev := ""
                        for (filename) do { c->
                            if (c == "/") then {
                                accum := ""
                            } elseif {c == "."} then {
                                modnamev := accum
                            } else {
                                accum := accum ++ c
                            }
                        }
                    }
                }
            }
        }
    }
    if ((false == vtagv).andAlso{outDirCache != ""}) then {
        vtagv := outDirCache.substringFrom 1 to (outDirCache.size - 1)
    }
    if ((outfilev == io.output) && {!toStdout}) then {
        outfilev := match(targetv)
            case { "c" -> io.open(outDir ++ modnamev ++ ".c", "w") }
            case { "js" -> io.open(outDir ++ modnamev ++ ".js", "w") }
            case { "parse" -> io.open(outDir ++ modnamev ++ ".parse", "w") }
            case { "lex" -> io.open(outDir ++ modnamev ++ ".lex", "w") }
            case { "processed-ast" -> io.open(outDir ++ modnamev ++ ".ast", "w") }
            case { "ast" -> io.open(outDir ++ modnamev ++ ".ast", "w") }
            case { "symbols" -> io.open(outDir ++ modnamev ++ ".symbols", "w") }
            case { "patterns" -> io.open(outDir ++ modnamev ++ ".patterns", "w") }
            case { "grace" -> io.open(outDir ++ modnamev ++ "_new.grace", "w") }
            case { _ -> 
                io.error.write("minigrace: unrecognized target '{targetv}'.\n")
                sys.exit(1)
            }
    }
    if (gracelibPathv == false) then {
        if (io.exists(sys.execPath ++ "/../lib/minigrace/gracelib.o")) then {
            gracelibPathv := sys.execPath ++ "/../lib/minigrace"
        } else {
            gracelibPathv := sys.execPath
        }
    }
    if (infilev == io.input) then {
        if (infilev.isatty) then {
            print("minigrace {buildinfo.gitgeneration} / "
                ++ buildinfo.gitrevision)
            print "Copyright © 2011-2015 rests with the authors."
            print("This is free software with absolutely no warranty. "
                ++ "Say minigrace.w for details.")
            print ""
            print "Enter a program and press Ctrl-D to execute it."
            print ""
        }
    }
}

method createDirectoryIfNecessary(d) is confidential {
    if (io.exists(d)) then { return }
    if (io.system "mkdir \"{d}\"") then { return }
    EnvironmentException.raise "Unable to create directory \"{d}\"."
}

var previousElapsed := 0
var previousCPU := 0

method log_verbose(s) {
    if (verbosityv >= 40) then {
        var vtagw := ""
        if (false != vtagv) then {
            vtagw := "[" ++ vtagv ++ "]"
        }
        def cpu = (sys.cputime * 100).rounded / 100
        def elapsed = (sys.elapsed * 100).rounded / 100
        io.error.write("minigrace{vtagw}: {modnamev}: {cpu}/"
            ++ "{elapsed} (+{cpu-previousCPU}/{elapsed-previousElapsed}): {s}\n")
        previousElapsed := elapsed
        previousCPU := cpu
    }
}

method outprint(s) {
    outfilev.write(s)
    outfilev.write("\n")
}

// This is called by various wrapper methods in the errormessages module.
// The parameters are explained as follows:
// - message: The text of the error message.
// - errlinenum: The line number on which the error occurred.
// - position: A string used to show the position of the error in the error message.
// - arr: The string used to draw an arrow showing the position of the error.
// - spacePos: The position in the error line that a space should be inserted, or false.
// - suggestions: A (possibly empty) list of suggestions to correct the error.
method syntaxError(message, errlinenum, position, arr, spacePos, suggestions) {
    generalError("Syntax error: {message}", errlinenum, position, arr, spacePos,
        suggestions)
}

method generalError(message, errlinenum, position, arr, spacePos, suggestions) {
    if (vtagv) then {
        io.error.write("[" ++ vtagv ++ "]")
    }
    io.error.write("{modnamev}.grace[{errlinenum}{position}]: {message}\n")
    if ((errlinenum > 1) && (lines.size > 1)) then {
        io.error.write("  {errlinenum - 1}: {lines.at(errlinenum - 1)}\n")
    }
    if ((lines.size >= errlinenum) && (errlinenum > 0)) then {
        var line := lines.at(errlinenum)
        if(spacePos != false) then {
            io.error.write("  {errlinenum}: {line.substringFrom(1)to(spacePos-1)} {line.substringFrom(spacePos)to(line.size)}\n")
        } else {
            io.error.write("  {errlinenum}: {line}\n")
        }
        io.error.write("{arr}\n")
    }
    if (suggestions.size > 0) then {
        for(suggestions) do { s ->
            io.error.write("\nDid you mean:\n")
            s.print
        }
    }
    sys.exit(2)
}

method type_error(s) {
    if (extensionsv.contains("IgnoreTypes")) then {
        return true
    }
    if (vtagv) then {
        io.error.write("[" ++ vtagv ++ "]")
    }
    io.error.write("{modnamev}.grace:{linenumv}:{lineposv}: Type error: {s}")
    io.error.write("\n")
    io.error.write(lines.at(linenumv) ++ "\n")
    sys.exit(2)
}
method semantic_error(s) {
    if (vtagv) then {
        io.error.write("[" ++ vtagv ++ "]")
    }
    io.error.write "{modnamev}.grace:{linenumv}:{lineposv}: Semantic error"
    if (s == "") then {
        io.error.write "\n"
        sys.exit(2)
    }
    io.error.write ": {s}\n"
    if (linenumv > 1) then {
        if (lines.size > 0) then {
            io.error.write("  {linenumv - 1}: {lines.at(linenumv - 1)}\n")
        }
    }
    var arr := "----"
    for (2..(lineposv + linenumv.asString.size)) do { _ ->
        arr := arr ++ "-"
    }
    if (lines.size >= linenumv) then {
        io.error.write("  {linenumv}: {lines.at(linenumv)}\n{arr}^\n")
    }
    if (linenumv < lines.size) then {
        io.error.write("  {linenumv + 1}: {lines.at(linenumv + 1)}\n")
    }
    sys.exit(2)
}
method warning(s) {
    io.error.write("{modnamev}.grace:{linenumv}:{lineposv}: warning: {s}")
    io.error.write("\n")
}

method verbosity {
    verbosityv
}
method outfile {
    outfilev
}
method infile {
    infilev
}
method modname {
    modnamev
}
method runmode {
    runmodev
}
method buildtype {
    buildtypev
}
method gracelibPath {
    gracelibPathv
}
method setline(l) {
    linenumv := l
}
method setPosition(l, p) {
    linenumv := l
    lineposv := p
}
method linenum {
    linenumv
}
method linepos {
    lineposv
}
method vtag {
    vtagv
}
method noexec {
    noexecv
}
method target {
    targetv
}
method extensions {
    extensionsv
}
method str(s) lastIndexOf(ch) {
    var ix := s.size
    while { ix > 0 } do {
        if (s.at(ix) == ch) then { return ix }
        ix := ix - 1
    }
    return 0
}
var sourceDirCache := ""
method sourceDir {
    if (sourceDirCache == "") then {
        sourceDirCache := filename.substringFrom 1 to (str(filename) lastIndexOf("/"))
    }
    if (sourceDirCache == "") then { sourceDirCache := "./" }
    sourceDirCache
}

var outDirCache := ""
method outDir {
    if (outDirCache == "") then {
        outDirCache := sourceDir
    }
    outDirCache
}

var execDirCache := ""
method execDir {
    if (execDirCache == "") then {
        execDirCache := sys.execPath
        if (execDirCache.at(execDirCache.size) != "/") then {
            execDirCache := execDirCache ++ "/"
        }
    }
    execDirCache
}

factory method pathName {
    var directory is public := ""
    var base is public := ""
    var extension is public := ""
    method asString { directory ++ base ++ extension }
    method asDebugString { "pathName {directory}|{base}|{extension} " }
    method setDirectory(d) {
        if (d.at(d.size) == "/") then {
            directory := d
        } else {
            directory := d ++ "/"
        }
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
        def p = pathName
        p.directory := directory
        p.base := base
        p.extension := extension
        p
    }
}
method directory(d) base(b) extension(e) {
    pathName.setDirectory(d).setBase(b).setExtension(e)
}
method pathNameFromString(s) {
    def p = pathName
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

method splitPath(pathString) -> List<String> {
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
method file(name) on(origin) orPath(pathString) otherwise(action) {
    def locations = splitPath(pathString)
    locations.addFirst(origin)
    locations.addFirst "./"
    locations.addLast(execDir)
    def candidate = name.copy

    locations.do { each ->
        candidate.setDirectory(each)
        if ( candidate.exists ) then {
            return candidate
        }
    }
    action.apply(locations)
}
method file(name) onPath(pathString) otherwise(action) {
    file(name) on(outDir) orPath(pathString) otherwise(action)
}

method processExtension(ext) {
    var extn := ""
    var extv := true
    var seeneq := false
    for (ext) do {c->
        if (c == "=") then {
            seeneq := true
            extv := ""
        } else {
            if (!seeneq) then {
                extn := extn ++ c
            } else {
                extv := extv ++ c
            }
        }
    }
    extensionsv.put(extn, extv)
}
method printhelp {
    print "Usage: {sys.argv.at(1)} [OPTION]... [FILE]"
    print "Compile, process, or run a Grace source file or standard input."
    print ""
    print "Modes:"
    print "  --make           Compile FILE and link, creating a native executable"
    print "  --run            Compile FILE and execute the program [default]"
    print "  --source         Compile FILE to C source, but no further"
    print "  --noexec         Compile FILE to native object code, but don't create executable"
    print "  --dynamic-module Compile FILE as a dynamic module"
    print ""
    print "Options:"
    print "  --dir DIR        Use the directory DIR for generated output files,"
    print "                   and for .gct files of imported modules"
    print "  --help           This text"
    print "  --module         Override default module name (derived from FILE)"
    print "  --no-recurse     Do not compile imported modules"
    print "  -o OFILE         Output to OFILE instead of default"
    print "  --stdout         Output to standard output rather than a file"
    print "  --target TGT     Choose a non-default compilation target TGT"
    print "                   Use --target help to list supported targets."
    print "  --verbose        Give more detailed output"
    print "  --version        Print version information"
    print ""
    print "By default, {sys.argv.at(1)} FILE will compile and execute FILE."
    print "More detailed usage information is in the <doc/usage> file in the source tree."
    sys.exit(0)
}
method debug(s) {

}
var hexdigits := "0123456789abcdef"
method hex(num) {
    var tmp := num
    var s := ""
    while {tmp > 0} do {
        var i := tmp % 16
        s := hexdigits.at(i + 1) ++ s
        tmp := tmp - i
        tmp := tmp / 16
    }
    s
}
