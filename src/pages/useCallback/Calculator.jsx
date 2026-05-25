import { useCallback, useState } from "react";

export default function Calculator(){
    const[count,setcount]=useState(0)
    const[sqrt,setsqrt]=useState(2)
    const showMessage= useCallback(()=>{
        setsqrt(sqrt+1)
        console.log("thrishika is clicked",sqrt)
    },[sqrt])

    return <div>
        <p>
            counter:{count}
        </p>
        <button onClick={()=>setcount(count+1)}>  Add count</button>
        <p>squrt: {sqrt}</p>
        <button onClick={showMessage}>calc square</button>
    </div>
}