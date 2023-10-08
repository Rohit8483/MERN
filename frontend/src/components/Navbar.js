import React from "react";
import {Link} from "react-router-dom";
import "../css/nav_footer.css"

const Navbar=()=>{
    return(
        <>
            <ul className="navbar-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/update">Update Products</Link></li>
                <li><Link to="/logout">Logout</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </>
    )

}

export default Navbar;