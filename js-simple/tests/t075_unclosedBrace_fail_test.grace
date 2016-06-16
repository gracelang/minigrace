type NumberSet = {
    contains(n:Number) -> Boolean
    add(n:Number) -> Done
    union(s:NumberSet) -> Done
    intersection(s:NumberSet) -> Done
    isEmpty -> Boolean
    asString -> String
    do(action) -> Done
}

// A factory used to construct new lists
class aList.cons(value, tailList) {
    // A method to convert a list to a string
    method asString {"({head}:{tail})"}
    
    // A method to set the head value of the list
    method head {value}
    
    // A method to set the tail of the list 
    method tail {tailList}
    
    // A method to perform the do method on a list
    method do(action) {
        action.apply(head)
        tail.do(action)
    }
    
    // A method to perform the map function on a list
    method map(function) {
        aList.cons(function.apply(head),
                   tail.map(function))
    }
    
    // A method to compute the size of a list 
    method size {1 + tail.size}
    
    // A method that determines if a list contains a 
    // certain number 
    method contains(num: Number) -> Boolean {
        if(num == head) then {
            return true
        }
        else {
            contains(tailList)
        }
    }
}

def emptyList = object {
    // The definition of an empty list
    method asString {"<emptyList>"}
    method do(action) {}
    method map(function) {self}
    method size {0}
} 

// The constructor of a new set
class aSet.new -> NumberSet {
    // Use a list to represent a set
    // When it is first created, the list is empty
    var rep := emptyList;
  
    // A method that checks if a set contains a given number
    method contains(num: Number) -> Boolean {
       rep.do{x-> if (x==num) then { return true }} 
      //rep.do{each: Number -> 
        // check if each element is equal to the given number
        //if (each == num) then {
          //return true // No need to keep looking if found
        //}
      //}
        //false // The number is not in the set
    }
    // A method that adds an element to the set
    method add(num: Number) -> Done {
      
      // Create a new list to store the set with the added element
      var newRep := emptyList
      
      // If the number is not already in the set, add it
      if (!self.contains(num)) then {
        newRep := aList.cons(num, rep)
      }
      // Save the modified set 
      rep := newRep
    }

    // A method that calculates the union of two sets
    method union(s: aset.new) -> Done { 
      
      // Create a new list to store the result of the union
      var newRep := emptyList
      
      // Add each element of the existing set to the new list
      // if the new list does not already contain that element
      rep.do{x-> if (!newRep.listContains(x)) then { newRep := aList.cons(x, newRep) }}
      //rep.do{each: Number -> 
       //if(!newRep.listContains(each)) then {
         //newRep := aList.cons(each, newRep)
        //}
      //}
      
      // Add each element of the second set to the new list
      // if the new list does not already contain that element 
      s.do{x-> if (!newRep.listContains(x)) then { newRep := aList.cons(x, newRep) }}
       //s.do{each: Number ->
         //if(!newRep.listContains(each)) then {
           //newRep := aList.cons(each, newRep)
          //}
       //}
       // Save the union of the sets
      rep := newRep
     }
 
   // A method that calculates the intersection of two sets
    method intersection (s: aSet.new) -> Done {
     
      // Create a new list to store the result of the intersection
      var newRep := emptyList
     
      // Add the elements common to both sets to a the new list
      rep.do{each: Number -> 
        if(s.contains(each)) then {
          var newRep := aList.cons(each, newRep)
        }
      }
      // Save the intersection of the sets
      rep := newRep
    }
 
    // A method that determines if a set is empty
    method isEmpty -> Boolean {
      if (rep.size == 0) then {
        return true
      }
    }
 
    // A method that converts a set to a string
    method asString -> String {
      // Create a variable to store the new string
      var astring := String
      // Use the asString method defined for lists
      astring := rep.asString
      return aString
    }
 
    method do(action) -> Done {
      // Create a list to store the result of applying 
      // the action to the set
      var newRep := emptyList
      // Perform the action on every element in the set
      newRep := rep.map(action)
      // Save the result of performing the action on the set
      rep := newRep
    }
   
    // Create an empty set to test
    var testEmptySet := emptySet
   
    // Test the contains method 
    print {testSet1.contains(4)}
   
    // Create a non-empty set to test
    var testSet1 := aSet.new
    print {testSet1.add(0)}
    print {testSet1.add(1)}
    print {testSet1.add(1)}
    print {testSet1.add(2)}
    print {testSet1.add(4)}
   
    // Test the contains method 
    print {testSet1.contains(2)}
    print {testSet1.contains(3)}
   
    // Create another non=empty set to test 
    var testSet2 := aSet.new
    print {testSet1.add(4)}
    print {testSet1.add(0)}
    print {testSet1.add(6)}
    print {testSet1.add(7)}
    print {testSet1.add(7)}
   
    // Test the contains method  
    print {testSet1.contains(0)}
    print {testSet1.contains(9)}

    // Test the union method
    print {testSet1.union(testSet2)}
   
    // Test the intersection method 
    print {testSet1.intersection(testSet2)}
   
    // Test the isEmpty method
    print {testSet2.isEmpty}
