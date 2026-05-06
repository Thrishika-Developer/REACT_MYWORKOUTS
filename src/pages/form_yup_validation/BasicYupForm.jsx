import {Form, Field, Formik, ErrorMessage } from "formik";
import * as Yup from 'yup';

const initialValue = {
  username: "",
  password: ""
};
const validationSchema = Yup.object({
  username: Yup.string().required("username is required")
            .email("username must be email format"),

  password: Yup.string().required("password is required")
});
export default function BasicYupForm() {
  return (
    <div>
      <Formik
        initialValues={initialValue}
        validationSchema ={validationSchema}
        onSubmit=
        {(values) => {
          console.log("Form is submitted", values);
        }}

        >
        {({ handleChange }) => (
          <Form>
            <div>
              <label htmlFor="">Username</label>
              <Field type="text" name="username" onChange={handleChange} />
              <ErrorMessage name="username" component="div" />
            </div>
            <div>
              <label htmlFor="">Password</label>
              <Field type="text" name="password" onChange={handleChange} />
              <ErrorMessage name="password" component="div" />
            </div>
            <div>
              <button type="submit">Login</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
