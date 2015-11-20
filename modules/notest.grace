// This module is a subsitute fo rthe minitest dialect.
// It does no testing at all.  It exists so that student code that
// depends on minitest can be run by the instuctor under gUnit,
// without getting confounding results from the mintest tests.

inherits prelude.methods

method assert(bb:Boolean) description(str:String) { }

method deny(bb:Boolean) description(str:String) { }

method assert(bb:Boolean) { }

method deny(bb:Boolean) { }

method assert(s1:Object) shouldBe (s2:Object) { }

method assert(s1:Object) shouldntBe (s2:Object) { }

method assert(n1:Number) shouldEqual (n2:Number) within (epsilon:Number) { }

method assert(b:Block) shouldRaise (desired:ExceptionKind) { }

method assert(b:Block) shouldntRaise (undesired:ExceptionKind) { }

method assert(s:Object) hasType (desired:Type) { }

method deny(s:Object) hasType (undesired:Type) { }

method assertType(T:Type) describes (value) { }

method failBecause(reason) { }

method testSuiteNamed (name:String) with (block:Block) { }

method testSuite (block:Block) { }

method test(name:String) by(block:Block) { }

