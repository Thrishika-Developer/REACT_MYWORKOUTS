import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { productsList } from "./api_thunk"

export default function ProductsPage(){

    const products = useSelector((state)=>state.products.products)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(productsList())
    },[])
    return <div>
        <h1>products page</h1>
        {JSON.stringify(products)}
    </div>
}