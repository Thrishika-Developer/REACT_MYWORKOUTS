import { useState } from "react";
export default function BasicForm(){
    const [input,setInput]=useState()

    const handleChange = (event)=>{
        const name = event.target.name
        const value = event.target.value

        setInput({...input,[name]:value})

    }
    const handleSubmit =(event)=>{
        event.preventDefault()
        console.log("formsubmit===>",input)
    }
    return <div>
        <div className="title"><h3>React Form</h3></div>
        <form action="" onSubmit={handleSubmit}>
           <div>
             <label htmlFor="username">Username</label>
            <input type="text"onChange={handleChange} name="username" id="username"/>
           </div>
           <div>
            <label htmlFor="password">Password</label>
            <input type="password" onChange={handleChange} name="password" id="password"/>
           </div>
           <div>
            <button type="submit" onClick={handleSubmit}>submit</button>
           </div>
        </form>
    </div>
}
