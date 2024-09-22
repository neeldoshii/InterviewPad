// Contains Language and Language Version supported by Piston API
import { ToastContainer, toast } from "react-toastify";

const LANGUAGE_VERSIONS = {
    javascript: "18.15.0",
    typescript: "5.0.3",
    python: "3.10.0",
    java: "15.0.2",    
    csharp: "6.12.0",
    php: "8.2.3",    
    cpp :'10.2.0',
};

export const ToastType = {
    INFO    : "INFO",
    WARNING : "WARNING",
    SUCCESS : "SUCCESS",
    ERROR   : "ERROR",
    DEFAULT : "DEFAULT"
};

export const SHOWTOAST = (msg, type) =>{
    switch(type){
      case ToastType.WARNING:
        toast.warning(msg)
        break
      
      case ToastType.INFO:
        toast.info(msg)
        break

      case ToastType.SUCCESS:
        toast.success(msg)
        break

      case ToastType.ERROR:
        toast.error(msg)
        break
      
      default:
        toast("Developer Fucked Up!")
    }

  }

