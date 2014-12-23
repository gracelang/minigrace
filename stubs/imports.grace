// This is a stub for the "imports" module, implemented in gracelib.
// It seems to be completely undocumented.

method registerExtension(extension:String, handler:Object) -> Done {
    // registers an object to handle future requests to load a resource with
    // the given extension at the end of its pathName
}

method loadResource(pathName:String, *args:Object) -> Unknown {
    // Finds the extension of pathName, and asks the handler previsouly
    // registered for that extension with registerExtension to 
    // 'loadResource', with arguments pathName and *args.
}
