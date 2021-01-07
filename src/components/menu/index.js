import React from 'react';
import {Link} from 'react-router-dom';
import './menu.css';

export default function Menu(){
  return(
    <div className="menu">      
      <div className="menu-tabs">
        <Link className="menu-item" to="/"> HOME </Link>
        <Link className="menu-item" to="/rules"> RULES </Link>
        <Link className="menu-item" to="/rankings"> RANKINGS </Link>
        <Link className="menu-item" to="/about"> ABOUT </Link>
      </div>
    </div>
  );
}