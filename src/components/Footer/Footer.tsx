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
                    <Text variant="p">Pricing</Text>
                    <Text variant="p">Tracking</Text>
                    <Text variant="p">Report a Bug</Text>
                    <Text variant="p">Terms of Services</Text>
                </div>
                <div id='address'>
                    <Text variant="h2">Address</Text>
                    <Text variant="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                    <Text variant="p">Website: <a href="https://mjscoffeeshop.netlify.app">mjscoffeeshop.netlify.app</a></Text>
                </div>
            </div>
        </div>
    )
}
