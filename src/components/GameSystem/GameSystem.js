import React from 'react';
import './GameSystem.css';



function GameSystem(props) {
    return (
        <>
            <div className="GameSystem">
                <div className="Container-GameSystem-Title">
                    <h1 className="GameSystem-Title">GAME SYSTEM</h1>
                </div>
                <div className="container">
                    <div className="GameSystem-Mechanics">
                    <iframe  className="iframe-Video"
                        src="https://www.youtube.com/embed/QcOMz9NnX7M" 
                        frameborder="0" allow="autoplay; encrypted-media" AllowFullScreen>
                    </iframe>
                    </div>
                </div>
            </div>
        </>
    );
}

function Mechanic(props) {
    return (
        <article className="mechanic">
            <div className="mechanic-details">
                <h3 className="mechanic-title">{props.mechanic.title}</h3>
                <p className="mechanic-description">{props.mechanic.description}</p>
            </div>
            <figure className="mechanic-imageContainer">
                <video controls
                    className="mechanic-image" alt={props.mechanic.title}
                    width="100%"
                    key={props.mechanic.imgUrl}
                ><source src={require(`../../video/${props.mechanic.imgUrl}`)} type="video/mp4" /></video>
            </figure>
        </article>
    );
}

export default GameSystem;