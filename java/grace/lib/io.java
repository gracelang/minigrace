package grace.lib;

import grace.lang.*;

import java.io.*;

public final class io extends Prelude {

  private static io $module;

  public static io $module() {
    return $module == null ? $module = new io() : $module;
  }

  private static File file(Obj path) {
    return new File(((Str) path).value);
  }

  public Bool exists(Obj self, Obj path) {
    return $boolean(file(path).exists());
  }

  public Bool newer(Obj self, Obj path1,
      Obj path2) {
    return $boolean(file(path1).lastModified() > file(path2).lastModified());
  }

  public final class GraceProcess extends Obj {

    Process process;
    int status;

    public GraceProcess(Process process) {
      inherits($true);

      this.process = process;
    }

    public Num $wait(Obj self) {
      try {
        process.waitFor();
      } catch (Exception ex) {}
      status = process.exitValue();
      return $number(status);
    }

    public Bool success(Obj self) {
      this.$wait(self);

      if (status == 0) {
        return $true;
      }

      return $false;
    }

    public Bool terminated(Obj self) {
      this.$wait(self);

      return $true;
    }

    public Num status(Obj self) {
      return this.$wait(self);
    }
  }

  public Obj spawn(Obj self, Obj... parts) {
    Process process;

    String[] tokens = new String[parts.length];
    for (int i = 0; i < parts.length; i++)
      tokens[i] = ((Str) parts[i]).value;

    try {
      process = Runtime.getRuntime().exec(tokens);
    } catch (Exception ex) {
      return $false;
    }

    Redirect out = new Redirect(process.getInputStream(), System.out);
    Redirect err = new Redirect(process.getErrorStream(), System.err);

    try {
      out.start();
      err.start();

    } catch (Exception ex) {
      return $true;
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

  public Bool system(Obj self, Obj cmd) {
    String exec = ((Str) cmd).value;
    Process process;

    String[] tokens = { "/bin/bash", "-c", exec };

    try {
      process = Runtime.getRuntime().exec(tokens);
    } catch (Exception ex) {
      return $false;
    }

    Redirect out = new Redirect(process.getInputStream(), System.out);
    Redirect err = new Redirect(process.getErrorStream(), System.err);

    try {
      out.start();
      err.start();

      process.waitFor();
    } catch (Exception ex) {
      return $false;
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
        return $false;
      }
    } catch (Exception ex) {
      return $false;
    }

    return $true;
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

  public final class Input extends Obj {

    private Input() {}

    public Str read(Obj self) {
      int b;
      String out = "";

      try {
        while ((b = System.in.read()) != -1) {
          out += (char) b;
        }
      } catch (IOException iox) {
        throw new RuntimeException("Failed to read input.");
      }

      return $string(out);
    }
  }

  private Input input = new Input();

  public Input input(Obj self) {
    return input;
  }

  public final class Output extends Obj {

    private final PrintStream stream;

    private Output(PrintStream stream) {
      this.stream = stream;
    }

    public Nothing write(Obj self, Obj string) {
      stream.print(((Str) string).value);
      return nothing;
    }

  }

  private Output output = new Output(System.out);

  public Output output(Obj self) {
    return output;
  }

  private Output error = new Output(System.err);

  public Output error(Obj self) {
    return error;
  }

  public GraceFile open(Obj self, Obj path, Obj mode) {
    return new GraceFile(file(path), ((Str) mode).value);
  }

  public final class GraceFile extends Obj {

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

        if (mode.equals("w") || mode.equals("a") || mode.length() == 2
            && mode.charAt(1) == '+') {
          writer = new FileWriter(file, mode.startsWith("a"));
        }
      } catch (IOException iox) {
        throw new RuntimeException("File access failed.");
      }
    }

    public Str read(Obj self) {
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

      return $string(out);
    }

    public Bool write(Obj self, Obj string) {
      if (writer == null) {
        throw new RuntimeException("Failed to write file.");
      }

      try {
        writer.write(((Str) string).value);
        writer.flush();
      } catch (IOException iox) {
        throw new RuntimeException("Failed to write file.");
      }

      return $true;
    }

    public Nothing close(Obj self) {
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

      return nothing;
    }

  }

}
