import React from 'react'
import americano from '../../assets/americano.png'
import cappuccino from '../../assets/coffee-teddy.png'
import { Text } from '../Text/Text'
import cart from '../../assets/shopping-cart.png'
import like from '../../assets/heart.png'

export const Learnmore = () => {
  return (
    <div className='learn-more-content'>
        <div id='menus'>
            <div id='cofee-menu'>
                
            </div>
        </div>

        <div id='americano-container'>
            <img src={americano} alt='Americano Info' id='americano'/>
            <Text variant='h3'>Americano</Text>
            <Text variant='p'>100% Natural Arabica or Robusta, 30 ml cup</Text>
            <div id='two-icons-bottom'>
                <img src={cart} alt='Shopping Cart Icon' id='shopping-cart'/>
                <img src={like} alt='Like or Heart Icon' id='like'/>
            </div>
            <div id='price'>
                    <button type="button">$2.50</button>
                </div>
        </div>
    </div>
  )
}

/*
<div id='cappuccino'>
<img src={cappuccino} alt='Cappuccino Info' id='cappuccino' />
</div>
*/