type FileStream = type {
    method read -> Object
    method getline -> Object
    method write -> Object
    method close -> Object
    method seek -> Object
    method seekForward (n:Number) -> Object
    method seekBackward (n:Number) -> Object
    method iterator -> Object
    method hasNext -> Object
    method next -> Object
    method readBinary -> Object
    method writeBinary -> Object
    method eof -> Boolean
    method isatty -> Boolean
    method == (other:Object) -> Boolean
    method != (other:Object) -> Boolean
}


type IO = type {
    method input -> File        // answers stdin
    method output -> File       // answers stdout
    method error -> File        // answers stderr
    method open (f:File, mode:String) -> FileStream     // opens f in mode
    method system (command:String) -> Boolean           
        // executes system command, answers true iff exit status is 0
    method exists (path:String) -> Boolean
        // answers true iff path exists in the file system
    method newer (path1:String, path2:String) -> Boolean
        // answers true iff the file at path1 is newer than the file at path2
    method realpath (path:String) -> String     // answers absolute path
    method listdir (dirPath:String) -> Collection<String>
    method changeDiretory (dirPath:String)
    method env -> Dictionary<String,String>
}
