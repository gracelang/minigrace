package grace.lang;

import static grace.lang.Bool.$false;
import static grace.lang.Nothing.nothing;
import static grace.lang.Prelude.$boolean;
import static grace.lang.Prelude.$javaNumber;
import static grace.lang.Prelude.$javaString;

public class Num extends Top {

  public final double value;

  public Num(double value) {
    super(Egal.Value);
    this.value = value;
  }

  // - (Negative)
  public Num prefix$45(Obj self) {
    return new Num(-value);
  }

  // ==
  public Bool bin$61$61(Obj self, Obj o) {
    if (o instanceof Num) {
      if (value != ((Num) o).value) {
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

  // +
  public Num bin$43(Obj self, Obj other) {
    return new Num(value + $javaNumber(other));
  }

  // -
  public Num bin$45(Obj self, Obj other) {
    return new Num(value - $javaNumber(other));
  }

  // *
  public Num bin$42(Obj self, Obj other) {
    return new Num(value * $javaNumber(other));
  }

  // /
  public Num bin$47(Obj self, Obj other) {
    return new Num(value / $javaNumber(other));
  }

  // %
  public Num bin$37(Obj self, Obj other) {
    return new Num(value % $javaNumber(other));
  }

  // ++
  public Str bin$43$43(Obj self, Obj other) {
    return new Str($javaString(asString(self))
        + $javaString(other.invoke("asString")));
  }

  // ..
  public List bin$46$46(Obj self, Obj other) {
    List list = new List();
    int to = (int) $javaNumber(other);
    for (int i = (int) value; i <= to; i++) {
      list.push(list, new Num(i));
    }

    return list;
  }

  // <
  public Bool bin$60(Obj self, Obj other) {
    return $boolean(value < $javaNumber(other));
  }

  // >
  public Bool bin$62(Obj self, Obj other) {
    return $boolean(value > $javaNumber(other));
  }

  // <=
  public Bool bin$60$61(Obj self, Obj other) {
    return $boolean(value <= $javaNumber(other));
  }

  // >=
  public Bool bin$62$61(Obj self, Obj other) {
    return $boolean(value >= $javaNumber(other));
  }

  public Str asString(Obj self) {
    if (Math.floor(value) == value) {
      return new Str(Integer.toString((int) value));
    }

    return new Str(Double.toString(value));
  }

}
