import { useState } from "react";
import Clock from "./Clock";
export default function App(){
    const[showClock,setShowClock]=useState(false);

    return <div>
        <button onClick={()=>setShowClock(true)}>Mount clock</button>
        <button onClick={()=>setShowClock(false)}>Unmont clock</button>
        {showClock && <Clock/>}
    </div>
}