import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import App from "../App";
import MainLayout from "../MainLayout";
import { Link, useNavigate} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { SHOWTOAST, ToastType } from "../const";

const Homepage = () => {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const navigation = useNavigate();

  const generateRoomUUID = () => {
    setRoomId(uuidv4());
  };


  const checkCondition = () => {
    if(roomId === ""){
      SHOWTOAST("Room ID Cannot be null!", ToastType.ERROR)
    }
    if(username === ""){
      SHOWTOAST("Username cannot be null!", ToastType.ERROR)
    }
    if(username !== "" && roomId !== ""){
      SHOWTOAST("Joining Room!", ToastType.SUCCESS)
      
      navigation(`/code/${roomId}`)
    }
  };

  return (
    // For dynamic purpose not needed here but used for learning purposes and scalablity.
    <MainLayout>
      <div style={{ height: "100%" }} className="container">
        <h1 className="title-heading">Lorem Ipsum is simply dummy text.</h1>
        <h2 className="subtitle-heading">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h2>
        <div className="container-wrapper">
          <div className="join-meeting">
            <label style={{ color: "white" }} className="formLabels">
              {" "}
              Room Id
            </label>

            <input
              type="text"
              className="form-control formInputBS"
              id="exampleInputEmail1"
              placeholder="Room Id"
              value={roomId}
              onChange={(event) => {
                setRoomId(event.target.value);
              }}
            />

            <label
              style={{ color: "white", marginTop: "16px" }}
              className="formLabels"
            >
              Username
            </label>

            <input
              type="text"
              className="form-control formInputBS"
              placeholder="Enter Username"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />

            {/* One way to do but we need to check some condition before letting the user go to the code editor */}
            {/* <Link to= {`/code/${roomId}`} > */}
            <button
              style={{ backgroundColor: "#68D585", border: "0" }}
              className="joinRoomBtn"
              onClick={checkCondition}
            >
              Join Room
            </button>
            {/* </Link> */}

            <label style={{ color: "white" }}>
              Want to create Room?
              <span style={{ marginLeft: "12px" }} onClick={generateRoomUUID} >
              <ToastContainer />
                <u>Let&apos;s Generate One!</u>
              </span>
            </label>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Homepage;