package grace.lang;

import grace.lib.prelude;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Iterator;

public class GraceObject implements Iterable<GraceObject>,
    Iterator<GraceObject> {
	
	public static final GraceNothing nothing = GraceNothing.value;
	
	public static final GraceBoolean $true = GraceBoolean.graceTrue;
	public static final GraceBoolean $false = GraceBoolean.graceFalse;
	
	public static GraceNumber $num(double num) {
		return new GraceNumber(num);
	}
	
	public static GraceString $str(String str) {
		return new GraceString(str);
	}
	
	public static GraceList $list(GraceObject... els) {
		return new GraceList(els);
	}
	
	public static GraceNothing print(GraceObject o) {
		System.out.println(o.asString(o));
		return nothing;
	}
	
	public static final GraceObject MatchFailed = new GraceObject();
	
	public static final GraceObject HashMap = new GraceObject() {
		
		@SuppressWarnings("unused")
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
	
	public static void printException(Exception ex) {
		System.err.println(ex);
		boolean first = false;
		StackTraceElement previous = null;
		for (StackTraceElement el : ex.getStackTrace()) {
			String cl = el.getClassName();
			String mt = el.getMethodName();
			if (!(cl.startsWith("grace.lang") || cl.startsWith("sun.reflect")
			    || cl.startsWith("java.lang.reflect") || cl.contains("$")
			    || mt.equals("$module") || mt.equals("<init>"))) {
				if (!first && previous != null) {
					System.err.println("\tat " + previous);
					first = true;
				}
				System.err.println("\tat " + el);
			}
			previous = el;
		}
	}
	
	public static GraceObject length(GraceObject obj) {
		return obj.invoke("size");
	}
	
	public static GraceObject raise(GraceObject obj) {
		throw new RuntimeException(((GraceString) obj).value);
	}
	
	// The enclosing scope of this object's creation. Methods defined on this
	// specific object (not its inherited ones) will see this as `outer`.
	public final GraceObject outer;
	
	// The super object that this object inherits from. It's not clear whether
	// this value is changeable, but this is allowed mostly to let the inherits
	// declaration appear anywhere within an object declaration.
	private GraceObject $super = nothing;
	
	/**
	 * Makes a default Grace object with no closure.
	 */
	public GraceObject() {
		this.outer = nothing;
	}
	
	/**
	 * Makes a Grace object with the given closure.
	 * 
	 * @param outer The closure to set as the `outer` variable.
	 */
	public GraceObject(GraceObject outer) {
		this.outer = outer;
	}
	
	/**
	 * @return The super object of this object.
	 */
	public final GraceObject $super() {
		return $super;
	}
	
	/**
	 * Sets the super object of this object.
	 * 
	 * @param $super The super object to set.
	 * 
	 * @return The Grace void value.
	 */
	public final GraceNothing inherits(GraceObject $super) {
		this.$super = $super;
		return nothing;
	}
	
	// ==
	public GraceObject bin$61$61(GraceObject self, GraceObject o) {
		return self == o ? $true : $false;
	}
	
	// !=
	public GraceObject bin$33$61(GraceObject self, GraceObject o) {
		return self.bin$61$61(self, o).invoke("not");
	}
	
	// /=
	public GraceObject bin$47$61(GraceObject self, GraceObject o) {
		return self.bin$61$61(self, o).invoke("not");
	}
	
	public GraceObject asString(GraceObject self) {
		return new GraceString(super.toString());
	}
	
	public GraceObject next() {
		throw new RuntimeException("No such method: next");
	}
	
	
	public Iterator<GraceObject> iterator() {
		return invoke("iter");
	}
	
	public boolean hasNext() {
		return GraceBoolean.evaluate(invoke("havemore"));
	}
	
	public void remove() {
		throw new UnsupportedOperationException("Cannot remove elements");
	}
	
	public String toString() {
		return invoke("asString").toString();
	}
	
	public boolean equals(Object o) {
		if (o instanceof GraceObject) {
			return ((GraceBoolean) bin$61$61(this, (GraceObject) o)).value;
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
	public GraceObject invoke(String name, GraceObject... args) {
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
	
	public GraceObject binop(String name, GraceObject o) {
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
	
	private GraceObject invoke(String javaName, String graceName, String kind,
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
				if (method.getName().equals(javaName)) {
					Class<?>[] types = method.getParameterTypes();
					
					int length = types.length;
					
					// Confirm that the return type is at least a GraceObject.
					if (!GraceObject.class.isAssignableFrom(method.getReturnType())) {
						break methods;
					}
					
					// Confirm that the arguments before the vararg are all typed as
					// exactly GraceObjects.
					int tlength = length - (method.isVarArgs() ? 2 : 1);
					for (int i = 0; i < tlength; i++) {
						if (!types[i].equals(GraceObject.class)) {
							break methods;
						}
					}
					
					// Ignore the self object for the remaining arguments.
					int alength = length - 1;
					
					if (method.isVarArgs()) {
						// Check that the vararg type is correct as above.
						if (!types[alength].getComponentType().equals(GraceObject.class)) {
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
					for (int i = 1; i < length; i++) {
						a[i] = args[i];
					}
					
					if (method.isVarArgs()) {
						// If the Java method has variadic arguments, then the remaining
						// arguments need to be bundled up into another array at the end of
						// existing argument list.
						
						int rlength = args.length;
						
						Object[] varargs = new GraceObject[rlength - tlength];
						
						for (int i = alength - 1; i < rlength; i++) {
							varargs[(i - alength) + 1] = args[i];
						}
						
						a[alength] = varargs;
					}
					
					try {
						// For permission purposes, there needs to be an invoke method that
						// does the actual reflection invoke on the given method for us.
						return (GraceObject) self.invoke(method, a);
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
