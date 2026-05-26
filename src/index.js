import React from 'react';
import ReactDOM from 'react-dom/client';
import UserList from './pages/customers/UserList';
import LoginPage from './pages/customers/LoginPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <UserList/> */}
   <LoginPage/>
  </React.StrictMode>
);

