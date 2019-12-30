dialect "minitest"
// Implements a prefix tree, also known as a trie.  Maintains a prefix-closed
// set of sequences.
//
// If [a, b, c] is already in the trie, it is considered to also contain
// all prefixes, i.e., [], [a] and [a, b], even though it has size 1
// The empty prefixTree contains the empty sequence.

import "prefixTree" as pt


testSuite "prefix tree" with {
    
    test "empty trie contains nothing" by {
        deny (pt.prefixTree.contains ["a"]) description "empty trie contains [\"a\"]"
    }
    test "empty trie contains empty entry" by {
        assert (pt.prefixTree.contains []) description "empty trie does not contain entry"
    }
    test "entry of length 1" by {
        def t = pt.prefixTree.add ["a"]
        assert (t.size) shouldBe 1
        assert (t.contains ["a"]) description "trie does not contain [\"a\"]"
    }
    test "entry of length 2" by {
        def t = pt.prefixTree.add ["a", "b"]
        assert (t.size) shouldBe 1
        assert (t.contains ["a"]) description "trie does not contain [\"a\"]"
        assert (t.contains ["a", "b"]) description "trie does not contain [\"a\", \"b\"]"
    }
    test "entry of length 2 followed by prefix" by {
        def t = pt.prefixTree.add ["a", "b"].add ["a"]
        assert (t.size) shouldBe 1
        assert (t.contains ["a"]) description "trie does not contain [\"a\"]"
        assert (t.contains ["a", "b"]) description "trie does not contain [\"a\", \"b\"]"
    } 
    test "multiple entries of length 2 and 3 " by {
        def toAdd = [ "abc", "xyz", "abd", "xy", "acw"]
        def t = pt.prefixTree
        toAdd.do { each → t.add (each) }
        assert (t.size) shouldBe 4      // xy doesn't count, because xyz is there
        toAdd.do { each → 
            assert (t.contains (each)) description "trie does not contain \"{each}\""
        }
        def notPresent =  [ "abx", "ayz", "abb", "xx", "aaw"]
        notPresent.do { each → 
            deny (t.contains (each)) description "trie contains \"{each}\""
        }
    }
    test "entry longer than any inserted" by {
        def t = pt.prefixTree.add ["a", "b"].add ["a"]
        assert (t.size) shouldBe 1
        deny (t.contains ["a", "b", "c"])
              description "trie contains [\"a\", \"b\", \"c\"]"
    }
    test "entry extends prior entry" by {
        def t = pt.prefixTree.add ["a"].add ["a", "b"]
        assert (t.size) shouldBe 1
        assert (t.contains ["a"]) description "trie does not contain [\"a\"]"
        assert (t.contains ["a", "b"]) description "trie does not contain [\"a\", \"b\"]"
    }
    test "trie with contents contain empty entry" by {
        def t = pt.prefixTree.add ["a"].add ["a", "b"]
        assert (t.size) shouldBe 1
        assert (t.contains [ ]) description "trie does not contain empty entry"
    }
}
exit
