dialect "grapl"

N ← [1, 2, 3, 4]
print(N)
print(N + 2)
print(+/N)

// Standard Lotto example
print(L[⍋(L ← (n 6 ? 40))])
// Calculate primes up to 20 - note that the / function has its parameters
// reversed here, because of Grace's evaluation order.
print((P ← (n 1 ↓ ι 20))/ ~(P∊(P∘·*P)))
