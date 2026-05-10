import React from "react";
import { Formik, Form, Field, ErrorMessage, validationSchema } from "formik";
import * as Yup from "yup";

export default function UserForm() {
  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    password: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",
  };
  const validationSchema = Yup.object({
    fullName: Yup.string().required("full Name is required"),
    email: Yup.string().email("invalid email format").required("email is required"),
    password: Yup.string()
      .min(6, "Minimum 6 characters")
      .required("password id required"),
    phone: Yup.string().required("phone number is required"),
    gender: Yup.string().required("Gender is required"),
    address: Yup.string().required("address is required"),
    city: Yup.string().required("city is required"),
    state: Yup.string().required("state is required"),
    country: Yup.string().required("country is required"),
    zipcode: Yup.string().required("zip code is required"),
  });
  const onSubmit = (values) => {
    console.log("FormData===>", values);
  };

  return (
    <div style={{width:"400px",margin:"auto", border:"7px solid black",padding:"30px",marginLeft:"520px",marginTop:"70px",borderRadius:"20px"}}>
      <h2 style={{marginLeft:"80px"}}>User Registration Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form style={{margin:"40px"}}>
          <div>
            <label htmlFor="">Full Name </label>
            <Field style={{marginLeft:"50px"}} type="text" name="fullName" />
            <ErrorMessage name="fullName" component="div" />
          </div>
          <br />
          <div>
            <label htmlFor="">Email</label>
            <Field style={{marginLeft:"84px"}} type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <br />

          <div>
            <label htmlFor="">Password</label>
            <Field  style={{marginLeft:"60px"}} type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>

          <br />
          <div>
            <label htmlFor="">Phone</label>
            <Field  style={{marginLeft:"80px"}} type="text" name="phone" />
            <ErrorMessage name="phone" component="div" />
          </div>
          <br />
          <div>
            <label htmlFor="">Gender</label>
            <Field as="select"  style={{marginLeft:"73px"}} name="gender">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Field>
          </div>
          <br />
          <div>
            <label htmlFor="">Address</label>
            <Field style={{marginLeft:"68px"}} type="text" name="address" />
            <ErrorMessage name="address" component="div" />
          </div>
          <br />
          <div>
            <label htmlFor="">City</label>
            <Field  style={{marginLeft:"93px"}} type="text" name="city" />
            <ErrorMessage name="city" component="div" />
          </div>
          <br />
          <div>
            <label htmlFor="">State</label>
            <Field  style={{marginLeft:"87px"}} type="text" name="state" />
            <ErrorMessage name="state" component="div" />
          </div>
          <br />
          <div>
            <label htmlFor="">Country</label>
            <Field style={{marginLeft:"67px"}} type="text" name="country" />
            <ErrorMessage name="country" component="div" />
          </div>
          <br />
          <div>
            <label htmlFor="">Zip code</label>
            <Field style={{marginLeft:"63px"}} type="text" name="zipcode" />
            <ErrorMessage name="zipcode" component="div" />
          </div>

          <br />
          <div>
            <button onClick={onSubmit} style={{marginLeft:"0px" ,padding:"10px", width:"290px"}} type="submit">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
