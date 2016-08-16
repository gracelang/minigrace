dialect "grapl"

N ← [1, 2, 3, 4]
print(N)
print(N + 2)
print(+/N)

// Standard Lotto example -- deal 6 numbers less than 40, and sort them
print "Lotto numbers: { L ⇊ (⍋(L ← (n 6 ? 40))) }"

// Calculate primes up to 20
print "numbers up to 20: { (T ← (n 1 ↓ ι 20)) }"
print "primes up to 20: { (~(T∊(T∘·*T))) / T }"

