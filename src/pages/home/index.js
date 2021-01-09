import React from 'react';
import Card from '../../components/cards';
import Logo from '../../assets/img/logo.png';
import Menu from '../../components/menu';
import {Link} from 'react-router-dom';
import './home.css';





function Home(){
  return(
    <div className="home">
      <Link to="/"><img className="logo" src={Logo} alt="Super Fighters Deluxe"/></Link>
      <Menu />
      <Card content="content" imgURL="https://image.freepik.com/fotos-gratis/empresario-segurando-um-monte-de-moedas_23-2148793764.jpg"/>
    </div>
  );
}

export default Home;