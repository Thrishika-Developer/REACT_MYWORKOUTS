import { createContext } from "react";
import CustomerDetails from "./components/CustomerDetails";
import productData from '../../core/json/product.json'
import userData from '../../core/json/user.json'
import { AdminContext } from "../../core/context/GeneralContext";
export default function AdminPage(){

    const adminContext = createContext()
    return <div>
        <h1>Admin page</h1>
        <AdminContext.Provider value={{"products":productData,"users":userData}}>
        <div>
            <CustomerDetails/>
        </div>

        </AdminContext.Provider>
    
    </div>
}