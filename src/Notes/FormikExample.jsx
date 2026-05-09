//formik

// import {Formik,Field,Form} from "formik"
// export default function FormikExample(){

//     return (
//         <Formik
//             initialValues = {{
//                 email:"",
//                 password:""
//             }}
//             onSubmit={(values)=>{
//                 console.log(values);
//             }
//         }
//         >
//             <Form>
//                 <div>
//                   <Field name="email" type="email" placeholder="enter your email"/>
//                 </div>
              
//                 <div><Field name ="password" type="password" placeholder="enter your password"/></div>
                
//                 <button type="submit">Login</button>
//             </Form>

//         </Formik>
//     )
// }

//Using yup

// import {Formik,Form,Field,ErrorMessage} from "formik"

// import * as Yup from "yup"

// const schema = Yup.object({
//     email: Yup.string().email().required(),
//     password:Yup.string().min(6).required()
// })
// export default function FormikExample(){
//     return(
//         <Formik 
//         initialValues={{email:"",password:""}}
//         validationSchema = {schema}
//         onSubmit={(values)=>{
//             console.log(values)
//         }}
//         >

//             <Form>
//                 <div>
//                     <Field name="email" type="email"/>
//                     <ErrorMessage name="email" component="div"/>
//                 </div>
//                 <div>
//                     <Field name="password" type="password"/>
//                     <ErrorMessage name="password" component="div"/>

//                 </div>
//                 <div>
//                     <button type="submit">Submit</button>
//                 </div>
//             </Form>
//         </Formik>
//     )
// }

//Yup validation
import { Formik,Form,Field,ErrorMessage} from "formik";
import React from "react";
import * as Yup from "yup";


const validationSchema = Yup.object({
    //string validation
    username : Yup.string().required("username is required")
    .min(3,"minimum 3 charecter")
    .max(20,"Maximum 20 character")
    .matches(/^[A-Za-z]+$/,"only letters allowed"),

    //email validation 
    email:Yup.string()
    .email("Invalid email format")
    .required("Email is required")

    
})

export default function Forms(){


    return (
    
        <Formik 
        initialValues={{
            name:"",
            email:"",
            password:"",
            confirmPassword:"",
            age:"",
            terms:false,
            dob:"",address:{
                city:"",
                zip:"",
            },
            skills:[],
            contactMethod:"",
            phone:"",
            username:"",
            fullName:"",

        }}
        validationSchema={validationSchema}
        onSubmit={(values)=>{
            console.log(values);
            alert("form is submitted successfully")
        }}
        
        >
        {({values,setFieldValue})=>{
                return (
                    <Form>
                        {/* Name */}
                        <div>
                            <label> Name:</label><br />
                            <Field name="name" />
                            <ErrorMessage name="name" component="div" />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="">Email:</label>
                            <Field name="email" />
                            <ErrorMessage name="email" component="div" />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="">password:</label>
                            <Field name="password" type="password" />
                            <ErrorMessage name="password" component="div"/>
                        </div>
                        <br />
                           <div>
                            <label htmlFor="">Confirm password:</label>
                            <Field name="confirm password" type="password" />
                            <ErrorMessage name="confirm password" component="div"/>
                        </div>
                        <br />
                        <div>
                            <label htmlFor="">Age:</label>
                            <Field name="age" type="number"/>
                            <ErrorMessage name="age" component="div"/>
                        </div>
                        <br />
                        <div>
                            <label>
                            <Field type="checkbox" name="terms"/>
                            Accepted terms
                            </label>
                            <ErrorMessage name="terms" component="div"/>
                        </div>
                        <br />
                        <div>
                            <label htmlFor="">Date of birth </label>
                            <Field name="dob" type='date'/>
                            <ErrorMessage name="dob" component={"div"}/>
                        </div>
                        <br />
                        <div>
                        <label htmlFor=""> City:</label>
                        <Field name="address.city"/>
                        <ErrorMessage name="address.city" component={"div"}/>
                        </div>
                        <br />
                        <div>
                            <label htmlFor="">zip code:</label>
                            <Field name="address.zip" />
                            <ErrorMessage name="address.zip" component="div"/>
                        </div>
                        <br />
                        <div>
                            <label htmlFor="">Skills:</label>
                            <input type="checkbox" value="react" checked={value.skills.includes("React")} 
                            onChange={(e)=>{
                                if(e.target.checked){
                                    setFieldValue("skills",[...values.skills,"React"])
                                }
                             
                            }}/>
                        </div>


                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </Form>
                        
                        
                );
            }}

        </Formik>
    )
}