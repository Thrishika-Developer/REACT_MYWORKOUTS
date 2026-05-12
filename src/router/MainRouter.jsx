import {BrowserRouter,Route,Routes} from "react-router-dom"

import HomePage from "../pages/home/HomePage"
import ContactPage from "../pages/contact/ContactPage"
export default function MainRouter(){
    return <div>
        <BrowserRouter>
        <Routes>
            <Route index element ={<HomePage/>}/>
            <Route path="home" element={<HomePage/>}/>
            <Route path="contact" element={<ContactPage/>}/>
        </Routes>
        </BrowserRouter>
    </div>
}