import { useState } from "react"

export default function Controlled(){
    const[value,setValue]=useState("")

    const handleSubmit=()=>{
        alert("Controlled value:"+ value);
    }
return <div>
    <h3>Controlled</h3>
    <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} 
    placeholder="Type here..."/>

    <p>state : {value}</p>
    <button onClick={handleSubmit}>Submit</button>
</div>
}