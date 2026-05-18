import { useContext } from "react"
import Products from "./ProductDetails"
import { AdminContext } from "../../../core/context/GeneralContext"
export default function CustomerDetails(){
    const {users}=useContext(AdminContext)
  
    return  <div>
        <p> Customer Details Components</p>
        <div className="">
            <h3 className="p-5 mx-5">Our Customers</h3>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>sno</th>
                        <th>Customer Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((value,key)=>{
                        return <tr key={key}>
                            <td>{key+1}</td>
                            <td>{value?.name?.firstname+''+value?.name?.lastname}</td>
                            <td>
                                {value?.email}
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
            <div className="m-5 fw-800 text-center">
                total Customers :{users.length}
            </div>

     

        </div>
    </div>
}