import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { LANGUAGES } from "../const";

const LanguageSelect = ({ selectedLanguage, selectedLanguageKey ,onSelect}) => {
  const entries = Object.entries(LANGUAGES);

  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic" style={{}}>
        {selectedLanguage}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {entries.map(([key, value]) => (
          // console.log(key,value)
          <Dropdown.Item eventKey={{ key }} onClick={() => onSelect(value)}>
            {value}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSelect;
