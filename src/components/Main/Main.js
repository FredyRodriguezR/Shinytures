import React from 'react';
import './Main.css';
import video from '../../video/Shinytures.mp4'
import logo from '../../images/Logotipo_shinytures.png'
import logoTsb from '../../images/logoLetra.png'



function Main() {
  return (
    <div className="container">
      <div className="Main">
        <div className="Main-Containar-Image">
          <video className="main-video" autoPlay muted loop="loop">
            <source src={video} type="video/mp4" />
          </video>
          <img src={logo} className="logoshinytures" alt="logoshinytures" />
          <p className="tsbSoon">AVAILABLE SOON!</p>
          <a href="https://www.sandbox.game/en/play/#play" rel="noopener noreferrer" className="tsbButton" target="_blank">
            <img src={logoTsb} className="tsblogo" alt="logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;