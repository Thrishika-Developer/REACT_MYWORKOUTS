import { useState } from "react";

export default function LikeButton(){
    const [liked,setliked]=useState(false)

    return (
        <button onClick={()=> setliked(!liked)}>
            {liked ? "❤️ Liked" : "🤍 like" }
        </button>
    )
}