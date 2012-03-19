package grace.lib;

import grace.lang.*;

public final class unicode extends GraceObject {
  
  private static unicode $module;
  public static unicode $module() {
    return $module == null ? $module = new unicode() : $module;
  }

  private static boolean isStr(GraceObject str) {
    return str instanceof GraceString;
  }

  private static char c(GraceObject str) {
    return ((GraceString) str).value.charAt(0);
  }

  private static int i(GraceObject num) {
    return (int) ((GraceNumber) num).value;
  }

  private static GraceObject e(boolean b) {
    return GraceBoolean.evaluate(b);
  }

  public GraceObject name(GraceObject str) {
    return new GraceString("");
  }

  public GraceObject category(GraceObject str) {
    return new GraceString("");
  }

  public GraceObject combining(GraceObject str) {
    return new GraceNumber(0);
  }

  public GraceObject mirrored(GraceObject str) {
    return e(Character.isMirrored(c(str)));
  }

  public GraceObject bidirectional(GraceObject str) {
    return new GraceString("");
  }

  public GraceObject iscategory(GraceObject str, GraceObject cat) {
    return GraceBoolean.graceFalse;
  }

  public GraceObject isSeparator(GraceObject str) {
    if (isStr(str)) {
      char c = c(str);
      if (c == '\n' || c == '\r') {
        return e(false);
      }

      return e(Character.isWhitespace(c));
    }

    int i = i(str);
    if (i == 10 || i == 13) {
      return e(false);
    }
    
    return e(Character.isWhitespace(i(str)));
  }

  public GraceObject isControl(GraceObject str) {
    if (isStr(str)) {
      return e(Character.getType(c(str)) == Character.CONTROL);
    }
    return e(Character.getType(i(str)) == Character.CONTROL);
  }

  public GraceObject isLetter(GraceObject str) {
    if (isStr(str)) {
      return e(Character.isLetter(c(str)));
    }
    return e(Character.isLetter(i(str)));
  }

  public GraceObject isNumber(GraceObject str) {
    if (isStr(str)) {
      return e(Character.isDigit(c(str)));
    }
    return e(Character.isDigit(i(str)));
  }

  public GraceObject isSymbolMathematical(GraceObject str) {
    if (isStr(str)) {
      return e(Character.getType(c(str)) == Character.MATH_SYMBOL);
    }
    return e(Character.getType(i(str)) == Character.MATH_SYMBOL);
  }

  public GraceObject create(GraceObject code) {
    return new GraceString(new String(Character
        .toChars((int) ((GraceNumber) code).value)));
  }

}
