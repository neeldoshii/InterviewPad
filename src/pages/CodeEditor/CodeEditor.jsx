import React, { useState, } from "react";
import MainLayout from "../../MainLayout";
import "./codeEditor.css";
import AvatarComponent from "../../components/AvatarComponent";
import MonacoEditor from "../../components/MonacoEditor";
import LanguageSelect from "../../components/LanguageSelect";
import { useParams } from "react-router-dom";



const CodeEditor = () => {
  const users = {
    0: "John Doe",
    1: "Vishank",
    2: "sas sas",
  };
  const params = useParams();
  console.log(params);
  

  const [selectedLanguage, setSelectedLanguage] = useState("Javascript");
  const [seletecLanguageKey, setSelectedLanguageKey] = useState("JAVASCRIPT")

  const handleSelection = (language) =>{
    setSelectedLanguage(language)
  }

  console.log("Selected Language : " + selectedLanguage + " || " + "setSelectedLanguage : " + setSelectedLanguage);
  


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

            <p>
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
          <LanguageSelect selectedLanguage = {selectedLanguage} onSelect = {handleSelection}/>
          <MonacoEditor selectedLanguage = {selectedLanguage}/>
        </div>
      </div>
    </div>
    // </MainLayout>
  );
};

export default CodeEditor;
