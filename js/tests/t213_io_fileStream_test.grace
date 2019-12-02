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
def emptyFileName = "aEmptyFile{date.now}.txt"
def es = io.open(emptyFileName,"w")  // creates the file
es.close


describe "io" with {
    specify "file type" by {
        expect (io.FileStream) toHaveType (Type)
    }
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
    specify "next after close raises an exception" by {
        def file = io.open("io-specify-data.txt","r")
        expect (file.nextLine) toBe "This is test data"
        file.close
        expect {file.next} toRaise (io.IoException)
    }
    specify "nextLine on empty file raises an exception" by {
        def fileName = "aNewFile{date.now}.txt"
        def fs = io.open(fileName, "rw")       // create new empty file
        expect {fs.nextLine} toRaise (IteratorExhausted)
    }
    specify "nextLine on long file reads lines" by {
        def file = io.open("io-specify-data.txt","r")
        expect (file.nextLine) toBe "This is test data"
        (1..12).do { i → 
            expect (file.nextLine) toBe "Line {i}"
        }
        expect (file.hasNext) toBe false orSay "hasNext is true after reading the whole file"
    }
    specify "nextLine at EOF raises an exception" by {
        def file = io.open("io-specify-data.txt","r")
        file.seek(10000)
        expect {file.nextLine} toRaise (IteratorExhausted)
    }
    specify "eof is true on empty file" by {
        def fileName = "aNewFile{date.now}.txt"
        def fs = io.open(fileName, "rw")       // create new empty file
        expect (fs.eof) toBe true orSay "eof on empty file should be true"
    }
    specify "hasNext is false on empty file" by {
        def fileName = "aNewFile{date.now}.txt"
        def fs = io.open(fileName, "rw")       // create new empty file
        expect (fs.hasNext) toBe false orSay "hasNext on empty file should be false"
    }
    specify "eof is true at EOF" by {
        def file = io.open("io-specify-data.txt","r")
        file.seek(10000)
        expect (file.eof) orSay "eof at EOF should be true"
    }
    specify "hasNext is false at EOF" by {
        def file = io.open("io-specify-data.txt","r")
        file.seek(10000)
        expect (file.hasNext) toBe false orSay "hasNext at EOF should be false"
    }
    specify "seek(_) seeks to its argument" by {
        def file = io.open("io-specify-data.txt", "r")
        expect {file.seek("10000")} toRaise (TypeError)
        expect {file.seek(3.1415)} toRaise (RequestError)
        expect (file.seek(8)) toHaveType (io.FileStream)
        expect (file.next) toBe ("t")
        expect (file.next) toBe ("e")
        expect (file.next) toBe ("s")
        expect (file.next) toBe ("t")
    }
    specify "seekForward(_) seeks incrementally" by {
        def file = io.open("io-specify-data.txt", "r")
        expect {file.seekForward("10000")} toRaise (TypeError)
        expect {file.seekForward(3.1415)} toRaise (RequestError)
        expect (file.seekForward(5)) toHaveType (io.FileStream)
        expect (file.seekForward(3)) toHaveType (io.FileStream)
        expect (file.next) toBe ("t")
        expect (file.next) toBe ("e")
        expect (file.next) toBe ("s")
        expect (file.next) toBe ("t")
    }
    specify "seekBackward(_) seeks decrementally" by {
        def file = io.open("io-specify-data.txt", "r")
        expect {file.seekBackward("10000")} toRaise (TypeError)
        expect {file.seekBackward(3.1415)} toRaise (RequestError)
        expect (file.seekForward(18)) toHaveType (io.FileStream)
        expect (file.seekBackward(5)) toHaveType (io.FileStream)
        expect (file.seekBackward(5)) toHaveType (io.FileStream)
        expect (file.next) toBe ("t")
        expect (file.next) toBe ("e")
        expect (file.next) toBe ("s")
        expect (file.next) toBe ("t")
    }
    specify "write on empty file writes supplied data after close" by {
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
    specify "write after close raises exception" by {
        def fileName = "aNewFile{date.now}.txt"
        def writeStream = io.open(fileName,"w")  // fails if file exists
        writeStream.write "hi\n"
        writeStream.close
        expect {writeStream.write "ho\n"} toRaise (io.IoException)
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
    specify "hasNext on new empty file is false" by {
        def fileName = "aNewFile{date.now}.txt"
        def writeStream = io.open(fileName,"w")  // truncates if file exists
        expect (writeStream.hasNext) toBe false orSay "file opened in mode 'w' is not empty"
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
    specify "hasNext after writing to empty file is false" by {
        def fileName = "aNewFile{date.now}.txt"
        def writeStream = io.open(fileName,"w")  // truncates if file exists
        writeStream.write "hi"
        expect (writeStream.hasNext) toBe false orSay "not at eof after writing"
        writeStream.close
        io.unlink(fileName)
    }
    specify "hasNext on existing empty file is false" by {
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
    specify "write(_) does not write if file is not closed" by {
        def fileName = "aNewFile{date.now}.txt"
        def writeStream = io.open(fileName,"w")
        expect (writeStream.eof) orSay "file opened in mode 'w' is not empty"
        writeStream.write "hi"
        expect (io.exists(writeStream.pathname)) toBe false orSay "file created before close"
        writeStream.close
        expect (io.exists(writeStream.pathname)) toBe true orSay "file not created after close"
        io.unlink(fileName)
    }
    specify "clear removes previously written data" by {
        def shortStream = io.open("io-specify-file-to-clear.txt","w")
        shortStream.write "hi-ho"
        shortStream.clear
        shortStream.write "lets start again\n"
        shortStream.close
        def readStream = io.open("io-specify-file-to-clear.txt","r")
        expect (readStream.size) toBe ("lets start again\n".size)
        expect (readStream.read) toBe "lets start again\n"
        readStream.close
        io.unlink "io-specify-file-to-clear.txt"
    }
    specify "clear empties a file in storage" by {
        def shortStream = io.open("io-specify-file-to-clear.txt","w")
        shortStream.write "hi-ho"
        shortStream.clear
        shortStream.close
        def readStream = io.open("io-specify-file-to-clear.txt","r")
        expect (readStream.size) toBe 0 orSay "after clear, file does not have zero size"
        expect (readStream.read) toBe "" orSay "after clear, file contents not empty"
        expect (readStream.eof) toBe true orSay "after clear, file is not empty"
        io.unlink "io-specify-file-to-clear.txt"
    }
    specify "iterator on file" by {
        def shortStream = io.open("io-specify-hi.txt","r")
        expect (shortStream.iterator) toHaveType (Iterator)
    }
    specify "file system files are not interactive" by {
        def shortStream = io.open("io-specify-hi.txt","r")
        expect (shortStream.isatty) toBe false orSay "file system file is interactive"
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
    specify "spawn executes a successful sub-process" by {
        def proc = io.spawn("test", ["1", "-eq", "1"])
        expect (proc.asString) toBe "process spawned to execute \"test\""
        expect (proc.terminated) toBe true
        expect (proc.wait) toBe 0
        expect (proc.status) toBe 0
        expect (proc.success) toBe true
        expect (proc) toBe (proc) orSay "equality on processes does't recognize identity"
    }
    specify "spawn executes an unsuccessful sub-process" by {
        def proc = io.spawn("test", ["1", "-eq", "2"])
        expect (proc.asString) toBe "process spawned to execute \"test\""
        expect (proc.terminated) toBe true
        expect (proc.wait) toBe 1
        expect (proc.status) toBe 1
        expect (proc.success) toBe false
        expect (proc) toBe (proc) orSay "equality on processes does't recognize identity"
    }
}

io.unlink "io-specify-hi.txt"
io.unlink "io-specify-data.txt"
io.unlink(emptyFileName)

exit
