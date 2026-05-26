import { useEffect, useState } from "react"
import api from './../../core/api/api'

export default function UserList(){
    const[user,setUser]=useState(null)
    useEffect(()=>{
        const getUserList = async()=>{

            try{
                let response = await api .get("/users")
                setUser(response?.data)
            }
            catch(error){
                throw new Error ("something went wrong!!!!")

            }  
        }
        getUserList()
    },[])
    return <div>
        <h1>UserList</h1>
        {JSON.stringify(user)}

    </div>
}