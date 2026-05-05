import { useState } from "react";
export default function AddList(){
   
    const[input,setInput]=useState()
    const[state,setStateList]=useState([])

    return <div>
        <h2>Tamilnadu District</h2>
        <input type="text"  onChange={(event)=>setInput(event.target.value)}/>
        <button onClick={()=>setStateList([...state,input])}>Add</button>
        
        <div>
            <h3>View Data</h3>
            {state.map((value,index)=><li>{value}</li>)}
             
        </div>
    </div>
}