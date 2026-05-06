import { Form,Field,Formik } from "formik";
export default function FormikForm(){

    return <div>
        <Formik 
        initialValues ={{
            username: "",
            password: ""
        }}
        onSubmit={(values)=>{
            console.log("Form is submitted",values)
        }}>
        
        {({handleChange})=>(
        <Form>
            <div>
                <label htmlFor="">Username</label>
                <Field type="text" name="username" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="">Password</label>
                <Field type="text" name ="password" onChange={handleChange}/>
            </div>
            <div>
                <button type="submit">Login</button>
            </div>

        </Form>

        )}
        </Formik>
    </div>
}