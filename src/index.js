
import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactList from './Notes/ReactLists';
import TodoList from './Notes/components/TodoList';
import ContactList from './Notes/components/ContactList';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <ReactList/> */}
   {/* <TodoList/> */}
  <ContactList/>
  </React.StrictMode>
);



