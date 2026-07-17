import React, { useState } from 'react'
import { Text } from '../Text/Text'
import coffeeLogo from '../../assets/coffee-logo.png'

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar-container">
            <div className="navbar-left">
                <div id="logo-text">
                    <Text variant="h2" style={{ margin: 0 }}>Flavored</Text>
                    <img src={coffeeLogo} alt="Coffee Shop Logo" id='logo-image' />
                </div>
                <div id='slogan'>
                    <Text variant="h3" style={{ margin: 0 }}>Wake up to something special.</Text>
                </div>
            </div>

            <button className='hamburger-menu' onClick={toggleMenu}>
                {isMenuOpen ? 'x' : '☰'}
            </button>

            {isMenuOpen && (
                <div className='links'>
                    <a href="#" onClick={toggleMenu}> Home</a>
                    <a href="#" onClick={toggleMenu}>Coffee Menu</a>
                    <a href="#" onClick={toggleMenu}>About Us</a>
                    <a href="#" onClick={toggleMenu}>Contact Us</a>
                    <a href="#" id='coffee-shop' onClick={toggleMenu}>Coffee Shop</a>
                </div>
            )}

        </nav>
    )
}

