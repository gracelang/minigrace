#pragma ExtendedLineups
import "io" as io
import "sys" as sys
import "unixFilePath" as filePath
import "stringMap" as map

def defaultVerbosity is public = 30
var verbosity is public := defaultVerbosity
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
var extensionsv := map.new
var recurse is readable := true
var dynamicModule := false
var importDynamic := false
var jobs := 2
def cLines is readable = [ ]
def lines is readable = [ ]
def nullFile = filePath.null        // don't modify this one
var filename is readable := nullFile
var commandLineExtensions is readable := ""


def targets = set ["lex", "parse", "grace", "ast", "processed-ast",
    "patterns", "symbols", "imports", "c", "js"]

def requiredModules is public = object {
    def static is public = emptySet
    def linkfiles is public = emptySet
    def other is public = emptySet
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
                            list(targets).sort.do { t ->
                                io.error.write "  {t}\n"
                            }
                            sys.exit(0)
                        }
                    } case { "-j" ->
                        skip := true
                        if(argv.size < (ai + 1)) then {
                            startupFailure "-j requires an argument."
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
            case { "c" -> io.open(outDir ++ modnamev ++ ".c", "w") }
            case { "js" -> io.open(outDir ++ modnamev ++ ".js", "w") }
            case { "parse" -> io.open(outDir ++ modnamev ++ ".parse", "w") }
            case { "lex" -> io.open(outDir ++ modnamev ++ ".lex", "w") }
            case { "processed-ast" -> io.open(outDir ++ modnamev ++ ".ast", "w") }
            case { "ast" -> io.open(outDir ++ modnamev ++ ".ast", "w") }
            case { "symbols" -> io.open(outDir ++ modnamev ++ ".symbols", "w") }
            case { "patterns" -> io.open(outDir ++ modnamev ++ ".patterns", "w") }
            case { "grace" -> io.open(outDir ++ modnamev ++ "_new.grace", "w") }
            case { "imports" -> io.output }
            case { _ ->
                startupFailure "unrecognized target '{targetv}'."
            }
    }
    if ((target != "c") && (target != "js")) then {
        buildtypev := "debug"
    }
    if ((buildtype == "run") && (gracelibPathv == false)) then {
        def extension = if (target == "c") then { ".o" } else { "." ++ target }
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

method log_verbose(s) {
    log (defaultVerbosity + 1) verbose (s)
}

method log(level) verbose(s) {
    if (verbosity >= level) then {
        var vtagw := ""
        if (false != vtagv) then {
            vtagw := "[" ++ vtagv ++ "]"
        }
        def elapsed = (sys.elapsed * 100).rounded / 100
        io.error.write("minigrace{vtagw}: {modnamev}: "
            ++ "{elapsed} (+{elapsed - previousElapsed}): {s}\n")
        previousElapsed := elapsed
    }
}

method outprint(s) {
    outfilev.write(s)
    outfilev.write("\n")
}


method syntaxError(message, errlinenum, position, arr, spacePos, suggestions) {
    // Used by various wrapper methods in the errormessages module.
    // The parameters mean:
    //   - message: The text of the error message.
    //   - errlinenum: The line number on which the error occurred.
    //   - position: A string used to show the position of the error in the error message.
    //   - arr: The string used to draw an arrow showing the position of the error.
    //   - spacePos: The position in the error line that a space should be inserted, or false.
    //   - suggestions: A (possibly empty) list of suggestions to correct the error.
    generalError("Syntax error: {message}", errlinenum, position, arr, spacePos,
        suggestions)
}

method startupFailure (message) {
    // Terminates the compilation because of an error in the commmand line

    io.error.write "{sys.argv.at(1)}: "
    io.error.write (message)
    io.error.write "\n"
    sys.exit 1
}


method generalError(message, errlinenum, position, arr, spacePos, suggestions) {
    if (false ≠ vtagv) then {
        io.error.write("[" ++ vtagv ++ "]")
    }
    io.error.write("{modnamev}.grace[{errlinenum}{position}]: {message}\n")
    if ((errlinenum > 1) && (lines.size >= (errlinenum - 1))) then {
        io.error.write("  {errlinenum - 1}: {lines.at(errlinenum - 1)}\n")
    }
    if ((errlinenum > 0) && (lines.size >= errlinenum)) then {
        io.error.write "  {errlinenum}: {lines.at(errlinenum)}\n"
        io.error.write "{arr}\n"
    }
    if (suggestions.size > 0) then {
        for(suggestions) do { s ->
            io.error.write "\nDid you mean:\n"
            s.print
        }
    }
    sys.exit(2)
}

method type_error(s) {
    if (extensionsv.contains("IgnoreTypes")) then {
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

method sourceDir { filename.directory }

var outDirCache := ""
var dirFlag is readable := false
method outDir {
    if (outDirCache == "") then {
        outDirCache := sourceDir
    }
    outDirCache
}
method outDir:=(new) {
    // this method exists for testing, in particular, t179_gctTypeInformation_test
    outDirCache := new
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

method file(name) on(origin) orPath(pathString) otherwise(action) {
    def locations = filePath.split(pathString)
    locations.addFirst(origin)
    if (locations.contains(execDir).not) then { locations.addLast(execDir) }
    def candidate = name.copy
    def originalDir = name.directory
    if ((originalDir.size > 0) && {originalDir.first == "/"}) then {
        if (candidate.exists) then {
            return candidate
        } else {
            return action.apply ""
        }
    }
    locations.do { each ->
        candidate.setDirectory(each ++ originalDir)
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
    print "  --make           Compile FILE and link, creating a executable"
    print "  --run            Compile FILE and execute the program [default]"
    print "  --source         Compile FILE to C source, but no further"
    print "  --noexec         Compile FILE to object code, but don't create executable"
    print "  --dynamic-module Compile FILE as a dynamic module"
    print ""
    print "Options:"
    print "  --dir DIR        Use the directory DIR for generated output files,"
    print "                   and for .gct files of imported modules"
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
