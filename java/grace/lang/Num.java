package grace.lang;

import static grace.lang.Bool.$false;
import static grace.lang.Nothing.nothing;
import static grace.lang.Prelude.$boolean;
import static grace.lang.Prelude.$javaNumber;
import static grace.lang.Prelude.$javaString;

public class Num extends Value {

  public final double value;

  public Num(double value) {
    super(Egal.Value);
    this.value = value;
  }

  // - (Negative)
  public Num prefix$45(Value self) {
    return new Num(-value);
  }

  // ==
  public Bool bin$61$61(Value self, Value o) {
    if (o instanceof Num) {
      if (value != ((Num) o).value) {
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

  // +
  public Num bin$43(Value self, Value other) {
    return new Num(value + $javaNumber(other));
  }

  // -
  public Num bin$45(Value self, Value other) {
    return new Num(value - $javaNumber(other));
  }

  // *
  public Num bin$42(Value self, Value other) {
    return new Num(value * $javaNumber(other));
  }

  // /
  public Num bin$47(Value self, Value other) {
    return new Num(value / $javaNumber(other));
  }

  // %
  public Num bin$37(Value self, Value other) {
    return new Num(value % $javaNumber(other));
  }

  // ++
  public Str bin$43$43(Value self, Value other) {
    return new Str($javaString(asString(self))
        + $javaString(other.asString(other)));
  }

  // ..
  public List bin$46$46(Value self, Value other) {
    List list = new List();
    int to = (int) $javaNumber(other);
    for (int i = (int) value; i <= to; i++) {
      list.push(list, new Num(i));
    }

    return list;
  }

  // <
  public Bool bin$60(Value self, Value other) {
    return $boolean(value < $javaNumber(other));
  }

  // >
  public Bool bin$62(Value self, Value other) {
    return $boolean(value > $javaNumber(other));
  }

  // <=
  public Bool bin$60$61(Value self, Value other) {
    return $boolean(value <= $javaNumber(other));
  }

  // >=
  public Bool bin$62$61(Value self, Value other) {
    return $boolean(value >= $javaNumber(other));
  }

  public Str asString(Value self) {
    if (Math.floor(value) == value) {
      return new Str(Integer.toString((int) value));
    }

    return new Str(Double.toString(value));
  }

}
