package grace.lang;

public class GraceNumber extends GraceObject {
  
  public final double value;

  public GraceNumber(double value) {
    this.value = value;
  }

  private static double num(GraceObject obj) {
    return ((GraceNumber) obj).value;
  }

  private static String str(GraceObject obj) {
    return ((GraceString) obj).value;
  }

  // - (Negative)
  public GraceObject prefix$45() {
    return new GraceNumber(-value);
  }

  // ==
  public GraceObject bin$61$61(GraceObject o) {
    return GraceBoolean.evaluate(o instanceof GraceNumber &&
        value == num(o));
  }

  // +
  public GraceObject bin$43(GraceObject other) {
    return new GraceNumber(value + num(other));
  }

  // -
  public GraceObject bin$45(GraceObject other) {
    return new GraceNumber(value - num(other));
  }

  // *
  public GraceObject bin$42(GraceObject other) {
    return new GraceNumber(value * num(other));
  }

  // /
  public GraceObject bin$47(GraceObject other) {
    return new GraceNumber(value / num(other));
  }

  // %
  public GraceObject bin$37(GraceObject other) {
    return new GraceNumber(value % num(other));
  }

  // ++
  public GraceObject bin$43$43(GraceObject other) {
    return new GraceString(str(asString()) + str(other.asString()));
  }

  // ..
  public GraceObject bin$46$46(GraceObject other) {
    GraceList list = new GraceList();
    int to = (int) num(other);
    for (int i = (int) value; i <= to; i++) {
      list.push(new GraceNumber(i));
    }

    return list;
  }

  // <
  public GraceObject bin$60(GraceObject other) {
    return GraceBoolean.evaluate(value < num(other));
  }

  // >
  public GraceObject bin$62(GraceObject other) {
    return GraceBoolean.evaluate(value > num(other));
  }

  // <=
  public GraceObject bin$60$61(GraceObject other) {
    return GraceBoolean.evaluate(value <= num(other));
  }

  // >=
  public GraceObject bin$62$61(GraceObject other) {
    return GraceBoolean.evaluate(value >= num(other));
  }

  // -
  public GraceObject pre$45() {
    return new GraceNumber(-value);
  }

  public GraceObject asString() {
    if (Math.floor(value) == value) {
      return new GraceString("" + (int) value);
    }
    return new GraceString("" + value);
  }

}
