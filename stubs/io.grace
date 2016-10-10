type FileStream = Object & type {
    read -> Object
    getline -> Object
    write (s:String) -> Object
    close -> Object
    seek -> Object
    seekForward (n:Number) -> Object
    seekBackward (n:Number) -> Object
    iterator -> Object
    hasNext -> Object
    next -> Object
    readBinary -> Object
    writeBinary -> Object
    pathname -> String
    eof -> Boolean
    isatty -> Boolean
}

type IO = Object & type {
    input -> FileStream        // answers stdin
    output -> FileStream       // answers stdout
    error -> FileStream        // answers stderr
    ask(question:String) -> String
    open (path:String, mode:String) -> FileStream
        // opens path in mode
    system (command:String) -> Boolean
        // executes system command, answers true iff exit status is 0
    exists (path:String) -> Boolean
        // answers true iff path exists in the file system
    newer (path1:String, path2:String) -> Boolean
        // answers true iff the file at path1 is newer than the file at path2
    realpath (path:String) -> String     // answers absolute path
    listdir (dirPath:String) -> Sequence⟦String⟧
        // answers the names of the files in the directory at dirPath
    changeDirectory (dirPath:String)
    env -> Dictionary⟦String,String⟧
        // answers a Dictionary mapping names of environment variables to
        // their values
    spawn (executable:String, args:Iterable⟦String⟧) -> Process
        // creates a new Process `executable` using `args` as the command-line arguments
}

type Process = Object & type {
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

// The remainder of this module consists of dummy classes that
// allow this file to be compiled to produce a .gct

class input ->  FileStream {
    method read -> Object { }
    method getline -> Object { }
    method write (s:String) -> Object { }
    method close -> Object { }
    method seek -> Object { }
    method seekForward (n:Number) -> Object { }
    method seekBackward (n:Number) -> Object { }
    method iterator -> Object { }
    method hasNext -> Object { }
    method next -> Object { }
    method readBinary -> Object { }
    method writeBinary -> Object { }
    method pathname -> String { }
    method eof -> Boolean { }
    method isatty -> Boolean { }
}
class output ->  FileStream {
    method read -> Object { }
    method getline -> Object { }
    method write (s:String) -> Object { }
    method close -> Object { }
    method seek -> Object { }
    method seekForward (n:Number) -> Object { }
    method seekBackward (n:Number) -> Object { }
    method iterator -> Object { }
    method hasNext -> Object { }
    method next -> Object { }
    method readBinary -> Object { }
    method writeBinary -> Object { }
    method pathname -> String { }
    method eof -> Boolean { }
    method isatty -> Boolean { }
}
class error ->  FileStream {
    method read -> Object { }
    method getline -> Object { }
    method write (s:String) -> Object { }
    method close -> Object { }
    method seek -> Object { }
    method seekForward (n:Number) -> Object { }
    method seekBackward (n:Number) -> Object { }
    method iterator -> Object { }
    method hasNext -> Object { }
    method next -> Object { }
    method readBinary -> Object { }
    method writeBinary -> Object { }
    method pathname -> String { }
    method eof -> Boolean { }
    method isatty -> Boolean { }
}
class open (fileName:String, mode:String) -> FileStream {
    method read -> Object { }
    method getline -> Object { }
    method write (s:String) -> Object { }
    method close -> Object { }
    method seek -> Object { }
    method seekForward (n:Number) -> Object { }
    method seekBackward (n:Number) -> Object { }
    method iterator -> Object { }
    method hasNext -> Object { }
    method next -> Object { }
    method readBinary -> Object { }
    method writeBinary -> Object { }
    method pathname -> String { }
    method eof -> Boolean { }
    method isatty -> Boolean { }
}
method ask(question:String) -> String { }
    // asks `question` interactively, and returns the answer input
    // by the interactive user.
method system (command:String) -> Boolean { }
    // executes command in a sub-process and answers true if it exits with 0
method exists (path:String) -> Boolean { }
    // retunrs true if `path` names a file in the filesystem.
method newer (path1:String, path2:String) -> Boolean { }
    // returns true is `path1` is a newer file than `path2`
method spawn (executable:String, args:Iterable⟦String⟧) -> Process { }
    // forks and execv's executable, with args
method realpath (path:String) -> String { }
    // answers the canonicalized absolute pathname corresponding to `path`
method listdir (dirPath:String) -> Sequence⟦String⟧ { }
    // lists the directory `dirPath`
