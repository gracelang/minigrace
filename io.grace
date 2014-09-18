type FileStream = Object & type {
    read -> Object
    getline -> Object
    write -> Object
    close -> Object
    seek -> Object
    seekForward (n:Number) -> Object
    seekBackward (n:Number) -> Object
    iterator -> Object
    hasNext -> Object
    next -> Object
    readBinary -> Object
    writeBinary -> Object
    eof -> Boolean
    isatty -> Boolean
}


type IO = Object & type {
    input -> FileStream        // answers stdin
    output -> FileStream       // answers stdout
    error -> FileStream        // answers stderr
    open (path:String, mode:String) -> FileStream     
        // opens path in mode
    system (command:String) -> Boolean           
        // executes system command, answers true iff exit status is 0
    exists (path:String) -> Boolean
        // answers true iff path exists in the file system
    newer (path1:String, path2:String) -> Boolean
        // answers true iff the file at path1 is newer than the file at path2
    realpath (path:String) -> String     // answers absolute path
    listdir (dirPath:String) -> Collection<String>
        // answers the names of the files in the directory at dirPath
    changeDirectory (dirPath:String)
    env -> Dictionary<String,String>
        // answers a Dictionary maping names of environment variables to
        // their values
    findResource (fileName:String) -> String  
        // answers the full path on which fileName can be found.  The places 
        // that it looks are compiler-specific.
}

// These dummy classes allow this file to be compiled to produce a .gct

factory method input ->  FileStream {
    method read -> Object { }
    method getline -> Object { }
    method write -> Object { }
    method close -> Object { }
    method seek -> Object { }
    method seekForward (n:Number) -> Object { }
    method seekBackward (n:Number) -> Object { }
    method iterator -> Object { }
    method hasNext -> Object { }
    method next -> Object { }
    method readBinary -> Object { }
    method writeBinary -> Object { }
    method eof -> Boolean { }
    method isatty -> Boolean { }
}
factory method output ->  FileStream {
    method read -> Object { }
    method getline -> Object { }
    method write -> Object { }
    method close -> Object { }
    method seek -> Object { }
    method seekForward (n:Number) -> Object { }
    method seekBackward (n:Number) -> Object { }
    method iterator -> Object { }
    method hasNext -> Object { }
    method next -> Object { }
    method readBinary -> Object { }
    method writeBinary -> Object { }
    method eof -> Boolean { }
    method isatty -> Boolean { }
}
factory method error ->  FileStream {
    method read -> Object { }
    method getline -> Object { }
    method write -> Object { }
    method close -> Object { }
    method seek -> Object { }
    method seekForward (n:Number) -> Object { }
    method seekBackward (n:Number) -> Object { }
    method iterator -> Object { }
    method hasNext -> Object { }
    method next -> Object { }
    method readBinary -> Object { }
    method writeBinary -> Object { }
    method eof -> Boolean { }
    method isatty -> Boolean { }
}
factory method open (f:File, mode:String) -> FileStream {
    method read -> Object { }
    method getline -> Object { }
    method write -> Object { }
    method close -> Object { }
    method seek -> Object { }
    method seekForward (n:Number) -> Object { }
    method seekBackward (n:Number) -> Object { }
    method iterator -> Object { }
    method hasNext -> Object { }
    method next -> Object { }
    method readBinary -> Object { }
    method writeBinary -> Object { }
    method eof -> Boolean { }
    method isatty -> Boolean { }
}
method system (command:String) -> Boolean { }
method exists (path:String) -> Boolean { }
method newer (path1:String, path2:String) -> Boolean { }
method realpath (path:String) -> String { }
method listdir (dirPath:String) -> Collection<String> { }
method changeDirectory (dirPath:String) { }
method env -> Dictionary<String,String> { }
method findResource (fileName:String) -> String { }
