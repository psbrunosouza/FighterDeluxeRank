import React from 'react';
import Card from '../../components/cards';
import './home.css';


function Home(){
  return(
    <div className="home">
      <Card content="content" imgURL="https://image.freepik.com/fotos-gratis/empresario-segurando-um-monte-de-moedas_23-2148793764.jpg"/>
    </div>
  );
}

export default Home;