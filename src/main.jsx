import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage.jsx";
import CodeEditor from "./pages/CodeEditor/CodeEditor.jsx";



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
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);