// Utility to compare the timestamps on f.js, f.gct and f.grace and
// announce whether f.grace needs to be recompiled.
//
// usage tools/compareTimes <filePath>


import "sys" as sys
import "unixFilePath" as filePath

method baseFileName {
    def arg = sys.argv.second
    def n = filePath.fromString(arg)
    print "baseFileName = {n}"
    n
}

method compare {
    def moduleFileGct = baseFileName.copy.setExtension ".gct"
    def moduleFileJs = moduleFileGct.copy.setExtension ".js"
    def moduleFileGrace = moduleFileGct.copy.setExtension ".grace"
    def noSource = ! moduleFileGrace.exists
    print "moduleFileJs = {moduleFileJs}"
    if (noSource) then { print "no .grace file" }
        else { print ".grace file found" }

    if (moduleFileJs.exists && {
        moduleFileGct.exists } && {
            noSource || {
                moduleFileJs.newer(moduleFileGrace)
            }
        }
    ) then {
        print "everything up to date"
    } else {
        if (moduleFileJs.newer(moduleFileGrace).not) then {
            print "{moduleFileJs} not newer than {moduleFileGrace}"
        }
        if (moduleFileGrace.exists) then {
            print "needs to compile Grace file"
        } else {
            print "Can't find module {moduleFileGrace.baseName}."
        }
    }
}

compare
