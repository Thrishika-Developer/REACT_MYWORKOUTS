import { useEffect, useState } from "react"
import api from "../../../core/api/api"
import { memo } from "react"


export default memo (function Products(){
    console.log("child component is rendering!!!")

    const[productList,setProductList]=useState(null)
    useEffect(()=>{
        const getProductlist = async()=>{
            try{
                let response = await api.get("/products")
                setProductList(response?.data)
            }
            catch(error){
                throw new Error ("something went wrong!!!")
            }
        }
        getProductlist()
    },[])
    return <div>
        <h1>product list</h1>
        {JSON.stringify(productList)}
    </div>
})
