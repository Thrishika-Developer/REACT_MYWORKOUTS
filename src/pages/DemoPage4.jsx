// import { useState } from "react";
// import employeeData from "../assets/json/employee.json"
// export default function DemoPage4(){

//     const[employeeInfo,setEmployeeInfo]=useState(employeeData)

//     return <div>
//         <div className="employee-list">
//             <h2>Employee Information</h2>
//             <p>Employee Name : {employeeInfo?.name}</p>
//                 <p>Employee age : {employeeInfo?.age}</p>
//                     <p>Employee work : {employeeInfo?.work}</p>
//                         <p>Employee location : {employeeInfo?.address?.street}</p>
                    
//         </div>
//     </div>
// }

//use state in another json file
import { useState } from "react";
import employeeData from "../assets/json/employee.json"
export default function DemoPage4(){

    const[employeeInfo,setEmployeeInfo]=useState(employeeData)

    const handleUpdate =()=>{
        setEmployeeInfo({
            name : "thirisha",
            age : 22,
            work : "accounting",
            location : "chennai",
            address:{
                street : "4th street "
            }
        })
    }

    return <div>    
        <div className="employee-list">
            <h2> Employee Information </h2>
            <p>Employee Name : {employeeInfo?.name}</p>
            <button onClick={()=>setEmployeeInfo({...employeeInfo,name:"ramesh"})}>Update name</button>
        </div>
         <div>
            <p>Employee Age : {employeeInfo?.age}</p>
            <button onClick={()=>setEmployeeInfo({...employeeInfo,age:31})}>Update age</button>
        </div>
        <div>
            <p>Employee work : {employeeInfo?.work}</p>
            <button onClick={()=>setEmployeeInfo({...employeeInfo,work:"electrician"})}>Update work</button>
        </div>
        <div>
            <p>Employee location : {employeeInfo?.location}</p>
            <button onClick={()=>setEmployeeInfo({...employeeInfo,location:"kaniyakumari"})}>Update location</button>
        </div>
        {/* {JSON.stringify(employeeData)} */}
        <div>
           
            <p>Employee streetName : {employeeInfo?.address?.street}</p>
            <button onClick={()=>setEmployeeInfo({...employeeInfo,address:{street:"5th street"}})}>Update street</button>
        </div>

        <div>
            <button onClick={handleUpdate}>
                Update All Employee Information
            </button>
        </div>
    </div>

}



