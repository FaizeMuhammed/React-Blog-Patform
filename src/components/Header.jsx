import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="Header">
            <div className="logo">
            
            <h1>GO-BLOG</h1>
            </div>
            
            <ul className="Navlist">
            <li><a href=""><Link to='/'>Home</Link></a></li>
                <li><a href=""><Link to='/Login'>Login</Link></a></li>
                <li><a href=""><Link to='/Signup'>Signup</Link></a></li>
            </ul>
        </div>
    )
}

export default Header;