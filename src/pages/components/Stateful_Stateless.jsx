import { useState } from "react"

function Thumbnail({views}){
    return <div style={{background:"purple",padding:"80px",color:"white",marginLeft:"200px",marginRight:"300px",textAlign:"center"}}> 
               ▶️ {views}
    </div>
}
function VideoInfo({title,channel,views}){
    return <div>
        <h3>{title}</h3>
        <p>{channel}  {views}</p>
    </div>
}


export default function Statefull_Stateless(){
    const[liked,setLiked]=useState(false)
    const[subscribed,SetSubscribed]=useState(false)
    const[saved,setSaved]=useState(false)
    return <div>
        <Thumbnail views ="1.2M views"/>
        <VideoInfo 
        title="React Hooks Full Course 2026"
        channel="thrishika"
        views="1.2M"/>

        <button onClick={()=>setLiked(!liked)}>
            {liked ? "liked" : "like"}
        </button>
        <button onClick={()=>SetSubscribed(!subscribed)}>
            {subscribed ? "subscribed" : "subscribe"}
        </button>
        <button onClick={()=>setSaved(!saved)}>
            {saved ? "saved" : "save"}
        </button>

        
    </div>
}