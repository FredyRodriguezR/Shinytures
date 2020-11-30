import React, { useRef } from 'react';
import Header from '../Header/Header'
import Main from '../Main/Main'
import GameSystem from '../GameSystem/GameSystem'
import dataMechanics from '../../data/gameSystemMechanics.json'
import Experience from '../Experience/Experience'
import dataBlogs from '../../data/blogs.json'
import Character from '../Character/Character'
import AboutMe from '../AboutMe/AboutMe'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import './App.css';



function App() {
    const ref = useRef(null);
    return (
        <>
            <div className="App" >
                <i className="fas fa-bars burger-button" onClick={() => { ref.current.onActiveMenu() }} ></i>
                <Header ref={ref} > </Header>
            </div>
            <section id="main">
                <Main></Main>
            </section>
            <section id="gamesystem">
                <GameSystem data={dataMechanics}></GameSystem>
            </section>
            <section id="blogs">
                <Experience data={dataBlogs}></Experience>
            </section>
            <section id="characters">
                <Character></Character>
            </section>
            <section id="about-me">
                <AboutMe></AboutMe>
            </section>
            <Contact></Contact>
            <Footer></Footer>
        </>
    );
}

export default App;