import React, { useState } from "react";
import studentData from "../assets/json/studentInfo.json"

export default function DemoPage5(){
    const [studentInfo,setStudentInfo]= useState(studentData)
    const addNewStudent = ()=>{
        setStudentInfo([
            ...setStudentInfo,{
                name : "Ramesh",
                age : 28,
                course : "javascript"
            },
        ])
    }
    const handleUpdate =(profileIndex)=>{
        console.log(profileIndex)
        const updateInfo = studentInfo.map((value,index)=>{
            console.log(index)
            if(index==profileIndex){
                value.name ="taj"
                value.age =22
                value.course = "js"
            }
            return value
        })
        setStudentInfo(updateInfo)
    }

    const handleDelete = (profileIndex)=>{
        const afterDeleteRecord = studentInfo.filter((value,index)=>index!=profileIndex)
        setStudentInfo(afterDeleteRecord)
    }

    return <div>
        <div className="employee-list">
            <h2>Student Information</h2>
            {studentInfo.map((value,index)=>{
                return (
                    <React.Fragment>
                        <p>StudentName : {value?.name}</p>
                        <p>StudentAge: {value.age}</p>
                        <p>StudentCourse:{value.course}</p>
                        <button onClick={()=>handleUpdate(index)}>Update</button>
                         <button onClick={()=>handleDelete(index)}>Delete</button>
                         <hr />
                    </React.Fragment>
                )
            })}
        </div>
        <div>
            <button onClick={addNewStudent}>Add new student </button>
        </div>
    </div>


}