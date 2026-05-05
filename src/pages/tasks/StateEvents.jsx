import {  useState } from "react";
export default function StateEvents(){

    const [input,setInput]=useState("")
    const[nameList,setNameList]=useState([])
    

    return <div>
        <div>
             <h2>Tamilnadu states</h2>
             <input type="text" onChange={(events)=> setInput(events.target.value)} />
             <button onClick={()=>setNameList([...nameList,input])}>Add</button>

             <div>
                <h3>You typed text is :</h3>
                
             </div>
             <div>
                {nameList.map((value,index)=><li key={index}>{value}</li>)}
                
            </div>
        </div>
    </div>
}