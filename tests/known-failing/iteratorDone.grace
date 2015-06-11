class fakeIter.iterator {
    var count := 5
    method hasNext {
        if (count > 0) then {
            count := count - 1
            true 
        } else {
            false
        }
    }
    method next { done }
}

def result = list.empty

for (fakeIter) do { each ->
    result.addLast(each)
}

print(result)