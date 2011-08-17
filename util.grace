import io
import sys
import buildinfo

var __compilerRevision := false
var verbosityv := 30
var outfilev := io.output
var infilev := io.input
var modnamev := "main"
var runmodev := "build"
var buildtypev := "bc"
var gracelibPathv := "gracelib.o"
var linenumv := 1
var lineposv := 1
var vtagv := false
var noexecv := false
var targetv := "llvm"
var versionNumber := "0.0.2"
var extensionsv := HashMap.new

method runOnNew(b)else(e) {
    if ((__compilerRevision /= "647a358cc4dcc6a3f67f3ff8e870386ef6241111")
        & (__compilerRevision /= false)) then {
        b.apply
    } else {
        e.apply
    }
}

runOnNew {
    gracelibPathv := sys.execPath ++ "/gracelib.o"
} else { }

method parseargs {
    var argv := sys.argv
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
                } elseif (arg == "--run") then {
                    buildtypev := "run"
                    runmodev := "make"
                } elseif (arg == "--native") then {
                    buildtypev := "native"
                } elseif (arg == "--noexec") then {
                    noexecv := true
                } elseif (arg == "--module") then {
                    skip := true
                    modnamev := argv.at(ai + 1)
                } elseif (arg == "--gracelib") then {
                    skip := true
                    gracelibPathv := argv.at(ai + 1)
                } elseif (arg == "--target") then {
                    skip := true
                    targetv := argv.at(ai + 1)
                } elseif (arg == "--version") then {
                    print("minigrace {versionNumber}.{buildinfo.gitgeneration}")
                    print("git revision " ++ buildinfo.gitrevision)
                    print("<http://ecs.vuw.ac.nz/~mwh/minigrace/>")
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
                if (modnamev == "main") then {
                    modnamev := ""
                    var seendot := false
                    for (filename) do { c->
                        if (c == ".") then {
                            seendot := true
                        }
                        if (seendot.not) then {
                            modnamev := modnamev ++ c
                        }
                    }
                }
                if (outfilev == io.output) then {
                    outfilev := io.open(modnamev ++ ".ll", "w")
                }
            }
        }
    }
}

method log_verbose(s) {
    if (verbosityv >= 40) then {
        io.error.write("minigrace")
        if (vtagv) then {
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
    io.error.write("minigrace")
    if (vtagv) then {
        io.error.write("[" ++ vtagv ++ "]")
    }
    io.error.write(": " ++ modnamev ++ ": Syntax error around line "
        ++ linenumv ++ ", character " ++ lineposv ++ ": ")
    io.error.write(s)
    io.error.write("\n")
    sys.exit(1)
}
method warning(s) {
    io.error.write("minigrace")
    if (vtagv) then {
        io.error.write("[" ++ vtagv ++ "]")
    }
    io.error.write(": warning: " ++ modnamev ++ ": around line "
        ++ linenumv ++ ", character " ++ lineposv ++ ": ")
    io.error.write(s)
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
