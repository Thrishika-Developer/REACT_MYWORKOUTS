import { useMemo, useState } from "react"

const expensiveCalc=(item)=>{
    console.log(item)
    for(let i=0;i<1000000000;i++){}
    return item **2
}
export default function Counter(){
    const[count,setcount]=useState(0)
    const[expInput,setexpInput]=useState(2)

const squareResult= useMemo(()=>{
    return expensiveCalc(expInput)
},[expInput])
    return <div>
        <input type="text" onChange={(e)=>{
           setexpInput(e.target.value) 
        }} />
        <p>Square Root:{squareResult}</p>
        <p>Counter:{count}</p>
        <button onClick={()=>setcount(count+1)}>Add count</button>
    </div>

}