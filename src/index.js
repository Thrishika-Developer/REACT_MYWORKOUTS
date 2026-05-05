import React from 'react';
import ReactDOM from 'react-dom/client';
// import NameList from './pages/a_events/NameList';
// import InputEvents from './pages/a_events/InputEvents';
import StateEvents from './pages/tasks/StateEvents';
import Dropdown from './pages/tasks/Dropdown';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* <InputEvents/> */}
      {/* <NameList/> */}
      {/* <StateEvents/> */}
      <Dropdown/>
  </React.StrictMode>
);

