import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
// import UserList from './pages/customers/UserList';
// import LoginPage from './pages/customers/LoginPage';
// import DashboardPage from './pages/dashboard/components/DashboardPage';

const UserList = lazy(()=> import ("./pages/customers/UserList"))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <UserList/> */}
   {/* <LoginPage/> */}
   {/* <DashboardPage/> */}
   <Suspense fallback={<h1>Loading......</h1>}>
   <UserList/>
   </Suspense>
  </React.StrictMode>
);

