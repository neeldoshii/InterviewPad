import React from "react";
import Editor from "@monaco-editor/react";
import { DEFAULT_LANGUAGE } from "../const";


const MonacoEditor = ({selectedLanguage ,selectedLanguageKey, editorValue, setEditorValue}) => {
  // console.log(DEFAULT_LANGUAGE[selectedLanguageKey]);
  
  
  return (
    
    <Editor
      height="90vh"
      defaultLanguage= "python"
      language={selectedLanguage}
      defaultValue = {DEFAULT_LANGUAGE[selectedLanguageKey]}
      theme="vs-dark"
      value={editorValue}
      onChange={(value)=>setEditorValue(value)}
    />
    
    
  );
};

export default MonacoEditor;
