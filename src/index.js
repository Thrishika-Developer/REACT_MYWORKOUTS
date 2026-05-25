import React from 'react';
import ReactDOM from 'react-dom/client';
// import UncontrolledComponents from './pages/useRefHook/UncontrolledComponent';
// import UncontrolledForm from './pages/useRefHook/UncontrolledForm';
// import Counter from './pages/useMemo/Counter';
// import Calculator from './pages/useCallback/Calculator';
import DemoPage from './pages/demoPage/DemoPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <UncontrolledComponents/> */}
   {/* <UncontrolledForm/> */}
   {/* <Counter/> */}
   {/* <Calculator/> */}
   <DemoPage/>
  </React.StrictMode>
);

