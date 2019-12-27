dialect "standard"
import "io" as io
import "sys" as sys
import "unixFilePath" as filePath
import "fastDict" as map

def defaultVerbosity is public = 30
def defaultTarget is public = "js"
var verbosity is public := defaultVerbosity
var outfilev := io.output
var infilev := io.input
var modnamev := "standardInput"
var buildtypev := "run"
var gracelibPathv := false
var linenumv := 1
var lineposv := 1
var vtagv := false
var noexecv := false
var targetv := defaultTarget
var extensionsv := map.dictionary.empty
var recurse is readable := true
var dynamicModule is public := false
def cLines is readable = list [ ]
def lines is readable = list [ ]
def nullFile = filePath.null        // don't modify this one
var filename is readable := nullFile
var commandLineExtensions is readable := ""


def targets = set.withAll [
    "lex", "parse", "grace", "ast", "processed-ast", "symbols", "imports", "js"
]

var errno is readable := 0

method parseargs(buildinfo) {
    var argv := sys.argv
    var toStdout := false
    if (argv.size > 1) then {
        var indices := argv.indices
        var arg
        var skip := true
        for (indices) do { ai->
            arg := argv.at(ai)
            if (!skip && (arg.at(1) == "-")) then {
                match(arg)
                  case { "-o" ->
                        if(argv.size < (ai + 1)) then {
                            startupFailure "-o requires an argument."
                        }
                        outfilev := io.open(argv.at(ai + 1), "w")
                        skip := true
                } case { "--verbose" ->
                    verbosity := 40
                    if (argv.size >= (ai + 1)) then {
                        def nextArg = argv.at(ai + 1)
                        def firstCh = nextArg.at(1)
                        if ((firstCh >= "0") && (firstCh <= "9")) then {
                            skip := true
                            verbosity := nextArg.asNumber
                        }
                    }
                } case { "--help" ->
                    printhelp
                } case { "--vtag" ->
                    skip := true
                    if(argv.size < (ai + 1)) then {
                        startupFailure "--vtag requires an argument."
                    }
                    vtagv := argv.at(ai + 1)
                } case { "--make" ->
                    buildtypev := "bc"
                } case { "--no-recurse" ->
                    recurse := false
                } case { "--run" ->
                    buildtypev := "run"
                } case { "--dir" ->
                    skip := true
                    if(argv.size < (ai + 1)) then {
                        startupFailure "--dir requires an argument."
                    }
                    outDirCache := argv.at(ai + 1)
                    dirFlag := true
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
                        startupFailure "--module requires an argument."
                    }
                    modnamev := argv.at(ai + 1)
                } case { "--gracelib" ->
                    skip := true
                    if(argv.size < (ai + 1)) then {
                        startupFailure "--gracelib requires an argument."
                    }
                    gracelibPathv := argv.at(ai + 1)
                } case { "--target" ->
                    skip := true
                    if(argv.size < (ai + 1)) then {
                        startupFailure "--target requires an argument."
                    }
                    targetv := argv.at(ai + 1)

                    if (targetv == "help") then {
                        io.error.write "Valid targets:\n"
                        list.withAll(targets).sort.do { t ->
                            io.error.write "  {t}\n"
                        }
                        sys.exit(0)
                    }
                } case { "--gctfile" ->
                    extensionsv.at "gctfile" put true
                } case { "--version" ->
                    print("minigrace version "
                        ++ "{buildinfo.gitgeneration}")
                    print("git revision " ++ buildinfo.gitrevision)
                    sys.exit(0)
                } else {
                    if (arg.at(2) == "X") then {
                        var ext := arg.substringFrom(3)to(arg.size)
                        commandLineExtensions := "{commandLineExtensions} {arg}"
                        processExtension(ext)
                    } else {
                        startupFailure "invalid argument {arg}."
                    }
                }
            } else {
                if (skip) then {
                    skip := false
                } elseif { filename == nullFile } then {
                    filename := filePath.fromString(arg)
                    if (filename.extension != ".grace") then {
                        startupFailure "filename '{filename}' does not end with '.grace'."
                    }
                    try {
                        infilev := io.open(filename.asString, "r")
                    } catch {
                        ex:EnvironmentException ->
                            startupFailure "can't open file {filename}"
                    }
                    if (modnamev == "standardInput") then {
                        modnamev := filename.base
                    }
                } else {
                    startupFailure "please provide a single Grace file."
                }
            }
        }
    }
    if ((false == vtagv) && {outDirCache != ""}) then {
        vtagv := outDirCache.substringFrom 1 to (outDirCache.size - 1)
    }
    if ((outfilev == io.output) && {!toStdout}) then {
        outfilev := match(targetv)
            case { "js" -> io.open(outDir ++ modnamev ++ ".js", "w") }
            case { "parse" -> io.open(outDir ++ modnamev ++ ".parse", "w") }
            case { "lex" -> io.open(outDir ++ modnamev ++ ".lex", "w") }
            case { "processed-ast" -> io.open(outDir ++ modnamev ++ ".ast", "w") }
            case { "ast" -> io.open(outDir ++ modnamev ++ ".ast", "w") }
            case { "symbols" -> io.open(outDir ++ modnamev ++ ".symbols", "w") }
            case { "grace" -> io.open(outDir ++ modnamev ++ "_new.grace", "w") }
            case { "imports" -> io.output }
            else { startupFailure "unrecognized target '{targetv}'." }
    }
    if (target != "js") then {
        buildtypev := "debug"
    }
    if ((buildtype == "run") && (gracelibPathv == false)) then {
        def extension = "." ++ target
        def soughtLibrary = filePath.withDirectory(execDir)
                                base "gracelib" extension(extension)
        if (soughtLibrary.exists) then {
            gracelibPathv := execDir
        } else {
            soughtLibrary.directory := ""
            def gracelib = file (soughtLibrary)
                onPath (sys.environ.at "GRACE_MODULE_PATH")
                otherwise { locs ->
                    startupFailure("can't find {soughtLibrary.shortName};\n" ++
                          "looked in {locs}.")
            }
            gracelibPathv := gracelib.directory
        }
    }
    if ((infilev == io.input) && {infilev.isatty}) then {
        print("minigrace {buildinfo.gitgeneration} / "
            ++ buildinfo.gitrevision)
        print "Copyright © 2011-2019 rests with the authors."
        print "This is free software with absolutely no warranty. "
        print ""
        print "Provide a program on standard input, or put the name of a file containing"
        print "the program on the command line.  This will compile & execute it"
        print ""
        var executable := sys.argv.at 1
        def cwd = sys.cwd
        if (executable.startsWith(cwd)) then {
            executable := executable.substringFrom(cwd.size + 1)
        }
        print "For help, execute {executable} --help"
    }
}

method createDirectoryIfNecessary(d) is confidential {
    if (io.exists(d)) then { return }
    if (io.system "mkdir \"{d}\"") then { return }
    EnvironmentException.raise "Unable to create directory \"{d}\"."
}

var previousElapsed := 0

method log_verbose(s) {
    log (defaultVerbosity + 1) verbose (s)
}

method log(level) verbose(s) {
    if (verbosity >= level) then {
        var vtagw := ""
        if (false != vtagv) then {
            vtagw := "[" ++ vtagv ++ "]"
        }
        def elapsed = (sys.elapsedTime * 100).rounded / 100
        io.error.write("minigrace{vtagw}: {modnamev}: "
            ++ "{elapsed} (+{elapsed - previousElapsed}): {s}\n")
        previousElapsed := elapsed
    }
}

method outprint(s) {
    outfilev.write(s)
    outfilev.write("\n")
}

method startupFailure (message) {
    // Terminates the compilation because of an error in the commmand line

    io.error.write "{sys.argv.at(1)}: "
    io.error.write (message)
    io.error.write "\n"
    sys.exit 1
}

def lineNumberWidth = 4
def leader = "-" * (lineNumberWidth+2)  // +2 for the ": " between number and line

method padl(num) {
    def str = num.asString
    (" " * (lineNumberWidth - str.size)) ++ str
}

method generalError(message, errlinenum, position, arr, suggestions) {
    if (false ≠ vtagv) then {
        io.error.write("[" ++ vtagv ++ "]")
    }
    io.error.write("{modnamev}.grace[{errlinenum}:{position}]: {message}\n")
    if ((errlinenum > 1) && (lines.size >= (errlinenum - 1))) then {
        io.error.write("{padl(errlinenum - 1)}: {lines.at(errlinenum - 1)}\n")
    }
    if ((errlinenum > 0) && (lines.size >= errlinenum)) then {
        io.error.write "{padl(errlinenum)}: {lines.at(errlinenum)}\n"
        io.error.write "{leader}{arr}\n"
    }
    if (suggestions.size > 0) then {
        for(suggestions) do { s ->
            io.error.write "\nDid you mean:\n"
            s.print
        }
    }
    def outputfilePath = outfile.pathname
    outfile.close
    if (outputfilePath ≠ "/dev/null") then {
        io.spawn("/bin/rm", ["-f", outputfilePath]) // remove the bad output file
    }
    sys.exit(2)
}

method type_error(s) {
    if (extensionsv.containsKey("IgnoreTypes")) then {
        return true
    }
    if (false ≠ vtagv) then {
        io.error.write("[" ++ vtagv ++ "]")
    }
    io.error.write("{modnamev}.grace:{linenumv}:{lineposv}: Type error: {s}")
    io.error.write("\n")
    io.error.write(lines.at(linenumv) ++ "\n")
    sys.exit(2)
}
method semantic_error(s) {
    if (false ≠ vtagv) then {
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
            io.error.write("{padl(linenumv - 1)}: {lines.at(linenumv - 1)}\n")
        }
    }
    def arr = "-" * (lineNumberWidth + lineposv)

    if (lines.size >= linenumv) then {
        io.error.write("{padl(linenumv)}: {lines.at(linenumv)}\n{leader}{arr}^\n")
    }
    if (linenumv < lines.size) then {
        io.error.write("{padl(linenumv + 1)}: {lines.at(linenumv + 1)}\n")
    }
    sys.exit(2)
}
method warning(s) {
    io.error.write("{modnamev}.grace:{linenumv}:{lineposv}: warning: {s}")
    io.error.write("\n")
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

method sourceDir { filename.absolute.directory }

var outDirCache := ""
var dirFlag is readable := false
method outDir {
    if (outDirCache == "") then {
        outDirCache := sourceDir
    }
    outDirCache
}
method outDir := (new) {
    // this method exists for testing, in particular, t179
    outDirCache := new
}
method gracelibPath := (new) {
    // this method exists for testing, in particular, t179
    gracelibPathv := new
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

method file(name) onPath(pathString) otherwise(action) {
    // Returns the path of a file with base name that exists in origin, or on
    // a path in pathString, or in the output directory, or in the directory
    // where this executable is located.
    // If multiple such files exist, the first one found is returned.
    // If none exists, applies action to the list of directories that were tried

    def locations = filePath.split(pathString)
    if (locations.contains(outDir).not) then { locations.addFirst(outDir) }
        // it's important that outDir is first; if not, the compiler
        // might compile an imported file, but then be unable to find the
        // code that it just generated.
    if (locations.contains(execDir).not) then { locations.addLast(execDir) }
    def candidate = filePath.fromString(name.asString)
    def originalDir = name.directory
    if (originalDir.first == "/") then {
        if (candidate.exists) then {
           return candidate
        } else {
            return action.apply(list [originalDir])
        }
    }
    locations.do { each ->
        candidate.setDirectory(each ++ originalDir)
        if (candidate.exists) then { return candidate }
    }
    action.apply(locations)
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
    extensionsv.at (extn) put (extv)
}
method printhelp {
    print "Usage: {sys.argv.at(1)} [Mode] [Option]... FILE"
    print "Compile, process, or run a Grace source file."
    print ""
    print "Modes:"
    print "  --make           Compile FILE, creating an executable."
    print "  --run            Compile FILE and execute the program [default]."
    print ""
    print "Options:"
    print "  --dir DIR        Use the directory DIR for generated output files,"
    print "                   and for .gct files of imported modules."
    print "  --gctfile        Write a separate gct file, in addition to putting the"
    print "                   gct information in the compiled code."
    print "  --gracelib DIR   Look in DIR for gracelib.  If not specified, looks in"
    print "                   the same directory as {sys.argv.at(1)}, and then on GRACE_MODULE_PATH."
    print "  --help           This text"
    print "  --module         Override default module name (derived from FILE)"
    print "  --no-recurse     Do not compile imported modules"
    print "  -o OFILE         Output to OFILE instead of default"
    print "  --stdout         Output to standard output rather than a file"
    print "  --target TGT     Choose a non-default compilation target TGT"
    print "                   Use --target help to list supported targets."
    print "  --verbose n      Give more detailed output (n is optional, default 40)"
    print "                      n ≥ 20 lists unexpected situations during compilation"
    print "                      n ≥ 40 also lists phases of the compilation"
    print "                      n ≥ 50 also lists initiation of sub-compiles"
    print "                      n ≥ 60 also describes searches for imports"
    print "                      n ≥ 100 also describes import logic"
    print "  --version        Print version information"
    print "  -Xprag           equivalent to putting `#pragma prag` in FILE"
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
