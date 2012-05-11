package grace.lib;

import grace.lang.*;

import java.io.*;

public final class io extends GraceObject {
  
  private static io $module;
  public static io $module() {
    return $module == null ? $module = new io() : $module;
  }

  private static File file(GraceObject path) {
    return new File(((GraceString) path).value);
  }

  public GraceObject exists(GraceObject path) {
    return GraceBoolean.evaluate(file(path).exists());
  }

  public GraceObject newer(GraceObject path1, GraceObject path2) {
    return GraceBoolean.evaluate(file(path1).lastModified() >
        file(path2).lastModified());
  }


  public final class GraceProcess extends GraceObject {
    Process process;
    int status;
    public GraceProcess(Process process) {
      this.process = process;
    }
    public GraceObject $wait() {
      try {
        process.waitFor();
      } catch (Exception ex) {
      }
      status = process.exitValue();
      return new GraceNumber(status);
    }
    public GraceObject success() {
      this.$wait();
      if (status == 0)
          return GraceBoolean.graceTrue;
      return GraceBoolean.graceFalse;
    }
    public GraceObject terminated() {
      // Suboptimal...
      this.$wait();
      return GraceBoolean.graceTrue;
    }
    public GraceObject status() {
      return this.$wait();
    }
  }
  public GraceObject spawn(GraceObject... parts) {
    Process process;

    String[] tokens = new String[parts.length];
    for (int i=0; i<parts.length; i++)
        tokens[i] = ((GraceString) parts[i]).value;

    try {
      process = Runtime.getRuntime().exec(tokens);
    } catch (Exception ex) {
      return GraceBoolean.graceFalse;
    }

    Redirect out = new Redirect(process.getInputStream(), System.out);
    Redirect err = new Redirect(process.getErrorStream(), System.err);

    try {
      out.start();
      err.start();

    } catch (Exception ex) {
      return GraceBoolean.graceFalse;
    } finally {
      try {
        out.close();
      } catch (Exception ex) {}
      try {
        err.close();
      } catch (Exception ex) {}
    }

    return new GraceProcess(process);
  }

  public GraceObject system(GraceObject cmd) {
    String exec = ((GraceString) cmd).value;
    Process process;

    String[] tokens = { "/bin/bash", "-c", exec };

    try {
      process = Runtime.getRuntime().exec(tokens);
    } catch (Exception ex) {
      return GraceBoolean.graceFalse;
    }

    Redirect out = new Redirect(process.getInputStream(), System.out);
    Redirect err = new Redirect(process.getErrorStream(), System.err);

    try {
      out.start();
      err.start();

      process.waitFor();
    } catch (Exception ex) {
      return GraceBoolean.graceFalse;
    } finally {
      try {
        out.close();
      } catch (Exception ex) {}
      try {
        err.close();
      } catch (Exception ex) {}
    }

    try {
      if (process.exitValue() != 0) {
        return GraceBoolean.graceFalse;
      }
    } catch (Exception ex) {
      return GraceBoolean.graceFalse;
    }

    return GraceBoolean.graceTrue;
  }

  private final class Redirect extends Thread {

    private final BufferedReader in;
    private final PrintStream out;

    private boolean closed = false;

    public Redirect(final InputStream in, final PrintStream out) {
      this.in = new BufferedReader(new InputStreamReader(in));
      this.out = out;
    }

    public void run() {
      String line;

      try {
        while (!closed && (line = in.readLine()) != null) {
          out.println(line);
        }
      } catch (IOException iox) {}
    }

    public void close() {
      closed = true;

      try {
        in.close();
      } catch (IOException iox) {}
    }

  }

  public final class Input extends GraceObject {
    private Input() {}
    public GraceObject read() {
      int b;
      String out = "";

      try {
        while ((b = System.in.read()) != -1) {
          out += (char) b;
        }
      } catch (IOException iox) {
        throw new RuntimeException("Failed to read input.");
      }

      return new GraceString(out);
    }
  }

  private GraceObject input = new Input();

  public GraceObject input() {
    return input;
  }

  public final class Output extends GraceObject {

    private final PrintStream stream;

    private Output(PrintStream stream) {
      this.stream = stream;
    }

    public GraceObject write(GraceObject string) {
      stream.print(((GraceString) string).value);
      return GraceVoid.value;
    }

  }

  private GraceObject output = new Output(System.out);

  public GraceObject output() {
    return output;
  }

  private GraceObject error = new Output(System.err);

  public GraceObject error() {
    return error;
  }

  public GraceObject open(GraceObject path, GraceObject mode) {
    return new GraceFile(file(path), ((GraceString) mode).value);
  }

  public final class GraceFile extends GraceObject {

    private FileReader reader = null;
    private FileWriter writer = null;

    private GraceFile(File file, String mode) {
      if (!file.exists()) {
        if (mode.startsWith("r")) {
          throw new RuntimeException("File access failed.");
        }

        try {
          file.createNewFile();
        } catch (IOException iox) {
          throw new RuntimeException("File access failed.");
        }
      }

      try {
        if (mode.equals("r") || mode.length() == 2 && mode.charAt(1) == '+') {
          reader = new FileReader(file);
        }

        if (mode.equals("w") || mode.equals("a") ||
            mode.length() == 2 && mode.charAt(1) == '+') {
          writer = new FileWriter(file, mode.startsWith("a"));
        }
      } catch (IOException iox) {
        throw new RuntimeException("File access failed.");
      }
    }

    public GraceObject read() {
      if (reader == null) {
        throw new RuntimeException("Failed to read file.");
      }

      String out = "";

      try {
        int b;
        while ((b = reader.read()) != -1) {
          out += (char) b;
        }
      } catch (IOException iox) {
        throw new RuntimeException("Failed to read file.");
      }

      return new GraceString(out);
    }

    public GraceObject write(GraceObject string) {
      if (writer == null) {
        throw new RuntimeException("Failed to write file.");
      }
      
      try {
        writer.write(((GraceString) string).value);
        writer.flush();
      } catch (IOException iox) {
        throw new RuntimeException("Failed to write file.");
      }

      return GraceBoolean.graceTrue;
    }

    public GraceObject close() {
      if (reader != null) {
        try {
          reader.close();
        } catch (IOException iox) {}
        reader = null;
      }
      if (writer != null) {
        try {
          writer.close();
        } catch (IOException iox) {}
        writer = null;
      }
      return GraceVoid.value;
    }

  }

}
