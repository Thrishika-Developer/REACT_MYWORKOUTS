import React, { useState } from "react";
import studentData from "../assets/json/studentInfo.json"
import { addNewStudent,handleDelete,handleUpdate} from "../demoPageAction";

export default function DemoPage7(){
    const [studentInfo,setStudentInfo]= useState(studentData)
   

return <div>
        <div className="employee-list">
            <h2>Student Information</h2>
            {studentInfo.map((value,index)=>{
                return (
                    <React.Fragment>
                        <p>StudentName : {value?.name}</p>
                        <p>StudentAge: {value.age}</p>
                        <p>StudentCourse:{value.course}</p>
                        <button onClick={()=>handleUpdate(index,studentInfo,setStudentInfo)}>Update</button>
                         <button onClick={()=>handleDelete(index,studentData,setStudentInfo)}>Delete</button>
                         <hr />
                    </React.Fragment>
                )
            })}
        </div>
        <div>
            <button onClick={()=>addNewStudent(studentInfo,setStudentInfo)}>Add new student </button>
        </div>
    </div>

 }