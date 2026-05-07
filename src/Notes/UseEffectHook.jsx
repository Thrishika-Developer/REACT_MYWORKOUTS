//No dependency array

// import React, { useEffect, useState } from "react";

// export default function UseEffectHook(){
//     const[count,setCount]=useState(0);

//     useEffect(()=>{
//         console.log("runs every renders")
//     })

//     return(
//         <div>
//             <h1>{count}</h1>
//             <button onClick={()=>setCount(count +1)}>Increase</button>
//         </div>
//     )
// }
//-------------------------------------------------------------------------------------
//empty dependency array

// import React, { useEffect, useState } from "react";

// export default function UseEffectHook(){
//     const[count,setCount]=useState(0);

//     useEffect(()=>{
//         console.log("runs every renders")
       
//     },[])

//     return(
//         <div>
//             <h1>{count}</h1>
//             <button onClick={()=>setCount(count+1)}>Increase</button>
//         </div>
//     )
// }

//------------------------------------------------------------------
//with dependency with value

// import React, { useEffect, useState } from "react";

// export default function UseEffectHook(){
//     const[count,setCount]=useState(0);

//     useEffect(()=>{
//         console.log("runs every renders")
//         // setCount(count+1)

//     },[count])

//     return(
//         <div>
//             <h1>{count}</h1>
//             <button onClick={()=>setCount(count+1)}>Increase</button>
//         </div>
//     )
// }

import {  useEffect, useState } from "react"

export default function UseEffectHook(){

    // const[count,setCount] = useState(0)
    // const[sqrt,setSqrt] = useState(Math.sqrt(count))

    // useEffect(()=>{

    //     setSqrt(Math.sqrt(count))

    //     return(
    //         () =>{
    //             console.log("Unmont phase")
    //         }
    //     )

    // },[count])
    useEffect(() => {

    const timer = setInterval(() => {
       console.log("Running...");
     }, 1000);

    return () => {
        clearInterval(timer);
    };

    }, []);

    return <div>
         <h1> Side Effect Hook UnderStand</h1>
         {/* <h4> Count : {count} </h4>
         <p> Squrt of count : {sqrt} </p>
         <button onClick = {() => setCount(count + 1)}>Add count </button> */}


    </div>
}