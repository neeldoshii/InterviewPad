import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import TextField from '@mui/material/TextField'; // Importing TextField from MUI
import "./interviewerlogin.css";

import BackgroundImage from "../../assets/images/background.png";
import Logo from "/vite.svg";
import axios from "axios";
import { BASEURL } from "../../const";
import { Link, useNavigate } from "react-router-dom";

const InterviewerLogin = () => {
  const [email, setEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [status, setStatus] = useState(null) // 1 - login success , 0 - login failed, -1 - no input

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await delay(500);
	try {
		const response = await axios.post("http://localhost:3000/api/v1/login", 
		{
			email_id : email,
			password : inputPassword
		}
	)
	console.log(response.data)
	setStatus(response.data.status)

	if (response.data.status === 1) {
        navigate("/dev-interviewer-homepage/homepage"); 
      } else if (response.data.status === 0) {
        setShow(true); 
      } else {
		console.log("Unexpected error check server ");
		
	  }

	
	} catch (error) {
		setShow(true)	
	}


  const handlePassword = () => {};

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <div
      className="sign-in__wrapper"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >

      <div className="sign-in__backdrop"></div>

      <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>

        <img
          className="img-thumbnail mx-auto d-block mb-2"
          src={Logo}
          alt="logo"
        />
        <div className="h4 mb-2 text-center">Sign In</div>
        {/* Alert */}
        {show ? (
          <Alert
            className="mb-2"
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            Incorrect Email or password.
          </Alert>
        ) : (
          <div />
        )}

        <Form.Group className="mb-2" controlId="username">
          <Form.Label>Email</Form.Label>
          {/* Using TextField for username */}
          <TextField
            id="filled-basic" 
            label="Enter  your email"
            variant="filled" 
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="password">
          <Form.Label>Password</Form.Label>
        
          <TextField
            id="filled-password"
            label="Password"
            variant="filled"
            type="password" 
            fullWidth
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            required
          />
        </Form.Group>

        {!loading ? (
          <Button className="w-100" variant="primary" type="submit">
            Log In
          </Button>
        ) : (
          <Button className="w-100" variant="primary" type="submit" disabled>
            Logging In...
          </Button>
        )}
        <div className="d-grid justify-content-end">

		  <Button
            className="text-muted px-0"
            variant="link"
            onClick={handlePassword}
          >
            Don't have an account? Sign up
          </Button>
		  
        </div>
      </Form>

      <div className="w-100 mb-2 position-absolute bottom-0 start-50 translate-middle-x text-white text-center">
        InterviewPad | &copy;2024 😊
      </div>
    </div>
  );
};

export default InterviewerLogin;
