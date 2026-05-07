//empty array
// import { useEffect, useState } from "react";
// export default function Example(){
//     const[count,setCount]=useState(0)
    
//     useEffect(()=>{
//         setCount(count+1)
//     },[])
//     return <div>
//         <h1>side effect hook UnderStand</h1>
//         <h4>{count}</h4>
//         <button onClick={()=>setCount(count+1)}>Add count</button>
//     </div>
// }

//with values
// import { useEffect, useState } from "react";
// export default function Example(){
//     const[count,setCount]=useState(0)
    
//     useEffect(()=>{
//         setCount(count+1)
//             console.log("use effect is called")
//     },[count])
//     return <div>
//         <h1>side effect hook UnderStand</h1>
//         <h4>{count}</h4>
//         <button onClick={()=>setCount(count+1)}>Add count</button>
//     </div>
// 

//square root value

// import { useEffect, useState } from "react";
// export default function Example(){
//     const[count,setCount]=useState(0)
//     const[squrt,setSqurt]=useState(count)
    
//     useEffect(()=>{
//         setSqurt(Math.sqrt(count))
        
//     },[count])
//     return <div>
//         <h1>side effect hook UnderStand</h1>
//         <h4>{count}</h4>
//         <h3>square root: {squrt}</h3>
//         <button onClick={()=>setCount(count+1)}>Add count</button>
//     </div>
// }

//return unmounted
// import { useEffect, useState } from "react";
// export default function Example(){
//     const[count,setCount]=useState(0)
//     const[squrt,setSqurt]=useState(count)
    
//     useEffect(()=>{
//         setSqurt(Math.sqrt(count))

//         return(()=>{console.log("unmounted")})
        
//     },[count])
//     return <div>
//         <h1>side effect hook UnderStand</h1>
//         <h4>{count}</h4>
//         <h3>square root: {squrt}</h3>
//         <button onClick={()=>setCount(count+1)}>Add count</button>
//     </div>
// }

//---------------------------------------------------
//set intervel using program 
// import { useEffect, useState } from "react";
// export default function Example(){
//     useEffect(()=>{
//         const timer=setInterval(() => {
//             console.log('running..')
//         }, 1000);
//         return ()=>{
//             clearInterval(timer)
//         }
//     },[])
//     return <div>
//         <h2>side effect hook UnderStand</h2>
//     </div>
// }

