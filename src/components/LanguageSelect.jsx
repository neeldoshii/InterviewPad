import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

const LanguageSelect = ({selectedLanguage, onSelect}) => {
  return (
    <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic" style= {{}}>
        {selectedLanguage}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey={"Javascript"} onClick = {() => onSelect("ffg")}>sssss</Dropdown.Item>
        <Dropdown.Item eventKey={"Javascripsdt"} onClick={() => onSelect("JavaScrs")}>Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default LanguageSelect