package grace.lang;

import static grace.lang.Nothing.nothing;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public abstract class Obj {

  // The super object that this object inherits from. It's not clear whether
  // this value is changeable, but this is allowed mostly to let the inherits
  // declaration appear anywhere within an object declaration.
  private Obj $super = this instanceof Top ? nothing : new Top(Egal.Value);

  // Which technique to use to compare this object to others.
  private final Egal egal;

  // The enclosing scope of this object's creation. Methods defined on this
  // specific object (not its inherited ones) will see this as `outer`.
  public final Obj outer;

  // The method or object environment around this object's creation.
  public final Obj closure;

  /**
   * Makes a Grace object with pointer comparison equality and no closure.
   */
  public Obj() {
    this(Egal.Pointer, nothing);
  }

  /**
   * Makes a Grace object with the given egal technique and no closure.
   * 
   * @param egal The egal technique to use for equality.
   */
  public Obj(Egal egal) {
    this(egal, nothing);
  }

  /**
   * Makes a GraceObject with pointer comparison equality and a closure.
   * 
   * @param closure Simultaneously the object's enclosing scope and closure.
   */
  public Obj(Obj closure) {
    this(Egal.Pointer, closure, closure);
  }

  /**
   * Makes a GraceObjet with pointer comparison and a distinct enclosing
   * object scope and closure.
   * 
   * @param outer The enclosing object scope.
   * @param closure The enclosing method environment.
   */
  public Obj(Obj outer, Obj closure) {
    this(Egal.Pointer, outer, closure);
  }

  /**
   * Makes a Grace object with the given egal technique and closure.
   * 
   * @param egal The egal technique to use for equality.
   * @param closure The object's enclosing scope.
   */
  public Obj(Egal egal, Obj closure) {
    this(egal, closure, closure);
  }

  /**
   * Makes a GraceObjet with the given egal technique and a distinct enclosing
   * object scope and closure.
   * 
   * @param egal The egal technique to use for equality.
   * @param outer The enclosing object scope.
   * @param closure The enclosing method environment.
   */
  public Obj(Egal egal, Obj outer, Obj closure) {
    this.egal = egal;
    this.outer = outer;
    this.closure = closure;
  }

  /**
   * @return The super object of this object.
   */
  public final Obj $super() {
    return $super;
  }

  /**
   * Sets the super object of this object.
   * 
   * @param $super The super object to set.
   * 
   * @return The Grace void value.
   */
  public final Nothing inherits(Obj $super) {
    this.$super = $super;
    return nothing;
  }

  /**
   * @return The egal technique to decide equality with this object.
   */
  public final Egal $egal() {
    if (egal == Egal.Pointer) {
      return Egal.Pointer;
    }

    if ($super == nothing) {
      return egal;
    }

    Egal worst = $super.$egal();
    if (worst != Egal.Value) {
      return worst;
    }

    return egal;
  }

  /**
   * Invoke the method with the given name.
   * 
   * Note that a method is distinct from a binary operator: use
   * <code>binop</code> for that.
   * 
   * @param name The name of the method in Grace to invoke.
   * @param args The arguments to pass to the method.
   * 
   * @return The result of the invocation.
   */
  public Obj invoke(String name, Obj... args) {
    return invoke(escapeInvokeName(name), name, "method", args);
  }

  private static String escapeInvokeName(String graceName) {
    String javaName = "";
    int l = graceName.length();
    char[] cs = graceName.toCharArray();
    for (int i = 0; i < l; i++) {
      char c = cs[i];
      if (Character.isLetterOrDigit(c) || c == '$' || c == '_') {
        javaName += c;
      } else if (c == '\'') {
        javaName += '_';
      } else {
        javaName += "$" + graceName.codePointAt(i);
      }
    }
    return javaName;
  }

  public Obj binop(String name, Obj o) {
    return invoke(makeOpName(name), name, "binary operator", o);
  }

  private static String makeOpName(String graceName) {
    String javaName = "bin";
    int l = graceName.length();
    for (int i = 0; i < l; i++) {
      javaName += "$" + graceName.codePointAt(i);
    }
    return javaName;
  }

  private Obj invoke(String javaName, String graceName, String kind,
      Obj... args) {
    Obj self = this;

    while (self != null) {
      Method[] methods = getMethods(self);

      methods: for (Method method : methods) {
        if (method.getName().equals(javaName)) {
          Class<?>[] types = method.getParameterTypes();

          int length = types.length;

          // Confirm that the return type is at least a Grace object.
          if (!Obj.class.isAssignableFrom(method.getReturnType())) {
            break methods;
          }

          // Confirm that the arguments before the vararg are all typed as
          // exactly Grace objects.
          int tlength = length - (method.isVarArgs() ? 2 : 1);
          for (int i = 0; i < tlength; i++) {
            if (!types[i].equals(Obj.class)) {
              break methods;
            }
          }

          // Ignore the self object for the remaining arguments.
          int alength = length - 1;

          if (method.isVarArgs()) {
            // Check that the vararg type is correct as above.
            if (!types[alength].getComponentType().equals(Obj.class)) {
              break methods;
            }
          }

          // Confirm that there are the right number of arguments. At the
          // moment this only means checking if there are too few: too many
          // will just ignore the remaining values.
          if (args.length < tlength) {
            throw new RuntimeException("Insufficient arguments to " + graceName);
          }

          // Put the self object into the argument array.
          Object[] a = new Object[length];
          a[0] = this;
          for (int i = 0; i < tlength; i++) {
            a[i + 1] = args[i];
          }

          if (method.isVarArgs()) {
            // If the Java method has variadic arguments, then the remaining
            // arguments need to be bundled up into another array at the end
            // of
            // existing argument list.

            int rlength = args.length;

            Object[] varargs = new Obj[rlength - tlength];

            for (int i = alength - 1; i < rlength; i++) {
              varargs[(i - alength) + 1] = args[i];
            }

            a[alength] = varargs;
          }

          try {
            // For permission purposes, there needs to be an invoke method
            // that
            // does the actual reflection invoke on the given method for us.
            return (Obj) self.invoke(method, a);
          } catch (InvocationTargetException itx) {
            Throwable th = itx.getTargetException();
            if (th instanceof RuntimeException) {
              throw (RuntimeException) th;
            }

            th.printStackTrace();
            throw new RuntimeException(itx.getTargetException().getMessage());
          } catch (Exception ex) {
            throw new RuntimeException(ex.getMessage());
          }
        }
      }

      self = self.$super;
    }

    throw new RuntimeException("No such " + kind + ": " + graceName);
  }

  /**
   * Classes which this class does not have permission to access must override
   * this method with the same content. This will allow the reflection
   * invocation to work, as the implementing class obviously has permission.
   * 
   * @param method The method to invoke.
   * @param args The arguments to pass to the method.
   * 
   * @return The result of the invocation.
   * 
   * @throws Exception If the method invocation throws an exception.
   */
  protected Object invoke(Method method, Object[] args) throws Exception {
    return method.invoke(this, args);
  }
  
  static Method[] getMethods(Object object) {
    try {
      return object.getClass().getMethods();
    } catch (SecurityException sxc) {
      throw new RuntimeException("Unable to retrieve method list.");
    }
  }

  static Field[] getFields(Object object) {
    try {
      return object.getClass().getDeclaredFields();
    } catch (SecurityException sxc) {
      throw new RuntimeException("Unable to retrieve field list.");
    }
  }

  static Method getGetterMethod(Obj object, Field field) {
    try {
      return object.getClass().getMethod(field.getName(), Obj.class);
    } catch (NoSuchMethodException ex) {
      return null;
    } catch (SecurityException scx) {
      throw new RuntimeException("Unable to retrieve method.");
    }
  }

  static Obj getFieldValue(Obj object, Method getter) {
    try {
      return (Obj) object.invoke(getter, new Object[1]);
    } catch (InvocationTargetException e) {
      throw new RuntimeException(e.getMessage());
    } catch (Exception e) {
      throw new RuntimeException("Unable to access field value.");
    }
  }

}
