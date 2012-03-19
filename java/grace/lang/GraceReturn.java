package grace.lang;

public class GraceReturn extends RuntimeException {

  public final GraceObject value;

  public GraceReturn(final GraceObject value) {
    this.value = value;
  }

}
