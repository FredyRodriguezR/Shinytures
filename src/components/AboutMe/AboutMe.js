import React from 'react';
import './AboutMe.css';
import owl from '../../images/assets/previewOwl.png'
import triton from '../../images/assets/previewTriton.png'
import spaceship from '../../images/assets/previewSpaceship.png'
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
                <p className="About-me-text">Si les gusta el trabajo que realizo como Voxel Artist en un futuro muy cercano lo podran comprar en el siguiente enlace:</p>
            </div>
            <div className="container-button-profile">
                <a href="https://www.sandbox.game/en/users/chimpabastian/0acccc51-b9ff-4b3f-bb2b-6ce20dd20053/" 
                rel="noopener noreferrer" className="button-buy profile" target="_blank">SANDBOX PROFILE</a>
            </div>
            <h2 className="Assets-Title">ASSETS DESTACADOS</h2>
            <div className="container-cards">
                <Card
                    color="background-color-legendary"
                    image={triton} rarity="legendary"
                    name="Zilinis The Triton Prince"
                    url="https://www.sandbox.game/en/assets/zilnis-the-triton-prince/07ead66b-fe19-4d3e-9d15-fbe1df85f5fd/">
                </Card>
                <Card
                    color="background-color-epic"
                    image={owl}
                    rarity="epic"
                    name="Owlytrin"
                    url="https://www.sandbox.game/en/assets/owlytrin/051626f6-f0ae-4a1c-8538-0736a4675be0/">
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