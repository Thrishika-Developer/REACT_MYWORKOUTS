import { useEffect, useRef } from "react"

export default function UncontrolledComponents(){

    
    const inputRef =useRef()
    const handleClick = ()=>{
        console.log("inputRef=====>",inputRef.current.value)
    }
    useEffect(()=>{
        console.log("inputRef====>",inputRef)
    })
    return <div>
        <input type="text" ref={inputRef}/>
        <button onClick={handleClick}>show text</button>
    </div>
}