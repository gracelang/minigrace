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
}

type IO = Object & interface {
    IoException -> ExceptionKind    // the parent of all IO-specific exceptions; a specialization of EnvironmentException
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
        // waits for me to terminate, if necessary.  Answers the
        // cached status.
}

native "js" code ‹
    // initialization code
    const thisModule = this;
    if (!inBrowser) {  // if we are in Node.js
        var fs = require("fs");
        var child_process = require('child_process');
    }
    function ioException(msg) {
        let ioe = selfRequest(thisModule, "IoException", 0);
        request(ioe, "raise(1)", 1, new GraceString(msg));
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
        } else {
            if (fs.existsSync(name)) {
                return fs.readFileSync(name).toString();
            } else {
                return "";
            }
        }
    }

    const writeFileToDisk = inBrowser ? browserWrite : commandLineWrite;

    function browserWrite(name, data) {
        // name is a pathname, data the string to be written
        localStorage.setItem(name,data);
    }

    function commandLineWrite (name, data) {
        // name is a pathname, data the string to be written
        try {
            var nodeFileObject = fs.openSync(name, "w");
            fs.writeSync(nodeFileObject, data);
            fs.closeSync(nodeFileObject);
        } catch(ex) {
            throw new GraceExceptionPacket(EnvironmentExceptionObject,
                new GraceString("can't write to file '" + path + "'."));
        }
    }

    function getDirectoryName(fullPath) {
        // fullPath is a full localStorage directory path, e.g. thisDir/thatDir
        // returns just the final component of the name, e.g., thatDir

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
    var stdout = Grace_allocObject(GraceObject, "stdout");
    stdout.buffer = "";
    stdout.methods["write(1)"] = function(argcv, s) {
        var str = s._value;
        if (inBrowser) {
            var lastNewline = str.lastIndexOf("\n");
            if (lastNewline != -1) {
                minigrace.stdout_write(stdout.buffer + str.substring(0, lastNewline + 1));
                stdout.buffer = str.substring(lastNewline + 1);
            } else {
                stdout.buffer = stdout.buffer + str;
            }
        } else {
            minigrace.stdout_write(str);
        }
        return GraceDone;
    };
    stdout.methods.pathname = function() { return new GraceString("/dev/stdout"); };
    stdout.methods.isatty = function() {
        if (! inBrowser) {
            return Boolean(process.stdout.isTTY) ? GraceTrue : GraceFalse;
        } else {
            return GraceFalse;
        }
    };
    stdout.methods.close = function() {
        if (stdout.buffer.length > 0) {
            minigrace.stdout_write(stdout.buffer);
            stdout.buffer = "";
        }
        if (! inBrowser) { replaceMethodsOnClose(stdout); }
        return GraceDone;
    };
    stdout.methods.clear = function() {
        ioException("method \"clear\" not implemented on stdout");
    };
    stdout.methods["seek(1)"] = function() {
        ioException("method \"seek(_)\" not implemented on stdout");
    };
    stdout.methods["seekForward(1)"] = function() {
        ioException("method \"seekForward(_)\" not implemented on stdout");
    };
    stdout.methods["seekBackward(1)"] = function() {
        ioException("method \"seekBackward(_)\" not implemented on stdout");
    };
    stdout.methods.hasNext = function() {return GraceFalse;};
    stdout.methods.next = function() {
        ioException("method \"next\" not implemented on stdout");
    };
    stdout.methods.size = function() {
        ioException("method \"size\" not implemented on stdout");
    };
    stdout.methods.eof = function() {return GraceTrue;};
    stdout.methods['==(1)'] = function (argcv, other) {
        return (this===other) ? GraceTrue : GraceFalse;
    };
    function streamIsClosedException(argcv) {
        ioException("operation attempted on closed FileStream");
    };
    function replaceMethodsOnClose(o) {
        o.methods.size = streamIsClosedException;
        o.methods.close = streamIsClosedException;
        o.methods.isatty = streamIsClosedException;
        o.methods["write(1)"] = streamIsClosedException;
        o.methods.read = streamIsClosedException;
        o.methods.clear = streamIsClosedException;
        o.methods["seek(1)"] = streamIsClosedException;
        o.methods["seekForward(1)"] = streamIsClosedException;
        o.methods["seekBackward(1)"] = streamIsClosedException;
        o.methods.hasNext = streamIsClosedException;
        o.methods.next = streamIsClosedException;
        o.methods.nextLine = streamIsClosedException;
    };

    var stdin = Grace_allocObject(GraceObject, "stdin");
    stdin.lineBuffer = "";
    stdin.lineCursor = 0;
    stdin.methods.getline = function() {
        return new GraceString(minigrace.stdin_read());
    };
    stdin.methods.nextLine = function() {
        return new GraceString(minigrace.stdin_read());
    };
    stdin.methods.read = function() {
        return new GraceString(minigrace.stdin_read());
    };
    stdin.next = function () {
        if (stdin.lineCursor >= stdin.lineBuffer.length) {
            stdin.lineCursor = 0;
            stdin.lineBuffer = minigrace.stdin_read() + "\n";
        }
        stdin.lineCursor++;
        return stdin.lineBuffer.charAt(stdin.lineCursor - 1);
    }
    stdin.methods.iterator = function() {
        return callmethod(new GraceString(minigrace.stdin_read()), "iterator", 0);
    };
    stdin.methods.isatty = function() {
        if (inBrowser) { return GraceFalse; }
        return Boolean(process.stderr.isTTY) ? GraceTrue : GraceFalse;
    };
    stdin.methods.pathname = function() { return new GraceString("/dev/stdin"); };
    stdin.methods.size = function() { throw new GraceExceptionPacket(IoExceptionObject,
        new GraceString("method \"size\" not implemented on stdin"));};
    stdin.methods.close = function() {
        replaceMethodsOnClose(stdin);
    };
    stdin.methods['==(1)'] = function (argcv, other) {
        return (this===other) ? GraceTrue : GraceFalse;
    };


    var stderr = Grace_allocObject(GraceObject, "stderr");
    stderr.methods['write(1)'] = function(junk, s) {
        minigrace.stderr_write(s._value);
        return GraceDone;
    };
    stderr.methods.isatty = function() {
        if (inBrowser) { return GraceFalse; }
        return Boolean(process.stderr.isTTY) ? GraceTrue : GraceFalse;
    };
    stderr.methods.pathname = function() {
        return new GraceString("/dev/stderr");
    };
    stderr.methods.close = function() {
        if (! inBrowser) { replaceMethodsOnClose(stdout); }
    };
    stderr.methods['==(1)'] = function (argcv, other) {
        return (this===other) ? GraceTrue : GraceFalse;
    };

    this._output = stdout;
    this._input = stdin;
    this._error = stderr;›

method input ->  FileStream {
    native "js" code ‹return this._input;›
}
method output ->  FileStream {
    native "js" code ‹return this._output;›
}
method error ->  FileStream {
    native "js" code ‹return this._error;›
}
method system (command:String) -> Boolean {
    // executes command in a sub-process and answers true if it exits with 0
    native "js" code ‹
        if (inBrowser) { return GraceFalse; }
        try {
            var result = child_process.execSync(safeJsString(command),
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
                    new GraceString("can't unlink file \"" + path +"\" because it does not exist."));
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

method spawn (executable, args:Iterable⟦String⟧) -> Process {
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
        let o = Grace_allocObject(GraceObject, "process");
        o.methods['terminated'] = function () { return GraceTrue; };
        o.methods['wait'] = function () { return new GraceNum(procResult.status); };
        o.methods['status'] = function () { return new GraceNum(procResult.status); };
        o.methods['success'] = function () { return procResult.status === 0 ? GraceTrue : GraceFalse; };
        o.methods['==(1)'] = function (argcv, other) {
            return (this===other) ? GraceTrue : GraceFalse; };
        return o;›
}
method open(path, mode) {
    native "js" code ‹
        var path = safeJsString(var_path);
        var o = Grace_allocObject(GraceObject, "fileStream");
        var fileMode = var_mode._value;
        var fileName = inBrowser ? "file:"+path : path;
        var lastPeriod = fileName.lastIndexOf(".");
        var fileExtension = fileName.substring(lastPeriod);
        var textExtensions = [".grace", ".txt", ".json", ".xml", ".js", ".html", ".xhtml"];
        var contents, write_allowed, read_only, append_mode,
            rw_pointer, isFile_creation_needed, content_length, nodeFileObject;

        // Determine File Mode
        fileMode = fileMode.toLowerCase();
        append_mode = (fileMode === "a");
        write_allowed = fileMode.includes("w") || append_mode;
        read_only = (fileMode === "r");

        if (inBrowser) {
            // Enforce specified file types for IDE
            if (!textExtensions.includes(fileExtension)) {
                throw new GraceExceptionPacket(IoExceptionObject,
                    new GraceString("can't open file \"" + path + "\" due to unsupported file type: " + fileExtension));
            }

            isFile_creation_needed = identifierAvailable("file", path);

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
                        new GraceString("can't create file \"" + path + "\" because directory \"" + directory + "\" does not exist."));
                }
            }
        } else {
            if (!fs.existsSync(path) && read_only) {
                throw new GraceExceptionPacket(EnvironmentExceptionObject,
                    new GraceString("can't open file '" + path + "' for '" + fileMode + "'."));
            }
        }

        // Get and parse file
        contents = getFile(fileName);
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

        //------ IO Methods --------
        o.methods['asString'] = function (argcv) {
            return new GraceString("a stream on file " + path);
        };
        o.methods['write(1)'] = function (argcv, data) {
            var new_contents;
            if (write_allowed) {
                if (contents && inBrowser) {
                    new_contents = contents.slice(0,rw_pointer) + data._value + contents.slice((rw_pointer)+(data._value.length));
                } else {
                    new_contents = safeJsString(data);
                }

                // Update buffer values only
                if (fileMode === "w" && !inBrowser) {
                    contents = contents + new_contents;
                    rw_pointer += new_contents.length;
                } else if (inBrowser) {
                    contents = new_contents;
                    rw_pointer += data._value.length;
                }

                content_length = contents.length;
                return GraceDone;
            } else {
                throw new GraceExceptionPacket(ProgrammingErrorObject,
                    new GraceString("can't write to file \""+path+"\" in read-only mode."));
            }
        };
        o.methods['clear'] = function () {
            if (write_allowed) {
                contents = "";
                rw_pointer = 0;
                content_length = 0;
                return GraceDone;
            } else {
                throw new GraceExceptionPacket(ProgrammingErrorObject,
                    new GraceString("can't clear file \"" + path + "\" in read-only mode."));
            }
        };
        o.methods['getline'] = function () {
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
        };
        o.methods['nextLine'] = function () {
            if (rw_pointer >= contents.length) {
                var ie = callmethod(var___95__prelude, "IteratorExhausted", 0);
                throw new GraceExceptionPacket(ie, new GraceString("End of file reached; there is no next line"));
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
        };
        // Seek Methods
        o.methods['seek(1)'] = function (argcv, data) {
            var pointer = parseFloat(data._value);
            // Check for NaN and for non-integer input
            checkSeekInput(data.className, pointer, "seek(_)");

            if (pointer<0){pointer=0}
            else if (pointer>content_length){pointer=content_length}

            rw_pointer=pointer;
            return this;
        };
        o.methods['seekForward(1)'] = function (argcv, data) {
            var pointer = parseFloat(data._value);
            // Check for NaN and for non-integer input
            checkSeekInput(data.className, pointer, "seekForward(_)");

            pointer = rw_pointer+pointer;

            if (pointer<0){pointer=0}
            else if (pointer>content_length){pointer=content_length}

            rw_pointer=pointer;
            return this;
        };
        o.methods['seekBackward(1)'] = function (argcv, data) {
            var pointer = parseFloat(data._value);
            // Check for NaN and for non-integer input
            checkSeekInput(data.className, pointer, "seekBackward(_)");

            pointer = rw_pointer-pointer;

            if (pointer<0){pointer=0}
            else if (pointer>content_length){pointer=content_length}

            rw_pointer=pointer;
            return this;
        };
        o.methods['hasNext'] = function () {
            return (rw_pointer < content_length) ? GraceTrue : GraceFalse;
        };
        o.methods['next'] = function () {
            if (rw_pointer < content_length){
                var char = new GraceString(contents.charAt(rw_pointer));
                rw_pointer++;
                return char;
            } else {
                var ie = callmethod(var___95__prelude, "IteratorExhausted", 0);
                throw new GraceExceptionPacket(ie, new GraceString(
                    "End of file reached; there is no next character"));
            }
        };
        o.methods['close'] = function () {
            // Update system storage with buffered contents
            if (inBrowser && fileMode === "w") {
                if (identifierAvailable("file",path)) { addFileToTree(path); }
                writeFileToDisk(fileName, contents);
            } else if (!inBrowser && fileMode === "w") {
                writeFileToDisk(fileName, contents);
            }
            replaceMethodsOnClose(o);
            return GraceDone;
        };
        o.methods['pathname'] = function () { return new GraceString(path); };
        o.methods['eof'] =  function () { return (rw_pointer < content_length) ? GraceFalse : GraceTrue; };
        o.methods['read'] = function () { return new GraceString(contents.toString()); };
        o.methods['size'] = function () { return new GraceNum(content_length); };
        o.methods['iterator'] = function () { return this; };
        o.methods['isatty'] = function () { return GraceFalse;}; // tty not currently possible
        o.methods['==(1)'] = function (argcv, other) { return (this===other) ? GraceTrue : GraceFalse; };
        o.methods['≠(1)'] = function (argcv, other) { return (this!==other) ? GraceTrue : GraceFalse; };
        o.methods['hash'] = publicVersion(object_identityHash, 'hash');
        o.methods['isMe(1)'] = object_isMe;
        o.methods['myIdentityHash'] = object_identityHash;
        return o;


        function checkSeekInput(className, value, method) {
            // helper function
            if (className !== "number"){
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("in request of `"+method+"`, the argument is not of type Number"));
            }
            else if (!Number.isInteger(value)) {
                throw new GraceExceptionPacket(RequestErrorObject,
                    new GraceString("in request of `"+method+"`, the argument is not an integer"));
            }
        }›
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

def IoException is public = EnvironmentException.refine "IoException"
def FileException is public = IoException.refine "FileError"
