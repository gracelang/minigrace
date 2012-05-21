package grace.lang;

import static grace.lang.Bool.$false;
import static grace.lang.Nothing.nothing;
import static grace.lang.Prelude.$boolean;
import static grace.lang.Prelude.$javaInteger;
import static grace.lang.Prelude.$javaString;

public class Str extends Value {

  public final String value;

  public Str(String value) {
    super(Egal.Value);
    this.value = value;
  }

  // ==
  public Bool bin$61$61(Value self, Value o) {
    if (o instanceof Str) {
      if (!value.equals(((Str) o).value)) {
      	return $false;
      }
      
      return (Bool) super.bin$61$61(self, o);
    }

    Value $super = o.$super();
    if ($super != nothing) {
      return bin$61$61(self, $super);
    }

    return $false;
  }

  // ++
  public Str bin$43$43(Value self, Value other) {
    return new Str(value + $javaString(other.asString(other)));
  }

  public Str at(Value self, Value index) {
    int i = $javaInteger(index) - 1;
    return new Str(value.substring(i, i + 1));
  }

  // []
  public Str bin$91$93(Value self, Value index) {
    int i = $javaInteger(index) - 1;
    return new Str(value.substring(i, i + 1));
  }

  public Num size(Value self) {
    return new Num(value.length());
  }

  public Str replace$with(Value self, Value what,
      Value with) {
    return new Str(value.replace($javaString(what), $javaString(with)));
  }

  public Str substringFrom$to(Value self, Value from,
      Value to) {
    int i = $javaInteger(to);
    if (i >= value.length()) {
      return new Str(value.substring($javaInteger(from) - 1));
    }
    return new Str(value.substring($javaInteger(from) - 1, i));
  }

  public Num ord(Value self) {
    return new Num(value.codePointAt(0));
  }

  public Str asString(Value self) {
    return this;
  }

  public List indices(Value self) {
    List list = new List();
    int length = value.length();
    for (int i = 0; i < length; i++) {
      list.push(list, new Num(i));
    }

    return list;
  }

  public GraceStringIterator iter(Value self) {
    return new GraceStringIterator();
  }

  public class GraceStringIterator extends Value {

    private int i = 0;
    
    private GraceStringIterator() {
      super(Egal.Pointer);
    }

    public Value next(Value self) {
      char[] cs = { value.charAt(i++) };
      return new Str(new String(cs));
    }

    public Bool havemore(Value self) {
      return $boolean(i < value.length());
    }

  }

  public String toString() {
    return value;
  }

}
