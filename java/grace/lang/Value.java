package grace.lang;

import static grace.lang.Bool.$false;
import static grace.lang.Nothing.nothing;
import static grace.lang.Prelude.$boolean;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class Value {

  // The super object that this object inherits from. It's not clear whether
  // this value is changeable, but this is allowed mostly to let the inherits
  // declaration appear anywhere within an object declaration.
  private Value $super = getClass().equals(Value.class) ? nothing : new Value();

  // Which technique to use to compare this object to others.
  private final Egal egal;

  // The enclosing scope of this object's creation. Methods defined on this
  // specific object (not its inherited ones) will see this as `outer`.
  public final Value outer;

  /**
   * Makes a Grace object with pointer comparison equality and no closure.
   */
  public Value() {
    this.egal = Egal.Pointer;
    this.outer = nothing;
  }

  /**
   * Makes a Grace object with the given egal technique and no closure.
   * 
   * @param egal The egal technique to use for equality.
   */
  public Value(Egal egal) {
    this.egal = egal;
    this.outer = nothing;
  }

  /**
   * Makes a GraceObject with pointer comparison equality and a closure.
   * 
   * @param outer The object's enclosing scope.
   */
  public Value(Value outer) {
    this.egal = Egal.Pointer;
    this.outer = nothing;
  }

  /**
   * Makes a Grace object with the given egal technique and closure.
   * 
   * @param egal The egal technique to use for equality.
   * @param outer The object's enclosing scope.
   */
  public Value(Egal egal, Value outer) {
    this.egal = egal;
    this.outer = outer;
  }

  /**
   * @return The super object of this object.
   */
  public final Value $super() {
    return $super;
  }

  /**
   * Sets the super object of this object.
   * 
   * @param $super The super object to set.
   * 
   * @return The Grace void value.
   */
  public final Nothing inherits(Value $super) {
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

  // ==
  public Value bin$61$61(Value self, Value o) {
    Egal egal = self.$egal();
    if (egal != o.$egal()) {
      return $false;
    }

    switch (egal) {
    case Pointer:
      return $boolean(self == o);
      // This definition isn't correct. This should check the outer value for
      // each method. At the moment it's not possible to retrieve the outer
      // value
      // for a specific method, so this is a close enough approximation.
    case Closure:
      return $boolean(self.outer == o.outer && equal(self, o));
    case Value:
    default:
      return $boolean(equal(self, o));
    }
  }

  private boolean equal(Value self, Value o) {
    // To be implemented. Will need to use reflection.
    return self == o;
  }

  // !=
  public Value bin$33$61(Value self, Value o) {
    return self.bin$61$61(self, o).invoke("not");
  }

  // /=
  public Value bin$47$61(Value self, Value o) {
    return self.bin$61$61(self, o).invoke("not");
  }

  public Value asString(Value self) {
    return new Str(super.toString());
  }

  public String toString() {
    return invoke("asString").toString();
  }

  public boolean equals(Object o) {
    if (o instanceof Value) {
      return ((Bool) bin$61$61(this, (Value) o)).value;
    }

    return false;
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
  public Value invoke(String name, Value... args) {
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

  public Value binop(String name, Value o) {
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

  private Value invoke(String javaName, String graceName, String kind,
      Value... args) {
    Value self = this;

    while (self != null) {
      Method[] methods;
      try {
        methods = self.getClass().getDeclaredMethods();
      } catch (SecurityException scx) {
        throw new RuntimeException("Unable to retrieve method list.");
      }

      methods: for (Method method : methods) {
        if (method.getName().equals(javaName)) {
          Class<?>[] types = method.getParameterTypes();

          int length = types.length;

          // Confirm that the return type is at least a Grace object.
          if (!Value.class.isAssignableFrom(method.getReturnType())) {
            break methods;
          }

          // Confirm that the arguments before the vararg are all typed as
          // exactly Grace objects.
          int tlength = length - (method.isVarArgs() ? 2 : 1);
          for (int i = 0; i < tlength; i++) {
            if (!types[i].equals(Value.class)) {
              break methods;
            }
          }

          // Ignore the self object for the remaining arguments.
          int alength = length - 1;

          if (method.isVarArgs()) {
            // Check that the vararg type is correct as above.
            if (!types[alength].getComponentType().equals(Value.class)) {
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

            Object[] varargs = new Value[rlength - tlength];

            for (int i = alength - 1; i < rlength; i++) {
              varargs[(i - alength) + 1] = args[i];
            }

            a[alength] = varargs;
          }

          try {
            // For permission purposes, there needs to be an invoke method
            // that
            // does the actual reflection invoke on the given method for us.
            return (Value) self.invoke(method, a);
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

}
