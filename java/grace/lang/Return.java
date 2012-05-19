package grace.lang;

@SuppressWarnings("serial")
public class Return extends RuntimeException {

	public final Value value;

  public Return(final Value value) {
    this.value = value;
  }

}
