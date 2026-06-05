import React from 'react';
import ReactDOM from 'react-dom/client';
// import AddList from './pages/tasks/AddList';
import Onclick from './pages/Notes/Onclick01';
import ControlledandUncontrolled02 from './pages/Notes/ControlledandUncontrolled02';
import StateandStateless03 from './pages/Notes/StateandStateless03';
import LoginForm from './pages/components/LoginForm';
import Controlled from './pages/components/Controlled';
import Controlled_Uncontrolled from './pages/components/Controlled_Uncontrolled';
import Statefull_Stateless from './pages/components/Stateful_Stateless';
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
      {/* <StateandStateless03 name="thrishika"/> */}
      {/* <LoginForm/> */}
      {/* <Controlled/> */}
      {/* <Controlled_Uncontrolled/> */}
      <Statefull_Stateless/>

  </React.StrictMode>
);

