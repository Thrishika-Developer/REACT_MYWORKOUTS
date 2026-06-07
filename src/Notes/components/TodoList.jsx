import { useState } from "react";

export default function TodoList(){
    const[student,setStudent]=useState([
        {id:1,name:"thrishika"},
        {id:2,name:"thrisha"},
        {id:3,name:"thirumuruga"},
    ]);
    const deleteStudent = (id)=>{
        setStudent(student.filter((s)=> s.id !== id))

}

return (
    <div>
        <h2>Student List</h2>
        <ul>{student.map((student)=>(
            <li  key={student.id}>{student.name} <button onClick={()=>deleteStudent(student.id)}>Remove</button></li>))}</ul>
    </div>
)
}