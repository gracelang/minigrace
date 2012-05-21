package grace.lang;

public class Nothing extends Obj {

  public static final Nothing nothing = new Nothing();

  private Nothing() {
    super(Egal.Value);
  }

}
