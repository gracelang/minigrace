def a = primitiveArray.new(4)
a.at 0 put 17
a.at 1 put 20
a.at 2 put 10
a.at 3 put 5
print(a)
a.sort {l, r ->
    if (l == r) then {0} elseif (l < r) then {-1} else {1}
}
print(a)

def b = primitiveArray.new(0)
print(b)
b.sort {l, r ->
    if (l == r) then {0} elseif (l < r) then {-1} else {1}
}
print(b)

def c = primitiveArray.new(7)
c.at 0 put "a"
c.at 1 put "w"
c.at 2 put "q"
c.at 3 put "b"
c.at 4 put "d"
c.at 5 put "z"
c.at 6 put "t"
print(c)
c.sort {l, r ->
    if (l == r) then {0} elseif (l.ord < r.ord) then {-1} else {1}
}
print(c)

try {
    a.sort {l, r ->
        if (l == r) then {"equal"} 
            elseif (l < r) then {"less"}
            else {"greater"}
    }
} catch {ex:TypeError -> print "Correctly raised TypeError"}
