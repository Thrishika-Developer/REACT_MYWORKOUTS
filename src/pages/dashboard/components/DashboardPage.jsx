import { useCallback, useState } from "react"
import Products from "./Products"

export default function DashboardPage(){

    const [order,setOrders]=useState(25)
    const somethingFunction = useCallback(()=>{
        console.log("something happen")
    },[order])
    return <div>
        <h1>Dashboard Page</h1>
        <div className="orders">
            <p>current order : {order}</p>
            <button onClick={()=>setOrders(order+1)}>Increase order</button>
        </div>
        <div className="product_list">
            <Products somethingFunction={somethingFunction}/>
        </div>
    </div>
}