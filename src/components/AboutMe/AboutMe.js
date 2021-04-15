import React from 'react';
import './AboutMe.css';
import king from '../../images/assets/crazyking.webp'
import triton from '../../images/assets/previewTriton.webp'
import spaceship from '../../images/assets/previewSpaceship.webp'
import chimpabastian from '../../images/chimpabastian.webp'

function AboutMe() {
    return (
        <div className="container">
            <div className="Container-GameSystem-Title">
                <h1 className="GameSystem-Title">ABOUT ME</h1>
            </div>
            <div>
                <figure className="container-chimpa">
                    <img src={chimpabastian} className="image-chimpa" alt="chimpabastian">
                    </img>
                </figure>
            </div>
            <div className="container-about-text">
                <p className="About-me-text">Hi everyone, I’m Chimpabastian, a video game lover. It was due to this passion I feel for the games that I prepared myself to develop them. This has been my career for more than three years, which has been one of the most amazing experiences in my life. The indie video games industry allows you to form yourself as a generalist and although my speciality is developing, thanks to this wonderful world, I’ve been able to work also as a game designer, artist, full stack developer and in the marketing area.</p>
                <p className="About-me-text"> If you like my work as a Voxel Artist, in a near future you will be able to buy it in the following link:</p>
            </div>
            <div className="container-button-profile">
                <a href="https://www.sandbox.game/en/users/chimpabastian/0acccc51-b9ff-4b3f-bb2b-6ce20dd20053/" 
                rel="noopener noreferrer" className="button-buy profile" target="_blank">SANDBOX PROFILE</a>
            </div>
            <h2 className="Assets-Title">FEATURED ASSETS</h2>
            <div className="container-cards">
                <Card
                    color="background-color-legendary"
                    image={triton} rarity="legendary"
                    name="Zilnis The Triton Prince"
                    url="https://www.sandbox.game/en/assets/zilnis-the-triton-prince/07ead66b-fe19-4d3e-9d15-fbe1df85f5fd/">
                </Card>
                <Card
                    color="background-color-epic"
                    image={king}
                    rarity="epic"
                    name="Crazy King"
                    url="https://www.sandbox.game/en/assets/crazy-king/0c44c456-f6f3-457c-80af-5072c0fa2f27/">
                </Card>
                <Card
                    color="background-color-rare"
                    image={spaceship} rarity="rare"
                    name="Spaceship"
                    url="https://www.sandbox.game/en/assets/spaceship/8f7a7443-6367-4486-b540-6798e74e9065/">
                </Card>
            </div>

        </div>
    );
}

function Card(props) {
    return (
        <div className="container-card-background">
            <div>
                <figure className="card-image-container">
                    <img src={props.image} className="card-image" alt="owlytrin">
                    </img>
                </figure>
            </div>
            <div className={"container-card " + props.color}>
            </div>
            <p className="asset-name">{props.name}</p>
            <div className="container-card-bottom">
                <span className={"text-rarity " + props.rarity}>{props.rarity}</span>
                <a href={props.url} rel="noopener noreferrer" className="button-buy" target="_blank">BUY NOW</a>
            </div>
        </div>
    );
}

export default AboutMe;