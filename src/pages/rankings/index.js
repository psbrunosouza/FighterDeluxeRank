import React from 'react';
import MenuRanking from '../../../src/components/menuRanking';
import './rankings.css';
import Navbar from '../../components/navbar';


function Rankings({children}){
  return (
    <div className="rankings"> 
      <Navbar/>
      <MenuRanking/>
      {children}
    </div>
  );
}

export default Rankings;