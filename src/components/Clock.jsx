import { useEffect, useState } from "react"

export default function Clock(){
    const[time,setTime]=useState(new Date());

    useEffect(()=>{
        console.log("Mounted");
   
    const timer = setInterval(()=>{
        setTime(new Date())
    },1000)

    return ()=>{
        clearInterval(timer);
        console.log("Unmounted")
    }
     },[])
    return <div>
        <h1>{time.toLocaleTimeString()}</h1>
    </div>
}