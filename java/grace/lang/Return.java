package grace.lang;

@SuppressWarnings("serial")
public class Return extends RuntimeException {

  public final Obj value;

  public Return(final Obj value) {
    this.value = value;
  }

}
