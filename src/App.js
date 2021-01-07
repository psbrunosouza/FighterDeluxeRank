import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import Logo from './assets/img/logo.png';
import Menu from './components/menu';
import Footer from './components/footer';
import './styles/global.css';
import './styles/app.css';

function App() {
  
  return (
    <BrowserRouter >
      <div className="container">
        <img className="logo" src={Logo} alt="Super Fighters Deluxe"/>
        <Menu />
        <Routes />
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
