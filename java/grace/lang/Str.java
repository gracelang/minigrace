package grace.lang;

import static grace.lang.Bool.$false;
import static grace.lang.Nothing.nothing;
import static grace.lang.Prelude.$boolean;
import static grace.lang.Prelude.$list;
import static grace.lang.Prelude.$javaBoolean;
import static grace.lang.Prelude.$javaInteger;
import static grace.lang.Prelude.$javaString;

public class Str extends Top {

  public final String value;

  public Str(String value) {
    super(Egal.Value);
    this.value = value;
  }

  // ==
  public Bool bin$61$61(Obj self, Obj o) {
    if (o instanceof Str) {
      if (!value.equals(((Str) o).value)) {
        return $false;
      }

      return (Bool) super.bin$61$61(self, o);
    }

    Obj $super = o.$super();
    if ($super != nothing) {
      return bin$61$61(self, $super);
    }

    return $false;
  }

  // ++
  public Str bin$43$43(Obj self, Obj other) {
    return new Str(value + $javaString(other.invoke("asString")));
  }

  public Str at(Obj self, Obj index) {
    int i = $javaInteger(index) - 1;
    return new Str(value.substring(i, i + 1));
  }

  // []
  public Str bin$91$93(Obj self, Obj index) {
    int i = $javaInteger(index) - 1;
    return new Str(value.substring(i, i + 1));
  }

  public Num size(Obj self) {
    return new Num(value.length());
  }

  public Str replace$with(Obj self, Obj what, Obj with) {
    return new Str(value.replace($javaString(what), $javaString(with)));
  }

  public Str substringFrom$to(Obj self, Obj from, Obj to) {
    int i = $javaInteger(to);
    if (i >= value.length()) {
      return new Str(value.substring($javaInteger(from) - 1));
    }
    return new Str(value.substring($javaInteger(from) - 1, i));
  }

  public Num ord(Obj self) {
    return new Num(value.codePointAt(0));
  }

  public Str asString(Obj self) {
    return this;
  }

  public List indices(Obj self) {
    List list = new List();
    int length = value.length();
    for (int i = 0; i < length; i++) {
      list.push(list, new Num(i));
    }

    return list;
  }

  public GraceStringIterator iter(Obj self) {
    return new GraceStringIterator();
  }

  public class GraceStringIterator extends Obj {

    private int i = 0;

    private GraceStringIterator() {
      super(Egal.Pointer);
    }

    public Obj next(Obj self) {
      char[] cs = { value.charAt(i++) };
      return new Str(new String(cs));
    }

    public Bool havemore(Obj self) {
      return $boolean(i < value.length());
    }

  }
  
  public Obj match(Obj self, Obj against) {
    Obj match = Types.String.match(Types.String, against);
    if (!$javaBoolean(match)) {
      return match;
    }
    
    if ($javaString(against).equals(value)) {
      return new Type.MatchSucceeded(against, $list(against));
    }
    
    return new Type.MatchFailed(against);
  }

  public String toString() {
    return value;
  }

}
