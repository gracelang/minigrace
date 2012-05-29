package grace.lang;

import static grace.lang.Prelude.$list;

public abstract class Types extends Obj {

  public Types() {
    super(Egal.Value);
  }

  public static class ClassType extends Type {

    private final Class<? extends Obj> test;

    public ClassType(Class<? extends Obj> test, String... methods) {
      super(methods);

      this.test = test;
    }

    public Obj match(Obj self, Obj against) {
      if (against.getClass().equals(test)) {
        return new Match.MatchSucceeded(against, $list(against));
      }

      Obj $super = against.getSuper();
      if (!$super.getClass().equals(Top.class)) {
        return match(self, $super);
      }

      return super.match(self, against);
    }

  }

  public static final Type String = new ClassType(Str.class, "++", "size", "ord",
      "at", "==", "!=", "/=", "iter", "substringFrom()to", "replace()with",
      "hashcode", "indices", "asString", "asNumber", "match");

  public static final Type Number = new ClassType(Num.class, "+", "*", "-", "/", "%",
      "==", "!=", "/=", "++", "<", "<=", ">", ">=", "..", "asString",
      "prefix-", "inBase", "truncate", "match");

  public static final Type None = new ClassType(Nothing.class, "==", "!=");

  public static final Type Boolean = new ClassType(Bool.class, "++", "&", "|", "&&",
      "||", "==", "!=", "/=", "prefix!", "not", "ifTrue", "asString", "match");

  public static final Type Block = new ClassType(Block.class, "==", "!=", "apply");

  public static final Type List = new ClassType(List.class, "size", "at", "[]",
      "[]:=", "at()put", "==", "!=", "/=", "contains", "iter", "push", "pop",
      "first", "last", "prepended", "indices", "asString");

}
