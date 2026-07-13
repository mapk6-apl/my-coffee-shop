import React from 'react'
import americano from '../../assets/americano.png'
import cappuccino from '../../assets/coffee-teddy.png'
import { Text } from '../Text/Text'
import cart from '../../assets/shopping-cart.png'
import like from '../../assets/heart.png'

export const Learnmore = () => {
  return (
    <div className='learn-more-content'>
        <div id='americano-container'>
            <img src={americano} alt='Americano Info' id='americano'/>
            <Text variant='h3'>Americano</Text>
            <Text variant='p'>100% Natural Arabica or Robusta, 30 ml cup</Text>
            <div id='two-icons-bottom'>
                <img src={cart} alt='Shopping Cart Icon' className='shopping-cart'/>
                <img src={like} alt='Like or Heart Icon' className='like'/>
            </div>
            <div id='price'>
                    <button type="button">$2.50</button>
            </div>
        </div>

        <div id='cappuccino-container'>
            <img src={cappuccino} alt='Cappuccino Info' id='cappuccino'/>
            <Text variant='h3'>Cappuccino</Text>
            <Text variant='p'>Coffee 50%, milk 50%, 280ml</Text>
            <div id='two-icons-bottom'>
                <img src={cart} alt='Shopping Cart Icon' className='shopping-cart'/>
                <img src={like} alt='Like or Heart Icon' className='like'/>
            </div>
            <div id='price'>
                    <button type="button">$2.50</button>
            </div>
        </div>

        <div id='learn-more-info'>
            <Text variant='h2'>MJ's Coffee Shop</Text>
            <Text variant='p'>Welcome to our coffee shop. Having the best in town, feel free to browse through our page to learn more about us.</Text>
            <div id='learn-more'>
                    <button type="button">Learn More</button>
            </div>
        </div>
    </div>
  )
}
