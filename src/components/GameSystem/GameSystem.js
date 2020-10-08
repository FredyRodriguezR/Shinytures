import React from 'react';
import './GameSystem.css';



function GameSystem(props) {
    return (
        <>
            <div className="GameSystem">
                <h1 className="GameSystem-Title">GAME SYSTEM</h1>
                <div className="container">
                    <div className="GameSystem-Mechanics">
                        {
                            props.data.data.map((mechanic, index) => {
                                return <Mechanic key={index} mechanic={mechanic} />
                            })}
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
              <img src={require(`../../images/${props.mechanic.imgUrl}`)} 
              className="mechanic-image" alt={props.mechanic.title} 
              width="450"
              key = {props.mechanic.imgUrl}
              ></img>
          </figure>
        </article>
      );
  }

export default GameSystem;