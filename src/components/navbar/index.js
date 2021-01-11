import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './navbar.css';

 function Navbar(){

  const navbarStyle = {
    color: "#db3b05",
  }
  
  let currentRoute = useLocation();
  let navbarRouteVerification = '';

  if(currentRoute.pathname === '/'){
    navbarRouteVerification = 'hidden';
  }

  return(
    <div className={`navbar ${navbarRouteVerification}`}>   
      <NavLink className="navbar-logo" to="/"><img src={Logo} alt="logo"/></NavLink> 
      
      <div className="nav-tabs">
        <NavLink className="nav-icon-youtube" to="/rules"> <i className="fab fa-youtube"></i> </NavLink>
        <NavLink className="nav-icon-discord" to="/rules"> <i className="fab fa-discord"></i> </NavLink>
        <NavLink activeStyle={navbarStyle} className="nav-item" to="/rules"> RULES </NavLink>
        <NavLink activeStyle={navbarStyle} className="nav-item" to="/rankings"> RANKINGS </NavLink>
        <NavLink activeStyle={navbarStyle} className="nav-item" to="/about"> ABOUT </NavLink>
      </div>
    </div>
  );
}

export default Navbar;