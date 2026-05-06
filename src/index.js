import React from 'react';
import ReactDOM from 'react-dom/client';
import Class from './Pages/Components/class_component/01Class';
import SimpleState from './Pages/Components/class_component/02SimpleState';
import Function from './Pages/Components/function_component/01Function';
import HomePage from './Pages/01homepage/HomePage';
import AboutPage from './Pages/04aboutpage/AboutPage';
import ContactPage from './Pages/05contactpage/ContactPage';
import Example01 from './notes/Example01';
import ClassComponet from './notes/ClassComponet02';
import FunctionComponent03 from './notes/FunctionComponet03';
import ReuableComponent from './notes/ReusableComponent';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <Class/>
    <SimpleState/>
    <Function/>
    <HomePage/>
    <AboutPage/>
    <ContactPage/> */}

    {/* <Example01/> */}
    {/* <Example01/>
    <Example01/> */}

    {/* <ClassComponet/> */}

    {/* <FunctionComponent03/>
    <FunctionComponent03/>
    <FunctionComponent03/> */}

    {/* <ReuableComponent/> */}
     <ReuableComponent text="login"/>
       <ReuableComponent text="submit"/>
  </React.StrictMode>
);
