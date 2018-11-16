// Utility to compare the timestamps on f.js, and f.grace and
// announce whether f.grace needs to be recompiled.
//
// usage grace tools/compareTimes <baseFilePath>


import "sys" as sys
import "unixFilePath" as filePath

method baseFileName {
    def arg = sys.argv.third
    def n = filePath.fromString(arg)
    print "baseFileName = {n}"
    n
}

method compare {
    def moduleFileJs = baseFileName.copy.setExtension ".js"
    def moduleFileGrace = moduleFileJs.copy.setExtension ".grace"
    def noSource = ! moduleFileGrace.exists
    print "moduleFileJs = {moduleFileJs}"
    if (noSource) then { print "no .grace file" }
        else { print "source file {moduleFileGrace} found" }

    if (moduleFileJs.exists && { moduleFileJs.newer(moduleFileGrace) }) then {
        print "everything up to date"
    } else {
        if (moduleFileJs.newer(moduleFileGrace)) then {
            print "{moduleFileJs} newer than {moduleFileGrace}"
        } else {
            print "{moduleFileJs} _not_ newer than {moduleFileGrace}"
        }
        if (moduleFileGrace.exists) then {
            print "needs to compile Grace file"
        } else {
            print "Can't find module {moduleFileGrace.baseName}."
        }
    }
}

compare
