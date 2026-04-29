import React from 'react';
import ReactDOM from 'react-dom/client';
import Class from './Pages/Components/class_component/01Class';
import SimpleState from './Pages/Components/class_component/02SimpleState';
import Function from './Pages/Components/function_component/01Function';
import HomePage from './Pages/01homepage/HomePage';
import AboutPage from './Pages/04aboutpage/AboutPage';
import ContactPage from './Pages/05contactpage/ContactPage';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Class/>
    <SimpleState/>
    <Function/>
    <HomePage/>
    <AboutPage/>
    <ContactPage/>
  </React.StrictMode>
);
