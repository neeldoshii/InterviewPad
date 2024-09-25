import React from "react";
import Editor from "@monaco-editor/react";

const MonacoEditor = ({selectedLanguage}) => {
  const defaultCode = 
  `// Online Python compiler (interpreter) to run Python online.`+ `\n`+
  `// Write Python 3 code in this online editor and run it.`+ `\n` +
  `print("IDE -- Python")`;
  
  console.log(selectedLanguage);
  return (
    
    <Editor
      height="90vh"
      defaultLanguage= "python"
      language={selectedLanguage}
      
      defaultValue = {defaultCode}
      theme="vs-dark"
      value=""
    />
    
    
  );
};

export default MonacoEditor;
