//  Define function so that stdPrelude is not in the browser's 'window' namespace.

function extendGracePrelude() {
    //  Make stdPrelude the object returned by executing the gracecode_ function
    //  in 'SatndardPrelude'
    var stdPrelude = do_import('StandardPrelude', gracecode_StandardPrelude);
    //  Now add the methods of this object to the gloabl object Grace_prelude.
    for (var methName in stdPrelude.methods) {
        Grace_prelude.methods[methName] = stdPrelude.methods[methName];
    }
}

extendGracePrelude();

