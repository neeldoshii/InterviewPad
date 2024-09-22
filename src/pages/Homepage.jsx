import React, { useState } from 'react'
import App from '../App'
import MainLayout from '../MainLayout'
import { Link } from 'react-router-dom';

const Homepage = () => {

  const [roomId, setRoomId] = useState(""); 
  const [username, setUsername] = useState(""); 
  

  return (
    // For dynamic purpose not needed here but used for learning purposes and scalablity.
    <MainLayout> 

      <div style={{ height: "100%" }} className="container">
        <h1 className='title-heading'>Lorem Ipsum is simply dummy text.</h1>
        <h2 className='subtitle-heading'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
        <div className='container-wrapper'>

          <div className='join-meeting'>

            <label style={{ color: "white" }} className='formLabels'> Room Id</label>
            
            <input 
              type="text" 
              className="form-control formInputBS" 
              id="exampleInputEmail1" 
              placeholder="Room Id" 
              value={roomId}
              onChange={
                (event)=>{
                  setRoomId(event.target.value)
                }
              }
            />


            <label style={{ color: "white", marginTop: "16px" }} className='formLabels'>Username</label>

            <input
              type="text" 
              className="form-control formInputBS" 
              placeholder="Enter Username"
              value={username}
              onChange={
                (event)=>{
                setUsername(event.target.value)
              }
              }/>

            <Link to="/code" ele>
              <button style={{ backgroundColor: "#68D585", border: "0" }} className='joinRoomBtn'>Join Room</button>
            </Link>

            <label style={{ color: "white" }}> Want to create Room? Let's create</label>
          </div>
        </div>

      </div>
    </MainLayout>
  )
}

export default Homepage