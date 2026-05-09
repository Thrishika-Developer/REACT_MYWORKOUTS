import React from 'react';
import ReactDOM from 'react-dom/client';
// import JsonLoginForm from './pages/Json_forms/JsonLoginForm';
// import FormikForm from './pages/formik_forms/FormikForm';
// import Forms from './Notes/Forms';
// import Formik from './Notes/FormikExample';
import FormikExample from './Notes/FormikExample';
// import BasicForm from './pages/basic_forms/BasicForm';
// import BasicYupForm from './pages/form_yup_validation/BasicYupForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <BasicForm/> */}
   {/* <JsonLoginForm/> */}
   {/* <FormikForm/> */}
   {/* <BasicYupForm/> */}
  
   {/* <Forms/> */}
   <FormikExample/>
  </React.StrictMode>
);

