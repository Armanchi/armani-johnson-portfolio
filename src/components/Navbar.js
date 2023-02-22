import React from "react";
import {BrowserRouter} from "react-router-dom";
import "../styles/Navbar.css";




const Navbar = () => {
      return (
        <div className="navbar-container">
            <BrowserRouter>
            <ul>
                <li className="nav-link"><a href="/">home</a></li>
                <li className="nav-link"><a href="#about">about</a></li>
                <li className="nav-link"><a href="#projects">projects</a></li>
                <li className="nav-link"><a href="#contact">contact</a></li>
            </ul>
            </BrowserRouter>
        </div>
      )
}



// navbar links:
// #home
// #about
// #projects
// #experience
// #contact

//     const links = [
//         <a href="#intro">home</a>,
//         <a href="#about">about</a>,
//         <a href="#projects">projects</a>,
//         <a href="#contacts">hi there</a>
//       ];

export default Navbar;