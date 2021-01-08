import React from 'react';
import {NavLink} from 'react-router-dom';
import './menu.css';

export default function Menu(){
  
  const menuStyle = {
    color: '#FFD900',
  }
  
  return(
    <div className="menu">      
      <div className="menu-tabs">
        <NavLink activeStyle={menuStyle} exact className="menu-item" to="/"> HOME </NavLink>
        <NavLink activeStyle={menuStyle} className="menu-item" to="/rules"> RULES </NavLink>
        <NavLink activeStyle={menuStyle} className="menu-item" to="/rankings"> RANKINGS </NavLink>
        <NavLink activeStyle={menuStyle} className="menu-item" to="/about"> ABOUT </NavLink>
      </div>
    </div>
  );
}