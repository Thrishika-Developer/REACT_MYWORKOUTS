import React from "react";
import ReactDOM from "react-dom/client";
// import HomePage from './pages/01homepage/HomePage';
// import Parent from './pages/props_basic_understand/Parent';
import Student from "./pages/02propsdrilling/Student";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <HomePage/> */}
    {/* <Parent /> */}
    <Student/>
  </React.StrictMode>,
);
