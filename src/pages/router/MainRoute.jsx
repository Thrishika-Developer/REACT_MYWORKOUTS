import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from '../home/HomePage'
import AboutPage from '../about/AboutPage'
import BlogPage from '../blog/BlogPage'
import ContactPage from '../contact/ContactPage'
import Header from "../core/reusable-components/Header"
import DashBoard from "../dashboard/DashBoard"
import LoginForm from "../login/LoginForm"
import ProductionRoute from "./ProductionRoute"
import ProductsPage from "../products/ProductsPage"
import ViewFullProduct from "../products/view-product/ViewFullProduct"

export default function MainRoute(){

    return <div> 

    <BrowserRouter>
    <Header/>
        <Routes>
            <Route index element = {< productsPage/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/blog" element={<BlogPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/> 
            <Route path="/login" element={<LoginForm/>}/> 
            <Route path="/products" element={<ProductsPage/>}/>
            <Route path ="/viewproduct" element={<ViewFullProduct/>}/>
            
            <Route path="/dashboard" element={
                    <ProductionRoute><DashBoard/></ProductionRoute>
            }/>
            <Route path="*" element={<h3>401 page not fount</h3>}/>

           
        </Routes>
    </BrowserRouter>

    </div>


}