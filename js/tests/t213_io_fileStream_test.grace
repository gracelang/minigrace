dialect "minitest"

import "io" as io

if(inBrowser) then{
    var file := io.open("io-test-data.txt","rw")
    var emptyFile := io.open("empty-file.txt","rw")
    var readOnlyFile := io.open("empty-file.txt","r")
    var i := 2

    testSuite {
        test "File Setup" by {
             assert (file.write("").asString == "done") description "write on file failed"
             try{
                 file.write("This file is read by \"t210_io_fileStream_test.grace\" to run its tests.\n")
                 file.seekForward(71)
                 while {i<12} do {
                     file.write("Line "++i++"\n")
                     i := i+1
                     file.seekForward(9)
                 }
                 file.seek(0)
             } catch {
                _: Exception → print "File Setup Failed! Tests will not run properly."
             }
        }

        test "write(1) on empty file" by {
                assert (emptyFile.write ("hi").asString == "done") description "write on file failed"
                assert {readOnlyFile.write("hi")} shouldRaise (prelude.IoException)
        }

        test "read on file" by {
            assert (emptyFile.read == "hi") description "reading file failed to return expected value"
        }

        test "getline on empty file" by {
            emptyFile.clear
            assert (emptyFile.getline == "") description "getline returned text but expected empty string"
        }

        test "getline on file" by {
            file.getline
            assert (file.getline == "Line 2") description "getline returned incorrect value"
        }

        test "getline at EOF" by {
            file.seek(10000)
            assert (emptyFile.getline == "") description "getline at EOF returned text but expected empty string"
            file.seek(0)
        }

        test "seek(_)" by {
            assert {file.seek("10000")} shouldRaise (TypeError)
            assert {file.seek(3.1415)} shouldRaise (RequestError)
            assert (file.seek(5).asString) shouldBe ("a fileStream")
            assert (file.next) shouldBe ("f")
            file.seek(0)
        }
        test "seekForward(_)" by {
            assert {file.seekForward("10000")} shouldRaise (TypeError)
            assert {file.seekForward(3.1415)} shouldRaise (RequestError)
            assert (file.seekForward(5).asString) shouldBe ("a fileStream")
            assert (file.next) shouldBe ("f")

        }
        test "seekBackward(_)" by {
            assert {file.seekBackward("10000")} shouldRaise (TypeError)
            assert {file.seekBackward(3.1415)} shouldRaise (RequestError)
            assert (file.seekBackward(6).asString) shouldBe ("a fileStream")
            assert (file.next) shouldBe ("T")
            file.seek(0)
        }

        test "hasNext on empty file" by {
            deny (emptyFile.hasNext) description "hasNext returned true at EOF"
        }

        test "next on file and empty file" by {
            assert {emptyFile.next} shouldRaise (IteratorExhausted)
            assert (file.next == "T") description "next returned incorrect value (should be 'T')"
            assert (file.next == "h") description "next returned incorrect value (should be 'h')"
            assert (file.next == "i") description "next returned incorrect value (should be 'i')"
            file.seek(10000)
            assert {file.next} shouldRaise (IteratorExhausted)
        }

        test "Binary Read and Write" by {
            assert {file.readBinary(5)} shouldRaise (Exception)
            assert {file.writeBinary(5)} shouldRaise (Exception)
        }

        test "File Pathname" by {
            assert (file.pathname == "io-test-data.txt") description "fileStream returned incorrect pathname/error"
        }

        test "EOF on empty file" by {
            assert (emptyFile.eof) description "eof returned false but expected true"
        }

        test "close on file" by {
            assert (emptyFile.close.asString == "done") description "close() on emptyFile failed to return Done"
        }

        test "clear" by {
            assert (emptyFile.clear.asString == "done") description "clear() on emptyFile failed to return Done"
            assert (file.clear.asString == "done") description "clear() on file failed to return Done"
            assert {readOnlyFile.clear.next} shouldRaise (prelude.IoException)
            assert (emptyFile.read == "") description "emptyFile.clear failed to delete content properly"
            assert (file.read == "") description "file.clear failed to delete content properly"
        }

        test "iterator on file" by {
            assert (file.iterator.asString) shouldBe ("a fileStream")
        }

        test "check if file is interactive" by {
            deny (emptyFile.isatty) description "files cannot be interactive in Web Editor"
        }

        test "fileStream equality" by {
            assert(file == file) description "fileStream should be equal to itself"
            deny (emptyFile == file) description "different fileStreams should not be equal"
        }

    }
} else {
    var file := io.open("io-test-data.txt","w+")
    var emptyFile := io.open("empty-file.txt","w+")
    var testString := "This file is read by \"t210_io_fileStream_test.grace\" to run its tests."
    try{
      file.write(testString)
    } catch {
      _: Exception → print "File Setup Failed! Tests will not run properly."
    }

    testSuite {
        test "file pathname check" by {
            assert (file.pathname == "io-test-data.txt") description "fileStream returned incorrect pathname/error"
        }

        test "getline on file" by {
            var readFile := io.open("io-test-data.txt","r");
            assert (readFile.getline == (testString)) description "getline returned incorrect value"
        }

        test "read on file" by {
            var readFile := io.open("io-test-data.txt","r");
            assert (readFile.read == testString) description "read on file returned incorrect value"
        }

        test "EOF on empty file" by {
            deny (file.eof) description "eof returned true but expected false"
        }

        test "fileStream equality" by {
            assert (file == file) description "fileStream should be equal to itself"
            deny (emptyFile == file) description "different fileStreams should not be equal"
        }
    }
}
