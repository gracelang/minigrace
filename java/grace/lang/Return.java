package grace.lang;

@SuppressWarnings("serial")
public class Return extends RuntimeException {

  public final int scope;
  
  public final Obj value;

  public Return(int scope, Obj value) {
    this.scope = scope;
    this.value = value;
  }

}
