import { useState } from "react"

export default function Dashboard(){

    const[isLoggedIn,setIsLoggedIn]=useState(false)
    const[hasNotif,setHasNotif]=useState(false)
    const[isAdmin,setIsAdmin]=useState(false)

    if(!isLoggedIn){
        return <div>
            <h2>Please Login</h2>
            <button onClick={()=>setIsLoggedIn(true)}>Login</button>
        </div>
    }
    return <div>
        <h2>{isLoggedIn ? "welcome back,Thrishika!" : "please Login"}</h2>
        <p>Status : {isLoggedIn ? "online" : "offline"}</p>
        {hasNotif && <p>you have a new message!</p>}
        {isAdmin && <p>Admin panel is visible</p>}

        <button onClick={()=>setIsLoggedIn(false)}>Logout</button>
        <button onClick={()=>setHasNotif(!hasNotif)}>Toggle Notification</button>
        <button onClick={()=>setIsAdmin(!isAdmin)}>Toggle Admin</button>
    </div>
}