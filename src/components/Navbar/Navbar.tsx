import React from 'react'
import { Text } from '../Text/Text'
import coffeeLogo from '../../assets/coffee-logo.png'

export const Navbar = () => {
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

                <div className='links'>
                    <a href="#">Home</a>
                    <a href="#">Coffee Menu</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                    <a href="#" id='coffee-shop'>Coffee Shop</a>
                </div>
            </nav>
    )
}

