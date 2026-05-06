// import React, { useState } from "react";
// import  StudentData from "../../../assets/json/studentInfo.json"
// import { handleUpdate,handleDelete,addNewStudent } from "../demoPageAction";
// export default function DemoPage7(){

//      const[studentInfo,setStudentInfo]=useState(StudentData)

//      return <div>
//         <div className="employee-List">
//             <h2>Student Information</h2>
//             {studentInfo.map((value,index)=>{
//                 return <React.Fragment>
//                     <p>Student Name :{value.name}</p>
//                         <p>Student Age :{value.age}</p>
//                             <p>Student Course :{value.course}</p>
//                             <button onClick={()=>handleUpdate(index,studentInfo,setStudentInfo)}>Update</button>
//                             <button onClick={()=>handleDelete(index,studentInfo,setStudentInfo)}>Delete</button>
//                 </React.Fragment>
//             })}
            
//         </div> 
//         <div>
//             <button onClick={()=>addNewStudent(studentInfo,setStudentInfo)}>Add new student</button>
            
//         </div>  
            
        
//      </div>
// }
