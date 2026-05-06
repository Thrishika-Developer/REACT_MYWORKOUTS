//State component
// import { useState } from "react";
// export default function StateandStateless03(){
//     const[count,setCount]=useState(0)
//     return(
//         <div>
//             <p>{count}</p>
//             <button onClick={()=>setCount(count+1)}>Increase</button>
//         </div>
//     )
// }

//Stateless component
export default function StateandStateless03(props){
    return <h1>Hello,{props.name}</h1>
}

