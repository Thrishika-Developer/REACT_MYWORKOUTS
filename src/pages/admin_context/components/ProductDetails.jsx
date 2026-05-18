import { useContext } from "react"
import { AdminContext } from "../../../core/context/GeneralContext"

export default function ProductDetails(){
    const {product} = useContext(AdminContext)
    // console.log(data)
    console.log(product)
    return <div>    
        <p>Product Details Components</p>
    </div>
}