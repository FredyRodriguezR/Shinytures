import React from 'react';
import './Character.css';
import Carousel from 'react-hook-carousel'

const slider = [
    { image: require("../../images/shinytures/redMonkey.webp"), alt: "red shinyture" },
    { image: require("../../images/shinytures/redPrimate.webp"), alt: "red shinyture evo" }
];

const slider2 = [
    { image: require("../../images/shinytures/blueFish.webp"), alt: "blue shinyture" },
    { image: require("../../images/shinytures/blueWhale.webp"), alt: "blue shinyture evo" }
];

const slider3 = [
    { image: require("../../images/shinytures/greenBabyDino.webp"), alt: "green shinyture" },
    { image: require("../../images/shinytures/greenDino.webp"), alt: "green shinyture evo" }
];

function Character() {
    return (
        <div className="container">
            <div className="Container-GameSystem-Title">
                <h1 className="GameSystem-Title">SHINYTURES</h1>
            </div>
            <div className="Character">
                <div className="Container-Carrusel red">
                    <p className="Character-Title">Red Shinyture</p>
                    <Carousel items={slider} groupBy={false} showDots={true} effect="fade" showButton={true} caption={true} />
                </div>
                <div className="Container-Carrusel blue">
                    <p className="Character-Title">Blue Shinyture</p>
                    <Carousel items={slider2} groupBy={false} showDots={true} effect="fade" showButton={true} caption={true} />
                </div>
                <div className="Container-Carrusel green">
                    <p className="Character-Title">Green Shinyture</p>
                    <Carousel items={slider3} groupBy={false} showDots={true} effect="fade" showButton={true} caption={true} />
                </div>
            </div>
        </div>
    );
}

export default Character;