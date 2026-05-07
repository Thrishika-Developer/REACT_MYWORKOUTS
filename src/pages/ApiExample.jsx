import { useEffect, useState } from "react";
export default function ApiExample(){
    const[product,setProduct]=useState()
    const[productId,setProductId]=useState(1)

    useEffect(()=>{
        const id = productId == 0 ? 1 : productId
        getproduct(id)
    },[productId])

    const getproduct = async (productId)=>{
        let response = await fetch(`https://fakestoreapi.com/products/${productId}`)
        let responseData  = await response.json()
        responseData && (setProduct(responseData))

    }
    return <div>
        <img src={product?.image} alt="" height={ 50} width={50}/>
        <p>product Name : {product?.title}</p>
    
        <button onClick={()=>setProductId(productId-1)} disabled={productId==0? true : false}>Previous</button>
        <button onClick={()=>setProductId(productId+1)}> next</button>
    </div>
}