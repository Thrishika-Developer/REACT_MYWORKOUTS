import { useState } from "react"

export default function DarkMode(){

    const [isDark,setIsDark]=useState(false)

    return <div style={{background : isDark ? "black" : "white",padding:"20px"}}>
        <p style={{color: isDark ? "white" : "black"}}>
            {isDark ? "Dark mode" : "light mode"}
        </p>
        <button onClick={()=>setIsDark(!isDark)}> Toggle </button>
    </div>
}































