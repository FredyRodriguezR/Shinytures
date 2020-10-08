import React from 'react';
import './Main.css';
import video from '../../video/Shinytures.gif'
import logo from '../../images/Logotipo_shinytures.png'
import logoTsb from '../../images/logoLetra.png'



function Main() {
    return (
        <div className="container">
          <div className="Main">
              <div className="Main-Containar-Image">
                <img src={video} className="main-video" alt="logo"/>     
                <img src={logo} className="logoshinytures" alt="logoshinytures"/>
                <p className="tsbSoon">AVAILABLE SOON!</p>
                <a href="https://www.sandbox.game/en/play/#play" rel="noopener noreferrer" className="tsbButton" target="_blank"> 
                <img src={logoTsb} className="tsblogo" alt="logo"/>
                </a>
              </div>
          </div>
        </div>
      );
}

export default Main;