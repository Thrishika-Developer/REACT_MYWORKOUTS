import {  useNavigate } from "react-router-dom"
export default function DashBoard(){

        const navigate = useNavigate()
        const handleLogout=()=>{
            localStorage.removeItem("token")
            navigate("/login")

        }

    return <div>
        <h1>Dashboard page</h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
}