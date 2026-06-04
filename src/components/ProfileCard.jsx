import { useState } from "react"

export default function ProfileCard(){
    const[isOnline,setIsOnline]=useState(true)
    const[age,setAge]=useState(25)
    const[likes,setLikes]=useState(0)
    const[following,setFollowing]=useState(340)

    return <div>
        <h2>Thrishika N S</h2>
        <p>Age : {age}</p>
        <p>Status : {isOnline ? "Online" : "Offline"}</p>
        <p>Likes : {likes}</p>
        <p>Following : {following}</p>

        <button onClick={()=> setIsOnline(!isOnline)}>Toggle Status</button>
        <button onClick={()=> setAge(age+1)}>Birthday</button>
        <button onClick={()=> setLikes(likes+1)}>Likes</button>
        <button onClick={()=> setFollowing(following+1)}>Follow</button>

    </div>
}