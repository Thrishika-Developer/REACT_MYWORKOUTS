import { Formik,Form,Field,ErrorMessage } from "formik";
export default function FormikEx(){
    return (
    <Formik initialValues={{email:"",password:""}}
    validate={(values)=>{
        const errors = {}
        if(!values.email){
            errors.email="Email is required";
        }else if(!values.email.includes("@")){
            errors.email="Invalid email";
        }

        if(!values.password){
            errors.password="password is required";
        }else if (values.password.length<6){
            errors.password="Min 6 characters";
        }
        return errors;
    }}
    
    onSubmit={(values,{resetForm})=>{
        console.log("Form Data:",values)
        resetForm();
    }}> 
    <Form>
        <Field name="email" type="email" placeholder="Email"></Field>
        <ErrorMessage name="email" component="div" style={{color:"red"}}></ErrorMessage>

        <Field name="password" type="password" placeholder="password"></Field>
        <ErrorMessage name="password" component="div" style={{color:"red"}}></ErrorMessage>
        <button type="submit">Login</button>
    </Form>
    </Formik>
    ) 
}
