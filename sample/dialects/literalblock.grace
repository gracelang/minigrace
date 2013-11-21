// This dialect enforces that the condition of a while loop must
// be a literal block written inline in the source code, to avoid
// any potential confusion with (). It offers a suggestion to the
// user when they write the condition in parentheses.
import "ast" as ast
import "errormessages" as errormessages
import "StandardPrelude" as sp
inherits sp.new

def CheckerFailure = Error.refine "CheckerFailure"

method checker(tree) {
    def vis = object {
        inherits ast.baseVisitor
        method visitCall(call) {
            if (call.value.value == "while()do") then {
                checkWhile(call)
            }
            return true
        }
    }
    for (tree) do {node->
        node.accept(vis)
    }
}

method checkWhile(call) {
    // Ensure that the condition (the only argument in the first part of
    // argument list) is a literal block:
    if (call.with[1].args[1].kind != "block") then {
        def badPart = call.with[1]
        def badArg = call.with[1].args[1]
        def suggestions = []
        if (badPart.lineLength > 0) then {
            // This covers the possible ()/{} confusion and offers a
            // suggestion of what the user may have meant, but ignores
            // multiple-line conditions or literals because it is difficult
            // to suggest a sensible intention the user may have had.
            def suggestion = errormessages.suggestion.new
            suggestion.replaceChar(badPart.linePos + badPart.lineLength)
                with("}")
                onLine(badPart.line)
            suggestion.replaceChar(badPart.linePos)
                with("\{")
                onLine(badPart.line)
            badPart.linePos
            suggestions.push(suggestion)
        }
        // Report an error to the user, highlighting the part of the
        // code that is incorrect.
        errormessages.syntaxError "The condition of a while loop must be written in \{}."
            atRange(badPart.line, badPart.linePos,
                badPart.linePos + badPart.lineLength)
            withSuggestions(suggestions)
    }
}
