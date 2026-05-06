//Multiple state variable
// import { useState } from "react";
// export default function MultipleState02(){
//      const [name,setName]=useState("thrishika")
//      const[age,setAge]=useState(22)
//      const[isOnline,setOnline]=useState(true)
//     return (
//         <div>
//             <h3>{name}</h3>
//             <p>Age:{age}</p>
//             <p>status:{isOnline?"online": "offline"} </p>

//             <button onClick={()=>setAge(age + 1)}>Increase Age</button>
//             <button onClick={()=>setOnline(!isOnline)}>Toggle status</button>
//         </div>
//     )
// }

//Single Object State
import { useState } from "react"
export default function MultipleState02(){
    const[user,setUser]=useState({
        name:"thrishika",
        age : 22,
        isOnline:true 
    })
    const increaseAge =()=>
    {
        setUser({...user,age : user.age + 1})
    }
    
    
    return (
        <div>
            <h2> single object state</h2>
            <h1>Name : {user.name}</h1>
            <h2>Age : {user.age}</h2>
            <p>Status : {user.isOnline ? "online" : " offline"}</p>
            <button onClick={increaseAge}>Increase Age</button>
        </div>
    )
}