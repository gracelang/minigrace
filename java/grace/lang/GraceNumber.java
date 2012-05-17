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
  public GraceNumber prefix$45(GraceObject self) {
    return new GraceNumber(-value);
  }

  // ==
  public GraceBoolean bin$61$61(GraceObject self, GraceObject o) {
    return GraceBoolean.evaluate(o instanceof GraceNumber &&
        value == num(o));
  }

  // +
  public GraceNumber bin$43(GraceObject self, GraceObject other) {
    return new GraceNumber(value + num(other));
  }

  // -
  public GraceNumber bin$45(GraceObject self, GraceObject other) {
    return new GraceNumber(value - num(other));
  }

  // *
  public GraceNumber bin$42(GraceObject self, GraceObject other) {
    return new GraceNumber(value * num(other));
  }

  // /
  public GraceNumber bin$47(GraceObject self, GraceObject other) {
    return new GraceNumber(value / num(other));
  }

  // %
  public GraceNumber bin$37(GraceObject self, GraceObject other) {
    return new GraceNumber(value % num(other));
  }

  // ++
  public GraceString bin$43$43(GraceObject self, GraceObject other) {
    return new GraceString(str(asString(self)) + str(other.asString(other)));
  }

  // ..
  public GraceList bin$46$46(GraceObject self, GraceObject other) {
    GraceList list = new GraceList();
    int to = (int) num(other);
    for (int i = (int) value; i <= to; i++) {
      list.push(list, new GraceNumber(i));
    }

    return list;
  }

  // <
  public GraceBoolean bin$60(GraceObject self, GraceObject other) {
    return GraceBoolean.evaluate(value < num(other));
  }

  // >
  public GraceBoolean bin$62(GraceObject self, GraceObject other) {
    return GraceBoolean.evaluate(value > num(other));
  }

  // <=
  public GraceBoolean bin$60$61(GraceObject self, GraceObject other) {
    return GraceBoolean.evaluate(value <= num(other));
  }

  // >=
  public GraceBoolean bin$62$61(GraceObject self, GraceObject other) {
    return GraceBoolean.evaluate(value >= num(other));
  }

  public GraceString asString(GraceObject self) {
    if (Math.floor(value) == value) {
      return new GraceString(Integer.toString((int) value));
    }
    return new GraceString(Double.toString(value));
  }

}
