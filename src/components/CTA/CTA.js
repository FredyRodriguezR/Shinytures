import React from 'react';
import './CTA.css';
import discover from '../../images/discover-playmap.webp'
import social from '../../images/social.webp'
import discord from '../../images/social/discord-circle.webp'
import telegram from '../../images/social/telegram-circle.webp'
import medium from '../../images/social/medium-circle.webp'
import twitter from '../../images/social/twitter-circle.webp'
import instagram from '../../images/social/instagram-circle.png'
import facebook from '../../images/social/facebook-circle.webp'
import youtube from '../../images/social/youtube.svg'
import twitch from '../../images/social/twitch.svg'

function CTA() {
    return (
        <div className="container">
            <div className="Container-GameSystem-Title">
                <h1 className="GameSystem-Title">WELCOME TO THE SANDBOX</h1>
            </div>
            <div className="container-main-sandbox">
                <div className="container-sandbox">
                    <div className="container-discover-text">
                        <p className="About-me-text">The Sandbox is a virtual world where players can play, build, own, and monetize their virtual experiences. We empower artists, creators, and players to build the platform they always envisioned, providing the means to unleash your creativity.</p>
                        <div className="container-button-profile">
                            <a href="https://www.sandbox.game/login/?r=F3NUgPZfj2~kIQMmeT2Iz" 
                            rel="noopener noreferrer" className="button-buy profile" target="_blank">PRE-REGISTER</a>
                        </div>
                    </div>
                    <div className="container-image-discover">
                        <img src={discover} className="image-discover" alt="discover"></img>
                    </div>
                </div>
            </div>
            <div className="container-main-sandbox">
                <div className="container-sandbox">
                    <div className="container-image-discover joinus">
                        <img src={social} className="image-discover" alt="social"></img>
                    </div>
                    <div className="container-discover-text social">
                        <p className="About-me-text">JOIN OUR COMMUNITY Be part of our amazing community and stay tuned for the news.</p>
                        <div className="container-button-profile">
                            <a href="https://community.sandbox.game/en/" 
                            rel="noopener noreferrer" className="button-buy profile" target="_blank">JOIN US</a>
                        </div>
                    </div>
                </div>
            </div>
            <p className="social-title">SOCIAL</p>
            <div className="social-group">
                <a className="social-link-sandbox" href="https://discord.com/invite/vAe4zvY" rel="noopener noreferrer" target="_blank">
                    <img src={discord} className="image-social" alt="social">
                    </img>
                </a>
                <a className="social-link-sandbox" href="https://t.me/sandboxgame" rel="noopener noreferrer" target="_blank">
                    <img src={telegram} className="image-social" alt="social">
                    </img>
                </a>
                <a className="social-link-sandbox" href="https://medium.com/sandbox-game" rel="noopener noreferrer" target="_blank">
                    <img src={medium} className="image-social" alt="social">
                    </img>
                </a>
                <a className="social-link-sandbox" href="https://twitter.com/thesandboxgame" rel="noopener noreferrer" target="_blank">
                    <img src={twitter} className="image-social" alt="social">
                    </img>
                </a>
                <a className="social-link-sandbox" href="https://www.instagram.com/thesandboxgame/" rel="noopener noreferrer" target="_blank">
                    <img src={instagram} className="image-social" alt="social">
                    </img>
                </a>
                <a className="social-link-sandbox" href="https://www.facebook.com/TheSandboxGame/" rel="noopener noreferrer" target="_blank">
                    <img src={facebook} className="image-social" alt="social">
                    </img>
                </a>
                <a className="social-link-sandbox" href="https://www.youtube.com/channel/UCzv1t7voB-bxMmXLysT4h0w" rel="noopener noreferrer" target="_blank">
                    <img src={youtube} className="image-social" alt="social">
                    </img>
                </a>
                <a className="social-link-sandbox" href="https://www.twitch.tv/thesandboxgame" rel="noopener noreferrer" target="_blank">
                    <img src={twitch} className="image-social" alt="social">
                    </img>
                </a>
            </div>   
        </div>
    );
}

export default CTA;