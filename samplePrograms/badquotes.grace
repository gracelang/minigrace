dialect "beginningStudent"
// In case you need to use them, you can copy these characters: π ÷ ‹ › 

// CS 161 Spring 2017 Midterm 2, 18th May 2017
//
// PLEASE REPLACE THE VALUES OF THE FOLLOWING VARIABLES WITH YOUR LAST NAME,
// FIRST NAME, AND STUDENT ID

def lastName = "Duck"
def firstName = "Daisy"
def studentID = "123123123"

// This file contains methods headers, purpose statements, and _partial_ 
// executable specifications for 6 methods.  The whole file is legal Grace; 
// run it now and check!
//
// At present, the body of each method is ... , which means it is incomplete.
// Your job is to 
//     • complete the specifications, based on the English description of what 
//       the methods accomplish, and 
//     • replace the .. with method bodies that meet the specification.

// Make sure that you keep this file as legal grace code.  When you are done,
// some of your code may not meet the specifications, so you may have some
// methods that fail or error.  But all of the specifications must run!
// If you introduce something that's not legal Grace, for example, if you
// spell "method" as "methdo", then nothing will run, and you will get no
// feedback from Grace on your code.  So if you get "syntax errors",
// indicated by a red x in the gutter, and oragne highlighting, fix them 
// right away before continuing.

describe "Student Name" with {
    specify "lastName" by {
        expect (lastName != "Duck") orSay "You have not defined `lastName`"
    }
    specify "firstName" by {
        expect (firstName != "Daisy") orSay "You have not defined `firstName`"
    }
    specify "studentId" by {
        expect (studentID != "123123123") orSay "You have not defined `studentID`"
    }
}

numberOfErrorsToRerun := 0   // You may change this number.  If you increase 
                             // it, you will get more output from
                             // specifications that error


//############ Question 1 (of 6) #############


method weave(x:List, y:List) → List{
    // returns a new list that contains the elements of list x and list y
    // interwoven.  If x and y have different sizes, the extra elements
    // from the longer list are ignored.  Neither x nor y is changed.
    // 
    // EXAMPLES:
    // when a = list(1,2,3,4), b = list(5,6,7,8), weave(a, b) => list(1,5,2,6,3,7,4,8)
    // when a = list(1,2), b = list(3) weave(a, b) => list(1,3)
    
    return ...
}

describe "M1: weave" with {
    specify "a = list(1,2,3,4), b = list(5,6,7,8)" by {
       
    }
    specify "a = list(1,2), b = list(3)" by {

    }
    specify "a = emptyList, b = list(1,2,3) " by {

    }
    specify "a = emptyList, b = emptyList" by {
      
    }

}

//############ Question 2 (of 6) #############

method squareAll(a:List⟦Number⟧) → Done {
    // modifies the List "a" such that
    // each element in "a" is replaced by its square
    // EXAMPLE:
    // if a = list(1,2,3,4) after requesting squareAll(a), a = list(1,4,9,16)
    
    ...
}

describe "Q2: squareAll" with {
    specify "a = list(1,2,3,4)" by {
       
    }
    specify "a = emptyList" by {

    }
}

//############ Question 3 (of 6) #############

method reverse(a:List) → Done {
    // modifies the List a so that it's elements are in the reverse order
    // 
    // EXAMPLE:
    // a = list(1, 2, 3, 4)
    // after requesting reverse(a), a = list(4,3,2,1)
    
    ...
} 

describe "Q3: reverse" with {
    specify "a = list(1,2,3,4)" by {
       
    }
    specify "a = list("e", "f", "g") by {

    }
    specify "a = emptyList" by {

    }
}


//############ Question 4 (of 6) #############

method addTwos(a:List) → List {
    // returns a new list like "a", except that after every occurrence 
    // of 4 in the result list, the number 2 appears.  
    // EXAMPLES:
    // addTwos( list(1,2,3,4) ) => list(1,2,3,4,2)
    // addTwos( list(4,5,6) ) => list(4,2,5,6)
    // addTwos( list(1,2,3) ) => list(1,2,3)
    ...
}

describe "Q4: addTwos" with {
    specify "a = list(1,2,3,4)" by {
       
    }
    specify "a = list(4,4,4)" by {
        
    }
    specify "a = emptyList" by {

    }
}


//############ Question 5 (of 6) #############

method round(xs:List⟦Number⟧) → Done {
    // modifies the parameter xs, which is a list of Numbers,
    // such that every number is rounded to the nearest whole number
    //
    // EXAMPLES:
    // if a = list(1.2, 7.6, 5.1, 3.8), then after requesting round(a), 
    // a = list(1, 8, 5, 4)
    
    ...
}

describe "Q5: round" with {
    specify "list(1.2, 7.6, 5.1, 3.8)" by {
       
    }
    specify "list(1, 2, 3, 4)" by {

    }
    specify "emptyList" by {
        
    }
}

//############ Question 6 (of 6) #############

method withoutOdd(xs:List⟦Number⟧) -> List {
    // returns a new list like xs,
    // except that all of the odd numbers have been removed
    //
    // EXAMPLES: 
    // withoutOdd( list(1, 2, 3, 4, 5) ) => list (1, 3, 5)
    
    ...
}

describe "Q6: oddNumberList" with {
    specify "list(1,2,3,4,5)" by {
        
    }
    specify "list(2,4,6)" by {
        
    }
    specify "list(1,3,5)" by {
        
    }
    specify "emptyList" by {
        
    }
}

