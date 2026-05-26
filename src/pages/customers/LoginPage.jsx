import axios from "axios"
import api from '../../core/api/api'
export default function LoginPage(){
    const handleSubmit = async (event)=>{
        event.preventDefault()
        let payload ={
            "username":"johnd",
            "password":"m38rmF$"
        }
        let response = await api .post("/auth/login",payload)
        console.log("response====>",response.data.token)
    }
    return <div>
        <h1>Login page</h1>
        <form action="" onSubmit={handleSubmit}>
            <button type="submit"> login</button>
        </form>
    </div>
}