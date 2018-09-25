// This module is a subsitute for the minispec dialect.
// It does no testing at all.  It exists so that student code that
// depends on minispec can be run by the instuctor under gUnit,
// without getting confounding results from the minispec specifications.

inherit prelude.methods

type Procedure0 = self.Procedure0

method expect(bb:Boolean) orSay (str:String) { }

method expect (a) toBe (b) orSay (str:String) { }

method expect (a) toBe (b) { }

method expect (a) notToBe (b) { }

method expect(n1:Number) toBe (n2:Number) within (epsilon) { }

method expect(b:Procedure0) toRaise (desired) { }

method expect(b:Procedure0) notToRaise (undesired) { }

method expect(s) toHaveType (desired:Type) { }

method expect(s) notToHaveType (undesired:Type) { }

method describe (name) with (block) { }

method specify (name:String) by (block) { }

method numberOfErrorsToRerun:=(_) { }
