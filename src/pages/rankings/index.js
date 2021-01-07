import React from 'react';
import MenuRanking from '../../../src/components/menuRanking';
import './rankings.css';

function Rankings({children}){
  return (
    <div className="rankings"> 
      <MenuRanking/>
      {children}
    </div>
  );
}

export default Rankings;