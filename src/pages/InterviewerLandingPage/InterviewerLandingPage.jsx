import React from 'react'
import {Link} from 'react-router-dom';

const InterviewerLandingPage = () => {

    return (

        <div className="container" style={{ height: "100vh", width: "100%", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1 style={{ color: "white", fontWeight: "bold" }}>Run Smoother Coding Interviews with a Single Click</h1>
            <p style={{ color: "white", fontSize: "16px" }}>Create, manage, and conduct interviews effortlessly on one integrated platform</p>
            <Link to = "homepage"><button
                style={{ backgroundColor: "#68D585", border: "0", padding: "8px", borderRadius: "16px" }}>                    
                Try InterviewPad Now
            </button>
            </Link>
            

        </div>
    )
}

export default InterviewerLandingPage