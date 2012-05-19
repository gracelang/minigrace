package grace.lib;

import grace.lang.*;

public final class sys extends Prelude {
  
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

  public List argv(Value self) {
    List list = new List();

    for (String arg : args) {
      list.push(list, $string(arg));
    }

    return list;
  }

  public Nothing exit(Value self, Value status) {
    System.exit((int) ((Num) status).value);
    return nothing;
  }

  public Num cputime(Value self) {
    return $number(0);
  }

  public Num elapsed(Value self) {
    return $number(0);
  }

  public Str execPath(Value self) {
    return $string(System.getProperty("user.dir"));
  }

}
