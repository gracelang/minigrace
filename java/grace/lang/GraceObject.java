package grace.lang;

import grace.lib.prelude;

import java.lang.reflect.*;
import java.util.Iterator;
import java.util.Map;
import java.util.HashMap;

public class GraceObject implements Iterable<GraceObject>,
                                    Iterator<GraceObject> {

  public static final GraceObject $void = GraceVoid.value;

  public static final GraceObject MatchFailed = new GraceObject();

  public static final GraceObject HashMap = new GraceObject() {
    public GraceObject $new() {
      return new GraceHashMap();
    }
  };

  public static final GraceObject prelude = new prelude();

  public static GraceObject escapestring(GraceObject str) {
    final String p = ((GraceString) str).value;

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

    return new GraceString(builder.toString());
  }

  public static GraceObject length(GraceObject obj) {
    return obj.invoke("size");
  }

  public static GraceObject raise(GraceObject obj) {
    throw new RuntimeException(((GraceString) obj).value);
  }

  private GraceObject self;

  private final GraceObject $super;

  public final GraceObject outer;

  public GraceObject() {
    this.$super = new GraceObject(null);
    this.outer = null;

    setSelf(this);
  }

  public GraceObject(final GraceObject value, final boolean isSuper) {
    this.$super = isSuper ? value : new GraceObject(value);
    this.outer = isSuper ? null : value;

    setSelf(this);
  }

  public GraceObject(final GraceObject $super, final GraceObject outer) {
    this.$super = $super;
    this.outer = outer;

    setSelf(this);
  }

  private GraceObject(final GraceObject outer) {
    this.$super = null;
    this.outer = outer;

    setSelf(this);
  }

  private void setSelf(final GraceObject self) {
    this.self = self;
    if ($super != null) {
      $super.setSelf(self);
    }
  }

  public GraceObject getSelf() {
    return self;
  }

  public GraceObject getSuper() {
    return $super;
  }

  public GraceObject $match(GraceObject m, GraceBlock e, GraceBlock... cs) {
    for (GraceBlock c : cs) {
      GraceObject result = c.apply(m);
      if (result != MatchFailed) {
        return result;
      }
    }

    if (e != null) {
      return e.apply();
    }

    return MatchFailed;
  }


  public GraceObject invoke(String which, GraceObject... args) {
    return invoke(escapeInvokeName(which), which, "method", args);
  }

  private static String escapeInvokeName(String which) {
    String name = "";
    int l = which.length();
    char[] cs = which.toCharArray();
    for (int i = 0; i < l; i++) {
      char c = cs[i];
      if (Character.isLetterOrDigit(c) || c == '$' || c == '_') {
        name += c;
      } else if (c == '\'') {
        name += '_';
      } else {
        name += "$" + which.codePointAt(i);
      }
    }
    return name;
  }

  public GraceObject binop(String which, GraceObject o) {
    return invoke(makeOpName(which, "bin"), which, "binary operator", o);
  }

  private static String makeOpName(String which, String name) {
    int l = which.length();
    for (int i = 0; i < l; i++) {
      name += "$" + which.codePointAt(i);
    }
    return name;
  }

  private GraceObject invoke(String which, String name, String kind,
                             GraceObject... args) {
    GraceObject self = this;

    while (self != null) {
      Method[] methods;
      try {
        methods = self.getClass().getDeclaredMethods();
      } catch (SecurityException scx) {
        throw new RuntimeException("Unable to retrieve method list.");
      }

      methods: for (Method method : methods) {
        if (method.getName().equals(which)) {
          Class<?>[] types = method.getParameterTypes();
          int length = types.length;
          if (!method.isVarArgs() && length > args.length) {
            throw new RuntimeException("Insufficient arguments to " + name);
          }

          if (!method.getReturnType().equals(GraceObject.class)) {
            break methods;
          }

          Object[] a = args;

          if (method.isVarArgs()) {
            a = new Object[length];
            Object[] varargs = new GraceObject[args.length - length + 1];

            for (int j = 0; j < length - 1; j++) {
              a[j] = args[j];
            }

            for (int j = length - 1; j < args.length; j++) {
              varargs[j - length + 1] = args[j];
            }

            a[length - 1] = varargs;

            for (Class<?> type : types) {
              if (!(type.equals(GraceObject.class) || type.isArray() &&
                  type.getComponentType().equals(GraceObject.class))) {
                break methods;
              }
            }
          } else {
            for (Class<?> type : types) {
              if (!type.equals(GraceObject.class)) {
                break methods;
              }
            }

            if (length < args.length) {
              a = new Object[length];
              for (int i = 0; i < length; i++) {
                a[i] = args[i];
              }
            }
          }

          try {
            return (GraceObject) self.invoke(method, a);
          } catch(InvocationTargetException itx) {
            Throwable th = itx.getTargetException();
            if (th instanceof RuntimeException) {
              throw (RuntimeException) th;
            }

            th.printStackTrace();
            throw new RuntimeException(itx.getTargetException().getMessage());
          } catch(Exception ex) {
            throw new RuntimeException(ex.getMessage());
          }
        }
      }

      self = self.$super;
    }

    throw new RuntimeException("No such " + kind + ": " + name);
  }

  protected Object invoke(Method method, Object[] args) throws Exception {
    return method.invoke(this, args);
  }


  public GraceObject print(GraceObject o) {
    System.out.println(o.asString());

    return GraceVoid.value;
  }

  // ==
  public GraceObject bin$61$61(GraceObject o) {
    return GraceBoolean.evaluate(self == o);
  }

  // !=
  public GraceObject bin$33$61(GraceObject o) {
    return self.bin$61$61(o).invoke("not");
  }

  // /=
  public GraceObject bin$47$61(GraceObject o) {
    return self.bin$61$61(o).invoke("not");
  }

  public GraceObject asString() {
    return new GraceString(super.toString());
  }

  public GraceObject next() {
    throw new RuntimeException("No such method: next");
  }

  public Iterator<GraceObject> iterator() {
    return self.invoke("iter");
  }

  public boolean hasNext() {
    return ((GraceBoolean) self.invoke("havemore")).value;
  }

  public void remove() {
    throw new UnsupportedOperationException("Cannot remove elements");
  }

  public String toString() {
    return ((GraceString) self.asString()).value;
  }

  public boolean equals(Object o) {
    if (o instanceof GraceObject) {
      return ((GraceBoolean) self.bin$61$61((GraceObject) o)).value;
    }

    return false;
  }

}
