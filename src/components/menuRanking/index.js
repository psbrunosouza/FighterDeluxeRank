import React from 'react';
import {Link} from 'react-router-dom';
import './menuRanking.css';

function MenuRanking(){
  return (
    <ul className="menu-ranking">
      <li><Link to="/rankings/players">PLAYERS RANKING</Link></li>
      <li><Link to="/rankings/clans">CLANS RANKING</Link></li>
    </ul>
  );
}

export default MenuRanking;