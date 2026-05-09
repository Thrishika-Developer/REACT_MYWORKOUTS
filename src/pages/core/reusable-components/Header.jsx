import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
export default function Header(){

    // return <div>
    //     <Nav activeKey={'/home'}>
    //         <Nav.Item>
    //             <Nav.Link href="/home">Home</Nav.Link>
    //         </Nav.Item>
    //         <Nav.Item>
    //             <Nav.Link href="/about">About</Nav.Link>
    //         </Nav.Item>
    //         <Nav.Item>
    //             <Nav.Link href="/contact">Contact</Nav.Link>
    //         </Nav.Item>
    //         </Nav>
    // </div>

    return <div>
        <div className="nav">
            <div className="nav-item">
                
                    <Link to ="/home">Home</Link>
                
            </div>
            <div className="nav-item">
                
                    <Link to ="/about">About</Link>
                
            </div>
            <div className="nav-item">
                
                    <Link to ="/contact">Contact</Link>
                
            </div>
            <div className="nav-item">

                <Link to="/blog">Blog</Link>
                
            </div>
            <div className="nav-item">

                <Link to="/login">Login</Link>
                
            </div>
        </div>
    </div>
}