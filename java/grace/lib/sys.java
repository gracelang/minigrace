package grace.lib;

import grace.lang.*;

public final class sys extends GracePrelude {
  
  private static sys $module;
  public static sys $module() {
    return $module == null ? $module = new sys() : $module;
  }

  private static String[] args;
  public static void setArgs(final String[] args, final String className) {
    final int length = args.length;

    for (int i = 0; i < args.length; i++) {
      final String arg = args[i];
      if (arg.charAt(0) == '"' && arg.charAt(arg.length() - 1) == '"') {
        args[i] = arg.substring(1, arg.length() - 1);
      }
    }

    final String[] vargs = new String[length + 1];
    final String classpath = System.getProperty("java.class.path");
    vargs[0] = "java -cp " + classpath + " " + className;
    System.arraycopy(args, 0, vargs, 1, args.length);
    sys.args = vargs;
  }

  public GraceList argv(GraceObject self) {
    GraceList list = new GraceList();

    for (String arg : args) {
      list.push(list, new GraceString(arg));
    }

    return list;
  }

  public GraceNothing exit(GraceObject self, GraceObject status) {
    System.exit((int) ((GraceNumber) status).value);
    return nothing;
  }

  public GraceNumber cputime(GraceObject self) {
    return new GraceNumber(0);
  }

  public GraceNumber elapsed(GraceObject self) {
    return new GraceNumber(0);
  }

  public GraceString execPath(GraceObject self) {
    return new GraceString(System.getProperty("user.dir"));
  }

}
