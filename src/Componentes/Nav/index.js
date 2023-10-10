import React, {useState} from "react";
import './Nav.css'

function Navbar() {
    return(
        <nav className="nav">
            <a href='#' className="nav_brand">Av1</a>
            <ul className="nav_menu">

            <li className="nav_item"><a href="#" className="nav_link">Home</a></li>
            <li className="nav_item"><a href="#" className="nav_link">Community</a></li>
            <li className="nav_item"><a href="#" className="nav_link">Suport</a></li>
            <li className="nav_item"><a href="#" className="nav_link">Sign Up</a></li>
            <li className="nav_item"><a href="#" className="nav_link">Log In</a></li>
            </ul>
            </nav>
    );
}

export default Navbar;