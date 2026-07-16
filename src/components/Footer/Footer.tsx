import React from 'react'
import spilledCoffeeBeans from '../../assets/coffee-beans-spilled.png'
import coffeeLogo from '../../assets/coffee-logo.png'
import { Text } from '../Text/Text'

export const Footer = () => {
    return (
        <div className='footer-content'>
            <img src={spilledCoffeeBeans} alt='Spilled Coffee Beans' id='spilled-beans' />

            <div className="footer">
                <div className='footer-left'>
                    <div id="logo-text-2">
                        <Text variant="h2">Flavored</Text>
                        <img src={coffeeLogo} alt="Coffee Shop Logo" id='logo-image-2' />
                    </div>
                    <div id='slogan-2'>
                        <Text variant="h3">Wake up to something special.</Text>
                    </div>
                </div>

                <div id='our-services'>
                    <Text variant="h2">Our Services</Text>
                    <Text variant="p">Pricing</Text>
                    <Text variant="p">Tracking</Text>
                    <Text variant="p">Report a Bug</Text>
                    <Text variant="p">Terms of Services</Text>
                </div>
                <div id='our-company'>
                    <Text variant="h2">Our Company</Text>
                    <Text variant="p">About Us</Text>
                    <Text variant="p">Our Team</Text>
                    <Text variant="p">Careers/Jobs</Text>
                    <Text variant="p">Partnerships</Text>
                </div>
                <div id='address'>
                    <Text variant="h2">Address</Text>
                    <Text variant="p">Email: info@flavoredcoffee.com</Text>
                    <Text variant="p">Tel: 012 345 6789</Text>
                    <Text variant="p">Website: mjscoffeeshop.netlify.app</Text>
                </div>
            </div>
        </div>
    )
}
