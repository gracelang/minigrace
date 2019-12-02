dialect "standard"

import "intrinsic" as intrinsic
import "collections" as collections

def IteratorExhausted = outer.IteratorExhausted
def IoException is public = EnvironmentException.refine "IoException"
def FileException is public = IoException.refine "FileError"

type FileStream = Object & interface {
    // The type FileStream describes the interface of an opened file.  Notice that
    // FileStream conforms to Iterator, so FileStreams can also be treated like Iterators.
    read -> String
        // returns the whole contents of the underlying file.
        // ignores the position of the read-write pointer, and does not change it.
    size -> Number
        // returns the total number of characters in this stream.
        // This is the size of the string returned by read, not the number of characters remaining.
    hasNext -> Boolean
        // returns true if next will return a character,
        // and false if it will raise an exception.
    next -> String
        // returns the next character from the file.
        // Raises IteratorExhausted if there are are no more characters to be read.
    nextLine -> String
        // returns the next line in the file, up to and including the next
        // newline, or the end of the file.  The newline character itself 
        // is not part of the result.
        // Raises IteratorExhausted if there are no more lines to be read.
    write (s:String) -> Done
        // writes s to the file at the current position of the read-write
        // pointer. Writes will not appear on the file until the FileStream is
        // closed.  As a special case, writes to the output window in the
        // Grace editor will also appear after a newline has been written.
    close -> Done
        // closes the stream.  Output is pushed to its destination, and further
        // writes will raise an exception.  In the Grace editor, the input, 
        // output and error streams remain open even after this method is used
        // to close them.
    seek (n: Number) -> FileStream
        // moves the read position to be just after the nth character, meaning
        // that the next character to be read will be the (n+1)th.
    seekForward (n:Number) -> FileStream
        // moves the read/write position forward by n characters
    seekBackward (n:Number) -> FileStream
        // moved the read/write position backward by n characters
    iterator -> FileStream
        // returns self
    pathname -> String
        // the name of the file underlying this FileStream
    isatty -> Boolean
        // true if this fileStream is interactive
    == (other) -> Boolean
        // true if self and other are the same FileStream object.  Note that
        // it is possible to have several distinct fileStreams on the same
        // underlying file.
    clear -> FileStream
        // makes the contents of this FileStream empty. The read/write position becomes 0
    eof -> Boolean      // true if nothing more can be read from this file stream
}

type IO = Object & interface {
    IoException -> ExceptionKind    // the parent of all IO-specific exceptions; a refinement of EnvironmentException
    FileException -> ExceptionKind  // a refinement of IoException
    input -> FileStream             // answers stdin
    output -> FileStream            // answers stdout
    error -> FileStream             // answers stderr
    ask(question:String) -> String
    // asks `question` interactively, and returns the user's answer

    // In the Grace editor, the output and error streams write to the feedback window,
    // in black and in red, while reading from the input stream is equivalent to
    // ask "Input".  These streams remain open even after executing their close methods.

    open (path:String, mode:String) -> FileStream
        // opens path in mode, which is one of the following:
        // "r" - Open file for reading. An exception occurs if the file does not exist.
        // "w" - Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
        // "rw" - Open file for reading and writing. The file is created (if it does not exist)
        //       or truncated (if it exists).
        // "a" - Open file for appending. The file is created if it does not exist.
        //       Appending means that the read–write position is at the end of the file.

    system (command:String) -> Boolean
        // executes system command, answers true iff exit status is 0
    exists (path:String) -> Boolean
        // answers true iff path exists in the file system
    unlink (path:String) -> Done
        // removes path from the file system; raises an exception if it wasn't there
    newer (path1:String, path2:String) -> Boolean
        // answers true iff the file at path1 is newer than the file at path2
    realpath (path:String) -> String     // answers absolute name of the file at path
    listdir (dirPath:String) -> Sequence⟦String⟧
        // answers the names of the files in the directory at dirPath
    changeDirectory (dirPath:String)
    env -> Dictionary⟦String,String⟧
        // answers a Dictionary mapping names of environment variables to
        // their values
    spawn (executable:String, args:Collection⟦String⟧) -> Process
        // creates a new Process `executable` using `args` as the command-line arguments
}

type Process = Object & interface {
    wait -> Number
        // wait for me to terminate, and answer my exit status.
        // +ve indicates that I terminated normally.  Other
        // Unix status codes are negated.
    success -> Boolean
        // waits for me to terminate, and returns true if I
        // exited normally (status = 0)
    terminated -> Boolean
        // answers true if I've terminated.
    status -> Number
        // waits for me to terminate, if necessary.  Answers my
        // exit status.  Identical to wait for a synchronous process
}

native "js" code ‹
    // initialization code

    if (!inBrowser) {  // if we are in Node.js
        var fs = require("fs");
        var child_process = require('child_process');
        var path = require('path');
        var crypto;
        try { crypto = require('crypto'); } catch { crypto = false; }
    }
    function identifierAvailable(category, identifier) {
        if (inBrowser) {
            return !(localStorage.hasOwnProperty(category + ":" + identifier));
        } else {
            return ! fs.existsSync(identifier);
        }
    }
    function getFile(name){
        if (inBrowser) {
            return localStorage[name];
        } else if (fs.existsSync(name)) {
            return fs.readFileSync(name).toString();
        } else {
            return "";
        }
    }

    const writeFileToDisk = inBrowser ? browserWrite : commandLineWrite;

    function browserWrite(name, data) {
        // name is a pathname, data the string to be written
        localStorage.setItem(name, data);
    }

    function randomFileNameNear(pathname) {
        // returns a randomly-generated file name in the same directory as pathname
        var id;
        if (crypto) {
            id = crypto.randomBytes(16).toString('hex');
        } else {
            id = performance.now().toString(16);
        }
        return path.dirname(pathname) + path.sep + id;
    }

    function commandLineWrite (name, data) {
        // name is a pathname, data the string to be written
        // we write to a temp file first, to make the write atomic
        try {
            const temp = randomFileNameNear(name);
            const nodeFileObject = fs.openSync(temp, "w");
            fs.writeSync(nodeFileObject, data);
            fs.closeSync(nodeFileObject);
            fs.renameSync(temp, name);
        } catch(ex) {
            raiseException(EnvironmentExceptionObject,
                  "can't write to file '" + name + "'");
        }
    }

    function getDirectoryName(fullPath) {
        // fullPath is a full localStorage directory path, e.g. thisDir/thatDir/file
        // returns just the directory component of the name, e.g., thisDir/thatDir

        const lastSlash = directoryName.lastIndexOf("/");
        if (lastSlash == -1) {
            // -1 means not found
            return fullPath;
        } else {
            return fullPath.substring(0, lastSlash);
        }
    }

    function addFileToTree(name) {
        // add a file to the web editor file tree
        var element = document.getElementById("add-file-io-api");
        element.innerHTML = name;
        element.click(); //Trigger event in files.js (grace-web-editor)
    }

    function removeFileFromTree(name) {
        // remove a file from the web editor file tree
        var element = document.getElementById("remove-file-io-api");
        element.innerHTML = name;
        element.click(); //Trigger event in files.js (grace-web-editor)
    }
›

trait unimplementedMethodWarnings {

    method clear {
        IoException.raise "method \"clear\" not implemented on {self}"
    }
    method seek(_){
        IoException.raise "method \"seek(_)\" not implemented on {self}"
    }
    method seekForward(_) {
        IoException.raise "method \"seekForward(_)\" not implemented on {self}"
    }
    method seekBackward(_){
        IoException.raise "method \"seekBackward(_)\" not implemented on {self}"
    }
    method next {
        IoException.raise "method \"next\" not implemented on {self}"
    }
    method nextLine {
        IoException.raise "method \"nextLine\" not implemented on {self}"
    }
    method size {
        IoException.raise "method \"size\" not implemented on {self}"
    }
    method write(_) {
        IoException.raise "method \"write(_)\" not implemented on {self}"
    }
    method read {
        IoException.raise "method \"read\" not implemented on {self}"
    }
    method iterator {
        IoException.raise "method \"iterator\" not implemented on {self}"
    }
}

def output:FileStream is public = object {
    use identityEquality
    use unimplementedMethodWarnings

    native "js" code ‹this.buffer = "";›
    var isOpen := true

    method asString { "the standard output stream" }
    method write(s) {
        if (isOpen.not) then { IoException.raise "write(_) requested on {self} after it has been closed" }
        native "js" code ‹
            var str = var_s._value;
            if (inBrowser) {
                var lastNewline = str.lastIndexOf("\n");
                if (lastNewline != -1) {
                    minigrace.stdout_write(this.buffer + str.substring(0, lastNewline + 1));
                    this.buffer = str.substring(lastNewline + 1);
                } else {
                    stdout.buffer = stdout.buffer + str;
                }
            } else {
                minigrace.stdout_write(str);
            }
        ›
        done
    }
    method pathname { "/dev/stdout" }
    method isatty {
        if (intrinsic.inBrowser) then { return false }
        if (isOpen.not) then { IoException.raise "isatty requested on {self} after it has been closed" }
        native "js" code ‹return process.stdout.isTTY ? GraceTrue : GraceFalse;›
    }
    method close {
        if (intrinsic.inBrowser.not) then { isOpen := false }
        native "js" code ‹
            if (this.buffer.length > 0) {
                minigrace.stdout_write(this.buffer);
                this.buffer = "";
            }
        ›
    }
    method hasNext {
        if (isOpen.not) then { IoException.raise "hasNext requested on {self} after it has been closed" }
        false
    }
    method eof { true }
}

def input:FileStream is public = object {
    use identityEquality
    use unimplementedMethodWarnings
    var isOpen := true
    native "js" code ‹
        this.lineBuffer = "";
        this.lineCursor = 0;
    ›
    method asString { "the standard input stream" }
    method getline {
        if (isOpen.not) then { IoException.raise "getLine requested on {self} after it has been closed" }
        native "js" code ‹return new GraceString(minigrace.stdin_read());›
    }
    method nextLine {
        if (isOpen.not) then { IoException.raise "nextLine requested on {self} after it has been closed" }
        native "js" code ‹return new GraceString(minigrace.stdin_read());›
    }
    method read {
        if (isOpen.not) then { IoException.raise "read requested on {self} after it has been closed" }
        native "js" code ‹return new GraceString(minigrace.stdin_read());›
    }
    method hasNext {
        if (isOpen.not) then { IoException.raise "hasNext requested on {self} after it has been closed" }
        true
    }
    method next {
        if (isOpen.not) then { IoException.raise "next requested on {self} after it has been closed" }
        native "js" code ‹
            if (this.lineCursor >= this.lineBuffer.length) {
                this.lineCursor = 0;
                this.lineBuffer = minigrace.stdin_read() + "\n";
            }
            this.lineCursor++;
            return this.lineBuffer.charAt(this.lineCursor - 1);
        ›
    }
    method iterator {
        read.iterator
    }
    method isatty {
        if (intrinsic.inBrowser) then { return false }
        native "js" code ‹return process.stdin.isTTY ? GraceTrue : GraceFalse;›
    }
    method pathname { "/dev/stdin" }
    method size { IoException.raise "method \"size\" not implemented on {self}" }
    method close {
        if (intrinsic.inBrowser.not) then { isOpen := false }
    }
    method eof { isOpen.not }
}

def error:FileStream is public = object {
    use identityEquality
    use unimplementedMethodWarnings
    var isOpen := true
    method asString { "the standard error stream" }
    method write(s) {
        native "js" code ‹minigrace.stderr_write(var_s._value);›
    }
    method isatty {
        if (intrinsic.inBrowser) then { return false }
        native "js" code ‹return (process.stderr.isTTY) ? GraceTrue : GraceFalse;›
    }
    method pathname  { "/dev/stderr" }
    method close {
        if (intrinsic.inBrowser.not) then { isOpen := false }
    }
    method hasNext {
        if (isOpen.not) then { IoException.raise "hasNext requested on {self} after it has been closed" }
        false
    }
    method eof { true }
}

method system (command:String) -> Boolean {
    // executes command in a sub-process and answers true if it exits with 0
    native "js" code ‹
        if (inBrowser) { return GraceFalse; }
        try {
            var result = child_process.execSync(safeJsString(var_command),
                {stdio: [process.stdin, process.stdout, process.stderr]});
            return GraceTrue;
        } catch(ex) {
            return GraceFalse;
        }›
}
method exists (path:String) -> Boolean {
    // returns true if `path` names a file in the filesystem.
    native "js" code ‹
    let p = safeJsString(var_path)
    if (!inBrowser) {
        return (fs.existsSync(p) ? GraceTrue : GraceFalse);
    }
    if (!identifierAvailable("file",p)) return GraceTrue;
    return GraceFalse;›
}
method unlink(path) {
    native "js" code ‹
        let path = safeJsString(var_path);
        if (inBrowser) {
            var fileKey = "file:" + path;
            if (! localStorage.hasOwnProperty(fileKey)) {
                throw new GraceExceptionPacket(EnvironmentExceptionObject,
                    new GraceString("can't unlink file \"" + path +"\" because it does not exist"));
            } else {
                removeFileFromTree(path);
                localStorage.removeItem(fileKey);
            }
        } else {
            try {
                fs.unlinkSync(path);
            } catch (ex) {
                throw new GraceExceptionPacket(EnvironmentExceptionObject,
                    new GraceString("can't unlink file '" + path));
            }
        }
        return GraceDone;›
}

method spawn (executable, args:Collection⟦String⟧) -> Process {
    // forks and execv's executable, with args
    // executable can be a string, or any object with an `asString` method
    native "js" code ‹
        if (inBrowser) { return GraceFalse; }
        let cmd = safeJsString(var_executable);
        let args = [];
        let iter = callmethod(var_args, "iterator", 0);
        while (Grace_isTrue(callmethod(iter, "hasNext", 0))) {
            let arg = callmethod(iter, "next", 0);
            args.push(safeJsString(arg));
        }
        let procResult = child_process.spawnSync(cmd, args,
                {stdio: [process.stdin, process.stdout, process.stderr]});
    ›
    object {
        use identityEquality
        def status is public = native "js" code ‹result = new GraceNum(procResult.status);›
        def cmd = native "js" code ‹result = new GraceString(cmd);›
        method asString { "process spawned to execute {cmd.asDebugString}" }
        method terminated { true }
        method wait { status }
        method success { status == 0 }
    }
}
method open(path, mode) -> FileStream {
    native "js" code ‹
        var path = safeJsString(var_path);
        const fileMode = var_mode._value.toLowerCase();
        var fileName = inBrowser ? "file:"+path : path;
        var lastPeriod = fileName.lastIndexOf(".");
        var fileExtension = fileName.substring(lastPeriod);
        var textExtensions = [".grace", ".txt", ".json", ".xml", ".js", ".html", ".xhtml"];
        var rw_pointer, content_length;

        // Determine File Mode
        const append_mode = (fileMode === "a");
        const write_allowed = fileMode.includes("w") || append_mode;
        const read_only = (fileMode === "r");

        if (inBrowser) {
            // Enforce specified file types for IDE
            if (!textExtensions.includes(fileExtension)) {
                throw new GraceExceptionPacket(IoExceptionObject,
                    new GraceString("can't open file \"" + path + "\" due to unsupported file type: " + fileExtension));
            }

            const isFile_creation_needed = identifierAvailable("file", path);

            // Check to see if reading a non-existing file
            if (read_only && isFile_creation_needed) {
                throw new GraceExceptionPacket(EnvironmentExceptionObject,
                    new GraceString("can't open file " + path + " in mode " + fileMode + " because it does not exist"));
            }

            // Add the file to the UI, if needed
            if (write_allowed && isFile_creation_needed) {
                var directory = getDirectoryName(path);

                // Check to see if the file's directory exists
                if ((directory !== path) && identifierAvailable("directory", directory)) {
                    throw new GraceExceptionPacket(EnvironmentExceptionObject,
                        new GraceString("can't create file \"" + path + "\" because directory \"" + directory + "\" does not exist"));
                }
            }
        } else {
            if (!fs.existsSync(path) && read_only) {
                throw new GraceExceptionPacket(EnvironmentExceptionObject,
                    new GraceString("can't open file '" + path + " in mode " + fileMode + " because it does not exist"));
            }
        }

        // Get and parse file
        var contents = getFile(fileName);
        if (contents === undefined || fileMode==="w") {
            contents = "";
            content_length = 0;
        } else {
            content_length = contents.length;
        }
        if (append_mode && contents !== undefined) {
            rw_pointer = contents.length;
        } else {
            rw_pointer = 0;
        }

        function checkSeekInput(className, value, method) {     // helper function
            if (className !== "number"){
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("in request of `"+method+"`, the argument is not of type Number"));
            }
            else if (!Number.isInteger(value)) {
                throw new GraceExceptionPacket(RequestErrorObject,
                    new GraceString("in request of `"+method+"`, the argument is not an integer"));
            }
        }
    ›
    object {
        // construct the FileStream object
        use identityEquality
        def pathname is public = path
        var isOpen := true
        method asString { "a stream on file {pathname}" }
        method write(data) {
            if (isOpen.not) then {
                IoException.raise "write(_) requested on a stream on file {pathname} after it has been closed"
            }
            native "js" code ‹
                var new_contents;
                if (write_allowed) {
                    if (contents && inBrowser) {
                        new_contents = contents.slice(0,rw_pointer) + var_data._value + contents.slice((rw_pointer)+(var_data._value.length));
                    } else {
                        new_contents = safeJsString(var_data);
                    }

                    // Update buffer values only
                    if (fileMode === "w" && !inBrowser) {
                        contents = contents + new_contents;
                        rw_pointer += new_contents.length;
                    } else if (inBrowser) {
                        contents = new_contents;
                        rw_pointer += var_data._value.length;
                    }

                    content_length = contents.length;
                    return GraceDone;
                }
            ›
            ProgrammingError.raise "can't write to file \"{pathname}\" in read-only mode"
        }
        method clear {
            native "js" code ‹
                if (write_allowed) {
                    contents = "";
                    rw_pointer = 0;
                    content_length = 0;
                    return GraceDone;
                }
            ›
            ProgrammingError.raise "can't write to file \"{pathname}\" in read-only mode"
        }
        method getline {
            native "js" code ‹
                var resultLine;
                var newline_index = contents.indexOf("\n", rw_pointer);

                // Check for last-line or EOF case and narrow-down to next line from rw_pointer
                if (newline_index !== -1) {
                    resultLine = contents.slice(rw_pointer, newline_index);
                } else {
                    resultLine = contents.slice(rw_pointer);
                }

                // Update rw_pointer to take into account returned value
                rw_pointer += (resultLine.length + 1);

                return new GraceString(resultLine);
            ›
        }
        method nextLine {
            native "js" code ‹
                if (rw_pointer >= contents.length) {
                    raiseException(var_IteratorExhausted, "End of file reached; there is no next line");
                }
                var resultLine;
                var newline_index = contents.indexOf("\n", rw_pointer);

                // Check for last-line or EOF case and narrow-down to next line from rw_pointer
                if (newline_index !== -1) {
                    resultLine = contents.slice(rw_pointer, newline_index);
                } else {
                    resultLine = contents.slice(rw_pointer);
                }

                // Update rw_pointer to take into account returned value
                rw_pointer += (resultLine.length + 1);

                return new GraceString(resultLine);
            ›
        }
        method seek(data) {
            native "js" code ‹
                var pointer = parseFloat(var_data._value);
                // Check for NaN and for non-integer input
                checkSeekInput(var_data.className, pointer, "seek(_)");

                if (pointer<0){pointer=0}
                else if (pointer>content_length){pointer=content_length}

                rw_pointer=pointer;
                return this;
            ›
        }
        method seekForward(data) {
            native "js" code ‹
                var pointer = parseFloat(var_data._value);
                // Check for NaN and for non-integer input
                checkSeekInput(var_data.className, pointer, "seekForward(_)");

                pointer = rw_pointer+pointer;

                if (pointer<0){pointer=0}
                else if (pointer>content_length){pointer=content_length}

                rw_pointer=pointer;
                return this;
            ›
        }
        method seekBackward(data) {
            native "js" code ‹
                var pointer = parseFloat(var_data._value);
                // Check for NaN and for non-integer input
                checkSeekInput(var_data.className, pointer, "seekBackward(_)");

                pointer = rw_pointer-pointer;

                if (pointer<0){pointer=0}
                else if (pointer>content_length){pointer=content_length}

                rw_pointer=pointer;
                return this;
            ›
        }
        method hasNext {
            native "js" code ‹
                return (rw_pointer < content_length) ? GraceTrue : GraceFalse;
            ›
        }
        method next {
            native "js" code ‹
                if (! Grace_isTrue(this.data.isOpen)) { request(var_IoException, "raise(1)", [1],
                    new GraceString("next requested on a stream on file " + path + " after it has been closed"));
                }
                if (rw_pointer < content_length){
                    var char = new GraceString(contents.charAt(rw_pointer));
                    rw_pointer++;
                    return char;
                } else {
                    raiseException(var_IteratorExhausted,
                        "End of file reached; there is no next character");
                }
            ›
        }
        method close {
            native "js" code ‹
                // Update system storage with buffered contents
                if (inBrowser && fileMode === "w") {
                    if (identifierAvailable("file",path)) { addFileToTree(path); }
                    writeFileToDisk(fileName, contents);
                } else if (!inBrowser && fileMode === "w") {
                    writeFileToDisk(fileName, contents);
                }
                this.data.isOpen = GraceFalse;
                return GraceDone;
            ›
        }
        method eof {
            native "js" code ‹return (rw_pointer < content_length) ? GraceFalse : GraceTrue;›
        }
        method read { native "js" code ‹return new GraceString(contents.toString());› }
        method size { native "js" code ‹return new GraceNum(content_length);› }
        method iterator { self }
        method isatty { false }      // tty not currently possible
    }
}

method realpath(path) -> String {
    // answers the canonicalized absolute pathname corresponding to `path`
    native "js" code ‹
        if (!inBrowser) {
            const arg = safeJsString(var_path);
            try {
                let realpath = fs.realpathSync(arg);
                if (fs.lstatSync(realpath).isDirectory()) {
                    realpath = realpath + "/";
                }
                return new GraceString(realpath);
            } catch (ex) {
                const pat = ex.code + ": ([^,]+)";  // build a regex
                const msg = ex.message.match(pat)[1];  // extract error message
                throw new GraceExceptionPacket(RequestErrorObject,
                      new GraceString("can't get real path for \"" + arg +
                            "\" — " + msg));
            }
        }
        return x;›
}
method listdir(dirPath) -> Sequence⟦String⟧ {
    // lists the directory `dirPath`
    native "js" code ‹
       if (!inBrowser) {
            var list = [];
            list.push(new GraceString("."));
            list.push(new GraceString(".."));
            fs.readdirSync(safeJsString(var_dirPath)).forEach(function(val, index, array) {
                list.push(new GraceString(val));
            });
            return new GraceList(list);
        }
        return new GraceList([]);   // TODO: enumerate files in local storage›
}

method newer (path1, path2) -> Boolean {
    // returns true is `path1` is a newer file than `path2`
    native "js" code ‹
        if (inBrowser) { return GraceTrue; }
        let p1Stats = fs.statSync(safeJsString(var_path1));
        let p2Stats = fs.statSync(safeJsString(var_path2));
        return (p1Stats.mtimeMs > p2Stats.mtimeMs ? GraceTrue : GraceFalse);›
}

method ask(question:String) {
    // asks `question` interactively, and returns the answer input
    // by the interactive user.
    native "js" code ‹
        return new GraceString(minigrace.ask(var_question._value));›
}

