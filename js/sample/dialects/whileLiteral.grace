// This dialect enforces that the condition of a while loop must
// be a literal block written inline in the source code, to avoid
// any potential confusion with (). It offers a suggestion to the
// user when they write the condition in parentheses.

import "util" as util
import "ast" as ast
import "errormessages" as errormessages
import "io" as io

inherit prelude.methods

def whileVisitor = object {
    inherit ast.baseVisitor
    method visitCall(o) → Boolean {
        if (o.canonicalName == "while(_)do(_)") then {
            def condition = o.parts.first.args.first
            if (condition.isBlock.not) then {
                reportWhile(condition)
            }
        }
        true   
    }
}

method reportWhile(whileCond) {
    // req is an entire `while(_)do(_)` request.
    // Generate the suggestion of replacing the
    // parentheses with braces, if applicable.

    // Ignore certain degenerate cases where there is no condition, and
    // situations where the condition spanned multiple lines since they
    // are likely to be a different kind of mistake. In all of these
    // cases the source line length of the part's argument list will be
    // reported as zero.
    if (util.lines.at(whileCond.line).size > 0) then {
        // We will suggest replacing the () used in the condition with {}.
        // The suggestions system allows modifying the code the user
        // wrote to something that they may have meant, and then printing
        // out the suggestion with "Did you mean?".
        def suggestion = errormessages.suggestion.new
        // These replacements are made right to left, so that
        // offsets in parts accessed later on are still valid.
        suggestion.replaceChar(whileCond.end.column + 1)
            with("}")
            onLine(whileCond.line)
        suggestion.replaceChar(whileCond.start.column - 1)
            with("\{")
            onLine(whileCond.line)
        // Report an error to the user, highlighting the part of
        // the code that is incorrect, and including our suggestion.
        errormessages.syntaxError "the condition of a while loop must be written in \{}"
            atRange (whileCond.range)
            withSuggestion(suggestion)
    }
    // Report an error to the user, highlighting the part of the
    // code that is incorrect.
    errormessages.syntaxError "the condition of a while loop must be written in \{}"
        atRange (whileCond.args.first.range)
}

def thisDialect is public = object {
    method parseChecker(module) {
        io.error.write "about to run the parseChecker …\n"
        module.accept(whileVisitor)
    }
}
