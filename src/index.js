
import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactList from './Notes/ReactLists';
import TodoList from './Notes/components/TodoList';
import AddList from './Notes/components/AddList';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <ReactList/> */}
   {/* <TodoList/> */}
   <AddList/>
  </React.StrictMode>
);



