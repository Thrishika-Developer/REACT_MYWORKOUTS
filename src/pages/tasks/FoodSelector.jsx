import { useState } from "react";
import TypeList from '../assets/json/typeList.json'
import FootList from '../assets/json/footLit.json'
export default function FootSelector(){
    const[verity,setVerity]=useState(TypeList)
    const[foots,setFoots]=useState(FootList)
    const[select,setSelect]=useState("Selected type")

    return <div>
        <select onChange={(event)=>setSelect(event.target.value)} >
            {verity.map((value,index)=>{return <option value={value.name}>{value.type}</option>})}
        </select>
        <p>You selected food type:{select}</p>
        <select>
            {foots.map((value,index)=>{return (select == value.name)&&<option>{value.food}</option> })}
        </select>
    </div>


}

