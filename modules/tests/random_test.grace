dialect "minitest"

import "random" as random

def n = 10000
def expected = n/100

method assertRoughlyAsExpected (count, b) {
    assert (count > (expected * 0.5)) description "bucket {b} contains only {count} numbers"
    assert (count < (expected * 1.5)) description "bucket {b} contains as many as {count} numbers"
    // these bounds are very lax, but do ensure taht we cover the whole range of values.
    // They can be tightened to within 20%, but only if n is increased to 100000, which
    // makes the test run slowly.
}

testSuiteNamed "random" with {

    test "between0And1" by {
        def hg = list ((1..100).map { ix -> 0 })
        repeat (n) times {
            def rand = random.between0And1
            def bucket = (rand*100).truncated + 1
            hg.at(bucket) put (hg.at(bucket) + 1)
        }
        hg.keysAndValuesDo { ix, each -> assertRoughlyAsExpected (each, ix) }
    }
    
    test "between lo and hi" by {
        def hg = list ((1..100).map { ix -> 0 })
        def lo = 12
        def hi = 107
        def sz = hi - lo
        repeat (n) times {
            def rand = random.between (lo) and (hi)
            assert ((rand >= lo) && (rand < hi)) description "rand = {rand} not in [{lo}..{hi})"
            def bucket = ((rand - lo) * 100 / sz).truncated + 1
            hg.at(bucket) put (hg.at(bucket) + 1)
        }
        hg.keysAndValuesDo { ix, each -> assertRoughlyAsExpected (each, ix) }
    }
    
    test "integerIn lo to hi" by {
        def hg = list ((1..100).map { ix -> 0 })
        def lo = 12
        def hi = lo + 100 - 1
        def sz = hi - lo
        repeat (n) times {
            def rand = random.integerIn (lo) to (hi)
            assert ((rand >= lo) && (rand <= hi)) description "rand = {rand} not in [{lo}..{hi}]"
            assert ((rand - rand.truncated) == 0) description "rand = {rand} is not an integer"
            def bucket = rand - lo + 1
            hg.at(bucket) put (hg.at(bucket) + 1)
        }
        hg.keysAndValuesDo { ix, each -> assertRoughlyAsExpected (each, ix) }
    }
}
