// import { useState } from "react";
// import States from '../assets/json/stateList.json'
// import Cities from '../assets/json/cityList.json'

// export default function Dropdown(){
//     const [stateList,setStateList]=useState(States)
//     const [cityList,setCityList]=useState(Cities)

//     const [selectedState,setSelectedState]=useState("selected state")

//     return <div>
//         <select onChange={(event)=>setSelectedState(event.target.value)}>
//         {
//             stateList.map((value,index)=>{return <option value={value.statecode}>{value.stateName}</option>})
//         }
//         </select>
//         <p>You are selcted state is :{selectedState}</p>
//         <select>
//             {cityList.map((value,index)=>{return (selectedState == value.statecode)&&<option>{value.city}</option>})}
//         </select>
//     </div>
// }