import React from 'react';
import ReactDOM from 'react-dom/client';
// import DemoPage2 from './pages/DemoPage2';
// import DemoPage1 from './pages/DemoPage1';
// import DemoPage3 from './pages/DemoPage3';
// import DemoPage4 from './pages/DemoPage4';
// import DemoPage5 from './pages/DemoPage5';
import Counter from './pages/demoPage6/props_callback/Counter';
// import DemoPage7 from './pages/demopage7/Proper_web/DemoPage7';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <DemoPage1/> */}
   {/* <DemoPage2/> */}
   {/* <DemoPage3/> */}
   {/* <DemoPage4/> */}
   {/* <DemoPage5/> */}
   <Counter/>
   {/* <DemoPage7/> */}
  </React.StrictMode>
);

