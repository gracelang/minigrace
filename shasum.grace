dialect "standard"
// this module provides a function to compute the sha256 checksum
// of a file.  It depends on the sha node package, which must be installed.

native "js" code ‹
    var shaModule;
    const sha_options = {algorithm: 'sha256'};
    function sha() {
        if (!shaModule) {
            try {
                shaModule = require('sha');
            } catch (ex) {
                throw new GraceExceptionPacket(EnvironmentExceptionObject,
                    new GraceString("Can't load JavaScript module 'sha': is it installed?"));
            }
        }
        return shaModule;
    }
›

method sha256OfFile(f) -> String {
    def fileName = f.asString   // in case f is a file path
    native "js" code ‹
        try {
            var h = sha().getSync(var_fileName._value, sha_options);
        } catch (ex) {
            if ((typeof ex.message.startsWith === "function") && (ex.message.startsWith("ENOENT:"))) {
                setLineNumber(14);
                throw new GraceExceptionPacket(EnvironmentExceptionObject,
                    new GraceString("File '" + var_fileName._value + "' does not exist"));
            } else {
                throw ex;
            }
        }
        return new GraceString(h);
    ›
}
