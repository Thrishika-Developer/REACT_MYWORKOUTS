import { useState } from "react";
export default function RegisterForm(){
    const[form,setForm]=useState({
        name:"",
        email:"",
        password:"",
    })
    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!form.name){
            alert("Please enter your name !");
            return;
        }
        if(!form.email.includes("@")){
            alert("Please enter a valid email!");
            return;
        }
        if(form.password.length<6){
            alert("password must be at least 6 characters!")
            return;
        }
        alert("Welcome,"+form.name + "!Registered Sucessfully!")
    }

    return   <div>
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Full Name" />
            <br /><br /><br />
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email"  />
            <br /><br /><br />
            <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" />
            <br /><br /><br />
            <button type="submit">Register</button>
        </form>
    </div>
}