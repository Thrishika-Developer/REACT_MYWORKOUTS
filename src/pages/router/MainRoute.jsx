import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from '../home/HomePage'
import AboutPage from '../about/AboutPage'
import BlogPage from '../blog/BlogPage'
import ContactPage from '../contact/ContactPage'
import Header from "../core/reusable-components/Header"

export default function MainRoute(){

    return <div> 

    <BrowserRouter>
    <Header/>
        <Routes>
            <Route index element = {<HomePage/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/blog" element={<BlogPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>  
        </Routes>
    </BrowserRouter>

    </div>


}