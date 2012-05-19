package grace.lang;

public final class Nothing extends Value {
  
  public static final Nothing nothing = new Nothing();

  private Nothing() {
    super(Egal.Value);
  }

}
