def a = primitiveArray.new(6)
a.at 0 put 17
a.at 1 put 20
a.at 2 put 10
a.at 3 put 5
a.at 4 put 1
a.at 5 put 0
print(a)
a.sortInitial 4 by {l, r ->
    if (l == r) then {0} elseif {l < r} then {-1} else {1}
}
print(a)

def b = primitiveArray.new(0)
print(b)
b.sortInitial 0 by {l, r ->
    if (l == r) then {0} elseif {l < r} then {-1} else {1}
}
print(b)

def c = primitiveArray.new(9)
c.at 0 put "a"
c.at 1 put "w"
c.at 2 put "q"
c.at 3 put "b"
c.at 4 put "d"
c.at 5 put "z"
c.at 6 put "t"
print(c)
c.sortInitial 7 by {l, r ->
    if (l == r) then {0} elseif {l.ord < r.ord} then {-1} else {1}
}
print(c)

try {
    a.sortInitial 6 by {l, r ->
        if (l == r) then {"equal"} 
            elseif {l < r} then {"less"}
            else {"greater"}
    }
} catch {ex:TypeError -> print "Correctly raised TypeError"}
