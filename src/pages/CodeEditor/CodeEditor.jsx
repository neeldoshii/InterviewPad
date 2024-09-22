import React, { useState } from "react";
import MainLayout from "../../MainLayout";
import "./codeEditor.css";
import AvatarComponent from "../../components/AvatarComponent";
import MonacoEditor from "../../components/MonacoEditor";
import LanguageSelect from "../../components/LanguageSelect";



const CodeEditor = () => {
  const users = {
    0: "John Doe",
    1: "Vishank",
    2: "sas sas",
  };

  const [selectedLanguage, setSelectedLanguage] = useState("Javascript");

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
            <h3 style={{ marginTop: "16px" }}>Problem Title</h3>
            <hr />
            <p>
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

            <h3>Connected Members</h3>
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
          < MonacoEditor/>
        </div>
      </div>
    </div>
    // </MainLayout>
  );
};

export default CodeEditor;
