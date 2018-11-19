dialect "minispec"

import "apple-game" as game

describe "apple-game" with {
    specify "word is lower-case" by {
        game.newGame
        def secret = game.giveUp
        expect (secret.asLower) toBe (secret) 
            orSay "the secret word \"{secret}\" contains upper-case letters"
    }
    specify "word contains letters" by {
        game.newGame
        def secret = game.giveUp
        secret.do { ch ->
            expect ( ch.startsWithLetter ) toBe true 
                orSay "the secret word contains \"{ch}\", which isn't a letter"
        }
    }
    specify "word is non-empty" by {
        game.newGame
        def secret = game.giveUp
        expect (secret.isEmpty.not) orSay "the secret word is empty"
    } 
    specify "wordSize is the size of the secret word" by {
        game.newGame
        def sz = game.wordSize
        def secret = game.giveUp
        expect (secret.size == sz) 
            orSay "the secret word \"{secret}\" has size {secret.size}, but wordSize is {sz}"
    }
    specify "for all letter in the secretWord, isBadGuess returns false" by {
        game.newGame
        def testWord = "abracadabra"
        game.forceSecretWordToBe (testWord)
        for "abrcd" do { ch -> 
            expect (game.isBadGuess (ch)) toBe false 
                orSay "when word is \"{testWord}\", \"{ch}\" was reported as a bad guess"
        }
    }
    specify "after the first guess, isBadGuess returns false" by {
        game.newGame
        def testWord = "abracadabra"
        game.forceSecretWordToBe (testWord)
        for "wqzo" do { ch -> 
            expect (game.isBadGuess (ch)) 
                orSay "when word is \"{testWord}\", \"{ch}\" was not recognized as a bad guess"
        }
        for "wqzo" do { ch -> 
            expect (game.isBadGuess (ch)) toBe false
                orSay "\"{ch}\" was said to be a bad guess the second time it was guessed"
        }
    }
    specify "after giving up, all guesses are bad" by {
        game.newGame
        def secret = game.giveUp
        def guess = secret.at(((secret.size + 1)/2).ceiling)
        expect (game.isBadGuess(guess)) toBe true 
            orSay "when word is \"{secret}\", \"{guess}\" was said to be a good guess even after giving-up"
    }
    specify "showLetter \"a\" shows the locations of the \"a\"s" by {
        game.newGame
        def testWord = "abracadabra"
        game.forceSecretWordToBe (testWord)
        expect (game.showLetter "a") toBe "a__a_a_a__a"
        expect (game.isBadGuess "a") toBe false orSay "after showLetter \"a\", \"a\" was a bad guess!"
    }
    specify "showLetter \"d\" treats \"d\" as a guess" by {
        game.newGame
        def testWord = "abracadabra"
        game.forceSecretWordToBe (testWord)
        game.showLetter "d"
        expect (game.isBadGuess "d") toBe false orSay "after showLetter \"d\", \"d\" was a bad guess!"
    }
    specify "`showLetter \"z\" treats `x` as a guess" by {
        game.newGame
        def testWord = "abracadabra"
        game.forceSecretWordToBe (testWord)
        game.showLetter "z"
        expect (game.isBadGuess "z") toBe false 
            orSay "after showLetter \"z\", \"z\" was a bad guess!"
    }
    specify "maxNumberOfBadGuesses is 6 for big words, and 5 for small words" by {
        repeat 10 times {
            game.newGame
            def secretWordSize = game.wordSize
            def specifiedSize = 
                if (secretWordSize > 8) then { 6 } else { 5 }
            expect (game.maxNumberOfBadGuesses) toBe (specifiedSize)
        }
    }
    specify "allLettersGuessed is true after guessing all the letters" by {
        def testWord = "metropolis"
        game.forceSecretWordToBe (testWord)
        testWord.do { each ->
            expect (game.isBadGuess (each)) toBe false 
                orSay "when word is \"{testWord}\", \"{each}\" was reported as a bad guess"
        }
        expect (game.allLettersGuessed) 
            orSay "word is \"{testWord}\", allLettersGuessed wasn't true"
    }
}
