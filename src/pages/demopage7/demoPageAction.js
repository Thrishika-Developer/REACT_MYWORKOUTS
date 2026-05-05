export const handleUpdate = (profileIndex,oldState,newState)=>{
    const updateState = oldState.map((value,index)=>{
        if(index==profileIndex){
            value.name="Taj";
            value.age=22
            value.course="js"
        }
        return value
    })
    newState(updateState)
}

export const handleDelete=(profileIndex,oldState,newState)=>{

    const updateDelete = oldState.filter((value,index)=>(index!=profileIndex))
    newState(updateDelete)
}
export const addNewStudent =(oldState,newState)=>{
    let newStudent = {
        name : "ramesh",
        age :21,
        course : "javascript"
    }
    newState([...oldState,newStudent])
}