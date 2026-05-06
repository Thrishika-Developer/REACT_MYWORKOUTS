import React from 'react';
import ReactDOM from 'react-dom/client';
// import AddList from './pages/tasks/AddList';
import Onclick from './pages/Notes/Onclick01';
import ControlledandUncontrolled02 from './pages/Notes/ControlledandUncontrolled02';
import StateandStateless03 from './pages/Notes/StateandStateless03';
// import FootSelector from './pages/tasks/FoodSelector';

// import NameList from './pages/a_events/NameList';
// import Dropdown from './pages/b_SelectBoxEvent/Dropdown';
// import InputEvents from './pages/a_events/InputEvents';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* <InputEvents/> */}
      {/* <NameList/> */}
      {/* <Dropdown/> */}
      {/* <FootSelector/> */}
      {/* <AddList/> */}
      {/* <Onclick/> */}
      {/* <ControlledandUncontrolled02/> */}
      <StateandStateless03 name="thrishika"/>

  </React.StrictMode>
);

