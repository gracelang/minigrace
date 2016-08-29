// This module is a subsitute for the minitest dialect.
// It does no testing at all.  It exists so that student code that
// depends on minitest can be run by the instuctor under gUnit,
// without getting confounding results from the minitest tests.

import "standardGraceClass" as sgc

inherit sgc.standardGrace

method assert(bb:Boolean) description(str:String) { }

method deny(bb:Boolean) description(str:String) { }

method assert(bb:Boolean) { }

method deny(bb:Boolean) { }

method assert(s1:Object) shouldBe (s2:Object) { }

method assert(s1:Object) shouldntBe (s2:Object) { }

method assert(n1:Number) shouldEqual (n2:Number) within (epsilon) { }

method assert(b:Block) shouldRaise (desired) { }

method assert(b:Block) shouldntRaise (undesired) { }

method assert(s:Object) hasType (desired:Type) { }

method deny(s:Object) hasType (undesired:Type) { }

method assertType(T:Type) describes (value) { }

method failBecause(reason) { }

method testSuiteNamed (name) with (block) { }

method testSuite (block) { }

method test(name:String) by(block) { }

