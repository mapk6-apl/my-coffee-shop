import React from 'react'
import { Text } from '../Text/Text'
import coffeeTwoHearts from '../../assets/coffee-two-hearts.png'
import coffeeMini from '../../assets/coffee-mini-icon.png'
import latteMini from '../../assets/latte-mini-icon.png'
import teaMini from '../../assets/tea-mini-icon.png'
import beanMini from '../../assets/bean-mini-icon.png'

export const Intro = () => {
    return (
        <div className='intro-content'>
            <div id='left-content'>
                <Text variant="h1">Coffee</Text>
                <Text variant="h1">The Best For You</Text>

                <div id='button'>
                    <button type="button">View Menu</button>
                </div>

                <div id='mini-icons'>
                    <div id='single-icon'>
                        <img src={coffeeMini} alt="Mini Coffee Icon" id='coffee-mini' />
                    </div>
                    <div id='single-icon'>
                        <img src={latteMini} alt="Mini Latte Icon" id='latte-mini' />
                    </div>
                    <div id='single-icon'>
                        <img src={teaMini} alt="Mini Tea Icon" id='tea-mini' />
                    </div>
                    <div id='single-icon'>
                        <img src={beanMini} alt="Mini Bean Icon" id='bean-mini' />
                    </div>
                </div>
            </div>
            <div id='two-heart-coffee-image'>
                <img src={coffeeTwoHearts} alt="Coffee With Two Hearts" />
            </div>
        </div>

    )
}
