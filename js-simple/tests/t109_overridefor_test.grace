
method for(anIterable) do(aBlock) {
    aBlock.apply("world")
    print "Not really a for loop now."
}

for (1..5) do {n->
    print "Hello {n}"
}
