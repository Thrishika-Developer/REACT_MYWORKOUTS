import { useState } from "react"
export default function Card(){
    const[card,setCard]=useState(0)
    return <div>
        <p>card: {card} items</p>
        <button onClick={()=>setCard(card+1)}>Add to cart</button>
        <button onClick={()=>setCard(card-1)}>Remove</button>

    </div>
}