method newGame {
    // selects a new secret word for the guessing game, and resets 
    // all of the game-related state.  The secret word must consist
    // exclusively of lower-case letters.
}

method isBadGuess(char) -> Boolean {
    // returns true if `char` has not been guessed before, and is not in
    // the word, or if the player has given up;  otherwise false.  In both 
    // cases, remembers the guess `char`.  The case of `char` is irrelevant
    false
}

method wordSize -> Number {
    // the number of letters in the secret word
    10
}

method giveUp -> String {
    // returns the secret word.  The game is now over, and the
    // player has given up.  Any further guesses should be
    // tretead as bad guesses.
    "unimplemented"
}

method maxNumberOfBadGuesses {
    // the maximum number of bad guesses that the player can make
    // This should be 5, unless wordSize > 8, in which case it should be 6
    10
}

method showLetter(l) -> String {
    // returns a string the same length as the secret word, with
    // all occurrences of letter `l` in their correct places, and 
    // all other letters replaced by _
    "_________"
}

method allLettersGuessed -> Boolean {
    // returns true if all of the letters have been guessed, otherwise false
    false
}

method forceSecretWordToBe(w) {
    // this method is for testing only.  It won't be requested by the apple-framework
    // It lets a test force the secret word to the known value `w`
}
