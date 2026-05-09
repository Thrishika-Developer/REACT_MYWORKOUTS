
import isAuth from "./auth";
import { Navigate } from "react-router-dom";
export default function ProductionRoute({children}){


  
    if(!isAuth())
        return <Navigate to="/login" replace/>
    return children;
}