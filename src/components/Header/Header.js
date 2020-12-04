import React, { useState, forwardRef, useImperativeHandle } from 'react';
import logo from '../../images/Original.webp';
import './Header.css';


const Header = forwardRef((props, ref) => {
    const [menuName, setMenuName] = useState("menu");

    const onActiveMenu = () => {
        if (menuName === "menu") {
            setMenuName("menu is-active")
        } else {
            setMenuName("menu")
        }
    }

    useImperativeHandle(ref, () => {
        return {
            onActiveMenu: onActiveMenu
        }
    });

    return (
        <header className="App-header">
            <div className="container header">
                    <img className="logo" src={logo} alt="Logo"/>
                <nav className={menuName}>
                    <ol>
                        <li>
                            <a className="link" href="#gamesystem">GAME SYSTEM</a>
                        </li>
                        <li>
                            <a className="link" href="#blogs">BLOGS</a>
                        </li>
                        <li>
                            <a className="link" href="#characters">CHARACTERS</a>
                        </li>
                        <li>
                            <a className="link" href="#about-me">ABOUT ME</a>
                        </li>
                    </ol>
                </nav>
            </div>
        </header>
    );
})

export default Header;