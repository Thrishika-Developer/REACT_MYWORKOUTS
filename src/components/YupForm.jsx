import { Formik,Form,Field,ErrorMessage } from "formik";
import * as Yup from "yup"
import { useState } from "react";

const schema =Yup.object({
    name:Yup.string()
    .min(3,"name must be at least 3 characters")
    .required("Name is required"),

    email:Yup.string()
    .email("Invalid email")
    .required("Email is required"),

    phone:Yup.string()
    .min(10,"phone must be 10 digits")
    .max(10,"phone must be 10 digits")
    .required("phone is required"),
    
    password:Yup.string()
    .min(6,"Min 6 characters")
    .required("password is required"),

    confirmpassword:Yup.string()
    .oneOf([Yup.ref("password")],"password must match")
    .required("Confirm password is required",)


})

export default function YupForm(){
    const[submittedDaa,setSubmittedData]=useState(null)
    return <div>
        <h2>Registration From</h2>
        <Formik initialValues={{
            name:"",
            email:"",
            phone:"",
            password:"",
            confirmpassword:"",
        }}
        validationSchema={schema}
        onSubmit={(values,{resetForm})=>{
            setSubmittedData(values);
            resetForm();
        }}>
        <Form>
            <div>
                <label>Name</label>
                <Field name="name" type="text" placeholder="Enter name"/>
                <ErrorMessage name="name" component="div"/>
            </div>
            <div>
                <label>Email</label>
                <Field name="email" type="email" placeholder="Enter email"/>
                <ErrorMessage name="email" component="div"/>
            </div>
            <div>
                <label>Phone</label>
                <Field name="phone" type="text" placeholder="Enter phone"/>
                <ErrorMessage name="phone" component="div"/>
            </div>
            <div>
                <label>Password</label>
                <Field name="password" type="password" placeholder="Enter password"/>
                <ErrorMessage name="password" component="div"/>
            </div>
            <div>
                <label>Confirm Password</label>
                <Field name="confirmpassword" type ="password" placeholder="Confirm password"/>
                <ErrorMessage name="confirmpassword" component="div"/>
            </div>
            <button type="submit">Register</button>
        </Form>
        </Formik>
    </div>
}