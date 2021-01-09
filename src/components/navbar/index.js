import React from 'react';
import {NavLink} from 'react-router-dom';
import './navbar.css';
import Logo from '../../assets/img/logo.png';

 function Navbar(){
  const navbarStyle = {
    color: "#db3b05",
  }
  
  return(
    <div className="navbar">   
      <NavLink className="navbar-logo" to="/"><img src={Logo} alt="logo"/></NavLink> 
      
      <div className="nav-tabs">
        <NavLink className="nav-icon-youtube" to="/rules"> <i class="fab fa-youtube"></i> </NavLink>
        <NavLink className="nav-icon-discord" to="/rules"> <i class="fab fa-discord"></i> </NavLink>
        <NavLink activeStyle={navbarStyle} className="nav-item" to="/rules"> RULES </NavLink>
        <NavLink activeStyle={navbarStyle} className="nav-item" to="/rankings"> RANKINGS </NavLink>
        <NavLink activeStyle={navbarStyle} className="nav-item" to="/about"> ABOUT </NavLink>
      </div>
    </div>
  );
}

export default Navbar;