package grace.lang;

import static grace.lang.GraceBoolean.$false;
import static grace.lang.GraceNothing.nothing;
import static grace.lang.GracePrelude.$boolean;
import static grace.lang.GracePrelude.$javaNumber;
import static grace.lang.GracePrelude.$javaString;

public class GraceNumber extends GraceObject {

  public final double value;

  public GraceNumber(double value) {
    super(Egal.Value);
    this.value = value;
  }

  // - (Negative)
  public GraceNumber prefix$45(GraceObject self) {
    return new GraceNumber(-value);
  }

  // ==
  public GraceBoolean bin$61$61(GraceObject self, GraceObject o) {
    if (o instanceof GraceNumber) {
      return $boolean(value == ((GraceNumber) o).value);
    }

    GraceObject $super = o.$super();
    if ($super != nothing) {
      return bin$61$61(self, $super);
    }

    return $false;
  }

  // +
  public GraceNumber bin$43(GraceObject self, GraceObject other) {
    return new GraceNumber(value + $javaNumber(other));
  }

  // -
  public GraceNumber bin$45(GraceObject self, GraceObject other) {
    return new GraceNumber(value - $javaNumber(other));
  }

  // *
  public GraceNumber bin$42(GraceObject self, GraceObject other) {
    return new GraceNumber(value * $javaNumber(other));
  }

  // /
  public GraceNumber bin$47(GraceObject self, GraceObject other) {
    return new GraceNumber(value / $javaNumber(other));
  }

  // %
  public GraceNumber bin$37(GraceObject self, GraceObject other) {
    return new GraceNumber(value % $javaNumber(other));
  }

  // ++
  public GraceString bin$43$43(GraceObject self, GraceObject other) {
    return new GraceString($javaString(asString(self))
        + $javaString(other.asString(other)));
  }

  // ..
  public GraceList bin$46$46(GraceObject self, GraceObject other) {
    GraceList list = new GraceList();
    int to = (int) $javaNumber(other);
    for (int i = (int) value; i <= to; i++) {
      list.push(list, new GraceNumber(i));
    }

    return list;
  }

  // <
  public GraceBoolean bin$60(GraceObject self, GraceObject other) {
    return $boolean(value < $javaNumber(other));
  }

  // >
  public GraceBoolean bin$62(GraceObject self, GraceObject other) {
    return $boolean(value > $javaNumber(other));
  }

  // <=
  public GraceBoolean bin$60$61(GraceObject self, GraceObject other) {
    return $boolean(value <= $javaNumber(other));
  }

  // >=
  public GraceBoolean bin$62$61(GraceObject self, GraceObject other) {
    return $boolean(value >= $javaNumber(other));
  }

  public GraceString asString(GraceObject self) {
    if (Math.floor(value) == value) {
      return new GraceString(Integer.toString((int) value));
    }

    return new GraceString(Double.toString(value));
  }

}
