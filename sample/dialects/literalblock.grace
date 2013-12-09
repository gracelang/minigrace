// This dialect enforces that the condition of a while loop must
// be a literal block written inline in the source code, to avoid
// any potential confusion with (). It offers a suggestion to the
// user when they write the condition in parentheses.
dialect "dialect"
import "StandardPrelude" as StandardPrelude
inherits StandardPrelude.methods

// The dialect dialect provides a shortcut While pattern which
// matches while()do requests and destructures the AST node into
// the condition and the body.
rule { req : While(cond, _) ->
    if (cond.kind != "block") then {
        reportWhile(req)
    }
}

method reportWhile(req) {
    // Get a reference to the entire condition 'part' of the request.
    // We will use this to generate the suggestion of replacing the
    // parentheses with braces, if applicable.
    def badPart = req.with[1]
    // Ignore certain degenerate cases where there is no condition, and
    // situations where the condition spanned multiple lines since they
    // are likely to be a different kind of mistake. In all of these
    // cases the source line length of the part's argument list will be
    // reported as zero.
    if (badPart.lineLength > 0) then {
        // We will suggest replacing the () used in the condition with {}.
        // The suggestions system allows modifying the code the user
        // wrote to something that they may have meant, and then printing
        // out the suggestion with "Did you mean?".
        def suggestion = createSuggestion
        // These replacements are made right to left, so that
        // offsets in parts accessed later on are still valid.
        suggestion.replaceChar(badPart.linePos + badPart.lineLength)
            with("}")
            onLine(badPart.line)
        suggestion.replaceChar(badPart.linePos)
            with("\{")
            onLine(badPart.line)
        // Report an error to the user, highlighting the part of
        // the code that is incorrect, and including our suggestion.
        fail "The condition of a while loop must be written in \{}"
            from(badPart.linePos)to(badPart.linePos + badPart.lineLength)
            suggest(suggestion)
    }
    // Report an error to the user, highlighting the part of the
    // code that is incorrect.
    fail "The condition of a while loop must be written in \{}."
        from(badPart.linePos) to(badPart.linePos + badPart.lineLength)
}

method checker(code) {
    check(code)
}
