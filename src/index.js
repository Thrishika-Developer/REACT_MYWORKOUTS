import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AdminContext, MainContext } from './core/context/GeneralContext';
import AdminPage from './pages/admin_context/AdminPage';
import MainRoute from './router/MainRoute';


const appsetting={
  theme : "white",
  language : "en"
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainContext.Provider value={appsetting}>
        <MainRoute/>
    </MainContext.Provider>

   
  </React.StrictMode>
);

