import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";



export default function ViewFullProduct(){
    const [products,setProducts]=useState()
    var{id}=useParams()
    
    useEffect(()=>{
        getproducts()
    },[])

    const getproducts=async()=>{
        try{
            let response = await fetch(`https://fakestoreapi.com/products/${id}`)
            let responseData = await response.json()
            console.log("responseData=====>",responseData)
            setProducts([responseData])
        }
        catch(error){
            console.error(error)
        }
    }
    return <div>
        <div className="card-products-list">
            {
                    products && products.length != 0 ?
                    products.map((value,index)=>{
                        return <React.Fragment key={index}>
                            <img src={value?.image} height ={50} width={50}/>
                            <h5>{value?.title}</h5>
                            <p>price{value.price}</p>
                            <div> {value?.description}</div>
                            <hr />
                        </React.Fragment>
                    }
                ):<p>no product</p>}
        </div>
    </div>
}