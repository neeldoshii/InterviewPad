import React, { useState, } from "react";
import MainLayout from "../../MainLayout";
import "./codeEditor.css";
import AvatarComponent from "../../components/AvatarComponent";
import MonacoEditor from "../../components/MonacoEditor";
import LanguageSelect from "../../components/LanguageSelect";
import { useParams } from "react-router-dom";
import { DEFAULT_LANGUAGE } from "../../const";
import Button from "react-bootstrap/esm/Button";
import axios from "axios";



const CodeEditor = () => {
  // 
  const users = {
    0: "John Doe",
    1: "Vishank",
    2: "sas sas",
  };
  const params = useParams();
  // console.log(params);
  

  const [selectedLanguage, setSelectedLanguage] = useState("Javascript");
  const [selectedLanguageKey, setSelectedLanguageKey] = useState("JAVASCRIPT")
  const [editorValue, setEditorValue] = useState(DEFAULT_LANGUAGE[selectedLanguageKey]);
  const [codeOutput, setCodeOutput] = useState(null)


  const handleSelectionKey = (language) =>{
    setSelectedLanguageKey(language)
    setEditorValue(DEFAULT_LANGUAGE[language])
  }
  // console.log(`selected langugage key ${selectedLanguageKey} `);


  const handleSelection = (language) =>{
    setSelectedLanguage(language)
  }
  // Docs Used : https://github.com/engineer-man/piston
  // TODO : extract the business logic and make this whole code editor modularised its fuckin messed up. 
  // Fuck it I am pushing now :D
  const executeCode = async () =>{
    try {
      const response = await axios.post("https://emkc.org/api/v2/piston/execute",{
        "language": "javascript",
        "version": "18.15.0",
        "files": [
            {
                "name": "my_cool_code.js",
                "content": editorValue,
            }
        ]
    }
    )
    setCodeOutput(response.data.run.stdout)
    console.log(response.data.run.stdout)
    
    } catch (error) {
      
    }
  }

  return (
    // <MainLayout>
    // State for having the handling the selected language

    <div className="container">
      <div className="row">
        <div className="column column-1">
          <div style={{ marginLeft: "16px", marginRight: "16px" }}>
            <h3 style={{ marginTop: "16px", color : "white" }}>Problem Title</h3>
            <hr />
            <p style={{color : "white"}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>

            <p style={{color : "white"}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry.
            </p>

            <h3 style={{color : "white"}}>Connected Members</h3>
            <hr />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "4px",
                paddingBottom: "20px",
              }}
            >
              {Object.values(users).map((username, key) => (         
                <AvatarComponent key={key} username={username} />
              ))}
            </div>
          </div>
        </div>
        <div className="column column-2">
          <LanguageSelect selectedLanguage = {selectedLanguage} selectedLanguageKey={handleSelectionKey} onSelect = {handleSelection}/>
          <MonacoEditor 
            selectedLanguage    = {selectedLanguage} 
            selectedLanguageKey = {selectedLanguageKey}
            editorValue         = {editorValue}
            setEditorValue      = {setEditorValue}
          />
        </div>
        <div>
          <p style={{color:"white"}}>
            {codeOutput}
            
          </p>
          <Button onClick={executeCode}>Execute Code :)</Button>
        </div>
      </div>
    </div>
    // </MainLayout>
  );
};

export default CodeEditor;
