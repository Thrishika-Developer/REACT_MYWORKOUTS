import React from 'react';
import ReactDOM from 'react-dom/client';
import DemoPage2 from './pages/DemoPage2';
import DemoPage1 from './pages/DemoPage1';
import DemoPage3 from './pages/DemoPage3';
import DemoPage4 from './pages/DemoPage4';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <DemoPage1/> */}
   {/* <DemoPage2/> */}
   {/* <DemoPage3/> */}
   <DemoPage4/>
  </React.StrictMode>
);

