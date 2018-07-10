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

// The remainder of this module consists of dummy classes that
// allow this file to be compiled to produce a .gct

class input ->  FileStream {
    method read -> Object { }
    method getline -> Object { }
    method nextLine -> Object { }
    method write (s:String) -> Object { }
    method close -> Object { }
    method seek (n:Number) -> Object { }
    method seekForward (n:Number) -> Object { }
    method seekBackward (n:Number) -> Object { }
    method iterator -> Object { }
    method hasNext -> Object { }
    method next -> Object { }
    method readBinary (_) -> Object { }
    method writeBinary (_) -> Object { }
    method pathname -> String { }
    method eof -> Boolean { }
    method isatty -> Boolean { }
}
class output ->  FileStream {
    method read -> Object { }
    method getline -> Object { }
    method nextLine -> Object { }
    method write (s:String) -> Object { }
    method close -> Object { }
    method seek (n:Number) -> Object { }
    method seekForward (n:Number) -> Object { }
    method seekBackward (n:Number) -> Object { }
    method iterator -> Object { }
    method hasNext -> Object { }
    method next -> Object { }
    method readBinary (_) -> Object { }
    method writeBinary (_) -> Object { }
    method pathname -> String { }
    method eof -> Boolean { }
    method isatty -> Boolean { }
}
class error ->  FileStream {
    method read -> Object { }
    method getline -> Object { }
    method nextLine -> Object { }
    method write (s:String) -> Object { }
    method close -> Object { }
    method seek (n:Number) -> Object { }
    method seekForward (n:Number) -> Object { }
    method seekBackward (n:Number) -> Object { }
    method iterator -> Object { }
    method hasNext -> Object { }
    method next -> Object { }
    method readBinary (_) -> Object { }
    method writeBinary (_) -> Object { }
    method pathname -> String { }
    method eof -> Boolean { }
    method isatty -> Boolean { }
}
class open (fileName:String, mode:String) -> FileStream {
    method read -> Object { }
    method getline -> Object { }
    method nextLine -> Object { }
    method write (s:String) -> Object { }
    method close -> Object { }
    method seek (n:Number) -> Object { }
    method seekForward (n:Number) -> Object { }
    method seekBackward (n:Number) -> Object { }
    method iterator -> Object { }
    method hasNext -> Object { }
    method next -> Object { }
    method readBinary (_) -> Object { }
    method writeBinary (_) -> Object { }
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
    // returns true if `path` names a file in the filesystem.
method newer (path1:String, path2:String) -> Boolean { }
    // returns true is `path1` is a newer file than `path2`
method spawn (executable:String, args:Iterable⟦String⟧) -> Process { }
    // forks and execv's executable, with args
method realpath (path:String) -> String { }
    // answers the canonicalized absolute pathname corresponding to `path`
method listdir (dirPath:String) -> Sequence⟦String⟧ { }
    // lists the directory `dirPath`
