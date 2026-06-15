import { useState } from "react";
import * as Yup from "yup";

const schema = Yup.object({
    name: Yup.string()
    .min(3,"Too short")
    .required("Name required"),

    email:Yup.string()
    .email("Invalid email")
    .required("Email required"),

    password: Yup.string()
    .min(6,"min 6 chars")
    .matches(/[A-Z]/,"One uppercase required")
    .required("password required"),

    confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")],"password must match")
    .required("Required"),

    age : Yup.number()
    .min(18,"must be 18+")
    .max(60,"Too old")
    .required("Age required"),
    
    terms: Yup.boolean()
    .oneOf([true],"Accept terms"),
})

export default function YupValidation(){
    const[form,setForm]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        age:"",
        terms:false,
    });
    const[errors,setErrors]=useState({});
    const handleChange=(e)=>{
        const{name,value,type,checked}=e.target;
        setForm({...form,[name]:type==="checkbox" ? checked : value})
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            await schema.validate(form,{abortEarly:false})
            setErrors({});
            alert("welcome,"+ form.name + "!Registered successfully!")
        }
        catch(err){
            const newErrors={};
            err.inner.forEach((e)=>{
                newErrors[e.path]=e.message;            
            })
            setErrors(newErrors)
        }}
    

    return <div>
        <form onSubmit={handleSubmit}>
            <h2>Register Form</h2>

            <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name"/>
            {errors.name && <p>{errors.name}</p>}

            <input name="email" value={form.email} onChange={handleChange} placeholder="Email"/>
            {errors.email && <p>{errors.email}</p>}

            <input name="password"type="password" value={form.password} onChange={handleChange} placeholder="Password"/>
            {errors.password && <p>{errors.password}</p>}

            <input name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} placeholder="confirm password"/>
            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

            <input name="age" type="number" value={form.age} onChange={handleChange}  placeholder="Age"/> 
            {errors.age && <p>{errors.age}</p>}
            
            <input name="terms" type="checkbox" checked={form.terms} onChange={handleChange}/>
            <label> I accept the terms</label>
            {errors.terms && <p>{errors.terms}</p>} 

            <button type="submit">Register</button>
            </form>
    </div>

    }