package grace.lang;

public class GraceBoolean extends GraceObject {
  
  public static final GraceBoolean graceTrue  = new GraceBoolean(true);
  public static final GraceBoolean graceFalse = new GraceBoolean(false);

  public static GraceBoolean evaluate(boolean value) {
    return value ? graceTrue : graceFalse;
  }

  public boolean value;

  private GraceBoolean(boolean value) {
    this.value = value;
  }

  private static boolean bool(GraceObject obj) {
    return ((GraceBoolean) obj).value;
  }

  // ==
  public GraceObject bin$61$61(GraceObject o) {
    return evaluate(o instanceof GraceBoolean && bool(o) == value);
  }

  public GraceObject not() {
    return this == graceTrue ? graceFalse : graceTrue;
  }

  // !
  public GraceObject prefix$33() {
    return this == graceTrue ? graceFalse : graceTrue;
  }

  // &
  public GraceObject bin$38(GraceObject other) {
    return value && bool(other) ? graceTrue : graceFalse;
  }

  // |
  public GraceObject bin$124(GraceObject other) {
    return value || bool(other) ? graceTrue : graceFalse;
  }

  // &&
  public GraceObject bin$38$38(GraceObject other) {
    return !value ? graceFalse : (GraceBoolean) ((GraceBlock) other).apply();
  }

  // ||
  public GraceObject bin$124$124(GraceObject other) {
    return value ? graceTrue : (GraceBoolean) ((GraceBlock) other).apply();
  }

  public GraceObject ifTrue(GraceObject block) {
    return value ? ((GraceBlock) block).apply() : GraceVoid.value;
  }

  public GraceObject ifFalse(GraceObject block) {
    return value ? GraceVoid.value : ((GraceBlock) block).apply();
  }

  public GraceObject asString() {
    return new GraceString("" + value);
  }

}
