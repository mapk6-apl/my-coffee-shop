import React from 'react'
import coffeeMini from '../../assets/coffee-mini-icon.png'
import latteMini from '../../assets/latte-mini-icon.png'
import teaMini from '../../assets/tea-mini-icon.png'
import beanMini from '../../assets/bean-mini-icon.png'
import americano from '../../assets/americano.png'
import cappuccino from '../../assets/coffee-teddy.png'
import cart from '../../assets/shopping-cart.png'
import like from '../../assets/heart.png'
import coffeeBeans from '../../assets/coffee-and-beans.png'
import backArrow from '../../assets/left.png'
import { Text } from '../Text/Text'
import home from '../../assets/home.png'
import profile from '../../assets/people.png'
import hamburger from '../../assets/text-align.png'
import coffeeSingleHeart from '../../assets/coffee-single-heart2.png'
import plusIcon from '../../assets/add.png'
import appStore from '../../assets/apple-logo.png'
import googlePlay from '../../assets/playstore.png'


export const Demo = () => {
    return (
        <div className='app-demo'>
            <div id='menu-container'>
                <img src={backArrow} alt="Back arrow" id='back-arrow' />
                <Text variant='h3'>Coffee</Text>
                <button type="button" id='view-menu-button-small'>View Menu</button>
                <div id='mini-icons'>
                    <div id='mini-icon'>
                        <img src={coffeeMini} alt="Mini Coffee Icon" id='coffee-mini' />
                    </div>
                    <div id='mini-icon'>
                        <img src={latteMini} alt="Mini Latte Icon" id='latte-mini' />
                    </div>
                    <div id='mini-icon'>
                        <img src={teaMini} alt="Mini Tea Icon" id='tea-mini' />
                    </div>
                    <div id='mini-icon'>
                        <img src={beanMini} alt="Mini Bean Icon" id='bean-mini' />
                    </div>
                </div>

                <div className='learn-more-content-2'>
                    <div id='americano-container-2'>
                        <img src={americano} alt='Americano Info' id='americano2' />
                        <Text variant='h3'>Americano</Text>
                        <Text variant='p'>100% Natural Arabica or Robusta, 30 ml cup</Text>
                        <div className='two-icons-bottom-2'>
                            <img src={cart} alt='Shopping Cart Icon' className='shopping-cart-2' />
                            <img src={like} alt='Like or Heart Icon' className='like-2' />
                        </div>
                        <div className='price-2'>
                            <button type="button">$2.50</button>
                        </div>
                    </div>

                    <div id='cappuccino-container-2'>
                        <img src={cappuccino} alt='Cappuccino Info' id='cappuccino-2' />
                        <Text variant='h3'>Cappuccino</Text>
                        <Text variant='p'>Coffee 50%, milk 50%, 280ml</Text>
                        <div className='two-icons-bottom-3'>
                            <img src={cart} alt='Shopping Cart Icon' className='shopping-cart-3' />
                            <img src={like} alt='Like or Heart Icon' className='like-3' />
                        </div>
                        <div className='price-2'>
                            <button type="button">$2.50</button>
                        </div>
                    </div>
                </div>

                <div className='more-info-2'>
                    <Text variant='h3'>Moccaccino</Text>
                    <Text variant='p'>Mix with Coffee 30%, milk 50%, Water 20%, 280ml + foam</Text>
                </div>

                <div id='coffee-spilled-beans-2'>
                    <img src={coffeeBeans} alt='Coffee with Beans Spilled' />
                </div>

                <div id='buttons-container'>
                    <a href="#"><img src={home} alt='Home Icon' className='single-bottom-icon' /></a>
                    <a href="#"><img src={cart} alt='Cart Icon' className='single-bottom-icon' /></a>
                    <a href="#"><img src={profile} alt='Profile Icon' className='single-bottom-icon' /></a>
                    <a href="#"><img src={hamburger} alt='Hamburger Menu Icon' className='single-bottom-icon' /></a>
                </div>
            </div>


            <div id='big-menu-container'>
                <img src={backArrow} alt="Back arrow" id='back-arrow' />
                <img src={coffeeSingleHeart} alt='Coffee With one Heart' id='coffee-one-heart' />
                <div id='big-menu-text'>
                    <Text variant='h3'>Latte Grand</Text>
                    <Text variant='p'>Our Grande Latte is a 473ml espresso beverage made with 2 shots of espresso and approximately 12 to 14 ounces of steamed milk and a light layer of foam.
                        Expertly crafted for a smooth, velvety texture, this classic cafe favorite delivers a comforting warmth and a perfectly balanced espresso flavor in every single sip.
                    </Text>
                </div>
                <div id='big-menu-text-2'>
                    <Text variant='p'>Total Price</Text>
                </div>
                <div id='total-price'>
                    <Text variant='p'>$3.50</Text>
                    <img src={like} alt='Like or Heart Icon' className='like' />
                    <div id='add-to-cart-section'>
                        <button type="button">Add to Cart</button>
                        <img src={plusIcon} alt='Add Icon' className='add-icon' />
                    </div>
                </div>
            </div>

            <div id='app-availability'>
                <Text variant='h2'>App is Available</Text>
                <Text variant='p'>Our app is available for download on Apple's App Store and Google's Play Store.
                    Simply tap the links below to download the app instantly, create your profile, and start earning loyalty rewards today.
                </Text>
                <div id='app-download'>
                    <img src={appStore} alt='Apple Icon' className='apple-icon' />
                    <img src={googlePlay} alt='Google Play Store' className='google-icon' />
                </div>
            </div>
        </div>
    )
}
