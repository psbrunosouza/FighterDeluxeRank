import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './styles/global.css';
import './styles/app.css';

function App() {

  return (
    <BrowserRouter >
      <div className="container">
        <Navbar />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
