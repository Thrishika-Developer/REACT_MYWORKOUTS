
import {BrowserRouter,Route,Routes} from "react-router-dom" 
import HomePage from "../pages/HomePage"
export default function MainRoute(){
    return <div>
        <BrowserRouter >
        <Routes>
            <Route index element={<HomePage/>}/>
        </Routes>
        </BrowserRouter>
    </div>

}