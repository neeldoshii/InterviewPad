import React from "react";
import Editor from "@monaco-editor/react";

const MonacoEditor = () => {
    
  return (
    <Editor
      height="90vh"
      defaultLanguage="javascript"
      defaultValue="// some comment"
      theme="vs-dark"
      value=""
    />
  );
};

export default MonacoEditor;
