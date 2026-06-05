import React from 'react';
import ReactDOM from 'react-dom/client';
import ConditionalReasoning from './pages/Notes/ConditionalReasoning';
import Dashboard from './pages/components/Dashboard';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <ConditionalReasoning/> */}
   <Dashboard/>
  </React.StrictMode>
);

