// Contains Language and Language Version supported by Piston API
import { ToastContainer, toast } from "react-toastify";

const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
  cpp: "10.2.0",
};

export const LANGUAGES = {
  JAVASCRIPT: "javascript",
  PYTHON: "python",
  JAVA: "java",
  PHP: "php",
};

export const DEFAULT_LANGUAGE = {
  JAVASCRIPT: `// Boilerplate code for JavaScript
function fun(param) {
  return \`You passed \${param}\`;
}

console.log(fun("JavaScript"));`,

  PYTHON: `# Boilerplate code for Python
def fun(param):
    return f'You passed {param}'

print(fun("Python"))`,

  JAVA: `// Boilerplate code for Java
public class Main {
    public static String fun(String param) {
        return "You passed " + param;
    }

    public static void main(String[] args) {
        System.out.println(fun("Java"));
    }
}`,

  PHP: `<?php
// Boilerplate code for PHP
function fun($param) {
    return "You passed " . $param;
}

echo fun("PHP");
?>`,
};

export const ToastType = {
  INFO: "INFO",
  WARNING: "WARNING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  DEFAULT: "DEFAULT",
};

export const SHOWTOAST = (msg, type) => {
  switch (type) {
    case ToastType.WARNING:
      toast.warning(msg);
      break;

    case ToastType.INFO:
      toast.info(msg);
      break;

    case ToastType.SUCCESS:
      toast.success(msg);
      break;

    case ToastType.ERROR:
      toast.error(msg);
      break;

    default:
      toast("Developer Fucked Up!");
  }
};
