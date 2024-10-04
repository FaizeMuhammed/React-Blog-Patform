import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="Header">
            <div className="logo">
            
            <h1 style={{fontSize:'25px'}}>GO-BLOG</h1>
            </div>
            
            <ul className="Navlist">
            <li><a style={{border:'1px solid black',borderRadius:'10px',padding:'10px'}} href=""><Link to='/'>Home</Link></a></li>
                <li><a style={{border:'1px solid black',borderRadius:'10px',padding:'10px'}} href=""><Link to='/Login'>Login</Link></a></li>
                <li><a style={{border:'1px solid black',borderRadius:'10px',padding:'10px'}} href=""><Link to='/Signup'>Signup</Link></a></li>
            </ul>
        </div>
    )
}

export default Header;