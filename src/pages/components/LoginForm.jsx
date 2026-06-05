import { useState } from "react"
export default function LoginForm(){
    const[username,setUsername]=useState("")
    const[password,setPassord]=useState("")

    const handleLogin =()=>{
        if(username && password){
            alert("Welcome," + username +"!")
        }else{
            alert("please enter username and password")
        }
    }
      const handleClear =() => {
            setUsername("");
            setPassord("");
        }

    return <div>
        <h2>Login</h2>
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Enter Username..."/>
        <input type="password" value={password} onChange={(e)=>setPassord(e.target.value)} placeholder="Enter password..."/>

        <button onClick={handleLogin}>Login</button>
        <button onClick={handleClear}>Clear</button>
    </div>
}