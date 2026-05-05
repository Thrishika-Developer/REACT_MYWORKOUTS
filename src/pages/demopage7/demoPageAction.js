export const addNewStudent = (oldState,updateState)=>{
        setStudentInfo([
            ...setStudentInfo,{
                name : "Ramesh",
                age : 28,
                course : "javascript"
            },
        ])
    }


export const handleUpdate =(profileIndex)=>{
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

export const handleDelete = (profileIndex)=>{
        const afterDeleteRecord = studentInfo.filter((value,index)=>index!=profileIndex)
        setStudentInfo(afterDeleteRecord)
    }