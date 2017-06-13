dialect "minispec"
import "date" as date
import "io" as io

def longFile = io.open("io-specify-data.txt", "w")
longFile.write "This is test data\n"
(1..12).do { i →
    longFile.write("Line "++i++"\n")
}
longFile.close
def shortFile = io.open("io-specify-hi.txt","w")
shortFile.write "hi"
shortFile.close
def emptyFileName = "aNewFile{date.now}.txt"
def es = io.open(emptyFileName,"w")  // creates the file
es.close

describe "io" with {
    specify "read on file" by {
        def fs = io.open("io-specify-hi.txt","r")
        expect (fs.read) toBe "hi"
    }
    specify "getline on empty file returns an empty string" by {
        def fileName = "aNewFile{date.now}.txt"
        def fs = io.open(fileName, "rw")       // create new empty file
        expect (fs.getline) toBe "" orSay "getline on empty file did not return empty string"
    }
    specify "getline on long file reads lines" by {
        def file = io.open("io-specify-data.txt","r")
        expect (file.getline) toBe "This is test data"
        (1..12).do { i → 
            expect (file.getline) toBe "Line {i}"
        }
    }
    specify "getline at EOF returns empty string" by {
        def file = io.open("io-specify-data.txt","r")
        file.seek(10000)
        expect (file.getline == "") orSay "getline at EOF did not return empty string"
    }   
    specify "eof is true on empty file" by {
        def fileName = "aNewFile{date.now}.txt"
        def fs = io.open(fileName, "rw")       // create new empty file
        expect (fs.eof) toBe true orSay "eof on empty file should be true"
    }
    specify "eof is true at EOF" by {
        def file = io.open("io-specify-data.txt","r")
        file.seek(10000)
        expect (file.eof) orSay "eof at EOF shoudl be true"
    }
    specify "seek(_) seeks to its argument" by {
        def file = io.open("io-specify-data.txt", "r")
        expect {file.seek("10000")} toRaise (TypeError)
        expect {file.seek(3.1415)} toRaise (RequestError)
        expect (file.seek(9).asString) toHaveType (io.FileStream)
        expect (file.next) toBe ("t")
        expect (file.next) toBe ("e")
        expect (file.next) toBe ("s")
        expect (file.next) toBe ("t")
    }
    specify "seekForward(_) seeks incrementally" by {
        def file = io.open("io-specify-data.txt", "r")
        expect {file.seekForward("10000")} toRaise (TypeError)
        expect {file.seekForward(3.1415)} toRaise (RequestError)
        expect (file.seekForward(5).asString) toHaveType (io.FileStream)
        expect (file.seekForward(4).asString) toHaveType (io.FileStream)
        expect (file.next) toBe ("t")
        expect (file.next) toBe ("e")
        expect (file.next) toBe ("s")
        expect (file.next) toBe ("t")
    }
    specify "seekBackward(_) seeks decrementally" by {
        def file = io.open("io-specify-data.txt", "r")
        expect {file.seekBackward("10000")} toRaise (TypeError)
        expect {file.seekBackward(3.1415)} toRaise (RequestError)
        expect (file.seekForward(18).asString) toHaveType (io.FileStream)
        expect (file.seekBackward(4).asString) toHaveType (io.FileStream)
        expect (file.seekBackward(5).asString) toHaveType (io.FileStream)
        expect (file.next) toBe ("t")
        expect (file.next) toBe ("e")
        expect (file.next) toBe ("s")
        expect (file.next) toBe ("t")
    }
    specify "write(_) on empty file writes supplied data after close" by {
        def fileName = "aNewFile{date.now}.txt"
        def writeStream = io.open(fileName,"w")  // fails if file exists
        expect (writeStream.eof) orSay "file opened in mode 'w' is not empty"
        writeStream.write "hi"
        expect (writeStream.eof) orSay "not at eof after writing"
        writeStream.close
        def readStream = io.open(fileName,"r")  // fails if file does not exist
        expect (readStream.read) toBe "hi"
        readStream.close
    }
    specify "read(_) after write(_) reads what was written" by {
        def fileName = "aNewFile{date.now}.txt"
        def rwStream = io.open(fileName,"w")  // truncates if file exists
        rwStream.write "hi"
        expect (rwStream.read) toBe "hi"
        rwStream.close
    }
    specify "eof on empty file is true" by {
        def fileName = "aNewFile{date.now}.txt"
        def writeStream = io.open(fileName,"w")  // truncates if file exists
        expect (writeStream.eof) orSay "file opened in mode 'w' is not empty"
        writeStream.close
        io.unlink(fileName)
    }
    specify "eof after writing to empty file is true" by {
        def fileName = "aNewFile{date.now}.txt"
        def writeStream = io.open(fileName,"w")  // truncates if file exists
        writeStream.write "hi"
        expect (writeStream.eof) orSay "not at eof after writing"
        writeStream.close
        io.unlink(fileName)
    }
    specify "hasNext on empty file is false" by {
        def emptyStream = io.open(emptyFileName, "r")
        expect (emptyStream.hasNext) toBe false orSay "hasNext returned true on empty file"
    }
    specify "next on empty stream raises exception" by {
        def emptyStream = io.open(emptyFileName, "r")
        expect {emptyStream.next} toRaise (IteratorExhausted)
    }
    specify "next returns individual characters" by {
        def file = io.open("io-specify-data.txt", "r")
        expect (file.next) toBe "T"
        expect (file.next) toBe "h"
        expect (file.next) toBe "i"
        expect (file.next) toBe "s"
        file.seek(10000)
        expect {file.next} toRaise (IteratorExhausted)
    }
    specify "pathname returns the name of the file" by {
        def file = io.open("io-specify-data.txt", "r")
        expect (file.pathname) toBe "io-specify-data.txt"
    }
    specify "write(_) on empty file does not write if file is not closed" by {
        def fileName = "aNewFile{date.now}.txt"
        def writeStream = io.open(fileName,"w")
        expect (writeStream.eof) orSay "file opened in mode 'w' is not empty"
        writeStream.write "hi"
        expect (io.exists(writeStream.pathname)) toBe false orSay "file created before close"
        writeStream.close
        expect (io.exists(writeStream.pathname)) toBe true orSay "file not created after close"
        io.unlink(fileName)
    }
    specify "clear empties the contents of a file" by {
        def shortStream = io.open("io-specify-file-to-clear.txt","w")
        shortStream.write "hi-ho"
        shortStream.clear
        expect {shortStream.next} toRaise (IteratorExhausted)
        expect (shortStream.read) toBe ""
        expect (io.exists(shortStream.pathname)) toBe false orSay "file created even though not closed"
    }
    specify "iterator on file" by {
        def shortStream = io.open("io-specify-hi.txt","r")
        expect (shortStream.iterator) toHaveType (Iterator)
    }
    specify "file system files are not interactive" by {
        def shortStream = io.open("io-specify-hi.txt","r")
        expect (shortStream.isatty) toBe false orSay "file system file is interactive"
    }
    if (inBrowser.not) then {
        specify "ttys are interactive" by {
            def shortStream = io.open("/dev/tty","r")
            expect (shortStream.isatty) toBe true orSay "/dev/tty is not interactive"
        }
    }
    specify "fileStream is equal to itself" by {
        def shortStream = io.open("io-specify-hi.txt","r")
        expect (shortStream == shortStream) orSay "fileStream is not equal to itself"
    }
    specify "fileStream is not equal to another" by {
        def shortStream = io.open("io-specify-hi.txt","r")
        def longStream = io.open("io-specify-data.txt", "r")
        expect (shortStream ≠ longStream) orSay "fileStreams on different files are equal"
    }
    specify "two fileStreams on same file are not equal" by {
        def shortStream1 = io.open("io-specify-hi.txt","r")
        def shortStream2 = io.open("io-specify-hi.txt","r")
        expect (shortStream1 ≠ shortStream2) orSay "two distinct fileStreams are equal"
    }
}

io.unlink "io-specify-hi.txt"
io.unlink(emptyFileName)


