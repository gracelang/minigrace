#pragma DefaultVisibility=public
import "io" as io
import "sys" as sys
import "buildinfo" as buildinfo
import "mgcollections" as mgcollections

var __compilerRevision := false
var verbosityv := 30
var outfilev := io.output
var infilev := io.input
var modnamev := "stdin_minigrace"
var runmodev := "make"
var buildtypev := "run"
var interactivev := false
var gracelibPathv := false
var linenumv := 1
var lineposv := 1
var vtagv := false
var noexecv := false
var targetv := "c"
var versionNumber := "0.0.8"
var extensionsv := mgcollections.map.new
var recurse := true
var dynamicModule := false
var importDynamic := false
var jobs := 2
var cLines := []
var lines := []

var errno := 0

method runOnNew(b)else(e) {
    if ((__compilerRevision != "d5f6522d5c5e3f5b1f40d77502a66954955d0e5a")
        && (__compilerRevision != false)) then {
        b.apply
    } else {
        e.apply
    }
}

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
                            io.error.write("minigrace: -o requires argument.\n")
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
                            io.error.write("minigrace: --vtag requires argument.\n")
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
                    } case { "--interactive" ->
                        interactivev := true
                    } case { "--noexec" ->
                        noexecv := true
                    } case { "--yesexec" ->
                        noexecv := false
                    } case { "--stdout" ->
                        toStdout := true
                    } case { "-" ->
                        toStdout := true
                    } case { "--module" ->
                        skip := true
                        if(argv.size < (ai + 1)) then {
                            io.error.write("minigrace: --module requires argument.\n")
                            sys.exit(1)
                        }
                        modnamev := argv.at(ai + 1)
                    } case { "--gracelib" ->
                        skip := true
                        if(argv.size < (ai + 1)) then {
                            io.error.write("minigrace: --gracelib requires argument.\n")
                            sys.exit(1)
                        }
                        gracelibPathv := argv.at(ai + 1)
                    } case { "--target" ->
                        skip := true
                        if(argv.size < (ai + 1)) then {
                            io.error.write("minigrace: --target requires argument.\n")
                            sys.exit(1)
                        }
                        targetv := argv.at(ai + 1)
                    } case { "-j" ->
                        skip := true
                        if(argv.size < (ai + 1)) then {
                            io.error.write("minigrace: -j requires argument.\n")
                            sys.exit(1)
                        }
                        jobs := argv.at(ai + 1).asNumber
                    } case { "--version" ->
                        print("minigrace "
                            ++ "{versionNumber}.{buildinfo.gitgeneration}")
                        print("git revision " ++ buildinfo.gitrevision)
                        print("<http://ecs.vuw.ac.nz/~mwh/minigrace/>")
                        sys.exit(0)
                    } case { "--help" ->
                        print "Usage: minigrace <file>.grace"
                        print "See the documentation for more options."
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
                    var filename := arg
                    infilev := io.open(filename, "r")
                    if (modnamev == "stdin_minigrace") then {
                        var accum := ""
                        modnamev := ""
                        for (filename) do { c->
                            if (c == ".") then {
                                modnamev := accum
                            }
                            accum := accum ++ c
                        }
                    }
                }
            }
        }
    }
    if ((outfilev == io.output) && {!toStdout}) then {
        outfilev := match(targetv)
            case { "c" -> io.open(modnamev ++ ".c", "w") }
            case { "js" -> io.open(modnamev ++ ".js", "w") }
            case { _ -> io.output }
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
            print("minigrace {versionNumber}.{buildinfo.gitgeneration} / "
                ++ buildinfo.gitrevision)
            print "Copyright (C) 2011-2013 Michael Homer"
            print("This is free software with ABSOLUTELY NO WARRANTY. "
                ++ "Say minigrace.w for details.")
            print ""
            if (interactivev.not) then {
                print "Enter a program and press Ctrl-D to execute it."
                print ""
            }
        }
    }
}

method log_verbose(s) {
    if (verbosityv >= 40) then {
        var vtagw := ""
        if (false != vtagv) then {
            vtagw := "[" ++ vtagv ++ "]"
        }
        io.error.write("minigrace{vtagw}: {modnamev}: {sys.cputime}/"
            ++ "{sys.elapsed}: {s}\n")
    }
}

method outprint(s) {
    outfilev.write(s)
    outfilev.write("\n")
}
method syntax_error(s) {
    if (vtagv) then {
        io.error.write("[" ++ vtagv ++ "]")
    }
    io.error.write("{modnamev}.grace:{linenumv}:{lineposv}: Syntax error: {s}")
    io.error.write("\n")
    if (linenumv > 1) then {
        if (lines.size > 0) then {
            io.error.write("  {linenumv - 1}: {lines.at(linenumv - 1)}\n")
        }
    }
    var arr := "----"
    for (2..(lineposv + linenumv.asString.size)) do {
        arr := arr ++ "-"
    }
    if (lines.size >= linenumv) then {
        io.error.write("  {linenumv}: {lines.at(linenumv)}\n{arr}^\n")
    }
    if (linenumv < lines.size) then {
        io.error.write("  {linenumv + 1}: {lines.at(linenumv + 1)}\n")
    }
    if (interactivev.not) then {
        sys.exit(1)
    } else {
        errno := 1
    }
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
    if (interactivev.not) then {
        sys.exit(1)
    } else {
        errno := 1
    }
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
method interactive {
    interactivev
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
method engine {
    "native"
}
method extensions {
    extensionsv
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
    print "  --make           Compile FILE to a native executable"
    print "  --run            Compile FILE and execute the program [default]"
    print "  --source         Compile FILE to source, but no further"
    print "  --dynamic-module Compile FILE as a dynamic module (experimental!)"
    print "  --interactive    Launch interactive read-eval-print interpreter"
    print ""
    print "Options:"
    print "  --verbose        Give more detailed output"
    print "  --target TGT     Choose a non-default compilation target TGT"
    print "                   Use --target help to list supported targets."
    print "  -o OFILE         Output to OFILE instead of default"
    print "  -j N             Spawn at most N concurrent subprocesses"
    print "  --help           This text"
    print "  --module         Override default module name (derived from FILE)"
    print "  --no-recurse     Do not compile imported modules"
    print "  --stdout         Output to standard output rather than a file"
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

method join(joiner, iterable) {
    def ind = iterable.indices
    def min = ind.first
    var s := ""
    for (ind) do {i->
        if (i != min) then {
            s := s ++ joiner
        }
        s := s ++ iterable.at(i)
    }
    s
}

method split(str, by) {
    def results = []
    def bylen = by.size
    var start := 1
    var i := 1
    def strlen = str.size
    while {i <= strlen} do {
        if (str.substringFrom(i)to(i+bylen-1) == by) then {
            results.push(str.substringFrom(start)to(i-1))
            start := i + bylen
        }
        i := i + 1
    }
    results.push(str.substringFrom(start)to(strlen))
    results
}
