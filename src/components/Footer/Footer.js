import React from 'react';
import './Footer.css';
import logoTSB from '../../images/SupportByTSBwhite.png'



function Footer() {
    return (
        <div className="Footer">
            <div className="container">
                <div>
                    <img src={logoTSB} alt="Logo TSB" width="200px" />
                </div>
                <div>
                    <p>Designed by <a href="https://twitter.com/chimpabastian" rel="noopener noreferrer" target="_blank">@Chimpabastian</a></p>
                </div>
            </div>
        </div>
    );
}

export default Footer;