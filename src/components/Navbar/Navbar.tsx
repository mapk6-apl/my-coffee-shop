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

                <div id='primary-navigation' className={`links${isMenuOpen ? ' active' : ''}`}>
                    <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
                    <a href="#coffee-menu" onClick={() => setIsMenuOpen(false)}>Coffee Menu</a>
                    <a href="#about-us" onClick={() => setIsMenuOpen(false)}>About Us</a>
                    <a href="#contact-us" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
                    <a href="#coffee-shop" className='coffee-shop-link' onClick={() => setIsMenuOpen(false)}>Coffee Shop</a>
                </div>

        </nav>
    )
}

