package grace.lang;

/**
 * A lower level prelude than the one defined in grace.lib which brings
 * together definitions in other classes and supplies methods for coercing
 * Java values to and from Grace objects.
 * 
 * The intention is that a Grace module extends this class so all of these
 * methods become available unqualified within that module.
 * 
 * @author Timothy Jones
 */
public abstract class Prelude extends Value {

  public Prelude() {
    super(Egal.Value);
  }

  public static final Nothing nothing = Nothing.nothing;

  public static final Bool $true = Bool.$true;
  public static final Bool $false = Bool.$false;

  public static Bool $boolean(boolean bool) {
    return bool ? $true : $false;
  }

  public static Num $number(double number) {
    return new Num(number);
  }

  public static Str $string(String string) {
    return new Str(string);
  }

  public static List $list(Value... elements) {
    return new List(elements);
  }

  protected static final class ValueBlock extends Block {

    private Value value;

    private ValueBlock(Value value) {
      super(nothing);

      this.value = value;
    }

    public Value apply(Value self, Value... params) {
      return value;
    }

  }

  public static boolean $javaBoolean(Value bool) {
    if (bool instanceof Bool) {
      return ((Bool) bool).value;
    }

    Value $super = bool.$super();
    if ($super != nothing) {
      return $javaBoolean($super);
    }

    return bool.invoke("ifTrue$else", new ValueBlock($true), new ValueBlock(
        $false)) == $true;
  }

  public static double $javaNumber(Value number) {
    if (number instanceof Num) {
      return ((Num) number).value;
    }

    Value $super = number.$super();
    if ($super != nothing) {
      return $javaNumber($super);
    }

    throw new RuntimeException("Used non-number as a number.");
  }
  
  public static float $javaFloat(Value number) {
  	return (float) $javaNumber(number);
  }

  public static int $javaInteger(Value number) {
    return (int) $javaNumber(number);
  }

  public static String $javaString(Value string) {
    if (string instanceof Str) {
      return ((Str) string).value;
    }

    Value $super = string.$super();
    if ($super != nothing) {
      return $javaString($super);
    }

    throw new RuntimeException("Used non-string as a string.");
  }

  public static Nothing print(Value self, Value value) {
    System.out.println(value.asString(value));
    return nothing;
  }

  public static Value length(Value self, Value obj) {
    return obj.invoke("size");
  }

  public static Value raise(Value self, Value message) {
    throw new RuntimeException($javaString(message.asString(message)));
  }

  public static final class HashMapClass extends Value {

    private HashMapClass() {
      super(Egal.Value);
    }

    public Value $new() {
      return new HashMap();
    }

  }

  public static final HashMapClass HashMap = new HashMapClass();

  public static final Value prelude = grace.lib.prelude.$module();

  public static Value escapestring(Value self, Value str) {
    final String p = ((Str) str).value;

    int len = p.length();
    char[] buf = new char[len * 3 + 1];

    int op = 0;

    for (int ip = 0; ip < len; ip++, op++) {
      final char c = p.charAt(ip);
      if (c == '"') {
        buf[op++] = '\\';
        buf[op++] = '2';
        buf[op] = '2';
      } else if (c == '\\') {
        buf[op++] = '\\';
        buf[op] = '\\';
      } else if (c >= 32 && c <= 126) {
        buf[op] = c;
      } else {
        buf[op++] = '\\';
        char[] b2 = String.format("%x", (int) (c & 255)).toCharArray();

        if (b2.length < 2) {
          b2 = new char[] { b2[0], 0 };
        }

        if (b2[1] == 0) {
          buf[op++] = '0';
          buf[op] = b2[0];
        } else {
          buf[op++] = b2[0];
          buf[op] = b2[1];
        }
      }
    }

    buf[op] = 0;

    StringBuilder builder = new StringBuilder();
    for (char c : buf) {
      if (c == 0) {
        break;
      }

      builder.append(c);
    }

    return new Str(builder.toString());
  }

  public static void printException(Exception ex) {
    System.err.println(ex);

    StackTraceElement[] trace = ex.getStackTrace();
    final int length = trace.length - 1;
    for (int i = 0; i < length; i++) {
      StackTraceElement el = trace[i];
      String cl = el.getClassName();
      String mt = el.getMethodName();

      if (!(cl.equals("grace.lang.Value")
          && (mt.equals("invoke") || mt.equals("binop"))
          || cl.startsWith("sun.reflect") || cl.startsWith("java.lang.reflect")
          || cl.contains("$") || mt.equals("$module"))) {
        System.err.println("\tat " + el);
      }
    }
  }

}
