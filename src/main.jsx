import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage/Homepage.jsx";
import CodeEditor from "./pages/CodeEditor/CodeEditor.jsx";
import InterviewerLandingPage from "./pages/InterviewerLandingPage/InterviewerLandingPage.jsx";
import InterviewerHomepage from "./pages/Interviewer/InterviewerHomepage.jsx";
import InterviewCandidatesInvite from "./pages/Interviewer/InterviewCandidatesInvite.jsx";
import InterviewTestCases from "./pages/Interviewer/InterviewTestCases.jsx";


// https://www.youtube.com/watch?v=oTIJunBa6MA
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    
  },
  // {
  //   path: "/code",
  //   element: <CodeEditor />
  // }
  {
    path: "/code/:roomId",
    element: <CodeEditor />
  },
  {
    path: "/dev-interviewer-homepage",
    element: <InterviewerLandingPage />,
    // children: [
    //   {
    //     path: "homepage", // Nested relative route under '/dev-interviewer-homepage'
    //     element: <InterviewerHomepage />,
    //   },
    // ],
  },
  {
    path: "/dev-interviewer-homepage/homepage", // Now it's a standalone route
    element: <InterviewerHomepage />,
  },
  {
    path : "/dev-interviewer-homepage/homepage/candidates",
    element: <InterviewCandidatesInvite />
  },
  {
    path : "/dev-interviewer-homepage/homepage/tests",
    element: <InterviewTestCases />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);