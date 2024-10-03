import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const InterviewHeader = ({navlinks, selectedTab, onSelected}) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="">Interview-Pad</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                {
                    navlinks.map((key) =>(
                        // var a = key
                        // var name = key.name
                        // var hyperlink = key.href
                        <Nav.Link 
                            // as = {Link} 
                            // to={key.href} 
                            onClick={() =>{onSelected(key.name)}}
                            className={selectedTab === key.name ? 'active-link' : ''} // Highlight the active link
                        >
                            {key.name}
                        </Nav.Link> 
                            
                ))
                }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default InterviewHeader