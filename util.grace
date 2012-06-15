import io
import sys
import buildinfo

var __compilerRevision := false
var verbosityv := 30
var outfilev := io.output
var infilev := io.input
var modnamev := "stdin_minigrace"
var runmodev := "make"
var buildtypev := "run"
var gracelibPathv := false
var linenumv := 1
var lineposv := 1
var vtagv := false
var noexecv := false
var targetv := "c"
var versionNumber := "0.0.7"
var extensionsv := HashMap.new
var recurse := true
var jobs := 2

method runOnNew(b)else(e) {
    if ((__compilerRevision /= "cc2ded6be7e705924e6a331ed01d8c3240ceb688")
        & (__compilerRevision /= false)) then {
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
            if (skip) then {
                skip := false
            } elseif (arg.at(1) == "-") then {
                if (arg == "-o") then {
                    outfilev := io.open(argv.at(ai + 1), "w")
                    skip := true
                } elseif (arg == "--verbose") then {
                    verbosityv := 40
                } elseif (arg == "--vtag") then {
                    skip := true
                    vtagv := argv.at(ai + 1)
                } elseif (arg == "--make") then {
                    runmodev := "make"
                    buildtypev := "bc"
                } elseif (arg == "--no-recurse") then {
                    recurse := false
                } elseif (arg == "--run") then {
                    buildtypev := "run"
                    runmodev := "make"
                } elseif (arg == "--source") then {
                    buildtypev := "source"
                    runmodev := "build"
                } elseif (arg == "--native") then {
                    buildtypev := "native"
                } elseif (arg == "--noexec") then {
                    noexecv := true
                } elseif (arg == "--stdout") then {
                    toStdout := true
                } elseif (arg == "--module") then {
                    skip := true
                    modnamev := argv.at(ai + 1)
                } elseif (arg == "--gracelib") then {
                    skip := true
                    gracelibPathv := argv.at(ai + 1)
                } elseif (arg == "--target") then {
                    skip := true
                    targetv := argv.at(ai + 1)
                } elseif (arg == "-j") then {
                    skip := true
                    jobs := argv.at(ai + 1).asNumber
                } elseif (arg == "--version") then {
                    print("minigrace {versionNumber}.{buildinfo.gitgeneration}")
                    print("git revision " ++ buildinfo.gitrevision)
                    print("<http://ecs.vuw.ac.nz/~mwh/minigrace/>")
                    sys.exit(0)
                } elseif (arg == "--help") then {
                    print "Usage: minigrace <file>.grace"
                    print "See the documentation for more options."
                    sys.exit(0)
                } elseif (arg.at(2) == "X") then {
                    var ext := arg.substringFrom(3)to(arg.size)
                    var extn := ""
                    var extv := true
                    var seeneq := false
                    for (ext) do {c->
                        if (c == "=") then {
                            seeneq := true
                            extv := ""
                        } elseif (!seeneq) then {
                            extn := extn ++ c
                        } else {
                            extv := extv ++ c
                        }
                    }
                    extensionsv.put(extn, extv)
                } else {
                    io.error.write("minigrace: invalid argument {arg}.\n")
                    sys.exit(1)
                }
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
    if ((outfilev == io.output) && {!toStdout}) then {
        if (targetv == "c") then {
            outfilev := io.open(modnamev ++ ".c", "w")
        } elseif (targetv == "java") then {
            outfilev := io.open(modnamev ++ ".java", "w")
        } else {
            outfilev := io.open(modnamev ++ ".ll", "w")
        }
    }
    if (gracelibPathv == false) then {
        if (targetv == "llvm") then {
            gracelibPathv := sys.execPath ++ "/gracelib.bc"
        } elseif (targetv == "java") then {
            gracelibPathv := sys.execPath ++ "/java"
        } else {
            gracelibPathv := sys.execPath
        }
    }
    if (infilev == io.input) then {
        if (infilev.isatty) then {
            print("minigrace {versionNumber}.{buildinfo.gitgeneration} / "
                ++ buildinfo.gitrevision)
            print "Copyright (C) 2011, 2012 Michael Homer"
            print("This is free software with ABSOLUTELY NO WARRANTY. "
                ++ "Say minigrace.w for details.")
            print ""
            print "Enter a program and press Ctrl-D to execute it."
            print ""
        }
    }
}

method log_verbose(s) {
    if (verbosityv >= 40) then {
        io.error.write("minigrace")
        if (false != vtagv) then {
            io.error.write("[" ++ vtagv ++ "]")
        }
        io.error.write(": ")
        io.error.write(modnamev)
        io.error.write(": ")
        io.error.write(sys.cputime.asString)
        io.error.write("/")
        io.error.write(sys.elapsed.asString)
        io.error.write(": ")
        io.error.write(s)
        io.error.write("\n")
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
    sys.exit(1)
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
    sys.exit(1)
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
method engine {
    "native"
}
method extensions {
    extensionsv
}
method debug(s) {

}
var hexdigits := "0123456789abcdef"
method hex(num) {
    var s := ""
    while {num > 0} do {
        var i := num % 16
        s := s ++ hexdigits.at(i + 1)
        num := num - i
        num := num / 16
    }
    s
}

method join(joiner, iterable) {
    def ind = iterable.indices
    def min = ind.first
    var s := ""
    for (ind) do {i->
        if (i /= min) then {
            s := s ++ joiner
        }
        s := s ++ iterable.at(i)
    }
    s
}
