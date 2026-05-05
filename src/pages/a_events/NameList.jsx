// import { useState } from "react";
// export default function NameList(){
//     const [input,setInput]=useState()
//     const [nameList,setNameList]=useState([])

//     return <div>

//         <div>
//             <h5>Add Name List</h5>
//             <input type="text" onChange={(events)=>setInput(events.target.value)}/>
//             <button onClick={()=>setNameList([...nameList,input])}>Add</button>
//         </div>

//         <div>
//             <h5>View Name List</h5>
//             <div>
//                 {nameList.map((value,index)=><li key={index}>{value}</li>)}
//             </div>
//         </div>
//     </div>
// }