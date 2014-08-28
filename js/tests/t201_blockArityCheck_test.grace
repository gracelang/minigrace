{ a, b -> print ("GOT 1: " ++ a)}.apply(345, 321)
{ a, b, c -> print ("GOT 3: " ++ a ++ b ++ c)}.apply(123, 456, 789)
try {
    { a, b -> print ("GOT2 " ++ a ++ b) }.apply(123, 456, 789)
} catch { ex: ProgrammingError ->
    print "{ex}"
}
try {
    { a, b, c, d -> print ("GOT4 " ++ a ++ b ++ c ++ d) }.apply(123, 456, 789)
} catch { ex: ProgrammingError ->
    print "{ex}"
}

print("done")

